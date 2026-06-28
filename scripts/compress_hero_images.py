"""Recompress large hero WebP/JPG files in public/hero."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
HERO = ROOT / "public" / "hero"
MAX_WIDTH = 1920
MIN_SIZE_KB = 200
WEBP_QUALITY = 78

SKIP_NAMES = {
    "emissions-stack.jpg",
    "planning-documents.jpg",
    "field-measurement.jpg",
    "industrial-plant.jpg",
    "forge-worker.jpg",
}


def optimize_image(path: Path) -> None:
    before = path.stat().st_size
    if before < MIN_SIZE_KB * 1024:
        return

    with Image.open(path) as img:
        img = img.convert("RGB")
        w, h = img.size
        if w > MAX_WIDTH:
            nh = int(h * MAX_WIDTH / w)
            img = img.resize((MAX_WIDTH, nh), Image.Resampling.LANCZOS)

        if path.suffix.lower() == ".webp":
            img.save(path, "WEBP", quality=WEBP_QUALITY, method=6)
        elif path.suffix.lower() in {".jpg", ".jpeg"}:
            img.save(path, "JPEG", quality=82, optimize=True)

    after = path.stat().st_size
    if after < before:
        print(f"  {path.relative_to(ROOT)}: {before/1024:.0f} KB -> {after/1024:.0f} KB")


def main() -> None:
    for path in sorted(HERO.rglob("*")):
        if not path.is_file():
            continue
        if path.name in SKIP_NAMES:
            continue
        if path.suffix.lower() not in {".webp", ".jpg", ".jpeg"}:
            continue
        optimize_image(path)


if __name__ == "__main__":
    main()
