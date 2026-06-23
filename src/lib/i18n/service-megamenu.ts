import type { Locale } from "@/lib/i18n/locales";
import type { MegaMenuGroup } from "@/lib/megamenu-types";

export type { MegaMenuGroup };

export async function getServiceMegaGroups(locale: Locale): Promise<readonly MegaMenuGroup[]> {
  if (locale === "en") {
    return (await import("@/lib/service-megamenu-en")).serviceMegaGroupsEn;
  }
  if (locale === "de") {
    return (await import("@/lib/service-megamenu-de")).serviceMegaGroupsDe;
  }
  return (await import("@/lib/service-megamenu")).serviceMegaGroups;
}
