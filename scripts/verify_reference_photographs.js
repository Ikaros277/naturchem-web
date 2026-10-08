/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const link = ({ href, children, prefetch, ...props }) => {
  void prefetch;
  return React.createElement("a", { href, ...props }, children);
};
const load = require("./lib/load-typescript.js")({
  "next/link": { __esModule: true, default: link },
  "./reference-photo-showcase.module.css": { __esModule: true, default: new Proxy({}, { get: (_, name) => String(name) }) },
  "@/components/ReferenceHashTarget": { ReferenceHashTarget: () => null }
});
const { referenceExamples, getReferenceExamplesById } = load(path.join(root, "src/lib/reference-content.ts"));
const { referenceExampleGroups } = load(path.join(root, "src/lib/reference-example-groups.ts"));
const { referencePhotographs, getReferencePhotographSources } = load(path.join(root, "src/lib/reference-photographs.ts"));
const { ReferencePhotoShowcase } = load(path.join(root, "src/components/ReferencePhotoShowcase.tsx"));
const { ReferenceExamplesIndex } = load(path.join(root, "src/components/ReferenceExamplesIndex.tsx"));
const { toReferenceExampleListingMap } = load(path.join(root, "src/lib/reference-example-listing.ts"));
const { readContactUrlPrefill } = load(path.join(root, "src/lib/contact-url-prefill.ts"));

