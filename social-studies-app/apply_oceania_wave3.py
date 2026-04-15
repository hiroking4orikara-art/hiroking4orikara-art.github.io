import os
import glob
from PIL import Image

src_dir = r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c"
dest_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app\assets\images\geography"

prefixes = [
    "oceania_new_zealand_landscape",
    "oceania_maori_culture",
    "oceania_southern_cross",
    "oceania_great_dividing_range",
    "oceania_pacific_ring_of_fire",
    "oceania_polynesia_islands",
    "oceania_flying_doctor",
    "oceania_underground_house",
    "oceania_australia_wildlife",
    "oceania_apec_cooperation",
    "oceania_china_trade",
    "oceania_time_zone",
    "oceania_white_australia",
    "oceania_british_colonization",
    "oceania_reverse_seasons",
    "oceania_working_holiday_backpackers"
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
        print(f"No file found for {prefix}")

print("\nImage conversion for all 16 ultimate Oceania specific images completed.")
