"use client";

import { ServiceIcon } from "@/components/ServiceIcon";
import type { HeaderLabels, ONasHeaderMegaGroup } from "@/lib/header-nav-data";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { oNasMegaGroupIcons, type ONasMegaGroupId } from "@/lib/megamenu-types";
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
  groupId?: ONasMegaGroupId;
  onNavigate?: () => void;
}) {
  return (
    <li>
      <LocaleLink
        href={href}
        scroll={hasHashHref(href) ? false : undefined}
        onClick={hasHashHref(href) ? onHashLinkClick : onNavigate}
        className="mega-menu-link-row"
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
  group: ONasHeaderMegaGroup;
  onNavigate?: () => void;
}) {
  const groupId = group.id;

  return (
    <div className={`mega-menu-column mega-menu-column--${groupId ?? "default"}`}>
      <div className="mega-menu-column-head">
        <span className={`mega-menu-column-badge mega-menu-column-badge--${groupId ?? "default"}`}>
          {groupId ? (
            <ServiceIcon icon={oNasMegaGroupIcons[groupId]} variant="plain" size={22} />
          ) : null}
        </span>
        <div className="mega-menu-column-heading">
          <span className="mega-menu-column-title">{group.title}</span>
          {group.subtitle ? <span className="mega-menu-column-sub">{group.subtitle}</span> : null}
        </div>
      </div>
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
  oNasMegaGroups: readonly ONasHeaderMegaGroup[];
  onNavigate?: () => void;
};

export function ONasMegaMenu({ labels, oNasMegaGroups, onNavigate }: Props) {
  return (
    <div id="nav-mega-o-nas" className="nav-dropdown nav-dropdown-wide nav-mega-panel" aria-label={labels.about}>
      <div className="mega-menu-columns">
        {oNasMegaGroups.map((group) => (
          <MegaMenuColumn key={group.id ?? group.title} group={group} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

export function MobileONasMegaGroups({
  groups,
  onNavigate
}: {
  groups: readonly ONasHeaderMegaGroup[];
  onNavigate?: () => void;
}) {
  return (
    <>
      {groups.map((group) => (
        <details
          key={group.id ?? group.title}
          className={`nav-mobile-details nav-mobile-nested mega-menu-mobile-group mega-menu-mobile-group--${group.id ?? "default"}`}
        >
          <summary>
            <span className="mega-menu-mobile-summary">
              {group.id ? (
                <span className={`mega-menu-column-badge mega-menu-column-badge--${group.id}`}>
                  <ServiceIcon icon={oNasMegaGroupIcons[group.id]} variant="plain" size={18} />
                </span>
              ) : null}
              <span className="mega-menu-mobile-heading">
                <span className="mega-menu-column-title">{group.title}</span>
                {group.subtitle ? <span className="mega-menu-column-sub">{group.subtitle}</span> : null}
              </span>
            </span>
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
      ))}
    </>
  );
}
