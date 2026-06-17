#!/usr/bin/env python3
"""Generate German locale content from English sources."""

from __future__ import annotations

import json
import re
import shutil
import ssl
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC_LIB = ROOT / "src" / "lib"
MESSAGES = ROOT / "messages"
CONTENT = ROOT / "content"

SSL_CONTEXT = ssl.create_default_context()
SSL_CONTEXT.check_hostname = False
SSL_CONTEXT.verify_mode = ssl.CERT_NONE

_cache: dict[str, str] = {}


def google_translate(text: str, source: str = "en", target: str = "de") -> str:
    params = urllib.parse.urlencode(
        {
            "client": "gtx",
            "sl": source,
            "tl": target,
            "dt": "t",
            "q": text,
        }
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


def translate(text: str) -> str:
    if not should_translate(text):
        return text
    if text in _cache:
        return _cache[text]
    for attempt in range(4):
        try:
            time.sleep(0.08 * (attempt + 1))
            result = google_translate(text)
            _cache[text] = result
            return result
        except Exception as exc:  # noqa: BLE001
            if attempt == 3:
                print(f"translate failed: {text[:60]!r} -> {exc}", flush=True)
                return text
    return text


def translate_json_value(value):
    if isinstance(value, str):
        return translate(value)
    if isinstance(value, dict):
        return {k: translate_json_value(v) for k, v in value.items()}
    if isinstance(value, list):
        return [translate_json_value(v) for v in value]
    return value


def translate_messages() -> None:
    src = MESSAGES / "en.json"
    dst = MESSAGES / "de.json"
    if dst.exists():
        print(f"skip existing {dst}", flush=True)
        return
    data = json.loads(src.read_text(encoding="utf-8"))
    translated = translate_json_value(data)
    dst.write_text(json.dumps(translated, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {dst}", flush=True)


STRING_RE = re.compile(r'"((?:[^"\\]|\\.)*)"')


def translate_ts_file(src: Path, dst: Path) -> None:
    content = src.read_text(encoding="utf-8")
    parts: list[str] = []
    last = 0
    for match in STRING_RE.finditer(content):
        parts.append(content[last : match.start()])
        raw = match.group(1)
        decoded = bytes(raw, "utf-8").decode("unicode_escape") if "\\" in raw else raw
        if should_translate(decoded):
            translated = translate(decoded)
            escaped = translated.replace("\\", "\\\\").replace('"', '\\"')
            parts.append(f'"{escaped}"')
        else:
            parts.append(match.group(0))
        last = match.end()
    parts.append(content[last:])
    dst.write_text("".join(parts), encoding="utf-8")
    print(f"wrote {dst}", flush=True)


def translate_lib_modules() -> None:
    for src in sorted(SRC_LIB.glob("*-en.ts")):
        dst = SRC_LIB / src.name.replace("-en.ts", "-de.ts")
        translate_ts_file(src, dst)

    sector_src = SRC_LIB / "sector-groups.ts"
    sector_dst = SRC_LIB / "sector-groups-de.ts"
    if sector_src.exists():
        translate_ts_file(sector_src, sector_dst)


def translate_markdown_article(src: Path, dst: Path) -> None:
    text = src.read_text(encoding="utf-8")
    if not text.startswith("---"):
        dst.write_text(translate(text), encoding="utf-8")
        return

    parts = text.split("---", 2)
    if len(parts) < 3:
        dst.write_text(translate(text), encoding="utf-8")
        return

    frontmatter = parts[1]
    body = parts[2]
    fm_lines = []
    for line in frontmatter.splitlines():
        if ":" in line:
            key, _, value = line.partition(":")
            value = value.strip()
            if key.strip() in {"title", "excerpt"} and value:
                if value.startswith('"') and value.endswith('"'):
                    inner = value[1:-1]
                    fm_lines.append(f'{key}: "{translate(inner)}"')
                else:
                    fm_lines.append(f"{key}: {translate(value)}")
            else:
                fm_lines.append(line)
        else:
            fm_lines.append(line)

    translated_body = translate(body) if body.strip() else body
    dst.write_text("---\n" + "\n".join(fm_lines) + f"\n---{translated_body}", encoding="utf-8")


def translate_articles() -> None:
    src_dir = CONTENT / "articles-en"
    dst_dir = CONTENT / "articles-de"
    dst_dir.mkdir(parents=True, exist_ok=True)
    for src in sorted(src_dir.glob("*.md")):
        translate_markdown_article(src, dst_dir / src.name)
        print(f"wrote {dst_dir / src.name}", flush=True)


def save_cache() -> None:
    cache_path = ROOT / "scripts" / ".de_translation_cache.json"
    cache_path.write_text(json.dumps(_cache, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> None:
    print("Translating lib modules...", flush=True)
    translate_lib_modules()
    print("Translating articles...", flush=True)
    translate_articles()
    save_cache()
    print("done", flush=True)


if __name__ == "__main__":
    main()
