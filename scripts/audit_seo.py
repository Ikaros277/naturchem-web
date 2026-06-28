#!/usr/bin/env python3
"""Technical SEO checks from local build + source."""
import pathlib
import re
import xml.etree.ElementTree as ET

ROOT = pathlib.Path(__file__).resolve().parents[1]


def check_sitemap() -> None:
    sm = ROOT / ".next" / "server" / "app" / "sitemap.xml.body"
    if not sm.exists():
        # try static export path
        candidates = list((ROOT / ".next").rglob("sitemap.xml"))
        sm = candidates[0] if candidates else None
    print("=== Sitemap ===")
    if not sm or not pathlib.Path(sm).exists():
        print("  WARN: sitemap not found in .next (run build first)")
        return
    text = pathlib.Path(sm).read_text(encoding="utf-8")
    urls = re.findall(r"<loc>(.*?)</loc>", text)
    hreflangs = len(re.findall(r"xhtml:link", text))
    print(f"  URLs: {len(urls)}")
    print(f"  hreflang entries: {hreflangs}")
    locales = {u.split("/")[3] if len(u.split("/")) > 3 else "?" for u in urls if "naturchem" in u}
    print(f"  locale prefixes in URLs: {sorted(set(locales))}")
    missing_alt = 0
    for loc in urls[:5]:
        if "naturchem" not in loc:
            continue
    poradna = [u for u in urls if "/poradna/" in u]
    print(f"  poradna articles in sitemap: {len(poradna)}")


def check_robots() -> None:
    print("=== robots.txt ===")
    rb = ROOT / "src" / "app" / "robots.ts"
    text = rb.read_text(encoding="utf-8")
    print("  disallow /api/: OK" if "/api/" in text else "  WARN: api not disallowed")
    print("  sitemap reference: OK" if "sitemap" in text else "  WARN: no sitemap")


def check_jsonld_pages() -> None:
    print("=== JSON-LD usage ===")
    pages = list((ROOT / "src").rglob("*.tsx"))
    faq_schema = []
    itemlist_heavy = []
    for p in pages:
        t = p.read_text(encoding="utf-8")
        if "FAQPage" in t and "mainEntity" in t:
            faq_schema.append(str(p.relative_to(ROOT)))
        if "ItemList" in t and "itemListElement" in t:
            itemlist_heavy.append(str(p.relative_to(ROOT)))
    print(f"  FAQPage schemas: {len(faq_schema)}")
    for f in faq_schema:
        print(f"    - {f}")
    print(f"  ItemList schemas: {len(itemlist_heavy)}")
    for f in itemlist_heavy[:8]:
        print(f"    - {f}")


def check_hreflang_in_html() -> None:
    print("=== hreflang in prerendered HTML ===")
    for page in ["cs/poradna", "cs/faq", "cs/sluzby", "en/poradna"]:
        p = ROOT / ".next" / "server" / "app" / f"{page}.html"
        if not p.exists():
            continue
        h = p.read_text(encoding="utf-8")
        alts = re.findall(r'hrefLang="([^"]+)"', h)
        canonical = re.findall(r'rel="canonical"[^>]*href="([^"]+)"', h)
        print(f"  /{page}: hreflang={sorted(set(alts))}, canonical={canonical[:1]}")


def main() -> None:
    check_sitemap()
    print()
    check_robots()
    print()
    check_jsonld_pages()
    print()
    check_hreflang_in_html()


if __name__ == "__main__":
    main()
