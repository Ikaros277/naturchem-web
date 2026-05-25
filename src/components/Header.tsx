"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import {
  globalCta,
  headerMainNav,
  kontaktNav,
  odbornostNav
} from "@/lib/navigation";
import { serviceMegaGroups } from "@/lib/service-megamenu";
import { BrandLogo } from "@/components/BrandLogo";
import { company } from "@/lib/site";

function useDesktopNav() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

function ServiceMegaMenu() {
  return (
    <div id="nav-mega-sluzby" className="nav-dropdown nav-dropdown-wide nav-mega" aria-label="Služby">
      <Link href="/sluzby" className="nav-dropdown-link nav-dropdown-overview">
        Přehled služeb
      </Link>
      <div className="mega-menu-grid mega-menu-grid-four">
        {serviceMegaGroups.map((group) => (
          <div key={group.title} className="mega-menu-group">
            <span className="nav-dropdown-label">{group.title}</span>
            {group.links.map((item) => (
              <Link
                key={`${group.title}-${item.label}`}
                href={item.href}
                className="nav-dropdown-link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function OdbornostDropdown() {
  return (
    <div id="nav-dropdown-odbornost" className="nav-dropdown" aria-label={odbornostNav.label}>
      {odbornostNav.links.map((item) => (
        <Link key={item.href} href={item.href} className="nav-dropdown-link">
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function MobileServiceGroups({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {serviceMegaGroups.map((group) => (
        <details key={group.title} className="nav-mobile-details nav-mobile-nested">
          <summary>{group.title}</summary>
          <div className="nav-mobile-sub">
            {group.links.map((item) => (
              <Link
                key={`${group.title}-${item.label}`}
                href={item.href}
                className="nav-mobile-sub-link"
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      ))}
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const isDesktop = useDesktopNav();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [odbornostOpen, setOdbornostOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mobileSheetRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setOdbornostOpen(false);
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
            aria-label="Hlavní menu"
          >
            <div className="nav-mobile-backdrop" aria-hidden onClick={closeMenu} />
            <div className="nav-mobile-sheet" ref={mobileSheetRef}>
              <div className="nav-mobile-sheet-head">
                <span className="muted">Menu</span>
                <button
                  type="button"
                  className="nav-mobile-close"
                  onClick={closeMenu}
                  aria-label="Zavřít menu"
                >
                  ×
                </button>
              </div>
              <p className="nav-mobile-contact muted">
                <a href={`tel:${company.phones[0].replace(/\s/g, "")}`}>{company.phones[0]}</a>
                {" · "}
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
              <nav className="nav-mobile-nav" aria-label="Hlavní navigace">
                <details className="nav-mobile-details">
                  <summary>Služby</summary>
                  <Link href="/sluzby" className="nav-mobile-overview" onClick={closeMenu}>
                    Přehled služeb
                  </Link>
                  <div className="nav-mobile-sub">
                    <MobileServiceGroups onNavigate={closeMenu} />
                  </div>
                </details>
                {headerMainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-mobile-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <details className="nav-mobile-details">
                  <summary>{odbornostNav.label}</summary>
                  <div className="nav-mobile-sub">
                    {odbornostNav.links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="nav-mobile-sub-link"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
                <Link href={kontaktNav.href} className="nav-mobile-link" onClick={closeMenu}>
                  {kontaktNav.label}
                </Link>
                <Link className="button nav-mobile-cta" href="/kontakt" onClick={closeMenu}>
                  {globalCta}
                </Link>
              </nav>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-label">Akreditovaná laboratoř č. 1599 · ČSN EN ISO/IEC 17025</span>
          <span className="topbar-contact">
            <a className="topbar-link" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <span className="topbar-sep" aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            <a className="topbar-link" href={`tel:${company.phones[0].replace(/\s/g, "")}`}>
              {company.phones[0]}
            </a>
          </span>
        </div>
      </div>
      <div className="container nav">
        <Link href="/" aria-label="NATURCHEM domů" className="nav-brand">
          <span className="brand-mark">
            <BrandLogo priority className="brand-logo-img" />
            <span className="brand-tagline">Měření · studie · dokumentace</span>
          </span>
        </Link>

        {isDesktop ? (
          <nav className="nav-links nav-desktop-full" aria-label="Hlavní navigace">
            <div
              className="nav-item nav-item-mega"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocusCapture={() => setServicesOpen(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setServicesOpen(false);
                }
              }}
            >
              <Link className="nav-item-link" href="/sluzby" aria-expanded={servicesOpen} aria-controls="nav-mega-sluzby">
                Služby
              </Link>
              {servicesOpen ? <ServiceMegaMenu /> : null}
            </div>
            {headerMainNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <div
              className="nav-item"
              onMouseEnter={() => setOdbornostOpen(true)}
              onMouseLeave={() => setOdbornostOpen(false)}
              onFocusCapture={() => setOdbornostOpen(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setOdbornostOpen(false);
                }
              }}
            >
              <span className="nav-item-link nav-item-trigger" aria-expanded={odbornostOpen} aria-controls="nav-dropdown-odbornost">
                {odbornostNav.label}
              </span>
              {odbornostOpen ? <OdbornostDropdown /> : null}
            </div>
            <Link href={kontaktNav.href}>{kontaktNav.label}</Link>
          </nav>
        ) : null}

        {isDesktop ? (
          <Link className="button nav-cta-desktop" href="/kontakt">
            {globalCta}
          </Link>
        ) : (
          <>
            <Link className="button nav-cta-mobile" href="/kontakt#poptavkovy-formular">
              Poptat
            </Link>
            <button
              ref={mobileToggleRef}
              type="button"
              className="nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? "Zavřít menu" : "Otevřít menu"}</span>
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
    </header>
  );
}
