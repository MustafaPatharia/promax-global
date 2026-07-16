import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import Reveal from "@/components/anim/Reveal";
import VideoHero from "@/components/anim/VideoHero";
import { video, poster } from "@/lib/videos";

export const metadata: Metadata = pageMeta({
  title: "Contact Us",
  description:
    "Reach the Promax Global corporate gateway in Abu Dhabi. Transmit a corporate inquiry for advisory, partnership, or investment.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* ---------- Video hero ---------- */}
      <section className="relative overflow-hidden text-white">
        <VideoHero
          src={video("dubai-earth-zoom-location-marker.mp4")}
          poster={poster("dubai-earth-zoom-location-marker")}
          variant="clip-wipe"
          playOnce
          overlay="bg-gradient-to-br from-navy-900/92 via-navy/82 to-navy-700/70"
        />
        <div className="shell relative py-24 md:py-32">
          <Reveal>
            <p className="eyebrow !text-brand">Contact Us</p>
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Transmit a Corporate Inquiry
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Reach our Abu Dhabi gateway directly, or send an inquiry below — we review every
              submission and respond within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="shell grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <Reveal variant="left">
            <div>
              <p className="eyebrow">Reach Us</p>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Corporate gateway</h2>
              <p className="mt-5 max-w-md leading-relaxed text-slate-600">
                Governments, operators, contractors, technology providers, and investors — start the
                conversation with the team that will own your file.
              </p>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-navy">Mailing Address</dt>
                  <dd className="text-slate-600">{site.contact.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Official Email</dt>
                  <dd>
                    <a href={`mailto:${site.contact.email}`} className="text-brand hover:underline">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Direct Phone</dt>
                  <dd>
                    <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="text-brand hover:underline">
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Static markup — wire to an action/route handler when backend is ready */}
          <Reveal variant="right">
          <form className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="grid gap-5">
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium text-navy">Full Name</span>
              <input
                type="text"
                name="name"
                required
                className="rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-brand"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium text-navy">Corporate Email</span>
              <input
                type="email"
                name="email"
                required
                className="rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-brand"
                placeholder="partner@domain.com"
              />
            </label>
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium text-navy">Inquiry Type</span>
              <select
                name="type"
                className="rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-brand"
              >
                <option>Partnership</option>
                <option>Investment</option>
                <option>Advisory</option>
                <option>General</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium text-navy">Message</span>
              <textarea
                name="message"
                rows={4}
                className="rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-brand"
                placeholder="Provide details about your inquiry…"
              />
            </label>
            <button type="submit" className="btn btn-primary justify-center">
              Transmit Inquiry <span aria-hidden>→</span>
            </button>
          </div>
        </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
