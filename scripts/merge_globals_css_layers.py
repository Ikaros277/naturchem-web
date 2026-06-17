#!/usr/bin/env python3
"""Merge triple CSS layers in globals.css (base + institutional + final UI)."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSS_PATH = ROOT / "src" / "app" / "globals.css"

MERGED_ROOT = """:root {
  --navy: #0b1f35;
  --navy-dark: #071827;
  --forest: #2f6f5e;
  --forest-dark: #245a4a;
  --forest-tint: #eef5f2;
  --sage: #b8d6ca;
  --bg: #f4f6f8;
  --surface: #ffffff;
  --surface-muted: #eef2f5;
  --text: #101923;
  --muted: #536273;
  --primary: var(--navy);
  --primary-dark: var(--navy-dark);
  --secondary: var(--forest);
  --cta: var(--forest);
  --cta-dark: var(--forest-dark);
  --accent: #8aa18f;
  --border: #d8dee6;
  --ring: rgba(47, 111, 94, 0.24);
  --shadow-soft: 0 18px 45px rgba(12, 26, 42, 0.08);
  --shadow-card: 0 14px 34px rgba(12, 26, 42, 0.07);
  --radius-sharp: 12px;
  --radius-ui: 10px;
  --radius-pill: 999px;
  --icon-size-card: 32px;
  --icon-size-inline: 28px;
  --icon-size-nav: 20px;
  --site-header-offset: 6.25rem;
  --section-padding-y: clamp(2rem, 3.5vw, 3.25rem);
  --hero-band-min-height-standard: 430px;
  --hero-band-min-height-service: 430px;
}"""


def line_range_contains(lines: list[str], start: int, end: int, needle: str) -> bool:
    chunk = "\n".join(lines[start - 1 : end])
    return needle in chunk


def remove_line_range(lines: list[str], start: int, end: int) -> None:
    del lines[start - 1 : end]


def replace_line_range(lines: list[str], start: int, end: int, replacement: str) -> None:
    lines[start - 1 : end] = replacement.splitlines()


def find_line(lines: list[str], pattern: str, start: int = 1) -> int:
    rx = re.compile(pattern)
    for i in range(start - 1, len(lines)):
        if rx.search(lines[i]):
            return i + 1
    raise ValueError(f"Pattern not found: {pattern!r}")


def main() -> None:
    original = CSS_PATH.read_text(encoding="utf-8")
    lines = original.splitlines()
    before = len(lines)

    # 1) Merged design tokens
    root_end = find_line(lines, r"^:root \{")
    root_close = root_end
    while not lines[root_close - 1].strip().startswith("}"):
        root_close += 1
    replace_line_range(lines, root_end, root_close, MERGED_ROOT)

    # 2) Foundation updates in base layer
    container_line = find_line(lines, r"^\.container \{")
    replace_line_range(
        lines,
        container_line,
        container_line + 4,
        ".container {\n"
        "  width: min(1220px, 92%);\n"
        "  max-width: 100%;\n"
        "  margin-inline: auto;\n"
        "}",
    )

    body_line = find_line(lines, r"^body \{")
    body_close = body_line
    while not lines[body_close - 1].strip().startswith("}"):
        body_close += 1
    replace_line_range(
        lines,
        body_line,
        body_close,
        "body {\n"
        "  padding-top: var(--site-header-offset);\n"
        "  font-size: 16px;\n"
        "  text-rendering: optimizeLegibility;\n"
        "}",
    )

    a_line = find_line(lines, r"^a \{")
    a_hover = find_line(lines, r"^a:hover \{")
    a_hover_close = a_hover
    while not lines[a_hover_close - 1].strip().startswith("}"):
        a_hover_close += 1
    replace_line_range(
        lines,
        a_line,
        a_hover_close,
        "a {\n"
        "  color: #194f82;\n"
        "  text-decoration: none;\n"
        "}\n"
        "\n"
        "a:hover {\n"
        "  color: var(--secondary);\n"
        "}",
    )

    # 3) Remove shadowed base header/footer snippets
    for pattern in (
        r"^header\.site-header \{",
        r"^\.nav-links a \{",
        r"^\.nav-links a:hover \{",
        r"^footer \{",
    ):
        line = find_line(lines, pattern)
        close = line
        while not lines[close - 1].strip().startswith("}"):
            close += 1
        remove_line_range(lines, line, close)

    # 4) Merge topbar (base + final UI)
    topbar_line = find_line(lines, r"^\.topbar \{")
    topbar_close = topbar_line
    while not lines[topbar_close - 1].strip().startswith("}"):
        topbar_close += 1
    replace_line_range(
        lines,
        topbar_line,
        topbar_close,
        ".topbar {\n"
        "  background: var(--navy);\n"
        "  color: #dbe9ff;\n"
        "  min-height: 30px;\n"
        "  padding: 0.35rem 0;\n"
        "  font-size: 0.8rem;\n"
        "}",
    )

    topbar_inner = find_line(lines, r"^\.topbar-inner \{")
    topbar_inner_close = topbar_inner
    while not lines[topbar_inner_close - 1].strip().startswith("}"):
        topbar_inner_close += 1
    replace_line_range(
        lines,
        topbar_inner,
        topbar_inner_close,
        ".topbar-inner {\n"
        "  display: flex;\n"
        "  flex-wrap: nowrap;\n"
        "  align-items: center;\n"
        "  justify-content: space-between;\n"
        "  gap: 0.75rem 1rem;\n"
        "}",
    )

    # 5) Strip institutional layer duplicate foundation
    inst_marker = find_line(lines, r"Prestiznejsi institucionalni vrstva|Institucionalni komponenty")
    section_header = find_line(lines, r"^\.section-header \{", inst_marker)
    remove_line_range(lines, inst_marker + 1, section_header)
    lines[inst_marker - 1] = "/* Institucionalni komponenty a layout */"

    # Duplicate link colors inside institutional layer
    inst_a = find_line(lines, r"^a \{", inst_marker)
    inst_a_hover = find_line(lines, r"^a:hover \{", inst_a)
    inst_a_hover_close = inst_a_hover
    while not lines[inst_a_hover_close - 1].strip().startswith("}"):
        inst_a_hover_close += 1
    remove_line_range(lines, inst_a, inst_a_hover_close)

    # 6) Remove final-layer topbar duplicates (merged into base)
    final_marker = find_line(lines, r"finální UI")
    final_topbar = find_line(lines, r"^\.topbar \{", final_marker)
    final_topbar_close = final_topbar
    while not lines[final_topbar_close - 1].strip().startswith("}"):
        final_topbar_close += 1
    remove_line_range(lines, final_topbar, final_topbar_close)

    final_topbar_inner = find_line(lines, r"^\.topbar-inner \{", final_marker)
    final_topbar_inner_close = final_topbar_inner
    while not lines[final_topbar_inner_close - 1].strip().startswith("}"):
        final_topbar_inner_close += 1
    remove_line_range(lines, final_topbar_inner, final_topbar_inner_close)

    # 7) Consolidate footer: drop generic footer blocks superseded by .site-footer
    for pattern in (r"^footer \{", r"^footer h3,"):
        try:
            line = find_line(lines, pattern, inst_marker)
        except ValueError:
            continue
        close = line
        depth = 0
        while close <= len(lines):
            depth += lines[close - 1].count("{") - lines[close - 1].count("}")
            if depth <= 0 and lines[close - 1].strip().endswith("}"):
                break
            close += 1
        remove_line_range(lines, line, close)

    inst_footer_links = find_line(lines, r"^\.site-footer \.footer-links \{", inst_marker)
    inst_footer_links_close = inst_footer_links
    while not lines[inst_footer_links_close - 1].strip().startswith("}"):
        inst_footer_links_close += 1
    remove_line_range(lines, inst_footer_links, inst_footer_links_close)

    site_footer = find_line(lines, r"^\.site-footer \{")
    site_footer_close = site_footer
    while not lines[site_footer_close - 1].strip().startswith("}"):
        site_footer_close += 1
    block = "\n".join(lines[site_footer - 1 : site_footer_close])
    if "margin-top:" not in block:
        lines.insert(site_footer_close - 1, "  margin-top: 2.5rem;")

    footer_links_final = find_line(lines, r"^\.site-footer \.footer-links \{", site_footer)
    footer_links_close = footer_links_final
    while not lines[footer_links_close - 1].strip().startswith("}"):
        footer_links_close += 1
    replace_line_range(
        lines,
        footer_links_final,
        footer_links_close,
        ".site-footer .footer-links {\n"
        "  display: grid;\n"
        "  gap: 6px;\n"
        "  max-width: none;\n"
        "  margin: 0;\n"
        "  padding: 0;\n"
        "  list-style: none;\n"
        "  line-height: 1.6;\n"
        "}",
    )

    # 8) Drop duplicate .home-section padding in institutional layer
    inst_home_section = find_line(lines, r"^\.home-section \{", inst_marker)
    if line_range_contains(lines, inst_home_section, inst_home_section + 3, "padding:"):
        remove_line_range(lines, inst_home_section, inst_home_section + 2)

    after = len(lines)
    saved = before - after
    CSS_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"globals.css: {before} -> {after} lines ({saved} removed)")


if __name__ == "__main__":
    main()
