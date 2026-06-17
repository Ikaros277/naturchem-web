import {
  companyStats as companyStatsListCs,
  companyStatsIntro as companyStatsIntroCs,
  companyStatsNote as companyStatsNoteCs
} from "@/lib/company-stats";
import {
  companyStats as companyStatsListEn,
  companyStatsIntro as companyStatsIntroEn,
  companyStatsNote as companyStatsNoteEn
} from "@/lib/company-stats-en";
import {
  companyStats as companyStatsListDe,
  companyStatsIntro as companyStatsIntroDe,
  companyStatsNote as companyStatsNoteDe
} from "@/lib/company-stats-de";
import type { Locale } from "@/lib/i18n/locales";

const companyStatsContentCs = {
  companyStats: companyStatsListCs,
  companyStatsIntro: companyStatsIntroCs,
  companyStatsNote: companyStatsNoteCs
};

const companyStatsContentEn = {
  companyStats: companyStatsListEn,
  companyStatsIntro: companyStatsIntroEn,
  companyStatsNote: companyStatsNoteEn
};

const companyStatsContentDe = {
  companyStats: companyStatsListDe,
  companyStatsIntro: companyStatsIntroDe,
  companyStatsNote: companyStatsNoteDe
};

export type CompanyStatsContent =
  | typeof companyStatsContentCs
  | typeof companyStatsContentEn
  | typeof companyStatsContentDe;

export function getCompanyStatsContent(locale: Locale): CompanyStatsContent {
  if (locale === "en") return companyStatsContentEn;
  if (locale === "de") return companyStatsContentDe;
  return companyStatsContentCs;
}
