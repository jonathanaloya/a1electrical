import io, sys, math
from pypdf import PdfReader, PdfWriter, Transformation
from reportlab.pdfgen import canvas

TEXT = "A1 Electricals Ltd"
cache = {}

def overlay(w, h):
    key = (round(w), round(h))
    if key in cache: return cache[key]
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=(w, h))
    # diagonal centre watermark
    size = min(w, h) * 0.115
    c.saveState()
    c.setFillColorRGB(0.45, 0.45, 0.45)
    c.setFillAlpha(0.20)
    c.translate(w / 2, h / 2)
    c.rotate(math.degrees(math.atan2(h, w)) * 0.9)
    c.setFont("Helvetica-Bold", size)
    c.drawCentredString(0, -size * 0.35, TEXT)
    c.restoreState()
    # small footer line as well so it survives cropping
    c.setFillColorRGB(0.35, 0.35, 0.35)
    c.setFillAlpha(0.55)
    c.setFont("Helvetica-Bold", 8)
    c.drawCentredString(w / 2, 10, TEXT)
    c.save()
    buf.seek(0)
    page = PdfReader(buf).pages[0]
    cache[key] = page
    return page

def run(src, dst):
    r = PdfReader(src)
    w = PdfWriter(clone_from=r)
    for p in w.pages:
        rot = p.get("/Rotate", 0) or 0
        box = p.mediabox
        pw, ph = float(box.width), float(box.height)
        if rot % 180: pw, ph = ph, pw
        ov = overlay(pw, ph)
        # overlay objects are shared; merge a fresh copy per page
        p.merge_page(ov, over=True)
    for p in w.pages:
        p.compress_content_streams()
    w.compress_identical_objects(remove_identicals=True, remove_orphans=True)
    w.write(dst)

run(sys.argv[1], sys.argv[2])
