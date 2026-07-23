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


def is_public(front: dict[str, str]) -> bool:
    """Match src/lib/articles.ts: hide draft and future publishedAt."""
    status = (front.get("status") or "published").strip().lower()
    if status == "draft":
        return False
    published_raw = (front.get("publishedAt") or "").strip()
    if not published_raw:
        return True
    # Accept YYYY-MM-DD or ISO; compare as date-only when no time given.
    try:
        from datetime import datetime, timezone

        if "T" in published_raw:
            published = datetime.fromisoformat(published_raw.replace("Z", "+00:00"))
        else:
            published = datetime.fromisoformat(published_raw).replace(tzinfo=timezone.utc)
        if published.tzinfo is None:
            published = published.replace(tzinfo=timezone.utc)
        return published <= datetime.now(timezone.utc)
    except ValueError:
        return True


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
            if path.stem.lower() in {"readme", "changelog"} or path.name.startswith("_"):
                continue
            front, body = parse_frontmatter(path.read_text(encoding="utf-8"))
            if not is_public(front):
                continue
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
