import type { CookieConsentCategories } from "@/lib/cookie-consent";

export type GtagConsentValue = "granted" | "denied";

export type GtagConsentUpdate = {
  analytics_storage: GtagConsentValue;
  ad_storage: GtagConsentValue;
  ad_user_data: GtagConsentValue;
  ad_personalization: GtagConsentValue;
};

/** Mapování naší cookie lišty na Google Consent Mode v2. */
export function consentCategoriesToGtagUpdate(
  categories: Pick<CookieConsentCategories, "statistics" | "marketing">
): GtagConsentUpdate {
  return {
    analytics_storage: categories.statistics ? "granted" : "denied",
    ad_storage: categories.marketing ? "granted" : "denied",
    ad_user_data: categories.marketing ? "granted" : "denied",
    ad_personalization: categories.marketing ? "granted" : "denied"
  };
}

/** Odešle aktuální stav souhlasu do gtag (GA4 / Google Ads). */
export function applyGoogleConsentMode(
  categories: Pick<CookieConsentCategories, "statistics" | "marketing">
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", consentCategoriesToGtagUpdate(categories));
}
