
import os
import re
import json

def get_missing_images_plan():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    quiz_data_path = os.path.join(base_path, 'quiz_data.js')
    
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the history section. It's roughly from h_ancient to h_contemporary
    # History keys start with h_
    units = re.findall(r'"(h_[^"]+?)":\s*\[', content)
    
    missing_plan = []
    
    for unit_id in units:
        # Extract the array content for each unit
        unit_match = re.search(r'"' + re.escape(unit_id) + r'":\s*\[(.*?)^\s*\]', content, re.DOTALL | re.MULTILINE)
        if not unit_match:
            continue
        
        unit_content = unit_match.group(1)
        # Split into question blocks
        blocks = re.split(r'\},\s*\{', unit_content)
        
        # Decide style
        # B&W for h_modern_5 onwards and h_contemporary
        is_bw = False
        if unit_id.startswith('h_modern_'):
            num = int(unit_id.split('_')[-1])
            if num >= 5:
                is_bw = True
        elif unit_id.startswith('h_contemporary_'):
            is_bw = True
            
        style = "B&W" if is_bw else "Pop Art"
        
        for block in blocks:
            if '"img":' not in block:
                # Extract question text
                q_match = re.search(r'"q":\s*"([^"]+?)"', block)
                a_match = re.search(r'"a":\s*"([^"]+?)"', block)
                if q_match:
                    missing_plan.append({
                        "unit": unit_id,
                        "q": q_match.group(1),
                        "a": a_match.group(1) if a_match else "unknown",
                        "style": style
                    })
    
    with open(os.path.join(base_path, 'missing_images_plan.json'), 'w', encoding='utf-8') as f:
        json.dump(missing_plan, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    get_missing_images_plan()
