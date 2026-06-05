import { resolveArticleTopic, type PoradnaTopic } from "@/lib/poradna-topic";
import type { PoradnaArticleListing } from "@/lib/poradna-articles";

export type ServiceLink = {
  href: string;
  title: string;
};

const S = {
  emise: { href: "/sluzby/mereni-emisi", title: "Měření emisí" },
  pracovni: { href: "/sluzby/pracovni-prostredi", title: "Měření pracovního prostředí" },
  hluk: { href: "/sluzby/mereni-hluku", title: "Měření hluku a akustika" },
  hlukStudie: { href: "/sluzby/hlukove-studie", title: "Hlukové studie" },
  rozptyl: { href: "/sluzby/rozptylove-studie", title: "Rozptylové studie" },
  eia: { href: "/sluzby/eia-oznameni-zameru", title: "EIA a oznámení záměru" },
  posudky: { href: "/sluzby/odborne-posudky", title: "Odborné posudky" },
  provozni: { href: "/sluzby/provozni-rady", title: "Provozní řády" },
  ippc: { href: "/sluzby/ippc-integrovana-povoleni", title: "IPPC a integrovaná povolení" },
  ispop: { href: "/sluzby/ispop", title: "ISPOP a provozní evidence" },
  ghg: { href: "/sluzby/ghg-overovani", title: "GHG a ověřování emisí" },
  chemLatky: { href: "/sluzby/chemicke-latky", title: "Chemické látky v provozu" },
  bezpecnostni: { href: "/sluzby/bezpecnostni-listy", title: "Bezpečnostní listy" },
  skoleni: { href: "/sluzby/skoleni-chemicke-legislativy", title: "Školení chemické legislativy" },
  povoleni: { href: "/sluzby/povoleni-provozu", title: "Povolení provozu zdroje" }
} satisfies Record<string, ServiceLink>;

const topicServices: Record<string, ServiceLink[]> = {
  Emise: [S.emise, S.posudky, S.rozptyl],
  Hluk: [S.hluk, S.hlukStudie, S.eia],
  "Rozptylové studie": [S.rozptyl, S.emise, S.eia],
  "Pracovní prostředí": [S.pracovni, S.chemLatky, S.bezpecnostni],
  "EIA a povolování": [S.eia, S.posudky, S.rozptyl],
  Legislativa: [S.posudky, S.provozni, S.povoleni],
  "Chemická legislativa": [S.skoleni, S.bezpecnostni, S.chemLatky]
};

/** Klíčová slova v názvu/slugu → doplnění souvisejících služeb. */
const keywordRules: { pattern: RegExp; services: ServiceLink[] }[] = [
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
  topic?: PoradnaTopic
): ServiceLink[] {
  const haystack = `${title} ${slug}`.toLocaleLowerCase("cs-CZ");
  const resolvedTopic = topic ?? resolveArticleTopic({ title });
  const base = topicServices[resolvedTopic] ?? [S.emise];

  const fromKeywords = keywordRules
    .filter((rule) => rule.pattern.test(haystack))
    .flatMap((rule) => rule.services);

  return dedupeLinks([...fromKeywords, ...base]).slice(0, 3);
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
