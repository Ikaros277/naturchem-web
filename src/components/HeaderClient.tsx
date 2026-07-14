"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { contactFormHref } from "@/lib/contact-url";
import type { HeaderClientProps } from "@/lib/header-nav-data";
import { kontaktNav } from "@/lib/navigation";
import { LocaleLink, useLocalizedPathname } from "@/lib/i18n/locale-link";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ExperienceMegaMenu, MobileExperienceMegaGroups } from "@/components/ExperienceMegaMenu";
import { MobileServiceMegaGroups, ServiceMegaMenu } from "@/components/ServiceMegaMenu";
import { MobileONasMegaGroups, ONasMegaMenu } from "@/components/ONasMegaMenu";

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

function useDelayedHover(delayMs = 240) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    []
  );

  const openMenu = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setOpen(true);
  };

  const scheduleClose = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setOpen(false);
      timerRef.current = null;
    }, delayMs);
  };

  const closeNow = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
    setOpen(false);
  };

  return { open, openMenu, scheduleClose, closeNow };
}

export function HeaderClient({
  labels: t,
  experienceMegaGroups,
  salesNavLink,
  serviceMegaGroups,
  oNasMegaGroups
}: HeaderClientProps) {
  const pathname = useLocalizedPathname();
  const isDesktop = useIsDesktopNav();
  const [menuOpen, setMenuOpen] = useState(false);
  const servicesMenu = useDelayedHover();
  const experienceMenu = useDelayedHover();
  const aboutMenu = useDelayedHover();
  const [mounted, setMounted] = useState(false);
  const mobileSheetRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    servicesMenu.closeNow();
    experienceMenu.closeNow();
    aboutMenu.closeNow();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        mobileToggleRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;
      const focusable = mobileSheetRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), summary, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeButton = mobileSheetRef.current?.querySelector<HTMLButtonElement>(".nav-mobile-close");
    closeButton?.focus();
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    mobileToggleRef.current?.focus();
  };

  const mobileMenu =
    mounted && menuOpen
      ? createPortal(
          <div
            id="mobile-menu"
            className="nav-mobile-portal"
            role="dialog"
            aria-modal="true"
            aria-label={t.mobileMenu}
          >
            <div className="nav-mobile-backdrop" aria-hidden onClick={closeMenu} />
            <div className="nav-mobile-sheet" ref={mobileSheetRef}>
              <div className="nav-mobile-sheet-head">
                <div className="nav-mobile-brand">
                  <LocaleLink href="/" className="nav-mobile-logo" onClick={closeMenu} aria-label={t.homeAria}>
                    <BrandLogo className="nav-mobile-logo-img" />
                  </LocaleLink>
                  <p className="nav-mobile-tagline brand-tagline">{t.brandTagline}</p>
                </div>
                <button
                  type="button"
                  className="nav-mobile-close"
                  onClick={closeMenu}
                  aria-label={t.closeMenu}
                >
                  ×
                </button>
              </div>
              <nav className="nav-mobile-nav" aria-label={t.navAria}>
                <details className="nav-mobile-details">
                  <summary>{t.services}</summary>
                  <LocaleLink href="/sluzby" className="nav-mobile-overview" onClick={closeMenu}>
                    {t.servicesOverview}
                  </LocaleLink>
                  <div className="nav-mobile-sub nav-mobile-sub--mega">
                    <MobileServiceMegaGroups groups={serviceMegaGroups} onNavigate={closeMenu} />
                  </div>
                </details>
                <details className="nav-mobile-details">
                  <summary>{t.experience}</summary>
                  <div className="nav-mobile-sub nav-mobile-sub--mega">
                    <MobileExperienceMegaGroups groups={experienceMegaGroups} onNavigate={closeMenu} />
                  </div>
                </details>
                <LocaleLink
                  href={salesNavLink.href}
                  className="nav-mobile-link nav-sales-link"
                  prefetch={false}
                  onClick={closeMenu}
                >
                  {salesNavLink.label}
                </LocaleLink>
                <details className="nav-mobile-details">
                  <summary>{t.about}</summary>
                  <LocaleLink href="/o-spolecnosti-naturchem" className="nav-mobile-overview" onClick={closeMenu}>
                    {t.aboutOverview}
                  </LocaleLink>
                  <div className="nav-mobile-sub nav-mobile-sub--mega">
                    <MobileONasMegaGroups groups={oNasMegaGroups} onNavigate={closeMenu} />
                  </div>
                </details>
                <LocaleLink href={kontaktNav.href} className="nav-mobile-link" onClick={closeMenu}>
                  {t.contact}
                </LocaleLink>
              </nav>
              <div className="nav-mobile-sheet-foot">
                <div className="nav-mobile-lang-row">
                  <LanguageSwitcher />
                </div>
                <LocaleLink className="button nav-mobile-cta" href={contactFormHref} onClick={closeMenu}>
                  {t.cta}
                </LocaleLink>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div className="container nav">
        <LocaleLink href="/" aria-label={t.homeAria} className="nav-brand">
          <span className="brand-mark">
            <BrandLogo className="brand-logo-img" priority />
            <span className="brand-tagline">{t.brandTagline}</span>
          </span>
        </LocaleLink>

        {isDesktop ? (
          <nav className="nav-links nav-desktop" aria-label={t.navAria}>
            <div
              className="nav-mega-wrap"
              onMouseEnter={servicesMenu.openMenu}
              onMouseLeave={servicesMenu.scheduleClose}
              onFocusCapture={servicesMenu.openMenu}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  servicesMenu.scheduleClose();
                }
              }}
            >
              <LocaleLink
                className="nav-item-link"
                href="/sluzby"
                aria-expanded={servicesMenu.open}
                aria-controls="nav-mega-sluzby"
              >
                {t.services}
              </LocaleLink>
              {servicesMenu.open ? (
                <div
                  className="nav-mega-flyout"
                  onMouseEnter={servicesMenu.openMenu}
                  onMouseLeave={servicesMenu.scheduleClose}
                >
                  <ServiceMegaMenu labels={t} serviceMegaGroups={serviceMegaGroups} />
                </div>
              ) : null}
            </div>
            <div
              className="nav-mega-wrap"
              onMouseEnter={experienceMenu.openMenu}
              onMouseLeave={experienceMenu.scheduleClose}
              onFocusCapture={experienceMenu.openMenu}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  experienceMenu.scheduleClose();
                }
              }}
            >
              <LocaleLink
                className="nav-item-link"
                href="/provozy-a-technologie"
                aria-expanded={experienceMenu.open}
                aria-controls="nav-mega-zkusenosti"
              >
                {t.experience}
              </LocaleLink>
              {experienceMenu.open ? (
                <div
                  className="nav-mega-flyout"
                  onMouseEnter={experienceMenu.openMenu}
                  onMouseLeave={experienceMenu.scheduleClose}
                >
                  <ExperienceMegaMenu
                    labels={t}
                    experienceMegaGroups={experienceMegaGroups}
                  />
                </div>
              ) : null}
            </div>
            <LocaleLink href={salesNavLink.href} className="nav-sales-link" prefetch={false}>
              {salesNavLink.label}
            </LocaleLink>
            <div
              className="nav-mega-wrap"
              onMouseEnter={aboutMenu.openMenu}
              onMouseLeave={aboutMenu.scheduleClose}
              onFocusCapture={aboutMenu.openMenu}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  aboutMenu.scheduleClose();
                }
              }}
            >
              <LocaleLink
                className="nav-item-link"
                href="/o-spolecnosti-naturchem"
                aria-expanded={aboutMenu.open}
                aria-controls="nav-mega-o-nas"
              >
                {t.about}
              </LocaleLink>
              {aboutMenu.open ? (
                <div
                  className="nav-mega-flyout"
                  onMouseEnter={aboutMenu.openMenu}
                  onMouseLeave={aboutMenu.scheduleClose}
                >
                  <ONasMegaMenu labels={t} oNasMegaGroups={oNasMegaGroups} />
                </div>
              ) : null}
            </div>
            <LocaleLink href={kontaktNav.href}>{t.contact}</LocaleLink>
          </nav>
        ) : null}

        {isDesktop ? (
          <LocaleLink className="button nav-cta-desktop" href={contactFormHref}>
            {t.cta}
          </LocaleLink>
        ) : (
          <>
            <LocaleLink className="button nav-cta-mobile" href={contactFormHref}>
              {t.cta}
            </LocaleLink>
            <button
              ref={mobileToggleRef}
              type="button"
              className="nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? t.closeMenu : t.openMenu}</span>
              <span className={`nav-toggle-bars${menuOpen ? " is-open" : ""}`} aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </>
        )}
      </div>

      {mobileMenu}
    </>
  );
}
