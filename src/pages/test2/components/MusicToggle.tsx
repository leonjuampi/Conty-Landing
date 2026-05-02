import { useEffect, useRef, useState } from "react";

const SRC = "/dedicatoria/musica/cancion.mp3";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = new Audio(SRC);
    a.loop = true;
    a.volume = 0.55;
    audioRef.current = a;

    fetch(SRC, { method: "HEAD" })
      .then((r) => setAvailable(r.ok))
      .catch(() => setAvailable(false));

    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  if (!available) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed top-4 right-4 z-40 t2-card"
      style={{
        padding: "0.6rem 1rem",
        borderRadius: 999,
        fontFamily: "Quicksand, sans-serif",
        fontWeight: 600,
        fontSize: "0.85rem",
        color: "var(--t2-aqua-deep)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
      }}
      aria-label={playing ? "Pausar música" : "Reproducir música"}
    >
      {playing ? "⏸︎" : "♪"} <span>{playing ? "Pausar" : "Música"}</span>
    </button>
  );
}
