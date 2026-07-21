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
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function ScrubBand({
  src,
  poster,
  eyebrow,
  subtitle,
  title,
  text,
  /** Section scroll travel — more = slower, longer scrub. */
  height = "240vh",
}: {
  src: string;
  poster: string;
  /** Optional small label above the title (omit under the no-kicker rule). */
  eyebrow?: string;
  /** Optional line under the title. */
  subtitle?: string;
  title: React.ReactNode;
  /** Body copy — a string or a set of <p> paragraphs. */
  text: React.ReactNode;
  height?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const scrim = scrimRef.current;
    const copy = copyRef.current;

    // Reduced motion: no scrub — jump to the readable, fully-dark static state.
    if (prefersReducedMotion()) {
      if (scrim) gsap.set(scrim, { opacity: 1 });
      if (copy) gsap.set(copy, { autoAlpha: 1, y: 0 });
      return;
    }

    let tl: gsap.core.Timeline | null = null;

    // ONE scrubbed timeline. Positions below are FRACTIONS of the total scroll
    // through the pinned section (total normalizes to 1):
    //   0.00–0.45  video fast-forwards through the whole clip
    //   0.06–0.28  background darkens (starts almost immediately)
    //   0.26–0.40  text fades / rises in, right after it's dark
    //   0.40–1.00  everything holds (dark + text) — comfortable reading room
    const build = () => {
      if (tl) return;
      video.pause();
      const duration = video.duration || 0;

      tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: "top top", end: "bottom bottom", scrub: 0.3 },
      });

      if (duration) {
        const proxy = { t: 0 };
        tl.to(
          proxy,
          {
            t: duration,
            duration: 0.45,
            ease: "none",
            onUpdate: () => {
              if (video.readyState >= 2) video.currentTime = proxy.t;
            },
          },
          0,
        );
      }
      if (scrim) tl.fromTo(scrim, { opacity: 0.05 }, { opacity: 1, duration: 0.22, ease: "power1.in" }, 0.06);
      if (copy) tl.fromTo(copy, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.14, ease: "power1.out" }, 0.26);
      // spacer → hold everything to the end; keeps the timeline total = 1
      tl.to({}, { duration: 0.6 }, 0.4);
    };

    // Fade/scrim don't need the video; build as soon as we can. If metadata is
    // still pending, wait for it (adds the video fast-forward), else build now.
    if (video.readyState >= 1) build();
    else video.addEventListener("loadedmetadata", build, { once: true });

    // Safety: if the clip can't load at all, still reveal the copy (no seek).
    const onErr = () => {
      if (scrim) gsap.set(scrim, { opacity: 1 });
      if (copy) gsap.set(copy, { autoAlpha: 1, y: 0 });
    };
    video.addEventListener("error", onErr);

    return () => {
      tl?.scrollTrigger?.kill();
      tl?.kill();
      video.removeEventListener("loadedmetadata", build);
      video.removeEventListener("error", onErr);
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
        {/* Scrim — scroll-driven: near-transparent at the top of the scrub (video
            fully visible), darkening as you scroll so the copy becomes legible.
            Opacity is animated in the effect; this is its "full" dark state. */}
        <div
          ref={scrimRef}
          style={{ opacity: 0.05 }}
          className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/92 to-navy-900/85"
        />
        <div ref={copyRef} style={{ opacity: 0, visibility: "hidden" }} className="shell relative z-10 text-center">
          {eyebrow && <p className="eyebrow justify-center !text-brand">{eyebrow}</p>}
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl font-display text-lg font-semibold text-white md:text-xl">
              {subtitle}
            </p>
          )}
          <div className="mx-auto mt-5 max-w-2xl space-y-4 leading-relaxed text-slate-300">
            {text}
          </div>
        </div>
      </div>
    </section>
  );
}
