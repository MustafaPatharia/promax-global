"use client";
/**
 * Count-up stat that fires when scrolled into view.
 * Parses a numeric prefix and preserves any suffix like "+".
 *
 * The trigger is a native IntersectionObserver (not GSAP ScrollTrigger): it
 * fires reliably the first time the element is visible regardless of the
 * smooth-scroll engine or refresh timing. GSAP still drives the tween itself.
 */
import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

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

    let tween: gsap.core.Tween | null = null;
    const run = () => {
      const obj = { n: 0 };
      tween = gsap.to(obj, {
        n: target,
        duration: 1.6,
        ease: "power2.out",
        delay: immediate ? 0.4 : 0,
        onUpdate: () => {
          el.textContent = prefix + Math.round(obj.n) + suffix;
        },
      });
    };

    if (immediate) {
      run();
      return () => tween?.kill();
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      tween?.kill();
    };
  }, [value, immediate]);

  return <span ref={ref} className={className}>0</span>;
}
