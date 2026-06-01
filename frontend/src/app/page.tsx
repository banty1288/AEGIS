"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Activity, TrendingUp, BarChart3, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const mockPrices = [
  { name: "Crude Oil (WTI)", price: 82.45, change: "+1.2%", trend: "up", symbol: "CL1!" },
  { name: "Gold", price: 2345.1, change: "+0.8%", trend: "up", symbol: "GC1!" },
  { name: "Coffee", price: 215.3, change: "-0.5%", trend: "down", symbol: "KC1!" },
  { name: "Natural Gas", price: 2.85, change: "+3.4%", trend: "up", symbol: "NG1!" },
];

export default function LandingPage() {
  const [prices, setPrices] = useState(mockPrices);

  useEffect(() => {
    // Simulate real-time price fluctuations
    const interval = setInterval(() => {
      setPrices((prev) =>
        prev.map((item) => {
          const fluctuation = (Math.random() - 0.5) * (item.price * 0.001);
          return {
            ...item,
            price: Number((item.price + fluctuation).toFixed(2)),
          };
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-border/50 bg-background/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-widest">AEGIS</span>
          </div>
          <div className="flex gap-4">
            <Link href="/command-center">
              <Button variant="ghost">Command Center</Button>
            </Link>
            <Link href="/copilot">
              <Button>Launch Platform</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-40 pb-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
              Predict Market Risks <br /> Before Markets React.
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            AI-powered commodity intelligence, risk analytics, and scenario simulations for the next generation of decision makers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/command-center">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Launch Platform <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-lg gap-2 border-border/50 hover:bg-muted">
              <Activity className="h-5 w-5" /> Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Live Widgets Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {prices.map((asset) => (
            <Card key={asset.symbol} className="bg-card/50 backdrop-blur-md border-border/50 p-6 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{asset.symbol}</p>
                  <p className="font-semibold text-lg">{asset.name}</p>
                </div>
                <div className="p-2 bg-muted rounded-md">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="flex items-end justify-between relative z-10">
                <span className="text-3xl font-bold tracking-tight">${asset.price.toFixed(2)}</span>
                <span className={`text-sm font-medium flex items-center gap-1 ${asset.trend === 'up' ? 'text-accent' : 'text-destructive'}`}>
                  {asset.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingUp className="h-4 w-4 rotate-180" />}
                  {asset.change}
                </span>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </main>
  );
}


