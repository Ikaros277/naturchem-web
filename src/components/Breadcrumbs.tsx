"use client";

import { LocaleLink } from "@/lib/i18n/locale-link";
import { useTranslations } from "@/lib/i18n/locale-context";

type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const t = useTranslations("common");

  return (
    <nav className="breadcrumbs" aria-label={t.breadcrumbsAria}>
      {items.map((item, i) => (
        <span key={item.name}>
          {item.href ? <LocaleLink href={item.href}>{item.name}</LocaleLink> : item.name}
          {i < items.length - 1 ? " / " : ""}
        </span>
      ))}
    </nav>
  );
}
