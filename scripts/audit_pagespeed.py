#!/usr/bin/env python3
"""Fetch PageSpeed Insights (Lighthouse) scores for production URLs."""
import json
import sys
import urllib.parse
import urllib.request

URLS = [
    ("homepage", "https://www.naturchem.cz/"),
    ("poradna", "https://www.naturchem.cz/poradna"),
    ("sluzby", "https://www.naturchem.cz/sluzby"),
    ("kontakt", "https://www.naturchem.cz/kontakt"),
    ("provozy", "https://www.naturchem.cz/provozy-a-technologie"),
    ("poradna-article", "https://www.naturchem.cz/poradna/kdy-je-potreba-mereni-emisi-a-kdy-staci-jiny-podklad"),
]


def fetch(name: str, url: str, strategy: str = "mobile") -> None:
    api = (
        "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?"
        + urllib.parse.urlencode(
            {
                "url": url,
                "strategy": strategy,
                "category": ["performance", "accessibility", "best-practices", "seo"],
            },
            doseq=True,
        )
    )
    try:
        with urllib.request.urlopen(api, timeout=120) as resp:
            data = json.load(resp)
    except Exception as exc:
        print(f"{name} ({strategy}): ERROR {exc}")
        return

    cats = data.get("lighthouseResult", {}).get("categories", {})
    audits = data.get("lighthouseResult", {}).get("audits", {})
    loading = data.get("loadingExperience", {}).get("metrics", {})

    def score(key: str) -> int:
        return round((cats.get(key, {}).get("score") or 0) * 100)

    print(f"=== {name} ({strategy}) ===")
    print(f"  Scores: Perf {score('performance')} | A11y {score('accessibility')} | BP {score('best-practices')} | SEO {score('seo')}")
    for key in (
        "first-contentful-paint",
        "largest-contentful-paint",
        "total-blocking-time",
        "cumulative-layout-shift",
        "interactive",
        "speed-index",
    ):
        if key in audits and audits[key].get("displayValue"):
            print(f"  {audits[key]['title']}: {audits[key]['displayValue']}")
    # CrUX field data if available
    for key, label in (
        ("LARGEST_CONTENTFUL_PAINT_MS", "CrUX LCP"),
        ("INTERACTION_TO_NEXT_PAINT", "CrUX INP"),
        ("CUMULATIVE_LAYOUT_SHIFT_SCORE", "CrUX CLS"),
    ):
        m = loading.get(key, {})
        if m.get("percentile") is not None:
            val = m["percentile"]
            if key == "CUMULATIVE_LAYOUT_SHIFT_SCORE":
                val = val / 100
            print(f"  {label} (field p75): {val}")
    print()


def main() -> None:
    strategy = sys.argv[1] if len(sys.argv) > 1 else "mobile"
    for name, url in URLS:
        fetch(name, url, strategy)


if __name__ == "__main__":
    main()
