import { caseStudiesCs } from "@/data/case-studies-cs";
import {
  CASE_STUDY_CATEGORIES,
  CASE_STUDY_CATEGORY_LABELS,
  type CaseStudy,
  type CaseStudyCategoryId
} from "@/data/case-study-builder";

export type { CaseStudy, CaseStudyCategoryId };
export { CASE_STUDY_CATEGORIES };

/** @deprecated Use CASE_STUDY_CATEGORIES */
export const CASE_STUDY_OUTPUT_TYPES = CASE_STUDY_CATEGORIES;

/** @deprecated Facility filter removed from hub — kept for type compatibility */
export const CASE_STUDY_FACILITY_TYPES = [] as const;

/** @deprecated Use CaseStudyCategoryId */
export type CaseStudyOutputTypeId = CaseStudyCategoryId;
export type CaseStudyFacilityTypeId = string;

/** @deprecated Legacy shape for category pages — derived from caseStudies. */
export type LegacyCaseStudy = {
  title: string;
  narrative: string;
  output: string;
};

export type CaseStudyCategory = {
  slug: string;
  title: string;
  short: string;
  serviceHref: string;
  cases: LegacyCaseStudy[];
};

export const caseStudies: CaseStudy[] = caseStudiesCs;

const CATEGORY_SLUG_MAP: Record<string, CaseStudyCategoryId | CaseStudyCategoryId[]> = {
  "mereni-emisi": "mereni-emisi",
  "hygienicka-mereni": "pracovni-prostredi",
  "rozptylove-studie": "rozptylove-studie",
  "hlukove-studie": ["hlukove-studie", "hluk-vibrace"],
  "odborne-posudky": "odborne-posudky",
  eia: "eia-jes",
  "skoleni-chemicke-legislativy": "pracovni-prostredi",
  dalsi: ["provozni-rady", "ispop-evidence", "odborne-posudky", "specificke-technologie"]
};

const CATEGORY_META: Record<string, { title: string; short: string; serviceHref: string }> = {
  "mereni-emisi": {
    title: "Měření emisí",
    short: "Stacionární zdroje, kotelny, technologie.",
    serviceHref: "/sluzby/mereni-emisi"
  },
  "hygienicka-mereni": {
    title: "Hygienická měření",
    short: "Pracovní prostředí, kategorizace prací.",
    serviceHref: "/sluzby/pracovni-prostredi"
  },
  "rozptylove-studie": {
    title: "Rozptylové studie",
    short: "Imise, varianty provozu.",
    serviceHref: "/sluzby/rozptylove-studie"
  },
  "hlukove-studie": {
    title: "Hlukové studie",
    short: "Terén, hlukové studie, doprava.",
    serviceHref: "/sluzby/hlukove-studie"
  },
  "odborne-posudky": {
    title: "Odborné posudky",
    short: "Vyjádření pro úřady.",
    serviceHref: "/sluzby/odborne-posudky"
  },
  eia: {
    title: "EIA",
    short: "Zjišťovací řízení, koordinace studií.",
    serviceHref: "/sluzby/eia-oznameni-zameru"
  },
  "skoleni-chemicke-legislativy": {
    title: "Školení chemické legislativy",
    short: "Chemické látky, bezpečnostní listy, provozní pravidla.",
    serviceHref: "/sluzby/skoleni-chemicke-legislativy"
  },
  dalsi: {
    title: "Další zakázky",
    short: "IPPC, provozní řády, ISPOP.",
    serviceHref: "/sluzby/ippc-integrovana-povoleni"
  }
};

function toLegacyCase(study: CaseStudy): LegacyCaseStudy {
  return {
    title: study.title,
    narrative: `${study.situation} ${study.task} ${study.naturchemApproach}`.trim(),
    output: study.output
  };
}

function studiesForCategorySlug(slug: string): CaseStudy[] {
  const mapping = CATEGORY_SLUG_MAP[slug];
  if (!mapping) return [];
  const ids = Array.isArray(mapping) ? mapping : [mapping];
  return caseStudies.filter((study) => ids.includes(study.categoryId));
}

export const caseStudyCategories: CaseStudyCategory[] = Object.keys(CATEGORY_META).map((slug) => {
  const meta = CATEGORY_META[slug]!;
  const studies = studiesForCategorySlug(slug);
  return {
    slug,
    ...meta,
    cases: studies.map(toLegacyCase)
  };
});

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.id === id);
}

export function getCaseStudyCategory(slug: string): CaseStudyCategory | undefined {
  return caseStudyCategories.find((category) => category.slug === slug);
}

export function getCaseStudiesBySectorId(sectorId: string): CaseStudy[] {
  return caseStudies.filter((study) => study.sectorId === sectorId);
}

export function getCategoryLabel(categoryId: CaseStudyCategoryId): string {
  return CASE_STUDY_CATEGORY_LABELS[categoryId];
}

export function caseStudySearchBlob(study: CaseStudy): string {
  return [
    study.title,
    study.category,
    study.facilityType,
    study.shortDescription,
    study.situation,
    study.task,
    study.tags.join(" "),
    study.relatedServices.join(" "),
    study.authorities
  ]
    .join(" ")
    .toLowerCase();
}
