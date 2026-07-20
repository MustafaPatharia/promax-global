import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { getUi, asLocale } from "@/lib/i18n";
import Reveal from "@/components/anim/Reveal";
import BackgroundVideo from "@/components/anim/BackgroundVideo";
import { video, poster } from "@/lib/videos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  const ui = getUi(locale);
  return pageMeta({ title: ui.contact.heroHeading, description: ui.contact.heroPara, path: "/contact", locale });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = asLocale((await params).locale);
  const ui = getUi(locale);
  const t = ui.contact;
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden text-white">
        <BackgroundVideo
          src={video("reach-us-pexels-11336420.mp4")}
          poster={poster("reach-us-pexels-11336420")}
          overlay="bg-gradient-to-br from-navy-900/92 via-navy/82 to-navy-700/70"
        />
        <div className="shell relative py-24 md:py-32">
          <Reveal>
            <p className="eyebrow !text-brand">{t.heroEyebrow}</p>
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{t.heroHeading}</h1>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">{t.heroPara}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="shell grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <Reveal variant="left">
            <div>
              <p className="eyebrow">{t.gatewayEyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">{t.gatewayHeading}</h2>
              <p className="mt-5 max-w-md leading-relaxed text-slate-600">{t.gatewayPara}</p>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-navy">{t.mailingAddress}</dt>
                  <dd className="text-slate-600">{site.contact.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">{t.officialEmail}</dt>
                  <dd>
                    <a href={`mailto:${site.contact.email}`} className="text-brand hover:underline" dir="ltr">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">{t.careers}</dt>
                  <dd>
                    <a href={`mailto:${site.contact.careersEmail}`} className="text-brand hover:underline" dir="ltr">
                      {site.contact.careersEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">{t.directPhone}</dt>
                  <dd>
                    <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="text-brand hover:underline" dir="ltr">
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
                  <span className="font-medium text-navy">{t.fullName}</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-brand"
                    placeholder={t.fullNamePlaceholder}
                  />
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium text-navy">{t.corporateEmail}</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-brand"
                    placeholder={t.emailPlaceholder}
                    dir="ltr"
                  />
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium text-navy">{t.inquiryType}</span>
                  <select
                    name="type"
                    className="rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-brand"
                  >
                    {t.inquiryOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium text-navy">{t.message}</span>
                  <textarea
                    name="message"
                    rows={4}
                    className="rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-brand"
                    placeholder={t.messagePlaceholder}
                  />
                </label>
                <button type="submit" className="btn btn-primary justify-center">
                  {t.submit} <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
