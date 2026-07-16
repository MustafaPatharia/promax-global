import type { MetadataRoute } from "next";
import { site, allRoutes } from "@/lib/site";

// required for `output: export` (GitHub Pages build)
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((path) => ({
    url: site.url + path,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
