/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

// Static navigation does not need a hydrated router instance for each card.
for (const file of [
  "src/app/[locale]/page.tsx", "src/components/HomeHeroShell.tsx",
  "src/components/HomeServiceIndex.tsx", "src/components/HomeDemandPaths.tsx",
  "src/components/HomePoradnaStrip.tsx", "src/components/Footer.tsx",
  "src/components/ServiceDetailLayout.tsx", "src/components/FaqAccordionList.tsx"
]) {
  assert.doesNotMatch(read(file), /(?:from ["']next\/link|<Link\b)/, file + ": retain native server-rendered links");
  assert.match(read(file), /<a\b/, file + ": crawlable links remain present");
}
for (const file of ["src/app/[locale]/layout.tsx", "src/app/global-not-found.tsx"]) {
  assert.match(read(file), /import \{ fontSans \} from "@\/lib\/font"/, "One shared font instance: " + file);
  assert.doesNotMatch(read(file), /Source_Sans_3\(/, "Avoid duplicate font files: " + file);
}
assert.match(read("src/lib/font.ts"), /preload:\s*false/, "Do not preload a second font ahead of the mobile LCP image");
const css = read("src/components/homepage.module.css");
assert.match(css, /\.section\s*\{[^}]*content-visibility:\s*auto/);
assert.match(css, /contain-intrinsic-block-size:\s*auto/);
assert.doesNotMatch(css, /\.hero\s*\{[^}]*content-visibility/, "Do not delay the LCP hero");
assert.match(css, /\.stat\s*\{[^}]*contain:\s*layout style/, "Keep counter layout work local");
assert.match(read("src/components/HomeServiceIndex.tsx"), /data-service-placement="home_service_index"/);
assert.match(read("src/components/HomeDemandPaths.tsx"), /data-b2b-audience="environmental_partner"/);
assert.match(read("src/components/OutboundLinkTelemetry.tsx"), /document\.addEventListener\("click", onClick, true\)/, "Delegated tracking also handles native links");

if (process.argv.includes("--rendered")) {
  for (const locale of ["cs", "en", "de"]) {
    const html = read(`.next/server/app/${locale}.html`);
    assert.equal((html.match(/prefetch/g) || []).length, 0, "No serialized Next Link instances on " + locale + " homepage");
    // The production consent bootstrap is present only with configured GA/Ads.
    // Baselines with it: cs 136858 B, en 137108 B, de 138576 B (f004d29).
    // Keep both variants bounded; never disable consent/tracking to pass a test.
    const hasConsentInit = html.includes("google-consent-mode-init");
    const htmlBudget = (hasConsentInit
      ? { cs: 136500, en: 137000, de: 138500 }
      : { cs: 133500, en: 134000, de: 135500 })[locale];
    assert.ok(Buffer.byteLength(html) < htmlBudget, "Keep homepage HTML below its matching consent baseline: " + locale);
    assert.equal((html.match(/data-service-placement="home_service_index"/g) || []).length, 6);
    assert.equal((html.match(/data-b2b-audience="environmental_partner"/g) || []).length, 1);
    assert.ok(html.includes('id="home-demand-paths-heading"') && html.includes('id="home-poradna-heading"'));
    assert.match(html, /<h1>[^<]+<\/h1>/);
    assert.match(html, /loading="eager"[^>]*fetchPriority="high"/);
    assert.doesNotMatch(html, /rel="preload"[^>]*as="font"/, "No redundant 404 font preload on a homepage");
  }
  console.log("PASS rendered mobile budgets: native links, complete visible content, analytics attributes and eager LCP");
}
console.log("PASS mobile source checks: reduced hydration, scoped rendering and preserved conversion paths");
