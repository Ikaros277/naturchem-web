import type { Locale } from "@/lib/i18n/locales";

function localized<A, B, C>(locale: Locale, cs: A, en: B, de: C): A | B | C {
  if (locale === "de") return de;
  if (locale === "en") return en;
  return cs;
}

import {
  faqCategories as faqCategoriesCs,
  faqFlatItems as faqFlatItemsCs,
  faqIntroCtas as faqIntroCtasCs,
  faqPageIntro as faqPageIntroCs,
  faqPageMetadata as faqPageMetadataCs,
  faqPageTitle as faqPageTitleCs,
  faqUiLabels as faqUiLabelsCs
} from "@/lib/faq";
import {
  faqCategories as faqCategoriesEn,
  faqFlatItemsEn,
  faqIntroCtas as faqIntroCtasEn,
  faqPageIntro as faqPageIntroEn,
  faqPageMetadata as faqPageMetadataEn,
  faqPageTitle as faqPageTitleEn,
  faqUiLabels as faqUiLabelsEn
} from "@/lib/faq-en";
import {
  faqCategories as faqCategoriesDe,
  faqFlatItemsEn as faqFlatItemsDe,
  faqIntroCtas as faqIntroCtasDe,
  faqPageIntro as faqPageIntroDe,
  faqPageMetadata as faqPageMetadataDe,
  faqPageTitle as faqPageTitleDe,
  faqUiLabels as faqUiLabelsDe
} from "@/lib/faq-de";

import { sectorPages as sectorPagesCs, type SectorPageData } from "@/lib/sector-pages";
import { sectorPagesEn } from "@/lib/sector-pages-en";
import { sectorPagesEn as sectorPagesDe } from "@/lib/sector-pages-de";

import { sectors as sectorsCs, provozyNavLabel } from "@/lib/sectors";
import { sectorsEn, provozyNavLabelEn } from "@/lib/sectors-en";
import { sectorsEn as sectorsDe, provozyNavLabelEn as provozyNavLabelDe } from "@/lib/sectors-de";
import type { Sector } from "@/lib/sectors";

import {
  caseStudyCategories as caseStudyCategoriesCs,
  getCaseStudyCategory as getCaseStudyCategoryCs
} from "@/lib/case-studies";
import {
  caseStudyCategories as caseStudyCategoriesEn,
  getCaseStudyCategory as getCaseStudyCategoryEn
} from "@/lib/case-studies-en";
import {
  caseStudyCategories as caseStudyCategoriesDe,
  getCaseStudyCategory as getCaseStudyCategoryDe
} from "@/lib/case-studies-de";

import { referenceExampleGroups as referenceExampleGroupsCs } from "@/lib/reference-example-groups";
import { referenceExampleGroupsEn } from "@/lib/reference-example-groups-en";
import { referenceExampleGroupsEn as referenceExampleGroupsDe } from "@/lib/reference-example-groups-de";

import * as referenceCs from "@/lib/reference-content";
import * as referenceEn from "@/lib/reference-content-en";
import * as referenceDe from "@/lib/reference-content-de";

import { seoLandings as seoLandingsCs } from "@/lib/seo-landings";
import { seoLandings as seoLandingsEn } from "@/lib/seo-landings-en";
import { seoLandings as seoLandingsDe } from "@/lib/seo-landings-de";

import * as equipmentCs from "@/lib/equipment-content";
import * as equipmentEn from "@/lib/equipment-content-en";
import * as equipmentDe from "@/lib/equipment-content-de";

import { accreditedLabScope as accreditedLabScopeCs, authorizations as authorizationsCs } from "@/lib/accreditation-scope";
import { accreditedLabScope as accreditedLabScopeEn, authorizations as authorizationsEn } from "@/lib/accreditation-scope-en";
import { accreditedLabScope as accreditedLabScopeDe, authorizations as authorizationsDe } from "@/lib/accreditation-scope-de";

import { accreditationDocuments as accreditationDocumentsCs } from "@/lib/accreditation-documents";
import { accreditationDocuments as accreditationDocumentsEn } from "@/lib/accreditation-documents-en";
import { accreditationDocuments as accreditationDocumentsDe } from "@/lib/accreditation-documents-de";

