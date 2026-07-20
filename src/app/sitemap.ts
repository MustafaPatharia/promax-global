import type { MetadataRoute } from "next";
import { site, allRoutes } from "@/lib/site";
import { locales } from "@/lib/i18n";

// required for `output: export` (GitHub Pages build)
export const dynamic = "force-static";

const loc = (locale: string, path: string) =>
  site.url + `/${locale}` + (path === "/" ? "" : path);

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    allRoutes.map((path) => ({
      url: loc(locale, path),
      changeFrequency: "monthly",
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, loc(l, path)])),
      },
    }))
  );
}
