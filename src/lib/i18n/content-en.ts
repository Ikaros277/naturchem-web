import {
  faqCategories,
  faqFlatItemsEn,
  faqIntroCtas,
  faqPageIntro,
  faqPageMetadata,
  faqPageTitle,
  faqUiLabels
} from "@/lib/faq-en";
import { sectorPagesEn } from "@/lib/sector-pages-en";
import type { SectorPageData } from "@/lib/sector-pages";
import { sectorsEn, provozyNavLabelEn } from "@/lib/sectors-en";
import {
  caseStudyCategories,
  caseStudies,
  getCaseStudyCategory
} from "@/lib/case-studies-en";
import { referenceExampleGroupsEn } from "@/lib/reference-example-groups-en";
import * as referenceContent from "@/lib/reference-content-en";
import { seoLandings } from "@/lib/seo-landings-en";
import * as equipmentContent from "@/lib/equipment-content-en";
import { accreditedLabScope, authorizations } from "@/lib/accreditation-scope-en";
import { accreditationDocuments } from "@/lib/accreditation-documents-en";
import { serviceGroups } from "@/lib/service-groups-en";
import * as typickeZakazkyContent from "@/lib/typicke-zakazky-content-en";
import { typicalScenarios } from "@/lib/typical-scenarios-en";
import { services } from "@/lib/site-services-en";
import { aboutPageContent, aboutPageMetadata } from "@/lib/about-page-en";
import {
  accreditationPageContent,
  accreditationPageMetadata,
  accreditationFacts,
  customerBenefits,
  scopeGroups
} from "@/lib/accreditation-page-en";
import { privacyPageContent, privacyPageMetadata } from "@/lib/privacy-page-en";
import { cookiesPageContent, cookiesPageMetadata } from "@/lib/cookies-page-en";
import { CONTACT_SERVICE_LABELS_EN } from "@/lib/contact-services-en";
import { teamMembers } from "@/lib/team-en";
import { guaranteeIntroParagraph } from "@/lib/guarantee-copy-en";
import { homeHeroPillars } from "@/lib/home-hero-pillars-en";
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
