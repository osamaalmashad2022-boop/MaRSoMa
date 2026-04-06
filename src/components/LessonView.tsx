import FlashcardDeck from "@/components/FlashcardDeck";
import DialogBubbles from "@/components/DialogBubbles";
import GrammarTable from "@/components/GrammarTable";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, MessageCircle, Table2, ListChecks, Image, Sparkles, Target, PenLine, CheckCircle2 } from "lucide-react";
import type { Lesson } from "@/data/types";

interface LessonViewProps {
  lesson: Lesson;
}

const sectionIcon = (type: string) => {
  switch (type) {
    case "dialog": return <MessageCircle className="h-4 w-4" />;
    case "grammar": return <Table2 className="h-4 w-4" />;
    case "list": return <ListChecks className="h-4 w-4" />;
    case "imagePrompt": return <Image className="h-4 w-4" />;
    case "reading": return <Sparkles className="h-4 w-4" />;
    default: return <BookOpen className="h-4 w-4" />;
  }
};

const sectionGradient = (type: string) => {
  switch (type) {
    case "dialog": return "gradient-ocean";
    case "grammar": return "gradient-cosmic";
    case "list": return "gradient-emerald";
    case "reading": return "gradient-aurora";
    default: return "gradient-cosmic";
  }
};

const activityIcon = (type: string) => {
  switch (type) {
    case "discuss": return "💬";
    case "write": return "✍️";
    case "fill-in-the-blank": return "📝";
    case "match": return "🔗";
    case "order": return "🔢";
    case "true-false": return "✅";
    case "role-play": return "🎭";
    default: return "📋";
  }
};

const LessonView = ({ lesson }: LessonViewProps) => {
  return (
    <div className="space-y-6">
      {/* ===== OBJECTIVES SECTION ===== */}
      {lesson.objectives && lesson.objectives.length > 0 && (
        <div className="cosmic-glass rounded-2xl p-5 shadow-cosmic neon-border-purple">
          <h3 className="text-lg font-extrabold flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
              <Target className="h-4 w-4" />
            </div>
            <span>Lesson Objectives</span>
          </h3>
          <ul className="space-y-2.5" dir="ltr">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-amber-500" />
                </span>
                <span className="leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ===== VOCABULARY SECTION ===== */}
      {lesson.vocabulary && lesson.vocabulary.flashcards.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-extrabold flex items-center gap-2">
            <div className="p-1.5 rounded-lg gradient-cosmic text-white shadow-sm">
              <BookOpen className="h-4 w-4" />
            </div>
            المفردات
          </h3>
          <FlashcardDeck flashcards={lesson.vocabulary.flashcards} />
        </div>
      )}

      {/* ===== CONTENT SECTIONS ===== */}
      <Accordion type="multiple" defaultValue={lesson.content.map((_, i) => `section-${i}`)} className="space-y-3">
        {lesson.content.map((section, i) => (
          <AccordionItem key={i} value={`section-${i}`} className="border-0 cosmic-glass rounded-2xl px-5 shadow-cosmic overflow-hidden">
            <AccordionTrigger className="hover:no-underline py-4">
              <span className="flex items-center gap-3 text-base font-bold">
                <span className={`p-1.5 rounded-lg ${sectionGradient(section.type)} text-white`}>
                  {sectionIcon(section.type)}
                </span>
                <span dir="ltr">{section.title || section.type}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5" dir="ltr">
              {section.type === "text" && (
                <p className="text-sm leading-relaxed">{section.body}</p>
              )}
              {section.type === "reading" && (
                <div className="cosmic-glass-subtle rounded-2xl p-5 neon-border-purple">
                  <p className="text-sm leading-relaxed italic">{section.body}</p>
                </div>
              )}
              {section.type === "dialog" && section.lines && (
                <DialogBubbles lines={section.lines} />
              )}
              {section.type === "grammar" && section.grammar && (
                <GrammarTable grammar={section.grammar} />
              )}
              {section.type === "list" && section.items && (
                <ul className="space-y-2 text-sm">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full gradient-cosmic flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.type === "imagePrompt" && (
                <div className="rounded-2xl overflow-hidden border border-border/30 shadow-cosmic">
                  {section.imageSrc ? (
                    <img
                      src={section.imageSrc}
                      alt={section.alt || section.title || ""}
                      loading="lazy"
                      className="w-full max-h-[400px] object-contain bg-muted/20"
                    />
                  ) : (
                    <div className="bg-muted/20 flex items-center justify-center min-h-[120px] p-6">
                      <p className="text-sm text-muted-foreground text-center italic">
                        📷 {section.alt}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* ===== ACTIVITIES SECTION ===== */}
      {lesson.activities && lesson.activities.length > 0 && (
        <div className="cosmic-glass rounded-2xl p-5 shadow-cosmic neon-border-purple">
          <h3 className="text-lg font-extrabold flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm">
              <PenLine className="h-4 w-4" />
            </div>
            <span>Activities</span>
          </h3>
          <div className="space-y-4" dir="ltr">
            {lesson.activities.map((activity, i) => (
              <div key={i} className="cosmic-glass-subtle rounded-xl p-4 border border-border/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{activityIcon(activity.type)}</span>
                  <h4 className="font-bold text-sm">{activity.title}</h4>
                  <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-medium capitalize">
                    {activity.type.replace(/-/g, " ")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{activity.instructions}</p>
                {activity.items && activity.items.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {activity.items.map((item, j) => (
                      <li key={j} className="text-sm flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonView;
