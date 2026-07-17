import Link from "next/link";
import Image from "next/image";
import { site, verticals } from "@/lib/site";
import { img } from "@/lib/images";
import Reveal from "@/components/anim/Reveal";
import Counter from "@/components/anim/Counter";
import Marquee from "@/components/anim/Marquee";
import KineticHeading from "@/components/anim/KineticHeading";
import SectionTitle from "@/components/SectionTitle";
import HeroParticles from "@/components/anim/hero/HeroParticles";
import BackgroundVideo from "@/components/anim/BackgroundVideo";
import ParallaxMedia from "@/components/anim/ParallaxMedia";
import ScrubBand from "@/components/anim/ScrubBand";
import VideoGrid, { type Tile } from "@/components/anim/VideoGrid";
import HorizontalScroll, { type Panel } from "@/components/anim/HorizontalScroll";
import { video, poster } from "@/lib/videos";
import { Icons, type IconName } from "@/components/Icons";

/** "What We Do" — core port & logistics services (Transland-style icon cards). */
const services: { icon: IconName; title: string; text: string; href: string }[] = [
  { icon: "anchor", title: "Port Management", text: "Tiered port operations and container-terminal execution — uptime, fluidity, and safety compliance.", href: "/portfolio/port-management" },
  { icon: "compass", title: "Port Advisory", text: "Independent, data-driven assessments from senior port engineers across the Middle East, Africa, and Asia.", href: "/portfolio/port-advisory" },
  { icon: "building", title: "Infrastructure", text: "Deep-water berths, heavy warehousing, and integrated digital platforms that raise marine asset value.", href: "/portfolio/infrastructure" },
  { icon: "crane", title: "Strategic Equipment", text: "Multi-brand machinery procurement, AMC lifecycle programs, and Drives/PLC systems integration.", href: "/portfolio/strategic-equipment" },
];

/** Icon per headline stat (funfact row). */
const statIcon: IconName[] = ["globe", "briefcase", "layers", "clipboard"];

/** Real corporate leadership — real headshots where we have them, else monogram. */
const leadership: { name: string; role: string; note: string; photo?: string }[] = [
  { name: "H.E. Louai Mohamed Ali", role: "Chairman", note: "Strategic direction and global partnerships.", photo: "b029c743_Mohamed_Ali.png" },
  { name: "Group CEO", role: "Chief Executive", note: "Operational leadership across the group's five verticals.", photo: "50f8d446_CEO_1_.png" },
  { name: "Board of Directors", role: "Governance", note: "Structured oversight driving global development operations." },
];

const stakeholders = [
  "Governments",
  "Port Authorities",
  "Terminal Operators",
  "Sovereign Wealth Funds",
  "Institutional Investors",
  "EPC Contractors",
  "Technology Providers",
  "Multilateral Organizations",
  "Academic Partners",
  "Family Offices",
];

const intentPoints = [
  "Government-aligned mandates across 25+ countries",
  "Billion-dollar Promax United patronage",
  "Five resilient, real-asset verticals",
  "Proven execution from Abu Dhabi to the world",
];

const flagship = [
  { name: "Blue Port Project", place: "Atlantic Ocean", note: "Exclusive Blue Port ecosystem with Atlantic fisheries access." },
  { name: "Dry Port Development", place: "Burkina Faso", note: "National dry port strengthening West Africa's trade corridors." },
  { name: "Bulk & Break-Bulk Port", place: "Lumut, Malaysia", note: "Terminal for minerals, agri-commodities, and industrial cargo." },
  { name: "Smart City Development", place: "United Arab Emirates", note: "Integrated smart-infrastructure city project." },
];

const regions = ["GCC", "Africa", "India", "Southeast Asia", "Atlantic Corridor"];

/** Hover-to-play / click-to-expand clips — one per flagship capability. */
const sectorTiles: Tile[] = [
  {
    src: video("smart-port-3d-digital-shipping.mp4"),
    poster: poster("smart-port-3d-digital-shipping"),
    label: "Technology & Fintech",
    title: "Smart, connected ports",
  },
  {
    src: video("foundry-furnace-molten-metal-worker.mp4"),
    poster: poster("foundry-furnace-molten-metal-worker"),
    label: "Smart & Green Energy",
    title: "Industry & the energy transition",
  },
  {
    src: video("dubai-skyline-burj-aerial.mp4"),
    poster: poster("dubai-skyline-burj-aerial"),
    label: "Strategic Projects",
    title: "Nation-scale development",
  },
];

