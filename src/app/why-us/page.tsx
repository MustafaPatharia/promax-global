import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/images";
import Reveal from "@/components/anim/Reveal";
import PageSchema from "@/components/PageSchema";
import SectionTitle from "@/components/SectionTitle";
import LineIcon, { type LineName } from "@/components/LineIcon";

export const metadata: Metadata = pageMeta({
  title: "Why Us",
  description:
    "Why governments choose Promax Global — government engagement, port & infrastructure expertise, investment structuring, global partnerships, integrated delivery, operational excellence, technology integration, and long-term asset stewardship.",
  path: "/why-us",
});

/** §9.1 — sub-points under "Government & Institutional Engagement" (title + description, verbatim from spec). */
const reasons: { icon: LineName; title: string; desc: string }[] = [
  {
    icon: "anchor",
    title: "Port & Infrastructure Expertise",
    desc: "Our expertise spans the full port ecosystem, including port development, terminal operations, marine infrastructure, logistics integration, and strategic port equipment.",
  },
  {
    icon: "briefcase",
    title: "Investment Structuring",
    desc: "We help develop commercially sustainable investment models, including public-private partnerships (PPPs), strategic financing structures, and long-term investment frameworks.",
  },
  {
    icon: "handshake",
    title: "Global Partnerships",
    desc: "Through a trusted international network of operators, investors, technology providers, and industry specialists, we bring together the right partners to deliver successful projects.",
  },
  {
    icon: "layers",
    title: "Integrated Project Delivery",
    desc: "We provide an integrated approach that aligns strategy, infrastructure, technology, commercial objectives, and operational requirements under one coordinated delivery model.",
  },
  {
    icon: "compass",
    title: "Operational Excellence",
    desc: "We are committed to delivering efficient, reliable, and high-performing solutions that meet international standards and create long-term operational value.",
  },
  {
    icon: "cpu",
    title: "Technology Integration",
    desc: "We integrate smart technologies, digital platforms, automation, and data-driven solutions to enhance operational performance and support the future of modern ports.",
  },
  {
    icon: "growth",
    title: "Long-Term Asset Stewardship",
    desc: "Our approach focuses on maximizing the long-term performance, resilience, and sustainability of critical infrastructure through effective asset lifecycle management.",
  },
];

/** §9.2 — Sustainability pillars (name + description, verbatim from spec). */
const pillars: { icon: LineName; title: string; desc: string }[] = [
  {
    icon: "leaf",
    title: "Environmental",
    desc: "Supporting sustainable infrastructure, climate resilience, resource efficiency, and responsible environmental stewardship.",
  },
  {
    icon: "users",
    title: "Social",
    desc: "Creating positive social impact through local capacity building, workforce development, community engagement, and knowledge transfer.",
  },
  {
    icon: "shield",
    title: "Governance",
    desc: "Upholding the highest standards of ethics, transparency, accountability, and responsible corporate governance.",
  },
];

const frameworks = [
  "United Nations Sustainable Development Goals (UN SDGs)",
  "UAE Net Zero 2050 Strategic Initiative",
  "Responsible Investment Principles",
  "International ESG Best Practices",
];

/** §9.3 — Our Ecosystem: grouped categories, never a random logo wall (client instruction). */
const ecosystem: { title: string; text: string; icon: LineName }[] = [
  { icon: "briefcase", title: "Strategic Partners", text: "Group companies and long-horizon commercial allies." },
  { icon: "cpu", title: "Technology Partners", text: "OEMs, platform providers, and systems integrators." },
  { icon: "building", title: "Government Partners", text: "Ministries, regulators, and port authorities." },
  { icon: "graduation", title: "Academic & Research Partners", text: "Universities, research bodies, and training institutes." },
  { icon: "growth", title: "Investment Partners", text: "Sovereign funds, institutional capital, and co-investors." },
  { icon: "globe", title: "International Organizations", text: "Multilateral and development agencies." },
];

