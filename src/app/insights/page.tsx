import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/images";
import Reveal from "@/components/anim/Reveal";
import PageSchema from "@/components/PageSchema";
import SectionTitle from "@/components/SectionTitle";
import LineIcon, { type LineName } from "@/components/LineIcon";

export const metadata: Metadata = pageMeta({
  title: "Insights",
  description:
    "Promax Global perspectives on ports, infrastructure, global trade, technology, investment, and sustainable economic development — thought leadership, reports, news, events, and videos.",
  path: "/insights",
});

/**
 * The six content streams from the content spec §10 (News & Insights), verbatim
 * titles + descriptions. No items supplied yet, so each renders as an empty-state
 * card. Line icons (shared LineIcon), not the duotone Icons set.
 */
const streams: { icon: LineName; title: string; text: string }[] = [
  {
    icon: "compass",
    title: "Thought Leadership",
    text: "Executive perspectives and strategic viewpoints on industry developments, economic transformation, and long-term value creation.",
  },
  {
    icon: "chart",
    title: "Industry Insights",
    text: "Articles and analysis covering ports, maritime trade, logistics, infrastructure, technology, and global market trends.",
  },
  {
    icon: "clipboard",
    title: "Reports & Whitepapers",
    text: "In-depth research and strategic publications addressing major industry opportunities, challenges, and future developments.",
  },
  {
    icon: "newspaper",
    title: "News & Media",
    text: "Company announcements, project updates, strategic partnerships, media coverage, and corporate developments.",
  },
  {
    icon: "users",
    title: "Events",
    text: "International conferences, government forums, industry events, and strategic engagements.",
  },
  {
    icon: "play",
    title: "Videos",
    text: "Leadership interviews, project features, event highlights, and multimedia insights.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageSchema
        title="Insights"
        description="Promax Global perspectives on ports, infrastructure, global trade, technology, investment, and sustainable economic development."
        path="/insights"
      />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img("insights-hero.jpg")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/90 to-navy-900/70" />
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative py-24 md:py-32">
          <Reveal eager>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
              News &amp; Insights
            </h1>
          </Reveal>
          <Reveal eager index={1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Explore Promax Global&apos;s perspectives on ports, infrastructure, global trade,
              technology, investment, and sustainable economic development.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Content streams ---------- */}
      <section className="section bg-white">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              ghost="Insights"
              heading={
                <>
                  Explore our <span>insight library</span>
                </>
              }
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {streams.map((s, i) => (
              <Reveal key={s.title} variant="up" index={i % 3}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                    <LineIcon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{s.text}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Publishing soon
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Innovation statement (meeting 2026-07-21, 01:57:17) ---------- */}
      <section className="bg-navy-900 text-white">
        <div className="shell py-20 md:py-28">
          <Reveal variant="up">
            <p className="mx-auto max-w-4xl text-center font-display text-2xl font-bold leading-snug md:text-4xl">
              Rooted in the UAE&apos;s spirit of innovation, we transform bold local ideas
              <span className="text-brand"> from the UAE to the world.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-brand-050">
        <div className="shell flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Want a briefing?
            </h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Request research, a sector briefing, or an executive conversation with our team.
            </p>
          </div>
          <Link href="/reach-us" className="btn btn-primary shrink-0">
            Reach Us
          </Link>
        </div>
      </section>
    </>
  );
}
