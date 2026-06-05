import Link from "next/link";

import { ServiceIcon } from "@/components/ServiceIcon";
import { accordionExpandClosed, accordionExpandOpen } from "@/lib/accordion-expand-labels";
import type { EquipmentGroup } from "@/lib/equipment-content";
import { equipmentGroupAriaVerbs, equipmentItemCountLabel } from "@/lib/equipment-content";
import { getEquipmentGroupIconKeyById } from "@/lib/service-icons";

function ExpandChevron() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function EquipmentAccordion({ groups }: { groups: readonly EquipmentGroup[] }) {
  return (
    <section
      className="section section-surface accordion-index-surface equipment-groups-accordion"
      aria-label="Skupiny přístrojového vybavení"
    >
      <div className="container service-groups-accordion-inner">
        {groups.map((group) => {
          const ariaVerb = equipmentGroupAriaVerbs[group.id] ?? group.title;

          return (
            <details
              key={group.id}
              id={group.id}
              className="card service-group-details equipment-group-details"
            >
              <summary
                className="service-group-summary"
                aria-label={`${group.title}, ${equipmentItemCountLabel(group.items.length)} — zobrazit nebo skrýt ${ariaVerb}`}
              >
                <ServiceIcon
                  icon={getEquipmentGroupIconKeyById(group.id)}
                  variant="inline"
                  size={24}
                  className="service-group-summary-icon"
                />
                <div className="service-group-summary-text">
                  <div className="service-group-summary-title-row">
                    <h2>{group.title}</h2>
                    <span className="service-group-count muted">
                      {equipmentItemCountLabel(group.items.length)}
                    </span>
                  </div>
                </div>
                <span className="service-group-expand" aria-hidden="true">
                  <span className="service-group-expand-text">
                    <span className="service-group-expand-when-closed">{accordionExpandClosed}</span>
                    <span className="service-group-expand-when-open">{accordionExpandOpen}</span>
                  </span>
                  <span className="service-group-expand-icon">
                    <ExpandChevron />
                  </span>
                </span>
              </summary>
              <div className="equipment-group-body">
                <ul className="check-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {group.serviceHref && group.serviceLabel ? (
                  <p className="equipment-service-link">
                    <Link href={group.serviceHref}>{group.serviceLabel} →</Link>
                  </p>
                ) : null}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
