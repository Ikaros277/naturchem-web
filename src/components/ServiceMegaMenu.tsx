"use client";

import { MegaMenuColumnHead, MegaMenuMobileHeadLink } from "@/components/MegaMenuColumnHead";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { HeaderLabels, ServiceHeaderMegaGroup } from "@/lib/header-nav-data";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { serviceMegaGroupHeadHrefs } from "@/lib/megamenu-head-hrefs";
import { getServiceCategoryFromHref } from "@/lib/service-categories";
import { serviceMegaGroupIcons, type ServiceMegaGroupId } from "@/lib/megamenu-types";
import { notifyAccordionHashSync } from "@/lib/use-accordion-hash-open";

function hasHashHref(href: string) {
  return href.includes("#");
}

function onHashLinkClick() {
  window.setTimeout(notifyAccordionHashSync, 0);
  window.setTimeout(notifyAccordionHashSync, 100);
  window.setTimeout(notifyAccordionHashSync, 300);
}

function MegaMenuLinkRow({
  href,
  label,
  description,
  groupId,
  onNavigate
}: {
  href: string;
  label: string;
  description: string;
  groupId?: ServiceMegaGroupId;
  onNavigate?: () => void;
}) {
  return (
    <li>
      <LocaleLink
        href={href}
        scroll={hasHashHref(href) ? false : undefined}
        onClick={hasHashHref(href) ? onHashLinkClick : onNavigate}
        className="mega-menu-link-row"
        data-category={getServiceCategoryFromHref(href) ?? undefined}
      >
        <span className={`mega-menu-link-icon mega-menu-link-icon--${groupId ?? "default"}`}>
          <ServiceIcon href={href} variant="plain" size={18} />
        </span>
        <span className="mega-menu-link-copy">
          <span className="mega-menu-link-label">{label}</span>
          {description ? <span className="mega-menu-link-desc">{description}</span> : null}
        </span>
      </LocaleLink>
    </li>
  );
}

function MegaMenuColumn({
  group,
  onNavigate
}: {
  group: ServiceHeaderMegaGroup;
  onNavigate?: () => void;
}) {
  const groupId = group.id;
  const headHref = groupId ? serviceMegaGroupHeadHrefs[groupId] : group.links[0]?.href;

  return (
    <div className={`mega-menu-column mega-menu-column--${groupId ?? "default"}`}>
      {headHref ? (
        <MegaMenuColumnHead
          href={headHref}
          groupId={groupId}
          icon={
            groupId ? (
              <ServiceIcon icon={serviceMegaGroupIcons[groupId]} variant="plain" size={22} />
            ) : null
          }
          title={group.title}
          subtitle={group.subtitle}
          onNavigate={onNavigate}
        />
      ) : null}
      <ul className="mega-menu-link-list">
        {group.links.map((item) => (
          <MegaMenuLinkRow
            key={`${group.title}-${item.href}`}
            href={item.href}
            label={item.label}
            description={item.description ?? ""}
            groupId={groupId}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </div>
  );
}

type Props = {
  labels: HeaderLabels;
  serviceMegaGroups: readonly ServiceHeaderMegaGroup[];
  onNavigate?: () => void;
};

export function ServiceMegaMenu({ labels, serviceMegaGroups, onNavigate }: Props) {
  return (
    <div id="nav-mega-sluzby" className="nav-dropdown nav-dropdown-wide nav-mega-panel" aria-label={labels.services}>
      <div className="mega-menu-columns">
        {serviceMegaGroups.map((group) => (
          <MegaMenuColumn key={group.id ?? group.title} group={group} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

export function MobileServiceMegaGroups({
  groups,
  onNavigate
}: {
  groups: readonly ServiceHeaderMegaGroup[];
  onNavigate?: () => void;
}) {
  return (
    <>
      {groups.map((group) => {
        const headHref = group.id ? serviceMegaGroupHeadHrefs[group.id] : group.links[0]?.href;

        return (
        <details
          key={group.id ?? group.title}
          className={`nav-mobile-details nav-mobile-nested mega-menu-mobile-group mega-menu-mobile-group--${group.id ?? "default"}`}
        >
          <summary>
            {headHref ? (
              <MegaMenuMobileHeadLink
                href={headHref}
                groupId={group.id}
                icon={
                  group.id ? (
                    <ServiceIcon icon={serviceMegaGroupIcons[group.id]} variant="plain" size={18} />
                  ) : null
                }
                title={group.title}
                subtitle={group.subtitle}
                onNavigate={onNavigate}
              />
            ) : (
              <span className="mega-menu-mobile-summary">
                {group.id ? (
                  <span className={`mega-menu-column-badge mega-menu-column-badge--${group.id}`}>
                    <ServiceIcon icon={serviceMegaGroupIcons[group.id]} variant="plain" size={18} />
                  </span>
                ) : null}
                <span className="mega-menu-mobile-heading">
                  <span className="mega-menu-column-title">{group.title}</span>
                  {group.subtitle ? <span className="mega-menu-column-sub">{group.subtitle}</span> : null}
                </span>
              </span>
            )}
          </summary>
          <ul className="mega-menu-link-list mega-menu-link-list--mobile">
            {group.links.map((item) => (
              <MegaMenuLinkRow
                key={`${group.title}-${item.href}`}
                href={item.href}
                label={item.label}
                description={item.description ?? ""}
                groupId={group.id}
                onNavigate={onNavigate}
              />
            ))}
          </ul>
        </details>
        );
      })}
    </>
  );
}
