
import os
import re
import json

def find_missing_images():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    quiz_data_path = os.path.join(base_path, 'quiz_data.js')
    history_images_dir = os.path.join(base_path, 'assets', 'images', 'history')
    
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to extract units and their questions
    # This is rough but should work for identifying missing img tags
    units = re.findall(r'"(h_[a-z0-9_]+)":\s*\[(.*?)\]\s*,?\s*\n', content, re.DOTALL)
    
    missing = []
    
    for unit_name, questions_blob in units:
        # Split into individual question objects
        questions = re.findall(r'\{(.*?)\}', questions_blob, re.DOTALL)
        for i, q_blob in enumerate(questions):
            # Check if "img" exists
            if '"img":' not in q_blob:
                # Get question text and answer
                q_text_match = re.search(r'"q":\s*"(.*?)"', q_blob)
                a_text_match = re.search(r'"a":\s*"(.*?)"', q_blob)
                if q_text_match and a_text_match:
                    missing.append({
                        "unit": unit_name,
                        "index": i,
                        "q": q_text_match.group(1),
                        "a": a_text_match.group(1)
                    })
            else:
                # Check if file exists
                img_path_match = re.search(r'"img":\s*"(.*?)"', q_blob)
                if img_path_match:
                    img_rel_path = img_path_match.group(1)
                    img_abs_path = os.path.join(base_path, img_rel_path.replace('/', '\\'))
                    if not os.path.exists(img_abs_path):
                        q_text_match = re.search(r'"q":\s*"(.*?)"', q_blob)
                        a_text_match = re.search(r'"a":\s*"(.*?)"', q_blob)
                        missing.append({
                            "unit": unit_name,
                            "index": i,
                            "q": q_text_match.group(1),
                            "a": a_text_match.group(1),
                            "broken_path": img_rel_path
                        })

    return missing

if __name__ == "__main__":
    missing = find_missing_images()
    print(json.dumps(missing, ensure_ascii=False, indent=2))
