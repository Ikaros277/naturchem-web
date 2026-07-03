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
  "",
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

function articleLastModified(article: { updatedAt?: string; publishedAt: string }): Date {
  const raw = article.updatedAt || article.publishedAt;
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function staticSitemapEntries(now: Date, staticPaths: string[]): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    staticPaths.map((route) => ({
      url: localizedCanonical(route, locale),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: buildLocaleAlternatesLanguages(route, locales)
      }
    }))
  );
}

async function articleSitemapEntries(
  slugLocaleMap: ReadonlyMap<string, readonly Locale[]>
): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  await Promise.all(
    locales.map(async (locale) => {
      const articles = await getArticles(locale);

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
    })
  );

  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const caseRoutes = caseStudyCategories.map((c) => `/typicke-zakazky/${c.slug}`);
  const landingRoutes = seoLandings.map((l) => `/${l.slug}`);
  const dedicatedRoutes = Object.values(dedicatedServicePages).map((p) => `/${p.slug}`);
  const staticPaths = uniquePaths([...routes, ...dedicatedRoutes, ...caseRoutes, ...landingRoutes]);
  const slugLocaleMap = await getArticleSlugLocaleMap();

  return [...staticSitemapEntries(now, staticPaths), ...(await articleSitemapEntries(slugLocaleMap))];
}
