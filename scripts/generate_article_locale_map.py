#!/usr/bin/env python3
"""Write public/article-locale-map.json for client-side language switching on poradna articles."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content"
LOCALES = {
    "cs": CONTENT / "articles",
    "en": CONTENT / "articles-en",
    "de": CONTENT / "articles-de",
}
OUT = ROOT / "src" / "lib" / "article-locale-map.json"


def slug_from_filename(name: str) -> str:
    return name[:-3] if name.endswith(".md") else name


def main() -> None:
    slug_locales: dict[str, list[str]] = {}

    for locale, directory in LOCALES.items():
        if not directory.is_dir():
            continue
        for path in sorted(directory.glob("*.md")):
            slug = slug_from_filename(path.name)
            slug_locales.setdefault(slug, [])
            if locale not in slug_locales[slug]:
                slug_locales[slug].append(locale)

    for locales in slug_locales.values():
        locales.sort(key=lambda value: ("cs", "en", "de").index(value))

    OUT.write_text(json.dumps(slug_locales, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUT} ({len(slug_locales)} slugs)")


if __name__ == "__main__":
    main()
