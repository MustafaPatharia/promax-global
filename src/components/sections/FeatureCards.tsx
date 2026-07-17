import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import { Icons } from "@/components/Icons";
import type { FeatureCardsBlock } from "./types";

/**
 * Icon-card grid (Transland .single-features-box / why-chose-us).
 * White cards, brand icon that shifts on hover, subtle lift.
 */
export default function FeatureCards({
  eyebrow,
  heading,
  intro,
  items,
  columns = 3,
  tone = "light",
  bg = "bg-white",
}: FeatureCardsBlock & { bg?: string }) {
  const dark = tone === "dark";
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <section className={`section ${dark ? "bg-navy-900 text-white" : bg}`}>
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <SectionTitle tone={dark ? "dark" : "light"} ghost="Offer" kicker={eyebrow ?? "What we offer"} heading={heading} />
          {intro && (
            <Reveal variant="up" index={1}>
              <p className={`mt-4 leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{intro}</p>
            </Reveal>
          )}
        </div>
        <div className={`grid gap-6 ${cols}`}>
          {items.map((it, i) => {
            const Icon = it.icon ? Icons[it.icon] : null;
            return (
              <Reveal key={it.title} variant="up" index={i % Number(columns)}>
                <div
                  className={`group h-full rounded-2xl p-7 transition hover:-translate-y-1.5 ${
                    dark
                      ? "border border-white/10 bg-white/[0.04] hover:border-brand/50 hover:bg-white/[0.07]"
                      : "card hover:border-brand/40"
                  }`}
                >
                  <span
                    className={`mb-5 grid h-14 w-14 place-items-center rounded-xl transition ${
                      dark ? "bg-brand/15 text-brand group-hover:bg-brand group-hover:text-white" : "bg-brand-050 text-brand group-hover:bg-brand group-hover:text-white"
                    }`}
                  >
                    {Icon ? <Icon className="h-7 w-7" /> : <span className="font-display text-xl font-bold">{String(i + 1).padStart(2, "0")}</span>}
                  </span>
                  <h3 className={`text-lg font-bold ${dark ? "text-white" : "text-navy"}`}>{it.title}</h3>
                  {it.text && <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-500"}`}>{it.text}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
