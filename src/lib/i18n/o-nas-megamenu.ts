import type { Locale } from "@/lib/i18n/locales";
import type { ONasMegaMenuGroup } from "@/lib/megamenu-types";

export type { ONasMegaMenuGroup };

export async function getONasMegaGroups(locale: Locale): Promise<readonly ONasMegaMenuGroup[]> {
  if (locale === "en") {
    return (await import("@/lib/o-nas-megamenu-en")).oNasMegaGroupsEn;
  }
  if (locale === "de") {
    return (await import("@/lib/o-nas-megamenu-de")).oNasMegaGroupsDe;
  }
  return (await import("@/lib/o-nas-megamenu")).oNasMegaGroups;
}
