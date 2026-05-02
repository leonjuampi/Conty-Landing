interface Props {
  level: 1 | 2 | 3;
  onStart: () => void;
}

const CONTENT = {
  1: {
    title: "Nivel 1 · Memotest",
    icon: "",
    rules: [
      "Hay 12 cartas dadas vuelta. Cada foto tiene su par.",
      "Tocá una carta y luego otra. Si son iguales, quedan destapadas.",
      "Encontrá los 6 pares para desbloquear la primera parte de tu mensaje.",
    ],
  },
  2: {
    title: "Nivel 2 · Atrapacorazones",
    icon: "💗",
    rules: [
      "Van a caer corazones desde arriba. Tocalos antes de que lleguen al piso.",
      "Tenés que atrapar al menos 20 de 30.",
      "Si te falta, podés volver a intentarlo. ¡Sin presión!",
    ],
  },
  3: {
    title: "Nivel 3 · Rompecabezas",
    icon: "🧩",
    rules: [
      "Las piezas están desordenadas. Tocá una pieza al lado del hueco para moverla.",
      "El objetivo es armar la foto completa.",
      "Si te trabás, hay un botón de pista para ver cómo queda armada.",
    ],
  },
} as const;

export default function LevelIntro({ level, onStart }: Props) {
  const c = CONTENT[level];
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="t2-card t2-fade-up max-w-md w-full text-center px-7 py-9">
        {c.icon && (
          <div style={{ fontSize: "3rem", lineHeight: 1, marginBottom: "0.5rem" }}>{c.icon}</div>
        )}
        <h2
          className="t2-serif"
          style={{ fontSize: "1.8rem", color: "var(--t2-ink)", margin: "0 0 1.25rem" }}
        >
          {c.title}
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.5rem",
            textAlign: "left",
            display: "grid",
            gap: "0.6rem",
            fontSize: "0.95rem",
            lineHeight: 1.5,
          }}
        >
          {c.rules.map((r, i) => (
            <li key={i} style={{ display: "flex", gap: "0.5rem" }}>
              <span style={{ color: "var(--t2-rose-deep)", flexShrink: 0 }}>♥</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <button type="button" className="t2-btn" onClick={onStart}>
          Jugar
        </button>
      </div>
    </div>
  );
}
