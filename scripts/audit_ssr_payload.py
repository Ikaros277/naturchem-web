#!/usr/bin/env python3
"""Analyze prerendered HTML / RSC payload sizes."""
import collections
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
APP = ROOT / ".next" / "server" / "app" / "cs"


def analyze(path: pathlib.Path, label: str) -> dict:
    if not path.exists():
        print(f"{label}: MISSING ({path})")
        return {}
    html = path.read_text(encoding="utf-8")
    scripts = re.findall(r"<script[^>]*>(.*?)</script>", html, re.S)
    scr = sum(len(s) for s in scripts)
    keys = collections.Counter(
        re.findall(r'"([a-zA-Z][a-zA-Z0-9_]{2,30})":', "".join(scripts))
    )
    print(f"=== {label} ===")
    print(f"  HTML total:     {len(html) / 1024:.1f} KB")
    print(f"  inline scripts: {scr / 1024:.1f} KB ({100 * scr / len(html):.0f}%)")
    print(f"  top RSC keys:   {', '.join(f'{k}({v})' for k, v in keys.most_common(10))}")
    return {"label": label, "html_kb": len(html) / 1024, "script_kb": scr / 1024}


def main() -> None:
    pages = [
        "poradna",
        "faq",
        "reference",
        "typicke-zakazky",
        "provozy-a-technologie",
        "sluzby",
    ]
    for page in pages:
        analyze(APP / f"{page}.html", f"/{page}")
        print()


if __name__ == "__main__":
    main()
