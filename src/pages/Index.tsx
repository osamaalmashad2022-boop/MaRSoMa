import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stagesMeta, allStages } from "@/data/stages";
import { GraduationCap, ArrowLeft, Lock, Star, BookOpen, Sparkles, Heart, TrendingUp, Brain, Layers, Trophy, Target, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Sidebar from "@/components/Sidebar";
import CosmicBackground from "@/components/CosmicBackground";
import CosmicAvatar from "@/components/CosmicAvatar";

const supervisors = [
  { name: "أ. د/ محمد شمة" },
  { name: "م/ غادة متولي" },
];

const stageColors = [
  { border: "neon-border-purple", glow: "hover:shadow-glow-purple", gradient: "gradient-cosmic", iconBg: "bg-primary/10 text-primary", tag: "bg-primary/10 text-primary" },
  { border: "neon-border-cyan", glow: "hover:shadow-glow-cyan", gradient: "gradient-ocean", iconBg: "bg-accent/10 text-accent", tag: "bg-accent/10 text-accent" },
  { border: "neon-border-blue", glow: "hover:shadow-glow-blue", gradient: "gradient-aurora", iconBg: "bg-info/10 text-info", tag: "bg-info/10 text-info" },
];

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame: number;
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return <>{suffix}{count}</>;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CosmicBackground />
      <Sidebar />

      {/* Main Content — with sidebar offset */}
      <div className="mr-[260px]">

        {/* ===== HERO — Bento Grid Layout ===== */}
        <section className="relative px-6 pt-8 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-12 gap-4 auto-rows-auto">

              {/* ── Main Welcome Card (spans 8 cols) ── */}
              <AnimatedSection animation="glow-in" className="col-span-12 lg:col-span-8">
                <div className="relative rounded-3xl overflow-hidden cosmic-glass h-full min-h-[280px] p-8 flex flex-col justify-between">
                  <div className="absolute top-0 left-0 right-0 h-1.5 gradient-cosmic" />
                  {/* Decorative orbits */}
                  <div className="absolute top-6 left-6 opacity-20">
                    <div className="h-32 w-32 rounded-full border border-primary/30 border-dashed animate-[spin_30s_linear_infinite]" />
                  </div>
                  <div className="absolute bottom-4 right-8 opacity-15">
                    <div className="h-20 w-20 rounded-full border border-accent/30 border-dashed animate-[spin_20s_linear_infinite_reverse]" />
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div
                      className="inline-flex items-center gap-2 gradient-cosmic text-white px-5 py-2 rounded-full text-xs font-bold shadow-glow-purple"
                      style={{ backgroundSize: "200% 200%", animation: "gradient-flow 4s ease infinite" }}
                    >
                      <Lightbulb className="h-3.5 w-3.5" /> منصة MaRSoMa التعليمية
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.25]">
                      أتقن الإنجليزية
                      <br />
                      <span className="gradient-text" style={{ backgroundSize: "200% 200%", animation: "gradient-flow 3s ease infinite" }}>
                        بذكاء وإبداع ✨
                      </span>
                    </h1>
                    <p className="text-muted-foreground max-w-lg text-sm leading-relaxed">
                      دروس تفاعلية، بطاقات ذكية، واختبارات فورية مصممة خصيصاً لتفوقك الدراسي.
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-3 pt-3">
                    <a href="#stages" className="inline-flex items-center gap-2 gradient-cosmic text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:shadow-glow-purple hover:scale-[1.03] active:scale-95 transition-all">
                      <GraduationCap className="h-4 w-4" /> استكشف المراحل
                    </a>
                    <a href="#team" className="inline-flex items-center gap-2 cosmic-glass-subtle text-foreground px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary/5 transition-all">
                      <Heart className="h-4 w-4 text-primary" /> تعرف علينا
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* ── Logo Card (spans 4 cols) ── */}
              <AnimatedSection animation="zoom" delay={100} className="col-span-12 lg:col-span-4">
                <div className="relative rounded-3xl overflow-hidden cosmic-glass h-full min-h-[280px] flex items-center justify-center p-6">
                  <div className="absolute inset-0 opacity-5 cosmic-dot-pattern" />
                  {/* Orbiting rings */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-48 w-48 rounded-full border border-primary/10 border-dashed animate-[spin_25s_linear_infinite]" />
                    <div className="absolute h-36 w-36 rounded-full border border-accent/10 border-dashed animate-[spin_18s_linear_infinite_reverse]" />
                    <div className="absolute h-24 w-24 rounded-full border border-info/10 border-dashed animate-[spin_12s_linear_infinite]" />
                  </div>
                  <div className="relative animate-float">
                    <div className="absolute inset-0 rounded-3xl gradient-cosmic opacity-15 blur-2xl scale-150" />
                    <div className="relative h-28 w-28 rounded-3xl gradient-cosmic p-1 shadow-glow-purple animate-neon-pulse">
                      <div className="h-full w-full rounded-[20px] bg-white flex items-center justify-center">
                        <img src="/marsoma-logo.png" alt="MaRSoMa Logo" className="h-20 w-auto drop-shadow-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* ── Stat Cards (3 cards, each spans 4 cols) ── */}
              {[
                { icon: BookOpen, label: "وحدة تعليمية", value: 18, gradient: "gradient-cosmic", glow: "shadow-glow-purple", border: "neon-border-purple" },
                { icon: Sparkles, label: "درس تفاعلي", value: 75, suffix: "+", gradient: "gradient-emerald", glow: "shadow-glow-cyan", border: "neon-border-cyan" },
                { icon: TrendingUp, label: "مرحلة دراسية", value: 3, gradient: "gradient-ocean", glow: "shadow-glow-blue", border: "neon-border-blue" },
              ].map((stat, i) => (
                <AnimatedSection key={stat.label} animation="slide-up" delay={200 + i * 100} className="col-span-12 sm:col-span-4">
                  <div className={`group relative rounded-2xl cosmic-glass p-5 hover-lift cursor-default transition-all duration-500 ${stat.border}`}>
                    <div className="flex items-center gap-4">
                      <div className={`${stat.gradient} p-3 rounded-xl text-white ${stat.glow} group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-3xl font-extrabold tracking-tight font-mono-num">
                          <CountUp target={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TEAM SECTION ===== */}
        <section id="team" className="relative px-6 pb-12 scroll-mt-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <AnimatedSection animation="fade-up" className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold">
                <Heart className="h-3.5 w-3.5 animate-pulse" /> من نحن
              </div>
              <h2 className="text-3xl font-extrabold">فريق العمل</h2>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">القائمون على تطوير المنصة التعليمية</p>
            </AnimatedSection>

            {/* Team Members — Cosmic Avatars */}
            <div className="grid gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
              {[
                { name: "رحمه جمال عيسى", seed: 0, role: "فريق التطوير", icon: Brain },
                { name: "سما محمد غنام", seed: 1, role: "فريق التطوير", icon: Layers },
                { name: "منه الله وليد الكناني", seed: 2, role: "فريق التطوير", icon: Target },
              ].map((m, i) => (
                <AnimatedSection
                  key={m.name}
                  animation="zoom"
                  delay={i * 150}
                  className="group flex flex-col items-center gap-4 cosmic-glass rounded-3xl p-7 hover-lift transition-all duration-500 neon-border-purple"
                >
                  {/* Cosmic generative avatar */}
                  <div className="relative group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <CosmicAvatar seed={m.seed} size={72} />
                    {/* Floating role icon */}
                    <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-lg gradient-cosmic text-white flex items-center justify-center shadow-sm">
                      <m.icon className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="text-center space-y-1.5">
                    <p className="font-extrabold text-sm">{m.name}</p>
                    <Badge className="gradient-cosmic text-white border-0 text-[10px] font-bold shadow-sm px-3">
                      {m.role}
                    </Badge>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Supervisors */}
            <AnimatedSection animation="fade-up" className="text-center pt-6">
              <h3 className="text-lg font-bold text-muted-foreground uppercase tracking-widest">تحت إشراف</h3>
            </AnimatedSection>
            <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
              {supervisors.map((s, i) => (
                <AnimatedSection
                  key={s.name}
                  animation="fade-left"
                  delay={i * 200}
                  className="group flex items-center gap-4 cosmic-glass rounded-2xl p-5 hover-lift transition-all duration-500 neon-border-cyan"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-emerald text-white shadow-glow-cyan group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <p className="font-bold text-base">{s.name}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STAGES SECTION ===== */}
        <section id="stages" className="relative px-6 pb-16 scroll-mt-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <AnimatedSection animation="fade-up" className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-bold">
                <GraduationCap className="h-3.5 w-3.5" /> المراحل الدراسية
              </div>
              <h2 className="text-3xl font-extrabold">اختر مرحلتك</h2>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stagesMeta.map((stage, si) => {
                const data = allStages.find((s) => s.id === stage.id);
                const unitCount = data?.units.length ?? 0;
                const colors = stageColors[si % stageColors.length];

                return (
                  <AnimatedSection key={stage.id} animation="zoom" delay={si * 150}>
                    <Card
                      className={`group relative overflow-hidden border-0 rounded-3xl cosmic-glass transition-all duration-500 ${
                        stage.available
                          ? `hover-lift ${colors.glow} cursor-pointer ${colors.border}`
                          : "opacity-50 grayscale"
                      }`}
                    >
                      {/* Gradient header band */}
                      <div className={`absolute top-0 inset-x-0 h-1.5 ${colors.gradient} group-hover:h-2.5 transition-all duration-500`} />

                      <CardHeader className="pt-7">
                        <div className="flex items-center justify-between">
                          <div className={`h-12 w-12 rounded-2xl ${colors.iconBg} flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            {stage.emoji}
                          </div>
                          {!stage.available && <Lock className="h-4 w-4 text-muted-foreground" />}
                        </div>
                        <CardTitle className="text-xl font-extrabold" dir="ltr">{stage.name}</CardTitle>
                        <CardDescription dir="ltr" className="font-medium">{stage.subject}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3 pb-6">
                        {stage.available ? (
                          <>
                            <Badge className={`${colors.tag} border-0 font-bold text-xs`}>
                              {unitCount} وحدة متوفرة
                            </Badge>
                            <div className="space-y-2">
                              {data?.units.map((unit, ui) => (
                                <Button
                                  key={unit.id}
                                  variant="outline"
                                  className="w-full h-auto min-h-[2.75rem] py-2.5 px-4 justify-between rounded-xl border-border/40 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group/btn"
                                  style={{ transitionDelay: `${ui * 30}ms` }}
                                  asChild
                                >
                                  <Link to={`/stage/${stage.id}/unit/${unit.id}`} className="flex items-center gap-3">
                                    <span className="flex items-center gap-2 flex-1 min-w-0">
                                      <span className="h-6 w-6 rounded-lg bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 font-mono-num">
                                        {ui + 1}
                                      </span>
                                      <span dir="ltr" className="font-medium whitespace-normal text-start leading-snug text-sm">{unit.title}</span>
                                    </span>
                                    <ArrowLeft className="h-4 w-4 shrink-0 text-primary/50 group-hover/btn:text-primary group-hover/btn:-translate-x-1 transition-all" />
                                  </Link>
                                </Button>
                              ))}
                            </div>
                          </>
                        ) : (
                          <p className="text-sm text-muted-foreground font-medium">قريبًا…</p>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <AnimatedSection as="section" animation="fade-up">
          <footer className="border-t bg-white/50 py-10">
            <div className="max-w-5xl mx-auto px-6 text-center space-y-3">
              <img src="/marsoma-logo.png" alt="MaRSoMa" width={80} height={80} loading="lazy" className="mx-auto h-10 w-auto opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-500" />
              <p className="text-sm text-muted-foreground font-medium">
                MaRSoMa — منصة تعلم الإنجليزية
              </p>
              <p className="text-xs text-muted-foreground/60">
                © {new Date().getFullYear()} جميع الحقوق محفوظة
              </p>
            </div>
          </footer>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Index;
