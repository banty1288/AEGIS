"use client";

import { Card } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  { title: "Strait of Hormuz Blockade", prob: 12, impact: "Critical", sectors: ["Energy", "Logistics"], desc: "Escalating tensions threatening 20% of global oil supply.", color: "text-red-500", bg: "bg-red-500/10" },
  { title: "Brazilian Drought", prob: 45, impact: "High", sectors: ["Coffee", "Sugar"], desc: "Historic low rainfall in Minas Gerais affecting crop yields.", color: "text-orange-500", bg: "bg-orange-500/10" },
  { title: "Taiwan Semiconductor Disruption", prob: 8, impact: "Critical", sectors: ["Tech", "Auto"], desc: "Potential supply chain shock for global semiconductor market.", color: "text-red-500", bg: "bg-red-500/10" },
  { title: "European Gas Shortage", prob: 25, impact: "Medium", sectors: ["Utilities"], desc: "Slower than expected inventory builds ahead of winter.", color: "text-yellow-500", bg: "bg-yellow-500/10" },
];

export default function BlackSwanPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-red-500/10 rounded-xl">
          <ShieldAlert className="h-8 w-8 text-red-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Black Swan Detector</h1>
          <p className="text-muted-foreground mt-1">AI-driven identification of rare, high-impact macro events.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:border-red-500/30 transition-all group overflow-hidden relative">
              <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl -z-10 ${ev.bg} opacity-0 group-hover:opacity-50 transition-opacity`} />
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{ev.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${ev.bg} ${ev.color} border border-current/20`}>
                  {ev.impact} RISK
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm mb-6 h-10">{ev.desc}</p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                <div>
                  <span className="block text-xs text-muted-foreground mb-1">AI Probability</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">{ev.prob}%</span>
                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${ev.bg.replace('/10', '')}`} style={{ width: `${ev.prob}%` }} />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground mb-1">Exposed Sectors</span>
                  <div className="flex gap-1 flex-wrap">
                    {ev.sectors.map(s => (
                      <span key={s} className="text-xs bg-muted px-2 py-0.5 rounded-md text-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


