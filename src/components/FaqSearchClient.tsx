"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  locale: string;
  searchLabel: string;
  searchPlaceholder: string;
  emptyTitle: string;
  emptyText: string;
  categories: { id: string; title: string }[];
  categoriesLabel: string;
};

function ensureFaqSearchIndex(locale: string): void {
  document.querySelectorAll<HTMLElement>(".faq-accordion").forEach((element) => {
    if (element.dataset.faqSearch) return;
    const summary = element.querySelector(".faq-accordion-summary")?.textContent ?? "";
    const body = element.querySelector(".faq-accordion-body")?.textContent ?? "";
    element.dataset.faqSearch = `${summary} ${body}`.toLocaleLowerCase(locale);
  });
}

/** Vyhledávání FAQ přes DOM — bez duplikace obsahu v HTML atributech. */
export function FaqSearchClient({ locale, searchLabel, searchPlaceholder, emptyTitle, emptyText, categories, categoriesLabel }: Props) {
  const [query, setQuery] = useState("");
  const [showEmpty, setShowEmpty] = useState(false);
  const indexed = useRef(false);
  const previousOpen = useRef<Map<string, boolean> | null>(null);
  const restoreSearch = useCallback(() => {
    setQuery("");
    setShowEmpty(false);
    if (!previousOpen.current) return;
    document.querySelectorAll<HTMLElement>(".faq-category, .faq-accordion").forEach(element => {
      element.hidden = false;
      if (element instanceof HTMLDetailsElement && element.classList.contains("faq-category")) {
        element.open = previousOpen.current?.get(element.id) ?? false;
      }
    });
    previousOpen.current = null;
  }, []);

  useEffect(() => {
    if (!query && !previousOpen.current) return;
    if (!indexed.current) {
      ensureFaqSearchIndex(locale);
      indexed.current = true;
    }

    const normalized = query.trim().toLocaleLowerCase(locale);
    const accordions = document.querySelectorAll<HTMLElement>(".faq-accordion[data-faq-search]");
    const categories = document.querySelectorAll<HTMLElement>(".faq-category");
    let visibleAccordions = 0;
    if (normalized && !previousOpen.current) previousOpen.current = new Map(Array.from(categories).map(category => [category.id, category instanceof HTMLDetailsElement && category.open]));

    accordions.forEach((element) => {
      const haystack = element.dataset.faqSearch ?? "";
      const match = !normalized || haystack.includes(normalized);
      element.hidden = !match;
      if (match) visibleAccordions += 1;
    });

    categories.forEach((category) => {
      if (!normalized) {
        category.hidden = false;
        if (category instanceof HTMLDetailsElement && previousOpen.current) category.open = previousOpen.current.get(category.id) ?? false;
        return;
      }
      const hasVisible = category.querySelector('.faq-accordion:not([hidden])');
      category.hidden = !hasVisible;
      if (category instanceof HTMLDetailsElement) category.open = Boolean(hasVisible);
    });
    if (!normalized) previousOpen.current = null;

    setShowEmpty(normalized.length > 0 && visibleAccordions === 0);
  }, [locale, query]);

  useEffect(() => {
    const syncActiveTile = () => {
      let hash = window.location.hash.replace(/^#/, "");
      try { hash = decodeURIComponent(hash); } catch { /* Ignore malformed external fragments. */ }
      const target = document.getElementById(hash);
      if (target instanceof HTMLDetailsElement && target.classList.contains("faq-category")) target.open = true;
      const topicSelect = document.querySelector<HTMLSelectElement>(".faq-mobile-topics select");
      if (topicSelect && Array.from(topicSelect.options).some(option => option.value === hash)) topicSelect.value = hash;
      document.querySelectorAll<HTMLAnchorElement>(".faq-tile").forEach((tile) => {
        const target = tile.getAttribute("href")?.replace(/^#/, "") ?? "";
        tile.classList.toggle("faq-tile--active", Boolean(hash) && target === hash);
        if (hash && target === hash) {
          tile.setAttribute("aria-current", "location");
        } else {
          tile.removeAttribute("aria-current");
        }
      });
    };

    syncActiveTile();
    const onHashChange = () => {
      let hash = window.location.hash.replace(/^#/, "");
      try { hash = decodeURIComponent(hash); } catch { /* Ignore malformed external fragments. */ }
      const target = document.getElementById(hash);
      if (target instanceof HTMLDetailsElement && target.classList.contains("faq-category")) restoreSearch();
      syncActiveTile();
    };
    const onTopicClick = (event: MouseEvent) => {
      const tile = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a.faq-tile") : null;
      if (!tile) return;
      restoreSearch();
      const target = document.getElementById(tile.getAttribute("href")?.replace(/^#/, "") ?? "");
      if (target instanceof HTMLDetailsElement) target.open = true;
    };
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onTopicClick);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onTopicClick);
    };
  }, [restoreSearch]);

  const onSearchFocus = () => {
    if (!indexed.current) {
      ensureFaqSearchIndex(locale);
      indexed.current = true;
    }
  };

  return (
    <>
      <label className="faq-search" id="faq-search">
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
      <label className="faq-mobile-topics"><span>{categoriesLabel}</span>
        <select defaultValue="" onChange={event => {
          const id = event.target.value;
          // Restore the pre-search state, including a prior empty result, before opening the topic.
          restoreSearch();
          const target = document.getElementById(id);
          if (target instanceof HTMLDetailsElement) target.open = true;
          window.location.hash = id;
          target?.scrollIntoView({ block: "start" });
        }}>
          <option value="" disabled>{categoriesLabel}</option>
          {categories.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}
        </select>
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
