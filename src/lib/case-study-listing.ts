import type { CaseStudy, CaseStudyCategoryId } from "@/lib/case-studies";

/** Lehká dlaždice pro hub — bez dlouhých polí modalu. */
export type CaseStudyListing = {
  id: string;
  title: string;
  category: string;
  categoryId: CaseStudyCategoryId;
  facilityType: string;
  shortDescription: string;
  relatedServices: readonly string[];
  sectorId?: string;
};

export function toCaseStudyListing(study: CaseStudy): CaseStudyListing {
  return {
    id: study.id,
    title: study.title,
    category: study.category,
    categoryId: study.categoryId,
    facilityType: study.facilityType,
    shortDescription: study.shortDescription,
    relatedServices: study.relatedServices.slice(0, 3),
    sectorId: study.sectorId
  };
}
