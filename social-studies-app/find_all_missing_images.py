
import os
import re
import json

def find_all_missing_images():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    quiz_data_path = os.path.join(base_path, 'quiz_data.js')
    
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract all units starting with h_
    units = re.findall(r'"(h_[a-z0-9_]+)":\s*\[(.*?)\n\s*\]\s*,?\s*\n', content, re.DOTALL)
    
    missing = []
    
    for unit_name, questions_blob in units:
        # Split into individual question objects
        # We look for { ... }
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
    
    return missing

if __name__ == "__main__":
    missing = find_all_missing_images()
    # Group by unit for better presentation
    grouped = {}
    for m in missing:
        u = m['unit']
        if u not in grouped: grouped[u] = []
        grouped[u].append(m)
    
    print(json.dumps(grouped, ensure_ascii=False, indent=2))
