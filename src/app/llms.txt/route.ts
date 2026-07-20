import { site, nav, verticals } from "@/lib/site";
import { pages } from "@/lib/content";

/**
 * /llms.txt — AI-native site guide (the GEO standard, llmstxt.org).
 * A curated, quotable Markdown map so LLMs grab the right pages fast.
 * Generated from the same content source as the site, so it never drifts.
 */
export const dynamic = "force-static";

function abs(path: string) {
  return `${site.url}${path}`;
}

export function GET() {
  const divisions = nav.find((n) => n.href === "/portfolio")?.children ?? [];

  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `**Tagline:** ${site.tagline}`,
    `**Headquarters:** ${site.contact.address}`,
    `**Contact:** ${site.contact.email} · ${site.contact.phone}`,
    "",
    "## About",
    "",
    `- [About Promax Global](${abs("/about")}): ${pages.about.metaDescription}`,
    `- [Work With Us](${abs("/work-with-us")}): ${pages["work-with-us"].metaDescription}`,
    `- [Invest With Us](${abs("/invest-with-us")}): ${pages["invest-with-us"].metaDescription}`,
    "",
    "## Portfolio — Divisions",
    "",
    ...divisions.map((d) => {
      const slug = d.href.replace("/portfolio/", "");
      const desc = pages[slug]?.metaDescription ?? "";
      return `- [${d.label}](${abs(d.href)}): ${desc}`;
    }),
    "",
    "## Verticals",
    "",
    ...verticals.map((v) => `- **${v.title}**: ${v.blurb}`),
    "",
    "## Contact",
    "",
    `- [Reach Promax Global](${abs("/reach-us")}): Partnership, advisory, and investment enquiries.`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
