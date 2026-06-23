"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaqAccordionList, type FaqAccordionUiLabels } from "@/components/FaqAccordionList";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Locale } from "@/lib/i18n/locales";
import { localeTag } from "@/lib/i18n/locale-pick";
import { localizeHref } from "@/lib/i18n/navigation";
import { getFaqCategoryIconKey } from "@/lib/service-icons";
import type { FaqCategory } from "@/lib/faq";
import { company } from "@/lib/site";
import { contactFormHref, contactUrl } from "@/lib/contact-url";

export type FaqUiLabels = FaqAccordionUiLabels & {
  searchLabel: string;
  searchPlaceholder: string;
  categoriesNavAria: string;
  emptyTitle: string;
  emptyText: string;
  contactStripLabel?: string;
  submitMaterialsCta?: string;
  inquiryCta?: string;
};

type Props = {
  categories: FaqCategory[];
  uiLabels: FaqUiLabels;
  locale: Locale;
};

function readHashCategory(validIds: readonly string[]): string | null {
  if (typeof window === "undefined") return null;
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  return validIds.includes(id) ? id : null;
}

export function FaqPageContent({ categories, uiLabels, locale }: Props) {
  const [query, setQuery] = useState("");
  const categoryIds = useMemo(() => categories.map((category) => category.id), [categories]);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const syncActiveFromHash = useCallback(() => {
    setActiveCategoryId(readHashCategory(categoryIds));
  }, [categoryIds]);

  useEffect(() => {
    syncActiveFromHash();
    window.addEventListener("hashchange", syncActiveFromHash);
    return () => window.removeEventListener("hashchange", syncActiveFromHash);
  }, [syncActiveFromHash]);

  const normalizedQuery = query.trim().toLocaleLowerCase(localeTag(locale));
  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return categories;

    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => {
          const haystack = [
            category.title,
            item.q,
            ...item.paragraphs,
            item.tip ?? "",
            item.legal?.summary ?? ""
          ]
            .join(" ")
            .toLocaleLowerCase(localeTag(locale));
          return haystack.includes(normalizedQuery);
        })
      }))
      .filter((category) => category.items.length > 0);
  }, [categories, locale, normalizedQuery]);

  const accordionLabels: FaqAccordionUiLabels = {
    tip: uiLabels.tip,
    legal: uiLabels.legal,
    related: uiLabels.related
  };

  const link = (href: string) => localizeHref(href, locale);

  return (
    <div className="faq-page-content">
      <label className="faq-search">
        <span>{uiLabels.searchLabel}</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={uiLabels.searchPlaceholder}
        />
      </label>

      <nav className="faq-tiles" aria-label={uiLabels.categoriesNavAria}>
        {categories.map((cat) => {
          const isActive = activeCategoryId === cat.id;
          return (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`card faq-tile${isActive ? " faq-tile--active" : ""}`}
              aria-current={isActive ? "location" : undefined}
              onClick={() => setActiveCategoryId(cat.id)}
            >
              <span className="faq-tile-icon-wrap" aria-hidden="true">
                <ServiceIcon
                  icon={getFaqCategoryIconKey(cat.id)}
                  variant="plain"
                  size={28}
                  className="faq-tile-icon"
                />
              </span>
              <span className="faq-tile-label">{cat.tileLabel}</span>
            </a>
          );
        })}
      </nav>

      <aside className="faq-contact-strip" aria-label={uiLabels.contactStripLabel ?? "Rychlý kontakt"}>
        <Link href={link(contactUrl("Nejsem si jistý"))} className="button faq-contact-strip-cta">
          {uiLabels.submitMaterialsCta ?? "Poslat podklady k posouzení"}
        </Link>
        <Link href={link(contactFormHref)} className="button secondary faq-contact-strip-cta">
          {uiLabels.inquiryCta ?? "Nezávazně poptat"}
        </Link>
        <a className="faq-contact-strip-link" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        <a className="faq-contact-strip-link" href={`tel:${company.phones[0].replace(/\s/g, "")}`}>
          {company.phones[0]}
        </a>
      </aside>

      {filteredCategories.length === 0 ? (
        <section className="section faq-category">
          <h2>{uiLabels.emptyTitle}</h2>
          <p className="muted">{uiLabels.emptyText}</p>
        </section>
      ) : null}

      {filteredCategories.map((category) => (
        <section key={category.id} id={category.id} className="section faq-category">
          <h2 className="faq-category-heading">
            <ServiceIcon
              icon={getFaqCategoryIconKey(category.id)}
              variant="plain"
              size={32}
              className="faq-category-icon"
            />
            {category.title}
          </h2>
          <div className="faq-category-body">
            <FaqAccordionList
              items={category.items}
              uiLabels={accordionLabels}
              locale={locale}
              layout="grid"
            />
          </div>
          {category.ctas.length > 0 ? (
            <div className="btn-row faq-category-ctas">
              {category.ctas.map((cta, index) => (
                <Link
                  key={cta.href}
                  href={link(cta.href)}
                  className={index === 0 ? "button" : "button secondary"}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}
