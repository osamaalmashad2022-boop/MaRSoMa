import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, BookOpen, Award, Home, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestRunner from "@/components/TestRunner";
import LessonView from "@/components/LessonView";
import { getUnit } from "@/data/stages";
import CosmicBackground from "@/components/CosmicBackground";

const UnitPage = () => {
  const { stageId, unitId } = useParams<{ stageId: string; unitId: string }>();
  const unit = getUnit(stageId!, unitId!);
  const [activeTab, setActiveTab] = useState("pretest");

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">الوحدة غير موجودة.</p>
      </div>
    );
  }

  const sharedPreTest = {
    ...unit.postTest,
    title: unit.preTest.title,
    description: unit.preTest.description,
  };

  const tabs = [
    { id: "pretest", label: "الاختبار القبلي", icon: ClipboardCheck },
    ...unit.lessons.map((lesson, i) => ({ id: lesson.id, label: `الدرس ${i + 1}`, icon: BookOpen })),
    { id: "posttest", label: "الاختبار البعدي", icon: Award },
  ];

  const currentTabIndex = tabs.findIndex((t) => t.id === activeTab);

  const goNext = () => {
    if (currentTabIndex < tabs.length - 1) setActiveTab(tabs[currentTabIndex + 1].id);
  };
  const goPrev = () => {
    if (currentTabIndex > 0) setActiveTab(tabs[currentTabIndex - 1].id);
  };

  return (
    <div className="min-h-screen bg-background">
      <CosmicBackground />

      {/* Header */}
      <header className="border-b cosmic-glass-strong sticky top-0 z-20">
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
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              {stageId?.replace(/(\d)/, " $1")}
            </p>
            <h1 className="text-lg font-extrabold truncate" dir="ltr">{unit.title}</h1>
          </div>
          <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/5" asChild>
            <Link to="/home">
              <Home className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Stepper Navigation */}
      <div className="sticky top-[64px] z-10 border-b bg-white/60 backdrop-blur-xl">
        <div className="container max-w-5xl mx-auto px-5 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            {tabs.map((tab, i) => {
              const isActive = tab.id === activeTab;
              const isPast = i < currentTabIndex;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 shrink-0 ${
                    isActive
                      ? "gradient-cosmic text-white shadow-glow-purple"
                      : isPast
                      ? "bg-success/10 text-success border border-success/20"
                      : "bg-muted/50 text-muted-foreground hover:bg-primary/5 hover:text-foreground border border-transparent"
                  }`}
                >
                  <tab.icon className="h-3.5 w-3.5" />
                  {tab.label}
                  {isPast && <Sparkles className="h-3 w-3" />}
                </button>
              );
            })}
          </div>

          {/* Progress indicators */}
          <div className="flex items-center gap-1 mt-2">
            {tabs.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full flex-1 transition-all duration-500 ${
                  i < currentTabIndex
                    ? "bg-success"
                    : i === currentTabIndex
                    ? "gradient-cosmic"
                    : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container max-w-5xl mx-auto py-8 px-5 animate-fade-in">
        {activeTab === "pretest" && <TestRunner test={sharedPreTest} />}

        {unit.lessons.map((lesson) =>
          activeTab === lesson.id ? (
            <div key={lesson.id} className="space-y-5 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl gradient-cosmic text-white flex items-center justify-center shadow-sm">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-extrabold" dir="ltr">{lesson.title}</h2>
              </div>
              <LessonView lesson={lesson} />
            </div>
          ) : null
        )}

        {activeTab === "posttest" && <TestRunner test={unit.postTest} />}

        {/* Prev / Next Navigation */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/30">
          <Button
            variant="outline"
            onClick={goPrev}
            disabled={currentTabIndex === 0}
            className="rounded-xl gap-2 font-bold hover:bg-primary/5 disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
            السابق
          </Button>
          <span className="text-xs text-muted-foreground font-bold font-mono-num">
            {currentTabIndex + 1} / {tabs.length}
          </span>
          <Button
            variant="outline"
            onClick={goNext}
            disabled={currentTabIndex === tabs.length - 1}
            className="rounded-xl gap-2 font-bold hover:bg-primary/5 disabled:opacity-30"
          >
            التالي
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default UnitPage;
