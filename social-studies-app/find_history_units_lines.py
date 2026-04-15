
import os
import re

def find_history_units():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    quiz_data_path = os.path.join(base_path, 'quiz_data.js')
    
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    history_units = []
    for i, line in enumerate(lines):
        match = re.search(r'"(h_[a-z0-9_]+)":\s*\[', line)
        if match:
            history_units.append((match.group(1), i + 1))
            
    return history_units

if __name__ == "__main__":
    units = find_history_units()
    for name, line in units:
        print(f"{name}: {line}")
