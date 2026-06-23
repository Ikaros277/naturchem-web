import type { CaseStudyCategoryId } from "@/data/case-study-builder";
import type { HeroTheme } from "@/lib/hero-images";
import { sectorHeroTheme } from "@/lib/sector-group-visuals";

const categoryHeroThemes: Record<CaseStudyCategoryId, HeroTheme> = {
  "mereni-emisi": "mereni-emisi",
  "pracovni-prostredi": "pracovni-prostredi",
  "hluk-vibrace": "mereni-hluku",
  "rozptylove-studie": "rozptylove-studie",
  "hlukove-studie": "hlukove-studie",
  "eia-jes": "eia",
  "odborne-posudky": "odborne-posudky",
  "provozni-rady": "provozni-rady",
  "ispop-evidence": "ispop",
  "specificke-technologie": "provozy-a-technologie"
};

type CaseStudyVisualInput = {
  sectorId?: string;
  categoryId: CaseStudyCategoryId;
};

/** Hero fotka pro dlaždici případové studie — provoz má přednost před kategorií služby. */
export function caseStudyHeroTheme(study: CaseStudyVisualInput): HeroTheme {
  if (study.sectorId) return sectorHeroTheme(study.sectorId);
  return categoryHeroThemes[study.categoryId] ?? "typicke-zakazky";
}
