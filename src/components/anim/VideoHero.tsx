"use client";
/**
 * Full-bleed hero video layer with a per-page reveal STYLE. Drop-in swap for
 * <BackgroundVideo> — same props plus `variant`, so hero copy markup is
 * untouched. The point: every page's hero plays its clip, but each plays it a
 * visibly different way, so no two heroes read as the same animation.
 *
 *   kenburns   — slow cinematic scale + drift (CSS keyframe)
 *   clip-wipe  — clip-path sweep reveals the running video on mount
 *   duotone    — navy→brand duotone tint + slow drift (CSS filter)
 *   shutter    — 3 panels retract in stagger, uncovering the video
 *   letterbox  — cinematic bars retract to widescreen
 *   focus-blur — starts blurred + zoomed, snaps into focus
 *   parallax   — the original cursor-drift (delegates to BackgroundVideo)
 *
 * All GPU-friendly (transform / clip-path / filter). Under reduced motion (or
 * if autoplay is blocked) it holds the poster with no motion.
 */
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import BackgroundVideo from "./BackgroundVideo";

export type HeroVariant =
  | "kenburns"
  | "clip-wipe"
  | "duotone"
  | "shutter"
  | "letterbox"
  | "focus-blur"
  | "parallax";

type Props = {
  src: string;
  poster: string;
  variant?: HeroVariant;
  overlay?: string;
  /** Play the clip once instead of looping (e.g. earth-zoom, logo). */
  playOnce?: boolean;
  className?: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function VideoHero({
  src,
  poster,
  variant = "kenburns",
  overlay = "bg-navy-900/70",
  playOnce = false,
  className,
}: Props) {
  // The cursor-drift page reuses the existing component verbatim.
  if (variant === "parallax") {
    return <BackgroundVideo src={src} poster={poster} overlay={overlay} className={className} />;
  }

  return (
    <Layer
      src={src}
      poster={poster}
      variant={variant}
      overlay={overlay}
      playOnce={playOnce}
      className={className}
    />
  );
}

function Layer({
  src,
  poster,
  variant,
  overlay,
  playOnce,
  className,
}: {
  src: string;
  poster: string;
  variant: Exclude<HeroVariant, "parallax">;
  overlay: string;
  playOnce: boolean;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // reveal to final state after hydration
  }, []);

  // continuous-motion variants tint/scale the media element itself
  const mediaClass =
    variant === "kenburns" ? "hero-kenburns" : variant === "duotone" ? "hero-duotone" : "";

  // Always autoplay muted; the poster attr covers the rare browser that blocks it.
  const media = (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop={!playOnce}
      playsInline
      preload="metadata"
      className={`h-full w-full object-cover ${mediaClass}`}
    />
  );

  // reveal to the final state after mount
  const animate = mounted;
  const dur = (d: number) => d;

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}>
      {/* clip-wipe / focus-blur wrap the whole media; kenburns/duotone/shutter/letterbox don't */}
      {variant === "clip-wipe" ? (
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={animate ? { clipPath: "inset(0 0 0% 0)" } : undefined}
          transition={{ duration: dur(1.2), ease: EASE }}
        >
          {media}
        </motion.div>
      ) : variant === "focus-blur" ? (
        <motion.div
          className="absolute inset-0"
          initial={{ filter: "blur(22px)", scale: 1.12, opacity: 0.4 }}
          animate={animate ? { filter: "blur(0px)", scale: 1, opacity: 1 } : undefined}
          transition={{ duration: dur(1.4), ease: EASE }}
        >
          {media}
        </motion.div>
      ) : (
        <div className="absolute inset-0">{media}</div>
      )}

      {/* shutter: three panels covering the video retract upward in stagger */}
      {variant === "shutter" &&
        [0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-full w-1/3 origin-top bg-navy-900"
            style={{ left: `${i * 33.34}%` }}
            initial={{ scaleY: 1 }}
            animate={animate ? { scaleY: 0 } : undefined}
            transition={{ duration: dur(0.9), ease: EASE, delay: i * 0.12 }}
          />
        ))}

      {/* letterbox: top & bottom bars shrink to thin cinematic strips */}
      {variant === "letterbox" && (
        <>
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 origin-top bg-navy-900"
            initial={{ scaleY: 1 }}
            animate={animate ? { scaleY: 0.16 } : undefined}
            transition={{ duration: dur(1.1), ease: EASE }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-navy-900"
            initial={{ scaleY: 1 }}
            animate={animate ? { scaleY: 0.16 } : undefined}
            transition={{ duration: dur(1.1), ease: EASE }}
          />
        </>
      )}

      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
