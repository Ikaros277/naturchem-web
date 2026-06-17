"use client";

import { IndexCard } from "@/components/IndexCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { useTranslations } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import type { ServiceIconKey } from "@/lib/service-icons";
import type { serviceGroups as serviceGroupsCs } from "@/lib/service-groups";
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

const groupAriaVerbsEn: Record<string, string> = {
  "mericke-sluzby": "measurements",
  "studie-vypocty": "studies",
  "povolovaci-podklady": "permitting services",
  "eia-investice": "EIA",
  "evidence-reporting": "reporting",
  "skoleni-podpora": "training"
};

function serviceCountLabel(
  count: number,
  locale: Locale,
  messages: ReturnType<typeof useTranslations<"servicesIndex">>
): string {
  if (count === 1) return messages.serviceCountOne;
  if (count >= 2 && count <= 4) {
    return messages.serviceCountFew.replace("{count}", String(count));
  }
  return messages.serviceCountMany.replace("{count}", String(count));
}

const groupTags: Record<string, string[]> = {
  "mericke-sluzby": ["KHS", "ČIŽP", "KÚ"],
  "studie-vypocty": ["EIA", "KHS", "KÚ"],
  "povolovaci-podklady": ["KÚ", "ČIŽP", "IPPC"],
  "eia-investice": ["EIA", "Investor", "Projektant"],
  "evidence-reporting": ["ISPOP", "GHG", "Reporting"],
  "skoleni-podpora": ["Chemie", "BOZP", "Praxe"]
};

type ServiceGroup = (typeof serviceGroupsCs)[number];

function ServiceCards({
  groupId,
  items,
  locale,
  viewServiceLabel,
  relatedAreasLabel
}: {
  groupId: string;
  items: ServiceGroup["items"];
  locale: Locale;
  viewServiceLabel: string;
  relatedAreasLabel: string;
}) {
  return (
    <div className="service-card-grid">
      {items.map((item) => (
        <IndexCard
          key={item.title}
          href={localizeHref(item.href, locale)}
          title={item.title}
          className="service-index-card service-card"
          cta={viewServiceLabel}
          icon={<ServiceIcon href={item.href} variant="inline" size={20} />}
        >
          <p className="muted">{item.text}</p>
          <ul className="tag-row service-index-card-tags" aria-label={relatedAreasLabel}>
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

type Props = {
  groups: ServiceGroup[];
  locale: Locale;
};

export function ServiceGroupsIndex({ groups, locale }: Props) {
  const servicesIndex = useTranslations("servicesIndex");
  const common = useTranslations("common");
  const accordion = useTranslations("accordion");
  const { isOpen, onToggle } = useAccordionHashOpen(groups.map((group) => group.id));
  const ariaVerbs = locale === "en" ? groupAriaVerbsEn : groupAriaVerbs;

  return (
    <section className="section section-surface accordion-index-surface service-groups-accordion">
      <div className="container service-groups-accordion-inner">
        {groups.map((group) => {
          const ariaVerb = ariaVerbs[group.id] ?? group.title;
          const countLabel = serviceCountLabel(group.items.length, locale, servicesIndex);

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
                aria-label={`${group.title}, ${countLabel} — ${accordion.showOrHide} ${ariaVerb}`}
              >
                <ServiceIcon icon={groupIcons[group.id]} variant="inline" className="service-group-summary-icon" />
                <div className="service-group-summary-text">
                  <div className="service-group-summary-title-row">
                    <h2>{group.title}</h2>
                    <span className="service-group-count muted">{countLabel}</span>
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
              <ServiceCards
                groupId={group.id}
                items={group.items}
                locale={locale}
                viewServiceLabel={common.viewService}
                relatedAreasLabel={common.relatedAreas}
              />
            </details>
          );
        })}
      </div>
    </section>
  );
}
