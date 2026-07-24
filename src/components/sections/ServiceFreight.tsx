import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import LineIcon, { type LineName } from "@/components/LineIcon";
import { img } from "@/lib/images";
import type { ServiceFreightBlock } from "./types";

/**
 * Ghost-icon service cards with a checklist (Transland .single-freight-service).
 * White cards; a large faint icon sits behind the top-right corner, and a brand
 * bottom bar wipes in left-to-right as the card lifts on hover.
 *
 * An item may carry a header `image` — client asked for a bright header photo on
 * the Advisory cards (00:55:38). Cards without one keep the plain ghost-icon look,
 * so mixing is safe.
 */
export default function ServiceFreight({
  eyebrow,
  heading,
  intro,
  items,
  columns = 3,
  bg = "bg-white",
  ghost = "Service",
}: ServiceFreightBlock & { bg?: string }) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <section className={`section ${bg}`}>
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <SectionTitle ghost={ghost} kicker={eyebrow ?? "Our services"} heading={heading} />
          {intro && (
            <Reveal variant="up" index={1}>
              <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>
            </Reveal>
          )}
        </div>
        <div className={`grid gap-6 ${cols}`}>
          {items.map((it, i) => {
            return (
              <Reveal key={it.title} variant="up" index={i % Number(columns)}>
                <div className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {it.image && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={img(it.image)}
                        alt={it.imageAlt ?? it.title}
                        fill
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="relative isolate flex flex-1 flex-col p-8">
                  {/* Ghost icon behind the corner */}
                  {it.icon && (
                    <LineIcon
                      name={it.icon as LineName}
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
                      Learn more
                    </Link>
                  )}
                  {/* Brand bottom bar wipes in on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full"
                  />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
