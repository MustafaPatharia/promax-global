"use client";
/**
 * Interactive clip grid. Each tile holds a poster until hovered/focused, then
 * plays a muted loop; leaving pauses + resets to the poster frame. Clicking a
 * tile opens a lightbox with the clip full-size, unmuted, native controls.
 * Keyboard: tile is a button (Enter/Space opens), Esc closes the lightbox.
 * Reduced-motion → hover never autoplays; click still opens the lightbox.
 */
import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

export type Tile = { src: string; poster: string; label: string; title: string };

function GridTile({ tile, onOpen }: { tile: Tile; onOpen: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  const play = () => {
    if (prefersReducedMotion()) return;
    ref.current?.play().catch(() => {});
  };
  const stop = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };
  return (
    <button
      type="button"
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      onClick={onOpen}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-navy-900 text-left ring-1 ring-inset ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      aria-label={`Play ${tile.title}`}
    >
      <video
        ref={ref}
        src={tile.src}
        poster={tile.poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/10 to-transparent" />
      <span className="pointer-events-none absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition group-hover:bg-brand">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">{tile.label}</p>
        <h3 className="mt-1 text-lg font-bold text-white">{tile.title}</h3>
      </div>
    </button>
  );
}

export default function VideoGrid({ tiles }: { tiles: Tile[] }) {
  const [open, setOpen] = useState<Tile | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t) => (
          <GridTile key={t.src} tile={t} onOpen={() => setOpen(t)} />
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <video
              src={open.src}
              poster={open.poster}
              controls
              autoPlay
              playsInline
              className="w-full rounded-2xl shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute -top-3 -right-3 grid h-11 w-11 place-items-center rounded-full bg-white text-navy shadow-lg transition hover:bg-brand hover:text-white"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
