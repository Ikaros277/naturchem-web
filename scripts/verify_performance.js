/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");
const root = path.resolve(__dirname, "..");
const load = require("./lib/load-typescript.js")();
const { buildArticleIndexes } = require("./generate_article_indexes.js");
const { readCatalog } = require("./scheduled_publication.js");
const { PORADNA_PAGE_SIZE, poradnaPageCount, poradnaPagePath } = load(path.join(root, "src/lib/poradna-pagination.ts"));
const { poradnaSearchIndexUrl, poradnaListingIndexUrl } = load(path.join(root, "src/lib/poradna-search-index.ts"));
const { heroThemeForArticle } = load(path.join(root, "src/lib/poradna-topic.ts"));
const { getHeroImageSrc } = load(path.join(root, "src/lib/hero-images.ts"));

async function main() {
  assert.equal(PORADNA_PAGE_SIZE, 12);
  for (const [total, pages] of [[0, 1], [12, 1], [13, 2], [75, 7]]) assert.equal(poradnaPageCount(total), pages);
  assert.equal(poradnaPagePath(1), "/poradna");
  assert.equal(poradnaPagePath(2), "/poradna/strana/2");
  const indexes = buildArticleIndexes(readCatalog());
  const images = require(path.join(root, "src/lib/responsive-images.json"));
  for (const locale of ["cs", "en", "de"]) {
    const listing = JSON.parse(fs.readFileSync(path.join(root, `public/search/poradna-listing-${locale}.json`), "utf8"));
    assert.deepEqual(listing, indexes.listings[locale], "Static filters must use current published content");
    assert.match(poradnaSearchIndexUrl(locale), /\?v=[a-f0-9]+$/);
    assert.match(poradnaListingIndexUrl(locale), /\?v=[a-f0-9]+$/);
    for (const article of listing) {
      assert.ok(images.thumbs[article.heroImage || getHeroImageSrc(heroThemeForArticle(article))], "Every published article has a small static preview");
    }
  }
  for (const image of Object.values(images.thumbs)) {
    for (const width of image.widths) {
      for (const format of ["avif", "webp"]) {
        const file = path.join(root, "public", `${image.base}-${width}.${format}`);
        const meta = await sharp(file).metadata();
        assert.equal(meta.width, width);
        assert.ok(!meta.exif && !meta.xmp && !meta.iptc, "No personal or location metadata");
        const size = fs.statSync(file).size;
        assert.ok(size < (width <= 192 ? 16000 : width <= 384 ? 40000 : 140000), "Article thumbnail byte budget: " + file);
      }
    }
  }
  assert.ok(fs.readFileSync(path.join(root, "src/components/SemanticCard.tsx"), "utf8").includes("prefetch={false}"), "Do not prefetch every linked card");
  assert.ok(!fs.readFileSync(path.join(root, "src/app/globals.css"), "utf8").includes(".poradna-search"), "Keep article-only CSS out of shared styles");
  console.log("PASS performance source checks: publication parity, versioned lazy search, static image budgets and scoped styles");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
