"use client";

import { useMemo } from "react";
import { AccordionIndexDetails } from "@/components/AccordionIndexDetails";
import { IndexCard } from "@/components/IndexCard";
import { ServiceCardThumb } from "@/components/ServiceCardThumb";
import { ServiceIcon } from "@/components/ServiceIcon";
import { useTranslations } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import type { ServiceIconKey } from "@/lib/service-icons";
import {
  getServiceCategoryFromHref,
  getServiceCategoryFromServiceGroupId
} from "@/lib/service-categories";
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

const groupAriaVerbsDe: Record<string, string> = {
  "mericke-sluzby": "Messungen",
  "studie-vypocty": "Studien",
  "povolovaci-podklady": "Genehmigungsleistungen",
  "eia-investice": "EIA",
  "evidence-reporting": "Berichterstattung",
  "skoleni-podpora": "Schulungen"
};

const groupAriaVerbsEn: Record<string, string> = {
  "mericke-sluzby": "measurements",
  "studie-vypocty": "studies",
  "povolovaci-podklady": "permitting services",
  "eia-investice": "EIA",
  "evidence-reporting": "reporting",
  "skoleni-podpora": "training"
};

type ServiceGroup = (typeof serviceGroupsCs)[number];

function ServiceCards({
  items,
  locale,
  viewServiceLabel
}: {
  items: ServiceGroup["items"];
  locale: Locale;
  viewServiceLabel: string;
}) {
  return (
    <div className="service-card-grid">
      {items.map((item) => (
        <IndexCard
          key={item.title}
          href={localizeHref(item.href, locale)}
          title={item.title}
          className="service-index-card service-card service-index-card--with-thumb article-card--with-thumb"
          cta={viewServiceLabel}
          serviceCategory={getServiceCategoryFromHref(item.href)}
          icon={<ServiceIcon href={item.href} variant="inline" size={20} />}
          meta={<ServiceCardThumb href={item.href} alt={item.title} />}
        >
          <p className="muted service-index-card-lead">{item.text}</p>
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
  const common = useTranslations("common");
  const accordion = useTranslations("accordion");
  const groupIds = useMemo(() => groups.map((group) => group.id), [groups]);
  const { isOpen, onToggle } = useAccordionHashOpen(groupIds);
  const ariaVerbs =
    locale === "en" ? groupAriaVerbsEn : locale === "de" ? groupAriaVerbsDe : groupAriaVerbs;

  return (
    <section className="section section-surface accordion-index-surface service-groups-accordion">
      <div className="container service-groups-accordion-inner">
        {groups.map((group) => {
          const ariaVerb = ariaVerbs[group.id] ?? group.title;
          const groupCategory = getServiceCategoryFromServiceGroupId(group.id);

          return (
            <AccordionIndexDetails
              key={group.id}
              id={group.id}
              className={`card service-group-details${groupCategory ? ` service-group-details--${groupCategory}` : ""}`}
              ariaLabel={`${group.title} — ${accordion.showOrHide} ${ariaVerb}`}
              icon={
                <ServiceIcon
                  icon={groupIcons[group.id]}
                  variant="inline"
                  className="service-group-summary-icon"
                />
              }
              title={group.title}
              intro={group.intro}
              expandClosed={accordion.expandClosed}
              expandOpen={accordion.expandOpen}
              open={isOpen(group.id)}
              onToggle={(open) => onToggle(group.id, open)}
            >
              <ServiceCards
                items={group.items}
                locale={locale}
                viewServiceLabel={common.viewService}
              />
            </AccordionIndexDetails>
          );
        })}
      </div>
    </section>
  );
}
