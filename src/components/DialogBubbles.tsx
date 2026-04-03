import type { DialogLine } from "@/data/types";

interface DialogBubblesProps {
  lines: DialogLine[];
  title?: string;
}

const speakerColors: Record<string, string> = {};
const palette = [
  "gradient-cosmic text-white shadow-glow-purple",
  "gradient-emerald text-white shadow-glow-cyan",
];

function getColor(speaker: string) {
  if (!speakerColors[speaker]) {
    const idx = Object.keys(speakerColors).length % palette.length;
    speakerColors[speaker] = palette[idx];
  }
  return speakerColors[speaker];
}

const DialogBubbles = ({ lines, title }: DialogBubblesProps) => {
  const speakers = [...new Set(lines.map((l) => l.speaker))];
  const isLeft = (speaker: string) => speakers.indexOf(speaker) % 2 === 0;

  return (
    <div className="space-y-3">
      {title && <h4 className="font-extrabold text-lg mb-4">{title}</h4>}
      {lines.map((line, i) => {
        const left = isLeft(line.speaker);
        return (
          <div key={i} className={`flex ${left ? "justify-start" : "justify-end"} animate-fade-in`} style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}>
            <div
              className={`max-w-[80%] rounded-2xl px-5 py-3.5 ${
                left ? "rounded-tl-md" : "rounded-tr-md"
              } ${getColor(line.speaker)}`}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-60">
                {line.speaker}
              </span>
              <p className="text-sm mt-1 leading-relaxed">{line.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DialogBubbles;
