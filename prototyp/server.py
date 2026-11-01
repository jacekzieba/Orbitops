from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def end_headers(self):
  self.send_header('Cache-Control', 'no-store, max-age=0')
  super().end_headers()
 def do_GET(self):
  # Always serve current workspace files during local design review.
  if 'If-Modified-Since' in self.headers:
   del self.headers['If-Modified-Since']
  super().do_GET()
 def do_POST(self):
  if self.path != '/__capture':
   self.send_error(404); return
  size=int(self.headers.get('Content-Length',0))
  if size>30000000:
   self.send_error(413); return
  Path('review/hero-motion.webm').write_bytes(self.rfile.read(size))
  self.send_response(200); self.end_headers(); self.wfile.write(b'OK')
ThreadingHTTPServer(('127.0.0.1',4173),Handler).serve_forever()
