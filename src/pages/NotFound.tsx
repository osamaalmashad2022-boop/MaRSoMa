import { Link } from "react-router-dom";
import { Home, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import CosmicBackground from "@/components/CosmicBackground";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative" style={{ background: "var(--gradient-hero)" }}>
      <CosmicBackground />

      <div className="relative z-10 text-center space-y-8 animate-fade-in">
        {/* Big 404 */}
        <div className="relative">
          <h1
            className="text-[120px] sm:text-[180px] font-extrabold leading-none gradient-text select-none"
            style={{ backgroundSize: "200% 200%", animation: "gradient-flow 4s ease infinite" }}
          >
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Rocket className="h-12 w-12 text-primary/20 animate-float" />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold">تائه في الفضاء! 🪐</h2>
          <p className="text-muted-foreground max-w-sm mx-auto text-sm">
            الصفحة التي تبحث عنها غير موجودة. دعنا نعيدك إلى المسار الصحيح.
          </p>
        </div>

        <Button asChild size="lg" className="rounded-xl gradient-cosmic text-white font-bold gap-2 shadow-glow-purple hover:shadow-elevated transition-all">
          <Link to="/home">
            <Home className="h-4 w-4" />
            العودة للرئيسية
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
