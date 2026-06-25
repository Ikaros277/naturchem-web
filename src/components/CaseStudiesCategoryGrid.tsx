"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { useTranslations } from "@/lib/i18n/locale-context";
import { contactFormHref } from "@/lib/contact-url";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getServiceCategoryFromHref } from "@/lib/service-categories";
import type { CaseStudyCategory, LegacyCaseStudy } from "@/lib/case-studies";

type Props = {
  categories: CaseStudyCategory[];
};

export function CaseStudiesCategoryGrid({ categories }: Props) {
  const common = useTranslations("common");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const openCategory = categories.find((c) => c.slug === openSlug);

  const close = useCallback(() => setOpenSlug(null), []);

  useEffect(() => {
    if (!openSlug) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openSlug, close]);

  return (
    <>
      <div className="grid typicke-zakazky-examples-grid">
        {categories.map((cat) => {
          const category = getServiceCategoryFromHref(cat.serviceHref);

          return (
          <button
            key={cat.slug}
            type="button"
            className="card case-category-card"
            data-category={category ?? undefined}
            onClick={() => setOpenSlug(cat.slug)}
            aria-haspopup="dialog"
          >
            <div className="case-category-card-head">
              <ServiceIcon href={cat.serviceHref} />
              <h3>{cat.title}</h3>
            </div>
            <p className="muted case-category-card-short">{cat.short}</p>
            <span className="card-inline-link case-category-card-cta">
              {common.viewMore}
            </span>
          </button>
          );
        })}
      </div>

      {openCategory ? (
        <div className="case-study-modal-portal">
          <button
            type="button"
            className="case-study-modal-backdrop"
            aria-label={common.close}
            onClick={close}
          />
          <div
            ref={modalRef}
            className="case-study-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
          >
            <header className="case-study-modal-header">
              <div className="case-category-card-head">
                <ServiceIcon href={openCategory.serviceHref} />
                <h2 id={titleId}>{openCategory.title}</h2>
              </div>
              <button
                type="button"
                className="case-study-modal-close"
                onClick={close}
                aria-label={common.closeExamples}
              >
                ×
              </button>
            </header>
            <div className="case-study-modal-body">
              <p className="muted case-study-modal-lead">{openCategory.short}</p>
              <div className="case-study-modal-list">
                {openCategory.cases.map((item) => (
                  <CaseStudyDetail key={item.title} item={item} outputLabel={common.output} />
                ))}
              </div>
              <p className="case-study-modal-actions btn-row">
                <LocaleLink href={openCategory.serviceHref} className="button secondary" onClick={close}>
                  {common.relatedService}
                </LocaleLink>
                <LocaleLink href={contactFormHref} className="button" onClick={close}>
                  {common.requestService}
                </LocaleLink>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function CaseStudyDetail({ item, outputLabel }: { item: LegacyCaseStudy; outputLabel: string }) {
  return (
    <article className="card case-study-detail-card">
      <h3>{item.title}</h3>
      <p>{item.narrative}</p>
      <p className="muted">
        <strong>{outputLabel}:</strong> {item.output}
      </p>
    </article>
  );
}
