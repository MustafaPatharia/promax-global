import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import { Icons } from "@/components/Icons";
import type { ServiceFreightBlock } from "./types";

/**
 * Ghost-icon service cards with a checklist (Transland .single-freight-service).
 * White cards; a large faint icon sits behind the top-right corner, and a brand
 * bottom bar wipes in left-to-right as the card lifts on hover.
 */
export default function ServiceFreight({
  eyebrow,
  heading,
  intro,
  items,
  bg = "bg-white",
}: ServiceFreightBlock & { bg?: string }) {
  return (
    <section className={`section ${bg}`}>
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <SectionTitle ghost="Freight" kicker={eyebrow ?? "Our services"} heading={heading} />
          {intro && (
            <Reveal variant="up" index={1}>
              <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>
            </Reveal>
          )}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon ? Icons[it.icon] : null;
            return (
              <Reveal key={it.title} variant="up" index={i % 3}>
                <div className="group relative isolate h-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Ghost icon behind the corner */}
                  {Icon && (
                    <Icon
                      aria-hidden
                      className="pointer-events-none absolute -right-3 top-2 -z-10 h-32 w-32 text-slate-100 transition duration-500 group-hover:-translate-x-2 group-hover:scale-105"
                    />
                  )}
                  <h3 className="text-xl font-bold capitalize text-navy transition-colors group-hover:text-brand">
                    {it.href ? (
                      <Link href={it.href} className="transition-colors hover:text-brand">
                        {it.title}
                      </Link>
                    ) : (
                      it.title
                    )}
                  </h3>
                  {it.text && <p className="mt-3 text-sm leading-relaxed text-slate-500">{it.text}</p>}
                  {it.checklist && it.checklist.length > 0 && (
                    <ul className="mt-6 space-y-2.5">
                      {it.checklist.map((c) => (
                        <li key={c} className="feature-check text-sm text-navy">
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                  {it.href && (
                    <Link
                      href={it.href}
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand"
                    >
                      Learn more <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                    </Link>
                  )}
                  {/* Brand bottom bar wipes in on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
