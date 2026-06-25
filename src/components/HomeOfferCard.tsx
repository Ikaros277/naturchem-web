"use client";

import { LocaleLink } from "@/lib/i18n/locale-link";
import { useTranslations } from "@/lib/i18n/locale-context";
import { ServiceIcon } from "@/components/ServiceIcon";
import { notifyAccordionHashSync } from "@/lib/use-accordion-hash-open";
import { getServiceCategoryFromIconKey } from "@/lib/service-categories";
import type { ServiceIconKey } from "@/lib/service-icons";

type OfferLink = {
  label: string;
  href: string;
};

export type HomeOfferPillar = {
  icon: ServiceIconKey;
  title: string;
  teaser: string;
  text: string;
  cta: string;
  href: string;
  tags: string[];
  links: OfferLink[];
};

function hasHashHref(href: string) {
  return href.includes("#");
}

function onHashLinkClick() {
  window.setTimeout(notifyAccordionHashSync, 0);
  window.setTimeout(notifyAccordionHashSync, 100);
  window.setTimeout(notifyAccordionHashSync, 300);
}

function OfferPanel({ pillar, areasLabel }: { pillar: HomeOfferPillar; areasLabel: string }) {
  const scroll = hasHashHref(pillar.href) ? false : undefined;

  return (
    <>
      <ul className="tag-row home-offer-tags" aria-label={areasLabel}>
        {pillar.tags.map((tag) => (
          <li key={tag}>
            <span className="tag">{tag}</span>
          </li>
        ))}
      </ul>
      <p className="muted">{pillar.text}</p>
      <ul className="home-offer-links">
        {pillar.links.map((link) => (
          <li key={link.href}>
            <LocaleLink href={link.href} className="card-interactive-nested">
              {link.label}
            </LocaleLink>
          </li>
        ))}
      </ul>
      <LocaleLink
        href={pillar.href}
        scroll={scroll}
        onClick={hasHashHref(pillar.href) ? onHashLinkClick : undefined}
        className="button home-offer-cta card-interactive-nested"
      >
        {pillar.cta}
      </LocaleLink>
    </>
  );
}

export function HomeOfferCard({ pillar }: { pillar: HomeOfferPillar }) {
  const t = useTranslations("common");
  const scroll = hasHashHref(pillar.href) ? false : undefined;
  const category = getServiceCategoryFromIconKey(pillar.icon);

  return (
    <article
      className="card institutional-card home-offer-card card-interactive"
      data-category={category ?? undefined}
    >
      <LocaleLink
        href={pillar.href}
        scroll={scroll}
        onClick={scroll === false ? onHashLinkClick : undefined}
        className="card-cover-link"
        aria-label={`${pillar.title} — ${pillar.cta}`}
      />
      <header className="home-offer-card-head home-offer-card-head--desktop">
        <ServiceIcon icon={pillar.icon} variant="card" className="home-offer-icon" />
        <h3>{pillar.title}</h3>
      </header>
      <div className="home-offer-panel home-offer-panel--desktop">
        <OfferPanel pillar={pillar} areasLabel={t.areas} />
      </div>
      <details className="home-offer-details home-offer-details--mobile">
        <summary className="home-offer-summary">
          <span className="home-offer-summary-head">
            <span className="home-offer-card-head">
              <ServiceIcon icon={pillar.icon} variant="card" className="home-offer-icon" />
              <span className="home-offer-card-title">{pillar.title}</span>
            </span>
            <span className="home-offer-chevron" aria-hidden="true" />
          </span>
          <span className="home-offer-teaser muted">{pillar.teaser}</span>
        </summary>
        <div className="home-offer-panel home-offer-panel--mobile">
          <OfferPanel pillar={pillar} areasLabel={t.areas} />
        </div>
      </details>
    </article>
  );
}
