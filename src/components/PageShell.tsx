import Link from "next/link";
import type { Faq } from "@/lib/faqs";
import Reveal from "@/components/anim/Reveal";
import Counter from "@/components/anim/Counter";
import VideoHero, { type HeroVariant } from "@/components/anim/VideoHero";
import ScrubBand from "@/components/anim/ScrubBand";
import SplitBand from "@/components/anim/SplitBand";
import SectionBody, { type BodyLayout } from "@/components/SectionBody";
import { video, poster } from "@/lib/videos";

export type PageSection = {
  heading: string;
  body?: string;
  items?: { title: string; text?: string }[];
};

export type PageContent = {
  eyebrow?: string;
  title: string;
  intro: string;
  /** Filename in /public/videos for a full-bleed hero (poster auto-derived). */
  heroVideo?: string;
  /** Reveal/motion style for the hero video — keeps heroes from looking alike. */
  heroStyle?: HeroVariant;
  sections?: PageSection[];
  /** Layout for the body `items` block — varies page structure, not just video. */
  bodyStyle?: BodyLayout;
  /** Count-up stat band. */
  stats?: { value: string; label: string }[];
  /**
   * Mid-page feature band. `style` picks the treatment:
   *   scrub — heavy navy pinned scroll-scrub (default)
   *   split — light editorial parallax media + copy
   */
  band?: { video: string; eyebrow: string; heading: string; text: string; style?: "scrub" | "split" };
  /** Pull-quote — real leadership/philosophy line, never a fabricated testimonial. */
  quote?: { text: string; who?: string };
  cta?: { label: string; href: string };
};

const base = (f: string) => f.replace(/\.mp4$/, "");

/** Generic inner-page layout driven by content data. SSR + scroll reveals. */
export default function PageShell({ content, faqs }: { content: PageContent; faqs?: Faq[] }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden text-white">
        {content.heroVideo ? (
          <VideoHero
            src={video(content.heroVideo)}
            poster={poster(base(content.heroVideo))}
            variant={content.heroStyle}
            overlay="bg-gradient-to-br from-navy-900/92 via-navy/82 to-navy-700/70"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy to-navy-700" />
            <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
          </>
        )}
        <div className="shell relative py-24 md:py-32">
          {content.eyebrow && (
            <Reveal>
              <p className="eyebrow !text-brand">{content.eyebrow}</p>
            </Reveal>
          )}
          <Reveal index={1}>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              {content.title}
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">{content.intro}</p>
          </Reveal>
          {content.cta && (
            <Reveal index={3}>
              <Link href={content.cta.href} className="btn btn-primary mt-8">
                {content.cta.label} <span aria-hidden>→</span>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* ---------- Body sections ---------- */}
      {content.sections?.map((s, i) => (
        <SectionBody
          key={i}
          section={s}
          layout={content.bodyStyle}
          bg={i % 2 ? "bg-slate-50" : "bg-white"}
        />
      ))}

      {/* ---------- Stat band ---------- */}
      {content.stats?.length ? (
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
          <div className="shell relative py-16 md:py-20">
            <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {content.stats.map((s, i) => (
                <Reveal key={s.label} index={i}>
                  <div className="text-center sm:text-left">
                    <dt className="font-display text-5xl font-extrabold text-brand">
                      <Counter value={s.value} />
                    </dt>
                    <dd className="mt-2 text-sm leading-snug text-slate-300">{s.label}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      {/* ---------- Mid-page feature band (scrub = navy pinned · split = light editorial) ---------- */}
      {content.band &&
        (content.band.style === "split" ? (
          <SplitBand
            src={content.band.video}
            eyebrow={content.band.eyebrow}
            heading={content.band.heading}
            text={content.band.text}
          />
        ) : (
          <ScrubBand
            src={video(content.band.video)}
            poster={poster(base(content.band.video))}
            eyebrow={content.band.eyebrow}
            title={content.band.heading}
            text={content.band.text}
          />
        ))}

      {/* ---------- Pull-quote ---------- */}
      {content.quote && (
        <section className="section bg-white">
          <div className="shell max-w-4xl">
            <Reveal>
              <p className="quote-mark" aria-hidden>&ldquo;</p>
            </Reveal>
            <Reveal index={1}>
              <blockquote className="-mt-4 font-display text-2xl font-semibold leading-snug text-navy md:text-3xl">
                {content.quote.text}
              </blockquote>
            </Reveal>
            {content.quote.who && (
              <Reveal index={2}>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand">
                  {content.quote.who}
                </p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ---------- FAQ — quotable Q&A for humans and AI answer engines ---------- */}
      {faqs?.length ? (
        <section className="section bg-slate-50">
          <div className="shell">
            <Reveal>
              <h2 className="text-2xl font-bold text-navy md:text-3xl">Frequently asked questions</h2>
            </Reveal>
            <div className="mt-8 max-w-3xl divide-y divide-slate-200 border-t border-slate-200">
              {faqs.map((f, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                    {f.q}
                    <span className="text-brand transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------- Closing CTA ---------- */}
      <section className="bg-navy-900 text-white">
        <div className="shell flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Connect with an expert</h2>
            <p className="mt-2 text-slate-300">Talk to our team about your operations, project, or investment.</p>
          </div>
          <Link href="/contact" className="btn btn-primary shrink-0">
            Transmit Corporate Inquiry <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
