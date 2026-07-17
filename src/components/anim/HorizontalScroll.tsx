"use client";
/**
 * Apple-style pinned horizontal scroll. The section pins to the viewport and
 * the panel track translates sideways as you scroll vertically (GSAP
 * ScrollTrigger pin + scrub). Only `transform` animates, so it stays smooth.
 * Reduced-motion / no-JS: falls back to a native horizontal-scroll strip.
 */
import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/** `img` is an already-resolved image URL (a video poster or a content image). */
export type Panel = { slug: string; title: string; blurb: string; img: string };

export default function HorizontalScroll({ panels }: { panels: Panel[] }) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const el = track.current;
    const rootEl = root.current;
    if (!el || !rootEl) return;
    setPinned(true);

    const ctx = gsap.context(() => {
      const distance = () => Math.max(0, el.scrollWidth - window.innerWidth);
      gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: rootEl,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, rootEl);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-navy-900 text-white">
      <div className={pinned ? "flex h-screen items-center" : "flex items-center overflow-x-auto"}>
        <div ref={track} className="flex gap-6 px-6 md:gap-8 md:px-[8vw]">
          {/* intro panel */}
          <div className="flex w-[78vw] shrink-0 flex-col justify-center md:w-[34vw]">
            <p className="eyebrow !text-brand">Global Divisions</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Six ways we move <span className="text-brand">world trade</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-300">
              Scroll through the portfolio — each division is a distinct, real-asset business under
              one UAE-headquartered mandate.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Keep scrolling <span aria-hidden>→</span>
            </span>
          </div>

          {panels.map((p, i) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
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
                  Explore <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
