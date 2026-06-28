#!/usr/bin/env python3
"""Estimate FAQ JSON-LD duplication vs visible payload."""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[1]
FAQ_HTML = ROOT / ".next" / "server" / "app" / "cs" / "faq.html"


def main() -> None:
    html = FAQ_HTML.read_text(encoding="utf-8")
    ld_blocks = re.findall(
        r'<script type="application/ld\+json">(.*?)</script>', html, re.S
    )
    ld_total = sum(len(b) for b in ld_blocks)
    faq_blocks = [b for b in ld_blocks if "FAQPage" in b]
    print("=== FAQ payload breakdown ===")
    print(f"HTML total: {len(html) / 1024:.1f} KB")
    print(f"JSON-LD blocks: {len(ld_blocks)}, total {ld_total / 1024:.1f} KB")
    print(f"FAQPage blocks: {len(faq_blocks)}, total {sum(len(b) for b in faq_blocks) / 1024:.1f} KB")
    if faq_blocks:
        data = json.loads(faq_blocks[0])
        answers = data.get("mainEntity", [])
        ans_chars = sum(len(a.get("acceptedAnswer", {}).get("text", "")) for a in answers)
        print(f"FAQ answers in schema: {len(answers)}, text chars: {ans_chars:,}")


if __name__ == "__main__":
    main()
