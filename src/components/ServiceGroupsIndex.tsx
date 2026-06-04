"use client";

import { IndexCard } from "@/components/IndexCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { ServiceIconKey } from "@/lib/service-icons";
import { serviceGroups } from "@/lib/service-groups";

const groupIcons: Record<string, ServiceIconKey> = {
  "mericke-sluzby": "pillar-mereni",
  "studie-vypocty": "pillar-studie",
  "povolovaci-podklady": "pillar-dokumentace",
  "eia-investice": "eia",
  "evidence-reporting": "ispop",
  "skoleni-podpora": "skoleni"
};

const groupExpandLabels: Record<string, { closed: string; open: string; ariaVerb: string }> = {
  "mericke-sluzby": { closed: "Zobrazit měření", open: "Skrýt měření", ariaVerb: "měření" },
  "studie-vypocty": { closed: "Zobrazit studie", open: "Skrýt studie", ariaVerb: "studie" },
  "povolovaci-podklady": {
    closed: "Zobrazit povolování",
    open: "Skrýt povolování",
    ariaVerb: "povolovací služby"
  },
  "eia-investice": { closed: "Zobrazit EIA", open: "Skrýt EIA", ariaVerb: "EIA" },
  "evidence-reporting": { closed: "Zobrazit evidenci", open: "Skrýt evidenci", ariaVerb: "evidenci" },
  "skoleni-podpora": { closed: "Zobrazit školení", open: "Skrýt školení", ariaVerb: "školení" }
};

function serviceCountLabel(count: number): string {
  if (count === 1) return "1 služba";
  if (count >= 2 && count <= 4) return `${count} služby`;
  return `${count} služeb`;
}

const groupTags: Record<string, string[]> = {
  "mericke-sluzby": ["KHS", "ČIŽP", "KÚ"],
  "studie-vypocty": ["EIA", "KHS", "KÚ"],
  "povolovaci-podklady": ["KÚ", "ČIŽP", "IPPC"],
  "eia-investice": ["EIA", "Investor", "Projektant"],
  "evidence-reporting": ["ISPOP", "GHG", "Reporting"],
  "skoleni-podpora": ["Chemie", "BOZP", "Praxe"]
};

function ServiceCards({ groupId, items }: { groupId: string; items: (typeof serviceGroups)[number]["items"] }) {
  return (
    <div className="service-card-grid">
      {items.map((item) => (
        <IndexCard
          key={item.title}
          href={item.href}
          title={item.title}
          className="service-index-card service-card"
          cta="Zobrazit službu"
          icon={<ServiceIcon href={item.href} variant="inline" size={20} />}
        >
          <p className="muted">{item.text}</p>
          <ul className="tag-row service-index-card-tags" aria-label="Související oblasti">
            {(groupTags[groupId] ?? []).slice(0, 4).map((tag) => (
              <li key={tag}>
                <span className="tag">{tag}</span>
              </li>
            ))}
          </ul>
        </IndexCard>
      ))}
    </div>
  );
}

export function ServiceGroupsIndex() {
  return (
    <section className="section service-group service-groups-accordion">
      <div className="container service-groups-accordion-inner">
        {serviceGroups.map((group) => {
          const expand = groupExpandLabels[group.id];
          return (
          <details key={group.id} id={group.id} className="card service-group-details">
            <summary
              className="service-group-summary"
              aria-label={`${group.title}, ${serviceCountLabel(group.items.length)} — zobrazit nebo skrýt ${expand.ariaVerb}`}
            >
              <ServiceIcon icon={groupIcons[group.id]} variant="inline" size={24} className="service-group-summary-icon" />
              <div className="service-group-summary-text">
                <div className="service-group-summary-title-row">
                  <h2>{group.title}</h2>
                  <span className="service-group-count muted">{serviceCountLabel(group.items.length)}</span>
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
            <ServiceCards groupId={group.id} items={group.items} />
          </details>
        );
        })}
      </div>
    </section>
  );
}
