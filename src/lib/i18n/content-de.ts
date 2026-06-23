import {
  faqCategories,
  faqFlatItemsEn,
  faqIntroCtas,
  faqPageIntro,
  faqPageMetadata,
  faqPageTitle,
  faqUiLabels
} from "@/lib/faq-de";
import { sectorPagesEn } from "@/lib/sector-pages-de";
import type { SectorPageData } from "@/lib/sector-pages";
import { sectorsEn, provozyNavLabelEn } from "@/lib/sectors-de";
import {
  caseStudyCategories,
  caseStudies,
  getCaseStudyCategory
} from "@/lib/case-studies-de";
import { referenceExampleGroupsEn } from "@/lib/reference-example-groups-de";
import * as referenceContent from "@/lib/reference-content-de";
import { seoLandings } from "@/lib/seo-landings-de";
import * as equipmentContent from "@/lib/equipment-content-de";
import { accreditedLabScope, authorizations } from "@/lib/accreditation-scope-de";
import { accreditationDocuments } from "@/lib/accreditation-documents-de";
import { serviceGroups } from "@/lib/service-groups-de";
import * as typickeZakazkyContent from "@/lib/typicke-zakazky-content-de";
import { typicalScenarios } from "@/lib/typical-scenarios-de";
import { services } from "@/lib/site-services-de";
import { aboutPageContent, aboutPageMetadata } from "@/lib/about-page-de";
import {
  accreditationPageContent,
  accreditationPageMetadata,
  accreditationFacts,
  customerBenefits,
  scopeGroups
} from "@/lib/accreditation-page-de";
import { privacyPageContent, privacyPageMetadata } from "@/lib/privacy-page-de";
import { cookiesPageContent, cookiesPageMetadata } from "@/lib/cookies-page-de";
import { CONTACT_SERVICE_LABELS_EN } from "@/lib/contact-services-de";
import { teamMembers } from "@/lib/team-de";
import { guaranteeIntroParagraph } from "@/lib/guarantee-copy-de";
import { homeHeroPillars } from "@/lib/home-hero-pillars-de";
import type { LocaleContent } from "@/lib/i18n/content-cs";

export const localeContent = {
  faq: {
    pageTitle: faqPageTitle,
    pageIntro: faqPageIntro,
    introCtas: faqIntroCtas,
    categories: faqCategories,
    flatItems: faqFlatItemsEn,
    metadata: faqPageMetadata,
    uiLabels: faqUiLabels
  },
  sectorPages: sectorPagesEn as Record<string, SectorPageData>,
  sectors: sectorsEn,
  provozyNavLabel: provozyNavLabelEn,
  caseStudyCategories,
  caseStudies,
  getCaseStudyCategory,
  referenceExampleGroups: referenceExampleGroupsEn,
  referenceContent,
  seoLandings,
  equipmentContent,
  accreditationScope: { accreditedLabScope, authorizations },
  accreditationDocuments,
  serviceGroups,
  typickeZakazkyContent,
  typicalScenarios,
  siteServices: services,
  aboutPage: { metadata: aboutPageMetadata, content: aboutPageContent },
  accreditationPage: {
    metadata: accreditationPageMetadata,
    content: accreditationPageContent,
    facts: accreditationFacts,
    benefits: customerBenefits,
    scopeGroups
  },
  privacyPage: { metadata: privacyPageMetadata, content: privacyPageContent },
  cookiesPage: { metadata: cookiesPageMetadata, content: cookiesPageContent },
  teamMembers,
  guaranteeIntro: guaranteeIntroParagraph,
  homeHeroPillars,
  contactServiceLabels: CONTACT_SERVICE_LABELS_EN
} as unknown as LocaleContent;
