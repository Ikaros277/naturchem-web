"use client";

import { SectorCard } from "@/components/SectorCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { ServiceIconKey } from "@/lib/service-icons";
import { sectorGroups } from "@/lib/sector-groups";
import type { Sector } from "@/lib/sectors";

const groupIcons: Record<string, ServiceIconKey> = {
  "prumysl-vyroba": "audience-prumysl",
  "energetika-emise": "audience-energetika",
  "odpady-recyklace": "audience-odpady",
  zemedelstvi: "audience-prumysl",
  "budovy-vzt": "audience-budovy",
  "investicni-zamery": "audience-investor"
};

const groupExpandLabels: Record<string, { closed: string; open: string; ariaVerb: string }> = {
  "prumysl-vyroba": { closed: "Zobrazit průmysl", open: "Skrýt průmysl", ariaVerb: "průmysl a výrobu" },
  "energetika-emise": {
    closed: "Zobrazit energetiku",
    open: "Skrýt energetiku",
    ariaVerb: "energetiku a emise"
  },
  "odpady-recyklace": { closed: "Zobrazit odpady", open: "Skrýt odpady", ariaVerb: "odpady a recyklaci" },
  zemedelstvi: { closed: "Zobrazit zemědělství", open: "Skrýt zemědělství", ariaVerb: "zemědělství" },
  "budovy-vzt": { closed: "Zobrazit budovy a VZT", open: "Skrýt budovy a VZT", ariaVerb: "budovy a VZT" },
  "investicni-zamery": {
    closed: "Zobrazit investiční záměry",
    open: "Skrýt investiční záměry",
    ariaVerb: "investiční záměry"
  }
};

function sectorCountLabel(count: number): string {
  if (count === 1) return "1 provoz";
  if (count >= 2 && count <= 4) return `${count} provozy`;
  return `${count} provozů`;
}

type Props = {
  sectors: readonly Sector[];
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

export function SectorGroupsIndex({ sectors }: Props) {
  return (
    <section className="section sector-groups-accordion" aria-labelledby="sector-groups-heading">
      <div className="container service-groups-accordion-inner">
        {sectorGroups.map((group) => {
          const expand = groupExpandLabels[group.id];
          const count = group.hrefs.length;

          return (
            <details
              key={group.id}
              id={group.id}
              className="card service-group-details sector-group-details"
            >
              <summary
                className="service-group-summary"
                aria-label={`${group.title}, ${sectorCountLabel(count)} — zobrazit nebo skrýt ${expand.ariaVerb}`}
              >
                <ServiceIcon
                  icon={groupIcons[group.id]}
                  variant="inline"
                  size={24}
                  className="service-group-summary-icon"
                />
                <div className="service-group-summary-text">
                  <div className="service-group-summary-title-row">
                    <h2>{group.title}</h2>
                    <span className="service-group-count muted">{sectorCountLabel(count)}</span>
                  </div>
                  <p className="muted service-group-intro">{group.intro}</p>
                </div>
                <span className="service-group-expand" aria-hidden="true">
                  <span className="service-group-expand-text">
                    <span className="service-group-expand-when-closed">{expand.closed}</span>
                    <span className="service-group-expand-when-open">{expand.open}</span>
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
