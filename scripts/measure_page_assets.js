/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");
const root = path.resolve(__dirname, "..");
const results = {};
for (const route of ["cs", "cs/kontakt", "cs/sluzby/mereni-emisi", "cs/poradna", "en", "de"]) {
  const file = path.join(root, ".next/server/app", route + ".html");
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  const urls = [...new Set([...html.matchAll(/(?:href|src)="(\/_next\/static\/[^"]+\.(?:css|js))"/g)].map(match => match[1]))];
  const assets = urls.map(url => {
    const bytes = fs.readFileSync(path.join(root, ".next", url.slice("/_next/".length)));
    return { url, bytes: bytes.length, gzip: zlib.gzipSync(bytes).length };
  });
  results[route] = {
    html: Buffer.byteLength(html), htmlGzip: zlib.gzipSync(html).length,
    cssGzip: assets.filter(asset => asset.url.endsWith(".css")).reduce((sum, asset) => sum + asset.gzip, 0),
    jsGzip: assets.filter(asset => asset.url.endsWith(".js")).reduce((sum, asset) => sum + asset.gzip, 0),
    assets
  };
}
const json = JSON.stringify(results, null, 2) + "\n";
if (process.argv[2]) fs.writeFileSync(path.resolve(process.argv[2]), json);
console.log(json);
