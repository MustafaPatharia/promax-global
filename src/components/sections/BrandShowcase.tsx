import Marquee from "@/components/anim/Marquee";
import Counter from "@/components/anim/Counter";
import Reveal from "@/components/anim/Reveal";
import type { BrandShowcaseBlock } from "./types";

/**
 * Stakeholder logo strip + count-up stats — Transland .brand-showcase-funfact-wrapper.
 * "Logos" are stakeholder category labels (no real partner images), rendered by
 * Marquee as monogram chips. Server component — Marquee is pure CSS, Counter/Reveal
 * are their own "use client" islands.
 */
export default function BrandShowcase({
  eyebrow,
  heading,
  logos,
  stats,
  bg = "bg-white",
}: BrandShowcaseBlock & { bg?: string }) {
  return (
    <section className={`section ${bg}`}>
      <div className="shell">
        <Reveal variant="up" className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            {eyebrow ?? "Trusted across the sector"}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">{heading}</h2>
        </Reveal>

        <Marquee items={logos} />

        {stats && stats.length > 0 && (
          <dl className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} variant="up" index={i} className="text-center">
                <dt className="font-display text-4xl font-extrabold text-brand">
                  <Counter value={s.value} />
                </dt>
                <dd className="mt-1 text-sm text-slate-500">{s.label}</dd>
              </Reveal>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
