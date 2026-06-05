"use client";

import { IndexCard } from "@/components/IndexCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { accordionExpandClosed, accordionExpandOpen } from "@/lib/accordion-expand-labels";
import type { ServiceIconKey } from "@/lib/service-icons";
import { serviceGroups } from "@/lib/service-groups";
import { useAccordionHashOpen } from "@/lib/use-accordion-hash-open";

const groupIcons: Record<string, ServiceIconKey> = {
  "mericke-sluzby": "pillar-mereni",
  "studie-vypocty": "pillar-studie",
  "povolovaci-podklady": "pillar-dokumentace",
  "eia-investice": "eia",
  "evidence-reporting": "ispop",
  "skoleni-podpora": "skoleni"
};

const groupAriaVerbs: Record<string, string> = {
  "mericke-sluzby": "měření",
  "studie-vypocty": "studie",
  "povolovaci-podklady": "povolovací služby",
  "eia-investice": "EIA",
  "evidence-reporting": "evidenci",
  "skoleni-podpora": "školení"
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

const serviceGroupIds = serviceGroups.map((group) => group.id);

export function ServiceGroupsIndex() {
  const { isOpen, onToggle } = useAccordionHashOpen(serviceGroupIds);

  return (
    <section className="section section-surface accordion-index-surface service-groups-accordion">
      <div className="container service-groups-accordion-inner">
        {serviceGroups.map((group) => {
          const ariaVerb = groupAriaVerbs[group.id] ?? group.title;

          return (
          <details
            key={group.id}
            id={group.id}
            className="card service-group-details"
            open={isOpen(group.id)}
            onToggle={(event) => onToggle(group.id, event.currentTarget.open)}
          >
            <summary
              className="service-group-summary"
              aria-label={`${group.title}, ${serviceCountLabel(group.items.length)} — zobrazit nebo skrýt ${ariaVerb}`}
            >
              <ServiceIcon icon={groupIcons[group.id]} variant="inline" className="service-group-summary-icon" />
              <div className="service-group-summary-text">
                <div className="service-group-summary-title-row">
                  <h2>{group.title}</h2>
                  <span className="service-group-count muted">{serviceCountLabel(group.items.length)}</span>
                </div>
                <p className="muted service-group-intro">{group.intro}</p>
              </div>
              <span className="service-group-expand" aria-hidden="true">
                <span className="service-group-expand-text">
                  <span className="service-group-expand-when-closed">{accordionExpandClosed}</span>
                  <span className="service-group-expand-when-open">{accordionExpandOpen}</span>
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
