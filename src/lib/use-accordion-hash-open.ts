"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export const ACCORDION_HASH_SYNC_EVENT = "naturchem:accordion-hash-sync";

export function notifyAccordionHashSync() {
  window.dispatchEvent(new Event(ACCORDION_HASH_SYNC_EVENT));
}

function getHashTarget(validIds: readonly string[]): string | null {
  if (typeof window === "undefined") return null;
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  return validIds.includes(id) ? id : null;
}

function scrollToAccordion(id: string) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

export function useAccordionHashOpen(validIds: readonly string[]) {
  const pathname = usePathname();
  const validIdsKey = validIds.join("\0");
  const stableValidIds = useMemo(() => validIds, [validIdsKey]);
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  const syncFromHash = useCallback(() => {
    const id = getHashTarget(stableValidIds);
    if (!id) return;

    setOpenIds((current) => {
      if (current.size === 1 && current.has(id)) return current;
      return new Set([id]);
    });
    scrollToAccordion(id);
  }, [stableValidIds]);

  useLayoutEffect(() => {
    syncFromHash();
    const timers = [50, 150, 400, 800, 1200].map((ms) => setTimeout(syncFromHash, ms));
    return () => timers.forEach(clearTimeout);
  }, [pathname, syncFromHash]);

  useEffect(() => {
    let lastHash = window.location.hash;

    function onHashUpdate() {
      const current = window.location.hash;
      if (current === lastHash) return;
      lastHash = current;
      syncFromHash();
    }

    window.addEventListener("hashchange", onHashUpdate);
    window.addEventListener("popstate", onHashUpdate);
    window.addEventListener(ACCORDION_HASH_SYNC_EVENT, syncFromHash);

    // Next.js client navigations between /sluzby#... links do not always fire hashchange.
    const interval = setInterval(onHashUpdate, 100);

    return () => {
      window.removeEventListener("hashchange", onHashUpdate);
      window.removeEventListener("popstate", onHashUpdate);
      window.removeEventListener(ACCORDION_HASH_SYNC_EVENT, syncFromHash);
      clearInterval(interval);
    };
  }, [syncFromHash]);

  function isOpen(id: string) {
    return openIds.has(id);
  }

  function onToggle(id: string, open: boolean) {
    setOpenIds((current) => {
      const next = new Set(current);
      if (open) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  return { isOpen, onToggle };
}
