"use client";

import { useEffect, useState } from "react";
import { ContactOfficesMap } from "@/components/ContactOfficesMap";
import { HeroPhoto } from "@/components/HeroPhoto";
import type { HeroTheme } from "@/lib/hero-images";

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

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export function ContactPageHeroMedia({ theme }: { theme: HeroTheme }) {
  const isDesktop = useIsDesktopNav();
  const mounted = useMounted();

  if (!mounted || !isDesktop) {
    return <HeroPhoto theme={theme} priority />;
  }

  return <ContactOfficesMap variant="hero" />;
}

export function ContactPageOfficesMap() {
  const isDesktop = useIsDesktopNav();
  const mounted = useMounted();

  if (!mounted || isDesktop) return null;

  return <ContactOfficesMap variant="panel" />;
}
