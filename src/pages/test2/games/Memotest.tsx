import { useEffect, useMemo, useState } from "react";

const PHOTOS = [
  "/dedicatoria/fotos/memo-1.jpg",
  "/dedicatoria/fotos/memo-2.jpg",
  "/dedicatoria/fotos/memo-3.jpg",
  "/dedicatoria/fotos/memo-4.jpg",
  "/dedicatoria/fotos/memo-5.jpg",
  "/dedicatoria/fotos/memo-6.jpg",
];

interface Card {
  id: number;
  photoIdx: number;
  flipped: boolean;
  matched: boolean;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(): Card[] {
  const pairs = PHOTOS.flatMap((_, idx) => [idx, idx]);
  return shuffle(pairs).map((photoIdx, i) => ({
    id: i,
    photoIdx,
    flipped: false,
    matched: false,
  }));
}

interface Props {
  onWin: () => void;
}

export default function Memotest({ onWin }: Props) {
  const [cards, setCards] = useState<Card[]>(() => buildDeck());
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const allMatched = useMemo(() => cards.every((c) => c.matched), [cards]);

  useEffect(() => {
    if (allMatched) {
      const t = setTimeout(onWin, 900);
      return () => clearTimeout(t);
    }
  }, [allMatched, onWin]);

  useEffect(() => {
    if (selected.length !== 2) return;
    setLocked(true);
    const [a, b] = selected;
    const cardA = cards[a];
    const cardB = cards[b];

    if (cardA.photoIdx === cardB.photoIdx) {
      const t = setTimeout(() => {
        setCards((prev) =>
          prev.map((c, i) => (i === a || i === b ? { ...c, matched: true, flipped: true } : c)),
        );
        setSelected([]);
        setLocked(false);
      }, 450);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCards((prev) =>
          prev.map((c, i) => (i === a || i === b ? { ...c, flipped: false } : c)),
        );
        setSelected([]);
        setLocked(false);
      }, 900);
      return () => clearTimeout(t);
    }
  }, [selected, cards]);

  const flip = (idx: number) => {
    if (locked) return;
    const card = cards[idx];
    if (card.flipped || card.matched) return;
    if (selected.includes(idx)) return;

    setCards((prev) => prev.map((c, i) => (i === idx ? { ...c, flipped: true } : c)));
    setSelected((prev) => {
      const next = [...prev, idx];
      if (next.length === 2) setMoves((m) => m + 1);
      return next;
    });
  };

  const reset = () => {
    setCards(buildDeck());
    setSelected([]);
    setMoves(0);
    setLocked(false);
  };

  const matched = cards.filter((c) => c.matched).length / 2;

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-4 t2-fade-up">
        <h2
          className="t2-serif"
          style={{ fontSize: "1.7rem", color: "var(--t2-ink)", margin: 0 }}
        >
          Encontrá los pares
        </h2>
        <p style={{ fontSize: "0.9rem", color: "var(--t2-aqua-deep)", marginTop: "0.25rem" }}>
          Pares: {matched} / {PHOTOS.length} · Intentos: {moves}
        </p>
      </div>

      <div className="t2-memo-grid t2-fade-up">
        {cards.map((c, i) => (
          <div
            key={c.id}
            className={`t2-memo-card ${c.flipped || c.matched ? "flipped" : ""} ${
              c.matched ? "matched" : ""
            }`}
            onClick={() => flip(i)}
            role="button"
            aria-label={c.matched ? "Par encontrado" : "Carta tapada"}
          >
            <div className="t2-memo-inner">
              <div className="t2-memo-face t2-memo-back">T</div>
              <div className="t2-memo-face t2-memo-front">
                <img src={PHOTOS[c.photoIdx]} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="t2-btn t2-btn-ghost"
        style={{ marginTop: "1.5rem", fontSize: "0.85rem", padding: "0.5rem 1.2rem" }}
        onClick={reset}
      >
        Reiniciar tablero
      </button>
    </div>
  );
}
