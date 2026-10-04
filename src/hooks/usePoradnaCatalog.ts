"use client";

import { useCallback, useRef, useState } from "react";
import type { PoradnaArticleDisplay } from "@/components/PoradnaFilterableList";
import type { Locale } from "@/lib/i18n/locales";
import { poradnaListingIndexUrl } from "@/lib/poradna-search-index";

/** A static, versioned file, requested only when a visitor uses the filters. */
export function usePoradnaCatalog(locale: Locale) {
  const [articles, setArticles] = useState<PoradnaArticleDisplay[] | null>(null);
  const [error, setError] = useState(false);
  const promise = useRef<Promise<PoradnaArticleDisplay[]> | null>(null);
  const ensureLoaded = useCallback(async () => {
    if (articles) return articles;
    if (promise.current) return promise.current;
    setError(false);
    promise.current = fetch(poradnaListingIndexUrl(locale))
      .then(response => {
        if (!response.ok) throw new Error("Article catalog unavailable");
        return response.json() as Promise<PoradnaArticleDisplay[]>;
      })
      .then(entries => { setArticles(entries); return entries; })
      .catch(() => { promise.current = null; setError(true); return []; });
    return promise.current;
  }, [articles, locale]);
  return { articles, error, ensureLoaded };
}
