/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const sharp = require("sharp");

// Import a reviewed built-in ImageGen output. Never overwrite a published URL.
async function main() {
  const [id, source] = process.argv.slice(2);
  if (!id || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) || !source) {
    throw new Error("Usage: node scripts/import_generated_illustration.js <id> <source.png>");
  }
  const root = path.resolve(__dirname, "../public/hero/generated-2026-09");
  const metadata = await sharp(source).metadata();
  if (!metadata.width || !metadata.height || metadata.width / metadata.height < 1.6 || metadata.width / metadata.height > 1.9) {
    throw new Error("Review the source: expected a landscape illustration near 16:9.");
  }
  fs.mkdirSync(root, { recursive: true });
  const results = [];
  for (const width of [1600, 640]) {
    const file = path.join(root, `${id}${width === 640 ? "-640" : ""}.webp`);
    if (!file.startsWith(root + path.sep)) throw new Error("Output escaped the image directory.");
    const height = width * 9 / 16;
    const output = await sharp(source).rotate().resize(width, height, { fit: "cover", position: "centre" })
      .webp({ quality: width === 640 ? 74 : 78, effort: 6 }).toBuffer();
    if (fs.existsSync(file)) {
      if (!fs.readFileSync(file).equals(output)) throw new Error(`Refusing to overwrite ${file}; use a new versioned id.`);
    } else {
      fs.writeFileSync(file, output, { flag: "wx" });
    }
    results.push({ file, width, height, bytes: output.length, sha256: crypto.createHash("sha256").update(output).digest("hex") });
  }
  console.log(JSON.stringify({ id, source, results }));
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
