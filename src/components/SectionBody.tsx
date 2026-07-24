import Image from "next/image";
import Reveal from "@/components/anim/Reveal";
import type { PageSection } from "@/components/PageShell";
import { img } from "@/lib/images";

export type BodyLayout = "cards" | "rows" | "grid-num";

/** Scraped content image in a rounded, ringed frame — reused across layouts. */
function SectionMedia({
  src,
  alt,
  variant = "up",
  className = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  variant?: "up" | "left" | "right";
  className?: string;
}) {
  return (
    <Reveal variant={variant}>
      <div className={`relative overflow-hidden rounded-3xl bg-navy-900 shadow-[var(--shadow-card-hover)] ${className}`}>
        <Image
          src={img(src)}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-700 hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy/10" />
      </div>
    </Reveal>
  );
}

/**
 * One inner-page body section, rendered in one of three visually distinct
 * layouts so data-driven pages don't all read as the same card grid:
 *   cards    — brand-bar cards in a 3-up grid (the original)
 *   rows     — sticky heading left · numbered editorial rows right
 *   grid-num — big ghost-number tiles, 2-up
 * Text-only sections (no items) render as a lede paragraph regardless.
 */
export default function SectionBody({
  section,
  layout = "cards",
  bg,
  index = 0,
}: {
  section: PageSection;
  layout?: BodyLayout;
  bg: string;
  /** Page-order index — alternates media side + keeps reveals varied. */
  index?: number;
}) {
  const { heading, body, items, image, imageAlt, id } = section;
  const ghost = heading.split(" ")[0];
  const mediaFirst = index % 2 === 1; // alternate image side down the page

  // No items → lede block. With an image, becomes a media + copy split.
  if (!items?.length) {
    if (image) {
      return (
        <section id={id} className={`section scroll-mt-24 ${bg}`}>
          <div className="shell grid items-center gap-10 lg:grid-cols-2">
            <div className={mediaFirst ? "lg:order-2" : ""}>
              <SectionMedia src={image} alt={imageAlt ?? heading} variant={mediaFirst ? "right" : "left"} className="aspect-[4/3]" />
            </div>
            <div className={mediaFirst ? "lg:order-1" : ""}>
              <Reveal>
                <h2 className="text-2xl font-bold text-navy md:text-3xl">{heading}</h2>
              </Reveal>
              {body && (
                <Reveal index={1}>
                  <p className="mt-4 leading-relaxed text-slate-600">{body}</p>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      );
    }
    return (
      <section id={id} className={`section scroll-mt-24 ${bg}`}>
        <div className="shell">
          <Reveal>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">{heading}</h2>
          </Reveal>
          {body && (
            <Reveal index={1}>
              <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{body}</p>
            </Reveal>
          )}
        </div>
      </section>
    );
  }

  if (layout === "rows") {
    return (
      <section id={id} className={`section scroll-mt-24 ${bg}`}>
        <div className="shell grid gap-12 lg:grid-cols-[5fr_7fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="up">
              <span className="ghost-word" aria-hidden>{ghost}</span>
            </Reveal>
            <Reveal variant="up" index={1}>
              <h2 className="-mt-6 text-3xl font-bold text-navy md:text-4xl">{heading}</h2>
            </Reveal>
            {body && (
              <Reveal variant="up" index={2}>
                <p className="mt-5 max-w-md leading-relaxed text-slate-600">{body}</p>
              </Reveal>
            )}
            {image && (
              <div className="mt-8">
                <SectionMedia src={image} alt={imageAlt ?? heading} variant="left" className="aspect-[4/3]" />
              </div>
            )}
          </div>
          <ul className="border-t border-slate-200">
            {items.map((it, j) => (
              <Reveal key={j} variant="right" index={j % 3} as="li">
                <div className="group flex gap-6 border-b border-slate-200 py-6 transition-colors hover:bg-slate-50/60">
                  <span className="font-display text-2xl font-extrabold text-brand/40 transition-colors group-hover:text-brand">
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{it.title}</h3>
                    {it.text && <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{it.text}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (layout === "grid-num") {
    return (
      <section id={id} className={`section scroll-mt-24 ${bg}`}>
        <div className="shell">
          <div className="relative mb-12">
            <Reveal variant="up">
              <span className="ghost-word" aria-hidden>{ghost}</span>
            </Reveal>
            <Reveal variant="up" index={1}>
              <h2 className="-mt-6 max-w-2xl text-3xl font-bold text-navy md:text-4xl">{heading}</h2>
            </Reveal>
            {image && (
              <div className="mt-8">
                <SectionMedia src={image} alt={imageAlt ?? heading} variant="up" className="aspect-[21/9]" />
              </div>
            )}
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((it, j) => (
              <Reveal key={j} variant="up" index={j % 2}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]">
                  <span className="pointer-events-none absolute -right-3 -top-6 font-display text-8xl font-extrabold text-slate-100 transition-colors group-hover:text-brand-050">
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <h3 className="text-lg font-bold text-navy">{it.title}</h3>
                    {it.text && <p className="mt-3 text-sm leading-relaxed text-slate-500">{it.text}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // cards (default)
  return (
    <section id={id} className={`section scroll-mt-24 ${bg}`}>
      <div className="shell">
        <Reveal>
          <h2 className="text-2xl font-bold text-navy md:text-3xl">{heading}</h2>
        </Reveal>
        {body && (
          <Reveal index={1}>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{body}</p>
          </Reveal>
        )}
        {image && (
          <div className="mt-8">
            <SectionMedia src={image} alt={imageAlt ?? heading} variant="up" className="aspect-[21/9]" />
          </div>
        )}
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, j) => (
            <Reveal key={j} index={j % 3} as="li">
              <div className="card group h-full p-6">
                <div className="mb-3 h-1 w-8 rounded bg-brand transition-all duration-300 group-hover:w-14" />
                <h3 className="font-semibold text-navy">{it.title}</h3>
                {it.text && <p className="mt-2 text-sm leading-relaxed text-slate-500">{it.text}</p>}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
