import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import { img } from "@/lib/images";
import type { OverviewBlock } from "./types";

/**
 * Overview band — media LEFT, copy RIGHT inside a tinted panel.
 *
 * Client (2026-07-20): "What management services covers will be same style like
 * company overview section". This mirrors the Home page's Corporate Overview
 * block (`app/page.tsx`) — same 5fr/7fr split, same 4:5 media, same rounded
 * slate panel holding the paragraphs — but takes a still image rather than
 * ParallaxMedia, since inner pages supply photos, not video.
 *
 * Keep this in step with the Home Corporate Overview if that layout is retuned;
 * the client is treating them as one visual pattern.
 */
export default function Overview({
  eyebrow,
  ghost,
  heading,
  accent,
  lead,
  paragraphs,
  image,
  imageAlt,
  bg = "bg-white",
}: OverviewBlock & { bg?: string }) {
  return (
    <section className={`section ${bg}`}>
      <div className="shell grid items-center gap-12 lg:grid-cols-[5fr_7fr]">
        <Reveal variant="left">
          <div className="relative">
            <Image
              src={img(image)}
              alt={imageAlt ?? ""}
              width={900}
              height={1125}
              className="aspect-4/5 w-full rounded-3xl object-cover shadow-[var(--shadow-card-hover)]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy/10" />
          </div>
        </Reveal>

        <div className="lg:ps-4">
          <SectionTitle
            ghost={ghost ?? "Scope"}
            kicker={eyebrow ?? "Overview"}
            heading={accent ? <>{heading} <span>{accent}</span></> : heading}
          />
          {lead && (
            <Reveal variant="up" index={0}>
              <p className="mt-4 font-display text-lg font-semibold text-navy">{lead}</p>
            </Reveal>
          )}
          <div className="mt-6 space-y-4 rounded-2xl bg-slate-50 p-6 md:p-8">
            {paragraphs.map((p, i) => (
              <Reveal key={i} variant="up" index={i + 1}>
                <p className="leading-relaxed text-slate-600">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
