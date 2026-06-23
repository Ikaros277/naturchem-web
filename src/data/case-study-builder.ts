export const CASE_STUDY_CATEGORIES = [
  { id: "mereni-emisi", label: "Měření emisí" },
  { id: "pracovni-prostredi", label: "Pracovní prostředí" },
  { id: "hluk-vibrace", label: "Hluk a vibrace" },
  { id: "rozptylove-studie", label: "Rozptylové studie" },
  { id: "hlukove-studie", label: "Hlukové studie" },
  { id: "eia-jes", label: "EIA/JES" },
  { id: "odborne-posudky", label: "Odborné posudky" },
  { id: "provozni-rady", label: "Provozní řády" },
  { id: "ispop-evidence", label: "ISPOP a evidence" },
  { id: "specificke-technologie", label: "Specifické technologie" }
] as const;

export type CaseStudyCategoryId = (typeof CASE_STUDY_CATEGORIES)[number]["id"];

export const CASE_STUDY_CATEGORY_LABELS: Record<CaseStudyCategoryId, string> = {
  "mereni-emisi": "Měření emisí",
  "pracovni-prostredi": "Pracovní prostředí",
  "hluk-vibrace": "Hluk a vibrace",
  "rozptylove-studie": "Rozptylové studie",
  "hlukove-studie": "Hlukové studie",
  "eia-jes": "EIA/JES",
  "odborne-posudky": "Odborné posudky",
  "provozni-rady": "Provozní řády",
  "ispop-evidence": "ISPOP a evidence",
  "specificke-technologie": "Specifické technologie"
};

const SERVICE_HREF_RULES: ReadonlyArray<{ pattern: RegExp; href: string }> = [
  { pattern: /měřen[ií]\s+emis/i, href: "/sluzby/mereni-emisi" },
  { pattern: /ispop|souhrnn[aá]\s+provozn[ií]\s+evidence|emisn[ií]\s+bilance/i, href: "/sluzby/ispop" },
  { pattern: /provozn[ií]\s+ř[aá]d/i, href: "/sluzby/provozni-rady" },
  { pattern: /odborn[yý]\s+posudek|odborn[eé]\s+posouzen|odborn[eé]\s+stanovisko/i, href: "/sluzby/odborne-posudky" },
  { pattern: /pracovn[ií]\s+prostřed/i, href: "/sluzby/pracovni-prostredi" },
  { pattern: /kategorizac/i, href: "/sluzby/pracovni-prostredi" },
  { pattern: /mikroklima/i, href: "/sluzby/mereni-mikroklimatu" },
  { pattern: /měřen[ií]\s+osvětlen|osvětlen/i, href: "/sluzby/mereni-osvetleni" },
  { pattern: /měřen[ií]\s+hluku|hlukov[aá]\s+studie/i, href: "/sluzby/hlukove-studie" },
  { pattern: /hluk/i, href: "/sluzby/mereni-hluku" },
  { pattern: /měřen[ií]\s+vibrac/i, href: "/sluzby/mereni-vibraci" },
  { pattern: /rozptylov[aá]\s+studie/i, href: "/sluzby/rozptylove-studie" },
  { pattern: /\beia\b|jes|oznámen[ií]\s+záměru|zjistovac[ií]/i, href: "/sluzby/eia-oznameni-zameru" },
  { pattern: /chemick[eé]\s+l[aá]tky/i, href: "/sluzby/chemicke-latky" },
  { pattern: /bezpečnostn[ií]\s+list/i, href: "/sluzby/bezpecnostni-listy" },
  { pattern: /povolen[ií]\s+provozu|změna\s+povolen/i, href: "/sluzby/povoleni-provozu" },
  { pattern: /\bghg\b|cnr|skleníkov/i, href: "/sluzby/ghg-overovani" },
  { pattern: /imisn/i, href: "/sluzby/imisni-dopady" },
  { pattern: /modelov/i, href: "/sluzby/modelove-vypocty" },
  { pattern: /akustick/i, href: "/sluzby/akusticke-posudky" },
  { pattern: /voc|toc/i, href: "/sluzby/mereni-emisi" },
  { pattern: /zápach/i, href: "/sluzby/odborne-posudky" },
  { pattern: /analýz/i, href: "/sluzby/chemicke-latky" }
];

export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  categoryId: CaseStudyCategoryId;
  facilityType: string;
  shortDescription: string;
  situation: string;
  task: string;
  naturchemApproach: string;
  output: string;
  usedFor: string;
  relatedServices: readonly string[];
  serviceHrefs: readonly string[];
  authorities: string;
  tags: readonly string[];
  ctaText: string;
  sectorId?: string;
  perex: string;
  challenge: string;
  approach: string;
  cta: string;
  outputTypeId: CaseStudyCategoryId;
  facilityTypeId?: string;
};

export type CaseStudyInput = {
  id: string;
  title: string;
  categoryId: CaseStudyCategoryId;
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
  sectorId?: string;
  serviceHrefs?: readonly string[];
};

export function resolveServiceHrefs(relatedServices: readonly string[]): string[] {
  const blob = relatedServices.join(" ");
  const hrefs = new Set<string>();

  for (const rule of SERVICE_HREF_RULES) {
    if (rule.pattern.test(blob)) hrefs.add(rule.href);
  }

  return [...hrefs];
}

export function buildCaseStudy(input: CaseStudyInput): CaseStudy {
  const category = CASE_STUDY_CATEGORY_LABELS[input.categoryId];
  const serviceHrefs = input.serviceHrefs?.length
    ? [...input.serviceHrefs]
    : resolveServiceHrefs(input.relatedServices);

  return {
    id: input.id,
    title: input.title,
    category,
    categoryId: input.categoryId,
    facilityType: input.facilityType,
    shortDescription: input.shortDescription,
    situation: input.situation,
    task: input.task,
    naturchemApproach: input.naturchemApproach,
    output: input.output,
    usedFor: input.usedFor,
    relatedServices: [...input.relatedServices],
    serviceHrefs,
    authorities: input.authorities,
    tags: [...input.tags],
    ctaText: input.ctaText,
    sectorId: input.sectorId,
    perex: input.shortDescription,
    challenge: input.task,
    approach: input.naturchemApproach,
    cta: input.ctaText,
    outputTypeId: input.categoryId
  };
}
