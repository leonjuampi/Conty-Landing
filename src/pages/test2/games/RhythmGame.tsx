import { useCallback, useEffect, useRef, useState } from "react";

const TOTAL_HEARTS = 30;
const TARGET_HITS = 20;
const SPAWN_INTERVAL_MS = 600;
const FALL_MIN = 3.2;
const FALL_MAX = 4.4;
const HEART_EMOJIS = ["💗", "💖", "💕", "💝", "🩷"];

interface Heart {
  id: number;
  left: number;
  duration: number;
  delay: number;
  emoji: string;
  state: "falling" | "popped" | "missed";
}

interface Props {
  onWin: () => void;
}

type Phase = "countdown" | "playing" | "finished";

export default function RhythmGame({ onWin }: Props) {
  const [phase, setPhase] = useState<Phase>("countdown");
  const [count, setCount] = useState(3);
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [hits, setHits] = useState(0);
  const [missed, setMissed] = useState(0);
  const idRef = useRef(0);
  const spawnedRef = useRef(0);
  const winFiredRef = useRef(false);

  // Countdown
  useEffect(() => {
    if (phase !== "countdown") return;
    if (count <= 0) {
      setPhase("playing");
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 800);
    return () => clearTimeout(t);
  }, [phase, count]);

  // Spawning hearts
  useEffect(() => {
    if (phase !== "playing") return;
    const spawn = () => {
      if (spawnedRef.current >= TOTAL_HEARTS) return;
      spawnedRef.current += 1;
      idRef.current += 1;
      const newHeart: Heart = {
        id: idRef.current,
        left: 8 + Math.random() * 84,
        duration: FALL_MIN + Math.random() * (FALL_MAX - FALL_MIN),
        delay: 0,
        emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
        state: "falling",
      };
      setHearts((prev) => [...prev, newHeart]);
    };
    spawn();
    const interval = setInterval(spawn, SPAWN_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [phase]);

  // Check end of round (all spawned + all resolved)
  useEffect(() => {
    if (phase !== "playing") return;
    const allSpawned = spawnedRef.current >= TOTAL_HEARTS;
    const allResolved = hearts.length > 0 && hearts.every((h) => h.state !== "falling");
    if (allSpawned && allResolved) {
      setPhase("finished");
    }
  }, [hearts, phase]);

  // Win firing once we have enough hits, even before round ends
  useEffect(() => {
    if (winFiredRef.current) return;
    if (hits >= TARGET_HITS) {
      winFiredRef.current = true;
      const t = setTimeout(onWin, 900);
      return () => clearTimeout(t);
    }
  }, [hits, onWin]);

  const popHeart = useCallback((id: number) => {
    setHearts((prev) => {
      const h = prev.find((x) => x.id === id);
      if (!h || h.state !== "falling") return prev;
      return prev.map((x) => (x.id === id ? { ...x, state: "popped" } : x));
    });
    setHits((h) => h + 1);
  }, []);

  const missHeart = useCallback((id: number) => {
    setHearts((prev) => {
      const h = prev.find((x) => x.id === id);
      if (!h || h.state !== "falling") return prev;
      return prev.map((x) => (x.id === id ? { ...x, state: "missed" } : x));
    });
    setMissed((m) => m + 1);
  }, []);

  const restart = () => {
    setHearts([]);
    setHits(0);
    setMissed(0);
    spawnedRef.current = 0;
    idRef.current = 0;
    winFiredRef.current = false;
    setCount(3);
    setPhase("countdown");
  };

  const won = hits >= TARGET_HITS;

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-4 t2-fade-up">
        <h2
          className="t2-serif"
          style={{ fontSize: "1.7rem", color: "var(--t2-ink)", margin: 0 }}
        >
          Atrapá los corazones
        </h2>
        <p style={{ fontSize: "0.9rem", color: "var(--t2-aqua-deep)", marginTop: "0.25rem" }}>
          {hits} / {TARGET_HITS} · perdidos: {missed}
        </p>
      </div>

      <div className="t2-rhythm-stage t2-fade-up">
        {phase === "countdown" && (
          <div
            className="absolute inset-0 flex items-center justify-center t2-serif"
            style={{ fontSize: "5rem", color: "var(--t2-rose-deep)" }}
          >
            <span key={count} className="t2-pop">
              {count > 0 ? count : "♥"}
            </span>
          </div>
        )}

        {hearts.map((h) => (
          <span
            key={h.id}
            className={`t2-rhythm-heart ${h.state === "popped" ? "popped" : ""} ${
              h.state === "missed" ? "missed" : ""
            }`}
            style={{
              left: `${h.left}%`,
              fontSize: "2.2rem",
              animation:
                h.state === "falling"
                  ? `t2-rhythm-fall ${h.duration}s linear forwards`
                  : undefined,
            }}
            onAnimationEnd={(e) => {
              if (e.animationName === "t2-rhythm-fall" && h.state === "falling") {
                missHeart(h.id);
              }
            }}
            onPointerDown={(e) => {
              e.preventDefault();
              popHeart(h.id);
            }}
          >
            {h.emoji}
          </span>
        ))}

        <div className="t2-rhythm-floor" />

        {phase === "finished" && !won && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: "rgba(255, 248, 245, 0.92)" }}
          >
            <p
              className="t2-serif"
              style={{ fontSize: "1.6rem", color: "var(--t2-ink)", marginBottom: "0.4rem" }}
            >
              Casi, mi amor
            </p>
            <p style={{ marginBottom: "1rem", color: "var(--t2-aqua-deep)" }}>
              {hits} de {TARGET_HITS} corazones
            </p>
            <button type="button" className="t2-btn" onClick={restart}>
              Probar de nuevo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
