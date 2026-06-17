import type { Locale } from "@/lib/i18n/locales";
import { sectorGroups as sectorGroupsCs } from "@/lib/sector-groups";
import { sectorGroups as sectorGroupsDe } from "@/lib/sector-groups-de";

export function getSectorGroups(locale: Locale) {
  if (locale === "de") return sectorGroupsDe;
  return sectorGroupsCs;
}
