import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import type { TestimonialsBlock } from "./types";

/**
 * Authoritative pull-quotes (Transland .testimonial-wrapper), reframed as
 * institutional / philosophy statements — NOT customer reviews. White cards,
 * big brand quote-mark, quote in display type, name + role attribution.
 */
export default function Testimonials({
  eyebrow,
  heading,
  intro,
  quotes,
  bg = "bg-slate-50",
}: TestimonialsBlock & { bg?: string }) {
  return (
    <section className={`section ${bg}`}>
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <SectionTitle ghost="Voices" kicker={eyebrow ?? "In their words"} heading={heading} />
          {intro && (
            <Reveal variant="up" index={1}>
              <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>
            </Reveal>
          )}
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.name} variant="up" index={i % 2}>
              <figure className="card h-full rounded-2xl bg-white p-8">
                <p className="quote-mark" aria-hidden>&ldquo;</p>
                <blockquote className="-mt-4 font-display text-xl font-semibold leading-snug text-navy">
                  {q.text}
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-semibold text-navy">{q.name}</span>
                  {q.role && <span className="mt-1 block text-sm uppercase tracking-wide text-brand">{q.role}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
