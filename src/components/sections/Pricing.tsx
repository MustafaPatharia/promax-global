import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import type { PricingBlock } from "./types";

/**
 * Engagement / partnership tiers (Transland .our-price-wrapper, reframed).
 * These are relationship models — Advisory / Managed / Strategic — not
 * e-commerce prices: `price` may be a phrase ("Custom") or omitted.
 * One tier can be `featured` — navy card, brand ribbon, raised + ringed.
 */
export default function Pricing({
  eyebrow,
  heading,
  intro,
  tiers,
  bg = "bg-white",
}: PricingBlock & { bg?: string }) {
  return (
    <section className={`section ${bg}`}>
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <SectionTitle ghost="Pricing" kicker={eyebrow ?? "Engagement models"} heading={heading} />
          {intro && (
            <Reveal variant="up" index={1}>
              <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>
            </Reveal>
          )}
        </div>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} variant="up" index={i % 3}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                  t.featured
                    ? "-translate-y-2 border-transparent bg-navy-900 text-white ring-2 ring-brand"
                    : "card border-slate-200/70 text-navy"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most partnered
                  </span>
                )}

                <h3 className="font-display text-xl font-bold">{t.name}</h3>

                {t.price && (
                  <p className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-extrabold text-brand">{t.price}</span>
                    {t.period && (
                      <span className={`text-sm ${t.featured ? "text-slate-300" : "text-slate-500"}`}>{t.period}</span>
                    )}
                  </p>
                )}

                <ul className={`mt-6 space-y-3 text-sm ${t.featured ? "text-slate-200" : "text-slate-600"}`}>
                  {t.features.map((f) => (
                    <li key={f} className="feature-check">
                      {f}
                    </li>
                  ))}
                </ul>

                {t.cta && (
                  <Link
                    href={t.cta.href}
                    className={`btn mt-auto self-start ${t.featured ? "btn-primary" : "btn-outline text-navy"}`}
                  >
                    {t.cta.label}
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
