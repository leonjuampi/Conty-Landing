import HeartConfetti from "./HeartConfetti";

interface Props {
  level: 1 | 2 | 3;
  title: string;
  body: string[];
  onNext: () => void;
  nextLabel: string;
}

export default function LevelComplete({ level, title, body, onNext, nextLabel }: Props) {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
      <HeartConfetti count={28} />
      <div className="t2-card t2-fade-up max-w-lg w-full text-center px-8 py-10">
        <p
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--t2-aqua-deep)",
            marginBottom: "0.5rem",
          }}
        >
          Nivel {level} · desbloqueado
        </p>
        <h2
          className="t2-serif"
          style={{
            fontSize: "2rem",
            color: "var(--t2-rose-deep)",
            margin: "0 0 1.25rem",
            fontStyle: "italic",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            display: "grid",
            gap: "0.9rem",
            fontSize: "1.02rem",
            lineHeight: 1.65,
            marginBottom: "1.75rem",
            color: "var(--t2-ink)",
          }}
        >
          {body.map((p, i) => (
            <p key={i} style={{ margin: 0 }}>
              {p}
            </p>
          ))}
        </div>
        <button type="button" className="t2-btn" onClick={onNext}>
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
