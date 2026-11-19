"""Check publication image coverage, credits and local assets. Requires PyYAML."""
import json
from pathlib import Path
from urllib.parse import urlparse, parse_qs
import xml.etree.ElementTree as ET
import yaml

ROOT = Path(__file__).resolve().parents[1]
ledger = json.loads((ROOT / '_data/publication_images.json').read_text(encoding='utf-8'))
records = []
for name in ['publications.yml', 'edited_volumes.yml']:
    records.extend(yaml.safe_load((ROOT / '_data' / name).read_text(encoding='utf-8')))
assert len(records) == len(ledger) and records
assert len({r['title'] for r in records}) == len(records)
for record in records:
    asset = ROOT / record['cover'].lstrip('/')
    assert asset.is_file(), asset
    assert record.get('cover_credit'), record['title']
    assert record.get('cover_type') in ['Publisher cover', 'Presentation slide', 'Topic illustration']
    assert record.get('publisher_url'), record['title']
    if record['cover_type'] == 'Publisher cover':
        assert record.get('cover_source', '').startswith('https://'), record['title']
        assert urlparse(record['cover_source']).hostname != 'doi.org', 'Publisher link required'
    for key in ['cover_source', 'cover_license', 'url', 'volume_url']:
        if record.get(key):
            assert 'utm_source=chatgpt' not in record[key].lower()
    matches = [entry for entry in ledger if entry['title'] == record['title']]
    assert len(matches) == 1 and matches[0]['file'] == record['cover']
    if asset.suffix == '.svg':
        tree = ET.parse(asset)
        assert tree.find('{http://www.w3.org/2000/svg}title') is not None
        assert 'script' not in asset.read_text(encoding='utf-8').lower()
print(f'{len(records)} publication records: local images, credits, publisher links and provenance verified.')
