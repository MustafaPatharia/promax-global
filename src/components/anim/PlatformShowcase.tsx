"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { type IconName } from "@/components/Icons";
import { img } from "@/lib/images";

export type Platform = {
  icon: IconName;
  image: string;
  title: string;
  points: string[];
};

/**
 * Strategic Business Platforms — premium investor-facing showcase.
 *
 * LAYOUT (client, 2026-07-21): each card is a FULL-BLEED image with the text
 * overlaid ON TOP over a bottom-up navy wash — never split into a half-image /
 * half-navy box. This mirrors the HorizontalScroll portfolio panels and is the
 * treatment to use for image cards everywhere on the site. Rebuilt with brand
 * tokens; green glow + gold edges preserved.
 *
 * Content rule (client doc + meeting 00:19–00:24): the card shows ONLY heading +
 * "Learn More". Capability bullets are NOT on the card — Learn More reveals them
 * in the panel BELOW and scrolls to it. No separate pages (Portfolio only).
 *
 * Colour (client, 2026-07-20): the drop-glow stays GREEN; gold is reserved for
 * edges and glyphs only — hairline border, icon ring, icon, rules — so it reads
 * as an accent enhancing the card rather than as the card's own colour. The
 * ACTIVE card additionally gets `.gold-run`, a gold arc orbiting its perimeter.
 *
 * NOTE: the viewport is `overflow-hidden` (it clips the sideways track), so it
 * carries vertical padding — without it the hover lift + glow get sliced off.
 */

const AUTOPLAY_MS = 3200;

export default function PlatformShowcase({
  platforms,
}: {
  platforms: Platform[];
}) {
  const n = platforms.length;
  const [perView, setPerView] = useState(3);
  // INFINITE LOOP (client 2026-07-21): render three copies of the deck and keep
  // the index in the MIDDLE copy [n, 2n). Stepping past either edge snaps back
  // by one deck with animation OFF, so the wrap is invisible — after card 7 the
  // first card follows with no empty slots, forever, in both directions.
  const [index, setIndex] = useState(n);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const set = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const loop = [...platforms, ...platforms, ...platforms];
  const cardW = 100 / perView;

  const step = useCallback((dir: 1 | -1) => setIndex((i) => i + dir), []);

  // auto-advance one card — respects reduced motion, hover/focus, open panel
  useEffect(() => {
    if (paused || open !== null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => step(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, open, step]);

  // after a wrap step lands on a clone deck, snap back into the middle band
  // with animation disabled so the jump can't be seen. Guarded to the track's
  // OWN transform transition — card hover/image transitions bubble here too.
  const onTrackEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
      setIndex((i) => {
        if (i >= 2 * n) { setAnimate(false); return i - n; }
        if (i < n) { setAnimate(false); return i + n; }
        return i;
      });
    },
    [n],
  );

  // re-enable the transition the frame after a silent snap
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const learnMore = useCallback((original: number) => {
    setOpen((cur) => (cur === original ? null : original));
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "center",
      });
    });
  }, []);

  const active = open === null ? null : platforms[open];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* viewport — py gives the hover lift + glow room inside the clip box */}
      <div className="overflow-hidden py-10">
        <div
          className={`flex ease-[cubic-bezier(0.22,1,0.36,1)] ${
            animate ? "transition-transform duration-700" : ""
          }`}
          style={{ transform: `translate3d(-${index * cardW}%, 0, 0)` }}
          onTransitionEnd={onTrackEnd}
        >
          {loop.map((p, i) => {
            const original = i % n;
            const isOpen = open === original;
            return (
              <article
                key={i}
                className="group shrink-0 px-3"
                style={{ width: `${cardW}%` }}
                aria-roledescription="slide"
                aria-label={`${original + 1} of ${n}: ${p.title}`}
              >
                {/* Wrapper exists so the running-border arc can live OUTSIDE the
                    card — the card is overflow-hidden and would clip it. */}
                <div
                  className={`relative h-full transition duration-500 hover:-translate-y-2 ${
                    isOpen ? "-translate-y-2" : ""
                  }`}
                >
                  {isOpen && (
                    <span
                      aria-hidden
                      className="gold-run pointer-events-none absolute -inset-[2px] rounded-[calc(1rem+2px)]"
                    />
                  )}

                  {/* FULL-BLEED image card (client, 2026-07-21): the image always
                      fills the whole card and the text sits ON TOP of it over a
                      bottom-up navy wash — never split into half-image / half-navy
                      box. Same treatment as the HorizontalScroll portfolio panels
                      below, applied consistently. Single border, green glow, gold
                      edges preserved. */}
                  <div
                    className={`relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-2xl border bg-navy-900 transition-colors duration-500 ${
                      isOpen
                        ? "border-gold/60 shadow-[0_24px_50px_-20px_rgba(212,175,55,0.65)]"
                        : "border-white/12 group-hover:border-gold/45"
                    }`}
                  >
                    {/* image fills the card */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img(p.image)}
                      alt=""
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out ${
                        isOpen ? "scale-105" : "group-hover:scale-105"
                      }`}
                    />
                    {/* bottom-up navy wash — keeps overlay text legible while the
                        image stays fully in view above it */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/75 to-navy-900/10" />

                    {/* --- content: overlaid on the image, anchored to the bottom --- */}
                    {/* Icons removed (client 2026-07-21): title leads the card. */}
                    <div className="relative flex flex-col p-7">
                      <h3 className="font-display text-[1.45rem] font-bold leading-[1.22] tracking-tight text-white">
                        {p.title}
                      </h3>

                      <span
                        aria-hidden
                        className="mt-4 block h-px w-12 bg-gold/70"
                      />

                      <button
                        type="button"
                        onClick={() => learnMore(original)}
                        aria-expanded={isOpen}
                        aria-controls="platform-detail"
                        className="group/btn mt-6 inline-flex w-fit items-center gap-2.5 font-display text-[0.78rem] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:text-gold"
                      >
                        {isOpen ? "Close" : "Learn More"}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* infinite loop — manual prev/next (no page dots; the deck never ends) */}
      <div className="mt-4 flex items-center justify-end gap-3 px-3">
        <button
          onClick={() => step(-1)}
          aria-label="Previous platform"
          className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition hover:border-transparent hover:bg-brand hover:shadow-[0_14px_30px_-12px_rgba(58,163,40,0.9)]"
        >
          <span aria-hidden>←</span>
        </button>
        <button
          onClick={() => step(1)}
          aria-label="Next platform"
          className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition hover:border-transparent hover:bg-brand hover:shadow-[0_14px_30px_-12px_rgba(58,163,40,0.9)]"
        >
          <span aria-hidden>→</span>
        </button>
      </div>

      {/* ---- detail panel: bullets live here, not on the cards ---- */}
      <div
        ref={detailRef}
        id="platform-detail"
        className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          active
            ? "mt-12 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {active && (
            <div className="gold-edge rounded-[1.5rem]">
              <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] p-8 md:p-12">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-white md:text-[2.4rem]">
                      {active.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-transparent hover:bg-brand"
                  >
                    Close <span aria-hidden>×</span>
                  </button>
                </div>

                {/* capabilities — gold index markers, no ticks */}
                <ul className="mt-10 grid gap-x-12 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
                  {active.points.map((pt, i) => (
                    <li
                      key={pt}
                      className="group/pt flex items-baseline gap-4 border-t border-white/10 py-4"
                    >
                      <span
                        aria-hidden
                        className="gold-text font-display text-lg font-bold tabular-nums md:text-xl"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[1.3rem] leading-snug text-slate-200 transition-colors duration-300 group-hover/pt:text-white">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
