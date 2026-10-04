"use client";

import { useCallback, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/locales";
import {
  poradnaSearchIndexUrl,
  type PoradnaSearchIndexEntry
} from "@/lib/poradna-search-index";

export function usePoradnaSearchIndex(locale: Locale) {
  const [index, setIndex] = useState<Map<string, string> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const loadPromise = useRef<Promise<Map<string, string>> | null>(null);

  const load = useCallback(async () => {
    if (index) return index;
    if (loadPromise.current) return loadPromise.current;

    setLoading(true);
    setError(false);
    loadPromise.current = fetch(poradnaSearchIndexUrl(locale))
      .then((response) => {
        if (!response.ok) throw new Error(`search index ${response.status}`);
        return response.json() as Promise<PoradnaSearchIndexEntry[]>;
      })
      .then((entries) => {
        const map = new Map(entries.map((entry) => [entry.slug, entry.s]));
        setIndex(map);
        return map;
      })
      .catch(() => {
        loadPromise.current = null;
        setError(true);
        return new Map<string, string>();
      })
      .finally(() => setLoading(false));

    return loadPromise.current;
  }, [index, locale]);

  return { index, loading, error, ensureLoaded: load };
}
