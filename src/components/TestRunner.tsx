import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import type { Test } from "@/data/types";

interface TestRunnerProps {
  test: Test;
  onComplete?: (score: number) => void;
}

const TestRunner = ({ test, onComplete }: TestRunnerProps) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const getQuestionExplanation = (question: Test["questions"][number]) => {
    if (question.explanation) return question.explanation;
    const correctOption = question.options[question.correctAnswer];
    return `The correct answer is "${correctOption}" because it best matches the meaning or grammar required in the question.`;
  };

  const score = submitted
    ? test.questions.reduce(
        (acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0),
        0
      )
    : 0;

  const percentage = submitted ? Math.round((score / test.questions.length) * 100) : 0;

  const feedback =
    percentage >= 80
      ? { label: "ممتاز! 🌟", color: "gradient-emerald text-white" }
      : percentage >= 50
      ? { label: "جهد جيد! 👍", color: "gradient-ocean text-white" }
      : { label: "واصل التدريب! 💪", color: "gradient-cosmic text-white" };

  const finalResult =
    percentage >= 80 ? "متميز" : percentage >= 50 ? "ناجح" : "يحتاج إلى مزيد من التدريب";

  const handleSubmit = () => {
    setSubmitted(true);
    onComplete?.(percentage);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const allAnswered = test.questions.every((q) => answers[q.id] !== undefined);

  return (
    <Card className="border-0 shadow-cosmic rounded-3xl overflow-hidden cosmic-glass">
      {/* Top gradient accent */}
      <div className="h-1 gradient-cosmic" />

      <CardHeader className="pb-6 pt-8 px-8">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-xl gradient-cosmic text-white shadow-glow-purple">
            <Target className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-extrabold" dir="ltr">{test.title}</CardTitle>
            <CardDescription dir="ltr" className="font-medium mt-1">{test.description}</CardDescription>
          </div>
        </div>
        {submitted && (
          <div className="space-y-4 pt-5 animate-bounce-in">
            <div className="flex items-center gap-3">
              <Progress value={percentage} className="flex-1 h-3 rounded-full" />
              <span className="font-extrabold text-lg tabular-nums font-mono-num">{score}/{test.questions.length}</span>
            </div>
            <div className="rounded-2xl cosmic-glass p-5 space-y-2 relative overflow-hidden neon-border-purple">
              {percentage >= 80 && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute animate-confetti"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: "100%",
                        width: "8px",
                        height: "8px",
                        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                        backgroundColor: ["hsl(262 83% 58%)", "hsl(187 92% 42%)", "hsl(152 69% 41%)", "hsl(38 92% 50%)"][i % 4],
                        animationDelay: `${Math.random() * 0.5}s`,
                        animationDuration: `${0.8 + Math.random() * 0.5}s`,
                      }}
                    />
                  ))}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-warning animate-wiggle" />
                <p className="font-extrabold text-lg">النتيجة النهائية: {finalResult}</p>
              </div>
              <p className="text-muted-foreground text-sm font-medium">الدرجة: {percentage}% ({score} من {test.questions.length})</p>
            </div>
            <Badge className={`${feedback.color} border-0 px-5 py-2 font-bold text-sm animate-scale-in shadow-sm`}>{feedback.label}</Badge>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-5 pb-8 px-8">
        {test.questions.map((q, qi) => {
          const isCorrect = answers[q.id] === q.correctAnswer;
          const showResult = submitted;
          const selectedOption = answers[q.id] !== undefined ? q.options[answers[q.id]] : undefined;
          const correctOption = q.options[q.correctAnswer];
          const explanation = getQuestionExplanation(q);

          return (
            <div
              key={q.id}
              className={`rounded-2xl p-5 border-2 transition-all duration-300 ${
                showResult
                  ? isCorrect
                    ? "border-success/30 bg-success/5"
                    : "border-destructive/30 bg-destructive/5"
                  : "border-border/40 hover:border-primary/20 hover:shadow-cosmic"
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-xl gradient-cosmic text-white flex items-center justify-center text-sm font-bold shadow-sm font-mono-num">
                  {qi + 1}
                </span>
                <p className="font-semibold pt-1 text-left flex-1" dir="ltr">{q.question}</p>
                {showResult && (
                  isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                  )
                )}
              </div>

              <RadioGroup
                value={answers[q.id]?.toString()}
                onValueChange={(val) => {
                  if (!submitted) setAnswers((prev) => ({ ...prev, [q.id]: parseInt(val) }));
                }}
                className="space-y-2 ml-11"
                dir="ltr"
              >
                {q.options.map((opt, oi) => {
                  const isThisCorrect = oi === q.correctAnswer;
                  const isSelected = answers[q.id] === oi;
                  return (
                    <div
                      key={oi}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all border ${
                        showResult && isThisCorrect
                          ? "bg-success/10 border-success/30 font-semibold"
                          : showResult && isSelected && !isThisCorrect
                          ? "bg-destructive/10 border-destructive/30 line-through opacity-70"
                          : isSelected && !showResult
                          ? "border-primary/40 bg-primary/5"
                          : "border-transparent hover:bg-muted/40"
                      }`}
                    >
                      <RadioGroupItem value={oi.toString()} id={`${q.id}-${oi}`} disabled={submitted} />
                      <Label htmlFor={`${q.id}-${oi}`} className="cursor-pointer text-left flex-1">
                        {opt}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>

              {showResult && (
                <div className="mt-4 rounded-xl cosmic-glass-subtle p-4 text-sm space-y-2 animate-fade-in" dir="ltr">
                  <p className="font-bold text-left flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    {isCorrect ? "Why your answer is correct:" : "Why your answer is incorrect:"}
                  </p>
                  <p className="text-muted-foreground text-left">{explanation}</p>
                  {!isCorrect && selectedOption && (
                    <p className="text-muted-foreground text-left">
                      You chose <span className="font-semibold text-foreground">"{selectedOption}"</span>, but the correct answer is <span className="font-semibold text-foreground">"{correctOption}"</span>.
                    </p>
                  )}
                  {isCorrect && (
                    <p className="text-muted-foreground text-left">
                      You selected <span className="font-semibold text-foreground">"{correctOption}"</span>, which is the correct answer.
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}

        <div className="flex gap-3 pt-3">
          {!submitted ? (
            <Button
              onClick={handleSubmit}
              disabled={!allAnswered}
              size="lg"
              className="w-full rounded-2xl gradient-cosmic text-white font-bold text-base h-13 shadow-glow-purple hover:shadow-elevated hover:scale-[1.02] active:scale-95 transition-all duration-300"
              style={{ backgroundSize: "200% 200%", animation: "gradient-flow 4s ease infinite" }}
            >
              إرسال الإجابات
            </Button>
          ) : (
            <Button onClick={handleRetry} variant="outline" size="lg" className="w-full rounded-2xl gap-2 font-bold text-base h-13 shadow-cosmic hover:bg-primary/5">
              <RotateCcw className="h-4 w-4" /> إعادة المحاولة
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestRunner;
