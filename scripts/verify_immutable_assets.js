/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const locked = require("./immutable-assets-lock.json");
const root = path.resolve(__dirname, "../public");

// SVG line endings can differ between Windows checkouts and Linux builds.
function hash(contents, url = "") {
  const bytes = url.endsWith(".svg") ? contents.toString("utf8").replace(/\r\n/g, "\n") : contents;
  return crypto.createHash("sha256").update(bytes).digest("hex");
}
function verifyImmutableAssets(publicRoot = root, baseline = locked) {
  const failures = [];
  for (const [url, expected] of Object.entries(baseline)) {
    const file = path.join(publicRoot, url.slice(1));
    if (!fs.existsSync(file) || hash(fs.readFileSync(file), url) !== expected) failures.push(url);
  }
  if (failures.length) throw new Error(
    "Published immutable assets changed or disappeared. Retain the original, use a new versioned filename and update references; never rebaseline an existing URL.\n" + failures.join("\n")
  );
  return Object.keys(baseline).length;
}

if (require.main === module) {
  console.log(`PASS ${verifyImmutableAssets()} immutable asset URLs retain their published contents`);
}
module.exports = { verifyImmutableAssets, hash };
