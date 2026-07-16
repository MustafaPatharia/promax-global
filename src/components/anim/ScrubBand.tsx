"use client";
/**
 * Cinematic scroll-scrub band. The section is tall; an inner panel pins
 * (sticky) full-screen while you scroll past it, and the video's currentTime
 * is driven frame-by-frame by scroll progress — Apple-style "scroll = play".
 * Overlay copy fades/rises through the scrub. Reduced-motion falls back to a
 * static poster (no seek, no autoplay).
 *
 * Distinct from VideoScrub (which scrubs a non-pinned card as it crosses the
 * viewport): this one pins, giving the full clip real scrub distance.
 */
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function ScrubBand({
  src,
  poster,
  eyebrow,
  title,
  text,
  /** Section scroll travel — more = slower, longer scrub. */
  height = "240vh",
}: {
  src: string;
  poster: string;
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  height?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    if (prefersReducedMotion()) return; // poster-only, handled in markup

    const triggers: ScrollTrigger[] = [];

    const setup = () => {
      const duration = video.duration || 0;
      if (!duration) return;
      video.pause();
      triggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
          onUpdate: (self) => {
            if (video.readyState >= 2) video.currentTime = self.progress * duration;
          },
        }),
      );
      // copy: rise + fade as the panel pins through
      if (copyRef.current) {
        gsap.fromTo(
          copyRef.current,
          { y: 60, autoAlpha: 0.15 },
          {
            y: -60,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          },
        );
      }
    };

    if (video.readyState >= 1) setup();
    else video.addEventListener("loadedmetadata", setup, { once: true });

    return () => {
      triggers.forEach((t) => t.kill());
      video.removeEventListener("loadedmetadata", setup);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-navy-900 text-white"
      style={{ height }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        />
        {/* reduced-motion: static poster (video hidden above) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt=""
          aria-hidden
          className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-navy-900/75" />
        <div ref={copyRef} className="shell relative z-10 text-center">
          <p className="eyebrow justify-center !text-brand">{eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">{text}</p>
        </div>
      </div>
    </section>
  );
}
