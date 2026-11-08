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
import { useLocale, useTranslations } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { legalPaths } from "@/lib/legal";
import { getClarityPilotId } from "@/lib/clarity-config";

type PanelMode = "banner" | "settings";

const clarityCopy = {
  cs: { label: "Analýza používání webu (Microsoft Clarity)", detail: "Vytváří mapy kliknutí a rekonstrukci používání vybraných veřejných stránek. Formuláře nesnímáme. Podrobnosti jsou v zásadách soukromí.", manage: "Volba „Přijmout vše“ povolí také Microsoft Clarity: mapy kliknutí a rekonstrukci návštěvy vybraných veřejných stránek, bez formulářů. Jednotlivé účely můžete zvolit v nastavení." },
  en: { label: "Website interaction analysis (Microsoft Clarity)", detail: "Creates click heatmaps and reconstructs visits to selected public pages. Forms are excluded. See our privacy policy for details.", manage: "“Accept all” also enables Microsoft Clarity: click heatmaps and visit reconstruction on selected public pages, excluding forms. You can choose individual purposes in settings." },
  de: { label: "Analyse der Websitenutzung (Microsoft Clarity)", detail: "Erstellt Klick-Heatmaps und rekonstruiert Besuche ausgewählter öffentlicher Seiten. Formulare sind ausgeschlossen. Einzelheiten finden Sie in der Datenschutzerklärung.", manage: "„Alle akzeptieren“ erlaubt auch Microsoft Clarity: Klick-Heatmaps und eine Rekonstruktion des Besuchs ausgewählter öffentlicher Seiten, ohne Formulare. Einzelne Zwecke können Sie in den Einstellungen auswählen." }
};

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
  const behavior = clarityCopy[useLocale()];
  const showClarity = Boolean(getClarityPilotId());
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<PanelMode>("banner");
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [clarity, setClarity] = useState(false);

  useEffect(() => {
    const existing = readCookieConsent();
    if (existing) {
      setStatistics(existing.statistics);
      setMarketing(existing.marketing);
      setClarity(existing.clarity === true);
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    function openSettings() {
      const existing = readCookieConsent();
      setStatistics(existing?.statistics ?? false);
      setMarketing(existing?.marketing ?? false);
      setClarity(existing?.clarity === true);
      setMode("settings");
      setVisible(true);
    }

    window.addEventListener("naturchem:open-cookie-settings", openSettings);
    return () => window.removeEventListener("naturchem:open-cookie-settings", openSettings);
  }, []);

  function persist(categories: Pick<CookieConsentRecord, "statistics" | "marketing" | "clarity">) {
    writeCookieConsent(categories);
    setStatistics(categories.statistics);
    setMarketing(categories.marketing);
    setClarity(categories.clarity === true);
    setVisible(false);
    setMode("banner");
  }

  function acceptAll() {
    persist({ statistics: true, marketing: true, ...(showClarity ? { clarity: true } : {}) });
  }

  function rejectOptional() {
    persist({ statistics: false, marketing: false, ...(showClarity ? { clarity: false } : {}) });
  }

  function savePreferences() {
    persist({ statistics, marketing, ...(showClarity ? { clarity } : {}) });
  }

  if (!visible) return null;

  return (
    <div className="cookie-consent-root" role="dialog" aria-modal="false" aria-labelledby="cookie-consent-title">
      <div className={mode === "banner" ? "cookie-consent-panel cookie-consent-panel--banner" : "cookie-consent-panel"}>
        <h2 id="cookie-consent-title">{mode === "banner" ? t.bannerTitle : t.settingsTitle}</h2>

        {mode === "banner" ? (
          <>
            <p>
              {t.bannerText}{" "}
              <LocaleLink href={legalPaths.cookies}>{t.cookiePolicy}</LocaleLink> {t.bannerConjunction}{" "}
              <LocaleLink href={legalPaths.privacy}>{t.privacyPolicy}</LocaleLink>.
              {showClarity ? " " + behavior.manage : ""}
            </p>
            <div className="cookie-consent-actions">
              <button type="button" className="button cookie-consent-choice" onClick={acceptAll}>
                {t.acceptAll}
              </button>
              <button type="button" className="button cookie-consent-choice" onClick={rejectOptional}>
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
            {showClarity ? <CookieToggle
              id="cookie-clarity"
              label={behavior.label}
              description={behavior.detail}
              checked={clarity}
              onChange={setClarity}
            /> : null}
            <div className="cookie-consent-actions cookie-consent-actions--settings">
              <button type="button" className="button cookie-consent-btn-accept" onClick={showClarity ? rejectOptional : acceptAll}>
                {showClarity ? t.rejectOptional : t.acceptAll}
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
