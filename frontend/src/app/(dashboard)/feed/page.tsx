"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Clock } from "lucide-react";

const news = [
  { time: "10 mins ago", title: "OPEC+ Unexpectedly Cuts Production by 2M Barrels", impact: "High", sector: "Energy", summary: "Surprise announcement from Vienna meeting pushes Brent crude up 4% in pre-market trading." },
  { time: "45 mins ago", title: "Federal Reserve Signals Rate Hike Pause", impact: "Medium", sector: "Macro", summary: "Powell indicates inflation is cooling faster than expected, hinting at a pause in the upcoming FOMC meeting." },
  { time: "2 hours ago", title: "Copper Inventories Hit 5-Year Low in LME", impact: "High", sector: "Metals", summary: "Stronger than expected EV manufacturing demand outpaces current mining output." },
  { time: "4 hours ago", title: "U.S. Natural Gas Exports to Europe Surge", impact: "Medium", sector: "Energy", summary: "New LNG terminals in Texas reach maximum capacity ahead of European winter." },
  { time: "5 hours ago", title: "El Niño Threatens Global Coffee Supply", impact: "Critical", sector: "Agriculture", summary: "Unprecedented weather patterns in Brazil and Vietnam expected to reduce yields by 15%." },
];

export default function FeedPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market Intelligence Feed</h1>
          <p className="text-muted-foreground mt-1">AI-curated news and impact analysis.</p>
        </div>
        <div className="p-3 bg-primary/10 rounded-xl">
          <Newspaper className="h-6 w-6 text-primary" />
        </div>
      </div>

      <div className="space-y-4">
        {news.map((item, i) => (
          <Card key={i} className="p-5 bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-colors group cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">{item.sector}</Badge>
              <span className={`text-xs font-bold uppercase tracking-wider ${item.impact === 'Critical' ? 'text-red-500' : item.impact === 'High' ? 'text-orange-500' : 'text-yellow-500'}`}>
                {item.impact} IMPACT
              </span>
              <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {item.time}
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.summary}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}


