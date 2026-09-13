/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { hashArticleSources, readArticleContentVersion } = require("./lib/article-content-version.js");

const projectRoot = path.resolve(__dirname, "..");
const appRoot = path.join(projectRoot, "src", "app");

function collectSourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectSourceFiles(fullPath);
    return /\.(?:ts|tsx)$/.test(entry.name) ? [fullPath] : [];
  });
}

const timeBasedRevalidations = [];
for (const filePath of collectSourceFiles(appRoot)) {
  const source = fs.readFileSync(filePath, "utf8");
  for (const match of source.matchAll(/export const revalidate\s*=\s*(\d+)/g)) {
    timeBasedRevalidations.push({
      file: path.relative(projectRoot, filePath).replaceAll("\\", "/"),
      seconds: Number(match[1])
    });
  }
}

assert.deepEqual(
  timeBasedRevalidations,
  [],
  `Time-based ISR would consume Hobby write units: ${JSON.stringify(timeBasedRevalidations)}`
);

const staticPublishingRoutes = [
  "src/app/[locale]/page.tsx",
  "src/app/[locale]/poradna/page.tsx",
  "src/app/[locale]/poradna/[slug]/page.tsx",
  "src/app/sitemap.ts"
];

for (const relativePath of staticPublishingRoutes) {
  const source = fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
  assert.match(
    source,
    /export const revalidate\s*=\s*false/,
    `${relativePath} must remain static between CMS-triggered deployments`
  );
}

const first = [["cs/example.md", "---\nheroImage: /first.webp\n---\nBody"]];
assert.notEqual(hashArticleSources(first), hashArticleSources([["cs/example.md", "---\nheroImage: /second.webp\n---\nBody"]]), "Image-only edits must invalidate article caches");
assert.equal(hashArticleSources(first), hashArticleSources(first.map(([file, text]) => [file, text.replace(/\n/g, "\r\n")])), "Line endings must not create different content revisions");
const version = readArticleContentVersion(path.join(projectRoot, "content"));
assert.ok(fs.readFileSync(path.join(projectRoot, "src/lib/article-content-version.ts"), "utf8").includes(version), "Regenerate article indexes before verification");
assert.equal((fs.readFileSync(path.join(projectRoot, "src/lib/articles.ts"), "utf8").match(/\["articles?-.*?", articleContentVersion\]/g) || []).length, 2, "Both persistent article caches must be versioned");
console.log("PASS static cache-budget and content-version checks");
