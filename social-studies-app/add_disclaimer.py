
import os
import re

def add_disclaimer():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    quiz_data_path = os.path.join(base_path, 'quiz_data.js')
    
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # List of images that need the disclaimer
    bw_images = [
        "h_modern_5_russian_revolution.png",
        "h_modern_5_rice_riots.png",
        "h_modern_5_kanto_earthquake.png",
        "h_modern_5_taisho_democracy.png",
        "h_modern_7_hiroshima_nagasaki.png",
        "h_contemporary_1_postwar_reform.png",
        "h_contemporary_1_zaibatsu_dissolution.png",
        "h_contemporary_1_nongji_kaikaku.png",
        "h_contemporary_2_cold_war.png",
        "h_contemporary_2_korean_war.png",
        "h_contemporary_3_okinawa_reversion.png",
        "h_contemporary_4_oil_shock.png",
        "h_contemporary_5_higashi_nihon_daishinsai.png"
    ]
    
    for img in bw_images:
        # Match "img": "...img..." and add "imgCaption": "※画像はイメージです" after it
        # Handle trailing comma if it exists
        pattern = r'("img":\s*"assets/images/history/' + re.escape(img) + r'")'
        replacement = r'\1,\n            "imgCaption": "※画像はイメージです"'
        
        content = re.sub(pattern, replacement, content)

    with open(quiz_data_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    add_disclaimer()
