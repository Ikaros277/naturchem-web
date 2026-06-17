#!/usr/bin/env python3
"""Translate likely-English string literals inside *-de.ts files."""

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

EN_MARKERS = re.compile(
    r"\b("
    r"the|and|for|with|we|you|our|your|send|contact|find out|whether|need|not sure|"
    r"yes|from|into|through|about|will|have|has|are|is|was|were|"
    r"measurement|measurements|studies|study|authority|building|operator|designer|"
    r"investor|deliverable|protocols|accredited|emissions|workplace|noise|vibration|"
    r"team\b|projects\b"
    r")\b",
    re.I,
)

DE_MARKERS = re.compile(
    r"\b("
    r"und|der|die|das|den|dem|des|ein|eine|einer|einem|einen|"
    r"wir|sie|ihr|für|mit|nicht|auch|sind|ist|werden|können|"
    r"messung|messungen|studie|studien|gutachten|behörde|betrieb|"
    r"emissionsmessung|arbeitsplatz|lärm|vibration"
    r")\b",
    re.I,
)


PROTECTED_TOKENS = [
    "ČIŽP",
    "KHS",
    "ISPOP",
    "IPPC",
    "GHG",
    "EIA",
    "UVP",
    "VOC",
    "TOC",
    "TZL",
    "NOx",
    "NATURCHEM",
    "Ing.",
]


def protect_tokens(text: str) -> tuple[str, dict[str, str]]:
    mapping: dict[str, str] = {}
    out = text
    for i, token in enumerate(PROTECTED_TOKENS):
        if token in out:
            placeholder = f"__TOK{i}__"
            mapping[placeholder] = token
            out = out.replace(token, placeholder)
    return out, mapping


def restore_tokens(text: str, mapping: dict[str, str]) -> str:
    out = text
    for placeholder, token in mapping.items():
        out = out.replace(placeholder, token)
    return out


def google_translate(text: str) -> str:
    protected, mapping = protect_tokens(text)
    params = urllib.parse.urlencode(
        {"client": "gtx", "sl": "en", "tl": "de", "dt": "t", "q": protected}
    )
    url = f"https://translate.googleapis.com/translate_a/single?{params}"
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, context=SSL_CONTEXT, timeout=30) as response:
        payload = json.loads(response.read().decode("utf-8"))
    result = "".join(part[0] for part in payload[0] if part[0])
    return restore_tokens(result, mapping)


def should_translate(text: str) -> bool:
    if not text or len(text.strip()) < 4:
        return False
    stripped = text.strip()
    if stripped.startswith("./") or "/" in stripped and not stripped.startswith("http"):
        return False
    if re.fullmatch(r"[a-z0-9._-]+", stripped):
        return False
    if re.fullmatch(r"[\d\s\W]+", stripped):
        return False
    if "${" in text or "`" in text:
        return False
    return True


def looks_english(text: str) -> bool:
    if not should_translate(text):
        return False
    if re.search(r"[äöüßÄÖÜ]", text):
        return False
    en_hits = EN_MARKERS.findall(text)
    de_hits = DE_MARKERS.findall(text)
    if len(de_hits) > len(en_hits):
        return False
    if len(en_hits) >= 2:
        return True
    if len(en_hits) == 1 and len(text) >= 40:
        return True
    return False


def decode_literal(raw: str) -> str:
    if "\\" in raw:
        return bytes(raw, "utf-8").decode("unicode_escape")
    return raw


def translate(text: str, cache: dict[str, str]) -> str:
    if text in cache:
        return cache[text]
    for attempt in range(4):
        try:
            time.sleep(0.12 * (attempt + 1))
            result = google_translate(text)
            cache[text] = result
            return result
        except Exception as exc:  # noqa: BLE001
            if attempt == 3:
                print(f"  FAILED: {text[:70]!r} -> {exc}", flush=True)
                return text
    return text


def fix_de_file(path: Path, cache: dict[str, str], dry_run: bool = False) -> int:
    content = path.read_text(encoding="utf-8")
    replacements: list[tuple[int, int, str]] = []
    for match in STRING_RE.finditer(content):
        raw = match.group(1)
        decoded = decode_literal(raw)
        if not looks_english(decoded):
            continue
        translated = translate(decoded, cache)
        if translated == decoded:
            continue
        escaped = translated.replace("\\", "\\\\").replace('"', '\\"')
        replacements.append((match.start(), match.end(), f'"{escaped}"'))
        print(f"  {decoded[:80]!r}", flush=True)
        print(f"    -> {translated[:80]!r}", flush=True)

    if not replacements or dry_run:
        return len(replacements)

    parts: list[str] = []
    last = 0
    for start, end, replacement in replacements:
        parts.append(content[last:start])
        parts.append(replacement)
        last = end
    parts.append(content[last:])
    path.write_text("".join(parts), encoding="utf-8")
    return len(replacements)


def main() -> int:
    dry_run = "--dry-run" in sys.argv
    cache_path = ROOT / "scripts" / ".de_translation_cache.json"
    cache: dict[str, str] = {}
    if cache_path.exists():
        cache = json.loads(cache_path.read_text(encoding="utf-8"))

    total = 0
    for path in sorted(SRC_LIB.glob("*-de.ts")):
        print(path.name, flush=True)
        n = fix_de_file(path, cache, dry_run=dry_run)
        if n:
            print(f"  => {n} strings{' (dry run)' if dry_run else ''}", flush=True)
        total += 0 if dry_run else n

    if not dry_run:
        cache_path.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"done, {total} strings updated", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
