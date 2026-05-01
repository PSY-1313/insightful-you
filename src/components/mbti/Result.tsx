import { RotateCcw, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mbtiDescriptions, type Dimension } from "@/data/mbti";

interface ResultProps {
  scores: Record<Dimension, number>;
  type: string;
  onRestart: () => void;
}

const axes: { left: Dimension; right: Dimension; leftLabel: string; rightLabel: string }[] = [
  { left: "E", right: "I", leftLabel: "외향", rightLabel: "내향" },
  { left: "S", right: "N", leftLabel: "감각", rightLabel: "직관" },
  { left: "T", right: "F", leftLabel: "사고", rightLabel: "감정" },
  { left: "J", right: "P", leftLabel: "판단", rightLabel: "인식" },
];

export const Result = ({ scores, type, onRestart }: ResultProps) => {
  const info = mbtiDescriptions[type];

  const handleShare = async () => {
    const text = `나의 MBTI는 ${type} (${info.nickname})!`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "MBTI 결과", text, url: window.location.href });
      } catch {}
    } else {
      await navigator.clipboard.writeText(`${text} ${window.location.href}`);
    }
  };

  return (
    <section className="relative z-10 mx-auto max-w-3xl px-6 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      </div>

      {/* Header */}
      <div className="mb-12 text-center animate-fade-up">
        <div className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">Your Type</div>
        <h1 className="mb-4 font-display text-7xl font-light leading-none sm:text-8xl md:text-9xl">
          <span className="text-gradient-gold">{type}</span>
        </h1>
        <p className="font-display text-xl italic text-muted-foreground sm:text-2xl">
          {info.nickname}
        </p>
      </div>

      {/* Description card */}
      <div className="mb-8 rounded-3xl border border-border/60 bg-card-mystic p-8 shadow-card-mystic animate-scale-in sm:p-10">
        <p className="mb-6 text-lg leading-relaxed text-foreground/90 sm:text-xl">
          {info.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {info.traits.map((t) => (
            <span
              key={t}
              className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-wider text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Score breakdown */}
      <div className="mb-10 rounded-3xl border border-border/60 bg-card-mystic p-8 shadow-card-mystic animate-scale-in sm:p-10" style={{ animationDelay: "0.1s" }}>
        <h3 className="mb-6 font-display text-xl">세부 성향 점수</h3>
        <div className="space-y-6">
          {axes.map((axis) => {
            const total = scores[axis.left] + scores[axis.right];
            const leftPct = (scores[axis.left] / total) * 100;
            const dominantLeft = scores[axis.left] >= scores[axis.right];
            return (
              <div key={axis.left}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className={`font-display text-lg ${dominantLeft ? "text-primary" : "text-muted-foreground"}`}>
                    {axis.left} <span className="text-xs tracking-wider">· {axis.leftLabel}</span>
                  </span>
                  <span className={`font-display text-lg ${!dominantLeft ? "text-primary" : "text-muted-foreground"}`}>
                    <span className="text-xs tracking-wider">{axis.rightLabel} ·</span> {axis.right}
                  </span>
                </div>
                <div className="relative h-2 overflow-hidden rounded-full bg-border/40">
                  <div
                    className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ${
                      dominantLeft ? "bg-gradient-to-r from-primary to-primary-glow" : "bg-muted-foreground/40"
                    }`}
                    style={{ width: `${leftPct}%` }}
                  />
                </div>
                <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                  <span>{Math.round(leftPct)}%</span>
                  <span>{Math.round(100 - leftPct)}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          onClick={onRestart}
          variant="outline"
          size="lg"
          className="h-12 rounded-full border-border/60 bg-transparent px-8 hover:bg-secondary"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          다시 테스트하기
        </Button>
        <Button
          onClick={handleShare}
          size="lg"
          className="h-12 rounded-full bg-gradient-to-r from-primary to-primary-glow px-8 text-primary-foreground shadow-glow hover:scale-105 transition-transform"
        >
          <Share2 className="mr-2 h-4 w-4" />
          결과 공유하기
        </Button>
      </div>
    </section>
  );
};
