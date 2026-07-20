import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getUi, getNav, getVerticals, getTagline, withLocale, type Locale } from "@/lib/i18n";
import { asset } from "@/lib/assets";

export default function Footer({ locale }: { locale: Locale }) {
  const year = 2026; // static; bump or compute at build if desired
  const ui = getUi(locale);
  const nav = getNav(locale);
  const verticals = getVerticals(locale);
  const tagline = getTagline(locale);
  const L = (href: string) => withLocale(href, locale);

  return (
    <footer className="bg-navy text-slate-300">
      <div className="shell grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src={asset("/brand/promax-logo-white.png")}
            alt="Promax Global"
            width={541}
            height={232}
            className="h-10 w-auto"
          />
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {tagline} — {ui.footer.blurb}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{ui.footer.portfolio}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {verticals.map((v) => (
              <li key={v.slug}>
                <Link href={L(`/portfolio/${v.slug}`)} className="hover:text-brand">
                  {v.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{ui.footer.company}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav
              .filter((n) => !n.children)
              .map((n) => (
                <li key={n.href}>
                  <Link href={L(n.href)} className="hover:text-brand">
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{ui.footer.corporateOffice}</h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-slate-400">
            <p>{site.contact.address}</p>
            <p>
              <a href={`mailto:${site.contact.email}`} className="hover:text-brand" dir="ltr">
                {site.contact.email}
              </a>
            </p>
            <p>
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-brand" dir="ltr">
                {site.contact.phone}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-400 md:flex-row">
          <p>© {year} {ui.footer.rights}</p>
          <p className="uppercase tracking-wide">{tagline}</p>
        </div>
      </div>
    </footer>
  );
}
