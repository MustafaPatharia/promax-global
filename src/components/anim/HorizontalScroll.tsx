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
import { withLocale, type Locale } from "@/lib/i18n";

/** `img` is an already-resolved image URL (a video poster or a content image). */
export type Panel = { slug: string; title: string; blurb: string; img: string };

export default function HorizontalScroll({
  panels,
  locale,
  t,
}: {
  panels: Panel[];
  locale: Locale;
  t: { eyebrow: string; headingLead: string; headingAccent: string; intro: string; keepScrolling: string; explore: string };
}) {
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
          <div className="flex w-[78vw] shrink-0 flex-col justify-center md:w-[34vw]">
            <p className="eyebrow !text-brand">{t.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              {t.headingLead} <span className="text-brand">{t.headingAccent}</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-300">{t.intro}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              {t.keepScrolling} <span aria-hidden>→</span>
            </span>
          </div>

          {panels.map((p, i) => (
            <Link
              key={p.slug}
              href={withLocale(`/portfolio/${p.slug}`, locale)}
              className="group relative flex aspect-[3/4] h-[60vh] shrink-0 overflow-hidden rounded-3xl md:aspect-[4/5] md:h-[74vh]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
              <div className="relative mt-auto p-7">
                <span className="font-display text-sm font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-300">{p.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  {t.explore} <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
