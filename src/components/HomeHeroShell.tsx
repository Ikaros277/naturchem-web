"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { HeroPhoto } from "@/components/HeroPhoto";
import { getHeroImageSrc } from "@/lib/hero-images";
import type { HomeHeroPillar, HomeHeroPillarId } from "@/lib/home-hero-pillars";

const AUTO_ROTATE_MS = 5000;
const MANUAL_PAUSE_MS = 10000;
const INITIAL_PILLAR_ID: HomeHeroPillarId = "mereni";

function nextPillarId(pillars: HomeHeroPillar[], currentId: HomeHeroPillarId): HomeHeroPillarId {
  const currentIndex = pillars.findIndex((pillar) => pillar.id === currentId);
  return pillars[(currentIndex + 1) % pillars.length].id;
}

type Props = {
  /** Server-rendered úvodní fotka (LCP) — zůstane v HTML bez čekání na hydrataci. */
  initialPhoto: ReactNode;
  children: ReactNode;
  pillars: HomeHeroPillar[];
  ariaLabel: string;
  pillarsAriaLabel: string;
};

export function HomeHeroShell({ initialPhoto, children, pillars, ariaLabel, pillarsAriaLabel }: Props) {
  const [activeId, setActiveId] = useState<HomeHeroPillarId>(INITIAL_PILLAR_ID);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const manualPauseUntilRef = useRef(0);
  const activePillar = pillars.find((pillar) => pillar.id === activeId) ?? pillars[0];

  const selectPillar = useCallback((id: HomeHeroPillarId, fromUser = false) => {
    setActiveId(id);
    if (fromUser) {
      manualPauseUntilRef.current = Date.now() + MANUAL_PAUSE_MS;
    }
  }, []);

  const onPillKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const nextIndex =
        event.key === "ArrowRight"
          ? (index + 1) % pillars.length
          : (index - 1 + pillars.length) % pillars.length;
      selectPillar(pillars[nextIndex].id, true);
      const pills = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      pills?.[nextIndex]?.focus();
    },
    [pillars, selectPillar]
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      if (autoplayPaused || Date.now() < manualPauseUntilRef.current) return;
      setActiveId((currentId) => nextPillarId(pillars, currentId));
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [autoplayPaused, pillars]);

  useEffect(() => {
    const prefetch = () => {
      for (const pillar of pillars) {
        if (pillar.id === INITIAL_PILLAR_ID) continue;
        const img = new window.Image();
        img.src = getHeroImageSrc(pillar.theme);
      }
    };
    const idle = window.requestIdleCallback?.(prefetch, { timeout: 3000 });
    if (idle === undefined) {
      const t = window.setTimeout(prefetch, 1500);
      return () => window.clearTimeout(t);
    }
    return () => window.cancelIdleCallback(idle);
  }, [pillars]);

  const photo =
    activeId === INITIAL_PILLAR_ID ? (
      initialPhoto
    ) : (
      <HeroPhoto key={activeId} theme={activePillar.theme} priority={false} />
    );

  return (
    <section
      className="hero hero--split home-hero"
      aria-label={ariaLabel}
      onMouseEnter={() => setAutoplayPaused(true)}
      onMouseLeave={() => setAutoplayPaused(false)}
      onFocusCapture={() => setAutoplayPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setAutoplayPaused(false);
        }
      }}
    >
      <div className="container hero-band-grid">
        <div className="hero-copy">
          {children}
          <div
            className="home-hero-pills home-hero-enter home-hero-enter-3"
            role="tablist"
            aria-label={pillarsAriaLabel}
          >
            {pillars.map((pillar, index) => (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                id={`home-hero-tab-${pillar.id}`}
                aria-selected={activeId === pillar.id}
                aria-controls="home-hero-photo-panel"
                aria-describedby="home-hero-detail"
                tabIndex={activeId === pillar.id ? 0 : -1}
                className="home-hero-pill"
                onClick={() => selectPillar(pillar.id, true)}
                onKeyDown={(event) => onPillKeyDown(event, index)}
              >
                {pillar.label}
              </button>
            ))}
          </div>
          <p key={activeId} id="home-hero-detail" className="home-hero-detail" aria-live="polite">
            {activePillar.detail}
          </p>
        </div>
      </div>
      <div
        id="home-hero-photo-panel"
        className="hero-photo-frame"
        role="tabpanel"
        aria-labelledby={`home-hero-tab-${activeId}`}
      >
        <div className="hero-photo-layer is-active">{photo}</div>
      </div>
    </section>
  );
}
