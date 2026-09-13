/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const matter = require("gray-matter");
const sharp = require("sharp");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const report = require("../reports/generated-illustrations-2026-09-11.json");
const load = require("./lib/load-typescript.js")();
const { getGeneratedIllustrationSources } = load(path.join(root, "src/lib/generated-illustrations.ts"));
const { GeneratedIllustration } = load(path.join(root, "src/components/GeneratedIllustration.tsx"));
const { ArticleCardThumb } = load(path.join(root, "src/components/ArticleCardThumb.tsx"));
const { HeroPhoto } = load(path.join(root, "src/components/HeroPhoto.tsx"));
const { CaseStudyTileThumb } = load(path.join(root, "src/components/CaseStudyTileThumb.tsx"));
const { getHeroImageSrc } = load(path.join(root, "src/lib/hero-images.ts"));
const { getCaseStudyHeroImageConfig } = load(path.join(root, "src/lib/custom-hero-photos.ts"));
const hash = value => crypto.createHash("sha256").update(value).digest("hex");

async function main() {
  const hashes = new Set();
  let bytes = 0;
  let assignments = 0;
  let largestFull = 0;
  let largestThumbnail = 0;
  for (const asset of report.assets) {
    const sources = getGeneratedIllustrationSources(asset.output);
    assert.ok(sources, asset.id);
    assert.equal(sources.smallSrc, asset.thumbnail);
    for (const [url, width, height, budget] of [[asset.output, 1600, 900, 400000], [asset.thumbnail, 640, 360, 90000]]) {
      const file = path.join(root, "public", url);
      const data = fs.readFileSync(file);
      const metadata = await sharp(data).metadata();
      assert.equal(metadata.format, "webp", url);
      assert.equal(metadata.width, width, url);
      assert.equal(metadata.height, height, url);
      assert.ok(data.length < budget, "Image budget exceeded: " + url);
      bytes += data.length;
      if (width === 1600) {
        const digest = hash(data);
        assert.ok(!hashes.has(digest), "Duplicated illustration: " + url);
        hashes.add(digest);
        largestFull = Math.max(largestFull, data.length);
      } else largestThumbnail = Math.max(largestThumbnail, data.length);
    }
    for (const relative of asset.articleFiles) {
      const article = matter(fs.readFileSync(path.join(root, relative), "utf8")).data;
      assert.equal(article.slug, asset.slug, relative);
      assert.equal(article.heroImage, asset.output, relative);
      assignments++;
    }
  }
  assert.equal(hashes.size, 37);
  assert.equal(assignments, 100);
  assert.ok(bytes < 12 * 1024 * 1024, "Combined asset storage budget exceeded");
  const themes = ["air-quality", "laptop-forms", "hvac-units", "woodworking", "recycling", "diesel-generator", "automotive", "waste-landfill", "boiler-room", "paint-spray", "documents-desk", "factory-aerial"];
  for (const theme of themes) assert.ok(getGeneratedIllustrationSources(getHeroImageSrc("poradna-" + theme)), theme);
  for (const invalid of ["/hero/mereni-hluku.webp", "/hero/generated-2026-09/../image.webp", "/hero/generated-2026-09/a-640.webp", "https://example.com/a.webp"]) {
    assert.equal(getGeneratedIllustrationSources(invalid), null);
  }

  const src = report.assets[0].output;
  const render = (component, props) => renderToStaticMarkup(React.createElement(component, props));
  const lazy = render(GeneratedIllustration, { src, sizes: "100vw" });
  const priority = render(GeneratedIllustration, { src, sizes: "48vw", priority: true, fill: true });
  assert.match(lazy, /loading="lazy"/);
  assert.match(priority, /loading="eager"/);
  assert.match(priority, /fetchPriority="high"/);
  assert.match(priority, /position:absolute/);
  const study = { id: "pyrolyza-kalu", categoryId: "eia", title: "Illustration fixture" };
  assert.equal(getCaseStudyHeroImageConfig(study).src, "/hero/generated-2026-09/pyrolyza-kalu.webp");
  for (const html of [
    lazy, priority,
    render(ArticleCardThumb, { theme: "dokumentace", src }),
    render(HeroPhoto, { theme: "dokumentace", src, priority: true }),
    render(CaseStudyTileThumb, { study })
  ]) {
    assert.match(html, /srcSet="[^"]+-640.webp 640w, [^"]+.webp 1600w"/);
    assert.match(html, /width="1600" height="900" alt=""/);
    assert.ok(!html.includes("/_next/image"), "Generated illustration uses runtime transformation");
  }

  // One-time change audit, deliberately not part of permanent npm verify:
  // future approved editorial changes must not be blocked by this historical baseline.
  let preservedArticles = 0;
  let preservedFiles = 0;
  if (process.argv.includes("--preservation")) {
    for (const baseline of report.baseline.articles) {
      const article = matter(fs.readFileSync(path.join(root, baseline.file), "utf8"));
      const data = { ...article.data };
      delete data.heroImage;
      assert.equal(hash(JSON.stringify(data) + "\n" + article.content), baseline.contentHash, "Non-image article change: " + baseline.file);
      if (baseline.originalHero) assert.equal(article.data.heroImage, baseline.originalHero, "Existing unique image changed: " + baseline.file);
      preservedArticles++;
    }
    for (const [relative, digest] of Object.entries(report.baseline.protectedPaths)) {
      assert.equal(hash(fs.readFileSync(path.join(root, relative))), digest, "Protected asset/design changed: " + relative);
      preservedFiles++;
    }
  }
  let previewPages = 0;
  const previewIndex = process.argv.indexOf("--preview");
  if (previewIndex !== -1) {
    const base = new URL(process.argv[previewIndex + 1]);
    assert.ok(["127.0.0.1", "localhost", "[::1]"].includes(base.hostname), "Local preview only");
    for (const asset of report.assets) {
      for (const relative of asset.articleFiles) {
        const locale = relative.startsWith("content/articles-en/") ? "en" : relative.startsWith("content/articles-de/") ? "de" : "cs";
        const url = new URL((locale === "cs" ? "" : "/" + locale) + "/poradna/" + asset.slug + "/", base);
        const response = await fetch(url);
        assert.equal(response.status, 200, url.href);
        const html = await response.text();
        assert.ok(html.includes(asset.thumbnail + ' 640w'), "Stale article illustration: " + url.href);
        assert.ok(html.includes('content="https://www.naturchem.cz' + asset.output + '"'), "Stale social image: " + url.href);
        previewPages++;
      }
      for (const url of [asset.output, asset.thumbnail]) {
        const response = await fetch(new URL(url, base), { method: "HEAD" });
        assert.equal(response.status, 200, url);
        assert.match(response.headers.get("content-type"), /image\/webp/);
      }
    }
    const home = await (await fetch(base)).text();
    for (const asset of report.assets.slice(0, 3)) assert.ok(home.includes(asset.thumbnail + ' 640w'), "Homepage reused stale article data: " + asset.id);
  }
  console.log(JSON.stringify({ status: "passed", uniqueIllustrations: hashes.size, responsiveFiles: hashes.size * 2, articleAssignments: assignments, bytes, largestFull, largestThumbnail, preservedArticles, preservedFiles, previewPages }, null, 2));
}

main().catch(error => { console.error(error); process.exitCode = 1; });
