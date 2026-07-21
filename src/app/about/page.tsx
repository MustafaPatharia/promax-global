import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pages } from "@/lib/content";
import { faqs } from "@/lib/faqs";
import { pageMeta } from "@/lib/seo";
import { asset } from "@/lib/assets";
import PageSchema from "@/components/PageSchema";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  description: pages["about"].metaDescription,
  path: "/about",
});

/**
 * ABOUT US — hand-composed to the client content doc (§6) and the finished
 * mockup `_content/reference/mockups/01-uae-foundation-panel.png`.
 *
 * §6.1 The UAE Foundation / Leadership Inspiration panel is the page opener:
 * a two-column plate — left = "Proudly Headquartered in Abu Dhabi" (skyline +
 * copy + five foundations); right = "Inspired by the Vision of the UAE" (the
 * two founder quotations). Text is transcribed verbatim from the mockup.
 *
 * Sections still to come (built next, per the doc): §6.2 Sustainability & ESG ·
 * §6.3 Global Footprint · §6.4 Leadership & Governance.
 */

/* Images the client will supply — drop the file into public/about/ and set the
   path here; each renders a themed placeholder until then. */
const IMAGES: Record<"skyline" | "zayed" | "mbz", string | null> = {
  skyline: "/images/abu_dhabi_buildings.png",
  zayed: "/highness/Sheikh Zayed bin Sultan Al Nahyan.jpg",
  mbz: "/highness/Sheikh Mohamed bin Zayed Al Nahyan.jpg",
};

/**
 * Thin LINE icons for the foundations strip — the mockup uses stroke glyphs,
 * NOT the site's duotone `Icons` set. Kept local to this section for that
 * reason. 24×24, 1.5 stroke, currentColor (rendered gold here).
 */
type LineName = "pin" | "globe" | "chart" | "handshake" | "users" | "leaf" | "shield" | "check";
const LINE_PATHS: Record<LineName, React.ReactNode> = {
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </>
  ),
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  pin: (
    <>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V6" />
      <path d="M8 17v-4" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
};

function LineIcon({ name, className }: { name: LineName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {LINE_PATHS[name]}
    </svg>
  );
}

/** The five UAE "foundations" strip across the bottom of the left panel. */
const foundations: { icon: LineName; title: string; text: string }[] = [
  { icon: "pin", title: "Strategic Location", text: "Gateway between East, West, and Africa" },
  { icon: "globe", title: "World-Class Infrastructure", text: "Advanced ports, logistics hubs, and connectivity" },
  { icon: "chart", title: "Global Business Environment", text: "Investor-friendly, stable, and future-focused" },
  { icon: "handshake", title: "Strong Partnerships & Collaboration", text: "Working with governments, institutions and global industry leaders" },
  { icon: "users", title: "Sustainable Future", text: "Creating long-term value for nations and future generations" },
];

/** The two founder quotations (right panel). */
const quotes = [
  {
    portrait: IMAGES.zayed,
    portraitAlt: "Sheikh Zayed bin Sultan Al Nahyan",
    quote: "Wealth is not money. Wealth lies in men. This is where true power lies.",
    by: "The Founding Father,",
    who: "Sheikh Zayed bin Sultan Al Nahyan",
    body: "Promax Global embraces this enduring philosophy by investing in people, strategic partnerships, sustainable infrastructure, and long-term economic development that benefits nations and future generations.",
  },
  {
    portrait: IMAGES.mbz,
    portraitAlt: "Sheikh Mohamed bin Zayed Al Nahyan",
    quote: "The wealth of the UAE lies in its people.",
    by: "His Highness",
    who: "Sheikh Mohamed bin Zayed Al Nahyan",
    body: "Inspired by this vision, Promax Global believes that sustainable prosperity is created through innovation, capability development, responsible investment, and international collaboration.",
  },
];

