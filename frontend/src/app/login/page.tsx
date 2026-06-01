"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { user, signInWithGoogle, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push("/command-center");
    }
  }, [user, loading, router]);

  if (loading) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[150px] rounded-full pointer-events-none" />

      <Card className="w-full max-w-md p-8 bg-card/50 backdrop-blur-md border-border/50 text-center relative z-10 shadow-2xl">
        <div className="flex justify-center mb-6">
          <Globe className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">AEGIS Auth</h1>
        <p className="text-muted-foreground mb-8">Sign in to access institutional-grade commodity intelligence.</p>

        <Button 
          size="lg" 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12"
          onClick={signInWithGoogle}
        >
          <LogIn className="mr-2 h-5 w-5" /> Sign in with Google
        </Button>
        <p className="text-xs text-muted-foreground mt-6 text-left">
          By signing in, you agree to our Terms of Service and strictly confidential institutional API usage policies.
        </p>
      </Card>
    </div>
  );
}
