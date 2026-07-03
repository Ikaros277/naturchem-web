#!/usr/bin/env python3
"""Generate public/llms-articles.txt — poradna article URLs for AI crawlers."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARTICLES_DIR = ROOT / "content" / "articles"
OUT = ROOT / "public" / "llms-articles.txt"
SITE = "https://www.naturchem.cz"


def slug_from_file(path: Path) -> str:
    text = path.read_text(encoding="utf-8")
    match = re.search(r'^slug:\s*["\']?([^"\'\n]+)', text, re.MULTILINE)
    if match:
        return match.group(1).strip()
    return path.stem


def title_from_file(path: Path) -> str:
    text = path.read_text(encoding="utf-8")
    match = re.search(r'^title:\s*["\']?([^"\'\n]+)', text, re.MULTILINE)
    if match:
        return match.group(1).strip()
    return slug_from_file(path)


def main() -> None:
    files = sorted(ARTICLES_DIR.glob("*.md"))
    lines = [
        "# NATURCHEM — odborné články (poradna)",
        "",
        f"> {len(files)} articles on Czech environmental permitting, measurements, EIA, ISPOP, and operations.",
        "",
        "## Index",
        "",
        f"- Poradna hub: {SITE}/poradna/",
        "",
        "## Articles",
        "",
    ]

    for path in files:
        slug = slug_from_file(path)
        title = title_from_file(path)
        lines.append(f"- {title}: {SITE}/poradna/{slug}/")

    lines.extend(["", f"## Sitemap", "", f"{SITE}/sitemap.xml", ""])
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {OUT} ({len(files)} articles)")


if __name__ == "__main__":
    main()
