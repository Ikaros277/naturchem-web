"use client";

import { useEffect } from "react";

/** Reveal the referenced native accordion without making the reference list client-rendered. */
export function ReferenceHashTarget({ groupIds }: { groupIds: string[] }) {
  useEffect(() => {
    function reveal() {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      if (!groupIds.includes(id)) return;
      const target = document.getElementById(id);
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        target.scrollIntoView({ block: "start", behavior: "instant" });
      }
    }
    const frame = window.requestAnimationFrame(reveal);
    window.addEventListener("hashchange", reveal);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", reveal);
    };
  }, [groupIds]);
  return null;
}
