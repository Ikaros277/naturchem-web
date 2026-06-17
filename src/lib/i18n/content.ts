import type { Locale } from "@/lib/i18n/locales";

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

import { sectorPages as sectorPagesCs, type SectorPageData } from "@/lib/sector-pages";
import { sectorPagesEn } from "@/lib/sector-pages-en";

import { sectors as sectorsCs, provozyNavLabel } from "@/lib/sectors";
import { sectorsEn, provozyNavLabelEn } from "@/lib/sectors-en";
import type { Sector } from "@/lib/sectors";

import {
  caseStudyCategories as caseStudyCategoriesCs,
  getCaseStudyCategory as getCaseStudyCategoryCs
} from "@/lib/case-studies";
import {
  caseStudyCategories as caseStudyCategoriesEn,
  getCaseStudyCategory as getCaseStudyCategoryEn
} from "@/lib/case-studies-en";

import { referenceExampleGroups as referenceExampleGroupsCs } from "@/lib/reference-example-groups";
import { referenceExampleGroupsEn } from "@/lib/reference-example-groups-en";

import * as referenceCs from "@/lib/reference-content";
import * as referenceEn from "@/lib/reference-content-en";

import { seoLandings as seoLandingsCs } from "@/lib/seo-landings";
import { seoLandings as seoLandingsEn } from "@/lib/seo-landings-en";

import * as equipmentCs from "@/lib/equipment-content";
import * as equipmentEn from "@/lib/equipment-content-en";

import { accreditedLabScope as accreditedLabScopeCs, authorizations as authorizationsCs } from "@/lib/accreditation-scope";
import { accreditedLabScope as accreditedLabScopeEn, authorizations as authorizationsEn } from "@/lib/accreditation-scope-en";

import { accreditationDocuments as accreditationDocumentsCs } from "@/lib/accreditation-documents";
import { accreditationDocuments as accreditationDocumentsEn } from "@/lib/accreditation-documents-en";

import { serviceGroups as serviceGroupsCs } from "@/lib/service-groups";
import { serviceGroups as serviceGroupsEn } from "@/lib/service-groups-en";

import * as typickeZakazkyCs from "@/lib/typicke-zakazky-content";
import * as typickeZakazkyEn from "@/lib/typicke-zakazky-content-en";

import { typicalScenarios as typicalScenariosCs } from "@/lib/typical-scenarios";
import { typicalScenarios as typicalScenariosEn } from "@/lib/typical-scenarios-en";

import { services as servicesCs } from "@/lib/site";
import { services as servicesEn } from "@/lib/site-services-en";

import { aboutPageContent as aboutPageContentCs, aboutPageMetadata as aboutPageMetadataCs } from "@/lib/about-page";
import { aboutPageContent as aboutPageContentEn, aboutPageMetadata as aboutPageMetadataEn } from "@/lib/about-page-en";

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

import { privacyPageContent as privacyPageContentCs, privacyPageMetadata as privacyPageMetadataCs } from "@/lib/privacy-page";
import { privacyPageContent as privacyPageContentEn, privacyPageMetadata as privacyPageMetadataEn } from "@/lib/privacy-page-en";

import { cookiesPageContent as cookiesPageContentCs, cookiesPageMetadata as cookiesPageMetadataCs } from "@/lib/cookies-page";
import { cookiesPageContent as cookiesPageContentEn, cookiesPageMetadata as cookiesPageMetadataEn } from "@/lib/cookies-page-en";

import { INQUIRY_CATEGORIES as inquiryCategoriesCs } from "@/lib/contact-inquiry";
import { INQUIRY_CATEGORIES as inquiryCategoriesEn } from "@/lib/contact-inquiry-en";

import { CONTACT_SERVICE_LABELS_EN } from "@/lib/contact-services-en";
import type { ContactServiceOption } from "@/lib/contact-services";

import { teamMembers as teamMembersCs } from "@/lib/team";
import { teamMembers as teamMembersEn } from "@/lib/team-en";

import { guaranteeIntroParagraph as guaranteeIntroCs } from "@/lib/guarantee-copy";
import { guaranteeIntroParagraph as guaranteeIntroEn } from "@/lib/guarantee-copy-en";

import * as companyStatsCs from "@/lib/company-stats";
import * as companyStatsEn from "@/lib/company-stats-en";

import { homeHeroPillars as homeHeroPillarsCs } from "@/lib/home-hero-pillars";
import { homeHeroPillars as homeHeroPillarsEn } from "@/lib/home-hero-pillars-en";

import type { PoradnaTopic } from "@/lib/poradna-topic";
import { PORADNA_TOPICS_EN } from "@/lib/poradna-topic-en";

export function getFaqContent(locale: Locale) {
  if (locale === "en") {
    return {
      pageTitle: faqPageTitleEn,
      pageIntro: faqPageIntroEn,
      introCtas: faqIntroCtasEn,
      categories: faqCategoriesEn,
      flatItems: faqFlatItemsEn,
      metadata: faqPageMetadataEn,
      uiLabels: faqUiLabelsEn
    };
  }
  return {
    pageTitle: faqPageTitleCs,
    pageIntro: faqPageIntroCs,
    introCtas: faqIntroCtasCs,
    categories: faqCategoriesCs,
    flatItems: faqFlatItemsCs,
    metadata: faqPageMetadataCs,
    uiLabels: faqUiLabelsCs
  };
}