/* ---------------------- §6.2 Sustainability & ESG ---------------------- */
const esgIntro = [
  "At Promax Global, sustainability is integrated into the way we invest, develop, and advise. Our ESG approach helps ensure that the projects and partnerships we support generate lasting economic value while contributing positively to the environment, society, and the communities we serve.",
  "Guided by international best practices and responsible investment principles, we focus on creating resilient infrastructure, fostering inclusive growth, and maintaining the highest standards of corporate governance.",
];

const pillars: { icon: LineName; title: string; desc: string; points: string[] }[] = [
  {
    icon: "leaf",
    title: "Environmental",
    desc: "We support sustainable infrastructure and development initiatives that enhance climate resilience, improve resource efficiency, and promote responsible environmental stewardship.",
    points: [
      "Sustainable infrastructure development",
      "Climate resilience and adaptation",
      "Resource and energy efficiency",
      "Environmental risk management",
    ],
  },
  {
    icon: "users",
    title: "Social",
    desc: "We are committed to creating positive social impact through workforce development, local participation, knowledge transfer, and meaningful community engagement.",
    points: [
      "Local capacity building",
      "Workforce development",
      "Community engagement",
      "Knowledge transfer and skills enhancement",
    ],
  },
  {
    icon: "shield",
    title: "Governance",
    desc: "Strong governance forms the foundation of our business. We uphold high standards of ethics, transparency, accountability, and responsible decision-making across all our activities.",
    points: [
      "Ethical business practices",
      "Transparency and accountability",
      "Risk management and compliance",
      "Responsible corporate governance",
    ],
  },
];

const frameworks = [
  "United Nations Sustainable Development Goals (UN SDGs)",
  "UAE Net Zero 2050 Strategic Initiative",
  "Responsible Investment Principles",
  "International ESG Best Practices",
];

/* ------------------------- §6.3 Global Footprint ------------------------- */
const markets = [
  { flag: "🇦🇪", name: "United Arab Emirates" },
  { flag: "🇴🇲", name: "Oman" },
  { flag: "🇸🇦", name: "Saudi Arabia" },
  { flag: "🇶🇦", name: "Qatar" },
  { flag: "🇧🇫", name: "Burkina Faso" },
  { flag: "🇬🇭", name: "Ghana" },
  { flag: "🇬🇼", name: "Guinea-Bissau" },
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇮🇳", name: "India" },
];

const footprintKeywords = [
  "Strategic Presence",
  "Strategic Partnerships",
  "Projects",
  "Development",
  "Investment Opportunities",
  "Representative Network",
];

/* ---------------------- §6.4 Leadership & Governance --------------------- */
const leadership: { title: string; name: string | null; photo: string | null }[] = [
  {
    title: "Chairman",
    name: "H.E. Louai Mohamed Ali",
    photo: "/images/chairman-louai-alt.jpeg",
  },
  {
    title: "Chief Executive Officer",
    name: null,
    photo: "/images/50f8d446_CEO_1_.png",
  },
  {
    title: "Executive Leadership Team",
    name: null,
    photo: null,
  },
  {
    title: "Corporate Governance",
    name: null,
    photo: null,
  },
];

