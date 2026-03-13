import { Trailer } from "../types";

export const generateAssistantResponse = async (
  history: { role: string; parts: { text: string }[] }[], 
  userMessage: string,
  currentInventory: Trailer[]
) => {
  // Create a context string based on CURRENT (Dynamic) inventory
  const inventoryContext = currentInventory.map(item => 
    `- ${item.name} (${item.sku}): ${item.category}, Price: $${item.price}, Status: ${item.status}`
  ).join('\n');

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        history: history.map(h => ({
          role: h.role,
          parts: h.parts
        })),
        userMessage,
        inventoryContext
      }),
    });

    if (!response.ok) {
        console.error("Server API returned an error:", response.status);
        return "I'm having a little trouble connecting to the garage mainframe right now. Please try again or give us a call.";
    }

    const data = await response.json();
    return data.text || "Sorry, I couldn't reach the system.";

  } catch (error) {
    console.error("Gemini API proxy error:", error);
    return "I'm having a little trouble connecting to the garage mainframe. Please try again or give us a call.";
  }
};