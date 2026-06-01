"use client";

import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Activity, AlertTriangle } from "lucide-react";

const mockData = [
  { time: "09:00", price: 82.1 },
  { time: "10:00", price: 82.5 },
  { time: "11:00", price: 81.8 },
  { time: "12:00", price: 83.2 },
  { time: "13:00", price: 82.9 },
  { time: "14:00", price: 84.1 },
  { time: "15:00", price: 85.0 },
];

const commodities = [
  { name: "Crude Oil", price: "$85.00", trend: "+3.5%", risk: "High", sentiment: "Bullish", color: "#0ea5e9" },
  { name: "Gold", price: "$2,350.10", trend: "+1.2%", risk: "Low", sentiment: "Neutral", color: "#10b981" },
  { name: "Natural Gas", price: "$2.95", trend: "-0.8%", risk: "Medium", sentiment: "Bearish", color: "#f43f5e" },
  { name: "Copper", price: "$4.12", trend: "+2.1%", risk: "Medium", sentiment: "Bullish", color: "#f59e0b" },
];

export default function CommandCenterPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Commodity Command Center</h1>
          <p className="text-muted-foreground mt-1">Real-time tracking, volatility, and AI sentiment scores.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card/50 px-3 py-1.5 rounded-full border border-border/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Live Market Data
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {commodities.map((item, i) => (
          <Card key={i} className="p-5 bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-colors">
            <h3 className="font-semibold text-muted-foreground">{item.name}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">{item.price}</span>
              <span className={`text-sm font-medium ${item.trend.startsWith('+') ? 'text-accent' : 'text-destructive'}`}>
                {item.trend}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-border/50 grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground text-xs block mb-1">AI Risk</span>
                <span className="font-medium flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" /> {item.risk}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground text-xs block mb-1">Sentiment</span>
                <span className="font-medium flex items-center gap-1">
                  <Activity className="h-3 w-3" /> {item.sentiment}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
        <h3 className="font-semibold mb-6 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Crude Oil Volatility Index
        </h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="time" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val}`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
                itemStyle={{ color: '#0ea5e9' }}
              />
              <Area type="monotone" dataKey="price" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorPrice)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}


