import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import { img } from "@/lib/images";
import type { ServiceOverlayBlock } from "./types";

/**
 * Image cards with a bottom-up gradient and the title sitting over the photo
 * (Transland .single-our-service).
 *
 * NO ICON (client, 2026-07-20): a green glyph floating over the photo read badly —
 * it fought the image and added nothing the title didn't already say. The card is
 * photo + title now. `item.icon` is still accepted by the type (other blocks use
 * it) but is deliberately not rendered here.
 */
export default function ServiceOverlay({
  eyebrow,
  heading,
  intro,
  items,
  columns = 3,
  bg = "bg-white",
}: ServiceOverlayBlock & { bg?: string }) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <section className={`section ${bg}`}>
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <SectionTitle ghost="Scope" kicker={eyebrow ?? "Our services"} heading={heading} />
          {intro && (
            <Reveal variant="up" index={1}>
              <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>
            </Reveal>
          )}
        </div>
        <div className={`grid gap-6 ${cols}`}>
          {items.map((it, i) => {
            const inner = (
              <>
                <div className="relative aspect-[4/5]">
                  <Image src={img(it.image)} alt={it.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  {/* Deeper wash than before: the title stepped up in size, so it
                      needs more contrast under it to stay readable on busy photos. */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/55 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <h3 className="font-display text-2xl font-bold capitalize leading-tight md:text-[1.7rem]">{it.title}</h3>
                  {it.text && <p className="mt-2.5 leading-relaxed text-slate-200">{it.text}</p>}
                  {it.href && (
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Learn more <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                    </span>
                  )}
                </div>
              </>
            );
            const cls = "group relative block h-full overflow-hidden rounded-2xl bg-navy-900";
            return (
              <Reveal key={it.title} variant="up" index={i % Number(columns)}>
                {it.href ? <Link href={it.href} className={cls}>{inner}</Link> : <div className={cls}>{inner}</div>}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
