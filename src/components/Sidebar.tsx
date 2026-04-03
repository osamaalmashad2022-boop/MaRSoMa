import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap, LayoutDashboard, Users, LogOut, Sparkles, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "الرئيسية", icon: LayoutDashboard, href: "/home" },
  { label: "فريق العمل", icon: Users, href: "/team" },
];

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on navigation (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 right-4 z-40 p-2.5 rounded-xl cosmic-glass-strong text-primary shadow-glow-purple"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside 
        className={cn(
          "fixed top-0 right-0 h-screen w-[260px] z-50 flex flex-col cosmic-glass-strong border-l border-border/40 transition-transform duration-500 ease-out",
          !isOpen && "translate-x-full md:translate-x-0"
        )}
      >
        {/* Mobile Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 left-4 p-2 rounded-lg text-muted-foreground hover:bg-primary/10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      {/* Logo Section */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-12 w-12 rounded-2xl gradient-cosmic p-0.5 shadow-glow-purple animate-neon-pulse">
              <div className="h-full w-full rounded-[14px] bg-white flex items-center justify-center overflow-hidden">
                <img src="/marsoma-logo.png" alt="MaRSoMa" className="h-9 w-9 object-contain" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-base font-extrabold gradient-text">MaRSoMa</h1>
            <p className="text-[10px] text-muted-foreground font-medium">منصة تعلم الإنجليزية</p>
          </div>
        </div>
      </div>

      {/* User Badge */}
      <div className="mx-4 mb-4 p-3 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl gradient-cosmic flex items-center justify-center text-white text-sm font-bold shadow-sm">
            {user?.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate">{user}</p>
            <p className="text-[10px] text-muted-foreground flex items-center gap-1">
              <Sparkles className="h-2.5 w-2.5 text-primary" />
              طالب نشط
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 mb-2">
          القائمة
        </p>
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group",
                isActive
                  ? "gradient-cosmic text-white shadow-glow-purple"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              )}
            >
              <item.icon className={cn(
                "h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110",
                isActive ? "text-white" : "text-primary/60"
              )} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section — Logos + Logout */}
      <div className="p-4 space-y-3 border-t border-border/30">
        <div className="flex items-center justify-center gap-3">
          {["damietta-logo.jpg", "faculty-logo.jpg", "etd-logo.jpg"].map((logo) => (
            <img
              key={logo}
              src={new URL(`../assets/${logo}`, import.meta.url).href}
              alt=""
              className="h-8 w-8 rounded-full object-cover hover:scale-110 transition-transform duration-300 ring-2 ring-white shadow-sm"
            />
          ))}
        </div>
        <button
          onClick={logout}
          className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-xl text-sm font-semibold text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all duration-300"
        >
          <LogOut className="h-4 w-4" />
          تسجيل الخروج
        </button>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
