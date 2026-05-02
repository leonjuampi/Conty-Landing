import { useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  emoji: string;
}

const EMOJIS = ["🌸", "💮", "🌷"];

export default function Petals({ count = 14 }: { count?: number }) {
  const [petals] = useState<Petal[]>(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 14 + Math.random() * 12,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    })),
  );

  return (
    <div className="t2-petals" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.id}
          className="t2-petal"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
