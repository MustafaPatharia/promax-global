"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icons, type IconName } from "@/components/Icons";
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
 * LAYOUT is lifted from the Transland template's `.single-our-service` block
 * (`_references/.../transland-html/assets/css/style.css`), which the rest of this
 * site's design system already comes from: a tall image `thumb`, a bottom-up
 * gradient wash over it, and a bordered `content` box pulled UP over the image
 * (`margin-top:-90px`) carrying the icon + title. Rebuilt here with brand tokens.
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

const AUTOPLAY_MS = 5000;

export default function PlatformShowcase({
  platforms,
}: {
  platforms: Platform[];
}) {
  const [perView, setPerView] = useState(3);
  const [page, setPage] = useState(0);
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

  const pages = Math.max(1, Math.ceil(platforms.length / perView));
  // Derived, not an effect: when perView shrinks the page count, clamp during
  // render rather than setState-ing in an effect (avoids a cascading render).
  const current = Math.min(page, pages - 1);

  const go = useCallback(
    (dir: 1 | -1) => {
      setPage((p) => (Math.min(p, pages - 1) + dir + pages) % pages);
    },
    [pages],
  );

  // auto-rotation — respects reduced motion, hover/focus, and an open detail panel
  useEffect(() => {
    if (paused || open !== null || pages <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, open, pages, go]);

  const learnMore = useCallback((i: number) => {
    setOpen((cur) => (cur === i ? null : i));
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
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}
        >
          {platforms.map((p, i) => {
            const Icon = Icons[p.icon];
            const isOpen = open === i;
            return (
              <article
                key={p.title}
                className="group shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${platforms.length}: ${p.title}`}
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

                  {/* ONE bordered container wraps thumb + content. Splitting the
                      border across two boxes (as the template does) left a visible
                      hairline seam where the translucent content box met the image
                      bottom — client flagged it. Single border, opaque content, and
                      the image gradient resolving to the same navy = no seam. */}
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-navy-900 transition-colors duration-500 ${
                      isOpen
                        ? "border-gold/50 shadow-[0_24px_50px_-20px_rgba(58,163,40,0.55)]"
                        : "border-white/12 group-hover:border-gold/45"
                    }`}
                  >
                    {/* --- thumb: image + bottom-up navy wash (template .thumb::after) --- */}
                    <div className="relative h-62.5 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img(p.image)}
                        alt=""
                        loading="lazy"
                        className={`h-full w-full object-cover transition-transform duration-[1.2s] ease-out ${
                          isOpen ? "scale-105" : "group-hover:scale-105"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/55 to-navy-900/5" />
                    </div>

                    {/* --- content: pulled UP over the thumb (template margin-top:-90px) --- */}
                    <div className="relative -mt-[60px] flex min-h-[12.5rem] flex-1 flex-col bg-navy-900 px-7 pb-8">
                      {/* Icon plate — dark ground + gold hairline + gold glyph. A solid
                        green plate here read flat and loud (client, 2026-07-20); green
                        now survives only as the glow cast beneath it. */}
                      <span
                        className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-gold shadow-[0_16px_34px_-12px_rgba(58,163,40,0.75)] ring-1 ring-gold/55 transition-transform duration-500 ${
                          isOpen
                            ? "-translate-y-8 scale-105"
                            : "-translate-y-8 group-hover:scale-105"
                        }`}
                      >
                        <Icon className="h-8 w-8" />
                      </span>

                      <h3 className="-mt-4 font-display text-[1.45rem] font-bold leading-[1.22] tracking-tight text-white">
                        {p.title}
                      </h3>

                      <span
                        aria-hidden
                        className="mt-4 block h-px w-12 bg-gold/70"
                      />

                      <button
                        type="button"
                        onClick={() => learnMore(i)}
                        aria-expanded={isOpen}
                        aria-controls="platform-detail"
                        className="group/btn mt-auto inline-flex w-fit items-center gap-2.5 pt-7 font-display text-[0.78rem] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:text-gold"
                      >
                        {isOpen ? "Close" : "Learn More"}
                        <span
                          aria-hidden
                          className={`grid h-7 w-7 place-items-center rounded-full bg-navy-800 text-[0.7rem] text-gold ring-1 ring-gold/55 transition-transform duration-500 ${
                            isOpen
                              ? "rotate-90"
                              : "group-hover/btn:translate-x-1"
                          }`}
                        >
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* forced rotation — dots + arrows */}
      {pages > 1 && (
        <div className="mt-4 flex items-center justify-between gap-6 px-3">
          <div
            className="flex gap-2"
            role="tablist"
            aria-label="Platform pages"
          >
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to platform page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current
                    ? "gold-fill w-10"
                    : "w-4 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous platforms"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition hover:border-transparent hover:bg-brand hover:shadow-[0_14px_30px_-12px_rgba(58,163,40,0.9)]"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next platforms"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition hover:border-transparent hover:bg-brand hover:shadow-[0_14px_30px_-12px_rgba(58,163,40,0.9)]"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      )}

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
                  <div className="flex items-start gap-5">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-gold shadow-[0_16px_34px_-12px_rgba(58,163,40,0.75)] ring-1 ring-gold/55">
                      {(() => {
                        const Icon = Icons[active.icon];
                        return <Icon className="h-8 w-8" />;
                      })()}
                    </span>
                    <div>
                      <p className="gold-text font-display text-xs font-bold uppercase tracking-[0.3em]">
                        Platform {String((open ?? 0) + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-[2.4rem]">
                        {active.title}
                      </h3>
                    </div>
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
                        className="gold-text font-display text-xs font-bold tabular-nums"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.95rem] leading-snug text-slate-200 transition-colors duration-300 group-hover/pt:text-white">
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
