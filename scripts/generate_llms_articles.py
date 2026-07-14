#!/usr/bin/env python3
"""Generate public/llms-articles.txt — poradna article URLs for AI crawlers (CS/EN/DE)."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "llms-articles.txt"
SITE = "https://www.naturchem.cz"

LOCALES = {
    "cs": (ROOT / "content" / "articles", "/poradna"),
    "en": (ROOT / "content" / "articles-en", "/en/poradna"),
    "de": (ROOT / "content" / "articles-de", "/de/poradna"),
}

LOCALE_HEADERS = {
    "cs": "České články",
    "en": "English articles",
    "de": "Deutsche Artikel",
}


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


def articles_for_locale(locale: str) -> list[tuple[str, str]]:
    directory, _ = LOCALES[locale]
    rows: list[tuple[str, str]] = []
    for path in sorted(directory.glob("*.md")):
        rows.append((title_from_file(path), slug_from_file(path)))
    return rows


def main() -> None:
    cs_count = len(list(LOCALES["cs"][0].glob("*.md")))
    lines = [
        "# NATURCHEM — odborné články (poradna)",
        "",
        f"> {cs_count}+ articles on Czech environmental permitting, measurements, EIA, ISPOP, and operations (CS/EN/DE).",
        "",
        "## Index",
        "",
        f"- Poradna hub (CS): {SITE}/poradna/",
        f"- Knowledge base (EN): {SITE}/en/poradna/",
        f"- Wissensdatenbank (DE): {SITE}/de/poradna/",
        "",
    ]

    for locale in ("cs", "en", "de"):
        _, base_path = LOCALES[locale]
        articles = articles_for_locale(locale)
        lines.extend([f"## {LOCALE_HEADERS[locale]}", ""])
        for title, slug in articles:
            lines.append(f"- {title}: {SITE}{base_path}/{slug}/")
        lines.append("")

    lines.extend([f"## Sitemap", "", f"{SITE}/sitemap.xml", ""])
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {OUT} ({cs_count} CS articles, EN/DE sections included)")


if __name__ == "__main__":
    main()
