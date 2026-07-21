"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";
import { partners } from "@/lib/site";

/**
 * Strategic Partners strip — client, meeting 00:35:19 + content doc para 152.
 * Runs on EVERY page just above the footer, which is why it is mounted in
 * `layout.tsx` rather than being an opt-in section block.
 *
 * DISPLAY (client, 2026-07-20): **max 6 logos at a time, auto-rotating.** This
 * replaced an earlier continuous right-to-left ticker — with only 8 logos a
 * ticker looped visibly fast and read as a thin network. Paging holds each set
 * still long enough to actually be read.
 *
 * Logos always render in full colour (client 2026-07-21) and lift slightly on
 * hover. Rotation pauses on hover/focus and stops entirely under
 * `prefers-reduced-motion`, which leaves a static first page — no motion, no
 * hidden content, since the dots still page manually.
 *
 * COVERAGE: the doc names 15 partners; `lib/site.ts` carries all of them with
 * `logo: null` for those still missing. Drop a file into `public/partners/` and
 * set the path there — no change needed here.
 */

const PER_VIEW_MAX = 6;
const ROTATE_MS = 4500;

export default function PartnerStrip() {
  const withLogos = partners.filter((p) => p.logo);

  const [perView, setPerView] = useState(PER_VIEW_MAX);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const set = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? PER_VIEW_MAX : w >= 640 ? 3 : 2);
    };
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const pages = Math.max(1, Math.ceil(withLogos.length / perView));
  // Derived, not an effect: a narrower viewport can shrink the page count below
  // the current page, so clamp during render instead of cascading a setState.
  const current = Math.min(page, pages - 1);

  useEffect(() => {
    if (paused || pages <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setPage((p) => (Math.min(p, pages - 1) + 1) % pages),
      ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, pages]);

  if (!withLogos.length) return null;

  return (
    <section
      aria-label="Strategic partners"
      className="border-t border-slate-100 bg-white py-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <p className="mb-7 text-center font-display text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
        Strategic Partners
      </p>

      <div className="shell overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}
        >
          {Array.from({ length: pages }).map((_, pi) => (
            <ul
              key={pi}
              className="flex w-full shrink-0 items-center justify-around gap-6"
              aria-hidden={pi !== current}
            >
              {withLogos.slice(pi * perView, pi * perView + perView).map((p) => (
                <li key={p.name} className="flex min-w-0 shrink items-center">
                  <Image
                    src={asset(p.logo!)}
                    alt={p.name}
                    width={200}
                    height={80}
                    loading="lazy"
                    className="h-9 w-auto max-w-full object-contain transition duration-500 hover:scale-105 md:h-12"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {pages > 1 && (
        <div
          className="mt-7 flex justify-center gap-2"
          role="tablist"
          aria-label="Partner pages"
        >
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to partner page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-brand" : "w-3 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