/** §9.4 — From Strategy to Delivery: the lifecycle stages (verbatim from spec). */
const workflow = [
  "Identify Opportunity",
  "Strategic Assessment",
  "Government Engagement",
  "Investment Structuring",
  "Planning & Development",
  "Project Delivery",
  "Operations",
  "Long-term Management",
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img("a148740f_End_to_End_Port_Operations.png")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/90 to-navy-900/70" />
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative py-24 md:py-32">
          <Reveal eager>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Why Governments Choose Promax
            </h1>
          </Reveal>
          <Reveal eager index={1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Promax Global combines sector expertise, strategic partnerships, and integrated
              delivery capabilities to support governments and port authorities in developing
              resilient, commercially sustainable, and future-ready infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- §9.1 · Reasons ---------- */}
      <section className="section bg-white">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <SectionTitle
              ghost="Why Us"
              heading={<>Government &amp; Institutional <span>Engagement</span></>}
            />
            <Reveal variant="up" index={1}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We work closely with governments, public authorities, and strategic stakeholders to
                support the planning, development, and successful delivery of complex infrastructure
                and port projects.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} variant="up" index={i % 3}>
                <div className="card group relative h-full overflow-hidden p-7 transition-colors duration-500 hover:border-brand/40">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand/10 text-brand transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                    <LineIcon name={r.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-brand">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- §9.2 · Sustainability ---------- */}
      <section className="section bg-slate-50">
        <div className="shell">
          <div className="mb-10 max-w-3xl">
            <SectionTitle
              ghost="Sustainability"
              heading={<>Creating Long-Term Value Through <span>Responsible Growth</span></>}
            />
            <Reveal variant="up" index={1}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Promax Global is committed to creating long-term value through responsible
                infrastructure development, sustainable business practices, and strong governance
                that supports resilient economies and future generations.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} variant="up" index={i}>
                <div className="card group relative h-full overflow-hidden p-7 transition-colors duration-500 hover:border-brand/40">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand/10 text-brand transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                    <LineIcon name={p.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy transition-colors duration-300 group-hover:text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Aligned with global frameworks */}
          <Reveal variant="up">
            <div className="card mt-6 p-7 md:p-9">
              <p className="text-center font-display text-2xl font-extrabold text-navy md:text-3xl">
                Aligned with global frameworks
              </p>
              <ul className="mx-auto mt-7 grid w-fit gap-x-16 gap-y-5 sm:grid-cols-2">
                {frameworks.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-left text-base font-semibold text-slate-700 md:text-lg">
                    <LineIcon name="check" className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- §9.3 · Our Ecosystem ---------- */}
      <section className="section bg-white">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <SectionTitle
              ghost="Ecosystem"
              heading={<>Ecosystem <span>Categories</span></>}
            />
            <Reveal variant="up" index={1}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Promax Global collaborates with governments, strategic investors, technology
                providers, industry leaders, and international institutions to deliver sustainable
                port, infrastructure, and economic development solutions across global markets.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((e, i) => (
              <Reveal key={e.title} variant="up" index={i % 3}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition-colors duration-500 hover:border-[#d6dbe2] hover:bg-[#eef1f5]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy/10 text-navy transition-colors duration-500 group-hover:bg-navy group-hover:text-white">
                    <LineIcon name={e.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{e.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- §9.4 · From Strategy to Delivery ---------- */}
      <section className="section relative overflow-hidden bg-navy-900 text-white">
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative">
          <div className="mb-6 max-w-2xl">
            <SectionTitle
              tone="dark"
              ghost="Delivery"
              heading={<>From Strategy <span>to Delivery</span></>}
            />
          </div>
          <Reveal variant="up" index={1}>
            <p className="mb-14 max-w-2xl text-lg leading-relaxed text-slate-200">
              A structured approach that transforms strategic opportunities into sustainable
              infrastructure and long-term operational success.
            </p>
          </Reveal>

          <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, i) => (
              <Reveal key={step} variant="up" index={i % 4} as="li">
                <div className="group relative flex gap-4 pe-2">
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/40 bg-navy-900 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:border-brand group-hover:bg-brand">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand transition-colors duration-500 group-hover:bg-white" />
                  </span>
                  <h3 className="pt-2 font-display text-base font-bold leading-snug text-white transition-colors duration-300 group-hover:text-brand">
                    {step}
                  </h3>
                </div>
              </Reveal>
            ))}
          </ol>
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
            Reach Us
          </Link>
        </div>
      </section>
    </>
  );
}
