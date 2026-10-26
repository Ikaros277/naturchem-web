/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const path = require("node:path");
const fs = require("node:fs");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const css = { __esModule: true, default: new Proxy({}, { get: (_, name) => String(name) }) };
const load = require("./lib/load-typescript")({
  "./service-detail.module.css": css,
  "./accredited-scope.module.css": css,
  "@/components/HeroPhoto": { HeroPhoto: () => React.createElement("img", { src: "/fixture.webp", alt: "" }) }
});
const { DemandLandingLayout } = load(path.join(root, "src/components/DemandLandingLayout.tsx"));
const { getSeoLandings } = load(path.join(root, "src/lib/i18n/content.ts"));
const { stripRichText } = load(path.join(root, "src/lib/rich-text.tsx"));
const { getRelatedServicesForArticle } = load(path.join(root, "src/lib/poradna-service-links.ts"));
const text = html => html.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
async function main() {
  let count = 0;
  for (const locale of ["cs", "en", "de"]) {
    for (const landing of (await getSeoLandings(locale)).filter(item => item.layout === "demand")) {
      const html = renderToStaticMarkup(await DemandLandingLayout({ landing, locale, schemas: null, contactHref: "/kontakt/#poptavkovy-formular", faq: landing.faq || [] }));
      const plain = text(html);
      assert.ok(html.includes('data-service-layout="compact"'), landing.slug);
      assert.equal((html.match(/<h1\b/g) || []).length, 1);
      const scopeFeature = locale === "cs" && landing.slug === "mereni-pracovniho-prostredi-kategorizace-praci";
      const imageTags = [...html.matchAll(/<img\b[^>]*>/g)].map(match => match[0]);
      assert.equal(imageTags.length, scopeFeature ? 2 : 1, "Only the explicitly redesigned Czech workplace scope adds a second photograph");
      const imageSources = imageTags.map(tag => tag.match(/\bsrc="([^"]+)"/)[1]);
      assert.equal(new Set(imageSources).size, imageSources.length, "Never repeat the hero photograph in the scope feature");
      assert.equal((html.match(/data-scope-feature="authentic"/g) || []).length, scopeFeature ? 1 : 0);
      if (scopeFeature) {
        const image = imageTags.find(tag => tag.includes("/reference/authentic-2026-10-08/kovovyroba-mereni-640.webp"));
        assert.ok(image && image.includes('loading="lazy"'), "Use the specific reviewed, lazy, static photograph; not an arbitrary second image");
      }
      assert.ok(html.includes('href="#podklady"') && html.includes('id="podklady"'));
      assert.match(html, /class="detailsGrid(?:Solo)?"/, "Demand pages share the same lower-page hierarchy");
      // Topic disclosures are plain details; nested analyte disclosures have
      // their own class and a separate exact-content accreditation test.
      const technicalSummaries = [...html.matchAll(/<details><summary>([\s\S]*?)<\/summary>/g)].map(match => match[1]);
      assert.ok(technicalSummaries.length > 0 && technicalSummaries.every(summary => summary.includes("disclosureIcon") && summary.includes("aria-hidden=\"true\"")), "Decorative topic icons must remain server-rendered and accessible names unchanged");
      const relatedNavigation = html.match(/<nav class="related"[\s\S]*?<\/nav>/)?.[0] || "";
      assert.equal((relatedNavigation.match(/relatedIcon/g) || []).length, landing.relatedLinks?.length || 0, "Every existing related landing link keeps a visual card");
      assert.ok(plain.includes(stripRichText(landing.intro)), "Preserve full approved intro: " + landing.slug);
      for (const section of landing.sections) for (const paragraph of section.paragraphs) assert.ok(plain.includes(stripRichText(paragraph)), "Preserve approved content: " + landing.slug);
      for (const source of landing.sources || []) assert.ok(html.includes(source.href), "Preserve authoritative sources");
      for (const faq of landing.faq || []) assert.ok(plain.includes(faq.question) && plain.includes(faq.answer), "Preserve original FAQ");
      assert.doesNotMatch(html, /seo-demand-stats|seo-demand-highlight-band|seo-demand-contact/, "No repeated brand presentation");
      count++;
    }
  }
  assert.ok(count >= 20, "Check all localized demand landings");
  assert.equal(getRelatedServicesForArticle("Změna integrovaného povolení IPPC", "zmena-integrovaneho-povoleni-ippc-podstatna-zmena")[0].href, "/sluzby/ippc-integrovana-povoleni");
  const contact = fs.readFileSync(path.join(root, "src/app/[locale]/kontakt/page.tsx"), "utf8");
  assert.match(contact, /className="page-hero-band--contact"\s+plain/);
  assert.equal((contact.match(/<ContactPageHeroMedia\s*\/>/g) || []).length, 1, "Exactly one restored top map");
  assert.ok(contact.indexOf("<ContactPageHeroMedia") < contact.indexOf('aria-labelledby="poptavka-heading"'), "Keep the approved map above the inquiry form");
  assert.doesNotMatch(contact, /ContactMapDisclosure|ContactPageOfficesMap/, "Do not mount a duplicate bottom map");
  const faq = fs.readFileSync(path.join(root, "src/components/FaqPageContent.tsx"), "utf8");
  assert.match(faq, /<details[^>]*id=\{category.id\}/);
  const globals = fs.readFileSync(path.join(root, "src/app/globals.css"), "utf8");
  assert.doesNotMatch(globals, /\.seo-demand-hero/);
  console.log("PASS visual cohesion: " + count + " localized compact landings, full approved content and source links preserved, contextual IPPC link, one top contact map and native FAQ groups.");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
