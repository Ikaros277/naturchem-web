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
  console.log("PASS Clarity disclosure: default-off, all CS/EN/DE information and primary links, no tracking script; bounded mobile settings and explicit save/reject");
} finally {
  if (saved === undefined) delete process.env.NEXT_PUBLIC_CLARITY_PILOT_ID;
  else process.env.NEXT_PUBLIC_CLARITY_PILOT_ID = saved;
}
