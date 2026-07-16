"use client";
/**
 * Count-up stat that fires when scrolled into view (GSAP).
 * Parses a numeric prefix and preserves any suffix like "+".
 */
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function Counter({
  value,
  className,
  immediate = false,
}: {
  value: string;
  className?: string;
  /** Above-the-fold stats: tween on mount instead of on scroll-into-view. */
  immediate?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = value.match(/^(\D*)(\d+)(.*)$/);
    if (!match) {
      el.textContent = value;
      return;
    }
    const prefix = match[1] ?? "";
    const target = parseInt(match[2], 10);
    const suffix = match[3] ?? "";

    if (prefersReducedMotion()) {
      el.textContent = value;
      return;
    }

    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: target,
      duration: 1.6,
      ease: "power2.out",
      delay: immediate ? 0.6 : 0,
      onUpdate: () => {
        el.textContent = prefix + Math.round(obj.n) + suffix;
      },
      ...(immediate ? {} : { scrollTrigger: { trigger: el, start: "top 90%", once: true } }),
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, immediate]);

  return <span ref={ref} className={className}>0</span>;
}
