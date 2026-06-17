"use client";

import { useMemo } from "react";
import { AccordionIndexDetails } from "@/components/AccordionIndexDetails";
import { ServiceIcon } from "@/components/ServiceIcon";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { useTranslations } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";
import type { EquipmentGroup } from "@/lib/equipment-content";
import { getEquipmentGroupIconKeyById } from "@/lib/service-icons";
import { useAccordionHashOpen } from "@/lib/use-accordion-hash-open";

function itemCountLabel(
  count: number,
  messages: ReturnType<typeof useTranslations<"equipment">>
): string {
  if (count === 1) return messages.itemCountOne;
  if (count >= 2 && count <= 4) {
    return messages.itemCountFew.replace("{count}", String(count));
  }
  return messages.itemCountMany.replace("{count}", String(count));
}

type Props = {
  groups: readonly EquipmentGroup[];
  groupAriaVerbs: Record<string, string>;
  locale: Locale;
};

export function EquipmentGroupsIndex({ groups, groupAriaVerbs, locale }: Props) {
  const equipment = useTranslations("equipment");
  const accordion = useTranslations("accordion");
  const groupIds = useMemo(() => groups.map((group) => group.id), [groups]);
  const { isOpen, onToggle } = useAccordionHashOpen(groupIds);

  return (
    <section
      className="section section-surface accordion-index-surface equipment-groups-accordion"
      aria-label={equipment.groupsAria}
    >
      <div className="container service-groups-accordion-inner">
        {groups.map((group) => {
          const ariaVerb = groupAriaVerbs[group.id] ?? group.title;
          const countLabel = itemCountLabel(group.items.length, equipment);

          return (
            <AccordionIndexDetails
              key={group.id}
              id={group.id}
              className="card service-group-details equipment-group-details"
              ariaLabel={`${group.title}, ${countLabel} — ${accordion.showOrHide} ${ariaVerb}`}
              icon={
                <ServiceIcon
                  icon={getEquipmentGroupIconKeyById(group.id)}
                  variant="inline"
                  size={24}
                  className="service-group-summary-icon"
                />
              }
              title={group.title}
              countLabel={countLabel}
              expandClosed={accordion.expandClosed}
              expandOpen={accordion.expandOpen}
              open={isOpen(group.id)}
              onToggle={(open) => onToggle(group.id, open)}
            >
              <div className="equipment-group-body">
                <ul className="check-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {group.serviceHref && group.serviceLabel ? (
                  <p className="equipment-service-link">
                    <LocaleLink href={group.serviceHref}>{group.serviceLabel} →</LocaleLink>
                  </p>
                ) : null}
              </div>
            </AccordionIndexDetails>
          );
        })}
      </div>
    </section>
  );
}
