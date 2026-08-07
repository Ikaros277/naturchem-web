#!/usr/bin/env python3
"""Normalize article publishedAt/updatedAt to YYYY-MM-DD for Decap sort."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIRS = [
    ROOT / "content" / "articles",
    ROOT / "content" / "articles-en",
    ROOT / "content" / "articles-de",
]

FIELD_RE = re.compile(
    r"^(publishedAt|updatedAt):\s*(.+?)\s*$",
    re.M,
)


def to_date_only(raw: str) -> str | None:
    value = raw.strip().strip("\"'")
    if re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
        return value
    m = re.match(r"^(\d{4}-\d{2}-\d{2})T", value)
    if m:
        return m.group(1)
    return None


def rewrite_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")

    def repl(match: re.Match[str]) -> str:
        field, raw = match.group(1), match.group(2)
        date_only = to_date_only(raw)
        if not date_only:
            return match.group(0)
        return f'{field}: "{date_only}"'

    new_text, count = FIELD_RE.subn(repl, text)
    if new_text == text:
        return False
    path.write_text(new_text, encoding="utf-8", newline="\n")
    return count > 0


def main() -> None:
    changed = 0
    for directory in DIRS:
        if not directory.is_dir():
            continue
        for path in sorted(directory.glob("*.md")):
            if rewrite_file(path):
                changed += 1
                print(f"updated {path.relative_to(ROOT)}")
    print(f"files changed: {changed}")


if __name__ == "__main__":
    main()
