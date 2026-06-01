import Link from "next/link";
import { Activity, LayoutDashboard, Globe, AlertTriangle, Sliders, MessageSquare, Newspaper } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/50 bg-card/30 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-border/50">
          <Globe className="h-6 w-6 text-primary mr-2" />
          <span className="text-xl font-bold tracking-widest text-foreground">AEGIS</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <NavItem href="/command-center" icon={<LayoutDashboard />} label="Command Center" />
          <NavItem href="/copilot" icon={<MessageSquare />} label="AI Risk Copilot" />
          <NavItem href="/black-swan" icon={<AlertTriangle />} label="Black Swan Detector" />
          <NavItem href="/simulator" icon={<Sliders />} label="Scenario Simulator" />
          <NavItem href="/feed" icon={<Newspaper />} label="Market Feed" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        {children}
      </main>
    </div>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
    >
      <div className="[&>svg]:h-5 [&>svg]:w-5">{icon}</div>
      <span className="font-medium text-sm">{label}</span>
    </Link>
  );
}


