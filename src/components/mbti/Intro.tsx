import { Sparkles, Clock, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IntroProps {
  onStart: () => void;
}

export const Intro = ({ onStart }: IntroProps) => {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      {/* Floating orbs */}
      <div className="pointer-events-none absolute -top-20 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="animate-fade-up">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          정밀 성격 분석
        </div>

        <h1 className="mb-6 font-display text-5xl font-light leading-[1.05] sm:text-6xl md:text-7xl">
          당신의 내면을
          <br />
          <span className="italic text-gradient-mystic">비추는 거울</span>
        </h1>

        <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          20개의 정밀한 질문으로 당신만의 16가지 성격 유형을 발견하세요.
          진솔하게 답할수록, 더 선명한 자화상이 그려집니다.
        </p>

        <Button
          size="lg"
          onClick={onStart}
          className="group h-14 rounded-full bg-gradient-to-r from-primary to-primary-glow px-10 text-base font-medium text-primary-foreground shadow-glow transition-all duration-500 hover:scale-105 hover:shadow-[0_0_80px_hsl(var(--primary)/0.5)]"
        >
          테스트 시작하기
          <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
        </Button>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: ListChecks, label: "20문항", sub: "정밀 분석" },
            { icon: Clock, label: "약 5분", sub: "소요 시간" },
            { icon: Sparkles, label: "16유형", sub: "성격 진단" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border/50 bg-card-mystic p-5 text-left shadow-soft animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <item.icon className="mb-3 h-5 w-5 text-primary" />
              <div className="font-display text-2xl">{item.label}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
