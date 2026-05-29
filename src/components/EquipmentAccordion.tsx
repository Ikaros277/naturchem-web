"use client";

import { useEffect, useState } from "react";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getEquipmentGroupIconKey } from "@/lib/service-icons";

export type EquipmentGroup = {
  title: string;
  text: string;
  items: readonly string[];
};

function useEquipmentLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function EquipmentAccordion({ groups }: { groups: readonly EquipmentGroup[] }) {
  const isMobile = useEquipmentLayout();

  return (
    <div className="equipment-accordion-grid">
      {groups.map((group, index) => (
        <details
          key={group.title}
          className="card scope-card equipment-accordion-card"
          open={isMobile ? index === 0 : true}
        >
          <summary className="equipment-accordion-summary">
            <ServiceIcon icon={getEquipmentGroupIconKey(group.title)} className="equipment-group-icon" />
            <h2>{group.title} <span className="muted accordion-count">({group.items.length})</span></h2>
          </summary>
          <p className="muted">{group.text}</p>
          <ul className="check-list">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
