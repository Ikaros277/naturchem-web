"use client";

import { useEffect, useState } from "react";
import { SectorCard } from "@/components/SectorCard";
import type { Sector } from "@/lib/sectors";

type SectorGroup = {
  title: string;
  description: string;
  hrefs: readonly string[];
};

type Props = {
  groups: readonly SectorGroup[];
  sectors: readonly Sector[];
};

function useMobileSectorLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    setIsMobile(mq.matches);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}

function SectorCards({ group, sectors }: { group: SectorGroup; sectors: readonly Sector[] }) {
  const groupSectors = sectors.filter((sector) => group.hrefs.some((href) => href === sector.href));

  return (
    <div className="grid grid-3 sector-grid">
      {groupSectors.map((sector) => (
        <SectorCard key={sector.href} sector={sector} />
      ))}
    </div>
  );
}

export function SectorGroupsIndex({ groups, sectors }: Props) {
  const isMobile = useMobileSectorLayout();

  if (isMobile) {
    return (
      <div className="container sector-mobile-accordion">
        {groups.map((group, index) => (
          <details key={group.title} className="card sector-group-details" open={index === 0}>
            <summary>
              <h2>{group.title}</h2>
              <p className="muted section-intro">{group.description}</p>
            </summary>
            <SectorCards group={group} sectors={sectors} />
          </details>
        ))}
      </div>
    );
  }

  return (
    <div className="container sector-group-stack">
      {groups.map((group) => (
        <section key={group.title} className="sector-group-block">
          <header className="section-header">
            <h2>{group.title}</h2>
            <p className="muted section-intro">{group.description}</p>
          </header>
          <SectorCards group={group} sectors={sectors} />
        </section>
      ))}
    </div>
  );
}
