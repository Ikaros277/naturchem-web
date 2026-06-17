"use client";

import { useMemo, useState } from "react";
import { FaqAccordionList, type FaqAccordionUiLabels } from "@/components/FaqAccordionList";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Locale } from "@/lib/i18n/locales";
import { localeTag } from "@/lib/i18n/locale-pick";
import { getFaqCategoryIconKey } from "@/lib/service-icons";
import type { FaqCategory } from "@/lib/faq";

export type FaqUiLabels = FaqAccordionUiLabels & {
  searchLabel: string;
  searchPlaceholder: string;
  categoriesNavAria: string;
  emptyTitle: string;
  emptyText: string;
};

type Props = {
  categories: FaqCategory[];
  uiLabels: FaqUiLabels;
  locale: Locale;
};

export function FaqPageContent({ categories, uiLabels, locale }: Props) {
  const [query, setQuery] = useState("");
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

  return (
    <>
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
        {categories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} className="card faq-tile">
            <span className="faq-tile-icon-wrap" aria-hidden="true">
              <ServiceIcon icon={getFaqCategoryIconKey(cat.id)} variant="plain" size={28} className="faq-tile-icon" />
            </span>
            <span className="faq-tile-label">{cat.tileLabel}</span>
          </a>
        ))}
      </nav>

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
          <FaqAccordionList
            items={category.items}
            uiLabels={accordionLabels}
            locale={locale}
          />
        </section>
      ))}
    </>
  );
}
