import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, "..", "public", "loga-referenci");

/** Make near-white or near-black pixels transparent. */
async function removeSolidBackground(input, output, { r, g, b, threshold = 40 }) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const dr = Math.abs(data[i] - r);
    const dg = Math.abs(data[i + 1] - g);
    const db = Math.abs(data[i + 2] - b);
    if (dr <= threshold && dg <= threshold && db <= threshold) {
      data[i + 3] = 0;
    }
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(output);
  console.log(`processed ${output}`);
}

const jobs = [
  { in: "swietelsky-temp.png", out: "swietelsky.png", bg: { r: 0, g: 0, b: 0 } },
  { in: "letiste-cb-temp.png", out: "letiste-cb.png", bg: { r: 255, g: 255, b: 255 }, threshold: 30 }
];

/** Logos exported on black (white text): remove black, recolor white text to dark gray. */
async function fixDarkBgLogo(input, output) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (r < 35 && g < 35 && b < 35) {
      data[i + 3] = 0;
      continue;
    }
    if (r > 210 && g > 210 && b > 210) {
      data[i] = 45;
      data[i + 1] = 45;
      data[i + 2] = 45;
    }
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(output);
  console.log(`fixed dark-bg logo ${output}`);
}

const darkBgLogos = ["teplarnatucb.png", "teplarnapisek.png", "teplarnastrakonice.png"];
for (const name of darkBgLogos) {
  await fixDarkBgLogo(join(dir, name), join(dir, name));
}

for (const job of jobs) {
  await removeSolidBackground(join(dir, job.in), join(dir, job.out), {
    ...job.bg,
    threshold: job.threshold ?? 40
  });
}

// Fix dura.svg — remove white background rect
const duraPath = join(dir, "dura.svg");
let dura = readFileSync(duraPath, "utf8");
dura = dura.replace(/<path fill="#fff" d="M0 0h192\.756v192\.756H0V0z"\/>/i, "");
writeFileSync(duraPath, dura);
console.log("fixed dura.svg");
