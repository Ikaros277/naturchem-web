"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  COOKIE_CONSENT_EVENT,
  defaultCookieConsent,
  hasCookieConsentChoice,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentRecord
} from "@/lib/cookie-consent";
import { legalPaths } from "@/lib/legal";

type PanelMode = "banner" | "settings";

function CookieToggle({
  id,
  label,
  description,
  checked,
  disabled,
  onChange
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div className="cookie-consent-toggle">
      <div className="cookie-consent-toggle-copy">
        <label htmlFor={id}>{label}</label>
        <p>{description}</p>
      </div>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
      />
    </div>
  );
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<PanelMode>("banner");
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readCookieConsent();
    if (existing) {
      setStatistics(existing.statistics);
      setMarketing(existing.marketing);
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    function openSettings() {
      const existing = readCookieConsent();
      setStatistics(existing?.statistics ?? false);
      setMarketing(existing?.marketing ?? false);
      setMode("settings");
      setVisible(true);
    }

    window.addEventListener("naturchem:open-cookie-settings", openSettings);
    return () => window.removeEventListener("naturchem:open-cookie-settings", openSettings);
  }, []);

  function persist(categories: Pick<CookieConsentRecord, "statistics" | "marketing">) {
    writeCookieConsent(categories);
    setStatistics(categories.statistics);
    setMarketing(categories.marketing);
    setVisible(false);
    setMode("banner");
  }

  function acceptAll() {
    persist({ statistics: true, marketing: true });
  }

  function rejectOptional() {
    persist({ statistics: false, marketing: false });
  }

  function savePreferences() {
    persist({ statistics, marketing });
  }

  if (!visible) return null;

  return (
    <div className="cookie-consent-root" role="dialog" aria-modal="true" aria-labelledby="cookie-consent-title">
      <div className="cookie-consent-panel">
        <h2 id="cookie-consent-title">
          {mode === "banner" ? "Souhlas s cookies" : "Nastavení cookies"}
        </h2>

        {mode === "banner" ? (
          <>
            <p>
              Používáme cookies pro provoz webu, statistiku návštěvnosti a případně online reklamu.
              Volitelné cookies spustíme až po Vašem souhlasu. Více v{" "}
              <Link href={legalPaths.cookies}>Zásadách cookies</Link> a{" "}
              <Link href={legalPaths.privacy}>Zásadách ochrany osobních údajů</Link>.
            </p>
            <div className="cookie-consent-actions">
              <button type="button" className="button cookie-consent-btn-accept" onClick={acceptAll}>
                Přijmout vše
              </button>
              <button type="button" className="button secondary" onClick={rejectOptional}>
                Odmítnout volitelné
              </button>
              <button type="button" className="button ghost" onClick={() => setMode("settings")}>
                Nastavení
              </button>
            </div>
          </>
        ) : (
          <>
            <CookieToggle
              id="cookie-necessary"
              label="Nezbytné"
              description="Vždy aktivní — provoz webu a uložení Vašeho rozhodnutí."
              checked
              disabled
            />
            <CookieToggle
              id="cookie-statistics"
              label="Statistické"
              description="Google Analytics — pomáhá nám pochopit, jak je web používán."
              checked={statistics}
              onChange={setStatistics}
            />
            <CookieToggle
              id="cookie-marketing"
              label="Marketingové"
              description="Google Ads, Meta, LinkedIn — měření a remarketing reklam."
              checked={marketing}
              onChange={setMarketing}
            />
            <div className="cookie-consent-actions cookie-consent-actions--settings">
              <button type="button" className="button cookie-consent-btn-accept" onClick={acceptAll}>
                Přijmout vše
              </button>
              <button type="button" className="button cookie-consent-btn-save" onClick={savePreferences}>
                Uložit předvolby
              </button>
              {!hasCookieConsentChoice() ? (
                <button type="button" className="button ghost" onClick={() => setMode("banner")}>
                  Zpět
                </button>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-legal-button"
      onClick={() => window.dispatchEvent(new Event("naturchem:open-cookie-settings"))}
    >
      Spravovat cookies
    </button>
  );
}

/** Client hook helper for other components — listens to consent changes. */
export function useCookieConsentState() {
  const [consent, setConsent] = useState<CookieConsentRecord | null>(null);

  useEffect(() => {
    function sync() {
      setConsent(readCookieConsent());
    }

    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  return consent ?? defaultCookieConsent;
}
