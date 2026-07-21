import Link from "next/link";
import Image from "next/image";
import { site, verticals } from "@/lib/site";
import { img } from "@/lib/images";
import Reveal from "@/components/anim/Reveal";
import Counter from "@/components/anim/Counter";
import Marquee from "@/components/anim/Marquee";
import KineticHeading from "@/components/anim/KineticHeading";
import SectionTitle from "@/components/SectionTitle";
import BackgroundVideo from "@/components/anim/BackgroundVideo";
import ParallaxMedia from "@/components/anim/ParallaxMedia";
import ScrubBand from "@/components/anim/ScrubBand";
import VideoGrid, { type Tile } from "@/components/anim/VideoGrid";
import HorizontalScroll, { type Panel } from "@/components/anim/HorizontalScroll";
import PlatformShowcase, { type Platform } from "@/components/anim/PlatformShowcase";
import { video, poster } from "@/lib/videos";

/**
 * Strategic Business Platforms — "Integrated National Development Capabilities".
 * 7 cards, each heading + 5 sub-points, VERBATIM from the client content doc
 * (§5.3). Card = heading + Learn More; the 5 points reveal in the panel below.
 */
const platforms: Platform[] = [
  {
    icon: "layers",
    image: "6c067065_Bulk_Ports_Management.png",
    title: "Mining & Critical Minerals",
    points: [
      "Mining Logistics",
      "Mineral Export Terminals",
      "Bulk Handling Infrastructure",
      "Critical Mineral Supply Chains",
      "Commodity Gateway Development",
    ],
  },
  {
    icon: "building",
    image: "c820e038_Civil_Infrastructure_Development.png",
    title: "Industrial Zones & Economic Corridors",
    points: [
      "Industrial Zones",
      "Special Economic Zones",
      "Logistics Parks",
      "Trade Corridors",
      "Port-Linked Industrial Development",
    ],
  },
  {
    icon: "bolt",
    image: "3065eb1c_Smart_Green_Energy.jpg",
    title: "Energy & Utilities",
    points: [
      "Port Utilities",
      "Power Infrastructure",
      "Renewable Energy Integration",
      "Shore Power",
      "Energy-Efficient Port Systems",
    ],
  },
  {
    icon: "chip",
    image: "4cae52b3_Digital_Infrastructure.png",
    title: "Digital Infrastructure",
    points: [
      "Artificial Intelligence",
      "Digital Trade Platforms",
      "Data Infrastructure",
      "Smart Government Integration",
      "Secure Digital Ecosystems",
    ],
  },
  {
    icon: "truck",
    image: "345d5917_Trade_Hub_Food_Security.jpg",
    title: "Food Security & Agri-Logistics",
    points: [
      "Food Terminals",
      "Cold-Chain Infrastructure",
      "Agri-Logistics",
      "Storage and Distribution",
      "Import and Export Platforms",
    ],
  },
  {
    icon: "growth",
    image: "87eaa230_Multi_Dimensional_Portfolio.jpeg",
    title: "Investment & Project Structuring",
    points: [
      "Public-Private Partnerships",
      "Project Finance",
      "Investment Structuring",
      "Institutional Capital",
      "Strategic Partner Development",
    ],
  },
  {
    icon: "graduation",
    image: "0b46d0da_training_change.jpg",
    title: "National Capability Development",
    points: [
      "Port Training and Education",
      "Technical Capability Building",
      "Workforce Development",
      "Knowledge Transfer",
      "Institutional Development",
    ],
  },
];

/**
 * Animated Statistics (§5.4) — the numeric stats, single row, VERBATIM from the
 * client doc. Client 2026-07-21: removed the "$8B" figure, the icons, and the
 * qualitative "UAE Headquarters" tile; bigger sizing, count-up on scroll.
 */
const statsRow: { value: string; label: string; sub: string }[] = [
  { value: "25+", label: "Countries & Jurisdictions", sub: "International Reach" },
  { value: "8", label: "Integrated Port Capabilities", sub: "End-to-End Solutions" },
  { value: "5", label: "Core Service Areas", sub: "Specialized Port Expertise" },
  { value: "50+", label: "Institutional Relationships", sub: "Global Partner Network" },
];

