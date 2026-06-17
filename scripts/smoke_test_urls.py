#!/usr/bin/env python3
"""Fetch all sitemap URLs and report non-200 or error-page responses."""

from __future__ import annotations

import re
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000"

ERROR_TITLE = re.compile(r"^404:\s", re.I)


def is_not_found_page(body: str, title: str) -> bool:
    if ERROR_TITLE.search(title):
        return True
    if title.strip().lower() == "this page could not be found.":
        return True
    if re.search(r"<h1[^>]*>\s*404\s*</h1>", body, re.I):
        return True
    return False


def fetch(path: str) -> tuple[str, int, str | None, str]:
    url = BASE + path
    req = urllib.request.Request(url, headers={"User-Agent": "naturchem-smoke-test"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = resp.read().decode("utf-8", errors="replace")
            status = resp.status
    except urllib.error.HTTPError as e:
        return path, e.code, e.reason, ""
    except Exception as e:
        return path, 0, str(e), ""

    title = ""
    match = re.search(r"<title[^>]*>([^<]+)</title>", body, re.I)
    if match:
        title = match.group(1).strip()
    if is_not_found_page(body, title):
        return path, status, "not-found-page", title
    if re.search(r"Application error|Internal Server Error", body, re.I):
        return path, status, "application-error", title
    return path, status, None, title


def sitemap_paths() -> list[str]:
    with urllib.request.urlopen(f"{BASE}/sitemap.xml", timeout=30) as response:
        xml = response.read()
    root = ET.fromstring(xml)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    paths: list[str] = []
    for loc in root.findall(".//sm:loc", ns):
        full = (loc.text or "").strip()
        path = full.replace("https://www.naturchem.cz", "").replace("http://www.naturchem.cz", "")
        if not path:
            path = "/"
        if not path.endswith("/") and "?" not in path:
            path += "/"
        paths.append(path)
    return paths


def main() -> int:
    paths = sitemap_paths()
    extras = ["/", "/en/", "/de/", "/kontakt/?service=mereni-emisi", "/en/kontakt/?sector=lakovny"]
    for extra in extras:
        if extra not in paths:
            paths.append(extra)

    print(f"Testing {len(paths)} URLs on {BASE}...")
    bad: list[tuple[str, int, str | None, str]] = []

    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = {executor.submit(fetch, path): path for path in paths}
        done = 0
        for future in as_completed(futures):
            done += 1
            result = future.result()
            path, status, err, note = result
            if status != 200 or err:
                bad.append(result)
            if done % 50 == 0:
                print(f"  ... {done}/{len(paths)}")

    print(f"Done. Failures: {len(bad)}")
    for path, status, err, note in sorted(bad):
        print(f"  FAIL {status} {path} — {err or note}")

    return 1 if bad else 0


if __name__ == "__main__":
    raise SystemExit(main())
