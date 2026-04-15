
import os
import json
import re

def find_unlinked_images():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    images_dir = os.path.join(base_path, 'assets', 'images', 'history')
    quiz_data_path = os.path.join(base_path, 'quiz_data.js')
    
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        quiz_content = f.read()
    
    existing_images = [f for f in os.listdir(images_dir) if f.endswith('.png')]
    unlinked = []
    
    for img in existing_images:
        if img not in quiz_content:
            unlinked.append(img)
            
    return unlinked

if __name__ == "__main__":
    unlinked = find_unlinked_images()
    print(json.dumps(unlinked, indent=2))
