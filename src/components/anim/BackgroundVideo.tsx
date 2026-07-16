"use client";
/**
 * Full-bleed autoplay/loop/muted background video with poster.
 * Under reduced-motion (or if the video can't play) the poster image
 * stays as a static backdrop — no motion, no wasted bytes decoded.
 *
 * `interactive` (default on) adds a subtle cursor-parallax drift so hero
 * backdrops feel alive. GPU transform only; disabled under reduced-motion.
 */
import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "motion/react";
import { prefersReducedMotion } from "@/lib/gsap";

export default function BackgroundVideo({
  src,
  poster,
  className,
  overlay = "bg-navy-900/70",
  interactive = true,
}: {
  src: string;
  poster: string;
  className?: string;
  overlay?: string;
  interactive?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [staticOnly, setStaticOnly] = useState(true);

  // cursor-parallax (spring-smoothed, small px drift)
  const x = useSpring(0, { stiffness: 60, damping: 20 });
  const y = useSpring(0, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (prefersReducedMotion()) return;
    setStaticOnly(false);
    const v = ref.current;
    if (v) v.play().catch(() => setStaticOnly(true));

    if (!interactive) return;
    const onMove = (e: PointerEvent) => {
      x.set((e.clientX / window.innerWidth - 0.5) * -30);
      y.set((e.clientY / window.innerHeight - 0.5) * -30);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [interactive, x, y]);

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ x, y }} className="absolute inset-[-4%]">
        {staticOnly ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="" aria-hidden className="h-full w-full object-cover" />
        ) : (
          <video
            ref={ref}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        )}
      </motion.div>
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
