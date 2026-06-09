import Script from "next/script";

import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_VERSION } from "@/lib/cookie-consent";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

/**
 * Consent Mode v2 — výchozí stav „denied“ musí běžet dříve než načtení gtag.js.
 * @see https://developers.google.com/tag-platform/security/guides/consent
 */
export function GoogleConsentModeInit() {
  if (!gaId && !googleAdsId) return null;

  return (
    <Script id="google-consent-mode-init" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'denied',
          personalization_storage: 'denied',
          security_storage: 'granted',
          wait_for_update: 500,
          url_passthrough: true,
          ads_data_redaction: true
        });

        try {
          var raw = localStorage.getItem(${JSON.stringify(COOKIE_CONSENT_KEY)});
          if (!raw) return;
          var parsed = JSON.parse(raw);
          if (parsed.version !== ${JSON.stringify(COOKIE_CONSENT_VERSION)}) return;
          if (typeof parsed.statistics !== 'boolean' || typeof parsed.marketing !== 'boolean') return;

          gtag('consent', 'update', {
            analytics_storage: parsed.statistics ? 'granted' : 'denied',
            ad_storage: parsed.marketing ? 'granted' : 'denied',
            ad_user_data: parsed.marketing ? 'granted' : 'denied',
            ad_personalization: parsed.marketing ? 'granted' : 'denied'
          });
        } catch (e) {}
      `}
    </Script>
  );
}
