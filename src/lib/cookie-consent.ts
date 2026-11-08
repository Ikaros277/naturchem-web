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
  clarity?: boolean;
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

export function writeCookieConsent(categories: Pick<CookieConsentCategories, "statistics" | "marketing"> & { clarity?: boolean }) {
  const record: CookieConsentRecord = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    statistics: categories.statistics,
    marketing: categories.marketing,
    ...(typeof categories.clarity === "boolean" ? { clarity: categories.clarity } : {}),
    updatedAt: new Date().toISOString()
  };

  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(record));
  // Withdrawal also works on excluded pages and after the pilot has stopped.
  if (record.clarity === false) clearClarityStorage();
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: record }));
  applyGoogleConsentMode(categories);

  return record;
}

export function clearClarityStorage(win: Window = window, doc: Document = document) {
  for (const name of ["_clck", "_clsk"]) {
    for (const domain of ["", "; Domain=" + win.location.hostname, "; Domain=naturchem.cz"]) {
      try { doc.cookie = name + "=; Max-Age=0; Path=/; SameSite=Lax; Secure" + domain; } catch { /* storage may be blocked */ }
    }
  }
  try { win.sessionStorage.removeItem("_cltk"); } catch { /* storage may be blocked */ }
}

export function hasCookieConsentChoice(): boolean {
  return readCookieConsent() !== null;
}
