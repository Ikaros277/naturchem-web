import type { HeroImageConfig } from "@/lib/hero-images";
import { getHeroImageConfig } from "@/lib/hero-images";
import { caseStudyHeroTheme } from "@/lib/case-study-visuals";
import { sectorHeroTheme } from "@/lib/sector-group-visuals";
import type { CaseStudyCategoryId } from "@/data/case-study-builder";

/** Provozy s vlastní fotkou z terénu (soubor v /public/hero/provozy/{id}.jpg). */
export const sectorPhotoIds = new Set([
  "automotive",
  "bioplyn-biometan",
  "cisteni-spalin",
  "cov-kaly",
  "drevozpracujici",
  "galvanovny",
  "kotelny",
  "krematoria",
  "kompostarny",
  "laboratore",
  "lakovny",
  "lesnictvi-doprava",
  "sklarstvi",
  "susarny-kalu",
  "susarny-zemedelstvi",
  "svarovny",
  "teplarny",
  "tiskarny-textilie",
  "verejne-budovy"
]);

/** Typické zakázky s vlastní fotkou (soubor v /public/hero/case-studies/{id}.jpg). */
export const caseStudyPhotoIds = new Set([
  "hlukova-studie-vzt",
  "mereni-emisi-filtr-aktivni-uhli",
  "mereni-emisi-kotel-biomasa",
  "mereni-emisi-novy-kotel",
  "mereni-emisi-plynova-kotelna-verejna-budova",
  "mereni-emisi-plynovy-horak",
  "mereni-emisi-pradelna",
  "mereni-emisi-tryskani",
  "mereni-emisi-voc-tisk",
  "mereni-hluku-dieselgenerator",
  "mereni-vibraci-cele-telo",
  "mereni-vibraci-ruce",
  "pracovni-prostredi-chemicke-latky",
  "pracovni-prostredi-hluk-hala",
  "pracovni-prostredi-komplex",
  "pracovni-prostredi-mikroklima",
  "pracovni-prostredi-osvetleni"
]);

export function hasSectorPhoto(sectorId: string): boolean {
  return sectorPhotoIds.has(sectorId);
}

export function hasCaseStudyPhoto(studyId: string): boolean {
  return caseStudyPhotoIds.has(studyId);
}

export function sectorPhotoSrc(sectorId: string): string {
  return `/hero/provozy/${sectorId}.jpg`;
}

export function caseStudyPhotoSrc(studyId: string): string {
  return `/hero/case-studies/${studyId}.jpg`;
}

const caseStudyPhotoPositions: Record<string, string> = {
  "mereni-emisi-filtr-aktivni-uhli": "center 40%",
  "mereni-emisi-kotel-biomasa": "center 42%",
  "mereni-emisi-novy-kotel": "center 38%",
  "mereni-emisi-plynova-kotelna-verejna-budova": "center 45%",
  "mereni-emisi-plynovy-horak": "center 40%",
  "mereni-emisi-pradelna": "center 42%",
  "mereni-emisi-tryskani": "center 35%",
  "mereni-emisi-voc-tisk": "center 40%",
  "mereni-hluku-dieselgenerator": "center 42%",
  "mereni-vibraci-cele-telo": "center 40%",
  "mereni-vibraci-ruce": "center 38%",
  "hlukova-studie-vzt": "center 42%",
  "pracovni-prostredi-chemicke-latky": "center 40%",
  "pracovni-prostredi-hluk-hala": "center 38%",
  "pracovni-prostredi-komplex": "center 40%",
  "pracovni-prostredi-mikroklima": "center 42%",
  "pracovni-prostredi-osvetleni": "center 40%"
};

export function getSectorHeroImageConfig(sectorId: string): HeroImageConfig {
  if (hasSectorPhoto(sectorId)) {
    return { src: sectorPhotoSrc(sectorId), position: "center 40%" };
  }
  return getHeroImageConfig(sectorHeroTheme(sectorId));
}

type CaseStudyPhotoInput = {
  id: string;
  sectorId?: string;
  categoryId: CaseStudyCategoryId;
};

/** Priorita: vlastní fotka zakázky → fotka provozu → kategorie služby. */
export function getCaseStudyHeroImageConfig(study: CaseStudyPhotoInput): HeroImageConfig {
  if (hasCaseStudyPhoto(study.id)) {
    return {
      src: caseStudyPhotoSrc(study.id),
      position: caseStudyPhotoPositions[study.id] ?? "center 40%"
    };
  }
  if (study.sectorId && hasSectorPhoto(study.sectorId)) {
    return { src: sectorPhotoSrc(study.sectorId), position: "center 40%" };
  }
  return getHeroImageConfig(caseStudyHeroTheme(study));
}
