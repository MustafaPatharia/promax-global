import { site } from "@/lib/site";

/**
 * Top utility bar — verbatim from the client content doc's "Top Utility Bar" block:
 *   Location: Abu Dhabi, UAE
 *   Email: info@promaxglobal.ae
 *   Phone: +971 56 601 0848
 *   Language selector: EN (active) | AR | FR | LA
 *
 * Contact values come from `lib/site.ts` — never hardcode them here.
 *
 * LANGUAGES: EN is the only build that exists today (client, A6: "fix and approve
 * all English content, then move to Arabic / French / Latin"). AR/FR/LA are shown
 * because the doc specifies the selector, but they are rendered INERT rather than
 * as links — a live link to an unbuilt locale would 404. Swap each to a <Link> as
 * its locale ships.
 */

const LOCALES = [
  { code: "EN", label: "English", active: true },
  { code: "AR", label: "العربية", active: false },
  { code: "FR", label: "Français", active: false },
  { code: "LA", label: "Latina", active: false },
];

export default function UtilityBar() {
  return (
    <div
      dir="ltr"
      className="hidden border-b border-white/10 bg-navy-900 text-white md:block"
    >
      <div className="flex items-center justify-between gap-6 px-5 py-2 text-xs md:px-8">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="flex items-center gap-1.5">
            <span aria-hidden>📍</span>
            {site.contact.address.split(",").slice(-2).join(",").trim()}
          </span>
          <a
            href={`mailto:${site.contact.email}`}
            className="flex items-center gap-1.5 transition hover:text-white"
          >
            <span aria-hidden>✉</span>
            {site.contact.email}
          </a>
          <a
            href={site.contact.phoneHref}
            className="flex items-center gap-1.5 transition hover:text-white"
          >
            <span aria-hidden>☏</span>
            {site.contact.phone}
          </a>
        </div>

        <div className="flex items-center gap-1" aria-label="Language">
          {LOCALES.map((l, i) => (
            <span key={l.code} className="flex items-center">
              {i > 0 && (
                <span aria-hidden className="px-1.5 text-white/25">
                  |
                </span>
              )}
              {l.active ? (
                <span
                  aria-current="true"
                  className="font-semibold text-brand"
                  title={l.label}
                >
                  {l.code}
                </span>
              ) : (
                <span
                  aria-disabled="true"
                  title={`${l.label} — coming soon`}
                  className="cursor-not-allowed text-slate-500"
                >
                  {l.code}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
