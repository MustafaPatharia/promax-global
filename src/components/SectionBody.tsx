import Reveal from "@/components/anim/Reveal";
import type { PageSection } from "@/components/PageShell";

export type BodyLayout = "cards" | "rows" | "grid-num";

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
}: {
  section: PageSection;
  layout?: BodyLayout;
  bg: string;
}) {
  const { heading, body, items } = section;
  const ghost = heading.split(" ")[0];

  // No items → simple lede block (used by about's intro section)
  if (!items?.length) {
    return (
      <section className={`section ${bg}`}>
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
      <section className={`section ${bg}`}>
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
      <section className={`section ${bg}`}>
        <div className="shell">
          <div className="relative mb-12">
            <Reveal variant="up">
              <span className="ghost-word" aria-hidden>{ghost}</span>
            </Reveal>
            <Reveal variant="up" index={1}>
              <h2 className="-mt-6 max-w-2xl text-3xl font-bold text-navy md:text-4xl">{heading}</h2>
            </Reveal>
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
    <section className={`section ${bg}`}>
      <div className="shell">
        <Reveal>
          <h2 className="text-2xl font-bold text-navy md:text-3xl">{heading}</h2>
        </Reveal>
        {body && (
          <Reveal index={1}>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{body}</p>
          </Reveal>
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
