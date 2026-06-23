import { resolveArticleTopic, type PoradnaTopic } from "@/lib/poradna-topic";
import type { PoradnaArticleListing } from "@/lib/poradna-articles";
import type { Locale } from "@/lib/i18n/locales";
import { defaultLocale } from "@/lib/i18n/locales";
import { services as servicesCs } from "@/lib/site";
import { services as servicesDe } from "@/lib/site-services-de";
import { services as servicesEn } from "@/lib/site-services-en";
export type ServiceLink = {
  href: string;
  title: string;
};

const S = {
  emise: "/sluzby/mereni-emisi",
  pracovni: "/sluzby/pracovni-prostredi",
  hluk: "/sluzby/mereni-hluku",
  hlukStudie: "/sluzby/hlukove-studie",
  rozptyl: "/sluzby/rozptylove-studie",
  eia: "/sluzby/eia-oznameni-zameru",
  posudky: "/sluzby/odborne-posudky",
  provozni: "/sluzby/provozni-rady",
  ippc: "/sluzby/ippc-integrovana-povoleni",
  ispop: "/sluzby/ispop",
  ghg: "/sluzby/ghg-overovani",
  chemLatky: "/sluzby/chemicke-latky",
  bezpecnostni: "/sluzby/bezpecnostni-listy",
  skoleni: "/sluzby/skoleni-chemicke-legislativy",
  povoleni: "/sluzby/povoleni-provozu"
} as const;

type ServiceHref = (typeof S)[keyof typeof S];

function serviceCatalog(locale: Locale) {
  if (locale === "en") return servicesEn;
  if (locale === "de") return servicesDe;
  return servicesCs;
}

function toServiceLink(href: ServiceHref, locale: Locale): ServiceLink {
  const title = serviceCatalog(locale).find((service) => service.href === href)?.title ?? href;
  return { href, title };
}

const topicServiceHrefs: Record<string, ServiceHref[]> = {
  Emise: [S.emise, S.posudky, S.rozptyl],
  Hluk: [S.hluk, S.hlukStudie, S.eia],
  "Rozptylové studie": [S.rozptyl, S.emise, S.eia],
  "Pracovní prostředí": [S.pracovni, S.chemLatky, S.bezpecnostni],
  "EIA a povolování": [S.eia, S.posudky, S.rozptyl],
  Legislativa: [S.posudky, S.provozni, S.povoleni],
  "Chemická legislativa": [S.skoleni, S.bezpecnostni, S.chemLatky]
};

/** Klíčová slova v názvu/slugu → doplnění souvisejících služeb. */
const keywordRules: { pattern: RegExp; services: ServiceHref[] }[] = [
  { pattern: /ispop|provozní evidence|hlášen/i, services: [S.ispop, S.ghg, S.emise] },
  { pattern: /ghg|skleníkov/i, services: [S.ghg, S.ispop] },
  { pattern: /kotel|plynov|spalov|voc|lakovn|imise|ovzduší|emis/i, services: [S.emise, S.posudky] },
  { pattern: /hluk|laeq|akustik|tepeln.*čerpadl|vzt/i, services: [S.hluk, S.hlukStudie] },
  { pattern: /rozptyl|imis/i, services: [S.rozptyl, S.emise] },
  { pattern: /eia|jes|záměr|povolen/i, services: [S.eia, S.posudky, S.povoleni] },
  { pattern: /posudek|posuzov/i, services: [S.posudky, S.emise] },
  { pattern: /pracovní prostřed|kategorizac|prach|chemick.*látk|respirabil/i, services: [S.pracovni, S.chemLatky] },
  { pattern: /bezpečnostní list|chemick/i, services: [S.bezpecnostni, S.skoleni, S.chemLatky] },
  { pattern: /provozní řád|ippc|integrovan/i, services: [S.provozni, S.ippc] },
  { pattern: /svařovn|automotive|recyklac|skládk|bioplyn|dřevozprac|zeměděl/i, services: [S.emise, S.hluk, S.eia] }
];

function dedupeLinks(links: ServiceLink[]): ServiceLink[] {
  const seen = new Set<string>();
  return links.filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
}

export function getRelatedServicesForArticle(
  title: string,
  slug: string,
  topic?: PoradnaTopic,
  locale: Locale = defaultLocale
): ServiceLink[] {
  const haystack = `${title} ${slug}`.toLocaleLowerCase("cs-CZ");
  const resolvedTopic = topic ?? resolveArticleTopic({ title });
  const base = topicServiceHrefs[resolvedTopic] ?? [S.emise];

  const fromKeywords = keywordRules
    .filter((rule) => rule.pattern.test(haystack))
    .flatMap((rule) => rule.services);

  return dedupeLinks([...fromKeywords, ...base].map((href) => toServiceLink(href, locale))).slice(0, 3);
}

export function serviceHrefToSlug(href: string): string {
  return href.replace(/^\/sluzby\//, "").replace(/\/$/, "");
}

export function articleMatchesService(
  articleTitle: string,
  articleSlug: string,
  serviceHref: string
): boolean {
  return getRelatedServicesForArticle(articleTitle, articleSlug).some(
    (link) => link.href === serviceHref
  );
}

export function getRelatedArticlesForService(
  serviceHref: string,
  articles: PoradnaArticleListing[],
  limit = 2
): PoradnaArticleListing[] {
  return articles
    .filter((article) => {
      const slug = article.href.replace(/^\/poradna\//, "").replace(/\/$/, "");
      return articleMatchesService(article.title, slug, serviceHref);
    })
    .slice(0, limit);
}
