import Link from "next/link";
import Reveal from "@/components/anim/Reveal";
import Counter from "@/components/anim/Counter";
import VideoHero, { type HeroVariant } from "@/components/anim/VideoHero";
import ScrubBand from "@/components/anim/ScrubBand";
import SplitBand from "@/components/anim/SplitBand";
import SectionBody, { type BodyLayout } from "@/components/SectionBody";
import Blocks, { type Block } from "@/components/sections";
import { video, poster } from "@/lib/videos";

export type PageSection = {
  /** Anchor target — nav sub-items deep-link to sections (e.g. `#smart-energy`). */
  id?: string;
  heading: string;
  body?: string;
  items?: { title: string; text?: string }[];
  /** Scraped content image (filename in /public/images) shown beside the copy. */
  image?: string;
  imageAlt?: string;
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
  /** Ported Transland section blocks, rendered in order after the body sections. */
  blocks?: Block[];
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
  /**
   * Client has not released this portfolio's content yet (Trade Hub, AI & Fintech —
   * meeting 2026-07-20). Renders the hero + a "Coming Soon" placard and nothing else.
   */
  comingSoon?: boolean;
};

const base = (f: string) => f.replace(/\.mp4$/, "");

/**
 * Generic inner-page layout driven by content data. SSR + scroll reveals.
 *
 * `noCta` — client, meeting 00:43:53, while looking at the Ports & Logistics
 * portfolio page: "No call to action in the pages." Enquiry lives on Reach Us,
 * which is reachable from the nav and footer; portfolio pages present the
 * portfolio and nothing else. Suppresses BOTH the hero button and the closing
 * CTA band. Non-portfolio pages (About, Why Us, Invest/Work With Us) keep theirs.
 */
export default function PageShell({
  content,
  noCta = false,
}: {
  content: PageContent;
  noCta?: boolean;
}) {
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
          <Reveal eager index={1}>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              {content.title}
            </h1>
          </Reveal>
          <Reveal eager index={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">{content.intro}</p>
          </Reveal>
          {content.cta && !noCta && (
            <Reveal eager index={3}>
              <Link href={content.cta.href} className="btn btn-primary mt-8">
                {content.cta.label}
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* ---------- Coming Soon placard (unreleased portfolios) ---------- */}
      {content.comingSoon && (
        <section className="section bg-white">
          <div className="shell">
            <Reveal variant="scale">
              <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-navy/15 bg-slate-50 px-8 py-20 text-center">
                <h2 className="font-display text-4xl font-extrabold text-navy md:text-5xl">
                  Coming Soon
                </h2>
                <p className="mx-auto mt-5 max-w-md leading-relaxed text-slate-600">
                  This portfolio is being finalised. For early access or partnership
                  discussions, reach our team directly.
                </p>
                <Link href="/reach-us" className="btn btn-primary mt-8">
                  Reach Us
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------- Body sections ---------- */}
      {content.sections?.map((s, i) => (
        <SectionBody
          key={i}
          section={s}
          layout={content.bodyStyle}
          bg={i % 2 ? "bg-slate-50" : "bg-white"}
          index={i}
        />
      ))}

      {/* ---------- Ported template section blocks ---------- */}
      <Blocks blocks={content.blocks} offset={content.sections?.length ?? 0} />

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

      {/* ---------- Closing CTA (suppressed on portfolio pages — see `noCta`) ---------- */}
      {!noCta && (
      <section className="bg-navy-900 text-white">
        <div className="shell flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            {/* Client (2026-07-20): Promax Global is an investment firm / portfolio,
                NOT a consultancy. The previous "Connect with an expert / Talk to our
                team about your operations" read as a services pitch — replaced with
                investment-and-partnership framing. */}
            <h2 className="text-2xl font-bold md:text-3xl">Explore this opportunity</h2>
            <p className="mt-2 text-slate-300">Discuss investment, partnership, or co-development with Promax Global.</p>
          </div>
          <Link href="/reach-us" className="btn btn-primary shrink-0">
            Transmit Corporate Inquiry
          </Link>
        </div>
      </section>
      )}
    </>
  );
}
