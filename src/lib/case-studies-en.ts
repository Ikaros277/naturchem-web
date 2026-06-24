import { caseStudiesCs } from "@/data/case-studies-cs";
import {
  CASE_STUDY_CATEGORIES_EN,
  CASE_STUDY_CATEGORY_LABELS_EN
} from "@/data/case-study-category-i18n";
import { caseStudyTextEn } from "@/data/case-studies-text-en";
import {
  buildCaseStudyCategories,
  CATEGORY_META_EN,
  getCaseStudyCategoryFromList,
  getCaseStudyFromList,
  localizeCaseStudies
} from "@/lib/case-studies-locale";

export const caseStudies = localizeCaseStudies(
  caseStudiesCs,
  caseStudyTextEn,
  CASE_STUDY_CATEGORY_LABELS_EN
);

export const caseStudyCategories = buildCaseStudyCategories(caseStudies, CATEGORY_META_EN);

export const CASE_STUDY_CATEGORIES = CASE_STUDY_CATEGORIES_EN;

export function getCaseStudy(id: string) {
  return getCaseStudyFromList(caseStudies, id);
}

export function getCaseStudyCategory(slug: string) {
  return getCaseStudyCategoryFromList(caseStudies, CATEGORY_META_EN, slug);
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
