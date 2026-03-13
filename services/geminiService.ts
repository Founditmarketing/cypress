import { GoogleGenAI } from "@google/genai";
import { Trailer } from "../types";

// Initialize the API client
// Note: In a production environment, ensure your API key is restricted or use a backend proxy.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAssistantResponse = async (
  history: { role: string; parts: { text: string }[] }[], 
  userMessage: string,
  currentInventory: Trailer[]
) => {
  if (!process.env.API_KEY) {
    return "I'm sorry, I'm currently offline (API Key missing). Please call us at (281) 373-4905.";
  }

  // Create a context string based on CURRENT (Dynamic) inventory
  const inventoryContext = currentInventory.map(item => 
    `- ${item.name} (${item.sku}): ${item.category}, Price: $${item.price}, Status: ${item.status}`
  ).join('\n');

  const systemInstruction = `
    You are "Tex", the intelligent sales assistant for Cypress Big Tex Trailers.
    Your goal is to help customers find the perfect trailer for their needs.
    
    You have access to the following LIVE INVENTORY (Real-time data):
    ${inventoryContext}
    
    GUIDELINES:
    1. Be helpful, rugged, and professional. Use a tone suitable for contractors and serious buyers.
    2. If a user asks for a trailer we have, recommend it by name and price.
    3. If they need something we don't have, suggest the closest alternative or suggest they call for a custom order.
    4. Ask clarifying questions if the user is vague (e.g., "What will you be hauling?" or "What is your truck's towing capacity?").
    5. Always emphasize "Big Tex" quality.
    6. Keep responses concise (under 100 words unless technical details are requested).
    7. If asked about financing, mention we work with Sheffield Financial and Clicklease.
  `;

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to the garage mainframe. Please try again or give us a call.";
  }
};