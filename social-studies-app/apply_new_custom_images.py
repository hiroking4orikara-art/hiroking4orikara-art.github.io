import os
from PIL import Image

src_files = {
    "africa_south_africa_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\africa_south_africa_illustration_1773900951494.png",
    "africa_north_religion_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\africa_north_religion_illustration_1773900966804.png",
    "africa_slum_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\africa_slum_illustration_1773900980228.png",
    "oceania_great_barrier_reef_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\oceania_great_barrier_reef_illustration_1773901008630.png",
    "oceania_outback_uluru_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\oceania_outback_uluru_illustration_1773901023188.png",
    "oceania_sheep_farming_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\oceania_sheep_farming_illustration_1773901041364.png"
}

dest_dir = "assets/images/geography"

for name, src in src_files.items():
    dst = os.path.join(dest_dir, f"{name}.jpg")
    try:
        Image.open(src).convert('RGB').save(dst, 'JPEG', quality=85)
        print(f"Converted and saved: {dst}")
    except Exception as e:
        print(f"Error converting {name}: {e}")

print("Image conversion for custom Africa and Oceania completed.")
