/**
 * GA4 – vlastní události jen s aktuálním souhlasem se statistikami.
 * Samotná přítomnost gtag není souhlas: fronta existuje už při bootstrapu
 * Consent Mode a po odvolání souhlasu může zůstat načtený Google tag.
 */
import { readCookieConsent } from "@/lib/cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function sendGtagEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;
  const consent = readCookieConsent();
  if (!consent?.statistics || !consent.updatedAt) return;
  try {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", eventName, params ?? {});
  } catch {
    // An optional tracker must never turn an accepted inquiry into a form error.
  }
}
