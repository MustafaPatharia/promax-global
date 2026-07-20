import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  getUi,
  getStats,
  getVerticals,
  getTagline,
  getDescription,
  withLocale,
  asLocale,
} from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
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

/** Icon + destination per service card (copy comes from the locale dict). */
const serviceMeta: { icon: IconName; href: string }[] = [
  { icon: "anchor", href: "/portfolio/port-management" },
  { icon: "compass", href: "/portfolio/port-advisory" },
  { icon: "building", href: "/portfolio/infrastructure" },
  { icon: "crane", href: "/portfolio/strategic-equipment" },
];
const platformIcons: IconName[] = ["building", "layers", "globe", "bolt", "briefcase", "clipboard"];
const statIcon: IconName[] = ["globe", "briefcase", "layers", "clipboard"];
const leaderPhoto: (string | undefined)[] = ["b029c743_Mohamed_Ali.png", "50f8d446_CEO_1_.png", undefined];

/** Strategic partners — brand names, kept verbatim across locales. */
const partners = [
  "Promax Global", "Promax United", "Trot Global", "Youth Chamber of Commerce", "Plambeck",
  "Promax Enjoy", "Trot Solutions", "Solveeasy", "Promax Digital", "Trot Holdings",
  "Abu Dhabi International Factory", "Promax Investments", "Promax Easypay", "Goldwin Mines", "Starboard Ports",
];

const sectorMedia = [
  { src: video("smart-port-3d-digital-shipping.mp4"), poster: poster("smart-port-3d-digital-shipping") },
  { src: video("foundry-furnace-molten-metal-worker.mp4"), poster: poster("foundry-furnace-molten-metal-worker") },
  { src: video("dubai-skyline-burj-aerial.mp4"), poster: poster("dubai-skyline-burj-aerial") },
];

