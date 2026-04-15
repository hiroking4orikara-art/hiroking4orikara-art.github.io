import os
from PIL import Image

src_files = {
    "grand_canyon_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\grand_canyon_illustration_1773899763303.png",
    "statue_of_liberty_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\statue_of_liberty_illustration_1773899778505.png",
    "machu_picchu_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\machu_picchu_illustration_1773899794839.png",
    "amazon_rainforest_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\amazon_rainforest_illustration_1773899820911.png",
    "sydney_opera_house_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\sydney_opera_house_illustration_1773899832785.png",
    "silicon_valley_illustration": r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c\silicon_valley_illustration_1773899846461.png"
}

dest_dir = "assets/images/geography"

for name, src in src_files.items():
    dst = os.path.join(dest_dir, f"{name}.jpg")
    try:
        Image.open(src).convert('RGB').save(dst, 'JPEG', quality=85)
        print(f"Converted and saved: {dst}")
    except Exception as e:
        print(f"Error converting {name}: {e}")

print("Image conversion for gw_5, gw_6, gw_7 completed.")
