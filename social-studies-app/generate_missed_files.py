import json
import os
import glob
import shutil
from PIL import Image, ImageDraw, ImageFilter

brain_dir = r"C:\Users\hirok\.gemini\antigravity\brain\47c4e39f-82f8-44b2-bf70-c5497dc1ab68"
output_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app\assets\images\geography\custom_maps"
android_www_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app-android\www\assets\images\geography\custom_maps"

base_maps = {}
for file in glob.glob(os.path.join(brain_dir, "base_map_*.png")):
    filename = os.path.basename(file)
    parts = filename.split('_')
    base_id = "_".join(parts[:3]) # e.g. base_map_asia
    base_maps[base_id] = file

map_configs = {
    "地中海性気候": {"base": "base_map_europe", "coord": (0.4, 0.7)},
    "地中海式農業": {"base": "base_map_europe", "coord": (0.4, 0.7)},
    "国際河川": {"base": "base_map_europe", "coord": (0.5, 0.5)},
    "西岸海洋性気候": {"base": "base_map_europe", "coord": (0.3, 0.4)},
    "北大西洋海流": {"base": "base_map_europe", "coord": (0.1, 0.3)},
    "有明海": {"base": "base_map_ariake", "coord": (0.5, 0.5)},
    "沖縄県": {"base": "base_map_okinawa", "coord": (0.5, 0.5)},
    "リアス海岸": {"base": "base_map_tohoku", "coord": (0.7, 0.6)}, # fallback for gj_8, gj_5 will be adjusted
    "人工島": {"base": "base_map_kinki", "coord": (0.45, 0.55)},
    "臨海副都心": {"base": "base_map_kanto", "coord": (0.5, 0.55)},
}

with open('missed_map_questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

for q in questions:
    a = q['correct']
    
    # Specific adjustment for the two 'リアス海岸' questions
    if a == 'リアス海岸':
        if q['unit'] == 'gj_5': # Shima Peninsula
            config = {"base": "base_map_kinki", "coord": (0.6, 0.65)}
        else: # gj_8 Sanriku
            config = {"base": "base_map_tohoku", "coord": (0.75, 0.6)}
    else:
        config = map_configs.get(a)
    
    if not config or config["base"] not in base_maps:
        continue
        
    rx, ry = config["coord"]
    base_id = config["base"]

    # Process Image
    img = Image.open(base_maps[base_id]).convert('RGBA')
    width, height = img.size
    
    enhancer = Image.eval(img, lambda x: int(x * 0.82) if x < 255 else x)
    img = enhancer
    
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    
    cx, cy = int(width * rx), int(height * ry)
    radius = int(width * 0.04)
    
    d.ellipse((cx - radius*2, cy - radius*2, cx + radius*2, cy + radius*2), fill=(255, 60, 60, 80))
    d.ellipse((cx - radius*1.5, cy - radius*1.5, cx + radius*1.5, cy + radius*1.5), fill=(255, 60, 60, 150))
    d.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=(255, 60, 60, 255), outline=(255,255,255, 255), width=3)
    
    final = Image.alpha_composite(img, overlay).convert('RGB')
    
    # ASCII SAFE filename
    safe_name = f"custom_map_{q['unit']}_{q['index']}.jpg"
    out_path = os.path.join(output_dir, safe_name)
    final.save(out_path, quality=85)
    
    # Copy to android www
    shutil.copy2(out_path, os.path.join(android_www_dir, safe_name))
    
    q['new_image'] = f"assets/images/geography/custom_maps/{safe_name}"

with open('map_injection_missed.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print("Generated all missed overlays successfully and saved mapping info.")
