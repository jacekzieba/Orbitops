from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def do_POST(self):
  if self.path != '/__capture':
   self.send_error(404); return
  size=int(self.headers.get('Content-Length',0))
  if size>30000000:
   self.send_error(413); return
  Path('review/hero-motion.webm').write_bytes(self.rfile.read(size))
  self.send_response(200); self.end_headers(); self.wfile.write(b'OK')
ThreadingHTTPServer(('127.0.0.1',4173),Handler).serve_forever()
