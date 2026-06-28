#!/usr/bin/env python3
"""i18n consistency checks."""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content"
SEARCH = ROOT / "public" / "search"


def count_articles(locale: str) -> int:
    d = CONTENT / f"articles-{locale}" if locale != "cs" else CONTENT / "articles"
    if not d.exists():
        d = CONTENT / "articles"
        if locale != "cs":
            d = CONTENT / f"articles-{locale}"
    return len(list(d.glob("*.md"))) if d.exists() else 0


def search_index_stats() -> None:
    print("=== Poradna search indexes ===")
    for f in sorted(SEARCH.glob("poradna-*.json")):
        text = f.read_text(encoding="utf-8")
        items = text.count('"slug"')
        print(f"  {f.name}: {f.stat().st_size/1024:.1f} KB, ~{items} articles")


def article_slug_mismatch() -> None:
    print("=== Article slug parity cs/en/de ===")
    dirs = {
        "cs": CONTENT / "articles",
        "en": CONTENT / "articles-en",
        "de": CONTENT / "articles-de",
    }
    sets = {k: {p.stem for p in d.glob("*.md")} for k, d in dirs.items() if d.exists()}
    if len(sets) < 3:
        print("  WARN: missing article directories")
        return
    only_cs = sets["cs"] - sets["en"] - sets["de"]
    only_en = sets["en"] - sets["cs"]
    only_de = sets["de"] - sets["cs"]
    print(f"  cs articles: {len(sets['cs'])}, en: {len(sets['en'])}, de: {len(sets['de'])}")
    print(f"  only in cs: {len(only_cs)}")
    print(f"  only in en: {len(only_en)}")
    print(f"  only in de: {len(only_de)}")
    if only_cs:
        print(f"    cs-only sample: {sorted(only_cs)[:3]}")
    if only_en:
        print(f"    en-only sample: {sorted(only_en)[:3]}")


def czech_slugs_in_en_urls() -> None:
    print("=== EN/DE poradna URLs (czech slug check) ===")
    for loc in ["en", "de"]:
        p = ROOT / ".next" / "server" / "app" / loc / "poradna.html"
        if not p.exists():
            continue
        h = p.read_text(encoding="utf-8")
        urls = set(re.findall(rf"/{loc}/poradna/([a-z0-9-]+)", h))
        # Czech diacritics would appear URL-encoded; flag very long slugs
        long_slugs = [u for u in urls if len(u) > 60]
        print(f"  /{loc}/poradna: {len(urls)} article links, long slugs: {len(long_slugs)}")


def main() -> None:
    search_index_stats()
    print()
    article_slug_mismatch()
    print()
    czech_slugs_in_en_urls()


if __name__ == "__main__":
    main()
