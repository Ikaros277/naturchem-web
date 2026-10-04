import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import { poradnaPageHref, poradnaPaginationLabels } from "@/lib/poradna-pagination";

export function PoradnaPagination({ current, count, locale, onPage }: {
  current: number; count: number; locale: Locale; onPage?: (page: number) => void;
}) {
  if (count <= 1) return null;
  const labels = poradnaPaginationLabels[locale];
  const control = (page: number, text: string, label: string, rel?: "prev" | "next") =>
    onPage ? (
      <button key={label} type="button" aria-label={label} aria-current={page === current ? "page" : undefined} onClick={() => onPage(page)}>{text}</button>
    ) : (
      <Link key={label} prefetch={false} href={poradnaPageHref(page, locale)} rel={rel} aria-label={label} aria-current={page === current ? "page" : undefined}>{text}</Link>
    );
  return (
    <nav className="poradna-pagination" aria-label={labels.navigation}>
      {current > 1 ? control(current - 1, "←", labels.previous, "prev") : null}
      {Array.from({ length: count }, (_, i) => control(i + 1, String(i + 1), `${labels.page} ${i + 1}`))}
      {current < count ? control(current + 1, "→", labels.next, "next") : null}
    </nav>
  );
}
