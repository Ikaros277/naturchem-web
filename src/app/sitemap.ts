import type { MetadataRoute } from "next";
import { caseStudyCategories } from "@/lib/case-studies";
import { getArticles } from "@/lib/articles";
import { dedicatedServiceSlugs } from "@/lib/render-dedicated-service-page";
import { seoLandings } from "@/lib/seo-landings";
import { siteUrl } from "@/lib/site";

const routes = [
  "",
  "/sluzby",
  "/mereni-emisi",
  "/pracovni-prostredi",
  "/mereni-hluku-hlukove-studie",
  "/rozptylove-studie",
  "/hlukove-studie",
  "/odborne-posudky",
  "/provozni-rady",
  "/ippc-integrovana-povoleni",
  "/eia-oznameni-zameru",
  "/ispop-souhrnna-provozni-evidence",
  "/ghg-overovani-emisi-sklenikovych-plynu",
  "/eia-posudky-poradenstvi",
  "/skoleni-chemicke-legislativy",
  "/bezpecnostni-listy",
  "/chemicke-latky-v-provozu",
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
  "/kontakt"
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const articles = await getArticles();
  const caseRoutes = caseStudyCategories.map((c) => `/typicke-zakazky/${c.slug}`);
  const articleRoutes = articles.map((a) => `/poradna/${a.slug}`);
  const landingRoutes = seoLandings.map((l) => `/${l.slug}`);
  const dedicatedRoutes = dedicatedServiceSlugs.map((slug) => `/${slug}`);
  const allRoutes = [
    ...routes,
    ...dedicatedRoutes,
    ...caseRoutes,
    ...articleRoutes,
    ...landingRoutes
  ];

  return allRoutes.map((r) => ({
    url: `${siteUrl}${r}/`.replace(/\/\/$/, "/"),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8
  }));
}
