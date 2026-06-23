#!/usr/bin/env python3
"""Monthly Search Console query report helper for naturchem.cz.

Without API credentials: prints manual workflow and GSC deep links.
With a service account (GSC_SEARCH_CONSOLE_CREDENTIALS JSON path):

  set GSC_PROPERTY=sc-domain:naturchem.cz
  set GSC_SEARCH_CONSOLE_CREDENTIALS=C:\\path\\to\\service-account.json
  python scripts/gsc_monthly_report.py

Install optional deps: pip install google-api-python-client google-auth
"""

from __future__ import annotations

import csv
import json
import os
import sys
from datetime import date, timedelta
from pathlib import Path
from urllib.parse import quote

SITE = "https://www.naturchem.cz"
REPORTS_DIR = Path(__file__).resolve().parents[1] / "reports" / "gsc"


def month_window(today: date | None = None) -> tuple[str, str]:
    today = today or date.today()
    first_this_month = today.replace(day=1)
    last_prev_month = first_this_month - timedelta(days=1)
    first_prev_month = last_prev_month.replace(day=1)
    return first_prev_month.isoformat(), last_prev_month.isoformat()


def manual_instructions(start: str, end: str) -> None:
    property_path = quote("https://www.naturchem.cz/", safe="")
    performance = (
        "https://search.google.com/search-console/performance/search-analytics"
        f"?resource_id={property_path}&start_date={start}&end_date={end}"
    )
    sitemap = (
        "https://search.google.com/search-console/sitemaps"
        f"?resource_id={property_path}"
    )

    print("=== NATURCHEM - mesicni Search Console report ===")
    print(f"Obdobi: {start} - {end}")
    print()
    print("1) Otevřete výkon vyhledávání (dotazy, stránky, CTR):")
    print(f"   {performance}")
    print()
    print("2) Export: Performance -> Queries -> Export -> Download CSV")
    print("3) Zkontrolujte sitemap (po deployi sitemap fixu):")
    print(f"   {sitemap}")
    print(f"   URL sitemap: {SITE}/sitemap.xml")
    print()
    print("4) Uložte CSV do reports/gsc/YYYY-MM-queries.csv pro srovnání měsíců")
    print()
    print("Volitelně API: nastavte GSC_SEARCH_CONSOLE_CREDENTIALS a spusťte znovu.")


def fetch_api_report(start: str, end: str) -> int:
    creds_path = os.environ.get("GSC_SEARCH_CONSOLE_CREDENTIALS")
    property_uri = os.environ.get("GSC_PROPERTY", "sc-domain:naturchem.cz")

    if not creds_path:
        return 1

    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
    except ImportError:
        print("Chybí balíčky: pip install google-api-python-client google-auth", file=sys.stderr)
        return 1

    credentials = service_account.Credentials.from_service_account_file(
        creds_path,
        scopes=["https://www.googleapis.com/auth/webmasters.readonly"],
    )
    service = build("searchconsole", "v1", credentials=credentials, cache_discovery=False)

    response = (
        service.searchanalytics()
        .query(
            siteUrl=property_uri,
            body={
                "startDate": start,
                "endDate": end,
                "dimensions": ["query"],
                "rowLimit": 250,
                "dataState": "final",
            },
        )
        .execute()
    )

    rows = response.get("rows", [])
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    month_label = start[:7]
    out_csv = REPORTS_DIR / f"{month_label}-queries.csv"
    out_json = REPORTS_DIR / f"{month_label}-queries.json"

    with out_csv.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle)
        writer.writerow(["query", "clicks", "impressions", "ctr", "position"])
        for row in rows:
            keys = row.get("keys", [])
            writer.writerow(
                [
                    keys[0] if keys else "",
                    row.get("clicks", 0),
                    row.get("impressions", 0),
                    row.get("ctr", 0),
                    row.get("position", 0),
                ]
            )

    out_json.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"API report: {len(rows)} dotazu -> {out_csv}")
    print(f"JSON: {out_json}")
    return 0


def main() -> int:
    start, end = month_window()
    manual_instructions(start, end)
    if not os.environ.get("GSC_SEARCH_CONSOLE_CREDENTIALS"):
        return 0
    return fetch_api_report(start, end)


if __name__ == "__main__":
    raise SystemExit(main())
