import { applyGoogleConsentMode } from "@/lib/google-consent-mode";

export const COOKIE_CONSENT_KEY = "naturchem_cookie_consent";
export const COOKIE_CONSENT_VERSION = "1";
export const COOKIE_CONSENT_EVENT = "naturchem:cookie-consent";

export type CookieConsentCategories = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
};

export type CookieConsentRecord = CookieConsentCategories & {
  version: string;
  updatedAt: string;
};

export const defaultCookieConsent: CookieConsentRecord = {
  version: COOKIE_CONSENT_VERSION,
  necessary: true,
  statistics: false,
  marketing: false,
  updatedAt: ""
};

export function readCookieConsent(): CookieConsentRecord | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsentRecord;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;
    if (typeof parsed.statistics !== "boolean" || typeof parsed.marketing !== "boolean") {
      return null;
    }
    return { ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function writeCookieConsent(categories: Pick<CookieConsentCategories, "statistics" | "marketing">) {
  const record: CookieConsentRecord = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    statistics: categories.statistics,
    marketing: categories.marketing,
    updatedAt: new Date().toISOString()
  };

  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(record));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: record }));
  applyGoogleConsentMode(categories);

  return record;
}

export function hasCookieConsentChoice(): boolean {
  return readCookieConsent() !== null;
}
