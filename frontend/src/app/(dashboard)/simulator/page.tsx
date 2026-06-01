"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Activity, Sliders, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SimulatorPage() {
  const [oil, setOil] = useState([0]);
  const [rates, setRates] = useState([0]);
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSimulate = () => {
    setSimulating(true);
    setTimeout(() => {
      setResult({
        portfolioImpact: oil[0] > 10 ? "-2.4%" : "+1.1%",
        winners: ["Energy Equities", "Defense", "Gold"],
        losers: ["Airlines", "Consumer Discretionary", "Retail"],
      });
      setSimulating(false);
    }, 1500);
  };

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Scenario Simulator</h1>
        <p className="text-muted-foreground mt-1">Stress-test portfolios against AI-generated macro shocks.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <Card className="lg:col-span-4 p-6 bg-card/30 backdrop-blur-sm border-border/50 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-6 text-lg font-semibold">
            <Sliders className="h-5 w-5 text-primary" /> Market Variables
          </div>
          
          <div className="space-y-8 flex-1">
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium">Crude Oil Shock</span>
                <span className={`text-sm font-bold ${oil[0] > 0 ? 'text-accent' : oil[0] < 0 ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {oil[0] > 0 ? '+' : ''}{oil[0]}%
                </span>
              </div>
              <Slider defaultValue={[0]} max={50} min={-50} step={1} onValueChange={(val) => setOil(val as number[])} className="py-2" />
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium">Interest Rates</span>
                <span className={`text-sm font-bold ${rates[0] > 0 ? 'text-accent' : rates[0] < 0 ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {rates[0] > 0 ? '+' : ''}{rates[0]} bps
                </span>
              </div>
              <Slider defaultValue={[0]} max={100} min={-100} step={25} onValueChange={(val) => setRates(val as number[])} className="py-2" />
            </div>
          </div>

          <Button 
            className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground h-12"
            onClick={handleSimulate}
            disabled={simulating}
          >
            {simulating ? "Simulating AI Models..." : "Run Simulation"} 
          </Button>
        </Card>

        <Card className="lg:col-span-8 p-6 bg-card/30 backdrop-blur-sm border-border/50 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
          {!result && !simulating && (
            <div className="text-center text-muted-foreground">
              <Activity className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p>Adjust variables and run simulation to view AI portfolio impact.</p>
            </div>
          )}

          {simulating && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm z-10">
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
              <p className="text-primary font-medium animate-pulse">Running Monte Carlo Simulations...</p>
            </div>
          )}

          {result && !simulating && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-muted-foreground uppercase tracking-widest text-sm font-semibold mb-2">Expected Portfolio Impact</h3>
                <span className={`text-6xl font-bold ${result.portfolioImpact.startsWith('-') ? 'text-destructive' : 'text-accent'}`}>
                  {result.portfolioImpact}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
                <div>
                  <h4 className="text-accent flex items-center gap-2 mb-4 font-semibold uppercase tracking-wider text-sm">
                    <ChevronRight className="h-4 w-4" /> Expected Winners
                  </h4>
                  <ul className="space-y-2">
                    {result.winners.map((w: string) => (
                      <li key={w} className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-md text-sm">{w}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-destructive flex items-center gap-2 mb-4 font-semibold uppercase tracking-wider text-sm">
                    <ChevronRight className="h-4 w-4" /> Expected Losers
                  </h4>
                  <ul className="space-y-2">
                    {result.losers.map((l: string) => (
                      <li key={l} className="px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-md text-sm">{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </Card>
      </div>
    </div>
  );
}


