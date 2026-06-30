"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { HeroPhoto } from "@/components/HeroPhoto";
import type { HomeHeroPillar, HomeHeroPillarId } from "@/lib/home-hero-pillars";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { getServiceCategoryFromPillarId } from "@/lib/service-categories";
import { notifyAccordionHashSync } from "@/lib/use-accordion-hash-open";

const AUTO_ROTATE_MS = 5000;
const MANUAL_PAUSE_MS = 10000;
const AUTOPLAY_START_DELAY_MS = 15000;
const INITIAL_PILLAR_ID: HomeHeroPillarId = "mereni";

function nextPillarId(pillars: HomeHeroPillar[], currentId: HomeHeroPillarId): HomeHeroPillarId {
  const currentIndex = pillars.findIndex((pillar) => pillar.id === currentId);
  return pillars[(currentIndex + 1) % pillars.length].id;
}

function hasHashHref(href: string) {
  return href.includes("#");
}

function onHashLinkClick() {
  window.setTimeout(notifyAccordionHashSync, 0);
  window.setTimeout(notifyAccordionHashSync, 100);
  window.setTimeout(notifyAccordionHashSync, 300);
}

function isDesktopViewport() {
  return window.matchMedia("(min-width: 768px)").matches;
}

function isFinePointer() {
  return typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
}

type Props = {
  initialPhoto: ReactNode;
  children: ReactNode;
  pillars: HomeHeroPillar[];
  ariaLabel: string;
  pillarsAriaLabel: string;
};

export function HomeHeroShell({ initialPhoto, children, pillars, ariaLabel, pillarsAriaLabel }: Props) {
  const [activeId, setActiveId] = useState<HomeHeroPillarId>(INITIAL_PILLAR_ID);
  const [mountedIds, setMountedIds] = useState<ReadonlySet<HomeHeroPillarId>>(
    () => new Set([INITIAL_PILLAR_ID])
  );
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const manualPauseUntilRef = useRef(0);
  const activePillar = pillars.find((pillar) => pillar.id === activeId) ?? pillars[0];

  const mountPillar = useCallback((id: HomeHeroPillarId) => {
    setMountedIds((current) => {
      if (current.has(id)) return current;
      const next = new Set(current);
      next.add(id);
      return next;
    });
  }, []);

  const selectPillar = useCallback(
    (id: HomeHeroPillarId, fromUser = false) => {
      mountPillar(id);
      setActiveId(id);
      if (fromUser) {
        manualPauseUntilRef.current = Date.now() + MANUAL_PAUSE_MS;
      }
    },
    [mountPillar]
  );

  const onPillKeyDown = useCallback(
    (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const nextIndex =
        event.key === "ArrowRight"
          ? (index + 1) % pillars.length
          : (index - 1 + pillars.length) % pillars.length;
      selectPillar(pillars[nextIndex].id, true);
      const pills = event.currentTarget.parentElement?.querySelectorAll<HTMLAnchorElement>('[role="tab"]');
      pills?.[nextIndex]?.focus();
    },
    [pillars, selectPillar]
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !isDesktopViewport()) return;

    let intervalId: number | undefined;

    const startTimer = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        if (autoplayPaused || Date.now() < manualPauseUntilRef.current) return;
        setActiveId((currentId) => {
          const nextId = nextPillarId(pillars, currentId);
          mountPillar(nextId);
          return nextId;
        });
      }, AUTO_ROTATE_MS);
    }, AUTOPLAY_START_DELAY_MS);

    return () => {
      window.clearTimeout(startTimer);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [autoplayPaused, mountPillar, pillars]);

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
              <LocaleLink
                key={pillar.id}
                href={pillar.href}
                role="tab"
                id={`home-hero-tab-${pillar.id}`}
                aria-selected={activeId === pillar.id}
                aria-controls="home-hero-photo-panel"
                aria-describedby="home-hero-detail"
                tabIndex={activeId === pillar.id ? 0 : -1}
                className="home-hero-pill"
                data-category={getServiceCategoryFromPillarId(pillar.id) ?? undefined}
                scroll={hasHashHref(pillar.href) ? false : undefined}
                onMouseEnter={() => {
                  if (isFinePointer()) selectPillar(pillar.id, true);
                }}
                onFocus={() => selectPillar(pillar.id, true)}
                onClick={hasHashHref(pillar.href) ? onHashLinkClick : undefined}
                onKeyDown={(event) => onPillKeyDown(event, index)}
              >
                {pillar.label}
              </LocaleLink>
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
        {pillars.map((pillar) => {
          if (!mountedIds.has(pillar.id)) return null;

          return (
            <div
              key={pillar.id}
              className={activeId === pillar.id ? "hero-photo-layer is-active" : "hero-photo-layer"}
              aria-hidden={activeId !== pillar.id}
            >
              {pillar.id === INITIAL_PILLAR_ID ? initialPhoto : <HeroPhoto theme={pillar.theme} />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
