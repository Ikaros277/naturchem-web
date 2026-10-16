import { resolveArticleTopic, type PoradnaTopic } from "@/lib/poradna-topic";
import type { PoradnaArticleListing } from "@/lib/poradna-articles";
import type { Locale } from "@/lib/i18n/locales";
import { defaultLocale } from "@/lib/i18n/locales";
import { services as servicesCs } from "@/lib/site";
import { services as servicesDe } from "@/lib/site-services-de";
import { services as servicesEn } from "@/lib/site-services-en";
import { serviceMegaGroups } from "@/lib/service-megamenu";
import { serviceMegaGroupsEn } from "@/lib/service-megamenu-en";
import { serviceMegaGroupsDe } from "@/lib/service-megamenu-de";
import type { ServiceMegaMenuGroup } from "@/lib/megamenu-types";
export type ServiceLink = {
  href: string;
  title: string;
};

const S = {
  emise: "/sluzby/mereni-emisi",
  pracovni: "/sluzby/pracovni-prostredi",
  hluk: "/sluzby/mereni-hluku",
  osvetleni: "/sluzby/mereni-osvetleni",
  mikroklima: "/sluzby/mereni-mikroklimatu",
  vibrace: "/sluzby/mereni-vibraci",
  tepelnaZatez: "/sluzby/mereni-tepelna-chladova-zatez",
  diisokyanaty: "/sluzby/mereni-diisokyanatu",
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
  const groups: readonly ServiceMegaMenuGroup[] = locale === "en" ? serviceMegaGroupsEn : locale === "de" ? serviceMegaGroupsDe : serviceMegaGroups;
  const title = serviceCatalog(locale).find((service) => service.href === href)?.title
    ?? groups.flatMap(group => group.links).find(service => service.href === href)?.label
    ?? href;
  return { href, title };
}

const topicServiceHrefs: Record<string, ServiceHref[]> = {
  Emise: [S.emise, S.posudky, S.rozptyl],
  "Hluk a vibrace": [S.hluk, S.hlukStudie, S.vibrace],
  "Rozptylové studie": [S.rozptyl, S.emise, S.eia],
  "Pracovní prostředí": [S.pracovni, S.chemLatky, S.bezpecnostni],
  "EIA a povolování": [S.eia, S.posudky, S.rozptyl],
  "Prašnost a deponie": [S.emise, S.rozptyl, S.povoleni],
  "KHS, ČIŽP a úřady": [S.pracovni, S.hluk, S.emise],
  "Provozní praxe pro ekology": [S.ispop, S.emise, S.provozni],
  Legislativa: [S.posudky, S.provozni, S.povoleni],
  "Chemická legislativa": [S.skoleni, S.bezpecnostni, S.chemLatky]
};

/** Klíčová slova v názvu/slugu → doplnění souvisejících služeb. */
const keywordRules: { pattern: RegExp; services: ServiceHref[] }[] = [
  { pattern: /ippc|integrovan/i, services: [S.ippc, S.posudky, S.povoleni] },
  { pattern: /ispop|provozní evidence|hlášen/i, services: [S.ispop, S.ghg, S.emise] },
  { pattern: /ghg|skleníkov/i, services: [S.ghg, S.ispop] },
  { pattern: /kotel|plynov|spalov|voc|lakovn|imise|ovzduší|emis/i, services: [S.emise, S.posudky] },
  { pattern: /hluk|laeq|akustik|tepeln.*čerpadl|vzt/i, services: [S.hluk, S.hlukStudie] },
  { pattern: /rozptyl|imis/i, services: [S.rozptyl, S.emise] },
  { pattern: /eia|jes|záměr|povolen/i, services: [S.eia, S.posudky, S.povoleni] },
  { pattern: /posudek|posuzov/i, services: [S.posudky, S.emise] },
  { pattern: /pracovní prostřed|kategorizac|prach|chemick.*látk|respirabil/i, services: [S.pracovni, S.chemLatky] },
  { pattern: /bezpečnostní list|chemick/i, services: [S.bezpecnostni, S.skoleni, S.chemLatky] },
  { pattern: /provozní řád/i, services: [S.provozni, S.ippc] },
  { pattern: /svařovn|automotive|recyklac|skládk|bioplyn|dřevozprac|zeměděl/i, services: [S.emise, S.hluk, S.eia] }
];

