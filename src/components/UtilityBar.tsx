import { site } from "@/lib/site";
import { getUi, type Locale } from "@/lib/i18n";
import LangSwitcher from "@/components/i18n/LangSwitcher";

/**
 * Thin top utility strip above the main nav: location, email, phone, and the
 * EN|AR language switcher. Contact values come from site.ts; labels from the
 * locale dictionary.
 */
const tel = site.contact.phone.replace(/[^\d+]/g, "");

export default function UtilityBar({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  return (
    <div className="hidden border-b border-white/10 bg-navy-900 text-slate-300 md:block">
      <div className="shell flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <span aria-hidden>📍</span> {ui.utility.location}
          </span>
          <a href={`mailto:${site.contact.email}`} className="flex items-center gap-1.5 hover:text-brand" dir="ltr">
            <span aria-hidden>✉️</span> {site.contact.email}
          </a>
          <a href={`tel:${tel}`} className="flex items-center gap-1.5 hover:text-brand" dir="ltr">
            <span aria-hidden>📞</span> {site.contact.phone}
          </a>
        </div>
        <LangSwitcher
          locale={locale}
          labels={{ en: ui.switcher.en, ar: ui.switcher.ar }}
          aria={ui.switcher.aria}
        />
      </div>
    </div>
  );
}