const panelImg: Record<string, string> = {
  "port-management": poster("port-containers-network-topdown"),
  "trade-hub": poster("aluminium-baled-cubes-recycling"),
  "smart-energy": poster("recycle-symbol-sign-sunset"),
  "skills-education": img("75287166_Skills_Education.jpg"),
  "technology-fintech": img("4fc30b83_Technology_Fintech.jpg"),
  "strategic-projects": img("40b2f196_Strategic_Projects.jpg"),
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  return pageMeta({ title: getTagline(locale), description: getDescription(locale), path: "/", locale });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = asLocale((await params).locale);
  const ui = getUi(locale);
  const h = ui.home;
  const stats = getStats(locale);
  const verticals = getVerticals(locale);
  const L = (href: string) => withLocale(href, locale);

  const sectorTiles: Tile[] = sectorMedia.map((m, i) => ({
    ...m,
    label: h.sectorTiles[i].label,
    title: h.sectorTiles[i].title,
  }));
  const panels: Panel[] = verticals.map((v) => ({
    slug: v.slug,
    title: v.title,
    blurb: v.blurb,
    img: panelImg[v.slug] ?? poster("container-port-night-topdown-aerial"),
  }));

  return (
    <>
      {/* ---------- Hero (WebGL particle globe) ---------- */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-900 text-white">
        <HeroParticles />
        <div className="shell relative z-10 py-28">
          <Reveal variant="blur">
            <p className="eyebrow !text-brand">{h.heroEyebrow}</p>
          </Reveal>

          <KineticHeading
            text={h.heroHeading}
            highlight={[h.heroHighlight]}
            className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] md:text-8xl"
          />

          <Reveal variant="up" index={3}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-200">{h.heroPara}</p>
          </Reveal>

          <Reveal variant="up" index={4}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={L("/invest-with-us")} className="btn btn-primary">
                {h.heroInvest} <span aria-hidden>→</span>
              </Link>
              <Link href={L("/portfolio")} className="btn btn-ghost-light">
                {h.heroPortfolio}
              </Link>
            </div>
          </Reveal>

          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((s, i) => (
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
            {h.marqueeLabel}
          </p>
        </div>
        <Marquee items={h.stakeholders} />
      </section>

      {/* ---------- Company Overview ---------- */}
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
              ghost={h.aboutGhost}
              kicker={h.aboutKicker}
              heading={<>{h.aboutHeadingLead} <span>{h.aboutHeadingAccent}</span></>}
            />
            <div className="mt-6 rounded-2xl bg-slate-50 p-6 md:p-8">
              <Reveal variant="up" index={1}>
                <p className="leading-relaxed text-slate-600">{h.aboutPara}</p>
              </Reveal>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {h.intentPoints.map((p, i) => (
                  <Reveal key={p} variant="up" index={i} as="li">
                    <span className="feature-check block text-sm leading-snug text-navy">{p}</span>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal variant="up" index={2}>
              <div className="ceo-card -mt-4 lg:mr-12">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand/40">
                  <Image
                    src={img("b029c743_Mohamed_Ali.png")}
                    alt={`${h.chairmanName}, ${h.chairmanRole}`}
                    fill
                    sizes="56px"
                    className="scale-[1.4] object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-display font-bold leading-tight text-navy">{h.chairmanName}</p>
                  <span className="text-sm text-slate-500">{h.chairmanRole}</span>
                </div>
                <span className="signature" aria-hidden>Louai Ali</span>
              </div>
            </Reveal>

            <Reveal variant="up" index={3}>
              <Link href={L("/about")} className="btn btn-navy mt-8">
                {h.aboutCta} <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- What We Do ---------- */}
      <section className="section relative overflow-hidden bg-navy-900 text-white">
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              tone="dark"
              ghost={h.servicesGhost}
              kicker={h.servicesKicker}
              heading={<>{h.servicesHeadingLead} <span>{h.servicesHeadingAccent}</span></>}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {h.services.map((s, i) => {
              const Icon = Icons[serviceMeta[i].icon];
              return (
                <Reveal key={s.title} variant="up" index={i % 4}>
                  <Link
                    href={L(serviceMeta[i].href)}
                    className="group block h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1.5 hover:border-brand/50 hover:bg-white/[0.07]"
                  >
                    <span className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-brand/15 text-brand transition group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.text}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      {ui.common.learnMore} <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Strategic Business Platforms ---------- */}
      <section className="section bg-white">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              ghost={h.platformsGhost}
              kicker={h.platformsKicker}
              heading={<>{h.platformsHeadingLead} <span>{h.platformsHeadingAccent}</span></>}
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {h.platforms.map((p, i) => {
              const Icon = Icons[platformIcons[i]];
              return (
                <Reveal key={p.title} variant="up" index={i % 3}>
                  <div className="card h-full p-7">
                    <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="feature-check text-sm leading-snug text-slate-600">{pt}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Funfact ---------- */}
      <section className="relative overflow-hidden text-white">
        <BackgroundVideo
          src={video("world-map-grid-motion-bg.mp4")}
          poster={poster("world-map-grid-motion-bg")}
          overlay="bg-navy/88"
        />
        <div className="shell relative py-16 md:py-20">
          <div className="mb-12 text-center md:mb-16">
            <Reveal variant="scale">
              <p className="mask-number">{h.funfactNumber}</p>
            </Reveal>
            <Reveal variant="up" index={1}>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-300">
                {h.funfactCaption}
              </p>
            </Reveal>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {stats.map((s, i) => {
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

      {/* ---------- Portfolio (pinned horizontal scroll) ---------- */}
      <HorizontalScroll panels={panels} locale={locale} t={ui.hscroll} />

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
              ghost={h.reachGhost}
              kicker={h.reachKicker}
              heading={<>{h.reachHeadingLead} <span>{h.reachHeadingAccent}</span></>}
            />
            <Reveal variant="right" index={2}>
              <p className="mt-5 leading-relaxed text-slate-600">{h.reachPara}</p>
            </Reveal>
            <div className="mt-7 flex flex-wrap gap-2">
              {h.regions.map((r, i) => (
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

      {/* ---------- Cinematic scroll-scrub band ---------- */}
      <ScrubBand
        src={video("container-port-night-topdown-aerial.mp4")}
        poster={poster("container-port-night-topdown-aerial")}
        eyebrow={h.scrubEyebrow}
        title={<>{h.scrubTitleLead} <span className="text-brand">{h.scrubTitleAccent}</span></>}
        text={h.scrubText}
      />

      {/* ---------- Sectors in motion ---------- */}
      <section className="section bg-navy-900 text-white">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              tone="dark"
              ghost={h.sectorsGhost}
              kicker={h.sectorsKicker}
              heading={<>{h.sectorsHeadingLead} <span>{h.sectorsHeadingAccent}</span></>}
            />
            <Reveal variant="up" index={3}>
              <p className="mt-4 leading-relaxed text-slate-300">{h.sectorsPara}</p>
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
              ghost={h.flagshipGhost}
              kicker={h.flagshipKicker}
              heading={<>{h.flagshipHeadingLead} <span>{h.flagshipHeadingAccent}</span></>}
              className="max-w-2xl"
            />
            <Reveal variant="up" index={2}>
              <Link href={L("/portfolio/strategic-projects")} className="btn btn-outline shrink-0 text-navy">
                {h.flagshipViewAll} <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {h.flagship.map((p, i) => (
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

      {/* ---------- Leadership ---------- */}
      <section className="section bg-white">
        <div className="shell">
          <div className="mb-12">
            <SectionTitle
              align="center"
              ghost={h.leadershipGhost}
              kicker={h.leadershipKicker}
              heading={<>{h.leadershipHeadingLead} <span>{h.leadershipHeadingAccent}</span></>}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {h.leadership.map((m, i) => {
              const photo = leaderPhoto[i];
              const initials = m.name
                .replace(/H\.E\.\s*/, "")
                .split(" ")
                .filter((w) => /[A-Za-z]/.test(w[0] ?? ""))
                .map((w) => w[0])
                .slice(0, 2)
                .join("");
              return (
                <Reveal key={m.name} variant="up" index={i}>
                  <div className="card group h-full p-8 text-center">
                    {photo ? (
                      <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-brand/30 transition group-hover:ring-brand">
                        <Image
                          src={img(photo)}
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
              {h.quoteText}
            </blockquote>
          </Reveal>
          <Reveal variant="up" index={2}>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand">{h.quoteWho}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Strategic Partners strip ---------- */}
      <section className="border-y border-slate-100 bg-white py-8">
        <div className="shell mb-5">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            {h.partnersLabel}
          </p>
        </div>
        <Marquee items={partners} />
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-brand-050">
        <div className="shell flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">{h.ctaHeading}</h2>
            <p className="mt-2 max-w-xl text-slate-600">{h.ctaText}</p>
          </div>
          <Link href={L("/contact")} className="btn btn-primary shrink-0">
            {h.ctaButton} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
