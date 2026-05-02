import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  emoji: string;
}

interface Props {
  count?: number;
  onDone?: () => void;
}

const EMOJIS = ["💗", "💖", "💕", "🌸", "💚"];

export default function HeartConfetti({ count = 40, onDone }: Props) {
  const [hearts] = useState<Heart[]>(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 3 + Math.random() * 2.5,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    })),
  );

  useEffect(() => {
    if (!onDone) return;
    const maxTime = Math.max(...hearts.map((h) => h.delay + h.duration)) * 1000;
    const t = setTimeout(onDone, maxTime);
    return () => clearTimeout(t);
  }, [hearts, onDone]);

  return (
    <div className="t2-confetti" aria-hidden>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="t2-confetti-heart"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
