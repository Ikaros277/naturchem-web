import type { Locale } from "@/lib/i18n/locales";
import { localeDateTag } from "@/lib/i18n/locale-pick";

const ARTICLE_TIME_ZONE = "Europe/Prague";

function isDateOnlyString(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value.trim());
}

/**
 * Convert a calendar date (YYYY-MM-DD) to the UTC instant of local midnight
 * in Europe/Prague for that day.
 */
function pragueStartOfDayIso(dateOnly: string): string | undefined {
  const match = dateOnly.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return undefined;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!year || !month || !day) return undefined;

  // Iterate from UTC midnight until Prague wall-clock is Y-M-D 00:00:00.
  let utcMs = Date.UTC(year, month - 1, day, 0, 0, 0);
  for (let i = 0; i < 4; i += 1) {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: ARTICLE_TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23"
    }).formatToParts(new Date(utcMs));
    const read = (type: Intl.DateTimeFormatPartTypes) =>
      Number(parts.find((part) => part.type === type)?.value ?? NaN);
    const py = read("year");
    const pm = read("month");
    const pd = read("day");
    const ph = read("hour");
    const pmin = read("minute");
    const ps = read("second");
    if ([py, pm, pd, ph, pmin, ps].some((n) => Number.isNaN(n))) return undefined;

    const desiredAsMinutes = Date.UTC(year, month - 1, day, 0, 0, 0) / 60000;
    const actualAsMinutes = Date.UTC(py, pm - 1, pd, ph, pmin, ps) / 60000;
    const deltaMinutes = desiredAsMinutes - actualAsMinutes;
    if (deltaMinutes === 0) break;
    utcMs += deltaMinutes * 60000;
  }

  return new Date(utcMs).toISOString();
}

/** Normalizuje datum z front matter (string nebo Date z YAML) na ISO řetězec. */
export function normalizeArticleDate(value: unknown): string | undefined {
  if (value == null || value === "") return undefined;

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (isDateOnlyString(trimmed)) {
      return pragueStartOfDayIso(trimmed);
    }
    const date = new Date(trimmed);
    if (Number.isNaN(date.getTime())) return undefined;
    return date.toISOString();
  }

  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) return undefined;
    // YAML often parses YYYY-MM-DD as UTC midnight Date — treat as Prague calendar day.
    const iso = value.toISOString();
    if (iso.endsWith("T00:00:00.000Z")) {
      return pragueStartOfDayIso(iso.slice(0, 10));
    }
    return iso;
  }

  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

/** Datum pro zobrazení na webu. */
export function formatArticleDate(value: unknown, locale: Locale = "cs"): string | null {
  const iso = normalizeArticleDate(value);
  if (!iso) return null;
  return new Date(iso).toLocaleDateString(localeDateTag(locale), {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: ARTICLE_TIME_ZONE
  });
}
