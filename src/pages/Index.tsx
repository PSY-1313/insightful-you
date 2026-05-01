import { useMemo, useState } from "react";
import { Intro } from "@/components/mbti/Intro";
import { Quiz } from "@/components/mbti/Quiz";
import { Result } from "@/components/mbti/Result";
import type { Dimension } from "@/data/mbti";

type Stage = "intro" | "quiz" | "result";

const Index = () => {
  const [stage, setStage] = useState<Stage>("intro");
  const [answers, setAnswers] = useState<Dimension[]>([]);

  const scores = useMemo<Record<Dimension, number>>(() => {
    const s: Record<Dimension, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers.forEach((a) => (s[a] += 1));
    return s;
  }, [answers]);

  const type = useMemo(() => {
    return (
      (scores.E >= scores.I ? "E" : "I") +
      (scores.S >= scores.N ? "S" : "N") +
      (scores.T >= scores.F ? "T" : "F") +
      (scores.J >= scores.P ? "J" : "P")
    );
  }, [scores]);

  return (
    <main className="grain relative min-h-screen overflow-hidden">
      {stage === "intro" && <Intro onStart={() => setStage("quiz")} />}
      {stage === "quiz" && (
        <Quiz
          onBack={() => setStage("intro")}
          onComplete={(a) => {
            setAnswers(a);
            setStage("result");
          }}
        />
      )}
      {stage === "result" && (
        <Result
          scores={scores}
          type={type}
          onRestart={() => {
            setAnswers([]);
            setStage("intro");
          }}
        />
      )}
    </main>
  );
};

export default Index;
