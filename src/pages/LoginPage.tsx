import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LogIn, AlertCircle, Sparkles, Star } from "lucide-react";
import CosmicBackground from "@/components/CosmicBackground";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    if (login(username, password)) {
      navigate("/home");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative" style={{ background: "var(--gradient-hero)" }}>
      <CosmicBackground />

      {/* Orbiting decorations */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative h-[400px] w-[400px]">
          <div className="absolute animate-orbit" style={{ animationDuration: "20s" }}>
            <Star className="h-4 w-4 text-primary/30" />
          </div>
          <div className="absolute animate-orbit" style={{ animationDuration: "25s", animationDelay: "-8s" }}>
            <Sparkles className="h-3 w-3 text-accent/30" />
          </div>
          <div className="absolute animate-orbit" style={{ animationDuration: "30s", animationDelay: "-15s" }}>
            <Star className="h-3 w-3 text-info/30" />
          </div>
        </div>
      </div>

      <Card className="w-full max-w-[400px] border-0 rounded-3xl cosmic-glass-strong relative z-10 overflow-hidden animate-fade-in">
        {/* Top gradient strip */}
        <div className="h-1.5 gradient-cosmic" />

        <CardHeader className="text-center space-y-5 pt-10 pb-3 px-8">
          {/* Logo */}
          <div className="mx-auto relative">
            <div className="absolute inset-0 rounded-3xl gradient-cosmic opacity-20 blur-xl scale-125 animate-pulse-glow" />
            <div className="relative h-20 w-20 mx-auto rounded-3xl gradient-cosmic p-0.5 shadow-glow-purple">
              <div className="h-full w-full rounded-[22px] bg-white flex items-center justify-center">
                <img src="/marsoma-logo.png" alt="MaRSoMa Logo" className="h-14 w-auto" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold">
              مرحباً بك في{" "}
              <span className="gradient-text" style={{ backgroundSize: "200% 200%", animation: "gradient-flow 4s ease infinite" }}>
                MaRSoMa
              </span>
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              ادخل بياناتك للوصول إلى منصة التعلم
            </p>
          </div>
        </CardHeader>

        <CardContent className="px-8 pb-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-bold text-foreground/80">
                اسم المستخدم
              </Label>
              <div className="relative">
                <Input
                  id="username"
                  type="text"
                  placeholder="أدخل اسم المستخدم"
                  value={username}
                  onChange={(e) => { setUsername(e.target.value); setError(false); }}
                  className="rounded-xl h-12 bg-muted/30 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/40"
                  dir="ltr"
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-bold text-foreground/80">
                كلمة المرور
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                className="rounded-xl h-12 bg-muted/30 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/40"
                dir="ltr"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/5 border border-destructive/20 rounded-xl px-4 py-3 animate-fade-in">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span className="font-medium">اسم المستخدم أو كلمة المرور غير صحيحة</span>
              </div>
            )}

            <Button
              type="submit"
              className="w-full rounded-xl h-12 gradient-cosmic text-white font-bold gap-2 text-base shadow-glow-purple hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              style={{ backgroundSize: "200% 200%", animation: "gradient-flow 4s ease infinite" }}
            >
              <LogIn className="h-4.5 w-4.5" />
              تسجيل الدخول
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
