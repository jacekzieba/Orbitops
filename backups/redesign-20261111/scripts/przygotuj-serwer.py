#!/usr/bin/env python3
"""Build a standalone static FTP release; no Node.js required on the server."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import re
import shutil
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'prototyp'
OUTPUT = ROOT / 'DO_WGRANIA'
ARCHIVE = ROOT / 'OrbitOps-na-serwer.zip'


def validate(folder):
    missing = set()
    def check(source, url):
        parsed = urlsplit(url)
        if parsed.scheme or parsed.netloc or not parsed.path:
            return
        path = unquote(parsed.path)
        target = folder / path.lstrip('/') if path.startswith('/') else source.parent / path
        if not target.is_file():
            missing.add(f'{source.relative_to(folder)} → {url}')

    class Resources(HTMLParser):
        def __init__(self, source):
            super().__init__()
            self.source = source
        def handle_starttag(self, tag, attrs):
            attrs = dict(attrs)
            for key in ('src', 'href', 'poster'):
                if key in attrs:
                    check(self.source, attrs[key])

    for source in folder.rglob('*'):
        if not source.is_file():
            continue
        if source.suffix == '.html':
            Resources(source).feed(source.read_text())
        if source.suffix == '.css':
            for url in re.findall(r'url\([\s\'\"]*([^\s\)\'\"]+)', source.read_text()):
                check(source, url)
        if source.suffix == '.js':
            text = source.read_text()
            for url in re.findall(r'''(?:from\s*|import\s*|fetch\(\s*|\.load\(\s*)['"]([^'"]+)['"]''', text):
                if url.startswith(('./', '../', 'assets/')):
                    check(source, url)
    if missing:
        raise SystemExit('Brakujące pliki:\n' + '\n'.join(sorted(missing)))


def main():
    stage = ROOT / '.ftp-staging'
    if stage.exists():
        shutil.rmtree(stage)
    stage.mkdir()
    # Publish only the current landing and its shared demonstrator. Legacy
    # Three.js demos stay in source history, outside the release artifact.
    files = [
        'index.html', 'demo.html', 'landing.css', 'landing.js',
        'landing-view.js', 'landing-copy.js', 'operations-demo.js',
        'operations-copy.js', 'operations-model.js',
        'favicon.svg', 'favicon.ico', 'robots.txt', 'sitemap.xml',
        'assets/logo.svg', 'assets/brand-mark.svg', 'assets/logo-square.png',
        'assets/og-product.jpg',
        'assets/apple-touch-icon.png', 'assets/earth-day.jpg',
        'assets/fonts.css', 'assets/Manrope-OFL.txt',
        *[f'assets/font-{i}.ttf' for i in range(3, 8)],
    ]
    for name in files:
        destination = stage / name
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(SOURCE / name, destination)
    validate(stage)
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    stage.rename(OUTPUT)
    with zipfile.ZipFile(ARCHIVE, 'w', zipfile.ZIP_DEFLATED) as archive:
        for file in sorted(OUTPUT.rglob('*')):
            if file.is_file():
                archive.write(file, file.relative_to(OUTPUT))
    files = [p for p in OUTPUT.rglob('*') if p.is_file()]
    print(f'Gotowe: {OUTPUT}\nZIP: {ARCHIVE}\n{len(files)} plików, {sum(p.stat().st_size for p in files)/1024/1024:.1f} MB; ZIP {ARCHIVE.stat().st_size/1024/1024:.1f} MB')
    print('Sprawdzono lokalne odnośniki HTML, zasoby CSS i importy JavaScript.')


if __name__ == '__main__':
    main()
