import os
import glob
from PIL import Image

src_dir = r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c"
dest_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app\assets\images\geography"

prefixes = [
    "africa_nigeria_illustration",
    "oceania_canberra_illustration",
    "oceania_tuvalu_illustration",
    "oceania_mining_illustration",
    "oceania_multicultural_illustration"
]

for prefix in prefixes:
    pattern = os.path.join(src_dir, f"{prefix}_*.png")
    matches = glob.glob(pattern)
    if matches:
        latest_file = max(matches, key=os.path.getmtime)
        dst = os.path.join(dest_dir, f"{prefix}.jpg")
        try:
            Image.open(latest_file).convert('RGB').save(dst, 'JPEG', quality=85)
            print(f"Converted and saved: {dst}")
        except Exception as e:
            print(f"Error converting {prefix}: {e}")
    else:
        print(f"No file found for {prefix} (Pattern: {pattern})")

print("Image conversion for final Oceania & Africa batch completed.")
