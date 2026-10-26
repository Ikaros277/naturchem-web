"use client";

import "./contact-offices-map.css";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useCookieConsentState } from "@/components/CookieConsentBanner";
import { ContactMapFallback } from "@/components/ContactMapFallback";
import { installDeferredMapActivation } from "@/lib/deferred-map-activation";

const DeferredOfficesMap = dynamic(
  () => import("./ContactOfficesMap").then(module => module.ContactOfficesMap),
  { ssr: false, loading: () => <ContactMapFallback variant="hero" loading /> }
);

export function ContactPageHeroMedia() {
  const consent = useCookieConsentState();
  const mapsAllowed = consent.updatedAt !== "" && consent.statistics;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !mapsAllowed || activated) return;
    return installDeferredMapActivation(container, () => setActivated(true));
  }, [mapsAllowed, activated]);

  return (
    <div ref={containerRef} className="contact-hero-map">
      {mapsAllowed && activated
        ? <DeferredOfficesMap variant="hero" />
        : <ContactMapFallback variant="hero" loading={mapsAllowed} />}
    </div>
  );
}
