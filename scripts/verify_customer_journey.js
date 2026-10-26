/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const css = { __esModule: true, default: new Proxy({}, { get: (_, key) => String(key) }) };
let locale = "cs";
const nativeLink = ({ children, href, ...props }) => {
  delete props.prefetch; delete props.scroll;
  return React.createElement("a", { ...props, href }, children);
};
const load = require("./lib/load-typescript.js")({
  "./service-detail.module.css": css, "./accredited-scope.module.css": css,
  "@/components/HeroPhoto": { HeroPhoto: () => null },
  "@/components/ServiceCardThumb": { ServiceCardThumb: () => null },
  "@/app/services.generated.css": {},
  "@/lib/render-inline-service-page": { createInlineServicePageExports: (_, content) => ({ Page: () => content }) },
  "next/link": { __esModule: true, default: nativeLink },
  "next/navigation": { usePathname: () => "/sluzby" },
  "@/lib/i18n/locale-context": { useLocale: () => locale, useTranslations: namespace => require(path.join(root, "messages", locale + ".json"))[namespace] },
});
const { partitionServiceCatalog } = load(path.join(root, "src/lib/service-catalog.ts"));
const { getServiceGroups } = load(path.join(root, "src/lib/i18n/content.ts"));
const { getRelatedServicesForArticle } = load(path.join(root, "src/lib/poradna-service-links.ts"));
const { getDedicatedService } = load(path.join(root, "src/lib/i18n/service-pages.ts"));
const { ServicePage } = load(path.join(root, "src/components/ServicePage.tsx"));
const { readContactUrlPrefill } = load(path.join(root, "src/lib/contact-url-prefill.ts"));
const { stripInlineMarkdown } = load(path.join(root, "src/lib/plain-text.ts"));
const plain = html => html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();

async function main() {
  for (locale of ["cs", "en", "de"]) {
    const groups = await getServiceGroups(locale);
    const before = JSON.stringify(groups);
    const catalog = partitionServiceCatalog(groups);
    const hrefs = [...catalog.groups.flatMap(g => g.items), ...catalog.situations].map(item => item.href);
    assert.equal(new Set(hrefs).size, hrefs.length, "No duplicated catalog destinations");
    assert.deepEqual([...hrefs].sort(), groups.flatMap(g => g.items.map(item => item.href)).sort(), "Keep every indexed destination");
    assert.equal(JSON.stringify(groups), before, "Do not mutate the authoritative catalog");
    assert.deepEqual(catalog.groups.map(g => g.id), groups.map(g => g.id), "Keep all six deep-link anchors");
    assert.equal(catalog.situations.length, locale === "cs" ? 2 : 0);
    assert.deepEqual(catalog.groups[0].items.slice(0, 4).map(i => i.href), ["/sluzby/pracovni-prostredi", "/sluzby/mereni-hluku", "/sluzby/mereni-vibraci", "/sluzby/mereni-osvetleni"]);
    const related = getRelatedServicesForArticle("Měření vibrací řidičů VZV: příprava a podklady", "mereni-vibraci-ridicu-vzv-priprava-smeny", "Pracovní prostředí", locale);
    assert.deepEqual(related.map(item => item.href), ["/sluzby/mereni-vibraci", "/sluzby/pracovni-prostredi"], "Do not pad a specific article with unrelated chemical administration");
  }
  locale = "cs";
  const article = fs.readFileSync(path.join(root, "content/articles/mereni-vibraci-ridicu-vzv-priprava-smeny.md"), "utf8");
  const inquiry = article.match(/\[Pošlete nám zadání\]\(([^)]+)\)/)[1];
  const prefill = readContactUrlPrefill(new URL(inquiry, "https://www.naturchem.cz").search);
  assert.deepEqual(prefill.initialServices, ["Měření vibrací"]);
  assert.equal(prefill.initialMessage, "Poptávám měření celkových vibrací řidičů VZV.");
  for (const slug of ["pracovni-prostredi", "mereni-mikroklimatu"]) {
    const content = slug === "pracovni-prostredi"
      ? load(path.join(root, "src/app/[locale]/sluzby/pracovni-prostredi/page.tsx")).default()
      : await getDedicatedService(slug, "cs");
    const html = renderToStaticMarkup(await ServicePage({ ...content, locale: "cs" }));
    assert.ok(html.includes('data-service-presentation="decision-first"'));
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    const body = plain(html);
    assert.ok(body.includes(stripInlineMarkdown(content.intro)), "Keep the complete approved service introduction");
    for (const field of ["scope", "outputs", "docs", "whenNeeded", "commonMistakes", "practicalSituations"]) {
      for (const item of content[field] || []) assert.ok(body.includes(stripInlineMarkdown(item)), "Approved content retained: " + slug + " / " + field);
    }
    const lists = [...html.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)].map(m => plain(m[1]));
    for (const item of content.docs) assert.equal(lists.filter(s => s === stripInlineMarkdown(item)).length, 1, "Preparation checklist once, next to inquiry");
    const details = html.slice(html.indexOf('aria-labelledby="service-details-heading"'));
    assert.ok(!details.includes("Co zajišťujeme a co dostanete") && !details.includes("Podklady a příprava"), "Remove repeated disclosures rather than hiding the same content again");
    assert.equal((html.match(/href="[^"]*kontakt[^"]*"/g) || []).length, 2);
    for (const lang of ["en", "de"]) {
      const translated = slug === "pracovni-prostredi"
        ? load(path.join(root, "src/lib/inline-service-pages-" + lang + ".ts")).inlineServicePagesEn[slug]
        : await getDedicatedService(slug, lang);
      const translatedHtml = renderToStaticMarkup(await ServicePage({ ...translated, locale: lang }));
      assert.ok(!translatedHtml.includes('data-service-presentation="decision-first"'), "Do not leak Czech pilot UI into translations");
    }
  }
  const header = fs.readFileSync(path.join(root, "src/components/HeaderClient.tsx"), "utf8");
  const servicesPage = fs.readFileSync(path.join(root, "src/app/[locale]/sluzby/page.tsx"), "utf8");
  assert.ok(servicesPage.includes("primaryHref={link(pageCtaPresets.servicesIndex.primaryHref)}"), "Keep the catalog inquiry in the visitor's language");
  const section = header.slice(header.indexOf('<section className="nav-mobile-services"'), header.indexOf('</section>', header.indexOf('<section className="nav-mobile-services"')));
  assert.ok(section.includes("<MobileServiceMegaGroups") && section.includes(" topLevel"));
  assert.ok(!section.includes("<details"), "No redundant service disclosure around the three categories");
  assert.ok(header.includes('href="/reference"'), "Direct, understandable reference destination");
  const mobile = header.slice(header.indexOf("const mobileMenu"), header.indexOf('className="container nav"'));
  assert.ok(mobile.indexOf('href={salesNavLink.href}') > mobile.indexOf('href={kontaktNav.href}'), "Equipment is retained as a secondary path");
  console.log("PASS customer journey: complete immutable catalog, native anchors and priorities in 3 locales, precise article next steps and VZV prefill, 2 content-preserving service pilots, one mobile category level and secondary equipment path; no network");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
