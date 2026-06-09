"use client";

import { useEffect } from "react";

import { useCookieConsentState } from "@/components/CookieConsentBanner";
import { sendGtagEvent } from "@/lib/gtag";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const downloadFilePattern = /\.(pdf|doc|docx|xls|xlsx|zip)$/i;

function linkText(link: HTMLAnchorElement): string | undefined {
  const text = link.textContent?.replace(/\s+/g, " ").trim();
  return text || link.getAttribute("aria-label") || undefined;
}

/**
 * Zachytí důležité obchodní interakce — pouze po souhlasu se statistickými cookies.
 */
export function OutboundLinkTelemetry() {
  const consent = useCookieConsentState();

  useEffect(() => {
    if (!gaId || !consent.statistics || !consent.updatedAt) return;

    function onPointerDown(event: Event) {
      if (!(event.target instanceof Element)) return;
      const a = event.target.closest("a[href]");
      if (!(a instanceof HTMLAnchorElement)) return;
      const href = a.getAttribute("href");
      if (!href) return;
      const params = {
        link_url: href,
        link_text: linkText(a),
        page_path: window.location.pathname
      };

      if (href.startsWith("mailto:")) {
        sendGtagEvent("click_email", params);
      } else if (href.startsWith("tel:")) {
        sendGtagEvent("click_phone", params);
      } else if (downloadFilePattern.test(href.split("?")[0] ?? "")) {
        sendGtagEvent("file_download", params);
      } else if (a.classList.contains("button") || a.classList.contains("section-link-inline")) {
        sendGtagEvent("click_cta", params);
      }
    }

    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [consent.statistics, consent.updatedAt]);

  return null;
}