import { serviceGroups as serviceGroupsCs } from "@/lib/service-groups";
import { serviceGroups as serviceGroupsEn } from "@/lib/service-groups-en";
import { serviceGroups as serviceGroupsDe } from "@/lib/service-groups-de";

import * as typickeZakazkyCs from "@/lib/typicke-zakazky-content";
import * as typickeZakazkyEn from "@/lib/typicke-zakazky-content-en";
import * as typickeZakazkyDe from "@/lib/typicke-zakazky-content-de";

import { typicalScenarios as typicalScenariosCs } from "@/lib/typical-scenarios";
import { typicalScenarios as typicalScenariosEn } from "@/lib/typical-scenarios-en";
import { typicalScenarios as typicalScenariosDe } from "@/lib/typical-scenarios-de";

import { services as servicesCs } from "@/lib/site";
import { services as servicesEn } from "@/lib/site-services-en";
import { services as servicesDe } from "@/lib/site-services-de";

import { aboutPageContent as aboutPageContentCs, aboutPageMetadata as aboutPageMetadataCs } from "@/lib/about-page";
import { aboutPageContent as aboutPageContentEn, aboutPageMetadata as aboutPageMetadataEn } from "@/lib/about-page-en";
import { aboutPageContent as aboutPageContentDe, aboutPageMetadata as aboutPageMetadataDe } from "@/lib/about-page-de";

import {
  accreditationPageContent as accreditationPageContentCs,
  accreditationPageMetadata as accreditationPageMetadataCs,
  accreditationFacts as accreditationFactsCs,
  customerBenefits as customerBenefitsCs,
  scopeGroups as scopeGroupsCs
} from "@/lib/accreditation-page";
import {
  accreditationPageContent as accreditationPageContentEn,
  accreditationPageMetadata as accreditationPageMetadataEn,
  accreditationFacts as accreditationFactsEn,
  customerBenefits as customerBenefitsEn,
  scopeGroups as scopeGroupsEn
} from "@/lib/accreditation-page-en";
import {
  accreditationPageContent as accreditationPageContentDe,
  accreditationPageMetadata as accreditationPageMetadataDe,
  accreditationFacts as accreditationFactsDe,
  customerBenefits as customerBenefitsDe,
  scopeGroups as scopeGroupsDe
} from "@/lib/accreditation-page-de";

import { privacyPageContent as privacyPageContentCs, privacyPageMetadata as privacyPageMetadataCs } from "@/lib/privacy-page";
import { privacyPageContent as privacyPageContentEn, privacyPageMetadata as privacyPageMetadataEn } from "@/lib/privacy-page-en";
import { privacyPageContent as privacyPageContentDe, privacyPageMetadata as privacyPageMetadataDe } from "@/lib/privacy-page-de";

import { cookiesPageContent as cookiesPageContentCs, cookiesPageMetadata as cookiesPageMetadataCs } from "@/lib/cookies-page";
import { cookiesPageContent as cookiesPageContentEn, cookiesPageMetadata as cookiesPageMetadataEn } from "@/lib/cookies-page-en";
import { cookiesPageContent as cookiesPageContentDe, cookiesPageMetadata as cookiesPageMetadataDe } from "@/lib/cookies-page-de";

import { INQUIRY_CATEGORIES as inquiryCategoriesCs } from "@/lib/contact-inquiry";
import { INQUIRY_CATEGORIES as inquiryCategoriesEn } from "@/lib/contact-inquiry-en";
import { INQUIRY_CATEGORIES as inquiryCategoriesDe } from "@/lib/contact-inquiry-de";

import { CONTACT_SERVICE_LABELS_EN } from "@/lib/contact-services-en";
import { CONTACT_SERVICE_LABELS_EN as CONTACT_SERVICE_LABELS_DE } from "@/lib/contact-services-de";
import type { ContactServiceOption } from "@/lib/contact-services";

import { teamMembers as teamMembersCs } from "@/lib/team";
import { teamMembers as teamMembersEn } from "@/lib/team-en";
import { teamMembers as teamMembersDe } from "@/lib/team-de";

import { guaranteeIntroParagraph as guaranteeIntroCs } from "@/lib/guarantee-copy";
import { guaranteeIntroParagraph as guaranteeIntroEn } from "@/lib/guarantee-copy-en";
import { guaranteeIntroParagraph as guaranteeIntroDe } from "@/lib/guarantee-copy-de";

