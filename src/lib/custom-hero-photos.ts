import type { HeroImageConfig } from "@/lib/hero-images";
import { getHeroImageConfig } from "@/lib/hero-images";
import { caseStudyHeroTheme } from "@/lib/case-study-visuals";
import { sectorHeroTheme } from "@/lib/sector-group-visuals";
import type { CaseStudyCategoryId } from "@/data/case-study-builder";

/** Provozy s vlastní fotkou z terénu (soubor v /public/hero/provozy/{id}.webp). */
export const sectorPhotoIds = new Set([
  "automotive",
  "bioplyn-biometan",
  "cisteni-spalin",
  "cov-kaly",
  "drevozpracujici",
  "galvanovny",
  "ghg-cnr",
  "ispop-evidence",
  "kamenolomy",
  "kompostarny",
  "kotelny",
  "krematoria",
  "laboratore",
  "lakovny",
  "lesnictvi-doprava",
  "odborne-posudky-povoleni",
  "odpady-recyklace",
  "potravinarstvi",
  "provozni-rady",
  "pyrolyza-kalu",
  "skladky-odpady",
  "sklarstvi",
  "stavebni-zamery",
  "susarny-kalu",
  "susarny-zemedelstvi",
  "svarovny",
  "tepelna-cerpadla-vzt",
  "teplarny",
  "tiskarny-textilie",
  "verejne-budovy",
  "zemedelske-provozy"
]);

/** Typické zakázky s vlastní fotkou (soubor v /public/hero/case-studies/{id}.webp). */
export const caseStudyPhotoIds = new Set([
  "aktualizace-provozniho-radu",
  "bezpecnostni-list-chemicky-vyrobek",
  "cov-kalovy-vyduch",
  "eia-recyklacni-areal",
  "eia-skladka-odpady",
  "ghg-cnr-vykaz",
  "hluk-drtic-recyklace",
  "hluk-vibrace-mobilni-cinnost",
  "hlukova-studie-vyrobni-areal",
  "hlukova-studie-vzt",
  "ispop-rocni-hlaseni",
  "kontrolni-mereni-pozadavek-khs",
  "laborator-cisty-prostor",
  "mereni-emisi-filtr-aktivni-uhli",
  "mereni-emisi-galvanovna",
  "mereni-emisi-kotel-biomasa",
  "mereni-emisi-krematorium",
  "mereni-emisi-lakovna",
  "mereni-emisi-novy-kotel",
  "mereni-emisi-plynova-kotelna-verejna-budova",
  "mereni-emisi-plynovy-horak",
  "mereni-emisi-potravinarsky-provoz",
  "mereni-emisi-pradelna",
  "mereni-emisi-tryskani",
  "mereni-emisi-voc-tisk",
  "mereni-hluku-dieselgenerator",
  "mereni-hluku-tepelne-cerpadlo",
  "mereni-vibraci-cele-telo",
  "mereni-vibraci-ruce",
  "oprava-ispop",
  "pfas-povrchove-upravy",
  "posudek-tryskaci-zarizeni",
  "posudek-zmena-povoleni-lakovna",
  "pracovni-prostredi-chemicke-latky",
  "pracovni-prostredi-drevni-prach",
  "pracovni-prostredi-hluk-hala",
  "pracovni-prostredi-komplex",
  "pracovni-prostredi-lakovna",
  "pracovni-prostredi-mikroklima",
  "pracovni-prostredi-osvetleni",
  "pracovni-prostredi-svarovna",
  "provozni-rad-kompostarna",
  "provozni-rad-recyklacni-stredisko",
  "rozptylova-hlukova-terenni-upravy",
  "rozptylova-studie-plynova-kotelna",
  "sklarsky-provoz-pec",
  "susarna-kalu",
  "taveni-opalove-sklo-fluoridy",
  "vyjadreni-kontrola-cizp"
]);

export function hasSectorPhoto(sectorId: string): boolean {
  return sectorPhotoIds.has(sectorId);
}

export function hasCaseStudyPhoto(studyId: string): boolean {
  return caseStudyPhotoIds.has(studyId);
}

export function sectorPhotoSrc(sectorId: string): string {
  return `/hero/provozy/${sectorId}.webp`;
}

export function caseStudyPhotoSrc(studyId: string): string {
  return `/hero/case-studies/${studyId}.webp`;
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
  "mereni-emisi-galvanovna": "center 40%",
  "mereni-emisi-lakovna": "center 35%",
  "mereni-emisi-krematorium": "center 40%",
  "mereni-emisi-potravinarsky-provoz": "center 42%",
  "mereni-hluku-dieselgenerator": "center 42%",
  "mereni-hluku-tepelne-cerpadlo": "center 42%",
  "mereni-vibraci-cele-telo": "center 40%",
  "mereni-vibraci-ruce": "center 38%",
  "hlukova-studie-vzt": "center 42%",
  "hlukova-studie-vyrobni-areal": "center 38%",
  "hluk-drtic-recyklace": "center 40%",
  "pracovni-prostredi-chemicke-latky": "center 40%",
  "pracovni-prostredi-hluk-hala": "center 38%",
  "pracovni-prostredi-komplex": "center 40%",
  "pracovni-prostredi-mikroklima": "center 42%",
  "pracovni-prostredi-osvetleni": "center 40%",
  "pracovni-prostredi-svarovna": "center 35%",
  "pracovni-prostredi-drevni-prach": "center 40%",
  "pracovni-prostredi-lakovna": "center 35%",
  "rozptylova-studie-plynova-kotelna": "center 42%",
  "rozptylova-hlukova-terenni-upravy": "center 38%",
  "eia-recyklacni-areal": "center 38%",
  "eia-skladka-odpady": "center 35%",
  "sklarsky-provoz-pec": "center 40%",
  "taveni-opalove-sklo-fluoridy": "center 38%"
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
