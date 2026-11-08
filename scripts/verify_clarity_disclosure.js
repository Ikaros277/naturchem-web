/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const load = require("./lib/load-typescript")();
const { ClarityDisclosure } = load(path.join(root, "src/components/ClarityDisclosure.tsx"));
const { clarityDisclosure } = load(path.join(root, "src/lib/clarity-disclosure.ts"));
const saved = process.env.NEXT_PUBLIC_CLARITY_PILOT_ID;
try {
  for (const id of [undefined, "", "not.a.valid.id"]) {
    if (id === undefined) delete process.env.NEXT_PUBLIC_CLARITY_PILOT_ID;
    else process.env.NEXT_PUBLIC_CLARITY_PILOT_ID = id;
    assert.equal(renderToStaticMarkup(React.createElement(ClarityDisclosure, { locale: "cs" })), "");
  }
  process.env.NEXT_PUBLIC_CLARITY_PILOT_ID = "offlinefixture";
  for (const locale of ["cs", "en", "de"]) {
    for (const cookies of [false, true]) {
      const html = renderToStaticMarkup(React.createElement(ClarityDisclosure, { locale, cookies }));
      const copy = clarityDisclosure[locale];
      for (const key of ["heading", "purpose", "scope", "data", "choice", "retention"]) {
        const escaped = renderToStaticMarkup(React.createElement(React.Fragment, null, copy[key]));
        assert.ok(html.includes(escaped), locale + ": complete " + key);
      }
      assert.equal(html.includes("_clck"), cookies);
      assert.ok(html.includes("https://www.microsoft.com/en-us/privacy/privacystatement"));
      assert.ok(html.includes("https://learn.microsoft.com/en-us/clarity/setup-and-installation/data-retention"));
      assert.ok(!html.includes("<script"));
    }
  }
  const css = fs.readFileSync(path.join(root, "src/app/globals.css"), "utf8");
  assert.match(css, /\.cookie-consent-panel\s*\{[^}]*max-height: calc\(100dvh - 2rem\);[^}]*overflow-y: auto;/);
  const banner = fs.readFileSync(path.join(root, "src/components/CookieConsentBanner.tsx"), "utf8");
  assert.ok(banner.includes('from "@/lib/clarity-config"'), "Do not import the lifecycle controller just to render a switch");
  assert.ok(banner.includes("onClick={showClarity ? rejectOptional : acceptAll}"), "Preferences save selected options or reject, without overriding a new selection");
  // Exercise the actual click handlers without a browser, SDK or telemetry.
  const savedWindow = global.window;
  const savedDocument = global.document;
  const savedFetch = global.fetch;
  const messages = Object.fromEntries(["cs", "en", "de"].map(locale => [locale, require("../messages/" + locale + ".json")]));
  try {
    global.fetch = () => { throw new Error("No network allowed in consent tests"); };
    let stored = null;
    const win = new EventTarget();
    win.location = { hostname: "www.naturchem.cz" };
    win.localStorage = { getItem: () => stored, setItem: (_key, value) => { stored = value; } };
    win.sessionStorage = { removeItem() {} };
    global.window = win;
    global.document = { cookie: "" };
    function renderBanner(locale, mode = "banner", selections = [false, false, false]) {
      let index = 0;
      const state = [true, mode, ...selections];
      const fixtureLoader = require("./lib/load-typescript")({
        react: { useState: () => [state[index++], () => {}], useEffect() {} },
        "@/lib/i18n/locale-context": { useLocale: () => locale, useTranslations: ns => messages[locale][ns] },
        "@/lib/i18n/locale-link": { LocaleLink: "a" }
      });
      const { CookieConsentBanner } = fixtureLoader(path.join(root, "src/components/CookieConsentBanner.tsx"));
      return CookieConsentBanner();
    }
    function descendants(node) {
      if (!node || typeof node !== "object") return [];
      return [node, ...React.Children.toArray(node.props?.children).flatMap(descendants)];
    }
    function click(tree, label) {
      const button = descendants(tree).find(node => node.type === "button" && node.props.children === label);
      assert.ok(button, label);
      button.props.onClick();
      return JSON.parse(stored);
    }
    function flags(record) { return [record.statistics, record.marketing, record.clarity]; }
    for (const locale of ["cs", "en", "de"]) {
      stored = null;
      const settings = renderBanner(locale, "settings");
      const claritySwitch = descendants(settings).find(node => node.props?.id === "cookie-clarity");
      assert.equal(claritySwitch.props.checked, false, locale + ": no preselection");
      assert.equal(stored, null, "Rendering never grants consent");
      assert.deepEqual(flags(click(settings, messages[locale].cookies.savePreferences)), [false, false, false]);
      assert.deepEqual(flags(click(renderBanner(locale), messages[locale].cookies.acceptAll)), [true, true, true], "Explicit accept-all includes the disclosed Clarity purpose");
      assert.deepEqual(flags(click(renderBanner(locale), messages[locale].cookies.rejectOptional)), [false, false, false]);
      assert.deepEqual(flags(click(renderBanner(locale, "settings", [false, false, true]), messages[locale].cookies.savePreferences)), [false, false, true], "Independent choice remains possible");
      assert.deepEqual(flags(click(renderBanner(locale, "settings", [true, false, false]), messages[locale].cookies.savePreferences)), [true, false, false], "Statistics do not imply Clarity");
      assert.ok(JSON.parse(stored).updatedAt);
      assert.ok(clarityDisclosure[locale].choice.includes(messages[locale].cookies.acceptAll), "Policy matches affirmative action");
    }
    delete process.env.NEXT_PUBLIC_CLARITY_PILOT_ID;
    stored = null;
    assert.equal(descendants(renderBanner("cs", "settings")).some(node => node.props?.id === "cookie-clarity"), false);
    assert.equal(click(renderBanner("cs"), messages.cs.cookies.acceptAll).clarity, undefined, "Disabled pilot does not record a Clarity choice");
  } finally {
    if (savedWindow === undefined) delete global.window; else global.window = savedWindow;
    if (savedDocument === undefined) delete global.document; else global.document = savedDocument;
    global.fetch = savedFetch;
  }
  console.log("PASS Clarity disclosure: default-off, all CS/EN/DE information and primary links, no tracking script; bounded mobile settings and explicit save/reject");
} finally {
  if (saved === undefined) delete process.env.NEXT_PUBLIC_CLARITY_PILOT_ID;
  else process.env.NEXT_PUBLIC_CLARITY_PILOT_ID = saved;
}
