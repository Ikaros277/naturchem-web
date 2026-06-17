import type { MetadataRoute } from "next";
import { caseStudyCategories } from "@/lib/case-studies";
import { getArticles } from "@/lib/articles";
import { dedicatedServicePages } from "@/lib/dedicated-service-pages";
import { localizedCanonical } from "@/lib/i18n/metadata-helpers";
import { locales } from "@/lib/i18n/locales";
import { seoLandings } from "@/lib/seo-landings";

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
  "/faq",
  "/o-spolecnosti-naturchem",
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
  "/kontakt",
  "/ochrana-osobnich-udaju",
  "/zasady-cookies"
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const articles = await getArticles();
  const caseRoutes = caseStudyCategories.map((c) => `/typicke-zakazky/${c.slug}`);
  const articleRoutes = articles.map((a) => `/poradna/${a.slug}`);
  const landingRoutes = seoLandings.map((l) => `/${l.slug}`);
  const dedicatedRoutes = Object.values(dedicatedServicePages).map((p) => `/${p.slug}`);
  const allRoutes = [
    ...routes,
    ...dedicatedRoutes,
    ...caseRoutes,
    ...articleRoutes,
    ...landingRoutes
  ];

  return locales.flatMap((locale) =>
    allRoutes.map((route) => ({
      url: localizedCanonical(route, locale),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, localizedCanonical(route, l)])
        )
      }
    }))
  );
}
