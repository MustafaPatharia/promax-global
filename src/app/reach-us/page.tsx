import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import Reveal from "@/components/anim/Reveal";
import VideoHero from "@/components/anim/VideoHero";
import ReachUsForms from "@/components/ReachUsForms";
import PageSchema from "@/components/PageSchema";
import { video, poster } from "@/lib/videos";

export const metadata: Metadata = pageMeta({
  title: "Reach Us",
  description:
    "Reach Promax Global in Abu Dhabi. Two enquiry paths — Work With Us for careers, Invest With Us for partnership, joint venture, and co-investment.",
  path: "/reach-us",
});

export default function ReachUsPage() {
  return (
    <>
      <PageSchema
        title="Reach Us"
        description="Reach Promax Global in Abu Dhabi — Work With Us or Invest With Us."
        path="/reach-us"
      />

      {/* ---------- Hero (client-specified clip for this page) ---------- */}
      <section className="relative overflow-hidden text-white">
        <VideoHero
          src={video("port-containers-network-topdown.mp4")}
          poster={poster("port-containers-network-topdown")}
          variant="duotone"
          overlay="bg-gradient-to-br from-navy-900/93 via-navy/85 to-navy-700/72"
        />
        <div className="shell relative py-24 md:py-32">
          <Reveal eager>
            <p className="eyebrow !text-brand">From Abu Dhabi, UAE — To The World</p>
          </Reveal>
          <Reveal eager index={1}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Build the Future Together
            </h1>
          </Reveal>
          <Reveal eager index={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Two ways to engage with Promax Global — join the team, or partner and invest
              alongside us.
            </p>
          </Reveal>

          {/* contact strip overlay */}
          <Reveal eager index={3}>
            <dl className="mt-12 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Location
                </dt>
                <dd className="mt-2 text-sm leading-snug text-slate-200">
                  {site.contact.address}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Email
                </dt>
                <dd className="mt-2 text-sm">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-slate-200 transition hover:text-brand"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Phone
                </dt>
                <dd className="mt-2 text-sm">
                  <a
                    href={site.contact.phoneHref}
                    className="text-slate-200 transition hover:text-brand"
                  >
                    {site.contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- Enquiry paths + forms ---------- */}
      <section className="section bg-slate-50">
        <div className="shell max-w-3xl">
          <div className="mb-10 text-center">
            <Reveal>
              <p className="eyebrow justify-center">Reach Us</p>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-4 font-display text-3xl font-bold text-navy md:text-4xl">
                Choose your path
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mx-auto mt-4 max-w-lg leading-relaxed text-slate-600">
                Select whether you are joining us or investing with us — each path opens the
                relevant form.
              </p>
            </Reveal>
          </div>
          <Reveal index={3}>
            <ReachUsForms />
          </Reveal>
        </div>
      </section>
    </>
  );
}
