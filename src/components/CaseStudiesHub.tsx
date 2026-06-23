"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { useTranslations } from "@/lib/i18n/locale-context";
import { contactFormHref } from "@/lib/contact-url";
import {
  CASE_STUDY_CATEGORIES,
  caseStudySearchBlob,
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

function normalizeSearch(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function CaseStudiesHub({ locale, caseStudies, serviceTitles }: Props) {
  const common = useTranslations("common");
  const caseStudiesUi = useTranslations("caseStudies");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const detailsPrefix = useId();
  const searchInputId = `${detailsPrefix}-search`;

  const serviceTitleByHref = useMemo(
    () => new Map(serviceTitles.map((item) => [item.href, item.title])),
    [serviceTitles]
  );

  const normalizedQuery = normalizeSearch(searchQuery.trim());

  const filtered = useMemo(() => {
    return caseStudies.filter((study) => {
      if (categoryFilter !== "all" && study.categoryId !== categoryFilter) return false;
      if (!normalizedQuery) return true;
      return normalizeSearch(caseStudySearchBlob(study)).includes(normalizedQuery);
    });
  }, [caseStudies, categoryFilter, normalizedQuery]);

  const openFromHash = useCallback(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const match = caseStudies.find((study) => study.id === hash);
    if (match) setOpenId(match.id);
  }, [caseStudies]);

  useEffect(() => {
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [openFromHash]);

  const toggleStudy = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const sectorHref = (sectorId?: string) => {
    if (!sectorId) return null;
    return localizeHref(`/provozy-a-technologie#${sectorId}`, locale);
  };

  return (
    <div className="case-studies-hub">
      <div className="case-studies-search">
        <label className="mini-label" htmlFor={searchInputId}>
          {caseStudiesUi.searchLabel}
        </label>
        <input
          id={searchInputId}
          type="search"
          className="case-studies-search-input"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder={caseStudiesUi.searchPlaceholder}
          autoComplete="off"
        />
      </div>

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
        {filtered.map((study) => {
          const isOpen = openId === study.id;
          const panelId = `${detailsPrefix}-${study.id}`;
          return (
            <article
              key={study.id}
              id={study.id}
              className={`card case-study-hub-card${isOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="case-study-hub-summary"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleStudy(study.id)}
              >
                <span className="case-study-hub-tags">
                  <span className="case-study-tag case-study-tag--category">{study.category}</span>
                  <span className="case-study-tag">{study.facilityType}</span>
                </span>
                <h3>{study.title}</h3>
                <p className="muted case-study-hub-perex">{study.shortDescription}</p>
                {study.relatedServices.length > 0 ? (
                  <ul className="case-study-service-tags" aria-label={caseStudiesUi.relatedServices}>
                    {study.relatedServices.slice(0, 4).map((service) => (
                      <li key={service}>
                        <span className="case-study-service-tag">{service}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <span className="card-inline-link">
                  {isOpen ? caseStudiesUi.hideDetail : caseStudiesUi.showDetail}
                </span>
              </button>

              {isOpen ? (
                <div id={panelId} className="case-study-hub-detail">
                  <dl className="case-study-fields">
                    <div>
                      <dt>{caseStudiesUi.fieldFacility}</dt>
                      <dd>{study.facilityType}</dd>
                    </div>
                    <div>
                      <dt>{caseStudiesUi.fieldSituation}</dt>
                      <dd>{study.situation}</dd>
                    </div>
                    <div>
                      <dt>{caseStudiesUi.fieldTask}</dt>
                      <dd>{study.task}</dd>
                    </div>
                    <div>
                      <dt>{caseStudiesUi.fieldApproach}</dt>
                      <dd>{study.naturchemApproach}</dd>
                    </div>
                    <div>
                      <dt>{caseStudiesUi.fieldOutput}</dt>
                      <dd>{study.output}</dd>
                    </div>
                    <div>
                      <dt>{caseStudiesUi.fieldUsedFor}</dt>
                      <dd>{study.usedFor}</dd>
                    </div>
                    <div>
                      <dt>{caseStudiesUi.fieldAuthorities}</dt>
                      <dd>{study.authorities}</dd>
                    </div>
                  </dl>

                  {study.tags.length > 0 ? (
                    <ul className="case-study-tag-list" aria-label={caseStudiesUi.fieldTags}>
                      {study.tags.map((tag) => (
                        <li key={tag}>
                          <span className="case-study-detail-tag">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {study.serviceHrefs.length > 0 ? (
                    <div className="case-study-hub-links">
                      <p className="mini-label">{caseStudiesUi.relatedServices}</p>
                      <ul className="compact-list">
                        {study.serviceHrefs.map((href) => (
                          <li key={href}>
                            <LocaleLink href={href}>
                              {serviceTitleByHref.get(href) ?? href}
                            </LocaleLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {study.sectorId ? (
                    <p>
                      <LocaleLink href={sectorHref(study.sectorId)!} className="text-link">
                        {caseStudiesUi.relatedSector}
                      </LocaleLink>
                    </p>
                  ) : null}

                  <p className="case-study-hub-cta muted">{study.ctaText}</p>
                  <p className="btn-row">
                    <LocaleLink href={contactFormHref} className="button">
                      {common.requestService}
                    </LocaleLink>
                  </p>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
