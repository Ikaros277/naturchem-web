"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { CaseStudyTileThumb } from "@/components/CaseStudyTileThumb";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { useTranslations } from "@/lib/i18n/locale-context";
import { contactFormHref } from "@/lib/contact-url";
import { getCaseStudyById } from "@/lib/case-studies-client";
import {
  getServiceCategoryFromCaseStudyCategoryId
} from "@/lib/service-categories";
import { type CaseStudy, interleaveCaseStudiesByCategory } from "@/lib/case-studies";
import type { CaseStudyListing } from "@/lib/case-study-listing";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";

type ServiceTitle = { href: string; title: string };

type Props = {
  locale: Locale;
  caseStudyListings: CaseStudyListing[];
  serviceTitles: ServiceTitle[];
  categoryFilters: ReadonlyArray<{ id: string; label: string }>;
};

export function CaseStudiesHub({ locale, caseStudyListings, serviceTitles, categoryFilters }: Props) {
  const common = useTranslations("common");
  const caseStudiesUi = useTranslations("caseStudies");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const listingIds = useMemo(
    () => new Set(caseStudyListings.map((study) => study.id)),
    [caseStudyListings]
  );

  const serviceTitleByHref = useMemo(
    () => new Map(serviceTitles.map((item) => [item.href, item.title])),
    [serviceTitles]
  );

  const filtered = useMemo(() => {
    const list = caseStudyListings.filter((study) => {
      if (categoryFilter !== "all" && study.categoryId !== categoryFilter) return false;
      return true;
    });
    return categoryFilter === "all" ? interleaveCaseStudiesByCategory(list) : list;
  }, [caseStudyListings, categoryFilter]);

  const close = useCallback(() => {
    setOpenId(null);
    setActiveStudy(null);
    const url = window.location.pathname + window.location.search;
    window.history.replaceState(null, "", url);
  }, []);

  const openFromHash = useCallback(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || !listingIds.has(hash)) {
      setOpenId(null);
      setActiveStudy(null);
      return;
    }
    setOpenId(hash);
  }, [listingIds]);

  useEffect(() => {
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [openFromHash]);

  useEffect(() => {
    if (!openId) {
      setActiveStudy(null);
      return;
    }

    let cancelled = false;
    setDetailLoading(true);
    void getCaseStudyById(openId, locale).then((study) => {
      if (cancelled) return;
      setActiveStudy(study ?? null);
      setDetailLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [openId, locale]);

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

  const activeListing = openId ? caseStudyListings.find((study) => study.id === openId) : undefined;

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
          {categoryFilters.map((item) => (
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
        {filtered.map((study) => {
          const category = getServiceCategoryFromCaseStudyCategoryId(study.categoryId);

          return (
          <button
            key={study.id}
            id={study.id}
            type="button"
            className="card case-study-hub-tile"
            data-category={category ?? undefined}
            onClick={() => handleOpen(study.id)}
            aria-haspopup="dialog"
          >
            <CaseStudyTileThumb study={study} />
            <span className="case-study-hub-tile-body">
              <span className="case-study-hub-tags">
                <span className="case-study-tag case-study-tag--category">{study.category}</span>
                <span className="case-study-tag">{study.facilityType}</span>
              </span>
              <span className="case-study-hub-tile-title">{study.title}</span>
              <span className="muted case-study-hub-perex">{study.shortDescription}</span>
              {study.relatedServices.length > 0 ? (
                <span className="case-study-service-tags" aria-hidden="true">
                  {study.relatedServices.map((service) => (
                    <span key={service} className="case-study-service-tag">
                      {service}
                    </span>
                  ))}
                </span>
              ) : null}
              <span className="card-inline-link">{caseStudiesUi.showDetail}</span>
            </span>
          </button>
          );
        })}
      </div>

      {openId && activeListing ? (
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
                  <span className="case-study-tag case-study-tag--category">{activeListing.category}</span>
                  <span className="case-study-tag">{activeListing.facilityType}</span>
                </span>
                <h2 id={titleId}>{activeListing.title}</h2>
                <p className="muted case-study-hub-modal-lead">{activeListing.shortDescription}</p>
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
              {detailLoading || !activeStudy ? (
                <p className="muted">Načítání…</p>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
