"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ServiceIcon } from "@/components/ServiceIcon";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { getFaqCategoryIconKey } from "@/lib/service-icons";
import type { FaqCategory, FaqItem } from "@/lib/faq";

export type FaqUiLabels = {
  searchLabel: string;
  searchPlaceholder: string;
  categoriesNavAria: string;
  emptyTitle: string;
  emptyText: string;
  tip: string;
  legal: string;
  related: string;
};

type Props = {
  categories: FaqCategory[];
  uiLabels: FaqUiLabels;
  locale: Locale;
};

function FaqAccordionItem({
  item,
  uiLabels,
  locale
}: {
  item: FaqItem;
  uiLabels: FaqUiLabels;
  locale: Locale;
}) {
  const link = (href: string) => localizeHref(href, locale);

  return (
    <details className="faq-accordion">
      <summary className="faq-accordion-summary">{item.q}</summary>
      <div className="faq-accordion-body">
        {item.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
        {item.tip ? (
          <p className="faq-tip">
            <strong>{uiLabels.tip}</strong> {item.tip}
          </p>
        ) : null}
        {item.legal ? (
          <details className="faq-legal">
            <summary>{uiLabels.legal}</summary>
            <p>{item.legal.summary}</p>
            {item.legal.refs?.length ? (
              <ul>
                {item.legal.refs.map((ref) => (
                  <li key={ref.href}>
                    <a href={ref.href} target="_blank" rel="noopener noreferrer">
                      {ref.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </details>
        ) : null}
        {item.links?.length ? (
          <p className="faq-related">
            <strong>{uiLabels.related}</strong>{" "}
            {item.links.map((itemLink, i) => (
              <span key={`${itemLink.href}-${itemLink.label}`}>
                {i > 0 ? " | " : null}
                <Link href={link(itemLink.href)}>{itemLink.label}</Link>
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </details>
  );
}

export function FaqPageContent({ categories, uiLabels, locale }: Props) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase(locale === "en" ? "en-US" : "cs-CZ");
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
            .toLocaleLowerCase(locale === "en" ? "en-US" : "cs-CZ");
          return haystack.includes(normalizedQuery);
        })
      }))
      .filter((category) => category.items.length > 0);
  }, [categories, locale, normalizedQuery]);

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
          <div className="faq-accordion-list">
            {category.items.map((item) => (
              <FaqAccordionItem key={item.q} item={item} uiLabels={uiLabels} locale={locale} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
