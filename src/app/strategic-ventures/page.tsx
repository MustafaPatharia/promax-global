import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/images";
import Reveal from "@/components/anim/Reveal";
import PageSchema from "@/components/PageSchema";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = pageMeta({
  title: "Strategic Ventures",
  description:
    "Promax Global strategic ventures — blue ports, dry ports, logistics hubs, industrial parks, technology cities, smart energy metering, manufacturing, digital investment platforms, and workforce mobility.",
  path: "/strategic-ventures",
});

/**
 * 4×3 grid = the 12 ventures named in the client content doc.
 * `scope` copy is PENDING from the client ("content below will be provided by us
 * separately… keep space for at least 100 characters per box"). Placeholders below
 * are marked so they are obvious and easy to swap — do not treat as final copy.
 */
const ventures: { name: string; note?: string; image: string }[] = [
  { name: "Blue Ports", image: "1ea8c37b_ports_logistics.png" },
  { name: "Dry Port", image: "c820e038_Civil_Infrastructure_Development.png" },
  { name: "Logistics Hub", image: "c67c3f81_Warehousing_Logistics_Excellence.jpg" },
  { name: "Industrial Park", note: "Trot Industrial Park", image: "6c067065_Bulk_Ports_Management.png" },
  { name: "Technology City", note: "Dhafra Project", image: "4cae52b3_Digital_Infrastructure.png" },
  { name: "Smart Energy Metering", note: "Burkina Faso", image: "3065eb1c_Smart_Green_Energy.jpg" },
  { name: "Manufacturing", image: "f6a007dc_Container_Terminals_Optimization.jpg" },
  { name: "Digital Investment Platform", image: "4fc30b83_Technology_Fintech.jpg" },
  { name: "Digital Wallet", image: "81f48c6c_digitalization_smart.jpg" },
  { name: "Breakbulk Port", image: "f8a755b9_marine_port.jpg" },
  { name: "Workforce Mobility", image: "0b46d0da_training_change.jpg" },
  { name: "Skill Development", image: "75287166_Skills_Education.jpg" },
];

export default function StrategicVenturesPage() {
  return (
    <>
      <PageSchema
        title="Strategic Ventures"
        description="Twelve strategic ventures spanning ports, industry, technology, energy, and workforce development."
        path="/strategic-ventures"
      />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy to-navy-700" />
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative py-24 md:py-32">
          <Reveal eager>
            <p className="eyebrow !text-brand">Strategic Ventures</p>
          </Reveal>
          <Reveal eager index={1}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Ventures building the future of nations
            </h1>
          </Reveal>
          <Reveal eager index={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              A portfolio of mandated and co-developed ventures spanning ports, industry,
              technology, energy, and human capital — across the GCC, Africa, Asia, and the
              Atlantic.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 4×3 venture grid ---------- */}
      <section className="section bg-white">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              ghost="Ventures"
              kicker="Twelve Ventures"
              heading={<>Where we are <span>building</span></>}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ventures.map((v, i) => (
              <Reveal key={v.name} variant="up" index={i % 4}>
                <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                    <Image
                      src={img(v.image)}
                      alt={v.name}
                      fill
                      sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold leading-snug text-navy">
                      {v.name}
                    </h3>
                    {v.note && (
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand">
                        {v.note}
                      </p>
                    )}
                    {/* Scope copy pending from client — ~100+ chars per box */}
                    <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-slate-400 italic">
                      Scope description to be provided.
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-brand-050">
        <div className="shell flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Partner with Promax Global
            </h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Co-develop high-impact assets that strengthen trade, food security, and national
              resilience across emerging markets.
            </p>
          </div>
          <Link href="/invest-with-us" className="btn btn-primary shrink-0">
            Invest With Us <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
