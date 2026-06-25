import type { Locale } from "@/lib/i18n/locales";
import type { ServiceMegaMenuGroup } from "@/lib/megamenu-types";

export type { ServiceMegaMenuGroup };

export async function getServiceMegaGroups(locale: Locale): Promise<readonly ServiceMegaMenuGroup[]> {
  if (locale === "en") {
    return (await import("@/lib/service-megamenu-en")).serviceMegaGroupsEn;
  }
  if (locale === "de") {
    return (await import("@/lib/service-megamenu-de")).serviceMegaGroupsDe;
  }
  return (await import("@/lib/service-megamenu")).serviceMegaGroups;
}
