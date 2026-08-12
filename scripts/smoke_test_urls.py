#!/usr/bin/env python3
"""Fetch all sitemap URLs and report non-200 or error-page responses."""

from __future__ import annotations

import re
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
from html import unescape
from urllib.parse import urljoin, urlparse

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000"

ERROR_TITLE = re.compile(r"^404:\s", re.I)
HREF = re.compile(r'<a\b[^>]*\bhref\s*=\s*(["\'])(.*?)\1', re.I | re.S)
BASE_HOST = urlparse(BASE).netloc.lower()
INTERNAL_HOSTS = {BASE_HOST, "naturchem.cz", "www.naturchem.cz"}


def is_not_found_page(body: str, title: str) -> bool:
    if ERROR_TITLE.search(title):
        return True
    if title.strip().lower() == "this page could not be found.":
        return True
    if re.search(r"<h1[^>]*>\s*404\s*</h1>", body, re.I):
        return True
    return False


def internal_paths(body: str) -> set[str]:
    paths: set[str] = set()
    for match in HREF.finditer(body):
        href = unescape(match.group(2)).strip()
        if not href or href.startswith(("#", "mailto:", "tel:", "javascript:", "data:")):
            continue

        parsed = urlparse(urljoin(f"{BASE.rstrip('/')}/", href))
        if parsed.scheme not in {"http", "https"} or parsed.netloc.lower() not in INTERNAL_HOSTS:
            continue

        path = parsed.path or "/"
        if path.startswith(("/_next/", "/_vercel/", "/api/", "/admin/")):
            continue
        if parsed.query:
            path = f"{path}?{parsed.query}"
        paths.add(path)
    return paths


def fetch(path: str) -> tuple[str, int, str | None, str, set[str]]:
    url = BASE + path
    req = urllib.request.Request(url, headers={"User-Agent": "naturchem-smoke-test"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = resp.read().decode("utf-8", errors="replace")
            status = resp.status
    except urllib.error.HTTPError as e:
        return path, e.code, e.reason, "", set()
    except Exception as e:
        return path, 0, str(e), "", set()

    title = ""
    match = re.search(r"<title[^>]*>([^<]+)</title>", body, re.I)
    if match:
        title = match.group(1).strip()
    if is_not_found_page(body, title):
        return path, status, "not-found-page", title, set()
    if re.search(r"Application error|Internal Server Error", body, re.I):
        return path, status, "application-error", title, set()
    return path, status, None, title, internal_paths(body)


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
    paths = list(dict.fromkeys(sitemap_paths()))
    extras = ["/", "/en/", "/de/", "/kontakt/?service=mereni-emisi", "/en/kontakt/?sector=lakovny"]
    for extra in extras:
        if extra not in paths:
            paths.append(extra)

    print(f"Testing {len(paths)} URLs on {BASE}...")
    bad: list[tuple[str, int, str | None, str]] = []
    link_sources: dict[str, set[str]] = {}

    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = {executor.submit(fetch, path): path for path in paths}
        done = 0
        for future in as_completed(futures):
            done += 1
            result = future.result()
            path, status, err, note, links = result
            if status != 200 or err:
                bad.append((path, status, err, note))
            for link in links:
                link_sources.setdefault(link, set()).add(path)
            if done % 50 == 0:
                print(f"  ... {done}/{len(paths)}")

    linked_paths = sorted(set(link_sources) - set(paths))
    print(f"Testing {len(linked_paths)} additional internal links discovered in rendered pages...")
    bad_links: list[tuple[str, int, str | None, str]] = []
    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = {executor.submit(fetch, path): path for path in linked_paths}
        done = 0
        for future in as_completed(futures):
            done += 1
            path, status, err, note, _ = future.result()
            if status != 200 or err:
                bad_links.append((path, status, err, note))
            if done % 50 == 0:
                print(f"  ... {done}/{len(linked_paths)}")

    print(f"Done. Sitemap failures: {len(bad)}; internal-link failures: {len(bad_links)}")
    for path, status, err, note in sorted(bad):
        print(f"  FAIL {status} {path} — {err or note}")
    for path, status, err, note in sorted(bad_links):
        sources = ", ".join(sorted(link_sources.get(path, set()))[:3])
        print(f"  BROKEN LINK {status} {path} — {err or note}; linked from {sources}")

    return 1 if bad or bad_links else 0


if __name__ == "__main__":
    raise SystemExit(main())
