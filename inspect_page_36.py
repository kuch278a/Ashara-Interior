import fitz
import sys

sys.stdout.reconfigure(encoding='utf-8')
doc = fitz.open(r"C:\Users\X\Documents\Ashara CPR.pdf")
page36 = doc[35] # Page 36 (0-indexed 35)

pix = page36.get_pixmap(dpi=150)
pix.save("page_36_rendered.png")
print("Rendered page_36_rendered.png")

print("=== Page 36 Text ===")
print(page36.get_text())

imgs = page36.get_images()
print("=== Page 36 Images ===")
for idx, img in enumerate(imgs, 1):
    xref = img[0]
    rects = page36.get_image_rects(xref)
    info = doc.extract_image(xref)
    w, h, ext = info["width"], info["height"], info["ext"]
    print(f"Img {idx} (xref {xref}): {w}x{h} {ext}, rects: {rects}")
