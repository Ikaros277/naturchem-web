"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { useCookieConsentState } from "@/components/CookieConsentBanner";
import { getTawkConfig } from "@/lib/live-chat";

const mobileTawkMq = "(max-width: 1023px)";

function useIsMobileViewport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(mobileTawkMq);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function TawkToChat() {
  const consent = useCookieConsentState();
  const tawk = getTawkConfig();
  const isMobile = useIsMobileViewport();

  if (!tawk || !consent.updatedAt || isMobile) return null;

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
