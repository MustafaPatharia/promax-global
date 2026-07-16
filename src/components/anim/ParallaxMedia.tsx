"use client";
/**
 * Interactive media card: looping video/poster that (a) drifts + zooms as the
 * section scrolls past (Apple-style parallax) and (b) tilts toward the cursor
 * on hover. GPU transforms only (translate/scale/rotate) — no video seeking,
 * no layout thrash. Motion auto-respects prefers-reduced-motion.
 */
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import LoopVideo from "./LoopVideo";

export default function ParallaxMedia({
  src,
  poster,
  amount = 90,
  tilt = 6,
  className = "",
}: {
  src: string;
  poster: string;
  amount?: number;
  /** Max cursor-tilt in degrees (0 = off). */
  tilt?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // --- scroll parallax: visible drift + slow zoom as section passes ---
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.18, 1.12]);

  // --- cursor tilt (spring-smoothed) ---
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5; // -0.5..0.5
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * tilt * 2);
    rx.set(-py * tilt * 2);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div style={{ y, scale }} className="absolute inset-[-14%]">
        <LoopVideo src={src} poster={poster} />
      </motion.div>
    </motion.div>
  );
}
