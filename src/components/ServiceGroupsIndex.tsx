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

const categoryNavigation = {
  cs: { label: "Kategorie služeb", categories: ["Měření", "Studie a výpočty", "Dokumentace a povolení"], hints: ["Emise, hluk a pracovní prostředí", "Rozptyl, hluk a varianty záměrů"], titles: ["Měření", "Studie a výpočty", "Povolovací podklady", "EIA", "Evidence a chemie", "Školení"] },
  en: { label: "Service categories", categories: ["Measurements", "Studies and calculations", "Documentation and permits"], hints: ["Emissions, noise and workplace conditions", "Dispersion, noise and project alternatives"], titles: ["Measurements", "Studies", "Permitting", "EIA", "Reporting and chemicals", "Training"] },
  de: { label: "Leistungskategorien", categories: ["Messungen", "Studien und Berechnungen", "Dokumentation und Genehmigungen"], hints: ["Emissionen, Lärm und Arbeitsumgebung", "Ausbreitung, Lärm und Projektvarianten"], titles: ["Messungen", "Studien", "Genehmigungen", "UVP", "Berichte und Chemikalien", "Schulungen"] }
};

const primaryCategories = [
  { id: "measurement", icon: "pillar-mereni" },
  { id: "studies", icon: "pillar-studie" },
  { id: "docs", icon: "pillar-dokumentace" },
] as const;

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
  const { isOpen, onToggle } = useAccordionHashOpen(groupIds, groupIds[0]);
  const navigation = categoryNavigation[locale];
  const ariaVerbs =
    locale === "en" ? groupAriaVerbsEn : locale === "de" ? groupAriaVerbsDe : groupAriaVerbs;

  return (
    <section className="section section-surface accordion-index-surface service-groups-accordion">
      <div className="container service-groups-accordion-inner">
        <nav className="service-category-nav" aria-label={navigation.label}>
          {primaryCategories.map((category, categoryIndex) => {
            const categoryGroups = groups.filter(group =>
              (getServiceCategoryFromServiceGroupId(group.id) ?? "docs") === category.id
            );
            if (!categoryGroups.length) return null;
            const firstGroup = categoryGroups[0];
            return <div key={category.id} className="service-category-nav-group" data-service-index-category={category.id}>
              {categoryGroups.length === 1 ? <a
                className="service-category-nav-main"
                href={`#${firstGroup.id}`}
                onClick={() => onToggle(firstGroup.id, true)}
              >
                <ServiceIcon icon={category.icon} variant="inline" size={24} />
                <span className="service-category-nav-copy">
                  <span className="service-category-nav-title">{navigation.categories[categoryIndex]}</span>
                  <small>{navigation.hints[categoryIndex]}</small>
                </span>
                <span className="service-category-nav-arrow" aria-hidden="true">↓</span>
              </a> : <>
                <p className="service-category-nav-heading"><ServiceIcon icon={category.icon} variant="inline" size={24} /><span>{navigation.categories[categoryIndex]}</span></p>
                <div className="service-category-nav-links">
                  {categoryGroups.map(group => <a key={group.id} href={`#${group.id}`} onClick={() => onToggle(group.id, true)}>
                    <span>{navigation.titles[groups.indexOf(group)] ?? group.title}</span><span aria-hidden="true">↓</span>
                  </a>)}
                </div>
              </>}
            </div>;
          })}
        </nav>
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
