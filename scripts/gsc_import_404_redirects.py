#!/usr/bin/env python3
"""Suggest 301 redirects from a Search Console 404 export.

Export in GSC: Indexing -> Pages -> Not found (404) -> Export.
Save CSV (column URL or Page) and run:

  python scripts/gsc_import_404_redirects.py reports/gsc/2026-05-404.csv

Prints TypeScript snippets for src/lib/redirects.ts and writes
reports/gsc/suggested-redirects.json for review.
"""

from __future__ import annotations

import csv
import json
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
REDIRECTS_TS = ROOT / "src" / "lib" / "redirects.ts"
REPORTS_DIR = ROOT / "reports" / "gsc"
SITE_HOSTS = {"www.naturchem.cz", "naturchem.cz"}


def load_existing_sources() -> set[str]:
    text = REDIRECTS_TS.read_text(encoding="utf-8")
    sources = set(re.findall(r'source:\s*"([^"]+)"', text))
    return {normalize_path(source) for source in sources if ":path*" not in source}


def normalize_path(raw: str) -> str:
    value = raw.strip()
    if not value:
        return ""
    if value.startswith("http://") or value.startswith("https://"):
        parsed = urlparse(value)
        if parsed.netloc and parsed.netloc not in SITE_HOSTS:
            return ""
        value = parsed.path or "/"
    if not value.startswith("/"):
        value = f"/{value}"
    if value != "/" and value.endswith("/"):
        value = value.rstrip("/")
    return value


def strip_locale(path: str) -> tuple[str, str | None]:
    for locale in ("en", "de"):
        prefix = f"/{locale}"
        if path == prefix:
            return "/", locale
        if path.startswith(f"{prefix}/"):
            return path[len(prefix) :] or "/", locale
    return path, None


def suggest_destination(path: str) -> str | None:
    """Heuristic mapping for paths not yet in redirects.ts."""
    base, locale = strip_locale(path)
    if not base:
        return None

    flat_services = {
        "/mereni-emisi": "/sluzby/mereni-emisi",
        "/pracovni-prostredi": "/sluzby/pracovni-prostredi",
        "/mereni-vibraci": "/sluzby/mereni-vibraci",
        "/mereni-mikroklimatu": "/sluzby/mereni-mikroklimatu",
        "/mereni-osvetleni": "/sluzby/mereni-osvetleni",
        "/hlukove-studie": "/sluzby/hlukove-studie",
        "/rozptylove-studie": "/sluzby/rozptylove-studie",
        "/odborne-posudky": "/sluzby/odborne-posudky",
        "/provozni-rady": "/sluzby/provozni-rady",
        "/ispop-souhrnna-provozni-evidence": "/sluzby/ispop",
        "/ghg-overovani-emisi-sklenikovych-plynu": "/sluzby/ghg-overovani",
        "/hlukova-studie": "/sluzby/hlukove-studie",
        "/spolecnost": "/o-spolecnosti-naturchem",
        "/o-nas": "/o-spolecnosti-naturchem",
        "/redakce": "/poradna",
        "/kontakt.php": "/kontakt",
        "/kontakt.html": "/kontakt",
        "/sluzby.php": "/sluzby",
        "/sluzby.html": "/sluzby",
        "/reference.php": "/reference",
        "/reference.html": "/reference",
        "/prodej": "/",
        "/kariera": "/",
        "/index.php": "/",
        "/index.html": "/",
    }

    if base in flat_services:
        dest = flat_services[base]
        if locale:
            dest = f"/{locale}{dest}" if dest != "/" else f"/{locale}"
        return dest

    if base.startswith("/obory/"):
        suffix = base[len("/obory") :]
        dest = f"/provozy-a-technologie{suffix}"
        return f"/{locale}{dest}" if locale else dest

    if base.startswith("/poradna/"):
        slug = base[len("/poradna/") :]
        ascii_slug = slug.encode("ascii", "ignore").decode("ascii")
        if ascii_slug and ascii_slug != slug:
            dest = f"/poradna/{ascii_slug}"
            return f"/{locale}{dest}" if locale else dest

    return None


def read_urls_from_csv(csv_path: Path) -> list[str]:
    with csv_path.open(newline="", encoding="utf-8-sig") as handle:
        reader = csv.DictReader(handle)
        if not reader.fieldnames:
            return []
        field = None
        for candidate in ("URL", "url", "Page", "page", "Top pages", "Adresa URL"):
            if candidate in reader.fieldnames:
                field = candidate
                break
        if field is None:
            field = reader.fieldnames[0]
        return [row.get(field, "") for row in reader if row.get(field, "").strip()]


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python scripts/gsc_import_404_redirects.py <404-export.csv>", file=sys.stderr)
        return 1

    csv_path = Path(sys.argv[1])
    if not csv_path.is_file():
        print(f"Soubor neexistuje: {csv_path}", file=sys.stderr)
        return 1

    existing = load_existing_sources()
    suggestions: list[dict[str, str]] = []
    skipped = 0
    unresolved: list[str] = []

    for raw in read_urls_from_csv(csv_path):
        path = normalize_path(raw)
        if not path:
            continue
        if path in existing:
            skipped += 1
            continue

        destination = suggest_destination(path)
        if not destination:
            unresolved.append(path)
            continue

        pair = {"source": path, "destination": destination}
        if pair not in suggestions:
            suggestions.append(pair)

    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    out_json = REPORTS_DIR / "suggested-redirects.json"
    out_json.write_text(json.dumps(suggestions, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"=== GSC 404 -> navrhy redirectu ({csv_path.name}) ===")
    print(f"Uz pokryto existujicimi redirecty: {skipped}")
    print(f"Navrzeno: {len(suggestions)}")
    print(f"Bez automatickeho mapovani: {len(unresolved)}")
    print(f"JSON: {out_json}")
    print()

    if suggestions:
        print("// Doplnte do src/lib/redirects.ts (s variantou se lomitkem na konci):")
        for item in suggestions:
            source = item["source"]
            dest = item["destination"]
            print(f'  {{ source: "{source}", destination: "{dest}", permanent: true }},')
            if source != "/":
                print(f'  {{ source: "{source}/", destination: "{dest}", permanent: true }},')
        print()

    if unresolved:
        print("Rucni kontrola (bez navrhu):")
        for path in unresolved[:40]:
            print(f"  {path}")
        if len(unresolved) > 40:
            print(f"  ... a dalsich {len(unresolved) - 40}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
