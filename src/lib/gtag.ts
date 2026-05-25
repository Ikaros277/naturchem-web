/**
 * GA4 – bezpečné volání `gtag('event', …)` pouze v prohlížeči po načtení skriptu.
 * Aktivní jen pokud je nastaveno NEXT_PUBLIC_GA_MEASUREMENT_ID a gtag existuje.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function sendGtagEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params ?? {});
}
