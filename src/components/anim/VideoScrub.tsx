"use client";
/**
 * Scroll-scrubbed video: the clip's currentTime is driven by scroll
 * position via GSAP ScrollTrigger. Scrolling the section = scrubbing
 * the footage. Ideal for the slow, cinematic clips (scrapyard grapple,
 * night container port) tagged `best_for: scroll-scrub` in _videos.json.
 *
 * Falls back to a normal autoplay-loop when reduced motion is preferred.
 */
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function VideoScrub({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    if (prefersReducedMotion()) {
      video.muted = true;
      video.loop = true;
      video.play().catch(() => {});
      return;
    }

    let trigger: ScrollTrigger | undefined;

    const setup = () => {
      const duration = video.duration || 0;
      if (!duration) return;
      const state = { t: 0 };
      trigger = ScrollTrigger.create({
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        onUpdate: (self) => {
          state.t = self.progress * duration;
          // seek without stutter
          if (video.readyState >= 2) video.currentTime = state.t;
        },
      });
    };

    video.pause();
    if (video.readyState >= 1) setup();
    else video.addEventListener("loadedmetadata", setup, { once: true });

    return () => {
      trigger?.kill();
      video.removeEventListener("loadedmetadata", setup);
    };
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
