"use client";

import { useEffect, useState } from "react";
import { useCookieConsentState } from "@/components/CookieConsentBanner";
import { ContactOfficesMap } from "@/components/ContactOfficesMap";
import { HeroPhoto } from "@/components/HeroPhoto";
import type { HeroTheme } from "@/lib/hero-images";

function useMapsAllowed() {
  const consent = useCookieConsentState();
  return consent.updatedAt !== "" && consent.statistics;
}

function useIsDesktopNav() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mqDesktop.matches);
    update();
    mqDesktop.addEventListener("change", update);
    return () => mqDesktop.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function ContactPageHeroMedia({ theme }: { theme: HeroTheme }) {
  const isDesktop = useIsDesktopNav();
  const mapsAllowed = useMapsAllowed();

  if (isDesktop && mapsAllowed) {
    return <ContactOfficesMap variant="hero" />;
  }

  return <HeroPhoto theme={theme} priority />;
}

export function ContactPageOfficesMap() {
  const isDesktop = useIsDesktopNav();

  if (isDesktop) return null;

  return <ContactOfficesMap variant="panel" />;
}
