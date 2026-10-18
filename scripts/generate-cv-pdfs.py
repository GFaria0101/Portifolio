"""Generate public CV PDFs from the current build in all supported languages.
Run after npm run build, before scripts/publish-files.py. Requires Python
Playwright and Chromium (system installation or Playwright browser).
"""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
import shutil
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]
build = root / 'dist'
if not (build / 'index.html').is_file():
    raise SystemExit('Run npm run build first.')

class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_args):
        pass

server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(build)))
Thread(target=server.serve_forever, daemon=True).start()
try:
    with sync_playwright() as playwright:
        browser_options = {'headless': True}
        chromium = shutil.which('chromium')
        if chromium:
            browser_options['executable_path'] = chromium
        browser = playwright.chromium.launch(**browser_options)
        for locale in ('pt', 'en', 'es', 'fr'):
            context = browser.new_context(color_scheme='light')
            page = context.new_page()
            page.goto(f'http://127.0.0.1:{server.server_port}/#/cv', wait_until='networkidle')
            page.locator('select').select_option(locale)
            page.wait_for_function('(lang) => document.documentElement.lang === lang', arg=locale)
            page.evaluate('document.fonts.ready')
            page.emulate_media(media='print')
            page.add_style_tag(content='@page { size: A4; } .public-cv { line-height: 1.5; } .cv-profiles { margin-bottom: 12px; }')
            name = f'Gabriel_Faria_Curriculo_{locale}.pdf'
            output = root / 'app' / 'public' / 'cv' / name
            output.parent.mkdir(parents=True, exist_ok=True)
            page.pdf(path=str(output), format='A4', print_background=True,
                     margin={'top': '16mm', 'bottom': '16mm', 'left': '15mm', 'right': '15mm'},
                     display_header_footer=False)
            (build / 'cv').mkdir(exist_ok=True)
            shutil.copy2(output, build / 'cv' / name)
            context.close()
            print(f'Generated {name}')
        browser.close()
finally:
    server.shutdown()
    server.server_close()
