"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Activity } from "lucide-react";
import { evaluateScenarioAction } from "@/app/actions/ai";

export default function CopilotPage() {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string; report?: any }[]>([
    { role: "ai", content: "I am AEGIS Risk Analyst. How can I assist you with market scenarios or hedging strategies today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    const res = await evaluateScenarioAction(userMsg);
    
    if (res.success && res.report) {
      setMessages(prev => [...prev, {
        role: "ai",
        content: "Here is my risk assessment for the requested scenario.",
        report: res.report
      }]);
    } else {
      setMessages(prev => [...prev, {
        role: "ai",
        content: "I encountered an error generating the report. Please ensure your Gemini API key is configured correctly and you have internet access. " + (res.error || ""),
      }]);
    }
    setLoading(false);
  };

  return (
    <div className="h-full flex flex-col p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">AI Risk Copilot</h1>
        <p className="text-muted-foreground mt-1">Institutional-grade scenario analysis and hedging recommendations.</p>
      </div>

      <Card className="flex-1 flex flex-col bg-card/30 backdrop-blur-sm border-border/50 overflow-hidden">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  {msg.role === 'ai' ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                </div>
                <div className={`max-w-[80%] ${msg.role === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted/50 text-foreground'}`}>
                    {msg.content}
                  </div>
                  {msg.report && (
                    <Card className="mt-3 p-4 bg-card border-border/50 space-y-4 text-left shadow-lg">
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <Activity className="h-5 w-5" /> AI Analyst Report
                      </div>
                      <div>
                        <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Executive Summary</h4>
                        <p className="text-sm">{msg.report.executiveSummary}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Market Impact</h4>
                          <p className="text-sm">{msg.report.marketImpact}</p>
                        </div>
                        <div>
                          <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Risk Assessment</h4>
                          <p className="text-sm">{msg.report.riskAssessment}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Sector Exposure</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {msg.report.sectorExposure.map((sector: string, j: number) => (
                            <span key={j} className="text-xs px-2 py-1 bg-destructive/10 text-destructive rounded-full border border-destructive/20">
                              {sector}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-3 bg-accent/10 border border-accent/20 rounded-md">
                        <h4 className="text-xs text-accent uppercase tracking-wider mb-1">Recommended Hedging Strategy</h4>
                        <p className="text-sm text-foreground">{msg.report.hedgingStrategy}</p>
                      </div>
                    </Card>
                  )}
                </div>
              </motion.div>
            ))}
            {loading && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <Bot className="h-5 w-5 animate-pulse" />
                </div>
                <div className="px-4 py-2 rounded-lg bg-muted/50 text-muted-foreground animate-pulse">
                  Analyzing market vectors...
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="p-4 border-t border-border/50 bg-background/50 backdrop-blur-md">
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., What happens if OPEC cuts production by 15%?"
              className="flex-1 bg-background/50 border-border/50 focus-visible:ring-primary"
            />
            <Button type="submit" disabled={loading || !input.trim()} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}


