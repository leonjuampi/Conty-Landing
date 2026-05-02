import { useEffect, useMemo, useState } from "react";

const SIZE = 4;
const TOTAL = SIZE * SIZE;
const EMPTY = TOTAL - 1;
const IMG_URL = "/dedicatoria/fotos/puzzle.jpg";
const SHUFFLE_MOVES = 80;

interface Props {
  onWin: () => void;
}

function neighbors(idx: number): number[] {
  const row = Math.floor(idx / SIZE);
  const col = idx % SIZE;
  const out: number[] = [];
  if (row > 0) out.push(idx - SIZE);
  if (row < SIZE - 1) out.push(idx + SIZE);
  if (col > 0) out.push(idx - 1);
  if (col < SIZE - 1) out.push(idx + 1);
  return out;
}

function buildShuffled(): number[] {
  const board = Array.from({ length: TOTAL }, (_, i) => i);
  let emptyPos = TOTAL - 1;
  for (let m = 0; m < SHUFFLE_MOVES; m++) {
    const opts = neighbors(emptyPos);
    const swap = opts[Math.floor(Math.random() * opts.length)];
    [board[emptyPos], board[swap]] = [board[swap], board[emptyPos]];
    emptyPos = swap;
  }
  if (board.every((v, i) => v === i)) {
    const opts = neighbors(emptyPos);
    const swap = opts[0];
    [board[emptyPos], board[swap]] = [board[swap], board[emptyPos]];
  }
  return board;
}

export default function Puzzle({ onWin }: Props) {
  const [board, setBoard] = useState<number[]>(() => buildShuffled());
  const [moves, setMoves] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const emptyPos = board.indexOf(EMPTY);
  const solved = useMemo(() => board.every((v, i) => v === i), [board]);

  useEffect(() => {
    if (!solved) return;
    const t = setTimeout(onWin, 1100);
    return () => clearTimeout(t);
  }, [solved, onWin]);

  const tryMove = (pos: number) => {
    if (solved) return;
    const e = board.indexOf(EMPTY);
    if (!neighbors(e).includes(pos)) return;
    const next = [...board];
    [next[e], next[pos]] = [next[pos], next[e]];
    setBoard(next);
    setMoves((m) => m + 1);
  };

  const reset = () => {
    setBoard(buildShuffled());
    setMoves(0);
  };

  const helpStep = () => {
    if (solved) return;
    for (let target = 0; target < TOTAL; target++) {
      if (board[target] !== target) {
        const current = board.indexOf(target);
        const next = [...board];
        [next[target], next[current]] = [next[current], next[target]];
        setBoard(next);
        return;
      }
    }
  };

  const movables = new Set(neighbors(emptyPos));

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-4 t2-fade-up">
        <h2
          className="t2-serif"
          style={{ fontSize: "1.7rem", color: "var(--t2-ink)", margin: 0 }}
        >
          Armá la foto
        </h2>
        <p style={{ fontSize: "0.9rem", color: "var(--t2-aqua-deep)", marginTop: "0.25rem" }}>
          Movimientos: {moves}
        </p>
      </div>

      <div
        className="t2-puzzle-board t2-fade-up"
        style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))` }}
      >
        {board.map((value, pos) => {
          const isEmpty = value === EMPTY && !solved;
          const origRow = Math.floor(value / SIZE);
          const origCol = value % SIZE;
          return (
            <div
              key={pos}
              className={`t2-puzzle-piece ${isEmpty ? "empty" : ""} ${
                movables.has(pos) && !solved ? "movable" : ""
              }`}
              onClick={() => !isEmpty && tryMove(pos)}
              style={
                isEmpty
                  ? undefined
                  : {
                      backgroundImage: `url(${IMG_URL})`,
                      backgroundSize: `${SIZE * 100}% ${SIZE * 100}%`,
                      backgroundPosition: `${(origCol * 100) / (SIZE - 1)}% ${
                        (origRow * 100) / (SIZE - 1)
                      }%`,
                    }
              }
              role="button"
              aria-label={isEmpty ? "Espacio vacío" : `Pieza ${value + 1}`}
            />
          );
        })}
      </div>

      <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          type="button"
          className="t2-btn"
          style={{ fontSize: "0.85rem", padding: "0.55rem 1.4rem" }}
          onClick={helpStep}
          disabled={solved}
        >
          Ayudita ✨
        </button>
        <button
          type="button"
          className="t2-btn t2-btn-ghost"
          style={{ fontSize: "0.85rem", padding: "0.5rem 1.2rem" }}
          onClick={() => setShowHint((s) => !s)}
        >
          {showHint ? "Ocultar pista" : "Ver pista"}
        </button>
        <button
          type="button"
          className="t2-btn t2-btn-ghost"
          style={{ fontSize: "0.85rem", padding: "0.5rem 1.2rem" }}
          onClick={reset}
        >
          Mezclar de nuevo
        </button>
      </div>
      <p style={{ fontSize: "0.78rem", color: "var(--t2-aqua-deep)", marginTop: "0.6rem", opacity: 0.85 }}>
        ✨ Ayudita acomoda una pieza por vos
      </p>

      {showHint && (
        <div
          className="t2-card t2-pop"
          style={{ marginTop: "1rem", padding: "0.5rem", maxWidth: 220 }}
        >
          <img
            src={IMG_URL}
            alt="Pista"
            style={{ width: "100%", borderRadius: 10, display: "block" }}
          />
        </div>
      )}
    </div>
  );
}
