import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY is missing from environment variables.");
    // Return a 200 with an offline message so the frontend doesn't crash, 
    // it just gracefully tells the user the chat is offline.
    return res.status(200).json({ 
      text: "I'm sorry, I'm currently offline (API Key missing on server). Please call us at (281) 373-4905." 
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Extract data from the request body
    const { history, userMessage, inventoryContext } = req.body;

    const systemInstruction = `
      You are "Tex", the intelligent sales assistant for Cypress Big Tex Trailers.
      Your goal is to help customers find the perfect trailer for their needs.
      
      You have access to the following LIVE INVENTORY (Real-time data):
      ${inventoryContext || 'No inventory data provided.'}
      
      GUIDELINES:
      1. Be helpful, rugged, and professional. Use a tone suitable for contractors and serious buyers.
      2. If a user asks for a trailer we have, recommend it by name and price.
      3. If they need something we don't have, suggest the closest alternative or suggest they call for a custom order.
      4. Ask clarifying questions if the user is vague (e.g., "What will you be hauling?" or "What is your truck's towing capacity?").
      5. Always emphasize "Big Tex" quality.
      6. Keep responses concise (under 100 words unless technical details are requested).
      7. If asked about financing, mention we work with Sheffield Financial and Clicklease.
    `;

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history || []
    });

    const result = await chat.sendMessage({ message: userMessage });
    
    return res.status(200).json({ text: result.text });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ 
      text: "I'm having a little trouble connecting to the garage mainframe. Please try again or give us a call.",
      error: error.message 
    });
  }
}
