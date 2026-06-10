"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { HeroPhoto } from "@/components/HeroPhoto";
import { getHeroImageSrc } from "@/lib/hero-images";
import { homeHeroPillars, type HomeHeroPillarId } from "@/lib/home-hero-pillars";

const AUTO_ROTATE_MS = 5000;
const MANUAL_PAUSE_MS = 10000;
const INITIAL_PILLAR_ID: HomeHeroPillarId = "mereni";

function nextPillarId(currentId: HomeHeroPillarId): HomeHeroPillarId {
  const currentIndex = homeHeroPillars.findIndex((pillar) => pillar.id === currentId);
  return homeHeroPillars[(currentIndex + 1) % homeHeroPillars.length].id;
}

type Props = {
  /** Server-rendered úvodní fotka (LCP) — zůstane v HTML bez čekání na hydrataci. */
  initialPhoto: ReactNode;
  children: ReactNode;
};

export function HomeHeroShell({ initialPhoto, children }: Props) {
  const [activeId, setActiveId] = useState<HomeHeroPillarId>(INITIAL_PILLAR_ID);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const manualPauseUntilRef = useRef(0);
  const activePillar = homeHeroPillars.find((pillar) => pillar.id === activeId) ?? homeHeroPillars[0];

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
          ? (index + 1) % homeHeroPillars.length
          : (index - 1 + homeHeroPillars.length) % homeHeroPillars.length;
      selectPillar(homeHeroPillars[nextIndex].id, true);
      const pills = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      pills?.[nextIndex]?.focus();
    },
    [selectPillar]
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      if (autoplayPaused || Date.now() < manualPauseUntilRef.current) return;
      setActiveId((currentId) => nextPillarId(currentId));
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [autoplayPaused]);

  useEffect(() => {
    const prefetch = () => {
      for (const pillar of homeHeroPillars) {
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
  }, []);

  const photo =
    activeId === INITIAL_PILLAR_ID ? (
      initialPhoto
    ) : (
      <HeroPhoto key={activeId} theme={activePillar.theme} priority={false} />
    );

  return (
    <section
      className="hero hero--split home-hero"
      aria-label="Úvod"
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
            aria-label="Oblasti služeb"
          >
            {homeHeroPillars.map((pillar, index) => (
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
