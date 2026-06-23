import type { Locale } from "@/lib/i18n/locales";
import type { MegaMenuGroup } from "@/lib/megamenu-types";

export type { MegaMenuGroup };

export async function getONasMegaGroups(locale: Locale): Promise<readonly MegaMenuGroup[]> {
  if (locale === "en") {
    return (await import("@/lib/o-nas-megamenu-en")).oNasMegaGroupsEn;
  }
  if (locale === "de") {
    return (await import("@/lib/o-nas-megamenu-de")).oNasMegaGroupsDe;
  }
  return (await import("@/lib/o-nas-megamenu")).oNasMegaGroups;
}
