"use client";
/**
 * Full-bleed autoplay/loop/muted background video with poster.
 * Under reduced-motion (or if the video can't play) the poster image
 * stays as a static backdrop — no motion, no wasted bytes decoded.
 *
 * `interactive` (default on) adds a subtle cursor-parallax drift so hero
 * backdrops feel alive. GPU transform only; disabled under reduced-motion.
 */
import { useEffect } from "react";
import { motion, useSpring } from "motion/react";

export default function BackgroundVideo({
  src,
  poster,
  className,
  overlay = "bg-navy-900/70",
  interactive = true,
  objectPosition = "center",
  zoom = 1,
  shiftX = "0%",
  shiftY = "10%",
}: {
  src: string;
  poster: string;
  className?: string;
  overlay?: string;
  interactive?: boolean;
  /** CSS object-position for the cover-cropped frame. */
  objectPosition?: string;
  /**
   * Scale the video up to create overflow room so it can be re-framed
   * horizontally without exposing a gap (e.g. 1.3). Default 1 = no zoom.
   */
  zoom?: number;
  /**
   * Slide the (zoomed) video horizontally. Positive moves a centred subject
   * RIGHT. Keep |shiftX| under the overflow the zoom creates (~(zoom-1)/2).
   */
  shiftX?: string;
  /** Slide the (zoomed) video vertically. Positive moves the frame DOWN. */
  shiftY?: string;
}) {
  // cursor-parallax (spring-smoothed, small px drift)
  const x = useSpring(0, { stiffness: 60, damping: 20 });
  const y = useSpring(0, { stiffness: 60, damping: 20 });

  useEffect(() => {
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
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            objectPosition,
            transform: `scale(${zoom}) translateX(${shiftX}) translateY(${shiftY})`,
          }}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
