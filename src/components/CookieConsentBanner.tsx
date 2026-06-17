"use client";

import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  defaultCookieConsent,
  hasCookieConsentChoice,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentRecord
} from "@/lib/cookie-consent";
import { useTranslations } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/lib/i18n/locale-link";
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
  const t = useTranslations("cookies");
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
        <h2 id="cookie-consent-title">{mode === "banner" ? t.bannerTitle : t.settingsTitle}</h2>

        {mode === "banner" ? (
          <>
            <p>
              {t.bannerText}{" "}
              <LocaleLink href={legalPaths.cookies}>{t.cookiePolicy}</LocaleLink> {t.bannerConjunction}{" "}
              <LocaleLink href={legalPaths.privacy}>{t.privacyPolicy}</LocaleLink>.
            </p>
            <div className="cookie-consent-actions">
              <button type="button" className="button cookie-consent-btn-accept" onClick={acceptAll}>
                {t.acceptAll}
              </button>
              <button type="button" className="button secondary" onClick={rejectOptional}>
                {t.rejectOptional}
              </button>
              <button type="button" className="button ghost" onClick={() => setMode("settings")}>
                {t.settings}
              </button>
            </div>
          </>
        ) : (
          <>
            <CookieToggle
              id="cookie-necessary"
              label={t.necessary}
              description={t.necessaryDesc}
              checked
              disabled
            />
            <CookieToggle
              id="cookie-statistics"
              label={t.statistics}
              description={t.statisticsDesc}
              checked={statistics}
              onChange={setStatistics}
            />
            <CookieToggle
              id="cookie-marketing"
              label={t.marketing}
              description={t.marketingDesc}
              checked={marketing}
              onChange={setMarketing}
            />
            <div className="cookie-consent-actions cookie-consent-actions--settings">
              <button type="button" className="button cookie-consent-btn-accept" onClick={acceptAll}>
                {t.acceptAll}
              </button>
              <button type="button" className="button cookie-consent-btn-save" onClick={savePreferences}>
                {t.savePreferences}
              </button>
              {!hasCookieConsentChoice() ? (
                <button type="button" className="button ghost" onClick={() => setMode("banner")}>
                  {t.back}
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
  const t = useTranslations("footer");

  return (
    <button
      type="button"
      className="footer-legal-button"
      onClick={() => window.dispatchEvent(new Event("naturchem:open-cookie-settings"))}
    >
      {t.manageCookies}
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
