"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { useTranslations } from "@/lib/i18n/locale-context";
import { contactFormHref } from "@/lib/contact-url";
import {
  CASE_STUDY_CATEGORIES,
  type CaseStudy
} from "@/lib/case-studies";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";

type ServiceTitle = { href: string; title: string };

type Props = {
  locale: Locale;
  caseStudies: CaseStudy[];
  serviceTitles: ServiceTitle[];
};

export function CaseStudiesHub({ locale, caseStudies, serviceTitles }: Props) {
  const common = useTranslations("common");
  const caseStudiesUi = useTranslations("caseStudies");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const serviceTitleByHref = useMemo(
    () => new Map(serviceTitles.map((item) => [item.href, item.title])),
    [serviceTitles]
  );

  const filtered = useMemo(() => {
    return caseStudies.filter((study) => {
      if (categoryFilter !== "all" && study.categoryId !== categoryFilter) return false;
      return true;
    });
  }, [caseStudies, categoryFilter]);

  const close = useCallback(() => {
    setOpenId(null);
    const url = window.location.pathname + window.location.search;
    window.history.replaceState(null, "", url);
  }, []);

  const openFromHash = useCallback(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) {
      setOpenId(null);
      return;
    }
    const match = caseStudies.find((study) => study.id === hash);
    if (match) setOpenId(match.id);
  }, [caseStudies]);

  useEffect(() => {
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [openFromHash]);

  useEffect(() => {
    if (!openId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openId, close]);

  const handleOpen = (id: string) => {
    setOpenId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const sectorHref = (sectorId?: string) => {
    if (!sectorId) return null;
    return localizeHref(`/provozy-a-technologie#${sectorId}`, locale);
  };

  const activeStudy = openId ? caseStudies.find((study) => study.id === openId) : undefined;

  return (
    <div className="case-studies-hub">
      <div className="case-studies-filters" role="group" aria-label={caseStudiesUi.filterCategoryAria}>
        <p className="mini-label">{caseStudiesUi.filterCategory}</p>
        <div className="case-studies-filter-row">
          <button
            type="button"
            className={`case-studies-filter-chip${categoryFilter === "all" ? " is-active" : ""}`}
            onClick={() => setCategoryFilter("all")}
            aria-pressed={categoryFilter === "all"}
          >
            {caseStudiesUi.filterAll}
          </button>
          {CASE_STUDY_CATEGORIES.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`case-studies-filter-chip${categoryFilter === item.id ? " is-active" : ""}`}
              onClick={() => setCategoryFilter(item.id)}
              aria-pressed={categoryFilter === item.id}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <p className="muted case-studies-filter-count" aria-live="polite">
        {caseStudiesUi.resultCount.replace("{count}", String(filtered.length))}
      </p>

      <div className="case-studies-grid">
        {filtered.map((study) => (
          <button
            key={study.id}
            id={study.id}
            type="button"
            className="card case-study-hub-tile"
            onClick={() => handleOpen(study.id)}
            aria-haspopup="dialog"
          >
            <span className="case-study-hub-tags">
              <span className="case-study-tag case-study-tag--category">{study.category}</span>
              <span className="case-study-tag">{study.facilityType}</span>
            </span>
            <span className="case-study-hub-tile-title">{study.title}</span>
            <span className="muted case-study-hub-perex">{study.shortDescription}</span>
            {study.relatedServices.length > 0 ? (
              <span className="case-study-service-tags" aria-hidden="true">
                {study.relatedServices.slice(0, 3).map((service) => (
                  <span key={service} className="case-study-service-tag">
                    {service}
                  </span>
                ))}
              </span>
            ) : null}
            <span className="card-inline-link">{caseStudiesUi.showDetail}</span>
          </button>
        ))}
      </div>

      {activeStudy ? (
        <div className="case-study-modal-portal case-study-hub-modal-portal">
          <button
            type="button"
            className="case-study-modal-backdrop"
            aria-label={common.close}
            onClick={close}
          />
          <div
            ref={modalRef}
            className="case-study-modal case-study-hub-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
          >
            <header className="case-study-modal-header case-study-hub-modal-header">
              <div className="case-study-hub-modal-head">
                <span className="case-study-hub-tags">
                  <span className="case-study-tag case-study-tag--category">{activeStudy.category}</span>
                  <span className="case-study-tag">{activeStudy.facilityType}</span>
                </span>
                <h2 id={titleId}>{activeStudy.title}</h2>
                <p className="muted case-study-hub-modal-lead">{activeStudy.shortDescription}</p>
              </div>
              <button
                type="button"
                className="case-study-modal-close"
                onClick={close}
                aria-label={common.close}
              >
                ×
              </button>
            </header>
            <div className="case-study-modal-body case-study-hub-modal-body">
              <dl className="case-study-fields">
                <div>
                  <dt>{caseStudiesUi.fieldFacility}</dt>
                  <dd>{activeStudy.facilityType}</dd>
                </div>
                <div>
                  <dt>{caseStudiesUi.fieldSituation}</dt>
                  <dd>{activeStudy.situation}</dd>
                </div>
                <div>
                  <dt>{caseStudiesUi.fieldTask}</dt>
                  <dd>{activeStudy.task}</dd>
                </div>
                <div>
                  <dt>{caseStudiesUi.fieldApproach}</dt>
                  <dd>{activeStudy.naturchemApproach}</dd>
                </div>
                <div>
                  <dt>{caseStudiesUi.fieldOutput}</dt>
                  <dd>{activeStudy.output}</dd>
                </div>
                <div>
                  <dt>{caseStudiesUi.fieldUsedFor}</dt>
                  <dd>{activeStudy.usedFor}</dd>
                </div>
                <div>
                  <dt>{caseStudiesUi.fieldAuthorities}</dt>
                  <dd>{activeStudy.authorities}</dd>
                </div>
              </dl>

              {activeStudy.tags.length > 0 ? (
                <ul className="case-study-tag-list" aria-label={caseStudiesUi.fieldTags}>
                  {activeStudy.tags.map((tag) => (
                    <li key={tag}>
                      <span className="case-study-detail-tag">{tag}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {activeStudy.serviceHrefs.length > 0 ? (
                <div className="case-study-hub-links">
                  <p className="mini-label">{caseStudiesUi.relatedServices}</p>
                  <ul className="compact-list">
                    {activeStudy.serviceHrefs.map((href) => (
                      <li key={href}>
                        <LocaleLink href={href} onClick={close}>
                          {serviceTitleByHref.get(href) ?? href}
                        </LocaleLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {activeStudy.sectorId ? (
                <p>
                  <LocaleLink href={sectorHref(activeStudy.sectorId)!} className="text-link" onClick={close}>
                    {caseStudiesUi.relatedSector}
                  </LocaleLink>
                </p>
              ) : null}

              <p className="case-study-hub-cta muted">{activeStudy.ctaText}</p>
              <p className="btn-row case-study-modal-actions">
                <LocaleLink href={contactFormHref} className="button" onClick={close}>
                  {common.requestService}
                </LocaleLink>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
