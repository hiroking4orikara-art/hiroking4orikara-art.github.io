import os
import glob
from PIL import Image

src_dir = r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c"
dest_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app\assets\images\geography"

prefixes = [
    "namerica_rocky_mountains", "namerica_appalachian_mountains", "namerica_mississippi_river", "namerica_great_lakes", 
    "namerica_florida_vacation", "namerica_caribbean_sea", "namerica_100_meridian", "namerica_hurricane", 
    "namerica_right_crop_right_land", "namerica_great_plains", "namerica_prairie", "namerica_corn_belt", 
    "namerica_cotton_plantation_history", "namerica_center_pivot", "namerica_feedlot", "namerica_agribusiness", 
    "namerica_grain_majors", "namerica_sunbelt", "namerica_detroit_auto_industry", "namerica_houston_aerospace", 
    "namerica_multinational_corporation", "namerica_hispanic_culture", "namerica_melting_pot", "namerica_salad_bowl", 
    "namerica_native_american", "namerica_megalopolis", "namerica_fast_food", "namerica_canada_french", 
    "namerica_canada_maple", "namerica_mexico_spanish", "namerica_usmca", "namerica_maquiladora", 
    "namerica_wall_street", "namerica_shale_gas", "namerica_chain_store", "namerica_cold_climate_northeast", 
    "namerica_washington_dc", "namerica_martin_luther_king", "namerica_cuba", "namerica_usa_landscape", 
    "namerica_canada_landscape", "namerica_mexico_landscape"
]

count = 0
for prefix in prefixes:
    pattern = os.path.join(src_dir, f"{prefix}_*.png")
    matches = glob.glob(pattern)
    if matches:
        latest_file = max(matches, key=os.path.getmtime)
        dst = os.path.join(dest_dir, f"{prefix}.jpg")
        try:
            Image.open(latest_file).convert('RGB').save(dst, 'JPEG', quality=85)
            count += 1
        except Exception as e:
            print(f"Error converting {prefix}: {e}")
    else:
        print(f"No file found for {prefix}")

print(f"\nImage conversion for {count} massive North America images completed successfully.")
