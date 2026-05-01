import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { questions, type Dimension } from "@/data/mbti";

interface QuizProps {
  onComplete: (answers: Dimension[]) => void;
  onBack: () => void;
}

export const Quiz = ({ onComplete, onBack }: QuizProps) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Dimension[]>([]);
  const [animKey, setAnimKey] = useState(0);

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;

  const handleSelect = (value: Dimension) => {
    const next = [...answers, value];
    setAnswers(next);
    if (current + 1 >= questions.length) {
      onComplete(next);
    } else {
      setCurrent(current + 1);
      setAnimKey((k) => k + 1);
    }
  };

  const handleBack = () => {
    if (current === 0) {
      onBack();
    } else {
      setCurrent(current - 1);
      setAnswers(answers.slice(0, -1));
      setAnimKey((k) => k + 1);
    }
  };

  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-2xl flex-col px-6 py-12">
      {/* Top bar */}
      <div className="mb-12 flex items-center justify-between">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          이전
        </button>
        <div className="font-display text-sm tracking-wider text-muted-foreground">
          <span className="text-primary">{String(current + 1).padStart(2, "0")}</span>
          <span className="mx-1.5 opacity-40">/</span>
          <span>{questions.length}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-16 h-[2px] w-full overflow-hidden rounded-full bg-border/40">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
          style={{ width: `${progress}%`, transitionTimingFunction: "var(--ease-out-expo)" }}
        />
      </div>

      {/* Question */}
      <div key={animKey} className="flex flex-1 flex-col justify-center animate-fade-up">
        <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary/80">
          Question {current + 1}
        </div>
        <h2 className="mb-12 font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
          {q.question}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {[q.optionA, q.optionB].map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(opt.value)}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card-mystic p-6 text-left shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/10 group-hover:to-accent/10 group-hover:opacity-100" />
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 font-display text-sm text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                {i === 0 ? "A" : "B"}
              </div>
              <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                {opt.label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
