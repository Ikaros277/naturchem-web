"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { contactFormHref } from "@/lib/contact-url";
import type { HeaderClientProps, HeaderMegaGroup } from "@/lib/header-nav-data";
import { kontaktNav } from "@/lib/navigation";
import { LocaleLink, useLocalizedPathname } from "@/lib/i18n/locale-link";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

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

function ServiceMegaMenu({
  labels,
  serviceMegaGroups
}: {
  labels: HeaderClientProps["labels"];
  serviceMegaGroups: readonly HeaderMegaGroup[];
}) {
  return (
    <div id="nav-mega-sluzby" className="nav-dropdown nav-dropdown-wide nav-mega" aria-label={labels.services}>
      <LocaleLink href="/sluzby" className="nav-dropdown-link nav-dropdown-overview">
        {labels.servicesOverview}
      </LocaleLink>
      <div className="mega-menu-grid mega-menu-grid-four">
        {serviceMegaGroups.map((group) => (
          <div key={group.title} className="mega-menu-group">
            <span className="nav-dropdown-label">{group.title}</span>
            {group.links.map((item) => (
              <LocaleLink
                key={`${group.title}-${item.label}`}
                href={item.href}
                className="nav-dropdown-link"
              >
                {item.label}
              </LocaleLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ONasDropdown({
  labels,
  oNasMegaGroups
}: {
  labels: HeaderClientProps["labels"];
  oNasMegaGroups: readonly HeaderMegaGroup[];
}) {
  return (
    <div id="nav-dropdown-o-nas" className="nav-dropdown nav-dropdown-o-nas" aria-label={labels.about}>
      {oNasMegaGroups.map((group) => (
        <div key={group.title} className="nav-dropdown-group">
          <span className="nav-dropdown-label">{group.title}</span>
          {group.links.map((item) => (
            <LocaleLink key={item.href} href={item.href} className="nav-dropdown-link">
              {item.label}
            </LocaleLink>
          ))}
        </div>
      ))}
    </div>
  );
}

function MobileONasGroups({
  groups,
  onNavigate
}: {
  groups: readonly HeaderMegaGroup[];
  onNavigate?: () => void;
}) {
  return (
    <>
      {groups.map((group) => (
        <details key={group.title} className="nav-mobile-details nav-mobile-nested">
          <summary>{group.title}</summary>
          <div className="nav-mobile-sub">
            {group.links.map((item) => (
              <LocaleLink
                key={`${group.title}-${item.label}`}
                href={item.href}
                className="nav-mobile-sub-link"
                onClick={onNavigate}
              >
                {item.label}
              </LocaleLink>
            ))}
          </div>
        </details>
      ))}
    </>
  );
}

function NavDropdownItem({
  id,
  label,
  open,
  onOpen,
  onClose,
  children
}: {
  id: string;
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div
      className="nav-item"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocusCapture={onOpen}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onClose();
        }
      }}
    >
      <span className="nav-item-link nav-item-trigger" aria-expanded={open} aria-controls={id}>
        {label}
      </span>
      {open ? children : null}
    </div>
  );
}

function MobileServiceGroups({
  groups,
  onNavigate
}: {
  groups: readonly HeaderMegaGroup[];
  onNavigate?: () => void;
}) {
  return (
    <>
      {groups.map((group) => (
        <details key={group.title} className="nav-mobile-details nav-mobile-nested">
          <summary>{group.title}</summary>
          <div className="nav-mobile-sub">
            {group.links.map((item) => (
              <LocaleLink
                key={`${group.title}-${item.label}`}
                href={item.href}
                className="nav-mobile-sub-link"
                onClick={onNavigate}
              >
                {item.label}
              </LocaleLink>
            ))}
          </div>
        </details>
      ))}
    </>
  );
}

export function HeaderClient({
  labels: t,
  headerMainNav,
  serviceMegaGroups,
  oNasMegaGroups
}: HeaderClientProps) {
  const pathname = useLocalizedPathname();
  const isDesktop = useIsDesktopNav();
  const [menuOpen, setMenuOpen] = useState(false);
  const servicesMenu = useDelayedHover();
  const [oNasOpen, setONasOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mobileSheetRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    servicesMenu.closeNow();
    setONasOpen(false);
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
                  <div className="nav-mobile-sub">
                    <MobileServiceGroups groups={serviceMegaGroups} onNavigate={closeMenu} />
                  </div>
                </details>
                {headerMainNav.map((item) => (
                  <LocaleLink
                    key={item.href}
                    href={item.href}
                    className="nav-mobile-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </LocaleLink>
                ))}
                <details className="nav-mobile-details">
                  <summary>{t.about}</summary>
                  <div className="nav-mobile-sub">
                    <MobileONasGroups groups={oNasMegaGroups} onNavigate={closeMenu} />
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
            <BrandLogo priority className="brand-logo-img" />
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
            {headerMainNav.map((item) => (
              <LocaleLink key={item.href} href={item.href}>
                {item.label}
              </LocaleLink>
            ))}
            <NavDropdownItem
              id="nav-dropdown-o-nas"
              label={t.about}
              open={oNasOpen}
              onOpen={() => setONasOpen(true)}
              onClose={() => setONasOpen(false)}
            >
              <ONasDropdown labels={t} oNasMegaGroups={oNasMegaGroups} />
            </NavDropdownItem>
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
