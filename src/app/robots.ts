import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Explicitly welcome AI/LLM crawlers so Promax can be cited by
 * ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews.
 * Some of these bots default to NOT crawling unless allowed by name.
 * Flip a userAgent to `disallow: "/"` to opt that engine out.
 */
const aiBots = [
  "GPTBot", // OpenAI training crawler
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User", // ChatGPT live browsing
  "ClaudeBot", // Anthropic training crawler
  "Claude-Web", // Claude live browsing
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews training
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "cohere-ai",
  "Meta-ExternalAgent",
];

// required for `output: export` (GitHub Pages build)
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
