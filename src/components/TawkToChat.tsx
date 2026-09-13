"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCookieConsentState } from "@/components/CookieConsentBanner";
import { getTawkConfig } from "@/lib/live-chat";
import { isChatExcludedPath } from "@/lib/chat-visibility";

type TawkApi = { hideWidget?: () => void; showWidget?: () => void; onLoad?: () => void };

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
  const pathname = usePathname();
  const isHomepage = pathname === "/" || /^\/(en|de)\/?$/.test(pathname);

  const visible = Boolean(tawk && consent.updatedAt && consent.marketing && !isMobile && !isHomepage && !isChatExcludedPath(pathname));

  useEffect(() => {
    const host = window as Window & { Tawk_API?: TawkApi };
    const api = host.Tawk_API ??= {};
    const syncVisibility = () => {
      if (visible) api.showWidget?.();
      else api.hideWidget?.();
    };
    api.onLoad = syncVisibility;
    syncVisibility();
    return () => {
      if (api.onLoad === syncVisibility) api.onLoad = undefined;
      api.hideWidget?.();
    };
  }, [visible]);

  if (!tawk || !visible) return null;

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
