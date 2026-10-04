"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCookieConsentState } from "@/components/CookieConsentBanner";
import { getTawkConfig } from "@/lib/live-chat";
import { canShowTawk } from "@/lib/chat-visibility";
import { guardChatPageTitle } from "@/lib/chat-page-title";
import { useLocale } from "@/lib/i18n/locale-context";
import styles from "./tawk-launcher.module.css";

type TawkApi = {
  hideWidget?: () => void;
  showWidget?: () => void;
  maximize?: () => void;
  onLoad?: () => void;
  onChatMinimized?: () => void;
};

const launcherLabels = {
  cs: "Napsat do chatu",
  en: "Open live chat",
  de: "Chat öffnen"
};

const mobileTawkMq = "(max-width: 1023px)";

function useIsMobileViewport() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

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
  const locale = useLocale();
  const consent = useCookieConsentState();
  const tawk = getTawkConfig();
  const isMobile = useIsMobileViewport();
  const pathname = usePathname();
  const visible = Boolean(tawk && canShowTawk(pathname, isMobile, Boolean(consent.updatedAt && consent.marketing)));
  const [requested, setRequested] = useState(false);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const host = window as Window & { Tawk_API?: TawkApi };
    const api = host.Tawk_API ??= {};
    const syncVisibility = () => {
      // The asynchronously loaded vendor script may replace the initial API object.
      if (visible && requested) {
        host.Tawk_API?.showWidget?.();
        host.Tawk_API?.maximize?.();
      } else host.Tawk_API?.hideWidget?.();
    };
    const onMinimized = () => {
      host.Tawk_API?.hideWidget?.();
      setRequested(false);
    };
    api.onLoad = syncVisibility;
    api.onChatMinimized = onMinimized;
    syncVisibility();
    return () => {
      if (api.onLoad === syncVisibility) api.onLoad = undefined;
      if (api.onChatMinimized === onMinimized) api.onChatMinimized = undefined;
      host.Tawk_API?.hideWidget?.();
    };
  }, [visible, requested]);

  useEffect(() => {
    if (!activated) return;
    return guardChatPageTitle(document);
  }, [activated]);

  // Also guard already-loaded iframes if the vendor reopens them after a resize.
  if (!tawk || !visible) return <span hidden data-tawk-suppressed="true" />;

  // No vendor script, proactive overlay or attention title until a visitor asks to chat.
  if (!requested) return (
    <>
      <span hidden data-tawk-suppressed="true" />
      <button type="button" className={styles.launcher} aria-label={launcherLabels[locale]} onClick={() => { setActivated(true); setRequested(true); }}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
        </svg>
        <span className={styles.launcherLabel} aria-hidden="true">{launcherLabels[locale]}</span>
      </button>
    </>
  );

  return (
    <Script id="tawk-to-live-chat" strategy="afterInteractive">
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
