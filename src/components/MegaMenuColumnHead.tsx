"use client";

import type { ReactNode } from "react";

import { LocaleLink } from "@/lib/i18n/locale-link";
import { notifyAccordionHashSync } from "@/lib/use-accordion-hash-open";
import type { MegaMenuGroupId } from "@/lib/megamenu-types";

function hasHashHref(href: string) {
  return href.includes("#");
}

function onHashLinkClick() {
  window.setTimeout(notifyAccordionHashSync, 0);
  window.setTimeout(notifyAccordionHashSync, 100);
  window.setTimeout(notifyAccordionHashSync, 300);
}

type Props = {
  href: string;
  groupId?: MegaMenuGroupId;
  icon: ReactNode;
  title: string;
  subtitle?: string;
  onNavigate?: () => void;
  className?: string;
};

export function MegaMenuColumnHead({
  href,
  groupId,
  icon,
  title,
  subtitle,
  onNavigate,
  className = "mega-menu-column-head"
}: Props) {
  const isHash = hasHashHref(href);

  return (
    <LocaleLink
      href={href}
      scroll={isHash ? false : undefined}
      onClick={() => {
        if (isHash) onHashLinkClick();
        onNavigate?.();
      }}
      className={[className, "mega-menu-column-head-link"].filter(Boolean).join(" ")}
    >
      <span className={`mega-menu-column-badge mega-menu-column-badge--${groupId ?? "default"}`}>
        {icon}
      </span>
      <div className="mega-menu-column-heading">
        <span className="mega-menu-column-title">{title}</span>
        {subtitle ? <span className="mega-menu-column-sub">{subtitle}</span> : null}
      </div>
    </LocaleLink>
  );
}

export function MegaMenuMobileHeadLink({
  href,
  groupId,
  icon,
  title,
  subtitle,
  onNavigate
}: Props) {
  const isHash = hasHashHref(href);

  return (
    <LocaleLink
      href={href}
      scroll={isHash ? false : undefined}
      onClick={(event) => {
        event.stopPropagation();
        if (isHash) onHashLinkClick();
        onNavigate?.();
      }}
      className="mega-menu-mobile-head-link"
    >
      <span className={`mega-menu-column-badge mega-menu-column-badge--${groupId ?? "default"}`}>
        {icon}
      </span>
      <span className="mega-menu-mobile-heading">
        <span className="mega-menu-column-title">{title}</span>
        {subtitle ? <span className="mega-menu-column-sub">{subtitle}</span> : null}
      </span>
    </LocaleLink>
  );
}
