import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, "..", "public", "loga-referenci");

function lum(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

/** Remove black background; keep colored pixels. */
async function prepIcon(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (r < 35 && g < 35 && b < 35) {
      data[i + 3] = 0;
    }
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
}

/** Swietelsky wordmark: drop black bg, darken light text for light UI. */
async function prepSwietelskyWordmark(input, output) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (r < 30 && g < 30 && b < 30) {
      data[i + 3] = 0;
      continue;
    }
    if (lum(r, g, b) > 180) {
      data[i] = 42;
      data[i + 1] = 42;
      data[i + 2] = 42;
    }
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .resize({ height: 44, fit: "inside" })
    .png()
    .toFile(output);
  const meta = await sharp(output).metadata();
  console.log(`swietelsky wordmark ${meta.width}x${meta.height}`);
}

async function textLayer(label, fontSize = 14) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="48">
    <text x="0" y="32" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="700" fill="#2a2a2a">${label}</text>
  </svg>`;
  return sharp(Buffer.from(svg)).png().trim().toBuffer();
}

async function composeWordmark(iconBuf, label, output, { iconHeight = 44, fontSize = 14, gap = 10 } = {}) {
  const icon = await sharp(iconBuf).resize({ height: iconHeight, fit: "contain" }).toBuffer();
  const iconMeta = await sharp(icon).metadata();
  const text = await textLayer(label, fontSize);
  const textMeta = await sharp(text).metadata();
  const width = iconMeta.width + gap + textMeta.width;
  const height = Math.max(iconMeta.height, textMeta.height, 48);

  await sharp({
    create: { width, height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }
  })
    .composite([
      { input: icon, left: 0, top: Math.round((height - iconMeta.height) / 2) },
      { input: text, left: iconMeta.width + gap, top: Math.round((height - textMeta.height) / 2) }
    ])
    .png()
    .toFile(output);

  const meta = await sharp(output).metadata();
  console.log(`wordmark ${output.split(/[/\\]/).pop()} ${meta.width}x${meta.height}`);
}

const pisekIcon = await prepIcon(join(dir, "tpi-icon.png"));
await composeWordmark(pisekIcon, "Teplárna Písek, a.s.", join(dir, "teplarnapisek.png"));

const tsIcon = await prepIcon(join(dir, "ts-icon.png"));
await composeWordmark(tsIcon, "Teplárna Strakonice, a.s.", join(dir, "teplarnastrakonice.png"), {
  iconHeight: 40,
  fontSize: 13
});

await prepSwietelskyWordmark(join(dir, "swietelsky-temp.png"), join(dir, "swietelsky.png"));