/** Image if the client has supplied one, else a themed dashed placeholder. */
function Figure({
  src,
  alt,
  className,
  rounded = "rounded-2xl",
}: {
  src: string | null;
  alt: string;
  className?: string;
  rounded?: string;
}) {
  if (src) {
    return (
      <Image
        src={asset(src)}
        alt={alt}
        width={1200}
        height={900}
        className={`${rounded} object-cover ${className ?? ""}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${alt} — image to be supplied`}
      className={`grid place-items-center border border-dashed border-gold/40 bg-navy-800/60 text-center ${rounded} ${className ?? ""}`}
    >
      <span className="px-4 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold/70">
        {alt}
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageSchema
        title="About Promax Global"
        description={pages["about"].metaDescription}
        path="/about"
        faqs={faqs.about}
      />

      {/* ===================== §6.1 The UAE Foundation ===================== */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        {/* -------- Section 1: hero — skyline as the background -------- */}
        <div className="relative min-h-[520px] overflow-hidden md:min-h-[600px]">
          {IMAGES.skyline && (
            <Image
              src={asset(IMAGES.skyline)}
              alt="Abu Dhabi skyline"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-[center_0%]"
            />
          )}
          {/* Gradient scrim: enough navy on the left to keep the heading legible,
              but light so the skyline stays clear and HD toward the right. */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/92 via-navy-900/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
          <div className="shell relative flex min-h-[520px] flex-col justify-center py-20 md:min-h-[600px] md:py-28">
            <div className="max-w-3xl">
              <Reveal eager>
                <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-gold">
                  The UAE Foundation
                </p>
              </Reveal>
              <Reveal eager index={1}>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">
                  Proudly Headquartered in Abu Dhabi
                </h1>
              </Reveal>
              <Reveal eager index={2}>
                <p className="mt-4 font-display text-lg font-semibold text-gold md:text-xl">
                  Inspired by the UAE. Connected to the World.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="shell relative py-16 md:py-20">
          <div className="grid gap-8 text-[0.975rem] leading-relaxed text-slate-300 md:grid-cols-3">
            <Reveal eager index={3} as="p">
              Promax Global is proudly headquartered in Abu Dhabi, United Arab
              Emirates—a nation internationally recognized for visionary
              leadership, economic resilience, world-class infrastructure, and
              its role as a global bridge connecting East and West.
            </Reveal>
            <Reveal eager index={3} as="p">
              As the international strategic investment and development platform of
              the Promax United Group, Promax Global leverages Abu Dhabi&rsquo;s
              strategic position to originate, structure, and deliver transformative
              projects across port management and development, strategic
              infrastructure, logistics, energy, digital economy, commodities, and
              sustainable development.
            </Reveal>
            <Reveal eager index={3} as="p">
              Inspired by the UAE&rsquo;s commitment to innovation, international
              cooperation, and long-term prosperity, Promax Global partners with
              governments, institutional investors, port authorities, and global
              industry leaders to develop integrated platforms that generate
              sustainable economic growth and lasting national impact across the GCC
              and international markets.
            </Reveal>
          </div>

          {/* Five foundations — full width */}
          <Reveal index={2}>
            <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
              {foundations.map((f) => (
                <li key={f.title} className="bg-navy-900 px-5 py-8 text-center">
                  <LineIcon name={f.icon} className="mx-auto h-9 w-9 text-gold" />
                  <p className="mt-4 font-display text-[0.8rem] font-bold uppercase leading-tight tracking-wide text-white">
                    {f.title}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-slate-400">
                    {f.text}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* -------- Sections 2 & 3: the founder quotations, in sequence -------- */}
          <div className="mt-24 max-w-4xl">
            <Reveal>
              <p className="font-display text-base font-bold uppercase tracking-[0.28em] text-gold md:text-xl">
                Inspired by the Vision of the UAE
              </p>
            </Reveal>
            <span className="mt-3 block h-px w-16 bg-gold/60" />
          </div>

          <div className="mt-10 space-y-8">
            {quotes.map((q, i) => (
              <Reveal key={q.who} variant={i % 2 ? "left" : "right"}>
                <figure
                  className={`flex flex-col gap-8 rounded-3xl border border-gold/25 bg-navy-800/40 p-6 md:items-center md:gap-12 md:p-10 ${
                    i % 2 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <Figure
                    src={q.portrait}
                    alt={q.portraitAlt}
                    rounded="rounded-2xl"
                    className="h-72 w-full shrink-0 md:h-80 md:w-72"
                  />
                  <figcaption className="flex-1">
                    <span
                      aria-hidden
                      className="block font-display text-5xl leading-none text-gold"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 font-display text-2xl font-medium leading-snug text-white md:text-3xl">
                      {q.quote}
                    </blockquote>
                    <p className="mt-5 font-display text-base font-semibold text-gold">
                      &mdash; {q.by}
                    </p>
                    <p className="text-sm text-slate-300">{q.who}</p>
                    <p className="mt-5 max-w-2xl text-[0.975rem] leading-relaxed text-slate-300">
                      {q.body}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== §6.2 Sustainability & ESG ===================== */}
      <section className="section bg-white">
        <div className="shell">
          <div className="max-w-3xl">
            <SectionTitle
              ghost="Sustainability"
              heading={<>Creating Long-Term Value Through <span>Responsible Growth</span></>}
            />
          </div>

          <div className="mt-6 space-y-5 text-[0.975rem] leading-relaxed text-slate-600">
            {esgIntro.map((p, i) => (
              <Reveal key={i} as="p" index={i}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-16 text-center font-display text-2xl font-bold text-navy md:text-3xl">
              Building Sustainable Infrastructure for Future Generations
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} variant="up" index={i}>
                <div className="card group relative h-full overflow-hidden p-7 transition-colors duration-500 hover:border-brand/40">
                  {/* accent bar wipes in from the left on hover */}
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
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{p.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-sm text-slate-600 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <LineIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-brand">
                Aligned with Global Frameworks
              </p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                Our sustainability approach is aligned with internationally recognized
                frameworks and initiatives, including:
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {frameworks.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-base font-semibold text-navy md:text-lg">
                    <LineIcon name="check" className="h-6 w-6 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== §6.3 Global Footprint ===================== */}
      <section className="section relative overflow-hidden bg-navy-900 text-white">
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative">
          <div className="max-w-3xl">
            <SectionTitle
              tone="dark"
              ghost="Footprint"
              heading={<>Strategic Presence Across <span>Global Markets</span></>}
            />
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal variant="left">
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={asset("/images/abu-dhabi-economic-gateway.jpeg")}
                  alt="Global connectivity — Abu Dhabi economic gateway"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal variant="right">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-brand">
                  Active Markets
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {markets.map((m) => (
                    <li
                      key={m.name}
                      className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm font-medium text-white"
                    >
                      <span aria-hidden className="text-lg leading-none">
                        {m.flag}
                      </span>
                      {m.name}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 font-display text-xs font-bold uppercase tracking-[0.24em] text-brand">
                  Expansion Markets
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Additional markets under active development — announced as
                  engagements progress.
                </p>

                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {footprintKeywords.map((k) => (
                    <li
                      key={k}
                      className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-200"
                    >
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== §6.4 Leadership & Governance ===================== */}
      <section className="section bg-slate-50">
        <div className="shell">
          <div className="max-w-3xl">
            <SectionTitle
              ghost="Leadership"
              heading={<>Leadership &amp; <span>Governance</span></>}
            />
            <Reveal index={2}>
              <p className="mt-5 text-[0.975rem] leading-relaxed text-slate-600">
                Promax Global collaborates with a network of internationally recognized
                advisors and industry experts to support strategic initiatives,
                infrastructure development, and global partnerships.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l, i) => (
              <Reveal key={l.title} variant="up" index={i % 4}>
                <div className="card h-full overflow-hidden">
                  <Figure
                    src={l.photo}
                    alt={l.name ?? l.title}
                    rounded="rounded-none"
                    className="aspect-[4/5] w-full"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-navy">{l.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand">{l.name ?? "[ TBA ]"}</p>
                    <p className="mt-4 inline-block rounded-full border border-dashed border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Bio &amp; details — [ TBA ]
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Leadership portraits and biographies are not yet available.
          </p>
        </div>
      </section>

      {/* ===================== Closing CTA ===================== */}
      <section className="bg-brand-050">
        <div className="shell flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Partner with Promax Global
            </h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Governments, sovereign funds, operators, and institutional investors —
              start the conversation with the team that will own your file.
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
