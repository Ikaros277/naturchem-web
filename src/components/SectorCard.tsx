"use client";

import Image from "next/image";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { shortenSectorCardLead } from "@/lib/excerpt";
import { getSectorHeroImageConfig } from "@/lib/custom-hero-photos";
import { notifyAccordionHashSync } from "@/lib/use-accordion-hash-open";
import type { CaseStudy } from "@/lib/case-studies";
import type { Sector } from "@/lib/sectors";

type ServiceTitle = { href: string; title: string };

type Props = {
  sector: Sector;
  caseStudies: CaseStudy[];
  serviceTitles: ServiceTitle[];
  labels: {
    detailPage: string;
    exampleFromPractice: string;
  };
};

function hasHashHref(href: string) {
  return href.includes("#");
}

function onHashLinkClick() {
  window.setTimeout(notifyAccordionHashSync, 0);
  window.setTimeout(notifyAccordionHashSync, 100);
  window.setTimeout(notifyAccordionHashSync, 300);
}

export function SectorCard({ sector, caseStudies, serviceTitles, labels }: Props) {
  const chipItems = [...sector.serviceTags.split(/[,;]/), ...sector.factors.split(/[,;]/)]
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item, index, items) => items.indexOf(item) === index)
    .slice(0, 5);

  const linkedStudy = caseStudies.find((study) => sector.caseStudyIds.includes(study.id));
  const primaryService = sector.serviceHrefs[0];
  const serviceTitleByHref = new Map(serviceTitles.map((item) => [item.href, item.title]));
  const hasDetailPage = sector.href.startsWith("/provozy-a-technologie/") && !sector.href.includes("#");
  const cardHref = hasDetailPage ? sector.href : (primaryService ?? sector.href);
  const isHashLink = hasHashHref(cardHref) && !hasDetailPage;
  const heroConfig = getSectorHeroImageConfig(sector.id);

  return (
    <article id={sector.id} className="sector-card card index-card sector-card-rich card-interactive">
      <LocaleLink
        href={cardHref}
        className="card-cover-link"
        aria-label={
          hasDetailPage ? `${sector.title} — ${labels.detailPage}` : sector.ariaLabel
        }
        scroll={isHashLink ? false : undefined}
        onClick={isHashLink ? onHashLinkClick : undefined}
      />

      <div className="sector-card-thumb">
        <div className="sector-card-thumb-media" aria-hidden="true">
          <Image
            src={heroConfig.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="sector-card-thumb-img"
            style={{ objectPosition: heroConfig.position ?? "center center" }}
          />
          <span className="sector-card-thumb-overlay" />
        </div>
        <h3 className="sector-card-thumb-label index-card-heading">{sector.title}</h3>
      </div>

      <div className="sector-card-body">
        <p className="sector-card-lead muted">{shortenSectorCardLead(sector.description)}</p>

        {chipItems.length > 0 ? (
          <ul className="sector-tag-list" aria-label={sector.title}>
            {chipItems.map((item) => (
              <li key={item}>
                <span className="sector-tag">{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="sector-card-footer">
          {hasDetailPage ? (
            <span className="sector-card-footer-hint">{labels.detailPage}</span>
          ) : null}
          {primaryService && (!hasDetailPage || primaryService !== cardHref) ? (
            <LocaleLink href={primaryService} className="sector-card-footer-link card-interactive-nested">
              {serviceTitleByHref.get(primaryService) ?? labels.detailPage}
            </LocaleLink>
          ) : null}
          {linkedStudy ? (
            <LocaleLink
              href={`/typicke-zakazky#${linkedStudy.id}`}
              className="sector-card-footer-link card-interactive-nested"
            >
              {labels.exampleFromPractice}
            </LocaleLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}

