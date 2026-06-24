import type { CaseStudy, CaseStudyCategoryId } from "@/data/case-study-builder";
import type { CaseStudyCategory } from "@/lib/case-studies";

export type CaseStudyTextOverlay = {
  title: string;
  facilityType: string;
  shortDescription: string;
  situation: string;
  task: string;
  naturchemApproach: string;
  output: string;
  usedFor: string;
  relatedServices: readonly string[];
  authorities: string;
  tags: readonly string[];
  ctaText: string;
};

type CategoryMeta = { title: string; short: string; serviceHref: string };

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

export function localizeCaseStudies(
  base: readonly CaseStudy[],
  text: Record<string, CaseStudyTextOverlay>,
  categoryLabels: Record<CaseStudyCategoryId, string>
): CaseStudy[] {
  return base.map((study) => {
    const overlay = text[study.id];
    const category = categoryLabels[study.categoryId];
    if (!overlay) {
      return { ...study, category };
    }
    return {
      ...study,
      ...overlay,
      category,
      relatedServices: [...overlay.relatedServices],
      tags: [...overlay.tags],
      serviceHrefs: study.serviceHrefs,
      perex: overlay.shortDescription,
      challenge: overlay.task,
      approach: overlay.naturchemApproach,
      cta: overlay.ctaText
    };
  });
}

function studiesForCategorySlug(caseStudies: CaseStudy[], slug: string): CaseStudy[] {
  const mapping = CATEGORY_SLUG_MAP[slug];
  if (!mapping) return [];
  const ids = Array.isArray(mapping) ? mapping : [mapping];
  return caseStudies.filter((study) => ids.includes(study.categoryId));
}

export function buildCaseStudyCategories(
  caseStudies: CaseStudy[],
  categoryMeta: Record<string, CategoryMeta>
): CaseStudyCategory[] {
  return Object.keys(categoryMeta).map((slug) => {
    const meta = categoryMeta[slug]!;
    const studies = studiesForCategorySlug(caseStudies, slug);
    return {
      slug,
      ...meta,
      cases: studies.map((study) => ({
        title: study.title,
        narrative: `${study.situation} ${study.task} ${study.naturchemApproach}`.trim(),
        output: study.output
      }))
    };
  });
}

export function getCaseStudyFromList(caseStudies: CaseStudy[], id: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.id === id);
}

export function getCaseStudyCategoryFromList(
  caseStudies: CaseStudy[],
  categoryMeta: Record<string, CategoryMeta>,
  slug: string
): CaseStudyCategory | undefined {
  return buildCaseStudyCategories(caseStudies, categoryMeta).find((category) => category.slug === slug);
}

export const CATEGORY_META_EN: Record<string, CategoryMeta> = {
  "mereni-emisi": {
    title: "Emission measurements",
    short: "Stationary sources, boiler plants, technologies.",
    serviceHref: "/sluzby/mereni-emisi"
  },
  "hygienicka-mereni": {
    title: "Hygiene measurements",
    short: "Workplace environment, job categorisation.",
    serviceHref: "/sluzby/pracovni-prostredi"
  },
  "rozptylove-studie": {
    title: "Dispersion studies",
    short: "Immissions, operating variants.",
    serviceHref: "/sluzby/rozptylove-studie"
  },
  "hlukove-studie": {
    title: "Noise studies",
    short: "Site surveys, noise studies, transport.",
    serviceHref: "/sluzby/hlukove-studie"
  },
  "odborne-posudky": {
    title: "Expert assessments",
    short: "Statements for authorities.",
    serviceHref: "/sluzby/odborne-posudky"
  },
  eia: {
    title: "EIA",
    short: "Screening procedures, study coordination.",
    serviceHref: "/sluzby/eia-oznameni-zameru"
  },
  "skoleni-chemicke-legislativy": {
    title: "Chemical legislation training",
    short: "Chemicals, safety data sheets, operating rules.",
    serviceHref: "/sluzby/skoleni-chemicke-legislativy"
  },
  dalsi: {
    title: "Other projects",
    short: "IPPC, operating manuals, ISPOP.",
    serviceHref: "/sluzby/ippc-integrovana-povoleni"
  }
};

export const CATEGORY_META_DE: Record<string, CategoryMeta> = {
  "mereni-emisi": {
    title: "Emissionsmessungen",
    short: "Stationäre Quellen, Kesselanlagen, Technologien.",
    serviceHref: "/sluzby/mereni-emisi"
  },
  "hygienicka-mereni": {
    title: "Hygienische Messungen",
    short: "Arbeitsumfeld, Einstufung der Arbeiten.",
    serviceHref: "/sluzby/pracovni-prostredi"
  },
  "rozptylove-studie": {
    title: "Ausbreitungsstudien",
    short: "Immissionen, Betriebsvarianten.",
    serviceHref: "/sluzby/rozptylove-studie"
  },
  "hlukove-studie": {
    title: "Lärmstudien",
    short: "Gelände, Lärmstudien, Verkehr.",
    serviceHref: "/sluzby/hlukove-studie"
  },
  "odborne-posudky": {
    title: "Fachgutachten",
    short: "Stellungnahmen für Behörden.",
    serviceHref: "/sluzby/odborne-posudky"
  },
  eia: {
    title: "UVP",
    short: "Vorprüfung, Koordination von Studien.",
    serviceHref: "/sluzby/eia-oznameni-zameru"
  },
  "skoleni-chemicke-legislativy": {
    title: "Schulung Chemikalienrecht",
    short: "Chemikalien, Sicherheitsdatenblätter, Betriebsregeln.",
    serviceHref: "/sluzby/skoleni-chemicke-legislativy"
  },
  dalsi: {
    title: "Weitere Aufträge",
    short: "IPPC, Betriebsanleitungen, ISPOP.",
    serviceHref: "/sluzby/ippc-integrovana-povoleni"
  }
};
