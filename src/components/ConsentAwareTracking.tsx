"use client";

import { useEffect } from "react";
import Script from "next/script";

import { useCookieConsentState } from "@/components/CookieConsentBanner";
import { applyGoogleConsentMode } from "@/lib/google-consent-mode";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const linkedInPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

function getPrimaryGoogleTagId(): string | undefined {
  return gaId || googleAdsId;
}

function GoogleTagScripts() {
  const primaryId = getPrimaryGoogleTagId();
  if (!primaryId) return null;

  const configLines: string[] = [];
  if (gaId) {
    configLines.push(`gtag('config', '${gaId}', { anonymize_ip: true });`);
  }
  if (googleAdsId) {
    configLines.push(`gtag('config', '${googleAdsId}');`);
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`} strategy="afterInteractive" />
      <Script id="google-tags" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${configLines.join("\n")}
        `}
      </Script>
    </>
  );
}

function MarketingScripts() {
  return (
    <>
      {metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}

      {linkedInPartnerId ? (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "${linkedInPartnerId}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
      ) : null}
    </>
  );
}

/**
 * Google tagy běží s Consent Mode v2 (výchozí denied → update po volbě v liště).
 * gtag.js se načte až po souhlasu se statistikami nebo marketingem (Ads).
 * Meta / LinkedIn se načtou až po marketingovém souhlasu.
 */
export function ConsentAwareTracking() {
  const consent = useCookieConsentState();
  const hasChoice = Boolean(consent.updatedAt);
  const marketingAllowed = hasChoice && consent.marketing;
  const googleTagsAllowed =
    hasChoice && (consent.statistics || (consent.marketing && Boolean(googleAdsId)));

  useEffect(() => {
    if (!getPrimaryGoogleTagId()) return;
    if (!hasChoice) return;
    applyGoogleConsentMode(consent);
  }, [consent, hasChoice]);

  return (
    <>
      {googleTagsAllowed && getPrimaryGoogleTagId() ? <GoogleTagScripts /> : null}
      {marketingAllowed ? <MarketingScripts /> : null}
    </>
  );
}
