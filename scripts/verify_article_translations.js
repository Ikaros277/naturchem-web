/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const matter = require("gray-matter");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const load = require("./lib/load-typescript")({
  "./article-reading.module.css": { __esModule: true, default: new Proxy({}, { get: (_, name) => String(name) }) }
});
const { renderArticleMarkdown } = load(path.join(root, "src/components/ArticleMarkdown.tsx"));
const { parseArticleHeadingIds } = load(path.join(root, "src/lib/article-reading.ts"));
function articles(folder) {
  return new Map(fs.readdirSync(path.join(root, "content", folder))
    .filter(name => name.endsWith(".md") && !name.startsWith("_") && !/^(readme|changelog)\.md$/i.test(name))
    .map(name => matter(fs.readFileSync(path.join(root, "content", folder, name), "utf8")))
    .map(article => [article.data.slug, article]));
}
const en = articles("articles-en"), de = articles("articles-de");
const reviewed = [
  { slug: "co-poslat-pro-rychle-posouzeni-zameru", anchors: 14, tables: 6, german: /Unterlagen für die erste Einschätzung/ },
  { slug: "mereni-mikroklimatu-na-pracovisti-teplota-vlhkost-a-proudeni-vzduchu", anchors: 10, tables: 2, german: /Jahreszeit und Betriebszustand/ },
  { slug: "mereni-chemickych-latek-v-pracovnim-ovzdusi-co-rozhoduje-o-rozsahu-mereni", anchors: 19, tables: 4, german: /Schichtlänge und Expositionsdauer/ }
];
function html(article, locale) {
  return renderToStaticMarkup(renderArticleMarkdown(article.content, locale, parseArticleHeadingIds(article.data.headingIds)).content);
}
const ids = value => [...value.matchAll(/<h[2-6]\b[^>]*id="(kapitola-[^"]+)"/g)].map(match => match[1]).sort();
const externalLinks = value => [...value.matchAll(/href="(https?:[^"\s]+)"/g)].map(match => match[1]);
for (const item of reviewed) {
  const before = en.get(item.slug), after = de.get(item.slug);
  assert.ok(before && after, "Pair by public slug, not a possibly colliding CMS filename");
  for (const key of ["slug", "publishedAt", "author", "heroImage"]) {
    assert.deepEqual(after.data[key], before.data[key], "Do not change article identity: " + item.slug + "/" + key);
  }
  const oldHtml = html(before, "en"), newHtml = html(after, "de");
  assert.equal(ids(oldHtml).length, item.anchors, "The reference covers all original headings, including H3 examples");
  assert.deepEqual(ids(newHtml), ids(oldHtml), "Keep every old heading URL: " + item.slug);
  assert.equal((newHtml.match(/class="article-table-wrap"/g) || []).length, item.tables);
  assert.equal((oldHtml.match(/class="article-table-wrap"/g) || []).length, item.tables);
  for (const href of externalLinks(oldHtml)) assert.ok(externalLinks(newHtml).includes(href), "Preserve existing source links: " + href);
  assert.notEqual(after.content.trim(), before.content.trim(), "Do not silently restore the copied English body");
  assert.match(after.content, item.german);
  assert.match(after.content, /Tschechien/, "State the Czech jurisdiction rather than implying German rules");
  assert.doesNotMatch(after.content, /^#{2,3}\s+(?:When |What |Why |Summary\b|Factual basis|Useful links|Measurement outputs|Personal and stationary)/m);
  assert.equal((newHtml.match(/href="\/de\/kontakt\/#poptavkovy-formular"/g) || []).length, 1, "One relevant localized inquiry action");
}
const chemical = de.get(reviewed[2].slug).content;
assert.match(chemical, /hypothetische Beispiel/, "An illustrative shift must not look like a real customer reference");
assert.match(chemical, /keine Messergebnisse/);
assert.match(chemical, /keine konkrete Referenz/);
assert.match(chemical, /Atemminutenvolumen/, "Do not imply every TWA is directly comparable with the same PEL");
assert.match(chemical, /nicht um deutsche Arbeitsplatzgrenzwerte/);
assert.ok(chemical.includes("https://ppropo.mpsv.cz/narizeni_vlady_361_2007"), "Retain the checked primary legal source");

// Known debt is explicit. A different body is not proof of a good translation.
const knownEnglishBodies = new Set([
  "co-se-meni-v-povolovani-zdroju-znecistovani-ovzdusi-v-roce-2026",
  "elektronicke-oznamovani-mereni-emisi-a-predavani-protokolu-prakticky-dopad-na-provozovatele",
  "emise-vs-imise-proc-provozovatel-resi-oboji",
  "jake-podklady-potrebujete-pro-povoleni-prumysloveho-provozu-z-hlediska-zivotniho-prostredi",
  "kdy-muze-urad-pozadovat-odborny-posudek-i-u-zmeny-stavajiciho-zdroje",
  "lakovna-emise-voc-provozni-rad-mereni-a-povoleni-provozu",
  "mereni-osvetleni-pracoviste-khs-kolaudace",
  "merici-misto-na-vyduchu-nejcastejsi-chyby-ktere-zkomplikuji-mereni-emisi",
  "merici-misto-na-vyduchu-proc-je-dulezite-uz-ve-fazi-projektu",
  "nedostatecne-osvetleni-pracoviste-co-se-meri-podklady",
  "nove-metodicke-vyklady-mzp-k-dopovolovanym-zdrojum-co-ma-provozovatel-zkontrolovat",
  "novela-zakona-o-ochrane-ovzdusi-2025",
  "proc-nestaci-katalogovy-udaj-zarizeni-pro-hlukove-posouzeni",
  "projektant-vs-ekologicky-konzultant-kdy-zapojit-odbornika-na-ovzdusi-hluk-a-eia",
  "recyklacni-stredisko-stavebnich-odpadu-hluk-prach-doprava-a-eia",
  "scitaci-pravidla-u-zdroju-znecistovani-ovzdusi-proc-mohou-zmenit-povinnosti-provozovatele",
  "skladka-a-odpadove-zarizeni-jake-environmentalni-podklady-se-obvykle-resi"
]);
const normalize = body => body.replace(/\r\n/g, "\n").replace(/\]\((https:\/\/www\.naturchem\.cz)?\/(?:en|de)\//g, "]($1/").trim();
const pending = [];
for (const [slug, article] of de) {
  const english = en.get(slug);
  if (!english || !normalize(article.content) || normalize(article.content) !== normalize(english.content)) continue;
  pending.push(slug);
  assert.ok(knownEnglishBodies.has(slug), "New copied English body on a German URL: " + slug);
}
console.log("PASS reviewed German translations: " + reviewed.length + " pages, 43 original heading URLs and 12 tables, source links/identity/Czech jurisdiction/inquiry paths; remaining known copied English bodies: " + pending.length + " (not repaired by this test)");

if (process.argv.includes("--rendered")) {
  for (const item of reviewed) {
    const rendered = fs.readFileSync(path.join(root, ".next/server/app/de/poradna", item.slug + ".html"), "utf8");
    const article = de.get(item.slug), expected = html(article, "de");
    assert.deepEqual(ids(rendered), ids(expected), "Built article retains every old chapter target: " + item.slug);
    assert.match(rendered, item.german);
    assert.ok(rendered.includes('href="/de/kontakt/#poptavkovy-formular"'));
    assert.equal((rendered.match(/class="article-table-wrap"/g) || []).length, item.tables);
  }
  console.log("PASS rendered German translations: three complete public HTML articles with original chapter IDs, tables and localized inquiries");
}
