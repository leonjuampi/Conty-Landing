interface Props {
  onStart: () => void;
  hasSavedProgress: boolean;
  onReset: () => void;
}

export default function Intro({ onStart, hasSavedProgress, onReset }: Props) {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="t2-card t2-fade-up max-w-xl w-full text-center px-8 py-10 sm:px-12 sm:py-14">
        <div
          className="mx-auto mb-6 t2-pulse"
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 12px 32px -8px rgba(74,47,60,0.3)",
            border: "4px solid white",
          }}
        >
          <img
            src="/dedicatoria/fotos/portada.jpg"
            alt="Tuty"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <p
          className="t2-serif italic"
          style={{ color: "var(--t2-rose-deep)", fontSize: "1.05rem" }}
        >
          Para
        </p>
        <h1
          className="t2-serif"
          style={{
            fontSize: "3rem",
            lineHeight: 1.05,
            margin: "0.25rem 0 1rem",
            color: "var(--t2-ink)",
          }}
        >
          Tuty
        </h1>
        <p
          className="t2-serif"
          style={{ fontSize: "1.1rem", color: "var(--t2-aqua-deep)", marginBottom: "1.25rem" }}
        >
          13 años · 03·05·2026
        </p>

        <p style={{ fontSize: "1rem", lineHeight: 1.6, marginBottom: "1.75rem" }}>
          Te armé este juego con todo mi amor. Son 3 niveles, y con cada uno
          que pases vas a desbloquear una parte de algo que te quiero decir.
        </p>

        <button type="button" className="t2-btn" onClick={onStart}>
          {hasSavedProgress ? "Continuar" : "Empezar"}
        </button>

        {hasSavedProgress && (
          <div style={{ marginTop: "0.75rem" }}>
            <button
              type="button"
              className="t2-btn t2-btn-ghost"
              onClick={onReset}
              style={{ fontSize: "0.85rem", padding: "0.5rem 1.2rem" }}
            >
              Empezar de nuevo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