import * as companyStatsCs from "@/lib/company-stats";
import * as companyStatsEn from "@/lib/company-stats-en";
import * as companyStatsDe from "@/lib/company-stats-de";

import { homeHeroPillars as homeHeroPillarsCs } from "@/lib/home-hero-pillars";
import { homeHeroPillars as homeHeroPillarsEn } from "@/lib/home-hero-pillars-en";
import { homeHeroPillars as homeHeroPillarsDe } from "@/lib/home-hero-pillars-de";

import type { PoradnaTopic } from "@/lib/poradna-topic";
import { PORADNA_TOPICS_EN } from "@/lib/poradna-topic-en";
import { PORADNA_TOPICS_EN as PORADNA_TOPICS_DE } from "@/lib/poradna-topic-de";

const faqByLocale: Record<
  Locale,
  {
    pageTitle: string;
    pageIntro: string;
    introCtas: typeof faqIntroCtasCs;
    categories: typeof faqCategoriesCs;
    flatItems: typeof faqFlatItemsCs;
    metadata: { absoluteTitle: string; description: string };
    uiLabels: typeof faqUiLabelsCs | typeof faqUiLabelsEn | typeof faqUiLabelsDe;
  }
> = {
  cs: {
    pageTitle: faqPageTitleCs,
    pageIntro: faqPageIntroCs,
    introCtas: faqIntroCtasCs,
    categories: faqCategoriesCs,
    flatItems: faqFlatItemsCs,
    metadata: faqPageMetadataCs,
    uiLabels: faqUiLabelsCs
  },
  en: {
    pageTitle: faqPageTitleEn,
    pageIntro: faqPageIntroEn,
    introCtas: faqIntroCtasEn,
    categories: faqCategoriesEn,
    flatItems: faqFlatItemsEn,
    metadata: faqPageMetadataEn,
    uiLabels: faqUiLabelsEn
  },
  de: {
    pageTitle: faqPageTitleDe,
    pageIntro: faqPageIntroDe,
    introCtas: faqIntroCtasDe,
    categories: faqCategoriesDe,
    flatItems: faqFlatItemsDe,
    metadata: faqPageMetadataDe,
    uiLabels: faqUiLabelsDe
  }
};

export function getFaqContent(locale: Locale) {
  return localized(locale, faqByLocale.cs, faqByLocale.en, faqByLocale.de);
}

export function getSectorPages(locale: Locale): Record<string, SectorPageData> {
  return localized(locale, sectorPagesCs, sectorPagesEn, sectorPagesDe);
}

export function getSectorPage(slug: string, locale: Locale): SectorPageData {
  const pages = getSectorPages(locale);
  const page = pages[slug];
  if (!page) throw new Error(`Unknown sector page: ${slug}`);
  return page;
}

export function getSectors(locale: Locale): Sector[] {
  return localized(locale, sectorsCs, sectorsEn, sectorsDe);
}

export function getProvozyNavLabel(locale: Locale): string {
  return localized(locale, provozyNavLabel, provozyNavLabelEn, provozyNavLabelDe);
}

export function getCaseStudyCategories(locale: Locale) {
  return localized(locale, caseStudyCategoriesCs, caseStudyCategoriesEn, caseStudyCategoriesDe);
}

export function getCaseStudyCategory(slug: string, locale: Locale) {
  return localized(
    locale,
    getCaseStudyCategoryCs(slug),
    getCaseStudyCategoryEn(slug),
    getCaseStudyCategoryDe(slug)
  );
}

export function getReferenceExampleGroups(locale: Locale) {
  return localized(
    locale,
    referenceExampleGroupsCs,
    referenceExampleGroupsEn,
    referenceExampleGroupsDe
  );
}

export function getReferenceContent(locale: Locale) {
  return localized(locale, referenceCs, referenceEn, referenceDe);
}

export function getSeoLandings(locale: Locale) {
  return localized(locale, seoLandingsCs, seoLandingsEn, seoLandingsDe);
}

export function getSeoLanding(slug: string, locale: Locale) {
  return getSeoLandings(locale).find((l) => l.slug === slug) ?? null;
}

export function getEquipmentContent(locale: Locale) {
  return localized(locale, equipmentCs, equipmentEn, equipmentDe);
}

