import { shortenSectorCardLead } from "@/lib/excerpt";
import type { Sector } from "@/lib/sectors";

/** Lehký model karty provozu — bez polí, která se v indexu nepoužívají. */
export type SectorCardModel = {
  id: string;
  title: string;
  href: string;
  description: string;
  serviceTags: string;
  factors: string;
  serviceHrefs: readonly string[];
  caseStudyIds: readonly string[];
  ariaLabel: string;
};

export function toSectorCardModel(sector: Sector): SectorCardModel {
  return {
    id: sector.id,
    title: sector.title,
    href: sector.href,
    description: shortenSectorCardLead(sector.description),
    serviceTags: sector.serviceTags,
    factors: sector.factors,
    serviceHrefs: sector.serviceHrefs,
    caseStudyIds: sector.caseStudyIds,
    ariaLabel: sector.ariaLabel
  };
}
