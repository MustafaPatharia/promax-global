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
      {/* base cinematic gradient — always present, also the reduced-motion look */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_75%_-10%,rgba(249,115,22,0.20),transparent_55%),linear-gradient(180deg,#0f2942,#132f4c_60%,#1a3a5c)]" />
      {enabled && <HeroScene />}
      {/* readability veil over the particles — must not eat pointer events
          or the globe below would stop reacting to the mouse */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900/70 via-navy-900/30 to-transparent" />
    </div>
  );
}
