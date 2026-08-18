import type { MetadataRoute } from "next";
import { getArticles, getArticleSlugLocaleMap } from "@/lib/articles";
import { caseStudyCategories } from "@/lib/case-studies";
import { dedicatedServicePages } from "@/lib/dedicated-service-pages";
import {
  buildLocaleAlternatesLanguages,
  localizedCanonical
} from "@/lib/i18n/metadata-helpers";
import { locales, type Locale } from "@/lib/i18n/locales";
import { seoLandings } from "@/lib/seo-landings";
import { getAllSalesCategoryParams } from "@/lib/sales-categories";
import { pcfElettronicaProducts } from "@/lib/pcf-elettronica-catalog";

/**
 * Daily ISR is enough for scheduled Poradna URLs. lastModified must stay
 * deterministic — a fresh `new Date()` rewrites the whole sitemap every regen
 * and burns Hobby ISR Writes (8 KB units).
 */
export const revalidate = 86400;

const salesCategoryRoutes = getAllSalesCategoryParams().flatMap(({ brand, slug }) => [
  `/prodej/${brand}/${slug}`
]);

const salesRoutes = [
  "/prodej",
  "/prodej/pcf-elettronica",
  ...salesCategoryRoutes,
  ...pcfElettronicaProducts.map((product) => `/prodej/pcf-elettronica/${product.slug}`)
];

const routes = [
  "/",
  "/sluzby",
  "/sluzby/mereni-emisi",
  "/sluzby/pracovni-prostredi",
  "/sluzby/mereni-hluku",
  "/sluzby/rozptylove-studie",
  "/sluzby/hlukove-studie",
  "/sluzby/odborne-posudky",
  "/sluzby/provozni-rady",
  "/sluzby/ippc-integrovana-povoleni",
  "/sluzby/eia-oznameni-zameru",
  "/sluzby/ispop",
  "/sluzby/ghg-overovani",
  "/sluzby/eia-posudky-poradenstvi",
  "/sluzby/skoleni-chemicke-legislativy",
  "/sluzby/bezpecnostni-listy",
  "/sluzby/chemicke-latky",
  "/akreditace-autorizace-dokumenty",
  "/pristrojove-vybaveni",
  ...salesRoutes,
  "/faq",
  "/o-spolecnosti-naturchem",
  "/proc-naturchem",
  "/reference",
  "/typicke-zakazky",
  "/provozy-a-technologie",
  "/provozy-a-technologie/lakovny",
  "/provozy-a-technologie/kotelny",
  "/provozy-a-technologie/svarovny",
  "/provozy-a-technologie/sklarstvi",
  "/provozy-a-technologie/odpady-recyklace",
  "/provozy-a-technologie/tepelna-cerpadla-vzt",
  "/provozy-a-technologie/bioplyn-biometan",
  "/provozy-a-technologie/zemedelske-provozy",
  "/provozy-a-technologie/drevozpracujici",
  "/provozy-a-technologie/automotive",
  "/poradna",
  "/kontakt"
];

function uniquePaths(paths: string[]): string[] {
  return [...new Set(paths)];
}

const CONTENT_REFRESH = new Date("2026-07-14T00:00:00.000Z");
const CATALOG_REFRESH = new Date("2026-03-01T00:00:00.000Z");

function articleLastModified(article: { updatedAt?: string; publishedAt: string }): Date {
  const raw = article.updatedAt || article.publishedAt;
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? CONTENT_REFRESH : parsed;
}

function staticRouteLastModified(route: string, poradnaHubDate?: Date): Date {
  if (route === "/poradna" && poradnaHubDate) return poradnaHubDate;
  if (route.startsWith("/prodej")) return CATALOG_REFRESH;
  return CONTENT_REFRESH;
}

function staticSitemapEntries(
  staticPaths: string[],
  poradnaHubDate: Date
): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    staticPaths.map((route) => ({
      url: localizedCanonical(route, locale),
      lastModified: staticRouteLastModified(route, poradnaHubDate),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.8,
      alternates: {
        languages: buildLocaleAlternatesLanguages(route, locales)
      }
    }))
  );
}

function articleSitemapEntries(
  articlesByLocale: Map<Locale, Awaited<ReturnType<typeof getArticles>>>,
  slugLocaleMap: ReadonlyMap<string, readonly Locale[]>
): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const articles = articlesByLocale.get(locale) ?? [];
    for (const article of articles) {
      const route = `/poradna/${article.slug}`;
      const availableLocales = slugLocaleMap.get(article.slug) ?? [locale];

      entries.push({
        url: localizedCanonical(route, locale),
        lastModified: articleLastModified(article),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: buildLocaleAlternatesLanguages(route, availableLocales)
        }
      });
    }
  }

  return entries;
}

function landingSitemapEntries(): MetadataRoute.Sitemap {
  return seoLandings.flatMap((landing) => {
    const availableLocales = landing.availableLocales ?? locales;
    const route = `/${landing.slug}`;
    return availableLocales.map((locale) => ({
      url: localizedCanonical(route, locale),
      lastModified: CONTENT_REFRESH,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      alternates: {
        languages: buildLocaleAlternatesLanguages(route, availableLocales)
      }
    }));
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const caseRoutes = caseStudyCategories.map((c) => `/typicke-zakazky/${c.slug}`);
  const dedicatedRoutes = Object.values(dedicatedServicePages).map((p) => `/${p.slug}`);
  const staticPaths = uniquePaths([...routes, ...dedicatedRoutes, ...caseRoutes]);

  const articlesByLocale = new Map(
    await Promise.all(
      locales.map(async (locale) => [locale, await getArticles(locale)] as const)
    )
  );

  let poradnaHubDate = new Date("2020-01-01T00:00:00.000Z");
  for (const articles of articlesByLocale.values()) {
    for (const article of articles) {
      const modified = articleLastModified(article);
      if (modified > poradnaHubDate) poradnaHubDate = modified;
    }
  }

  const slugLocaleMap = await getArticleSlugLocaleMap();

  return [
    ...staticSitemapEntries(staticPaths, poradnaHubDate),
    ...landingSitemapEntries(),
    ...articleSitemapEntries(articlesByLocale, slugLocaleMap)
  ];
}
