import json
import os
import glob
from PIL import Image, ImageDraw, ImageFont, ImageFilter

brain_dir = r"C:\Users\hirok\.gemini\antigravity\brain\47c4e39f-82f8-44b2-bf70-c5497dc1ab68"
output_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app\assets\images\geography\custom_maps"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Map units to base map prefixes
unit_to_base = {
    "gw_1": "base_map_samerica", # fallback for gw_1 questions
    "gw_2": "base_map_asia",
    "gw_3": "base_map_europe",
    "gw_4": "base_map_africa",
    "gw_5": "base_map_namerica",
    "gw_6": "base_map_samerica",
    "gw_7": "base_map_oceania",
    "gj_1": "base_map_chubu", 
    "gj_2": "base_map_kyushu",
    "gj_3": "base_map_kyushu",
    "gj_4": "base_map_chugoku",
    "gj_5": "base_map_kinki",
    "gj_6": "base_map_chubu",
    "gj_7": "base_map_kanto",
    "gj_8": "base_map_tohoku",
    "gj_9": "base_map_hokkaido"
}

# Special mapping for gw_1
special_base = {
    "日付変更線": "base_map_oceania", # roughly pacific
    "アルパカ・リャマ": "base_map_samerica",
    "瀬戸内海沿岸（瀬戸内）": {"base": "base_map_chugoku", "coord": (0.5, 0.8)},
    "香川用水": {"base": "base_map_shikoku", "coord": (0.6, 0.3)},
    "高知県": {"base": "base_map_shikoku", "coord": (0.5, 0.7)},
    "愛媛県": {"base": "base_map_shikoku", "coord": (0.3, 0.5)},
}

# Approximate relative coordinates (rx, ry) for the centers of various geographical features on the generated maps.
coords = {
    "中国": (0.7, 0.4), "インド": (0.3, 0.6), "サウジアラビア": (0.15, 0.5),
    "イギリス": (0.2, 0.3), "フランス": (0.3, 0.5), "ドイツ": (0.5, 0.4), "混合農業": (0.5, 0.4),
    "エジプト": (0.7, 0.2), "南アフリカ共和国": (0.5, 0.9), "ナイジェリア": (0.3, 0.5),
    "アメリカ合衆国": (0.5, 0.5), "カナダ": (0.5, 0.2), "メキシコ": (0.4, 0.8),
    "ブラジル": (0.6, 0.4), "アルゼンチン": (0.4, 0.8), "チリ": (0.2, 0.7), "アルパカ・リャマ": (0.2, 0.5),
    "オーストラリア": (0.4, 0.5), "ニュージーランド": (0.8, 0.8), "日付変更線": (0.9, 0.5),
    "九州山地": (0.5, 0.5), "筑後川": (0.4, 0.3), "福岡県": (0.4, 0.2), "長崎県": (0.2, 0.4), "鹿児島県": (0.4, 0.8), "促成栽培": (0.6, 0.7),
    "瀬戸内海沿岸（瀬戸内）": (0.5, 0.8), "広島県": (0.4, 0.7), "鳥取県": (0.6, 0.2), "香川用水": (0.6, 0.3), "高知県": (0.5, 0.7), "愛媛県": (0.3, 0.5),
    "琵琶湖": (0.6, 0.3), "紀伊山地": (0.5, 0.7), "大阪府": (0.4, 0.5), "滋賀県": (0.6, 0.3), "和歌山県": (0.4, 0.7),
    "日本アルプス": (0.5, 0.5), "信濃川": (0.6, 0.3), "愛知県": (0.4, 0.8), "新潟県": (0.6, 0.2), "静岡県": (0.6, 0.8), "中央高地の気候": (0.5, 0.5),
    "関東平野": (0.5, 0.5), "利根川": (0.5, 0.4), "群馬県": (0.2, 0.3), "千葉県": (0.8, 0.7), "神奈川県": (0.4, 0.8),
    "奥羽山脈": (0.5, 0.5), "白神山地": (0.3, 0.2), "青森県": (0.5, 0.1), "山形県": (0.3, 0.6), "宮城県": (0.7, 0.6),
    "大雪山": (0.5, 0.4), "石狩川": (0.3, 0.5), "知床半島": (0.8, 0.2), "釧路湿原": (0.7, 0.5)
}

# Find latest base maps in brain_dir
base_maps = {}
for file in glob.glob(os.path.join(brain_dir, "base_map_*.png")):
    filename = os.path.basename(file)
    # Extracts 'base_map_asia' from 'base_map_asia_174...png'
    parts = filename.split('_')
    base_id = "_".join(parts[:3]) # e.g. base_map_asia
    base_maps[base_id] = file

import shutil

with open('filtered_map_questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

for q in questions:
    a = q['correct']
    base_id = unit_to_base.get(q['unit'], "base_map_asia")
    
    if a in special_base:
        if isinstance(special_base[a], str):
            base_id = special_base[a]
        else:
            base_id = special_base[a]["base"]
            coords[a] = special_base[a]["coord"]

    if base_id not in base_maps:
        print(f"Warning: Base map {base_id} not found for {a}")
        continue
        
    rx, ry = coords.get(a, (0.5, 0.5))
    
    # Process Image
    img = Image.open(base_maps[base_id]).convert('RGBA')
    width, height = img.size
    
    # Optional: Slightly darken the image for contrast
    enhancer = Image.eval(img, lambda x: int(x * 0.8) if x < 255 else x)
    img = enhancer
    
    # Draw Pin/Highlight
    # We will draw a glowing circle
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    
    cx, cy = int(width * rx), int(height * ry)
    radius = int(width * 0.04) # e.g. 4% of width
    
    # Glow effect
    d.ellipse((cx - radius*2, cy - radius*2, cx + radius*2, cy + radius*2), fill=(255, 60, 60, 80))
    d.ellipse((cx - radius*1.5, cy - radius*1.5, cx + radius*1.5, cy + radius*1.5), fill=(255, 60, 60, 150))
    # Solid center
    d.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=(255, 60, 60, 255), outline=(255,255,255, 255), width=3)
    
    # Simple minimal label mapping to 'a' isn't necessary because the user said "文字は答えに直結しやすいので、最小限にしましょう"
    # We will just put the glowing dot.
    
    final = Image.alpha_composite(img, overlay)
    final = final.convert('RGB')
    
    safe_name = f"custom_map_{q['unit']}_{q['index']}_{a}.jpg".replace("・", "_").replace("（", "_").replace("）", "_").replace("、", "_").replace(" ", "")
    out_path = os.path.join(output_dir, safe_name)
    final.save(out_path, quality=85)
    
    q['new_image'] = f"assets/images/geography/custom_maps/{safe_name}"

# Save mapping file to link images to quiz_data.js
with open('map_injection.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print("Generated all custom overlays successfully and saved mapping info.")
