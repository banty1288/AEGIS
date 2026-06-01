import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(apiKey);

// For complex reasoning and deep analysis
export const geminiPro = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

// For fast responses and real-time feeds
export const geminiFlash = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
