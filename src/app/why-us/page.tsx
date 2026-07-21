import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import Reveal from "@/components/anim/Reveal";
import PageSchema from "@/components/PageSchema";
import SectionTitle from "@/components/SectionTitle";
import { Icons, type IconName } from "@/components/Icons";

export const metadata: Metadata = pageMeta({
  title: "Why Us",
  description:
    "Why governments choose Promax Global — government engagement, investment structuring, global partnerships, integrated delivery, operational excellence, and long-term asset stewardship.",
  path: "/why-us",
});

/** "Why Governments Choose Promax" — the 8 pillars from the client content doc. */
const pillars: { icon: IconName; title: string }[] = [
  { icon: "building", title: "Port & Infrastructure Expertise"},
  { icon: "briefcase", title: "Investment Structuring" },
  { icon: "globe", title: "Global Partnerships" },
  { icon: "layers", title: "Integrated Project Delivery" },
  { icon: "compass", title: "Operational Excellence" },
  { icon: "anchor", title: "Long-Term Asset Stewardship" },
  { icon: "bolt", title: "Technology Integration" },
  { icon: "clipboard", title: "Institutional Governance" },
];

/** From Strategy to Delivery — the 8-stage lifecycle. */
const workflow = [
  "Identify Opportunity",
  "Strategic Assessment",
  "Government Engagement",
  "Investment Structuring",
  "Design",
  "Development",
  "Operations",
  "Long-term Management",
];

/** Our Ecosystem — grouped, never a random logo wall (client instruction). */
const ecosystem: { title: string; text: string; icon: IconName }[] = [
  { icon: "briefcase", title: "Strategic Partners", text: "Group companies and long-horizon commercial allies." },
  { icon: "bolt", title: "Technology Partners", text: "OEMs, platform providers, and systems integrators." },
  { icon: "building", title: "Government Partners", text: "Ministries, regulators, and port authorities." },
  { icon: "clipboard", title: "Academic Partners", text: "Universities and research and training institutes." },
  { icon: "layers", title: "Investment Partners", text: "Sovereign funds, institutional capital, and co-investors." },
  { icon: "globe", title: "International Organizations", text: "Multilateral and development agencies." },
];

export default function WhyUsPage() {
  return (
    <>
      <PageSchema
        title="Why Us"
        description="Why governments and institutional investors choose Promax Global."
        path="/why-us"
      />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy to-navy-700" />
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative py-24 md:py-32">
          <Reveal eager>
            <p className="eyebrow !text-brand">Why Us</p>
          </Reveal>
          <Reveal eager index={1}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Why Governments Choose Promax
            </h1>
          </Reveal>
          <Reveal eager index={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Mandated rights, government-aligned frameworks, and proven execution — from first
              assessment through to long-term asset stewardship.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 8 pillars ---------- */}
      <section className="section bg-white">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <SectionTitle
              ghost="Why Us"
              kicker=""
              heading={<>Government & Institutional <span>Engagement</span></>}
            />
          </div>
          <p>We work closely with governments, public authorities, and strategic stakeholders to support the planning, development, and successful delivery of complex infrastructure and port projects.</p>
          <br></br>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = Icons[p.icon];
              return (
                <Reveal key={p.title} variant="up" index={i % 4}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]">
                    <span className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="font-display text-base font-bold leading-snug text-navy">
                      {p.title}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- From Strategy to Delivery ---------- */}
      <section className="section relative overflow-hidden bg-navy-900 text-white">
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative">
          <div className="mb-14 max-w-2xl">
            <SectionTitle
              tone="dark"
              ghost="Delivery"
              kicker="End-to-End"
              heading={<>From Strategy <span>to Delivery</span></>}
            />
          </div>

          <ol className="relative grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* connecting rail */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-brand/60 via-brand/25 to-transparent lg:block"
            />
            {workflow.map((step, i) => (
              <Reveal key={step} variant="up" index={i % 4} as="li">
                <div className="relative pe-6">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-brand/40 bg-navy-900 font-display text-lg font-extrabold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold leading-snug text-white">
                    {step}
                  </h3>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Our Ecosystem ---------- */}
      <section className="section bg-slate-50">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              ghost="Ecosystem"
              kicker=""
              heading={<>Ecosystem <span>Categories</span></>}
            />
          </div>
          <p>Promax Global collaborates with governments, strategic investors, technology providers, industry leaders, and international institutions to deliver sustainable port, infrastructure, and economic development solutions across global markets.</p>
          <br />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((e, i) => {
              const Icon = Icons[e.icon];
              return (
                <Reveal key={e.title} variant="up" index={i % 3}>
                  <div className="card h-full p-7">
                    <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-navy text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-navy">{e.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{e.text}</p>
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
              Start the conversation
            </h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Governments, sovereign funds, operators, and institutional investors — reach the team
              that will own your file.
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
