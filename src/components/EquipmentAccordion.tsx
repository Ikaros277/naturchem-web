import { LocaleLink } from "@/lib/i18n/locale-link";
import { getMessages } from "@/lib/i18n/get-messages";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";

import { ServiceIcon } from "@/components/ServiceIcon";
import type { EquipmentGroup } from "@/lib/equipment-content";
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

function itemCountLabel(count: number, locale: Locale, messages: Awaited<ReturnType<typeof getMessages>>): string {
  if (count === 1) return messages.equipment.itemCountOne;
  if (count >= 2 && count <= 4) {
    return messages.equipment.itemCountFew.replace("{count}", String(count));
  }
  return messages.equipment.itemCountMany.replace("{count}", String(count));
}

type Props = {
  groups: readonly EquipmentGroup[];
  groupAriaVerbs: Record<string, string>;
  locale: Locale;
};

export async function EquipmentAccordion({ groups, groupAriaVerbs, locale }: Props) {
  const messages = await getMessages(locale);
  const accordion = messages.accordion;

  return (
    <section
      className="section section-surface accordion-index-surface equipment-groups-accordion"
      aria-label={messages.equipment.groupsAria}
    >
      <div className="container service-groups-accordion-inner">
        {groups.map((group) => {
          const ariaVerb = groupAriaVerbs[group.id] ?? group.title;
          const countLabel = itemCountLabel(group.items.length, locale, messages);

          return (
            <details
              key={group.id}
              id={group.id}
              className="card service-group-details equipment-group-details"
            >
              <summary
                className="service-group-summary"
                aria-label={`${group.title}, ${countLabel} — ${accordion.showOrHide} ${ariaVerb}`}
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
                    <span className="service-group-count muted">{countLabel}</span>
                  </div>
                </div>
                <span className="service-group-expand" aria-hidden="true">
                  <span className="service-group-expand-text">
                    <span className="service-group-expand-when-closed">{accordion.expandClosed}</span>
                    <span className="service-group-expand-when-open">{accordion.expandOpen}</span>
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
                    <LocaleLink href={group.serviceHref}>{group.serviceLabel} →</LocaleLink>
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
