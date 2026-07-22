"use client";
/**
 * Apple-style pinned horizontal scroll. A tall section provides the scroll
 * travel; an inner panel is **CSS `position: sticky`** so it holds the viewport
 * while the track translates sideways (GSAP scrub drives only `transform`).
 *
 * Sticky, not GSAP `pin: true`, on purpose: pin swaps the element to
 * position:fixed as you scroll into it, which reflows the section (a large,
 * repeated CLS on smooth-scroll pages). Sticky is in-flow and reserves its
 * space, so it never shifts — same pattern ScrubBand uses on this page.
 * Reduced-motion / no-JS: `travel` stays 0, sticky is off, native scroll strip.
 */
import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/** `img` is an already-resolved image URL (a video poster or a content image). */
export type Panel = { slug: string; title: string; blurb: string; img: string };

export default function HorizontalScroll({ panels }: { panels: Panel[] }) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  // Horizontal travel (px). 0 = not yet measured / reduced-motion (native strip).
  // Reserves the section's extra scroll height so sticky has room to pin.
  const [travel, setTravel] = useState(0);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const el = track.current;
    const rootEl = root.current;
    if (!el || !rootEl) return;

    const ctx = gsap.context(() => {
      const distance = () => Math.max(0, el.scrollWidth - window.innerWidth);
      setTravel(distance());
      gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: rootEl,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
          onRefresh: () => setTravel(distance()),
        },
      });
    }, rootEl);
    return () => ctx.revert();
  }, []);

  const pinned = travel > 0;

  return (
    <section
      ref={root}
      className="relative bg-navy-900 text-white"
      style={pinned ? { height: `calc(100vh + ${travel}px)` } : undefined}
    >
      {/* sticky inner holds the viewport; overflow-hidden clips the sideways track */}
      <div className={`${pinned ? "sticky top-0" : ""} flex h-screen items-center overflow-hidden`}>
        <div
          ref={track}
          className={`flex gap-6 px-6 md:gap-8 md:px-[8vw] ${pinned ? "" : "overflow-x-auto"}`}
        >
          {/* intro panel */}
          <div className="flex w-[82vw] shrink-0 flex-col justify-center md:w-[40vw]">
            {/* Copy is the client doc §5.9 "Our Portfolio (Global Divisions)"
                intro — verbatim. No eyebrow (site-wide no-kicker rule). */}
            <h2 className="text-5xl font-bold leading-[1.08] md:text-6xl lg:text-7xl">
              Our <span className="text-brand">portfolio</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300 md:text-xl">
              Explore our integrated capabilities that support the development, operation, and
              long-term success of ports and national infrastructure projects.
            </p>
          </div>

          {panels.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="group relative flex aspect-4/5 h-[46vh] shrink-0 overflow-hidden rounded-3xl md:aspect-5/4 md:h-[54vh]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
              <div className="relative mt-auto p-7">
                {/* Numbers removed (client 2026-07-21); larger title + blurb. */}
                <h3 className="text-3xl font-bold md:text-4xl">{p.title}</h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-slate-300 md:text-lg">{p.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-base font-semibold text-brand">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Forced-scroll cue — centered at the bottom of the pinned viewport
            (client 2026-07-22: put the scroll arrow in the centre). Only while
            pinned; the reduced-motion / no-JS fallback is a native scroll strip. */}
        {pinned && (
          <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-1 text-white/60 motion-reduce:hidden">
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">Keep scrolling</span>
            <span className="animate-bounce text-lg leading-none">↓</span>
          </div>
        )}
      </div>
    </section>
  );
}
