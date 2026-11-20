#!/usr/bin/env python3
"""Cache approved filmography poster links as optimized local JPEGs.

Run from repository root; operates on _data/filmography.yml or data/filmography.yml.
Keeps the external URL when a download fails, so the site never gets a dead local path.
"""
from io import BytesIO
from pathlib import Path
import re
import unicodedata

import requests
from PIL import Image, ImageOps

DATA = next((p for p in (Path("_data/filmography.yml"), Path("data/filmography.yml")) if p.exists()), None)
if DATA is None:
    raise SystemExit("No filmography file found")
OUT = Path("assets/posters")
OUT.mkdir(parents=True, exist_ok=True)
PATTERN = re.compile(r'(?m)^- title: "([^"\\n]+)"\\n  poster: "(https?://[^"\\n]+)"\\n')
session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; SokoliPosterImporter/1.0)", "Accept": "image/avif,image/webp,image/png,image/jpeg,image/*;q=0.8"})
downloaded = []
failed = []

def slugify(title):
    text = unicodedata.normalize("NFKD", title).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")

def cache(match):
    title, url = match.group(1), match.group(2)
    name = slugify(title) + ".jpg"
    path = OUT / name
    try:
        res = session.get(url, timeout=40)
        res.raise_for_status()
        if len(res.content) > 20_000_000:
            raise ValueError("image over 20 MB")
        with Image.open(BytesIO(res.content)) as original:
            im = ImageOps.exif_transpose(original)
            if im.width < 150 or im.height < 200:
                raise ValueError(f"image too small: {im.size}")
            im = im.convert("RGB")
            im.thumbnail((900, 1350), Image.Resampling.LANCZOS)
            im.save(path, "JPEG", quality=85, optimize=True, progressive=True)
        downloaded.append(title)
        print(f"Saved {title}: {path} ({path.stat().st_size} bytes)")
        return f'- title: "{title}"\\n  poster: "/assets/posters/{name}"\\n'
    except Exception as error:
        failed.append((title, str(error)))
        print(f"Kept external URL for {title}: {error}")
        return match.group(0)

source = DATA.read_text(encoding="utf-8")
updated = PATTERN.sub(cache, source)
if updated != source:
    DATA.write_text(updated, encoding="utf-8")
print(f"Downloaded {len(downloaded)}; failed {len(failed)}")
for title, error in failed:
    print(f"  - {title}: {error}")
