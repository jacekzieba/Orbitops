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
    for pattern in ('*.html', '*.css', '*.js'):
        for file in SOURCE.glob(pattern):
            shutil.copy2(file, stage / file.name)
    for name in ('favicon.svg', 'favicon.ico', 'robots.txt', 'sitemap.xml'):
        shutil.copy2(SOURCE / name, stage / name)
    shutil.copytree(SOURCE / 'assets', stage / 'assets', ignore=shutil.ignore_patterns('.DS_Store', '.*'))
    # Only ship the three browser modules actually used by the site.
    three = SOURCE / 'node_modules/three'
    for source, target in [
        ('build/three.module.js', 'vendor/three/build/three.module.js'),
        ('build/three.core.js', 'vendor/three/build/three.core.js'),
        ('examples/jsm/controls/OrbitControls.js', 'vendor/three/examples/jsm/controls/OrbitControls.js'),
        ('LICENSE', 'vendor/three/LICENSE'),
    ]:
        dest = stage / target
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(three / source, dest)
    for file in list(stage.glob('*.html')) + list(stage.glob('*.js')):
        text = file.read_text().replace('./node_modules/three/', './vendor/three/')
        # Internal review materials are not part of the public release.
        text = re.sub(r'<a\b[^>]*href="review/"[^>]*>.*?</a>', '', text, flags=re.S)
        file.write_text(text)
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
