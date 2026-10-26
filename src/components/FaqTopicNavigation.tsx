"use client";

import { useEffect } from "react";

type Props = {
  categories: { id: string; title: string }[];
  categoriesLabel: string;
};

/** Keep native FAQ links and the compact mobile category selector in sync. */
export function FaqTopicNavigation({ categories, categoriesLabel }: Props) {
  useEffect(() => {
    const syncActiveTopic = () => {
      let hash = window.location.hash.replace(/^#/, "");
      try { hash = decodeURIComponent(hash); } catch { /* Ignore malformed external fragments. */ }
      const target = document.getElementById(hash);
      if (target instanceof HTMLDetailsElement && target.classList.contains("faq-category")) target.open = true;
      const topicSelect = document.querySelector<HTMLSelectElement>(".faq-mobile-topics select");
      if (topicSelect && Array.from(topicSelect.options).some(option => option.value === hash)) topicSelect.value = hash;
      document.querySelectorAll<HTMLAnchorElement>(".faq-tile").forEach(tile => {
        const active = Boolean(hash) && tile.getAttribute("href") === `#${hash}`;
        tile.classList.toggle("faq-tile--active", active);
        if (active) tile.setAttribute("aria-current", "location");
        else tile.removeAttribute("aria-current");
      });
    };
    const onTopicClick = (event: MouseEvent) => {
      const tile = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a.faq-tile") : null;
      if (!tile) return;
      const target = document.getElementById(tile.getAttribute("href")?.replace(/^#/, "") ?? "");
      if (target instanceof HTMLDetailsElement) target.open = true;
    };
    syncActiveTopic();
    window.addEventListener("hashchange", syncActiveTopic);
    document.addEventListener("click", onTopicClick);
    return () => {
      window.removeEventListener("hashchange", syncActiveTopic);
      document.removeEventListener("click", onTopicClick);
    };
  }, []);

  return <label className="faq-mobile-topics"><span>{categoriesLabel}</span>
    <select defaultValue="" onChange={event => {
      const id = event.target.value;
      const target = document.getElementById(id);
      if (target instanceof HTMLDetailsElement) target.open = true;
      window.location.hash = id;
      target?.scrollIntoView({ block: "start" });
    }}>
      <option value="" disabled>{categoriesLabel}</option>
      {categories.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}
    </select>
  </label>;
}