/**
 * Division panel imagery = each destination page's HERO still, so the card
 * matches what you land on. Video-hero pages → that hero's poster (exact frame);
 * gradient-hero pages (no clip) → that page's lead image. Values are already
 * resolved URLs. No clip that PLAYS elsewhere on home is reused here.
 */
const panelImg: Record<string, string> = {
  "port-management": poster("port-containers-network-topdown"), // matches page heroVideo
  "trade-hub": poster("aluminium-baled-cubes-recycling"), // matches page heroVideo
  "smart-energy": poster("recycle-symbol-sign-sunset"), // matches page heroVideo
  "skills-education": img("75287166_Skills_Education.jpg"), // gradient hero → lead image
  "technology-fintech": img("4fc30b83_Technology_Fintech.jpg"), // gradient hero → lead image
  "strategic-projects": img("40b2f196_Strategic_Projects.jpg"), // gradient hero → lead image
};
const panels: Panel[] = verticals.map((v) => ({
  slug: v.slug,
  title: v.title,
  blurb: v.blurb,
  img: panelImg[v.slug] ?? poster("container-port-night-topdown-aerial"),
}));

export default function Home() {
  return (
    <>
      {/* ---------- Hero (WebGL particle globe) ---------- */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-900 text-white">
        <HeroParticles />
        <div className="shell relative z-10 py-28">
          <Reveal variant="blur">
            <p className="eyebrow !text-brand">Abu Dhabi Economic Gateway</p>
          </Reveal>

          <KineticHeading
            text="From UAE to the World"
            highlight={["World"]}
            className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] md:text-8xl"
          />

          <Reveal variant="up" index={3}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-200">
              Integrated port management, advisory, infrastructure, trade, technology, and strategic
              investment — supporting governments, port authorities, and institutional investors
              across 25+ countries.
            </p>
          </Reveal>

          <Reveal variant="up" index={4}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/invest-with-us" className="btn btn-primary">
                Invest With Us <span aria-hidden>→</span>
              </Link>
              <Link href="/portfolio" className="btn btn-ghost-light">
                Explore Portfolio
              </Link>
            </div>
          </Reveal>

          {/* in-hero counters (motion-plan: count up once hero settles) */}
          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {site.stats.map((s, i) => (
              <Reveal key={s.label} variant="up" index={5 + i} as="div">
                <dt className="font-display text-4xl font-extrabold text-brand">
                  <Counter value={s.value} immediate />
                </dt>
                <dd className="mt-1 text-xs leading-snug text-slate-300">{s.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-white/50 md:block">
          ↓
        </div>
      </section>

      {/* ---------- Stakeholder marquee ---------- */}
      <section className="border-y border-slate-100 bg-white py-6">
        <div className="shell mb-4">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            Trusted across the global trade &amp; infrastructure spectrum
          </p>
        </div>
        <Marquee items={stakeholders} />
      </section>

      {/* ---------- Company Overview (Transland about block: media left · content + CEO right) ---------- */}
      <section className="section bg-white">
        <div className="shell grid items-center gap-12 lg:grid-cols-[5fr_7fr]">
          <Reveal variant="left">
            <div className="relative">
              <ParallaxMedia
                src={video("shipping-port-aerial-panorama.mp4")}
                poster={poster("shipping-port-aerial-panorama")}
                className="aspect-[4/5] rounded-3xl shadow-[var(--shadow-card-hover)]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy/10" />
            </div>
          </Reveal>

          <div className="lg:ps-4">
            <SectionTitle
              ghost="About"
              kicker="Under Promax United Patronage"
              heading={<>Company <span>Overview</span></>}
            />
            <div className="mt-6 rounded-2xl bg-slate-50 p-6 md:p-8">
              <Reveal variant="up" index={1}>
                <p className="leading-relaxed text-slate-600">
                  Promax Global is a UAE-headquartered enterprise delivering integrated solutions
                  across port management, trade, technology, education, energy, and strategic
                  investment. We transform bold local ideas into global realities — blending
                  expertise, forward-thinking leadership, and financial resilience.
                </p>
              </Reveal>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {intentPoints.map((p, i) => (
                  <Reveal key={p} variant="up" index={i} as="li">
                    <span className="feature-check block text-sm leading-snug text-navy">{p}</span>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* CEO / signature card — Transland .company-ceo, offset up over the copy */}
            <Reveal variant="up" index={2}>
              <div className="ceo-card -mt-4 lg:mr-12">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand/40">
                  <Image
                    src={img("b029c743_Mohamed_Ali.png")}
                    alt="H.E. Louai Mohamed Ali, Chairman"
                    fill
                    sizes="56px"
                    className="scale-[1.4] object-cover object-top"
                  />
                </div>
                <div>
                  <h5 className="font-display font-bold leading-tight text-navy">H.E. Louai Mohamed Ali</h5>
                  <span className="text-sm text-slate-500">Chairman</span>
                </div>
                <span className="signature" aria-hidden>Louai Ali</span>
              </div>
            </Reveal>

            <Reveal variant="up" index={3}>
              <Link href="/about" className="btn btn-navy mt-8">
                About Promax Global <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- What We Do (icon service cards) ---------- */}
      <section className="section relative overflow-hidden bg-navy-900 text-white">
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              tone="dark"
              ghost="Service"
              kicker="Featured Service"
              heading={<>What <span>We Do</span></>}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = Icons[s.icon];
              return (
                <Reveal key={s.title} variant="up" index={i % 4}>
                  <Link
                    href={s.href}
                    className="group block h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1.5 hover:border-brand/50 hover:bg-white/[0.07]"
                  >
                    <span className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-brand/15 text-brand transition group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.text}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Learn more <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Funfact (icon counters over motion map) ---------- */}
      <section className="relative overflow-hidden text-white">
        <BackgroundVideo
          src={video("world-map-grid-motion-bg.mp4")}
          poster={poster("world-map-grid-motion-bg")}
          overlay="bg-navy/88"
        />
        <div className="shell relative py-16 md:py-20">
          {/* Transland mask-outline: giant textured figure over the dot-map */}
          <div className="mb-12 text-center md:mb-16">
            <Reveal variant="scale">
              <p className="mask-number">$8B</p>
            </Reveal>
            <Reveal variant="up" index={1}>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-300">
                In mandated flagship projects across four continents
              </p>
            </Reveal>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {site.stats.map((s, i) => {
              const Icon = Icons[statIcon[i]];
              return (
                <Reveal key={s.label} variant="scale" index={i}>
                  <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <dt className="font-display text-5xl font-extrabold text-brand">
                        <Counter value={s.value} />
                      </dt>
                      <dd className="mt-1 text-sm leading-snug text-slate-300">{s.label}</dd>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </dl>
        </div>
      </section>

      {/* ---------- Portfolio (Apple-style pinned horizontal scroll) ---------- */}
      <HorizontalScroll panels={panels} />

      {/* ---------- Global reach ---------- */}
      <section className="section overflow-hidden bg-white">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="relative">
              <ParallaxMedia
                src={video("dubai-earth-zoom-location-marker.mp4")}
                poster={poster("dubai-earth-zoom-location-marker")}
                className="aspect-square rounded-3xl bg-navy-900 shadow-[var(--shadow-card-hover)]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </Reveal>
          <div>
            <SectionTitle
              ghost="Reach"
              kicker="Global Reach"
              heading={<>One UAE hub, four <span>continents</span></>}
            />
            <Reveal variant="right" index={2}>
              <p className="mt-5 leading-relaxed text-slate-600">
                From Abu Dhabi we extend our influence globally — supporting governments, regulators,
                port authorities, and institutional investors with integrated, future-ready
                capabilities that strengthen national competitiveness and long-term resilience.
              </p>
            </Reveal>
            <div className="mt-7 flex flex-wrap gap-2">
              {regions.map((r, i) => (
                <Reveal key={r} variant="scale" index={i % 3} as="span">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-semibold text-navy">
                    {r}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Cinematic scroll-scrub band (scroll drives the footage) ---------- */}
      <ScrubBand
        src={video("container-port-night-topdown-aerial.mp4")}
        poster={poster("container-port-night-topdown-aerial")}
        eyebrow="Ports That Never Sleep"
        title={<>Moving trade from the <span className="text-brand">quay to the cloud</span></>}
        text="Round-the-clock terminal operations, digital-twin oversight, and connected supply chains — engineered for uptime, safety, and long-horizon value. Scroll to move through the night shift."
      />

      {/* ---------- Sectors in motion (hover-to-play · click to expand) ---------- */}
      <section className="section bg-navy-900 text-white">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              tone="dark"
              ghost="Sectors"
              kicker="Featured Service"
              heading={<>Real assets, <span>in motion</span></>}
            />
            <Reveal variant="up" index={3}>
              <p className="mt-4 leading-relaxed text-slate-300">
                Hover to bring each vertical to life — click to watch it full-frame.
              </p>
            </Reveal>
          </div>
          <Reveal variant="up" index={1}>
            <VideoGrid tiles={sectorTiles} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Flagship projects teaser ---------- */}
      <section className="section bg-slate-50">
        <div className="shell">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              ghost="Portfolio"
              kicker="Mandated Portfolio"
              heading={<>8 flagship projects, <span>~$1 billion each</span></>}
              className="max-w-2xl"
            />
            <Reveal variant="up" index={2}>
              <Link href="/portfolio/strategic-projects" className="btn btn-outline shrink-0 text-navy">
                View all projects <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flagship.map((p, i) => (
              <Reveal key={p.name} variant="up" index={i % 4}>
                <div className="card h-full p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">{p.place}</p>
                  <h3 className="mt-2 text-lg font-bold text-navy">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{p.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Leadership (team, monogram avatars) ---------- */}
      <section className="section bg-white">
        <div className="shell">
          <div className="mb-12">
            <SectionTitle
              align="center"
              ghost="Team"
              kicker="Corporate Leadership"
              heading={<>Structured oversight, <span>global execution</span></>}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {leadership.map((m, i) => {
              const initials = m.name
                .replace(/H\.E\.\s*/, "")
                .split(" ")
                .filter((w) => /[A-Z]/.test(w[0]))
                .map((w) => w[0])
                .slice(0, 2)
                .join("");
              return (
                <Reveal key={m.name} variant="up" index={i}>
                  <div className="card group h-full p-8 text-center">
                    {m.photo ? (
                      <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-brand/30 transition group-hover:ring-brand">
                        <Image
                          src={img(m.photo)}
                          alt={`${m.name}, ${m.role}`}
                          fill
                          sizes="80px"
                          className="scale-[1.4] object-cover object-top"
                        />
                      </div>
                    ) : (
                      <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-navy font-display text-2xl font-bold text-white transition group-hover:bg-brand">
                        {initials}
                      </span>
                    )}
                    <h3 className="mt-5 text-lg font-bold text-navy">{m.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand">{m.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{m.note}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Leadership quote ---------- */}
      <section className="section bg-slate-50">
        <div className="shell max-w-4xl">
          <Reveal variant="scale">
            <p className="quote-mark" aria-hidden>&ldquo;</p>
          </Reveal>
          <Reveal variant="up" index={1}>
            <blockquote className="-mt-4 font-display text-2xl font-semibold leading-snug text-navy md:text-3xl">
              We support governments, regulators, port authorities, energy-transition stakeholders,
              and industry leaders with integrated, future-ready capabilities that strengthen
              national competitiveness and long-term economic resilience.
            </blockquote>
          </Reveal>
          <Reveal variant="up" index={2}>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand">
              Promax Global — Corporate Overview
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-brand-050">
        <div className="shell flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Partner with Promax Global</h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Governments, operators, contractors, technology providers, and investors — let&rsquo;s
              build the next chapter together.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary shrink-0">
            Transmit Corporate Inquiry <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
