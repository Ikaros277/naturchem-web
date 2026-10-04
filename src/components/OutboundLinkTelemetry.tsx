"use client";

import { useEffect } from "react";

import { useCookieConsentState } from "@/components/CookieConsentBanner";
import { sendGtagEvent } from "@/lib/gtag";
import { getInquiryCtaParams } from "@/lib/inquiry-cta-analytics";
import { getServiceSelectionParams } from "@/lib/service-selection-analytics";

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

    function onClick(event: MouseEvent) {
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
      const inquiryParams = getInquiryCtaParams(href, window.location.href);
      const placement = a.dataset.servicePlacement === "home_service_index" ? "home_service_index"
        : a.closest(".service-groups-accordion") ? "service_catalog"
        : a.closest(".article-related-services") ? "article_related_service" : null;
      const serviceParams = getServiceSelectionParams(href, window.location.href, placement);
      if (serviceParams) {
        sendGtagEvent("select_service", { ...serviceParams, page_path: window.location.pathname });
      }
      const audience = a.dataset.b2bAudience;
      if (audience && ["business_ehs", "environmental_partner", "project_public_sector"].includes(audience)) {
        // Only a public role identifier; never form content or contact query values.
        sendGtagEvent("select_audience", { audience, placement: "home_work_context", page_path: window.location.pathname });
      }

      // Čistý krok do poptávkové cesty. Původní click_cta zůstává kvůli historické návaznosti.
      if (inquiryParams) {
        sendGtagEvent("click_inquiry_cta", { ...params, ...inquiryParams });
      }

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

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [consent.statistics, consent.updatedAt]);

  return null;
}
