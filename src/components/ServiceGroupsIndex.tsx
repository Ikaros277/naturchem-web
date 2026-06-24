"use client";

import { useMemo } from "react";
import { AccordionIndexDetails } from "@/components/AccordionIndexDetails";
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

const groupTagsCs: Record<string, string[]> = {
  "mericke-sluzby": ["KHS", "ČIŽP", "KÚ"],
  "studie-vypocty": ["EIA", "KHS", "KÚ"],
  "povolovaci-podklady": ["KÚ", "ČIŽP", "IPPC"],
  "eia-investice": ["EIA", "Investor", "Projektant"],
  "evidence-reporting": ["ISPOP", "GHG", "Reporting"],
  "skoleni-podpora": ["Chemie", "BOZP", "Praxe"]
};

const groupTagsEn: Record<string, string[]> = {
  "mericke-sluzby": ["KHS", "ČIŽP", "KÚ"],
  "studie-vypocty": ["EIA", "KHS", "KÚ"],
  "povolovaci-podklady": ["KÚ", "ČIŽP", "IPPC"],
  "eia-investice": ["EIA", "Investor", "Designer"],
  "evidence-reporting": ["ISPOP", "GHG", "Reporting"],
  "skoleni-podpora": ["Chemicals", "OSH", "Practice"]
};

const groupTagsDe: Record<string, string[]> = {
  "mericke-sluzby": ["KHS", "ČIŽP", "KÚ"],
  "studie-vypocty": ["EIA", "KHS", "KÚ"],
  "povolovaci-podklady": ["KÚ", "ČIŽP", "IPPC"],
  "eia-investice": ["EIA", "Investor", "Planer"],
  "evidence-reporting": ["ISPOP", "GHG", "Reporting"],
  "skoleni-podpora": ["Chemie", "Arbeitsschutz", "Praxis"]
};

function groupTagsForLocale(locale: Locale): Record<string, string[]> {
  if (locale === "en") return groupTagsEn;
  if (locale === "de") return groupTagsDe;
  return groupTagsCs;
}

type ServiceGroup = (typeof serviceGroupsCs)[number];

function ServiceCards({
  groupId,
  items,
  locale,
  viewServiceLabel,
  relatedAreasLabel,
  groupTags
}: {
  groupId: string;
  items: ServiceGroup["items"];
  locale: Locale;
  viewServiceLabel: string;
  relatedAreasLabel: string;
  groupTags: Record<string, string[]>;
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
  const common = useTranslations("common");
  const accordion = useTranslations("accordion");
  const groupIds = useMemo(() => groups.map((group) => group.id), [groups]);
  const { isOpen, onToggle } = useAccordionHashOpen(groupIds);
  const ariaVerbs =
    locale === "en" ? groupAriaVerbsEn : locale === "de" ? groupAriaVerbsDe : groupAriaVerbs;
  const groupTags = groupTagsForLocale(locale);

  return (
    <section className="section section-surface accordion-index-surface service-groups-accordion">
      <div className="container service-groups-accordion-inner">
        {groups.map((group) => {
          const ariaVerb = ariaVerbs[group.id] ?? group.title;

          return (
            <AccordionIndexDetails
              key={group.id}
              id={group.id}
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
                groupId={group.id}
                items={group.items}
                locale={locale}
                viewServiceLabel={common.viewService}
                relatedAreasLabel={common.relatedAreas}
                groupTags={groupTags}
              />
            </AccordionIndexDetails>
          );
        })}
      </div>
    </section>
  );
}
