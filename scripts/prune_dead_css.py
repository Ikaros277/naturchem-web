#!/usr/bin/env python3
"""
Conservative CSS prune — only removes rules for a fixed allowlist of
legacy classes verified absent from src/**/*.tsx className.

Does NOT auto-detect (too risky with multi-line selectors and comments).
"""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSS_PATH = ROOT / "src" / "app" / "globals.css"

# Verified unused in TSX (2026-03). Do not add live layout classes here.
DEAD = frozenset(
    {
        ".cross-links",
        ".trust-strip-wrap",
        ".trust-strip",
        ".home-pillars",
        ".home-pillars-cta",
        ".home-pillar",
        ".job-types-list",
        ".footer-claims",
        ".footer-claim",
        ".footer-claim-muted",
        ".hero-bg",
        ".mobile-sticky-contact",
        ".section-header-row",
        ".section-link",
        ".signature",
        ".hero-grid",
        ".hero-proof-panel",
        ".hero-unsure",
        ".hero-actions",
        ".hero-trust",
        ".proof-metrics",
        ".proof-metric-card",
        ".proof-metric-value",
        ".proof-metric-label",
        ".proof-panel-label",
        ".proof-panel-note",
        ".proof-section",
    }
)


def is_dead_rule_selector(selector: str) -> bool:
    parts = [p.strip() for p in selector.split(",") if p.strip()]
    if not parts:
        return False

    def part_dead(part: str) -> bool:
        for dead in DEAD:
            if part == dead or part.startswith(dead + " ") or part.endswith(" " + dead):
                return True
            if dead.lstrip(".") in part and all(
                token.strip().startswith(".") and token.strip() in DEAD
                for token in part.split()
                if token.strip().startswith(".")
            ):
                return True
        return False

    return all(part_dead(part) for part in parts)


def block_end(lines: list[str], start: int) -> int:
    depth = 0
    j = start
    while j < len(lines):
        depth += lines[j].count("{") - lines[j].count("}")
        j += 1
        if depth <= 0 and "{" in lines[start]:
            break
    return j


def prune_selector_list(selector: str) -> str | None:
    kept = [p.strip() for p in selector.split(",") if p.strip() and not is_dead_rule_selector(p.strip())]
    if not kept:
        return None
    return ", ".join(kept)


def main() -> None:
    lines = CSS_PATH.read_text(encoding="utf-8").splitlines()
    before = len(lines)
    out: list[str] = []
    i = 0

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if stripped.startswith("@media"):
            end = block_end(lines, i)
            inner_out: list[str] = []
            j = i + 1
            while j < end - 1:
                inner = lines[j]
                inner_stripped = inner.strip()
                if inner_stripped and "{" in inner_stripped and not inner_stripped.startswith("@"):
                    sel = inner_stripped.split("{", 1)[0].strip()
                    pruned = prune_selector_list(sel)
                    if pruned is None:
                        j = block_end(lines, j)
                        continue
                    if pruned != sel:
                        indent = inner[: len(inner) - len(inner.lstrip())]
                        rule_end = block_end(lines, j)
                        inner_out.append(f"{indent}{pruned} {{")
                        inner_out.extend(lines[j + 1 : rule_end - 1])
                        inner_out.append(lines[rule_end - 1])
                        j = rule_end
                        continue
                inner_out.append(inner)
                j += 1
            if inner_out:
                out.append(line)
                out.extend(inner_out)
                out.append(lines[end - 1])
            i = end
            continue

        if stripped and not stripped.startswith("/*") and not stripped.startswith("@") and "{" in stripped:
            sel = stripped.split("{", 1)[0].strip()
            pruned = prune_selector_list(sel)
            if pruned is None:
                i = block_end(lines, i)
                continue
            if pruned != sel:
                end = block_end(lines, i)
                indent = line[: len(line) - len(line.lstrip())]
                out.append(f"{indent}{pruned} {{")
                out.extend(lines[i + 1 : end - 1])
                out.append(lines[end - 1])
                i = end
                continue

        out.append(line)
        i += 1

    CSS_PATH.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"globals.css: {before} -> {len(out)} lines ({before - len(out)} removed)")


if __name__ == "__main__":
    main()
