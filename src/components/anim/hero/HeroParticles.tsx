"use client";
/**
 * Full-bleed particle backdrop for the hero. The heavy WebGL scene is
 * lazy-loaded (ssr:false) so it never touches the server bundle, and it is
 * skipped entirely under prefers-reduced-motion (a static gradient carries
 * the look instead — no GPU, no motion).
 */
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function HeroParticles() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (!prefersReducedMotion()) setEnabled(true);
  }, []);

  return (
    <div className="absolute inset-0 -z-0" aria-hidden>
      {/* Base cinematic gradient — always present, also the reduced-motion look.
          Accent sits at 25% to sit BEHIND the globe, which the client moved to the
          left (00:08:16). Was rgba(249,115,22) — leftover orange from before the
          green rebrand; now brand green #3aa328. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_25%_-10%,rgba(58,163,40,0.20),transparent_55%),linear-gradient(180deg,#0f2942,#132f4c_60%,#1a3a5c)]" />
      {enabled && <HeroScene />}
      {/* Readability veil — darkens the RIGHT half, where the copy now sits, and
          leaves the left clear for the globe. Must not eat pointer events or the
          globe below would stop reacting to the mouse. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-navy-900/75 via-navy-900/35 to-transparent" />
    </div>
  );
}
