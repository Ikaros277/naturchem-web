"use client";

import { useMemo } from "react";
import { AccordionIndexDetails } from "@/components/AccordionIndexDetails";
import { SectorCard } from "@/components/SectorCard";
import { SectorGroupChips, SectorGroupCollage } from "@/components/SectorGroupCollage";
import { useTranslations } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";
import type { SectorGroup } from "@/lib/sector-groups";
import type { Sector } from "@/lib/sectors";
import type { CaseStudy } from "@/lib/case-studies";
import { useAccordionHashOpen } from "@/lib/use-accordion-hash-open";

const groupAriaVerbs: Record<string, string> = {
  "prumysl-vyroba": "průmysl a výrobu",
  "energetika-emise": "energetiku a spalovací zdroje",
  "odpady-recyklace": "odpady, recyklaci a stavební záměry",
  zemedelstvi: "zemědělství a potravinářství",
  "voda-kaly": "vodu, kaly a čistírenské technologie",
  "budovy-vzt": "budovy a pracovní prostředí",
  "evidence-dokumentace": "evidenci a provozní dokumentaci"
};

const groupAriaVerbsEn: Record<string, string> = {
  "prumysl-vyroba": "industry and manufacturing",
  "energetika-emise": "energy and combustion sources",
  "odpady-recyklace": "waste, recycling and construction projects",
  zemedelstvi: "agriculture and food processing",
  "voda-kaly": "water, sludge and wastewater technology",
  "budovy-vzt": "buildings and workplace environment",
  "evidence-dokumentace": "reporting and operating documentation"
};

const groupAriaVerbsDe: Record<string, string> = {
  "prumysl-vyroba": "Industrie und Fertigung",
  "energetika-emise": "Energie und Verbrennungsquellen",
  "odpady-recyklace": "Abfall, Recycling und Bauvorhaben",
  zemedelstvi: "Landwirtschaft und Lebensmittel",
  "voda-kaly": "Wasser, Schlamm und Kläranlagentechnik",
  "budovy-vzt": "Gebäude und Arbeitsumfeld",
  "evidence-dokumentace": "Nachweise und Betriebsdokumentation"
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

type ServiceTitle = { href: string; title: string };

type SectorCardLabels = {
  detailPage: string;
  exampleFromPractice: string;
};

type Props = {
  sectors: readonly Sector[];
  locale: Locale;
  sectorGroups: readonly SectorGroup[];
  caseStudies: CaseStudy[];
  serviceTitles: ServiceTitle[];
  sectorCardLabels: SectorCardLabels;
};

function SectorCards({
  sectorIds,
  sectors,
  caseStudies,
  serviceTitles,
  sectorCardLabels
}: {
  sectorIds: readonly string[];
  sectors: readonly Sector[];
  caseStudies: CaseStudy[];
  serviceTitles: ServiceTitle[];
  sectorCardLabels: SectorCardLabels;
}) {
  const groupSectors = sectors.filter((sector) => sectorIds.includes(sector.id));

  return (
    <div className="grid grid-3 sector-grid">
      {groupSectors.map((sector) => (
        <SectorCard
          key={sector.id}
          sector={sector}
          caseStudies={caseStudies}
          serviceTitles={serviceTitles}
          labels={sectorCardLabels}
        />
      ))}
    </div>
  );
}

export function SectorGroupsIndex({
  sectors,
  locale,
  sectorGroups,
  caseStudies,
  serviceTitles,
  sectorCardLabels
}: Props) {
  const accordion = useTranslations("accordion");
  const sectorsIndex = useTranslations("sectorsIndex");
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
          const count = group.sectorIds.length;
          const countLabel = sectorCountLabel(count, sectorsIndex);

          return (
            <AccordionIndexDetails
              key={group.id}
              id={group.id}
              className="card service-group-details sector-group-details"
              ariaLabel={`${group.title}, ${countLabel} — ${accordion.showOrHide} ${ariaVerb}`}
              visual={<SectorGroupCollage sectorIds={group.sectorIds} sectors={sectors} />}
              summaryExtra={<SectorGroupChips sectorIds={group.sectorIds} sectors={sectors} />}
              title={group.title}
              countLabel={countLabel}
              expandClosed={accordion.expandClosed}
              expandOpen={accordion.expandOpen}
              open={isOpen(group.id)}
              onToggle={(open) => onToggle(group.id, open)}
            >
              <p className="muted sector-group-open-intro">{group.intro}</p>
              <SectorCards
                sectorIds={group.sectorIds}
                sectors={sectors}
                caseStudies={caseStudies}
                serviceTitles={serviceTitles}
                sectorCardLabels={sectorCardLabels}
              />
            </AccordionIndexDetails>
          );
        })}
      </div>
    </section>
  );
}
