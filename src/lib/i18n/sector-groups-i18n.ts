import type { Locale } from "@/lib/i18n/locales";
import type { SectorGroup } from "@/lib/sector-groups";

export async function getSectorGroups(locale: Locale): Promise<readonly SectorGroup[]> {
  if (locale === "de") {
    return (await import("@/lib/sector-groups-de")).sectorGroups;
  }
  return (await import("@/lib/sector-groups")).sectorGroups;
}
