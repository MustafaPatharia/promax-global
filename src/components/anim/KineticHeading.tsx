"use client";
/**
 * Word-by-word masked reveal for a headline (the motion-plan hero beat).
 * Each word rises out of a clip mask on a staggered GSAP timeline. Renders
 * the full text server-visible first; under reduced motion it just shows.
 * Pass `highlight` words (case-insensitive) to paint them brand-orange.
 */
import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function KineticHeading({
  text,
  highlight = [],
  className = "",
  delay = 0.15,
}: {
  text: string;
  highlight?: string[];
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const hl = highlight.map((w) => w.toLowerCase());

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    gsap.set(words, { yPercent: 120 });
    gsap.to(words, {
      yPercent: 0,
      duration: 0.9,
      ease: "expo.out",
      stagger: 0.08,
      delay,
    });
  }, [delay]);

  return (
    <h1 ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="mr-[0.28em] inline-block overflow-hidden pb-[0.12em] align-bottom">
          <span
            data-word
            className={`inline-block ${hl.includes(word.toLowerCase().replace(/[^a-z]/g, "")) ? "text-brand" : ""}`}
          >
            {word}
          </span>
        </span>
      ))}
    </h1>
  );
}
