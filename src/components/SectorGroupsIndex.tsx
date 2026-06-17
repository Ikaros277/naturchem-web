"use client";

import { useMemo } from "react";
import { AccordionIndexDetails } from "@/components/AccordionIndexDetails";
import { SectorCard } from "@/components/SectorCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { useTranslations } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";
import { getSectorGroups } from "@/lib/i18n/sector-groups-i18n";
import type { ServiceIconKey } from "@/lib/service-icons";
import type { Sector } from "@/lib/sectors";
import { useAccordionHashOpen } from "@/lib/use-accordion-hash-open";

const groupIcons: Record<string, ServiceIconKey> = {
  "prumysl-vyroba": "audience-prumysl",
  "energetika-emise": "audience-energetika",
  "odpady-recyklace": "audience-odpady",
  zemedelstvi: "audience-prumysl",
  "budovy-vzt": "audience-budovy",
  "investicni-zamery": "audience-investor"
};

const groupAriaVerbs: Record<string, string> = {
  "prumysl-vyroba": "průmysl a výrobu",
  "energetika-emise": "energetiku a emise",
  "odpady-recyklace": "odpady a recyklaci",
  zemedelstvi: "zemědělství",
  "budovy-vzt": "budovy a VZT",
  "investicni-zamery": "investiční záměry"
};

const groupAriaVerbsEn: Record<string, string> = {
  "prumysl-vyroba": "industry and manufacturing",
  "energetika-emise": "energy and emissions",
  "odpady-recyklace": "waste and recycling",
  zemedelstvi: "agriculture",
  "budovy-vzt": "buildings and HVAC",
  "investicni-zamery": "investment projects"
};

const groupAriaVerbsDe: Record<string, string> = {
  "prumysl-vyroba": "Industrie und Fertigung",
  "energetika-emise": "Energie und Emissionen",
  "odpady-recyklace": "Abfall und Recycling",
  zemedelstvi: "Landwirtschaft",
  "budovy-vzt": "Gebäude und HLK",
  "investicni-zamery": "Investitionsprojekte"
};

function sectorCountLabel(
  count: number,
  messages: ReturnType<typeof useTranslations<"sectorsIndex">>
): string {
  if (count === 1) return messages.sectorCountOne;
  if (count >= 2 && count <= 4) {
    return messages.sectorCountFew.replace("{count}", String(count));
  }
  return messages.sectorCountMany.replace("{count}", String(count));
}

type Props = {
  sectors: readonly Sector[];
  locale: Locale;
};

function SectorCards({ hrefs, sectors }: { hrefs: readonly string[]; sectors: readonly Sector[] }) {
  const groupSectors = sectors.filter((sector) => hrefs.some((href) => href === sector.href));

  return (
    <div className="grid grid-3 sector-grid">
      {groupSectors.map((sector) => (
        <SectorCard key={sector.href} sector={sector} />
      ))}
    </div>
  );
}

export function SectorGroupsIndex({ sectors, locale }: Props) {
  const accordion = useTranslations("accordion");
  const sectorsIndex = useTranslations("sectorsIndex");
  const sectorGroups = getSectorGroups(locale);
  const groupIds = useMemo(() => sectorGroups.map((group) => group.id), [sectorGroups]);
  const { isOpen, onToggle } = useAccordionHashOpen(groupIds);
  const ariaVerbs =
    locale === "en" ? groupAriaVerbsEn : locale === "de" ? groupAriaVerbsDe : groupAriaVerbs;

  return (
    <section
      className="section section-surface accordion-index-surface sector-groups-accordion"
      aria-labelledby="sector-groups-heading"
    >
      <div className="container service-groups-accordion-inner">
        {sectorGroups.map((group) => {
          const ariaVerb = ariaVerbs[group.id] ?? group.title;
          const count = group.hrefs.length;
          const countLabel = sectorCountLabel(count, sectorsIndex);

          return (
            <AccordionIndexDetails
              key={group.id}
              id={group.id}
              className="card service-group-details sector-group-details"
              ariaLabel={`${group.title}, ${countLabel} — ${accordion.showOrHide} ${ariaVerb}`}
              icon={
                <ServiceIcon
                  icon={groupIcons[group.id]}
                  variant="inline"
                  className="service-group-summary-icon"
                />
              }
              title={group.title}
              countLabel={countLabel}
              intro={group.intro}
              expandClosed={accordion.expandClosed}
              expandOpen={accordion.expandOpen}
              open={isOpen(group.id)}
              onToggle={(open) => onToggle(group.id, open)}
            >
              <SectorCards hrefs={group.hrefs} sectors={sectors} />
            </AccordionIndexDetails>
          );
        })}
      </div>
    </section>
  );
}
