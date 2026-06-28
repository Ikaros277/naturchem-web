"""Import PNG assets from Cursor workspace into public/hero as WebP."""
from __future__ import annotations

import re
import shutil
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(r"C:\Users\natur\.cursor\projects\c-Users-natur-naturchem-web\assets")
PROVOZY = ROOT / "public" / "hero" / "provozy"
CASE_STUDIES = ROOT / "public" / "hero" / "case-studies"
HERO = ROOT / "public" / "hero"

MAX_WIDTH = 1920
WEBP_QUALITY = 82

TYPO_FIX = {
    "mereni-emisi-galvanovnal": "mereni-emisi-galvanovna",
    "mereni-hluku-tepelne-cerpadlol": "mereni-hluku-tepelne-cerpadlo",
    "rozptylova-studie-plynova-kotelnal": "rozptylova-studie-plynova-kotelna",
    "hlukova-studie-vyrobni-areall": "hlukova-studie-vyrobni-areal",
    "hluk-drtic-recyklacel": "hluk-drtic-recyklace",
    "rozptylova-hlukova-terenni-upravys": "rozptylova-hlukova-terenni-upravy",
}

SKIP_SLUG_PREFIXES = ("image-", "ChatGPT_", "N_logo", "Opatov_", "Asset_")

SECTOR_IDS = {
    "lakovny",
    "galvanovny",
    "svarovny",
    "tiskarny-textilie",
    "drevozpracujici",
    "sklarstvi",
    "automotive",
    "kotelny",
    "bioplyn-biometan",
    "teplarny",
    "krematoria",
    "skladky-odpady",
    "odpady-recyklace",
    "kompostarny",
    "stavebni-zamery",
    "kamenolomy",
    "zemedelske-provozy",
    "susarny-zemedelstvi",
    "potravinarstvi",
    "cov-kaly",
    "susarny-kalu",
    "pyrolyza-kalu",
    "cisteni-spalin",
    "tepelna-cerpadla-vzt",
    "verejne-budovy",
    "laboratore",
    "lesnictvi-doprava",
    "ispop-evidence",
    "ghg-cnr",
    "provozni-rady",
    "odborne-posudky-povoleni",
}


def parse_case_study_ids() -> set[str]:
    text = (ROOT / "src/data/case-studies-cs.ts").read_text(encoding="utf-8")
    return set(re.findall(r'id: "([^"]+)"', text))


def extract_slug(filename: str) -> str | None:
    m = re.match(r"c__Users_natur_.*_images_(.+)-[0-9a-f]{8}-", filename)
    if not m:
        return None
    return m.group(1)


def save_webp(src: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as img:
        img = img.convert("RGB")
        w, h = img.size
        if w > MAX_WIDTH:
            nh = int(h * MAX_WIDTH / w)
            img = img.resize((MAX_WIDTH, nh), Image.Resampling.LANCZOS)
        img.save(dest, "WEBP", quality=WEBP_QUALITY, method=6)


def migrate_existing_jpg(folder: Path) -> None:
    for jpg in folder.glob("*.jpg"):
        webp = jpg.with_suffix(".webp")
        if webp.exists():
            continue
        with Image.open(jpg) as img:
            img = img.convert("RGB")
            w, h = img.size
            if w > MAX_WIDTH:
                nh = int(h * MAX_WIDTH / w)
                img = img.resize((MAX_WIDTH, nh), Image.Resampling.LANCZOS)
            img.save(webp, "WEBP", quality=WEBP_QUALITY, method=6)
        print(f"  migrated {jpg.name} -> {webp.name}")


def main() -> None:
    case_study_ids = parse_case_study_ids()
    provozy_imported: set[str] = set()
    case_imported: set[str] = set()
    skipped: list[str] = []

    if not ASSETS.is_dir():
        raise SystemExit(f"Assets folder not found: {ASSETS}")

    for src in sorted(ASSETS.iterdir()):
        if src.suffix.lower() not in {".png", ".jpg", ".jpeg", ".webp"}:
            continue
        slug = extract_slug(src.name)
        if not slug:
            continue
        if any(slug.startswith(p) for p in SKIP_SLUG_PREFIXES):
            skipped.append(slug)
            continue
        slug = TYPO_FIX.get(slug, slug)

        if slug in SECTOR_IDS:
            dest = PROVOZY / f"{slug}.webp"
            save_webp(src, dest)
            provozy_imported.add(slug)
            print(f"provozy: {slug}")
        elif slug in case_study_ids:
            dest = CASE_STUDIES / f"{slug}.webp"
            save_webp(src, dest)
            case_imported.add(slug)
            print(f"case-study: {slug}")
        else:
            skipped.append(slug)

    print("\nMigrating existing JPG...")
    migrate_existing_jpg(PROVOZY)
    migrate_existing_jpg(CASE_STUDIES)

    provozy_all = sorted({p.stem for p in PROVOZY.glob("*.webp")})
    case_all = sorted({p.stem for p in CASE_STUDIES.glob("*.webp")})

    print(f"\nProvozy: {len(provozy_all)} webp files")
    print(f"Case studies: {len(case_all)} webp files")
    if skipped:
        print(f"Skipped ({len(skipped)}): {', '.join(sorted(set(skipped))[:20])}...")

    manifest = ROOT / "scripts" / ".hero-photo-manifest.json"
    import json

    manifest.write_text(
        json.dumps({"provozy": provozy_all, "caseStudies": case_all}, indent=2),
        encoding="utf-8",
    )
    print(f"Manifest: {manifest}")


if __name__ == "__main__":
    main()
