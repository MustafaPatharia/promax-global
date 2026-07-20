import type { Metadata } from "next";
import { site } from "./site";
import { ogLocale, type Locale } from "./i18n";

const abs = (locale: string, path: string) =>
  site.url + "/" + locale + (path === "/" ? "" : path);

/** Per-page metadata helper. Keeps titles/OG/canonical consistent and emits
 *  hreflang alternates for both locales (x-default → English). */
export function pageMeta({
  title,
  description,
  path = "/",
  locale,
}: {
  title: string;
  description: string;
  path?: string;
  locale: Locale;
}): Metadata {
  const url = abs(locale, path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: abs("en", path),
        ar: abs("ar", path),
        "x-default": abs("en", path),
      },
    },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: ogLocale[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
    },
  };
}
