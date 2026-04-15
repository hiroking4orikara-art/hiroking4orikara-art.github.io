
import os
import re

def fix_and_apply():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    quiz_data_path = os.path.join(base_path, 'quiz_data.js')
    
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Fix missing commas before "img"
    # Match "... "comment": "..." \n \s* "img": ..."
    # and replace with "... "comment": "...", \n \s* "img": ..."
    content = re.sub(r'("comment":\s*"[^"]*")\s*\n\s*("img":)', r'\1,\n            \2', content)

    # 2. Apply new images
    updates = [
        ("人類が二足歩行を始めたことで発達した", "assets/images/history/h_ancient_1_evolution_hand.png"),
        ("後漢の光武帝から金印を授かったとされる", "assets/images/history/h_ancient_2_nakoku.png"),
        ("天武天皇の皇后で、夫の後を継いで即位し", "assets/images/history/h_ancient_6_jito.png"),
        ("奈良に造られた都は？", "assets/images/history/h_ancient_7_heijokyo.png"),
    ]
    
    for marker, img_path in updates:
        pattern = r'\{[^{}]*?"q":\s*"[^"]*?' + re.escape(marker) + r'[^"]*?"[^{}]*?\}'
        
        def add_img(match):
            block = match.group(0)
            if '"img":' in block:
                return block 
            # Insert img before the last } and handle comma from previous line
            # We assume it follows "comment"
            return re.sub(r'("comment":\s*"[^"]*")\s*\}', r'\1,\n            "img": "' + img_path + '"\n        }', block)
            
        content = re.sub(pattern, add_img, content, flags=re.DOTALL)

    with open(quiz_data_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    fix_and_apply()