/** Specific subjects precede broad topic matches; accents and URL hyphens are normalized. */
const specificServiceRules: { pattern: RegExp; services: ServiceHref[] }[] = [
  { pattern: /osvetlen/, services: [S.osvetleni, S.pracovni] },
  { pattern: /mikroklima/, services: [S.mikroklima, S.tepelnaZatez] },
  { pattern: /vibrac/, services: [S.vibrace, S.pracovni] },
  { pattern: /(?:tepelna|tepelne|chladova|chladove) zatez/, services: [S.tepelnaZatez, S.mikroklima] },
  { pattern: /diisokyan|diisocyan/, services: [S.diisokyanaty, S.pracovni] },
  { pattern: /bezpecnostni(?:ch|ho|mi)? list/, services: [S.bezpecnostni, S.chemLatky] },
  { pattern: /uhlikov|sklenikov|\bghg\b/, services: [S.ghg] },
  { pattern: /souhrnn[a-z]* provozn[a-z]* evidenc|\bispop\b|\bf ovz spe\b/, services: [S.ispop, S.emise] },
  { pattern: /hlukov[a-z]* studi/, services: [S.hlukStudie, S.hluk] },
  { pattern: /rozptylov[a-z]* studi/, services: [S.rozptyl, S.posudky] },
];

type PriorityLanding = Record<Locale, ServiceLink>;

const landingIspop: PriorityLanding = {
  cs: { href: "/ispop-rocni-hlaseni-emise", title: "ISPOP: oznámení měření emisí a roční hlášení" },
  en: { href: "/ispop-rocni-hlaseni-emise", title: "ISPOP: measurement notification and annual report" },
  de: { href: "/ispop-rocni-hlaseni-emise", title: "ISPOP: Messanmeldung und Jahresmeldung" }
};
const landingKategorizace: PriorityLanding = {
  cs: { href: "/mereni-pracovniho-prostredi-kategorizace-praci", title: "Měření pro kategorizaci prací a podklady pro KHS" },
  en: { href: "/mereni-pracovniho-prostredi-kategorizace-praci", title: "Measurements for job categorisation (KHS)" },
  de: { href: "/mereni-pracovniho-prostredi-kategorizace-praci", title: "Messungen zur Arbeitsplatzkategorisierung (KHS)" }
};
const landingHlukKolaudace: PriorityLanding = {
  cs: { href: "/mereni-hluku-ke-kolaudaci", title: "Měření hluku ke kolaudaci" },
  en: { href: "/mereni-hluku-ke-kolaudaci", title: "Noise measurement for occupancy approval" },
  de: { href: "/mereni-hluku-ke-kolaudaci", title: "Lärmmessung zur Abnahme" }
};

/** Články s přímou návazností na konkrétní poptávkovou stránku: zobrazí se jako první. */
const priorityLandingBySlug: Record<string, PriorityLanding> = {
  "ispop-u-jednorazoveho-mereni-emisi-co-musi-zajistit-provozovatel-a-co-autorizovana-osoba": landingIspop,
  "elektronicke-oznamovani-mereni-emisi-a-predavani-protokolu-prakticky-dopad-na-provozovatele": landingIspop,
  "kategorizace-praci-jake-mereni-je-potreba-jako-podklad": landingKategorizace,
  "kategorizace-praci-po-zmene-technologie-nove-mereni": landingKategorizace,
  "mereni-pracovniho-prostredi-kdy-ho-muze-pozadovat-khs": landingKategorizace,
  "vyzva-khs-mereni-pracovniho-prostredi": landingKategorizace,
  "kdy-je-potreba-hlukova-studie-a-kdy-mereni-hluku": landingHlukKolaudace,
  "hluk-z-tepelnych-cerpadel-a-vzt-jednotek-co-resit-pred-kolaudaci": landingHlukKolaudace,
  "kolaudace-vyrobni-haly-provozovny-khs-mereni": landingHlukKolaudace
};

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

  const normalizedSubject = haystack.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[-_]/g, " ");
  const specific = specificServiceRules.find(rule => rule.pattern.test(normalizedSubject))?.services ?? [];
  const priority = priorityLandingBySlug[slug];
  const comparison = slug === "kdy-je-potreba-hlukova-studie-a-kdy-mereni-hluku";
  const priorityLinks = priority && !comparison ? [priority[locale]] : [];
  const specificLinks = specific.map(href => toServiceLink(href, locale));
  // The comparison needs study and measurement first; retain the approval path as the third choice.
  const comparisonLinks = priority && comparison ? [priority[locale]] : [];

  return dedupeLinks([...priorityLinks, ...specificLinks, ...comparisonLinks, ...[...fromKeywords, ...base].map((href) => toServiceLink(href, locale))]).slice(0, 3);
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
      return articleMatchesService(article.title, article.slug, serviceHref);
    })
    .slice(0, limit);
}
