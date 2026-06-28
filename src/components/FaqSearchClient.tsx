"use client";

import { useEffect, useState } from "react";

type Props = {
  searchLabel: string;
  searchPlaceholder: string;
  emptyTitle: string;
  emptyText: string;
};

function ensureFaqSearchIndex(): void {
  document.querySelectorAll<HTMLElement>(".faq-accordion").forEach((element) => {
    if (element.dataset.faqSearch) return;
    const summary = element.querySelector(".faq-accordion-summary")?.textContent ?? "";
    const body = element.querySelector(".faq-accordion-body")?.textContent ?? "";
    element.dataset.faqSearch = `${summary} ${body}`.toLocaleLowerCase("cs");
  });
}

/** Vyhledávání FAQ přes DOM — bez duplikace obsahu v HTML atributech. */
export function FaqSearchClient({ searchLabel, searchPlaceholder, emptyTitle, emptyText }: Props) {
  const [query, setQuery] = useState("");
  const [showEmpty, setShowEmpty] = useState(false);
  const [indexed, setIndexed] = useState(false);

  useEffect(() => {
    if (!indexed) {
      ensureFaqSearchIndex();
      setIndexed(true);
    }
  }, [indexed]);

  useEffect(() => {
    if (!indexed) return;

    const normalized = query.trim().toLocaleLowerCase("cs");
    const accordions = document.querySelectorAll<HTMLElement>(".faq-accordion[data-faq-search]");
    const categories = document.querySelectorAll<HTMLElement>(".faq-category");
    let visibleAccordions = 0;

    accordions.forEach((element) => {
      const haystack = element.dataset.faqSearch ?? "";
      const match = !normalized || haystack.includes(normalized);
      element.hidden = !match;
      if (match) visibleAccordions += 1;
    });

    categories.forEach((category) => {
      if (!normalized) {
        category.hidden = false;
        return;
      }
      const hasVisible = category.querySelector('.faq-accordion:not([hidden])');
      category.hidden = !hasVisible;
    });

    setShowEmpty(normalized.length > 0 && visibleAccordions === 0);
  }, [indexed, query]);

  useEffect(() => {
    const syncActiveTile = () => {
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      document.querySelectorAll<HTMLAnchorElement>(".faq-tile").forEach((tile) => {
        const target = tile.getAttribute("href")?.replace(/^#/, "") ?? "";
        tile.classList.toggle("faq-tile--active", Boolean(hash) && target === hash);
        tile.setAttribute("aria-current", hash && target === hash ? "location" : "false");
      });
    };

    syncActiveTile();
    window.addEventListener("hashchange", syncActiveTile);
    return () => window.removeEventListener("hashchange", syncActiveTile);
  }, []);

  const onSearchFocus = () => {
    if (!indexed) {
      ensureFaqSearchIndex();
      setIndexed(true);
    }
  };

  return (
    <>
      <label className="faq-search">
        <span>{searchLabel}</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={onSearchFocus}
          placeholder={searchPlaceholder}
          autoComplete="off"
        />
      </label>

      {showEmpty ? (
        <section className="section faq-category faq-search-empty" aria-live="polite">
          <h2>{emptyTitle}</h2>
          <p className="muted">{emptyText}</p>
        </section>
      ) : null}
    </>
  );
}
