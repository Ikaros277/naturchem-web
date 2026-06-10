"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { HeroPhoto } from "@/components/HeroPhoto";
import { getHeroImageSrc } from "@/lib/hero-images";
import { homeHeroPillars, type HomeHeroPillarId } from "@/lib/home-hero-pillars";

const AUTO_ROTATE_MS = 5000;
const MANUAL_PAUSE_MS = 10000;

function nextPillarId(currentId: HomeHeroPillarId): HomeHeroPillarId {
  const currentIndex = homeHeroPillars.findIndex((pillar) => pillar.id === currentId);
  return homeHeroPillars[(currentIndex + 1) % homeHeroPillars.length].id;
}

export function HomeHeroSection() {
  const [activeId, setActiveId] = useState<HomeHeroPillarId>("mereni");
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

  // Po prvním vykreslení (LCP) na pozadí přednačti ostatní hero fotky pro rotaci.
  useEffect(() => {
    const prefetch = () => {
      for (const pillar of homeHeroPillars) {
        if (pillar.id === "mereni") continue;
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
          <div className="hero-diagonal-spacer" aria-hidden="true" />
          <h1 className="home-hero-enter home-hero-enter-1">Akreditovaná měření, studie a podklady pro úřady</h1>
          <p className="hero-lead home-hero-enter home-hero-enter-2">
            Postaráme se o vše, co Váš provoz potřebuje — pro provozovatele, investory i projektanty, bez nutnosti
            poptávat více dodavatelů.
          </p>
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
        <div className="hero-photo-layer is-active">
          <HeroPhoto key={activeId} theme={activePillar.theme} priority={activeId === "mereni"} />
        </div>
      </div>
    </section>
  );
}
