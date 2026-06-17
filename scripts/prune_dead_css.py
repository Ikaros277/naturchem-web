#!/usr/bin/env python3
"""Remove CSS rule blocks for classes unused in TSX (safe dead-code prune)."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSS_PATH = ROOT / "src" / "app" / "globals.css"
SRC = ROOT / "src"

# Top-level selectors with zero className= usage in TSX (verified manually).
DEAD_ROOT_SELECTORS = {
    ".cross-links",
    ".trust-strip-wrap",
    ".trust-strip",
    ".home-pillars",
    ".home-pillars-cta",
    ".home-pillar",
    ".job-types-list",
    ".footer-claims",
    ".hero-bg",
    ".mobile-sticky-contact",
    ".section-header-row",
    ".section-link",
    ".signature",
}


def classes_used_in_tsx() -> set[str]:
    used: set[str] = set()
    for path in SRC.rglob("*.tsx"):
        text = path.read_text(encoding="utf-8")
        for m in re.finditer(r'className=(?:"([^"]*)"|\'([^\']*)\'|`\$\{[^`]+\}`|{`([^`]*)`})', text):
            for g in m.groups():
                if g:
                    used.update(g.split())
        for m in re.finditer(r'className=\{[^}]*["`]([^"`]+)["`]', text):
            used.update(m.group(1).split())
    return used


def main() -> None:
    used = classes_used_in_tsx()
    lines = CSS_PATH.read_text(encoding="utf-8").splitlines()
    before = len(lines)

    i = 0
    out: list[str] = []
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if stripped.startswith("@media"):
            block_start = i
            depth = 0
            j = i
            while j < len(lines):
                depth += lines[j].count("{") - lines[j].count("}")
                j += 1
                if depth == 0 and "{" in lines[block_start]:
                    break
            block = "\n".join(lines[block_start:j])
            if any(sel in block for sel in DEAD_ROOT_SELECTORS) and not any(
                f".{c.lstrip('.')}" in used for c in DEAD_ROOT_SELECTORS if c in block
            ):
                # Keep media blocks that mix dead + live selectors — only skip pure dead inner rules
                inner = lines[block_start + 1 : j - 1]
                kept_inner = []
                k = 0
                while k < len(inner):
                    inner_line = inner[k].strip()
                    if inner_line and not inner_line.startswith("@") and "{" in inner_line:
                        sel = inner_line.split("{", 1)[0].strip()
                        if any(d in sel for d in DEAD_ROOT_SELECTORS):
                            close = k
                            depth2 = 0
                            while close < len(inner):
                                depth2 += inner[close].count("{") - inner[close].count("}")
                                close += 1
                                if depth2 == 0:
                                    break
                            k = close
                            continue
                    kept_inner.append(inner[k])
                    k += 1
                out.append(lines[block_start])
                out.extend(kept_inner)
                out.append(lines[j - 1])
                i = j
                continue
            out.extend(lines[block_start:j])
            i = j
            continue

        if stripped and not stripped.startswith("/*") and not stripped.startswith("@") and "{" in stripped:
            sel = stripped.split("{", 1)[0].strip()
            if any(sel == d or sel.startswith(d + " ") or sel.startswith(d + ",") for d in DEAD_ROOT_SELECTORS):
                j = i + 1
                depth = stripped.count("{") - stripped.count("}")
                while j < len(lines) and depth > 0:
                    depth += lines[j].count("{") - lines[j].count("}")
                    j += 1
                i = j
                continue

        out.append(line)
        i += 1

    CSS_PATH.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"globals.css: {before} -> {len(out)} lines ({before - len(out)} removed)")


if __name__ == "__main__":
    main()
