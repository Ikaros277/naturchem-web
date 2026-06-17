"use client";

import { SectorCard } from "@/components/SectorCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { useTranslations } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";
import { getSectorGroups } from "@/lib/i18n/sector-groups-i18n";
import type { ServiceIconKey } from "@/lib/service-icons";
import type { Sector } from "@/lib/sectors";

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

function sectorCountLabel(count: number, locale: Locale): string {
  if (locale === "en") {
    if (count === 1) return "1 facility type";
    return `${count} facility types`;
  }
  if (locale === "de") {
    if (count === 1) return "1 Betriebstyp";
    return `${count} Betriebstypen`;
  }
  if (count === 1) return "1 provoz";
  if (count >= 2 && count <= 4) return `${count} provozy`;
  return `${count} provozů`;
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
  const sectorGroups = getSectorGroups(locale);
  const ariaVerbs =
    locale === "en" ? groupAriaVerbsEn : locale === "de" ? groupAriaVerbsDe : groupAriaVerbs;

  return (
    <section className="section section-surface accordion-index-surface sector-groups-accordion" aria-labelledby="sector-groups-heading">
      <div className="container service-groups-accordion-inner">
        {sectorGroups.map((group) => {
          const ariaVerb = ariaVerbs[group.id] ?? group.title;
          const count = group.hrefs.length;

          return (
            <details
              key={group.id}
              id={group.id}
              className="card service-group-details sector-group-details"
            >
              <summary
                className="service-group-summary"
                aria-label={`${group.title}, ${sectorCountLabel(count, locale)} — ${accordion.showOrHide} ${ariaVerb}`}
              >
                <ServiceIcon
                  icon={groupIcons[group.id]}
                  variant="inline"
                  className="service-group-summary-icon"
                />
                <div className="service-group-summary-text">
                  <div className="service-group-summary-title-row">
                    <h2>{group.title}</h2>
                    <span className="service-group-count muted">{sectorCountLabel(count, locale)}</span>
                  </div>
                  <p className="muted service-group-intro">{group.intro}</p>
                </div>
                <span className="service-group-expand" aria-hidden="true">
                  <span className="service-group-expand-text">
                    <span className="service-group-expand-when-closed">{accordion.expandClosed}</span>
                    <span className="service-group-expand-when-open">{accordion.expandOpen}</span>
                  </span>
                  <span className="service-group-expand-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </span>
              </summary>
              <SectorCards hrefs={group.hrefs} sectors={sectors} />
            </details>
          );
        })}
      </div>
    </section>
  );
}
