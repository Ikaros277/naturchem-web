#!/usr/bin/env python3
"""Analyze JS chunk contents."""
import collections
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[1]
CHUNKS = ROOT / ".next" / "static" / "chunks"

LIBS = [
    "react-markdown",
    "micromark",
    "leaflet",
    "hero-images",
    "case-studies",
    "PoradnaFilterableList",
    "FaqPageContent",
    "ContactOfficesMap",
    "ServiceMegaMenu",
    "next/dist",
]


def main() -> None:
    print("=== Top JS chunks ===")
    files = sorted(CHUNKS.glob("*.js"), key=lambda p: p.stat().st_size, reverse=True)
    total = sum(f.stat().st_size for f in files)
    print(f"Total JS: {total / 1024:.1f} KB across {len(files)} files\n")

    for f in files[:12]:
        text = f.read_text(encoding="utf-8", errors="ignore")
        hits = [name for name in LIBS if name.lower() in text.lower()]
        long_strings = len(re.findall(r'"[^"]{40,}"', text))
        print(f"{f.stat().st_size / 1024:6.1f} KB  {f.name}")
        if hits:
            print(f"         libs: {', '.join(hits)}")
        if long_strings:
            print(f"         long string literals: {long_strings}")


if __name__ == "__main__":
    main()
