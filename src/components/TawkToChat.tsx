"use client";

import Script from "next/script";
import { useCookieConsentState } from "@/components/CookieConsentBanner";
import { getTawkConfig } from "@/lib/live-chat";

export function TawkToChat() {
  const consent = useCookieConsentState();
  const tawk = getTawkConfig();

  if (!tawk || !consent.updatedAt) return null;

  return (
    <Script id="tawk-to-live-chat" strategy="lazyOnload">
      {`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/${tawk.propertyId}/${tawk.widgetId}';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
        })();
      `}
    </Script>
  );
}
