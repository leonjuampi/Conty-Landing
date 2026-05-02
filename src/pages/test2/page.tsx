import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import type { Progress, Stage } from "./types";
import { STORAGE_KEY } from "./types";
import { dedicatoria } from "./dedicatoria";
import Intro from "./components/Intro";
import LevelIntro from "./components/LevelIntro";
import LevelComplete from "./components/LevelComplete";
import Final from "./components/Final";
import MusicToggle from "./components/MusicToggle";
import Petals from "./components/Petals";
import Memotest from "./games/Memotest";
import RhythmGame from "./games/RhythmGame";
import Puzzle from "./games/Puzzle";

const INITIAL: Progress = { stage: "intro", completedLevels: [] };

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL;
    const parsed = JSON.parse(raw) as Progress;
    if (!parsed.stage) return INITIAL;
    return parsed;
  } catch {
    return INITIAL;
  }
}

function saveProgress(p: Progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* ignore */
  }
}

export default function Test2Page() {
  const [progress, setProgress] = useState<Progress>(INITIAL);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveProgress(progress);
  }, [progress, hydrated]);

  const goTo = useCallback((stage: Stage) => {
    setProgress((p) => ({ ...p, stage }));
  }, []);

  const completeLevel = useCallback((lvl: 1 | 2 | 3, nextStage: Stage) => {
    setProgress((p) => ({
      stage: nextStage,
      completedLevels: Array.from(new Set([...p.completedLevels, lvl])).sort(),
    }));
  }, []);

  const reset = useCallback(() => {
    setProgress(INITIAL);
  }, []);

  if (!hydrated) {
    return <div className="t2-root" style={{ minHeight: "100vh" }} />;
  }

  const { stage } = progress;
  const hasSaved =
    stage !== "intro" || progress.completedLevels.length > 0;

  return (
    <div className="t2-root">
      <Petals />
      <MusicToggle />

      {stage === "intro" && (
        <Intro
          onStart={() => {
            if (progress.completedLevels.includes(3)) goTo("final");
            else if (progress.completedLevels.includes(2)) goTo("level3-intro");
            else if (progress.completedLevels.includes(1)) goTo("level2-intro");
            else goTo("level1-intro");
          }}
          hasSavedProgress={hasSaved}
          onReset={reset}
        />
      )}

      {stage === "level1-intro" && (
        <LevelIntro level={1} onStart={() => goTo("level1-play")} />
      )}
      {stage === "level1-play" && (
        <Memotest onWin={() => goTo("level1-done")} />
      )}
      {stage === "level1-done" && (
        <LevelComplete
          level={1}
          title={dedicatoria.level1.title}
          body={dedicatoria.level1.body}
          nextLabel="Ir al nivel 2"
          onNext={() => completeLevel(1, "level2-intro")}
        />
      )}

      {stage === "level2-intro" && (
        <LevelIntro level={2} onStart={() => goTo("level2-play")} />
      )}
      {stage === "level2-play" && (
        <RhythmGame onWin={() => goTo("level2-done")} />
      )}
      {stage === "level2-done" && (
        <LevelComplete
          level={2}
          title={dedicatoria.level2.title}
          body={dedicatoria.level2.body}
          nextLabel="Ir al nivel 3"
          onNext={() => completeLevel(2, "level3-intro")}
        />
      )}

      {stage === "level3-intro" && (
        <LevelIntro level={3} onStart={() => goTo("level3-play")} />
      )}
      {stage === "level3-play" && (
        <Puzzle onWin={() => goTo("level3-done")} />
      )}
      {stage === "level3-done" && (
        <LevelComplete
          level={3}
          title={dedicatoria.level3.title}
          body={dedicatoria.level3.body}
          nextLabel="Ver mensaje completo"
          onNext={() => completeLevel(3, "final")}
        />
      )}

      {stage === "final" && <Final onReset={reset} />}
    </div>
  );
}
