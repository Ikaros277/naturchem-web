/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");
const root = path.resolve(__dirname, "..");

// Structural budgets, not a synthetic Lighthouse score. Compare the same build
// routes before and after a change; gzip here is not Vercel billing telemetry.
for (const route of ["cs", "en", "de", "cs/kontakt", "cs/sluzby/mereni-emisi", "cs/poradna"]) {
  const html = fs.readFileSync(path.join(root, ".next/server/app", route + ".html"), "utf8");
  const assets = [...new Set([...html.matchAll(/(?:src|href)="(\/_next\/static\/[^"\s]+\.(?:css|js))"/g)].map(match => match[1]))];
  const bytes = extension => assets.filter(url => url.endsWith(extension)).reduce((sum, url) =>
    sum + zlib.gzipSync(fs.readFileSync(path.join(root, ".next", url.slice("/_next/".length)))).length, 0);
  console.log(JSON.stringify({
    route,
    html: Buffer.byteLength(html),
    htmlGzip: zlib.gzipSync(html).length,
    cssGzip: bytes(".css"),
    jsGzip: bytes(".js"),
    serializedLinkProps: (html.match(/prefetch/g) || []).length,
    canonical: html.match(/rel="canonical" href="([^"]+)"/)?.[1],
    links: [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(match => match[1]).sort(),
    images: [...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map(match => match[1]).sort()
  }));
}
