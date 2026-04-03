import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Flashcard } from "@/data/types";

interface FlashcardDeckProps {
  flashcards: Flashcard[];
}

const FlashcardDeck = ({ flashcards }: FlashcardDeckProps) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = flashcards[index];

  const next = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % flashcards.length);
  };

  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={() => setFlipped(!flipped)}
        className="relative w-full max-w-sm h-56 rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98]"
        style={{ perspective: "1000px" }}
      >
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl gradient-cosmic text-white p-6 shadow-glow-purple"
            style={{ backfaceVisibility: "hidden" }}
            dir="ltr"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t-3xl" />
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-60 mb-3 font-bold">اضغط للقلب</span>
            <span className="text-2xl font-bold text-center leading-tight">{card.term}</span>
            <div className="absolute bottom-4 text-[10px] opacity-40 font-mono-num">
              {index + 1} / {flashcards.length}
            </div>
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl gradient-emerald text-white p-6 shadow-glow-cyan"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            dir="ltr"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t-3xl" />
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-60 mb-3 font-bold">التعريف</span>
            <span className="text-lg text-center leading-relaxed">{card.definition}</span>
          </div>
        </div>
      </button>

      {/* Progress dots */}
      <div className="flex items-center gap-1.5">
        {flashcards.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFlipped(false); setIndex(i); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-7 gradient-cosmic" : "w-2 bg-border/60 hover:bg-primary/30"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" onClick={prev} className="rounded-xl shadow-cosmic hover:bg-primary/5 hover:border-primary/30">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm text-muted-foreground font-bold font-mono-num min-w-[4ch] text-center">
          {index + 1} / {flashcards.length}
        </span>
        <Button variant="outline" size="icon" onClick={next} className="rounded-xl shadow-cosmic hover:bg-primary/5 hover:border-primary/30">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setFlipped(false)} className="rounded-xl hover:bg-primary/5">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FlashcardDeck;
