/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const app = path.join(root, ".next/server/app");
const load = require("./lib/load-typescript.js")();
const { poradnaPageCount, poradnaPagePath, PORADNA_PAGE_SIZE } = load(path.join(root, "src/lib/poradna-pagination.ts"));
const { localizedCanonical } = load(path.join(root, "src/lib/i18n/metadata-helpers.ts"));

function readPage(locale, route) {
  const htmlFile = path.join(app, locale + (route === "/" ? "" : route) + ".html");
  assert.equal(JSON.parse(fs.readFileSync(htmlFile.replace(/\.html$/, ".meta"), "utf8")).status ?? 200, 200, htmlFile);
  return fs.readFileSync(htmlFile, "utf8");
}
for (const locale of ["cs", "en", "de"]) {
  const articles = JSON.parse(fs.readFileSync(path.join(root, `public/search/poradna-listing-${locale}.json`), "utf8"));
  const found = new Set();
  for (let page = 1; page <= poradnaPageCount(articles.length); page++) {
    const route = poradnaPagePath(page);
    const html = readPage(locale, route);
    const cards = [...html.matchAll(/<a\b[^>]*class="[^"]*\barticle-list-card\b[^"]*"[^>]*>[\s\S]*?<\/a>/g)].map(match => match[0]);
    const expected = articles.slice((page - 1) * PORADNA_PAGE_SIZE, page * PORADNA_PAGE_SIZE);
    assert.equal(cards.length, expected.length, `${locale}${route}: render only this page's cards`);
    assert.ok(Buffer.byteLength(html) < 170000, `${locale}${route}: listing HTML budget 170 kB`);
    assert.ok(html.includes(`rel="canonical" href="${localizedCanonical(route, locale)}"`), "Self-canonical pagination");
    assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), "Pagination stays crawlable/indexable");
    for (let i = 0; i < cards.length; i++) {
      assert.ok(cards[i].includes(`href="${expected[i].href}"`), "Stable chronological article order and URLs");
      assert.ok(cards[i].includes("<h2") && !cards[i].includes("<h3"), "Do not skip heading levels");
      assert.ok(cards[i].includes("<picture>") && !cards[i].includes("/_next/image"), "Static responsive article previews");
      found.add(expected[i].slug);
    }
  }
  assert.equal(found.size, articles.length, "All published articles remain reachable without JavaScript/search");
  const faq = readPage(locale, "/faq");
  const jsonld = [...faq.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  const schema = jsonld.find(item => item["@type"] === "FAQPage");
  const visibleAnswers = (faq.match(/<details\b[^>]*class="faq-accordion"/g) || []).length;
  assert.ok(visibleAnswers > 20, "Retain the visible knowledge base");
  assert.ok(schema?.mainEntity.length > 0 && schema.mainEntity.length <= 16, "Bound redundant semantic FAQ data");
  assert.ok(Buffer.byteLength(faq) < 280000, "FAQ HTML budget 280 kB");
  console.log(`PASS ${locale}: ${articles.length} articles across ${poradnaPageCount(articles.length)} static listings; FAQ ${visibleAnswers} visible answers / ${schema.mainEntity.length} semantic examples`);
}
console.log("PASS rendered performance: pagination, discoverability, static images, metadata and bounded FAQ");
