import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import Reveal from "@/components/anim/Reveal";
import PageSchema from "@/components/PageSchema";
import SectionTitle from "@/components/SectionTitle";
import { Icons, type IconName } from "@/components/Icons";

export const metadata: Metadata = pageMeta({
  title: "Insights",
  description:
    "Promax Global insights — articles, leadership thoughts, industry reports, whitepapers, research, media, events, and videos.",
  path: "/insights",
});

/**
 * The 8 insight categories from the client content doc. No items have been supplied
 * yet, so each category renders as an empty-state card rather than fabricated posts.
 */
const categories: { icon: IconName; title: string; text: string }[] = [
  { icon: "clipboard", title: "Articles", text: "Perspective pieces on trade, infrastructure, and investment." },
  { icon: "briefcase", title: "Leadership Thoughts", text: "Views from the Promax Global leadership team." },
  { icon: "layers", title: "Industry Reports", text: "Sector analysis across ports, energy, and digital economy." },
  { icon: "building", title: "Whitepapers", text: "In-depth technical and policy papers." },
  { icon: "compass", title: "Research", text: "Primary research and market studies." },
  { icon: "globe", title: "Media", text: "Press coverage and announcements." },
  { icon: "anchor", title: "Events", text: "Forums, roundtables, and investor briefings." },
  { icon: "bolt", title: "Videos", text: "Project films and executive interviews." },
];

export default function InsightsPage() {
  return (
    <>
      <PageSchema
        title="Insights"
        description="Articles, leadership thoughts, industry reports, whitepapers, research, media, events, and videos from Promax Global."
        path="/insights"
      />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy to-navy-700" />
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative py-24 md:py-32">
          <Reveal eager>
            <p className="eyebrow !text-brand">Insights</p>
          </Reveal>
          <Reveal eager index={1}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Thinking from the gateway
            </h1>
          </Reveal>
          <Reveal eager index={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Research, reports, and perspective on the infrastructure, trade, and energy shifts
              shaping national economies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Categories ---------- */}
      <section className="section bg-white">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              ghost="Insights"
              kicker="Eight Streams"
              heading={<>Explore our <span>insight library</span></>}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => {
              const Icon = Icons[c.icon];
              return (
                <Reveal key={c.title} variant="up" index={i % 4}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]">
                    <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-navy">{c.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{c.text}</p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Publishing soon
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
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
            Reach Us <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
