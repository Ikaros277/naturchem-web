import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** AI and search crawlers — explicit allow for generative engine optimization. */
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "PerplexityBot",
  "Applebot-Extended",
  "cohere-ai",
  "Bytespider",
  "Meta-ExternalAgent",
  "FacebookBot",
  "Diffbot",
  "Amazonbot",
  "YouBot",
  "CCBot",
  "ImagesiftBot",
  "omgili",
  "Timpibot",
  "Twitterbot",
  "DeepSeekBot",
  "GrokBot",
  "xAI-Grok"
] as const;

/** GEO discovery files — listed explicitly so AI crawlers treat them as first-class. */
const llmDiscoveryPaths = [
  "/llms.txt",
  "/llms-en.txt",
  "/llms-de.txt",
  "/llms-full.txt",
  "/llms-articles.txt",
  "/ai.txt"
] as const;

const disallowedPaths = ["/admin/", "/api/", "/search/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", ...llmDiscoveryPaths],
        disallow: disallowedPaths
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: ["/", ...llmDiscoveryPaths],
        disallow: ["/admin/", "/api/"]
      }))
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