export function getAccreditationScope(locale: Locale) {
  return localized(
    locale,
    { accreditedLabScope: accreditedLabScopeCs, authorizations: authorizationsCs },
    { accreditedLabScope: accreditedLabScopeEn, authorizations: authorizationsEn },
    { accreditedLabScope: accreditedLabScopeDe, authorizations: authorizationsDe }
  );
}

export function getAccreditationDocuments(locale: Locale) {
  return localized(
    locale,
    accreditationDocumentsCs,
    accreditationDocumentsEn,
    accreditationDocumentsDe
  );
}

export function getServiceGroups(locale: Locale) {
  return localized(locale, serviceGroupsCs, serviceGroupsEn, serviceGroupsDe);
}

export function getTypickeZakazkyContent(locale: Locale) {
  return localized(locale, typickeZakazkyCs, typickeZakazkyEn, typickeZakazkyDe);
}

export function getTypicalScenarios(locale: Locale) {
  return localized(locale, typicalScenariosCs, typicalScenariosEn, typicalScenariosDe);
}

export function getSiteServices(locale: Locale) {
  return localized(locale, servicesCs, servicesEn, servicesDe);
}

export function getAboutPage(locale: Locale) {
  return localized(
    locale,
    { metadata: aboutPageMetadataCs, content: aboutPageContentCs },
    { metadata: aboutPageMetadataEn, content: aboutPageContentEn },
    { metadata: aboutPageMetadataDe, content: aboutPageContentDe }
  );
}

export function getAccreditationPage(locale: Locale) {
  return localized(
    locale,
    {
      metadata: accreditationPageMetadataCs,
      content: accreditationPageContentCs,
      facts: accreditationFactsCs,
      benefits: customerBenefitsCs,
      scopeGroups: scopeGroupsCs
    },
    {
      metadata: accreditationPageMetadataEn,
      content: accreditationPageContentEn,
      facts: accreditationFactsEn,
      benefits: customerBenefitsEn,
      scopeGroups: scopeGroupsEn
    },
    {
      metadata: accreditationPageMetadataDe,
      content: accreditationPageContentDe,
      facts: accreditationFactsDe,
      benefits: customerBenefitsDe,
      scopeGroups: scopeGroupsDe
    }
  );
}

export function getPrivacyPage(locale: Locale) {
  return localized(
    locale,
    { metadata: privacyPageMetadataCs, content: privacyPageContentCs },
    { metadata: privacyPageMetadataEn, content: privacyPageContentEn },
    { metadata: privacyPageMetadataDe, content: privacyPageContentDe }
  );
}

export function getCookiesPage(locale: Locale) {
  return localized(
    locale,
    { metadata: cookiesPageMetadataCs, content: cookiesPageContentCs },
    { metadata: cookiesPageMetadataEn, content: cookiesPageContentEn },
    { metadata: cookiesPageMetadataDe, content: cookiesPageContentDe }
  );
}

export function getInquiryCategories(locale: Locale) {
  return localized(locale, inquiryCategoriesCs, inquiryCategoriesEn, inquiryCategoriesDe);
}

export function getContactServiceLabel(value: string, locale: Locale): string {
  if (locale === "en") {
    return CONTACT_SERVICE_LABELS_EN[value as ContactServiceOption] ?? value;
  }
  if (locale === "de") {
    return CONTACT_SERVICE_LABELS_DE[value as ContactServiceOption] ?? value;
  }
  return value;
}

export function getTeamMembers(locale: Locale) {
  return localized(locale, teamMembersCs, teamMembersEn, teamMembersDe);
}

export function getGuaranteeIntro(locale: Locale) {
  return localized(locale, guaranteeIntroCs, guaranteeIntroEn, guaranteeIntroDe);
}

export function getCompanyStatsContent(locale: Locale) {
  return localized(locale, companyStatsCs, companyStatsEn, companyStatsDe);
}

export function getHomeHeroPillars(locale: Locale) {
  return localized(locale, homeHeroPillarsCs, homeHeroPillarsEn, homeHeroPillarsDe);
}

export function getPoradnaTopicLabel(topic: PoradnaTopic, locale: Locale): string {
  if (locale === "en") {
    return PORADNA_TOPICS_EN[topic] ?? topic;
  }
  if (locale === "de") {
    return PORADNA_TOPICS_DE[topic] ?? topic;
  }
  return topic;
}
