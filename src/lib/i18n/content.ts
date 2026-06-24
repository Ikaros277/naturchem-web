import type { Locale } from "@/lib/i18n/locales";
import type { LocaleContent } from "@/lib/i18n/content-cs";
import type { SectorPageData } from "@/lib/sector-pages";
import type { ContactServiceOption } from "@/lib/contact-services";

const cache: Partial<Record<Locale, Promise<LocaleContent>>> = {};

export async function loadLocaleContent(locale: Locale): Promise<LocaleContent> {
  if (!cache[locale]) {
    cache[locale] = (async () => {
      switch (locale) {
        case "en":
          return (await import("@/lib/i18n/content-en")).localeContent;
        case "de":
          return (await import("@/lib/i18n/content-de")).localeContent;
        default:
          return (await import("@/lib/i18n/content-cs")).localeContent;
      }
    })();
  }
  return cache[locale]!;
}

export async function getFaqContent(locale: Locale) {
  return (await loadLocaleContent(locale)).faq;
}

export async function getSectorPages(locale: Locale): Promise<Record<string, SectorPageData>> {
  return (await loadLocaleContent(locale)).sectorPages;
}

export async function getSectorPage(slug: string, locale: Locale): Promise<SectorPageData> {
  const pages = await getSectorPages(locale);
  const page = pages[slug];
  if (!page) throw new Error(`Unknown sector page: ${slug}`);
  return page;
}

export async function getSectors(locale: Locale) {
  return (await loadLocaleContent(locale)).sectors;
}

export async function getProvozyNavLabel(locale: Locale) {
  return (await loadLocaleContent(locale)).provozyNavLabel;
}

export async function getCaseStudyCategories(locale: Locale) {
  return (await loadLocaleContent(locale)).caseStudyCategories;
}

export async function getCaseStudies(locale: Locale) {
  return (await loadLocaleContent(locale)).caseStudies;
}

export async function getCaseStudyFilterCategories(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("@/lib/case-studies-en")).CASE_STUDY_CATEGORIES;
    case "de":
      return (await import("@/lib/case-studies-de")).CASE_STUDY_CATEGORIES;
    default:
      return (await import("@/lib/case-studies")).CASE_STUDY_CATEGORIES;
  }
}

export async function getCaseStudyCategory(slug: string, locale: Locale) {
  return (await loadLocaleContent(locale)).getCaseStudyCategory(slug);
}

export async function getReferenceExampleGroups(locale: Locale) {
  return (await loadLocaleContent(locale)).referenceExampleGroups;
}

export async function getReferenceContent(locale: Locale) {
  return (await loadLocaleContent(locale)).referenceContent;
}

export async function getSeoLandings(locale: Locale) {
  return (await loadLocaleContent(locale)).seoLandings;
}

export async function getSeoLanding(slug: string, locale: Locale) {
  const landings = await getSeoLandings(locale);
  return landings.find((landing) => landing.slug === slug) ?? null;
}

export async function getEquipmentContent(locale: Locale) {
  return (await loadLocaleContent(locale)).equipmentContent;
}

export async function getAccreditationScope(locale: Locale) {
  return (await loadLocaleContent(locale)).accreditationScope;
}

export async function getAccreditationDocuments(locale: Locale) {
  return (await loadLocaleContent(locale)).accreditationDocuments;
}

export async function getServiceGroups(locale: Locale) {
  return (await loadLocaleContent(locale)).serviceGroups;
}

export async function getTypickeZakazkyContent(locale: Locale) {
  return (await loadLocaleContent(locale)).typickeZakazkyContent;
}

export async function getTypicalScenarios(locale: Locale) {
  return (await loadLocaleContent(locale)).typicalScenarios;
}

export async function getSiteServices(locale: Locale) {
  return (await loadLocaleContent(locale)).siteServices;
}

export async function getAboutPage(locale: Locale) {
  return (await loadLocaleContent(locale)).aboutPage;
}

export async function getAccreditationPage(locale: Locale) {
  return (await loadLocaleContent(locale)).accreditationPage;
}

export async function getPrivacyPage(locale: Locale) {
  return (await loadLocaleContent(locale)).privacyPage;
}

export async function getCookiesPage(locale: Locale) {
  return (await loadLocaleContent(locale)).cookiesPage;
}

export { getInquiryCategories } from "@/lib/i18n/contact-inquiry-i18n";
export { getCompanyStatsContent, type CompanyStatsContent } from "@/lib/i18n/company-stats-i18n";
export { getPoradnaTopicLabel } from "@/lib/i18n/poradna-topic-i18n";

export async function getContactServiceLabel(value: string, locale: Locale): Promise<string> {
  const labels = (await loadLocaleContent(locale)).contactServiceLabels;
  if (!labels) return value;
  return labels[value as ContactServiceOption] ?? value;
}

export async function getTeamMembers(locale: Locale) {
  return (await loadLocaleContent(locale)).teamMembers;
}

export async function getGuaranteeIntro(locale: Locale) {
  return (await loadLocaleContent(locale)).guaranteeIntro;
}

export async function getHomeHeroPillars(locale: Locale) {
  return (await loadLocaleContent(locale)).homeHeroPillars;
}
