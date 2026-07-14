"""Build lazy-loaded Poradna full-text search indexes (public/search/poradna-{locale}.json)."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "search"

LOCALES = {
    "cs": ROOT / "content" / "articles",
    "en": ROOT / "content" / "articles-en",
    "de": ROOT / "content" / "articles-de",
}

LOCALE_LOWER = {
    "cs": "cs-cz",
    "en": "en-us",
    "de": "de-de",
}

MAX_SEARCH_CHARS = 1800


def strip_markdown_for_search(body: str) -> str:
    text = re.sub(r"```[\s\S]*?```", " ", body)
    text = re.sub(r"#{1,6}\s+", "", text)
    text = re.sub(r"\|[^\n]+\|", " ", text)
    text = re.sub(r"[*_~`>#\-]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def parse_frontmatter(raw: str) -> tuple[dict[str, str], str]:
    if not raw.startswith("---"):
        return {}, raw
    parts = raw.split("---", 2)
    if len(parts) < 3:
        return {}, raw
    front: dict[str, str] = {}
    for line in parts[1].splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        front[key.strip()] = value.strip().strip('"').strip("'")
    return front, parts[2]


def build_search_text(title: str, excerpt: str, body: str, locale: str) -> str:
    combined = " ".join([title, excerpt, strip_markdown_for_search(body)])
    return combined.casefold()


def slug_from_file(path: Path) -> str:
    return path.stem


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for locale, directory in LOCALES.items():
        if not directory.is_dir():
            print(f"Skip {locale}: missing {directory}")
            continue

        entries: list[dict[str, str]] = []
        for path in sorted(directory.glob("*.md")):
            front, body = parse_frontmatter(path.read_text(encoding="utf-8"))
            slug = front.get("slug") or slug_from_file(path)
            title = front.get("title") or slug
            excerpt = front.get("excerpt") or ""
            search = build_search_text(title, excerpt, body, locale)[:MAX_SEARCH_CHARS]
            entries.append({"slug": slug, "s": search})

        out = OUT_DIR / f"poradna-{locale}.json"
        out.write_text(json.dumps(entries, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        size_kb = out.stat().st_size / 1024
        print(f"Wrote {out} ({len(entries)} articles, {size_kb:.1f} KB)")


if __name__ == "__main__":
    main()