export function getSectorPages(locale: Locale): Record<string, SectorPageData> {
  return locale === "en" ? sectorPagesEn : sectorPagesCs;
}

export function getSectorPage(slug: string, locale: Locale): SectorPageData {
  const pages = getSectorPages(locale);
  const page = pages[slug];
  if (!page) throw new Error(`Unknown sector page: ${slug}`);
  return page;
}

export function getSectors(locale: Locale): Sector[] {
  return locale === "en" ? sectorsEn : sectorsCs;
}

export function getProvozyNavLabel(locale: Locale): string {
  return locale === "en" ? provozyNavLabelEn : provozyNavLabel;
}

export function getCaseStudyCategories(locale: Locale) {
  return locale === "en" ? caseStudyCategoriesEn : caseStudyCategoriesCs;
}

export function getCaseStudyCategory(slug: string, locale: Locale) {
  return locale === "en" ? getCaseStudyCategoryEn(slug) : getCaseStudyCategoryCs(slug);
}

export function getReferenceExampleGroups(locale: Locale) {
  return locale === "en" ? referenceExampleGroupsEn : referenceExampleGroupsCs;
}

export function getReferenceContent(locale: Locale) {
  return locale === "en" ? referenceEn : referenceCs;
}

export function getSeoLandings(locale: Locale) {
  return locale === "en" ? seoLandingsEn : seoLandingsCs;
}

export function getSeoLanding(slug: string, locale: Locale) {
  return getSeoLandings(locale).find((l) => l.slug === slug) ?? null;
}

export function getEquipmentContent(locale: Locale) {
  return locale === "en" ? equipmentEn : equipmentCs;
}

export function getAccreditationScope(locale: Locale) {
  return locale === "en"
    ? { accreditedLabScope: accreditedLabScopeEn, authorizations: authorizationsEn }
    : { accreditedLabScope: accreditedLabScopeCs, authorizations: authorizationsCs };
}

export function getAccreditationDocuments(locale: Locale) {
  return locale === "en" ? accreditationDocumentsEn : accreditationDocumentsCs;
}

export function getServiceGroups(locale: Locale) {
  return locale === "en" ? serviceGroupsEn : serviceGroupsCs;
}

export function getTypickeZakazkyContent(locale: Locale) {
  return locale === "en" ? typickeZakazkyEn : typickeZakazkyCs;
}

export function getTypicalScenarios(locale: Locale) {
  return locale === "en" ? typicalScenariosEn : typicalScenariosCs;
}

export function getSiteServices(locale: Locale) {
  return locale === "en" ? servicesEn : servicesCs;
}

export function getAboutPage(locale: Locale) {
  return locale === "en"
    ? { metadata: aboutPageMetadataEn, content: aboutPageContentEn }
    : { metadata: aboutPageMetadataCs, content: aboutPageContentCs };
}

export function getAccreditationPage(locale: Locale) {
  if (locale === "en") {
    return {
      metadata: accreditationPageMetadataEn,
      content: accreditationPageContentEn,
      facts: accreditationFactsEn,
      benefits: customerBenefitsEn,
      scopeGroups: scopeGroupsEn
    };
  }
  return {
    metadata: accreditationPageMetadataCs,
    content: accreditationPageContentCs,
    facts: accreditationFactsCs,
    benefits: customerBenefitsCs,
    scopeGroups: scopeGroupsCs
  };
}

export function getPrivacyPage(locale: Locale) {
  return locale === "en"
    ? { metadata: privacyPageMetadataEn, content: privacyPageContentEn }
    : { metadata: privacyPageMetadataCs, content: privacyPageContentCs };
}

export function getCookiesPage(locale: Locale) {
  return locale === "en"
    ? { metadata: cookiesPageMetadataEn, content: cookiesPageContentEn }
    : { metadata: cookiesPageMetadataCs, content: cookiesPageContentCs };
}

export function getInquiryCategories(locale: Locale) {
  return locale === "en" ? inquiryCategoriesEn : inquiryCategoriesCs;
}

export function getContactServiceLabel(value: string, locale: Locale): string {
  if (locale === "en") {
    return CONTACT_SERVICE_LABELS_EN[value as ContactServiceOption] ?? value;
  }
  return value;
}

export function getTeamMembers(locale: Locale) {
  return locale === "en" ? teamMembersEn : teamMembersCs;
}

export function getGuaranteeIntro(locale: Locale) {
  return locale === "en" ? guaranteeIntroEn : guaranteeIntroCs;
}

export function getCompanyStatsContent(locale: Locale) {
  return locale === "en" ? companyStatsEn : companyStatsCs;
}

export function getHomeHeroPillars(locale: Locale) {
  return locale === "en" ? homeHeroPillarsEn : homeHeroPillarsCs;
}

export function getPoradnaTopicLabel(topic: PoradnaTopic, locale: Locale): string {
  if (locale === "en") {
    return PORADNA_TOPICS_EN[topic] ?? topic;
  }
  return topic;
}
