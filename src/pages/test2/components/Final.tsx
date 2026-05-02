import { useState } from "react";
import HeartConfetti from "./HeartConfetti";
import { dedicatoria } from "../dedicatoria";

interface Props {
  onReset: () => void;
}

export default function Final({ onReset }: Props) {
  const [bursts, setBursts] = useState<number[]>([]);

  const triggerBurst = () => {
    const id = Date.now() + Math.random();
    setBursts((b) => [...b, id]);
    setTimeout(() => {
      setBursts((b) => b.filter((x) => x !== id));
    }, 6000);
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-10">
      <HeartConfetti count={50} />
      {bursts.map((id) => (
        <HeartConfetti key={id} count={30} />
      ))}

      <div className="t2-card t2-fade-up max-w-2xl w-full text-center px-7 py-10 sm:px-12 sm:py-14">
        <div
          className="mx-auto mb-6"
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 14px 36px -10px rgba(74,47,60,0.32)",
            border: "5px solid white",
          }}
        >
          <img
            src="/dedicatoria/fotos/final.jpg"
            alt="Nosotros"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <h2
          className="t2-serif"
          style={{
            fontSize: "2.6rem",
            color: "var(--t2-ink)",
            margin: "0 0 0.5rem",
            fontStyle: "italic",
          }}
        >
          Para Tuty
        </h2>
        <p
          className="t2-serif"
          style={{
            fontSize: "1rem",
            color: "var(--t2-aqua-deep)",
            marginBottom: "2rem",
          }}
        >
          13 años · 03·05·2026
        </p>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            textAlign: "left",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "var(--t2-ink)",
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          {dedicatoria.level1.body.map((p, i) => (
            <p key={`l1-${i}`} style={{ margin: 0 }}>
              {p}
            </p>
          ))}
          {dedicatoria.level2.body.map((p, i) => (
            <p key={`l2-${i}`} style={{ margin: 0 }}>
              {p}
            </p>
          ))}
          {dedicatoria.level3.body.map((p, i) => (
            <p
              key={`l3-${i}`}
              style={{
                margin: 0,
                ...(p.startsWith("—") ? { textAlign: "right", fontStyle: "italic" } : {}),
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <div style={{ marginTop: "2.25rem", display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button type="button" className="t2-btn" onClick={triggerBurst}>
            Te amo 💚
          </button>
          <button
            type="button"
            className="t2-btn t2-btn-ghost"
            onClick={onReset}
            style={{ fontSize: "0.85rem" }}
          >
            Volver a jugar
          </button>
        </div>
      </div>
    </div>
  );
}
