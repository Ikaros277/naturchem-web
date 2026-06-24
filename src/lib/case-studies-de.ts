import { caseStudiesCs } from "@/data/case-studies-cs";
import {
  CASE_STUDY_CATEGORIES_DE,
  CASE_STUDY_CATEGORY_LABELS_DE
} from "@/data/case-study-category-i18n";
import { caseStudyTextDe } from "@/data/case-studies-text-de";
import {
  buildCaseStudyCategories,
  CATEGORY_META_DE,
  getCaseStudyCategoryFromList,
  getCaseStudyFromList,
  localizeCaseStudies
} from "@/lib/case-studies-locale";

export const caseStudies = localizeCaseStudies(
  caseStudiesCs,
  caseStudyTextDe,
  CASE_STUDY_CATEGORY_LABELS_DE
);

export const caseStudyCategories = buildCaseStudyCategories(caseStudies, CATEGORY_META_DE);

export const CASE_STUDY_CATEGORIES = CASE_STUDY_CATEGORIES_DE;

export function getCaseStudy(id: string) {
  return getCaseStudyFromList(caseStudies, id);
}

export function getCaseStudyCategory(slug: string) {
  return getCaseStudyCategoryFromList(caseStudies, CATEGORY_META_DE, slug);
}

export function getCaseStudiesBySectorId(sectorId: string) {
  return caseStudies.filter((study) => study.sectorId === sectorId);
}

export {
  CASE_STUDY_OUTPUT_TYPES,
  CASE_STUDY_FACILITY_TYPES
} from "./case-studies";

export type {
  CaseStudy,
  CaseStudyCategory,
  CaseStudyOutputTypeId,
  CaseStudyFacilityTypeId
} from "./case-studies";
