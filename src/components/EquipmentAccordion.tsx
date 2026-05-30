import { ServiceIcon } from "@/components/ServiceIcon";
import { getEquipmentGroupIconKey } from "@/lib/service-icons";

export type EquipmentGroup = {
  title: string;
  text: string;
  items: readonly string[];
};

export function EquipmentAccordion({ groups }: { groups: readonly EquipmentGroup[] }) {
  return (
    <div className="equipment-accordion-grid">
      {groups.map((group) => (
        <article key={group.title} className="card scope-card equipment-accordion-card">
          <div className="equipment-accordion-summary">
            <ServiceIcon icon={getEquipmentGroupIconKey(group.title)} className="equipment-group-icon" />
            <h2>{group.title} <span className="muted accordion-count">({group.items.length})</span></h2>
          </div>
          <p className="muted">{group.text}</p>
          <ul className="check-list">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
