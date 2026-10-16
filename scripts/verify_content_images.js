/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const load = require("./lib/load-typescript.js")();
const images = require("../src/lib/responsive-content-images.json");
const { StaticContentImage } = load(path.join(root, "src/components/StaticContentImage.tsx"));

async function main() {
  const plan = require("./lib/content-image-plan.js")(root);
  assert.deepEqual(Object.keys(images).sort(), [...plan.keys()].sort(), "Prepare only referenced content assets");
  let bytes = 0;
  let variants = 0;
  for (const [src, requestedWidths] of plan) {
    const image = images[src];
    assert.match(image.base, /^\/hero\/responsive-2026-10\/image-[a-f0-9]{12}$/);
    const original = await sharp(path.join(root, "public", src)).metadata();
    const rotated = original.orientation >= 5 && original.orientation <= 8;
    const width = rotated ? original.height : original.width;
    const height = rotated ? original.width : original.height;
    assert.equal(image.width, width);
    assert.equal(image.height, height);
    assert.deepEqual(image.widths, [...new Set(requestedWidths.map(w => Math.min(w, width)))]);
    for (const w of image.widths) {
      for (const format of ["webp", "avif"]) {
        const file = path.join(root, "public", `${image.base}-${w}.${format}`);
        const metadata = await sharp(file).metadata();
        assert.equal(metadata.format, format === "avif" ? "heif" : format);
        assert.equal(metadata.width, w);
        assert.ok(Math.abs(metadata.height - Math.round(height * w / width)) <= 1,
          "Preserve aspect ratio (allow encoder rounding by one pixel): " + file);
        assert.ok(!metadata.exif && !metadata.xmp && !metadata.iptc, "Strip private metadata");
        const size = fs.statSync(file).size;
        assert.ok(size <= (w <= 240 ? 30000 : w <= 480 ? 80000 : 200000), "Byte budget exceeded: " + file);
        bytes += size;
        variants++;
      }
    }
    const html = renderToStaticMarkup(React.createElement(StaticContentImage, {
      src, alt: "Odborný přístroj", sizes: "240px", fill: true, className: "test-image"
    }));
    assert.match(html, /<picture><source type="image\/avif"/);
    assert.match(html, /alt="Odborný přístroj"/);
    assert.match(html, /object-fit:contain/);
    assert.match(html, /loading="lazy" fetchPriority="low"/);
    assert.doesNotMatch(html, /_next\/image/, "Prepared assets never use runtime transforms");
    assert.ok(image.widths.every(w => html.includes(`${image.base}-${w}.webp ${w}w`)));
  }
  // The decorative article default and unknown-source compatibility must remain.
  const { ResponsiveImage } = load(path.join(root, "src/components/ResponsiveImage.tsx"));
  const fixture = Object.entries(images)[0];
  assert.match(renderToStaticMarkup(React.createElement(ResponsiveImage, {
    src: fixture[0], image: fixture[1], sizes: "240px"
  })), /alt=""/);
  assert.match(renderToStaticMarkup(React.createElement(StaticContentImage, {
    src: "/logo-naturchem.svg", alt: "NATURCHEM", width: 160, height: 40, sizes: "160px"
  })), /alt="NATURCHEM"/);
  for (const file of ["StaticContentImage", "SalesProductThumb", "SalesProductList", "SalesCategoryOverview", "SalesBrandsGrid", "TeamSection"]) {
    assert.doesNotMatch(fs.readFileSync(path.join(root, "src/components", file + ".tsx"), "utf8"), /["']use client["']/,
      "No image manifest in a new client bundle: " + file);
  }
  assert.match(fs.readFileSync(path.join(root, "src/components/SalesProductList.tsx"), "utf8"), /fullWidthRows[\s\S]*sizes=\{fullWidthRows/,
    "Row thumbnails must declare their small desktop width");
  console.log(`PASS static content images: ${plan.size} sources / ${variants} AVIF-WebP variants / ${bytes} B stored; correct aspect, no enlargement, no metadata, preserved alt and contain fit`);

  if (process.argv.includes("--rendered")) {
    const { pcfElettronicaProducts } = load(path.join(root, "src/lib/pcf-elettronica-catalog.ts"));
    let count = 0;
    for (const locale of ["cs", "en", "de"]) {
      for (const route of ["/prodej", "/prodej/pcf-elettronica", "/o-spolecnosti-naturchem",
        ...pcfElettronicaProducts.map(p => "/prodej/pcf-elettronica/" + p.slug)]) {
        const html = fs.readFileSync(path.join(root, ".next/server/app", locale + route + ".html"), "utf8");
        const imgs = [...html.matchAll(/<img\b[^>]*class="[^"]*\b(?:sales-(?:category-list-thumb|product-grid-thumb|product-thumb|product-figure|brand-logo)-img|team-card-photo)\b[^"]*"[^>]*>/g)].map(m => m[0]);
        assert.ok(imgs.length > 0, "No tested images on " + locale + route);
        for (const img of imgs) {
          assert.ok(img.includes("/hero/responsive-2026-10/image-"));
          assert.doesNotMatch(img, /_next\/image/);
        }
        count++;
      }
    }
    console.log(`PASS rendered content images: ${count} catalog/company pages across all locales, no runtime resizing for prepared sources`);
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
