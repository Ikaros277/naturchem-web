import {
  faqCategories,
  faqFlatItems,
  faqIntroCtas,
  faqPageIntro,
  faqPageMetadata,
  faqPageTitle,
  faqUiLabels
} from "@/lib/faq";
import { sectorPages } from "@/lib/sector-pages";
import { sectors, provozyNavLabel } from "@/lib/sectors";
import {
  caseStudyCategories,
  caseStudies,
  getCaseStudyCategory
} from "@/lib/case-studies";
import { referenceExampleGroups } from "@/lib/reference-example-groups";
import * as referenceContent from "@/lib/reference-content";
import { seoLandings } from "@/lib/seo-landings";
import * as equipmentContent from "@/lib/equipment-content";
import { accreditedLabScope, authorizations } from "@/lib/accreditation-scope";
import { accreditationDocuments } from "@/lib/accreditation-documents";
import { serviceGroups } from "@/lib/service-groups";
import * as typickeZakazkyContent from "@/lib/typicke-zakazky-content";
import { typicalScenarios } from "@/lib/typical-scenarios";
import { services } from "@/lib/site";
import { aboutPageContent, aboutPageMetadata } from "@/lib/about-page";
import {
  accreditationPageContent,
  accreditationPageMetadata,
  accreditationFacts,
  customerBenefits,
  scopeGroups
} from "@/lib/accreditation-page";
import { privacyPageContent, privacyPageMetadata } from "@/lib/privacy-page";
import { cookiesPageContent, cookiesPageMetadata } from "@/lib/cookies-page";
import { teamMembers } from "@/lib/team";
import { guaranteeIntroParagraph } from "@/lib/guarantee-copy";
import { homeHeroPillars } from "@/lib/home-hero-pillars";

export const localeContent = {
  faq: {
    pageTitle: faqPageTitle,
    pageIntro: faqPageIntro,
    introCtas: faqIntroCtas,
    categories: faqCategories,
    flatItems: faqFlatItems,
    metadata: faqPageMetadata,
    uiLabels: faqUiLabels
  },
  sectorPages,
  sectors,
  provozyNavLabel,
  caseStudyCategories,
  caseStudies,
  getCaseStudyCategory,
  referenceExampleGroups,
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
  contactServiceLabels: null
};

export type LocaleContent = typeof localeContent;