async function main() {
  const expectedCases = ["lak-automotive-emise", "bps-emise", "bps-serie-emise", "plyn-kotelna-emise", "hala-pp", "lakovna-diisokyanaty", "svarovna-pp", "kovovyroba-vibrace", "tcp-hluk"];
  const count = expectedCases.length;
  assert.deepEqual(referencePhotographs.map(photo => photo.exampleId), expectedCases, "Only individually reviewed photo/case pairs, not thematic substitutions");
  assert.equal(new Set(referencePhotographs.map(photo => photo.exampleId)).size, count);
  assert.equal(new Set(referencePhotographs.map(photo => getReferencePhotographSources(photo).src)).size, count, "Different photographs of the described cases");
  assert.equal(referenceExamples.length, 25, "One additional protocol-backed vibration case; do not count three protocols of the same plant as three clients");
  const ids = referencePhotographs.map(photo => photo.exampleId);
  const examplesById = getReferenceExamplesById();
  assert.equal(examplesById.get("vzt-hluk-studie").contactService, "Hlukové studie", "A study inquiry must not preselect noise measurement");
  for (const photo of referencePhotographs) {
    assert.ok(examplesById.has(photo.exampleId));
    assert.ok(photo.alt.length > 20 && photo.alt.length < 140);
    assert.equal(photo.relationship, "case", "An illustrative website photo is not a photograph of the reference");
    assert.ok(!photo.caption.includes("ilustrační"));
    assert.ok(photo.asset && !photo.theme, "Do not reuse unrelated thematic website images as case evidence");
    const sources = getReferencePhotographSources(photo);
    const variants = [...sources.srcSet.split(", "), ...sources.avifSrcSet.split(", ")];
    for (const item of variants) {
      const [src, width] = item.split(" ");
      const file = path.join(root, "public", src);
      assert.ok(fs.existsSync(file));
      const meta = await sharp(file).metadata();
      assert.equal(meta.width, Number(width.replace("w", "")));
      assert.ok(!meta.exif && !meta.xmp && !meta.iptc, "No source/client/location metadata");
      if (meta.width <= 640 && src.endsWith(".avif")) assert.ok(fs.statSync(file).size < 45000, "Mobile photo budget");
    }
  }
  for (const photo of referencePhotographs) {
    assert.ok(examplesById.get(photo.exampleId).documented);
    assert.ok(Number.isInteger(photo.year) && photo.year >= 2000 && photo.year <= 2026, "Year of the documented work, not an invented recent date");
  }
  assert.equal(referencePhotographs.find(photo => photo.exampleId === "lakovna-diisokyanaty").asset, "lakovna-vzorkovaci-kazeta", "Use the actual isocyanate sample photograph, not a VOC sorbent tube");
  const directory = path.join(root, "public/reference/authentic-2026-10-08");
  const files = fs.readdirSync(directory);
  const referencedFiles = referencePhotographs.flatMap(photo => [384, 640, 960].flatMap(width => ["avif", "webp"].map(format => photo.asset + "-" + width + "." + format))).sort();
  assert.deepEqual(files.sort(), referencedFiles, "Do not ship abandoned, unreferenced photo exports");
  const bytes = files.reduce((sum, file) => sum + fs.statSync(path.join(directory, file)).size, 0);
  assert.ok(bytes < 1600000, "Bounded total deployment storage for nine responsive photo sets");
  const html = renderToStaticMarkup(React.createElement(ReferencePhotoShowcase, {examplesById}));
  assert.equal((html.match(/<img\b/g) || []).length, count);
  assert.equal((html.match(/loading="lazy"/g) || []).length, count);
  assert.equal((html.match(/fetchPriority="low"/g) || []).length, count);
  assert.ok(!html.includes("/_next/image") && !html.includes("<script"), "No transform endpoint or gallery runtime");
  for (const id of ids) {
    const item = examplesById.get(id);
    assert.ok(html.includes('id="reference-' + id + '"'));
    assert.ok(html.includes(item.title) && html.includes(item.output), "Use the same verified content, no invented result");
  }
  for (const match of html.matchAll(/href="([^"]*kontakt[^"]*)"/g)) {
    const url = new URL(match[1].replaceAll("&amp;", "&"), "https://www.naturchem.cz");
    assert.equal(url.hash, "#poptavkovy-formular");
    assert.ok(readContactUrlPrefill(url.search).initialServices.length > 0, "Relevant inquiry service must be selected");
  }
  const listings = toReferenceExampleListingMap(examplesById);
  const overview = renderToStaticMarkup(await ReferenceExamplesIndex({ examplesById: listings, groups: referenceExampleGroups, locale: "cs", featuredIds: ids }));
  assert.equal((overview.match(/class="index-card-heading"/g) || []).length, referenceExamples.length - count, "Cases without a matching photograph stay in the compact overview");
  for (const id of ["vzt-hluk-studie", "rozptyl-kotelna", "ispop-vice", "provozni-rad-odpady"]) {
    assert.ok(overview.includes(examplesById.get(id).title), "Removing a mismatched photo must not remove the reference");
    assert.ok(!html.includes('id="reference-' + id + '"'));
  }
  const measuringSlugs = ["/sluzby/mereni-emisi", "/sluzby/pracovni-prostredi", "/sluzby/mereni-hluku", "/sluzby/mereni-vibraci", "/sluzby/mereni-diisokyanatu"];
  const measuringCases = referenceExamples.filter(example => measuringSlugs.includes(example.href));
  assert.equal(measuringCases.length, count);
  for (const example of measuringCases) assert.ok(ids.includes(example.id), "Every listed measuring case must have its reviewed representative photo");
  assert.ok(!examplesById.get("lak-automotive-emise").scope.includes("TZL"), "Do not add a particulate measurement not documented by the selected TOC case");
  assert.ok(examplesById.get("bps-serie-emise").scope.includes("v jedné"), "Two units at one site, not a fabricated multi-site series");
  assert.ok(examplesById.get("plyn-kotelna-emise").scope.includes("biomasu"), "Legacy stable ID is not evidence of gas fuel; use the actual biomass case");
  assert.ok(!examplesById.get("hala-pp").scope.includes("prach"), "Do not transfer dust measurement from an unrelated industrial scene");
  for (const id of ids) assert.ok(overview.includes('href="#reference-' + id + '"'), "Existing group links lead to featured case");
  const source = fs.readFileSync(path.join(root, "src/components/ReferencePhotoShowcase.tsx"), "utf8");
  assert.ok(!source.includes('"use client"'));
  assert.doesNotMatch(source, /(?:from ["']next\/link|<Link\b)/, "Static photo-card navigation must not add hydrated router instances");
  assert.equal((source.match(/<a\s+href=/g) || []).length, 3, "Keep overview, service and inquiry native links");
  const config = fs.readFileSync(path.join(root, "next.config.ts"), "utf8");
  assert.ok(config.includes('source: "/reference/authentic-2026-10-08/:path*"'), "Only dated photograph assets get immutable caching");
  assert.ok(!config.includes('source: "/reference/:path*"'), "Reference HTML must not receive a year-long browser cache");
  const logosSource = fs.readFileSync(path.join(root, "src/components/ClientLogosGrid.tsx"), "utf8");
  assert.doesNotMatch(logosSource, /(?:from ["']next\/image|<Image\b|useEffect|addEventListener\(["']resize)/, "Small customer logos use static assets and CSS previews, not image transforms or mount/resize work");
  assert.ok(logosSource.includes('aria-label={moreLabel}'), "Accessible name includes the visible customer-expansion label");
  assert.ok(!overview.includes('aria-label="Měření emisí,'), "Native summaries expose their complete visible name");
  const page = fs.readFileSync(path.join(root, "src/app/[locale]/reference/page.tsx"), "utf8");
  assert.ok(page.includes('locale === "cs" ? <ReferencePhotoShowcase'), "No Czech content leaked to EN/DE");
  assert.ok(page.indexOf('id="zakaznici"') < page.indexOf("<ReferencePhotoShowcase"), "Named customer evidence stays ahead of the longer showcase");
  assert.ok(page.includes("<ClientLogosGrid expandable />"), "More customers must expand, not link back to its own anchor");
  assert.doesNotMatch(page, /page-below-fold[^"\n]*" id="priklady"|satisfaction-survey-teaser page-below-fold/, "Native reference controls keep stable geometry during audit and deep-link traversal");
  assert.ok(!source.includes("page-below-fold"), "Native deep links need stable layout, not one estimated-height giant gallery");
  const globalStyles = fs.readFileSync(path.join(root, "src/app/globals.css"), "utf8");
  assert.ok(globalStyles.includes(".reference-example-group .service-group-summary-title-row { padding-inline-end: 52px; }"), "Narrow mobile category titles reserve space for the disclosure toggle");
  console.log("PASS photographic references: all 9 listed measuring cases have unique reviewed photographs, 16 compact study/document cases, no illustrative substitutions or unused exports; metadata-free responsive assets and contextual inquiries; " + bytes + " B storage");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
