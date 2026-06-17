#!/usr/bin/env python3
"""Re-translate string literals in *-de.ts that are still identical to *-en.ts."""

from __future__ import annotations

import json
import re
import sys
import time
import urllib.parse
import urllib.request
import ssl
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC_LIB = ROOT / "src" / "lib"

SSL_CONTEXT = ssl.create_default_context()
SSL_CONTEXT.check_hostname = False
SSL_CONTEXT.verify_mode = ssl.CERT_NONE

STRING_RE = re.compile(r'"((?:[^"\\]|\\.)*)"')


def google_translate(text: str, source: str = "en", target: str = "de") -> str:
    params = urllib.parse.urlencode(
        {"client": "gtx", "sl": source, "tl": target, "dt": "t", "q": text}
    )
    url = f"https://translate.googleapis.com/translate_a/single?{params}"
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, context=SSL_CONTEXT, timeout=30) as response:
        payload = json.loads(response.read().decode("utf-8"))
    return "".join(part[0] for part in payload[0] if part[0])


def should_translate(text: str) -> bool:
    if not text or len(text.strip()) < 2:
        return False
    stripped = text.strip()
    if stripped.startswith(("http://", "https://", "/", "@/", "mailto:")):
        return False
    if re.fullmatch(r"[a-z0-9._-]+", stripped):
        return False
    if re.fullmatch(r"[\d\s\W]+", stripped):
        return False
    if re.search(r"[ěščřžýáíéúůďťň]", stripped, re.I):
        return False
    if "${" in text or "`" in text:
        return False
    return True


def decode_literal(raw: str) -> str:
    if "\\" in raw:
        return bytes(raw, "utf-8").decode("unicode_escape")
    return raw


def extract_strings(content: str) -> list[tuple[int, int, str, str]]:
    """Return (start, end, raw, decoded) for each string literal."""
    out: list[tuple[int, int, str, str]] = []
    for match in STRING_RE.finditer(content):
        raw = match.group(1)
        out.append((match.start(), match.end(), raw, decode_literal(raw)))
    return out


def translate(text: str, cache: dict[str, str]) -> str:
    if text in cache:
        return cache[text]
    for attempt in range(4):
        try:
            time.sleep(0.1 * (attempt + 1))
            result = google_translate(text)
            cache[text] = result
            return result
        except Exception as exc:  # noqa: BLE001
            if attempt == 3:
                print(f"  FAILED: {text[:70]!r} -> {exc}", flush=True)
                return text
    return text


def fix_file_pair(en_path: Path, de_path: Path, cache: dict[str, str]) -> int:
    if not de_path.exists():
        print(f"skip missing {de_path.name}", flush=True)
        return 0

    en_content = en_path.read_text(encoding="utf-8")
    de_content = de_path.read_text(encoding="utf-8")
    en_strings = extract_strings(en_content)
    de_strings = extract_strings(de_content)

    if len(en_strings) != len(de_strings):
        print(
            f"warn {de_path.name}: string count mismatch en={len(en_strings)} de={len(de_strings)}",
            flush=True,
        )

    replacements: list[tuple[int, int, str]] = []
    count = 0
    for (de_start, de_end, de_raw, de_dec), (_, _, _, en_dec) in zip(
        de_strings, en_strings, strict=False
    ):
        if de_dec != en_dec:
            continue
        if not should_translate(de_dec):
            continue
        translated = translate(de_dec, cache)
        if translated == de_dec:
            continue
        escaped = translated.replace("\\", "\\\\").replace('"', '\\"')
        replacements.append((de_start, de_end, f'"{escaped}"'))
        count += 1

    if not replacements:
        return 0

    parts: list[str] = []
    last = 0
    for start, end, replacement in replacements:
        parts.append(de_content[last:start])
        parts.append(replacement)
        last = end
    parts.append(de_content[last:])
    de_path.write_text("".join(parts), encoding="utf-8")
    print(f"fixed {count} strings in {de_path.name}", flush=True)
    return count


def main() -> int:
    cache_path = ROOT / "scripts" / ".de_translation_cache.json"
    cache: dict[str, str] = {}
    if cache_path.exists():
        cache = json.loads(cache_path.read_text(encoding="utf-8"))

    total = 0
    for en_path in sorted(SRC_LIB.glob("*-en.ts")):
        de_path = SRC_LIB / en_path.name.replace("-en.ts", "-de.ts")
        total += fix_file_pair(en_path, de_path, cache)

  # sector-groups has no -en twin; compare to Czech source if DE still has Czech/EN mix
    sector_cs = SRC_LIB / "sector-groups.ts"
    sector_de = SRC_LIB / "sector-groups-de.ts"
    if sector_cs.exists() and sector_de.exists():
        # translate DE strings that match EN from sector-groups-i18n is complex; skip
        pass

    cache_path.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"done, {total} strings updated", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
