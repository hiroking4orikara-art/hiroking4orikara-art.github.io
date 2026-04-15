
import os
import re

def update_quiz_data():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    quiz_data_path = os.path.join(base_path, 'quiz_data.js')
    
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    updates = [
        ("ロシア革命", "assets/images/history/h_modern_5_russian_revolution.png"),
        ("米騒動", "assets/images/history/h_modern_5_rice_riots.png"),
        ("関東大震災", "assets/images/history/h_modern_5_kanto_earthquake.png"),
        ("大正デモクラシー", "assets/images/history/h_modern_5_taisho_democracy.png"),
        ("原子爆弾", "assets/images/history/h_modern_7_hiroshima_nagasaki.png"),
        ("戦後改革", "assets/images/history/h_contemporary_1_postwar_reform.png"),
        ("財閥解体", "assets/images/history/h_contemporary_1_zaibatsu_dissolution.png"),
        ("農地改革", "assets/images/history/h_contemporary_1_nongji_kaikaku.png"),
        ("冷戦", "assets/images/history/h_contemporary_2_cold_war.png"),
        ("朝鮮戦争", "assets/images/history/h_contemporary_2_korean_war.png"),
        ("沖縄県", "assets/images/history/h_contemporary_3_okinawa_reversion.png"),
        ("石油危機", "assets/images/history/h_contemporary_4_oil_shock.png"),
        ("東日本大震災", "assets/images/history/h_contemporary_5_higashi_nihon_daishinsai.png"),
    ]
    
    for marker, img_path in updates:
        # Find the question block containing the marker
        # We look for a block that has "q": "...marker..." and NO "img":
        # Or if it has "img", we might want to overwrite if it's a placeholder (but user said "missing")
        
        # Pattern to match a question block
        # We'll use a more surgical approach by finding the question and adding the img line
        escaped_marker = re.escape(marker)
        # Search for "q": ".*marker.*", then find the next "a": ".*" and insert "img": "..." after it.
        # This is safer than just replacing.
        
        pattern = r'("q":\s*"[^"]*?' + escaped_marker + r'[^"]*",\s*"choices":\s*\[.*?\]\s*,\s*"a":\s*"[^"]*")'
        
        def add_img(match):
            block = match.group(1)
            if '"img":' in block:
                return block # Already has an image
            return block + ',\n            "img": "' + img_path + '"'
            
        content = re.sub(pattern, add_img, content, flags=re.DOTALL)

    with open(quiz_data_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    update_quiz_data()
