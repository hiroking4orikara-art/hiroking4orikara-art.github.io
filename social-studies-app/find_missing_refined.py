
import os
import json

def find_missing():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    quiz_data_path = os.path.join(base_path, 'quiz_data.js')
    
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    current_unit = None
    in_history = False
    missing = {}
    
    q_data = None
    
    for line in lines:
        # Detect unit start
        if '"h_' in line and '[' in line:
            current_unit = line.split('"')[1]
            missing[current_unit] = []
            continue
            
        if current_unit and '{' in line:
            q_data = {"text": "", "answer": "", "has_img": False}
            continue
            
        if q_data is not None:
            if '"q":' in line:
                q_data["text"] = line.split('"')[3]
            elif '"a":' in line:
                q_data["answer"] = line.split('"')[3]
            elif '"img":' in line:
                q_data["has_img"] = True
            elif '}' in line:
                if not q_data["has_img"]:
                    missing[current_unit].append({
                        "q": q_data["text"],
                        "a": q_data["answer"]
                    })
                q_data = None
                
        # If we hit the end of history (civics start)
        if '"c_1":' in line:
            break
            
    # Clean up empty units
    missing = {k: v for k, v in missing.items() if v}
    return missing

if __name__ == "__main__":
    result = find_missing()
    print(json.dumps(result, ensure_ascii=False, indent=2))
