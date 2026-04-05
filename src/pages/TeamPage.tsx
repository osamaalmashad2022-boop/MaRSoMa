import { Link } from "react-router-dom";
import { ArrowRight, Users, GraduationCap, Star, Sparkles, Heart, Brain, Layers, Target, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import CosmicBackground from "@/components/CosmicBackground";
import CosmicAvatar from "@/components/CosmicAvatar";

const supervisors = [
  { name: "أ. د/ محمد شمة", role: "إشراف أكاديمي" },
  { name: "م/ غادة متولي", role: "إشراف تقني" },
];

const teamMembers = [
  { name: "رحمه جمال عيسى", role: "عضو فريق التطوير", seed: 0, icon: Brain },
  { name: "سما محمد غنام", role: "عضو فريق التطوير", seed: 1, icon: Layers },
  { name: "منه الله وليد الكناني", role: "عضو فريق التطوير", seed: 2, icon: Target },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CosmicBackground />

      {/* Header */}
      <header className="border-b cosmic-glass-strong sticky top-0 z-10">
        <div className="container max-w-5xl mx-auto flex items-center gap-3 py-3 px-5">
          <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/5" asChild>
            <Link to="/home">
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <div className="h-9 w-9 rounded-lg gradient-cosmic p-0.5 shrink-0">
            <div className="h-full w-full rounded-[6px] bg-white flex items-center justify-center">
              <img src="/marsoma-logo.png" alt="MaRSoMa" className="h-6 w-auto" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-extrabold">فريق العمل</h1>
            <p className="text-[10px] text-muted-foreground font-medium">القائمون على تطوير المنصة</p>
          </div>
        </div>
      </header>

      <main className="container max-w-5xl mx-auto py-12 px-5 space-y-14">
        {/* Hero Banner */}
        <AnimatedSection animation="glow-in">
          <div className="relative rounded-3xl overflow-hidden cosmic-glass p-8 text-center">
            <div className="absolute top-0 left-0 right-0 h-1 gradient-cosmic" />
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 gradient-cosmic text-white px-5 py-2 rounded-full text-sm font-bold shadow-glow-purple">
                <Heart className="h-3.5 w-3.5" /> فريقنا المتميز
              </div>
              <h2 className="text-3xl font-extrabold">
                خلف كل درس...{" "}
                <span className="gradient-text">فريق مبدع</span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto text-sm">
                نعمل معاً لنقدم لك أفضل تجربة تعليمية ممكنة
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Team Members Section */}
        <section className="space-y-6">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl gradient-cosmic text-white flex items-center justify-center shadow-sm">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">فريق التطوير</h2>
                <p className="text-xs text-muted-foreground font-medium">الأعضاء المبدعون</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-3">
            {teamMembers.map((m, i) => (
              <AnimatedSection key={m.name} animation="zoom" delay={i * 150}>
                <div className="group text-center cosmic-glass rounded-3xl p-8 neon-border-purple hover-lift transition-all duration-500 space-y-4">
                  {/* Cosmic generative avatar */}
                  <div className="relative mx-auto w-max group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <CosmicAvatar seed={m.seed} size={84} />
                    {/* Floating role icon */}
                    <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-lg gradient-cosmic text-white flex items-center justify-center shadow-sm border-2 border-background">
                      <m.icon className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <p className="text-base font-extrabold">{m.name}</p>
                    <Badge className="gradient-cosmic text-white border-0 text-[10px] font-bold shadow-sm px-3">
                      {m.role}
                    </Badge>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Supervisors Section */}
        <section className="space-y-6">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl gradient-emerald text-white flex items-center justify-center shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">تحت إشراف</h2>
                <p className="text-xs text-muted-foreground font-medium">القيادة الأكاديمية للمشروع</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2">
            {supervisors.map((s, i) => (
              <AnimatedSection key={s.name} animation="fade-left" delay={i * 200}>
                <div className="group flex items-center gap-4 cosmic-glass rounded-2xl p-6 neon-border-cyan hover-lift transition-all duration-500">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl gradient-emerald text-white shadow-glow-cyan group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-lg font-extrabold">{s.name}</p>
                    <p className="text-sm text-muted-foreground font-medium flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-accent" />{s.role}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default TeamPage;
