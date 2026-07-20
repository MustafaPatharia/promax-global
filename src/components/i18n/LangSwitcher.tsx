"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, stripLocale, LOCALE_COOKIE, type Locale } from "@/lib/i18n";
import { setCookie } from "./cookies";

/** EN | AR toggle. Swaps only the locale segment of the current path and
 *  persists the choice so it survives the next visit. */
export default function LangSwitcher({
  locale,
  labels,
  aria,
}: {
  locale: Locale;
  labels: Record<Locale, string>;
  aria: string;
}) {
  const pathname = usePathname();
  const { rest } = stripLocale(pathname || "/");
  const to = (l: Locale) => `/${l}${rest === "/" ? "" : rest}`;

  return (
    <div className="flex items-center gap-1" aria-label={aria}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-white/20">|</span>}
          <Link
            href={to(l)}
            onClick={() => setCookie(LOCALE_COOKIE, l)}
            aria-current={l === locale ? "true" : undefined}
            className={`px-1 uppercase transition ${
              l === locale ? "font-semibold text-brand" : "text-slate-400 hover:text-white"
            }`}
          >
            {labels[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}