/** Real corporate leadership — real headshots where we have them, else monogram. */
const leadership: { name: string; role: string; note: string; photo?: string }[] = [
  { name: "H.E. Louai Mohamed Ali", role: "Chairman", note: "Strategic direction and global partnerships.", photo: "b029c743_Mohamed_Ali.png" },
  { name: "Group CEO", role: "Chief Executive", note: "Operational leadership across the group's six portfolios.", photo: "50f8d446_CEO_1_.png" },
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
  "ports-logistics": poster("port-night-digital-hologram-overlay"), // matches page heroVideo
  "skills-education": img("75287166_Skills_Education.jpg"), // gradient hero → lead image
  "ai-fintech": img("4fc30b83_Technology_Fintech.jpg"), // coming soon → lead image
  "trade-hub": img("345d5917_Trade_Hub_Food_Security.jpg"), // coming soon → lead image
  "smart-green-energy": poster("recycle-symbol-sign-sunset"), // matches page heroVideo
  "infrastructure-asset-holdings": poster("aluminium-baled-cubes-recycling"), // matches page heroVideo
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
      {/* ---------- Hero (cinematic loop video — client-specified) ---------- */}
      {/* Client 2026-07-21: replace the WebGL globe with the supplied hero clip
          (digital-globe-iot-network-loop). No kicker (site-wide no-eyebrow rule). */}
      {/* No opaque bg on the section: BackgroundVideo sits at -z-10 and an opaque
          section background would paint over it (the poster + navy overlay below
          provide the dark backdrop / fallback). */}
      <section className="relative flex min-h-screen items-center overflow-hidden text-white">
        <BackgroundVideo
          src={video("digital-globe-iot-network-loop.mp4")}
          poster={poster("digital-globe-iot-network-loop")}
          overlay="bg-navy-900/70"
          zoom={1.35}
          shiftX="12%"
        />
        {/* Copy occupies the right half from lg up; below lg it goes full width
            and the video reads as a backdrop. */}
        <div className="shell relative z-10 py-28 lg:ms-auto lg:w-[58%] lg:ps-4">
          <KineticHeading
            text="From UAE to the World"
            highlight={["World"]}
            className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] md:text-8xl"
          />

          <Reveal variant="up" index={3}>
            <p className="mt-6 max-w-2xl font-display text-xl font-semibold text-white md:text-2xl">
              Building the Future of Ports. Enabling National Prosperity.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Promax Global, one of the specialized subsidiaries of Promax United Group, delivers
              world-class integrated solutions across the full port ecosystem. From port strategy and
              infrastructure development to terminal operations, smart port technologies, logistics
              integration, and strategic equipment, we partner with governments, port authorities,
              investors, and terminal operators to develop efficient, resilient, and future-ready ports
              that drive global trade and sustainable economic growth.
            </p>
          </Reveal>

          <Reveal variant="up" index={4}>
            <div className="mt-9 flex flex-wrap gap-3">
              {/* Client 2026-07-21: drop "Work With Us"; keep "Invest With Us"
                  with NO arrow (per utility-bar note). */}
              <Link href="/invest-with-us" className="btn btn-primary">
                Invest With Us
              </Link>
              <Link href="/portfolio" className="btn btn-ghost-light">
                Explore Our Capabilities
              </Link>
            </div>
          </Reveal>

          {/* in-hero counters — same count-up as the stats band (IntersectionObserver;
              fires on load since the hero is in view). */}
          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {site.stats.map((s, i) => (
              <Reveal key={s.label} variant="up" index={5 + i} as="div">
                <dt className="font-display text-4xl font-extrabold text-brand">
                  <Counter value={s.value} />
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
                src={video("abu-dhabi-ports.mp4")}
                poster={poster("abu-dhabi-ports")}
                className="aspect-[4/5] rounded-3xl shadow-[var(--shadow-card-hover)]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy/10" />
            </div>
          </Reveal>

          <div className="lg:ps-4">
            <SectionTitle
              ghost="Overview"
              heading={<>Corporate <span>Overview</span></>}
            />
            <Reveal variant="up" index={0}>
              <p className="mt-4 font-display text-lg font-semibold text-navy">
                Building the Future of Ports. Enabling National Prosperity
              </p>
            </Reveal>
            <div className="mt-6 space-y-4 rounded-2xl bg-slate-50 p-6 md:p-8">
              <Reveal variant="up" index={1}>
                <p className="leading-relaxed text-slate-600">
                  From Abu Dhabi to the world, Promax Global delivers world-class integrated solutions across the full port ecosystem. As one of the specialized subsidiaries of Promax United Group, the company brings together port development, management, advisory, infrastructure, terminal operations, logistics integration, smart technologies, and strategic equipment under one integrated platform.
                </p>
              </Reveal>
              <Reveal variant="up" index={2}>
                <p className="leading-relaxed text-slate-600">
                  Through international expertise, operational excellence, and strategic partnerships, Promax Global enables governments, port authorities, investors, and operators to develop efficient, resilient, and future-ready ports that advance global trade and create lasting economic value.
                </p>
              </Reveal>
              <Reveal variant="up" index={3}>
                <p className="leading-relaxed text-slate-600">
                  While integrated port development, management, and advisory remain our primary specialization, Promax Global extends its value through Integrated National Development Capabilities that connect ports with logistics, industrial growth, energy, digital infrastructure, investment, and trade—creating resilient economic ecosystems that maximize long-term national value.
                </p>
              </Reveal>
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
                  <p className="font-display font-bold leading-tight text-navy">H.E. Louai Mohamed Ali</p>
                  <span className="text-sm text-slate-500">Chairman</span>
                </div>
                {/* <span className="signature" aria-hidden>Louai Ali</span> */}
              </div>
            </Reveal>

            <Reveal variant="up" index={3}>
              <Link href="/portfolio" className="btn btn-navy mt-8">
                Explore Our Capabilities <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Strategic Business Platforms (6 platform blocks) ---------- */}
      <section className="section relative overflow-hidden bg-navy-900 text-white">
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              tone="dark"
              ghost="Platforms"
              heading={<>Strategic Business <span>Platforms</span></>}
            />
          </div>
          <Reveal variant="up" index={1}>
            <PlatformShowcase platforms={platforms} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Funfact (icon counters over motion map) ---------- */}
      <section className="relative overflow-hidden text-white">
        <BackgroundVideo
          src={video("world-map-grid-motion-bg.mp4")}
          poster={poster("world-map-grid-motion-bg")}
          overlay="bg-navy/88"
        />
        <div className="shell relative py-16 md:py-24">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-x-6">
            {statsRow.map((s, i) => (
              <Reveal key={s.label} variant="scale" index={i % 4}>
                <div className="flex h-full flex-col items-center justify-end gap-2 text-center">
                  <dt className="font-display text-6xl font-extrabold leading-none text-brand md:text-7xl">
                    <Counter value={s.value} />
                  </dt>
                  <dd className="font-display text-lg font-bold leading-snug text-white md:text-xl">
                    {s.label}
                  </dd>
                  <dd className="text-xs uppercase tracking-widest text-slate-300">{s.sub}</dd>
                </div>
              </Reveal>
            ))}
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
      {/* §5.5 "After Strategic Platform" — full client copy, carried by the
          cinematic scrub band (client 2026-07-21). */}
      <ScrubBand
        src={video("container-port-night-topdown-aerial.mp4")}
        poster={poster("container-port-night-topdown-aerial")}
        height="220vh"
        title={<>From Abu Dhabi. Connecting <span className="text-brand">Global Trade.</span></>}
        subtitle="Inspired by the UAE. Connecting Ports to the World."
        text={
          <>
            <p>
              Headquartered in Abu Dhabi, United Arab Emirates, Promax Global is one of the
              specialized subsidiaries of Promax United Group and a leading port development,
              management, and advisory company. Positioned at the crossroads of global trade, the
              company leverages the UAE&rsquo;s strategic location, world-class infrastructure, and
              maritime leadership to deliver integrated end-to-end solutions across the full port
              ecosystem, supported by multidisciplinary capabilities that enable sustainable
              national infrastructure and economic development.
            </p>
            <p>
              From port strategy and master planning to infrastructure development, terminal
              operations, smart port technologies, logistics integration, and long-term port asset
              management, Promax Global partners with governments, port authorities, investors, and
              terminal operators to develop efficient, resilient, and future-ready ports that
              strengthen global trade connectivity and support sustainable economic growth.
            </p>
            <p>
              Inspired by the UAE&rsquo;s vision for innovation, connectivity, and economic
              leadership, Promax Global is committed to delivering operational excellence and
              world-class port solutions that create long-term value for clients, partners, and the
              communities they serve.
            </p>
          </>
        }
      />

      {/* ---------- Sectors in motion (hover-to-play · click to expand) ---------- */}
      <section className="section bg-navy-900 text-white">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              tone="dark"
              ghost="Sectors"
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
              heading={<>8 flagship projects, <span>one strategic portfolio</span></>}
              className="max-w-2xl"
            />
            <Reveal variant="up" index={2}>
              <Link href="/projects" className="btn btn-outline shrink-0 text-navy">
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
          <Link href="/reach-us" className="btn btn-primary shrink-0">
            Transmit Corporate Inquiry <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
