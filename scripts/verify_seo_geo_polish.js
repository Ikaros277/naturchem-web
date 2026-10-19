/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const matter = require("gray-matter");
const root = path.resolve(__dirname, "..");
const load = require("./lib/load-typescript")();
const { buildOrganizationJsonLd, buildLocalBusinessJsonLd } = load(path.join(root, "src/lib/organization-jsonld.ts"));
const { buildArticleAuthor, expertAuthorId } = load(path.join(root, "src/lib/article-author.ts"));
const { articleSearchMetadata } = load(path.join(root, "src/lib/article-seo.ts"));
const { getReferencePhotographSources, referencePhotographs } = load(path.join(root, "src/lib/reference-photographs.ts"));
const { shouldLoadSpeedInsights } = load(path.join(root, "src/lib/platform-insights.ts"));
const fonts = require("../src/lib/font-manifest.json");
let articles = 0;
for (const locale of ["cs", "en", "de"]) {
  const organization = buildOrganizationJsonLd(locale);
  assert.doesNotMatch(JSON.stringify(organization.hasCredential), /GHG|greenhouse|skleníkov|Treibhaus/i);
  assert.doesNotMatch(JSON.stringify(organization.knowsAbout), /GHG.*verification|ověřování emisí skleníkových|Überprüfung von Treibhausgasemissionen/i);
  assert.equal(buildLocalBusinessJsonLd(locale).priceRange, undefined, "No invented price tier");
  const person = buildArticleAuthor("Ing. František Hezina", locale);
  assert.equal(person["@type"], "Person");
  assert.equal(person["@id"], expertAuthorId);
  assert.ok(person.url.endsWith("#frantisek-hezina"));
  assert.equal(buildArticleAuthor("NATURCHEM", locale)["@type"], "Organization");
  const directory = path.join(root, "content", locale === "cs" ? "articles" : "articles-" + locale);
  const titles = new Set();
  for (const file of fs.readdirSync(directory).filter(name => name.endsWith(".md"))) {
    const { data } = matter(fs.readFileSync(path.join(directory, file), "utf8"));
    if (!data.title || data.status === "draft" || Date.parse(data.publishedAt) > Date.now()) continue;
    const article = { ...data, slug: data.slug || file.slice(0, -3) };
    const metadata = articleSearchMetadata(article, locale);
    assert.ok(metadata.title && metadata.description);
    assert.ok(!titles.has(metadata.title), "No duplicate article metadata: " + locale + "/" + article.slug);
    titles.add(metadata.title);
    assert.ok(metadata.title.length <= 50, "Article search title fits with the brand suffix (max 50): " + locale + "/" + article.slug + " (" + metadata.title.length + ")");
    if (locale === "cs") {
      assert.ok(metadata.description.length <= 180, "Bounded complete-sentence description: " + article.slug);
    }
    articles++;
  }
}
// Landing and facility pages: search titles stay within one result line together with the brand suffix.
for (const [name, list] of [
  ["cs landing", load(path.join(root, "src/lib/seo-landings.ts")).seoLandings],
  ["en landing", load(path.join(root, "src/lib/seo-landings-en.ts")).seoLandings],
  ["de landing", load(path.join(root, "src/lib/seo-landings-de.ts")).seoLandings]
]) {
  for (const landing of list) assert.ok(landing.title.length <= 50, name + " title too long for search results: " + landing.slug + " (" + landing.title.length + ")");
}
for (const [name, pages] of [
  ["cs sector", load(path.join(root, "src/lib/sector-pages.ts")).sectorPages],
  ["en sector", load(path.join(root, "src/lib/sector-pages-en.ts")).sectorPagesEn],
  ["de sector", load(path.join(root, "src/lib/sector-pages-de.ts")).sectorPagesEn]
]) {
  for (const [key, page] of Object.entries(pages)) assert.ok(page.metadataTitle.length <= 56, name + " title too long for search results: " + key + " (" + page.metadataTitle.length + ")");
}
const { salesMetaTitle } = load(path.join(root, "src/lib/sales-meta-title.ts"));
assert.equal(salesMetaTitle("FID detektor", "PCF Elettronica"), "FID detektor | PCF Elettronica");
assert.equal(salesMetaTitle("Mod. 8807/NR přenosný GC pro NMH nebo specifické složky", "PCF Elettronica"), "Mod. 8807/NR přenosný GC pro NMH nebo specifické složky", "brand is dropped when the title would be cut");
const { fallbackSearchTitle } = load(path.join(root, "src/lib/article-seo.ts"));
assert.equal(fallbackSearchTitle("Short title"), "Short title");
assert.equal(fallbackSearchTitle("Dust control measures on construction sites: what documentation should contain and what the authority may require"), "Dust control measures on construction sites");
assert.ok(fallbackSearchTitle("A very long title without any separator that keeps going and going and going for much longer").length <= 50);
const glyphs = new Set(fonts.flatMap(font => font.codepoints));
for (const letter of "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzáčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽäöüÄÖÜß€") assert.ok(glyphs.has(letter.codePointAt(0)), "Required font glyph: " + letter);
assert.ok(fonts.reduce((sum, font) => sum + font.after, 0) < 56000);
for (const font of fonts) assert.equal(fs.statSync(path.join(root, "public", font.path)).size, font.after);
for (const photo of referencePhotographs) {
  const sources = getReferencePhotographSources(photo);
  for (const set of [sources.srcSet, sources.avifSrcSet]) {
    assert.match(set, /768w/, "Intermediate mobile photo size");
    for (const src of set.split(", ")) assert.ok(fs.existsSync(path.join(root, "public", src.split(" ")[0])));
  }
}
const read = file => fs.readFileSync(path.join(root, file), "utf8");
for (const component of ["SkipToContent", "Breadcrumbs", "PageCtaStrip", "ArticleRelatedServices", "FaqPageContent", "ServiceEvidence", "ServiceFaqTeaser", "SalesPageToolbar"]) {
  const source = read("src/components/" + component + ".tsx");
  assert.doesNotMatch(source, /from "next\/link"|<Link\b/, "No speculative prefetch in presentational navigation: " + component);
  assert.match(source, /<a\b[^>]*href=/, "Preserve native discoverable links: " + component);
}
assert.doesNotMatch(read("src/components/ServiceDetailLayout.tsx"), /href\("\/faq#" \+ content.faqCategoryId\)/);
assert.match(read("src/components/TeamSection.tsx"), /"frantisek-hezina"/);
assert.match(read("src/components/FaqSearchClient.tsx"), /if \(!query && !previousOpen.current\) return/);
assert.match(read("src/components/CookieConsentBanner.tsx"), /onClick=\{acceptAll\}/);
assert.match(read("src/components/CookieConsentBanner.tsx"), /onClick=\{rejectOptional\}/);
for (const host of ["localhost", "127.0.0.1", "::1", "[::1]", "preview.localhost"]) assert.equal(shouldLoadSpeedInsights(host), false);
for (const host of ["www.naturchem.cz", "naturchem.cz", "naturchem-web.vercel.app"]) assert.equal(shouldLoadSpeedInsights(host), true);
assert.match(read("src/components/PlatformSpeedInsights.tsx"), /shouldLoadSpeedInsights\(window.location.hostname\)/);
assert.match(read("src/components/DeferredClientWidgets.tsx"), /ssr: false/);
assert.match(read("src/components/PoradnaListingPage.tsx"), /description: listingDescription\(locale, page/);
for (const sheet of ["src/components/homepage.module.css", "src/components/reference-photo-showcase.module.css"]) {
  assert.match(read(sheet), /content-visibility: auto/);
  assert.match(read(sheet), /contain-intrinsic-block-size: auto/);
  assert.match(read(sheet), /@media print[\s\S]*content-visibility: visible/, "Printed content remains fully rendered");
}
assert.match(read("src/app/sitemap.ts"), /ENTITY_METADATA_REVISION = new Date\("2026-10-13T00:00:00.000Z"\)/);
console.log("PASS SEO/GEO polish: " + articles + " article metadata variants, truthful GHG credentials, consistent authors, local font glyphs, responsive reference photos and protected consent.");
