/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");

const appRoot = path.resolve(__dirname, "..", ".next", "server", "app");
const inlineStyleBudget = 8 * 1024;

function htmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(fullPath);
    return entry.name.endsWith(".html") ? [fullPath] : [];
  });
}

let pagesChecked = 0;
for (const file of htmlFiles(appRoot)) {
  const relative = path.relative(appRoot, file).replaceAll("\\", "/");
  if (!/^(?:cs|en|de)(?:\/|\.html$)/.test(relative)) continue;
  const metadata = JSON.parse(fs.readFileSync(file.replace(/\.html$/, ".meta"), "utf8"));
  // Next.js also emits HTML placeholders for redirects and intentional 404s.
  // They are not successful public pages and need no document stylesheet.
  if ((metadata.status ?? 200) !== 200) continue;
  const html = fs.readFileSync(file, "utf8");
  const inlineBytes = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)]
    .reduce((total, match) => total + Buffer.byteLength(match[1]), 0);
  assert.ok(inlineBytes <= inlineStyleBudget, `${relative}: ${inlineBytes} inline CSS bytes exceed ${inlineStyleBudget}; keep shared CSS cacheable`);
  const stylesheets = [...html.matchAll(/<link\b[^>]*>/gi)]
    .filter(([tag]) => /\brel="stylesheet"/.test(tag));
  assert.ok(stylesheets.length > 0, `${relative}: missing external shared stylesheet`);
  for (const [tag] of stylesheets) {
    const href = tag.match(/\bhref="([^"]+)"/)?.[1];
    assert.ok(href?.startsWith("/_next/static/") && href.split("?")[0].endsWith(".css"), `${relative}: stylesheet must be a versioned Next.js static asset`);
    const cssFile = path.join(appRoot, "..", "..", href.split("?")[0].slice("/_next/".length));
    assert.ok(fs.existsSync(cssFile), `${relative}: missing stylesheet asset ${href}`);
  }
  pagesChecked += 1;
  if (/^cs(?:\.html|\/(?:kontakt|faq|poradna|sluzby\/mereni-emisi)\.html)$/.test(relative)) {
    console.log(`${relative}: HTML ${Buffer.byteLength(html)} B, inline CSS ${inlineBytes} B, local gzip ${zlib.gzipSync(html).length} B, stylesheets ${stylesheets.length}`);
  }
}
assert.ok(pagesChecked >= 100, `Expected the complete static site, found only ${pagesChecked} pages`);
console.log(`PASS rendered cache budget: ${pagesChecked} static pages; gzip sizes are local estimates, not Vercel billing measurements`);
