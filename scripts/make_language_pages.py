#!/usr/bin/env python3
"""Write the page files for every site language from _data/i18n/*.yml.

Run from the repository root after changing a page title (nav word) or the
first sentence of a page text:  python3 scripts/make_language_pages.py
The texts themselves are read from _data/i18n at build time and need no rerun.
"""
import re, yaml, pathlib, json

ROOT = pathlib.Path(__file__).resolve().parent.parent
LANGS = ["en", "el", "es", "ca", "de", "it"]
PAGES = [  # key, layout, cue, extra front matter
    ("research", "wide", "00:01:00,000", {"publication_gallery": True}),
    ("talks", "wide", "00:02:00,000", {}),
    ("presentations", "wide", "00:02:30,000", {}),
    ("subtitles", "filmography", "00:03:00,000", {}),
    ("projects", "wide", "00:04:00,000", {}),
    ("teaching", "page", "00:05:00,000", {}),
    ("journal", "blog", "00:06:00,000", {"archive": True}),
    ("notes", "notes", "00:06:30,000", {}),
    ("about", "wide", "00:00:30,000", {}),
    ("contact", "page", "00:07:00,000", {}),
]

def describe(text, name):
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text).replace("*", "")
    first = re.split(r"(?<=[.!?:])\s", text.strip().split("\n")[0])[0].rstrip(":")
    out = f"{name}: {first}"
    if len(out) > 155:
        out = out[:154].rsplit(" ", 1)[0] + "…"
    return out

def keep_description(path, fm):
    """English descriptions are written by hand: keep the one already in the file."""
    if path.exists():
        m = re.search(r'^description: (.*)$', path.read_text(encoding="utf-8"), flags=re.M)
        if m:
            fm["description"] = json.loads(m.group(1))
    return fm

def front(d):
    lines = ["---"]
    for k, v in d.items():
        lines.append(f"{k}: {json.dumps(v, ensure_ascii=False)}")
    return "\n".join(lines) + "\n---\n"

for lang in LANGS:
    t = yaml.safe_load((ROOT / "_data/i18n" / f"{lang}.yml").read_text(encoding="utf-8"))
    prefix = "" if lang == "en" else f"/{lang}"
    folder = ROOT if lang == "en" else ROOT / lang
    folder.mkdir(exist_ok=True)
    home = {"layout": "default", "permalink": f"{prefix}/", "title": t["site_name"],
            "description": describe(t["intro"], t["site_name"]),
            "ui": lang, "lang": lang, "base": "/", "i18n": True}
    if lang == "en":
        home = keep_description(folder / "index.html", home)
    (folder / "index.html").write_text(front(home) + "{% include pages/home.html %}\n", encoding="utf-8")
    for key, layout, cue, extra in PAGES:
        if key == "presentations":
            # second Talks page: its own title, the Talks heading, no page text
            title, text, extra = t["ui"]["presentations"], t["x"]["presentations_desc"], {"heading": t["nav"]["talks"]}
            description = text
        else:
            title, description = t["nav"][key], describe(t["pages"][key], t["site_name"])
        fm = {"layout": layout, "permalink": f"{prefix}/{key}/", "title": title,
              "description": description,
              "cue": cue, "ui": lang, "lang": lang, "base": f"/{key}/", "i18n": True, **extra}
        if lang == "en":
            fm = keep_description(folder / f"{key}.html", fm)
        (folder / f"{key}.html").write_text(front(fm) + "{% include pages/" + key + ".html %}\n", encoding="utf-8")
print("done")
