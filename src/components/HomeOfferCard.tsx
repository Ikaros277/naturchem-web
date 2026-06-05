"use client";

import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import { notifyAccordionHashSync } from "@/lib/use-accordion-hash-open";
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

function OfferPanel({ pillar }: { pillar: HomeOfferPillar }) {
  const scroll = hasHashHref(pillar.href) ? false : undefined;

  return (
    <>
      <ul className="tag-row home-offer-tags" aria-label="Typické oblasti">
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
            <Link href={link.href} className="card-interactive-nested">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={pillar.href}
        scroll={scroll}
        onClick={hasHashHref(pillar.href) ? onHashLinkClick : undefined}
        className="button home-offer-cta card-interactive-nested"
      >
        {pillar.cta}
      </Link>
    </>
  );
}

export function HomeOfferCard({ pillar }: { pillar: HomeOfferPillar }) {
  const scroll = hasHashHref(pillar.href) ? false : undefined;

  return (
    <article className="card institutional-card home-offer-card card-interactive">
      <Link
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
        <OfferPanel pillar={pillar} />
      </div>
      <details className="home-offer-details home-offer-details--mobile">
        <summary className="home-offer-summary">
          <div className="home-offer-summary-head">
            <header className="home-offer-card-head">
              <ServiceIcon icon={pillar.icon} variant="card" className="home-offer-icon" />
              <h3>{pillar.title}</h3>
            </header>
            <span className="home-offer-chevron" aria-hidden="true" />
          </div>
          <p className="home-offer-teaser muted">{pillar.teaser}</p>
        </summary>
        <div className="home-offer-panel home-offer-panel--mobile">
          <OfferPanel pillar={pillar} />
        </div>
      </details>
    </article>
  );
}
