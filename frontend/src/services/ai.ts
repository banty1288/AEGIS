import { geminiPro, geminiFlash } from "@/lib/ai/gemini";

export const MarketIntelligenceAgent = {
  analyze: async (prompt: string) => {
    try {
      const result = await geminiFlash.generateContent(`
        You are an elite Market Intelligence Analyst.
        Analyze the following and return ONLY a valid JSON object matching this schema:
        { "riskScore": number, "trendAnalysis": "string", "opportunityAnalysis": "string" }
        Input: ${prompt}
      `);
      const response = await result.response;
      return JSON.parse(response.text().replace(/```json\n?|\n?```/g, ""));
    } catch (error) {
      console.error("Market Intelligence Agent Error:", error);
      return null;
    }
  }
};

export const RiskAnalystAgent = {
  evaluateScenario: async (scenario: string) => {
    try {
      const result = await geminiPro.generateContent(`
        You are an elite Risk Analyst at a top tier hedge fund.
        Evaluate the following scenario and return ONLY a valid JSON object matching this schema:
        { "executiveSummary": "string", "marketImpact": "string", "sectorExposure": ["string"], "riskAssessment": "string", "hedgingStrategy": "string" }
        Scenario: ${scenario}
      `);
      const response = await result.response;
      return JSON.parse(response.text().replace(/```json\n?|\n?```/g, ""));
    } catch (error) {
      console.error("Risk Analyst Agent Error:", error);
      return null;
    }
  }
};

export const BlackSwanAgent = {
  detect: async (events: string) => {
    try {
      const result = await geminiPro.generateContent(`
        You are a Black Swan Detection AI.
        Evaluate the following global events and return ONLY a valid JSON object matching this schema:
        { "probabilityScore": number, "severityLevel": "Low" | "Medium" | "High" | "Critical", "recommendedActions": ["string"] }
        Events: ${events}
      `);
      const response = await result.response;
      return JSON.parse(response.text().replace(/```json\n?|\n?```/g, ""));
    } catch (error) {
      console.error("Black Swan Agent Error:", error);
      return null;
    }
  }
};

export const PortfolioAnalystAgent = {
  analyzeExposure: async (portfolioData: string) => {
    try {
      const result = await geminiFlash.generateContent(`
        You are a Portfolio Analyst.
        Analyze the following portfolio data and return ONLY a valid JSON object matching this schema:
        { "varAnalysis": "string", "diversificationScore": number, "riskAssessment": "string", "suggestedRebalancing": ["string"] }
        Portfolio: ${portfolioData}
      `);
      const response = await result.response;
      return JSON.parse(response.text().replace(/```json\n?|\n?```/g, ""));
    } catch (error) {
      console.error("Portfolio Analyst Agent Error:", error);
      return null;
    }
  }
};
