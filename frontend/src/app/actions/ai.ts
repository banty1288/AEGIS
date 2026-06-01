"use server";

import { RiskAnalystAgent, MarketIntelligenceAgent, BlackSwanAgent, PortfolioAnalystAgent } from "@/services/ai";

export async function evaluateScenarioAction(scenario: string) {
  try {
    const report = await RiskAnalystAgent.evaluateScenario(scenario);
    return { success: true, report };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to evaluate scenario" };
  }
}

export async function detectBlackSwansAction(events: string) {
  try {
    const report = await BlackSwanAgent.detect(events);
    return { success: true, report };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to detect black swans" };
  }
}

export async function analyzeMarketAction(prompt: string) {
  try {
    const report = await MarketIntelligenceAgent.analyze(prompt);
    return { success: true, report };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to analyze market" };
  }
}
