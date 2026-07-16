"use client";
/**
 * Smooth autoplay-loop video that fills its (positioned) parent. Unlike
 * VideoScrub it never seeks on scroll — no jank. Under reduced-motion, or if
 * autoplay is blocked, it holds the poster image. Parent controls stacking;
 * this does NOT set a z-index, so it works inside cards with a bg color.
 */
import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

export default function LoopVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [staticOnly, setStaticOnly] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    setStaticOnly(false);
    const v = ref.current;
    if (v) v.play().catch(() => setStaticOnly(true));
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
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
    </div>
  );
}
