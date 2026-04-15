
import os
import re

def parse_missing_md():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    md_path = os.path.join(base_path, 'missing_images_ancient_to_modern.md')
    history_images_dir = os.path.join(base_path, 'assets', 'images', 'history')
    
    with open(md_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    current_unit = ""
    missing_items = []
    
    # Get list of existing image files
    existing_files = os.listdir(history_images_dir)
    
    for line in lines:
        unit_match = re.match(r'### (h_[a-z0-9_]+)', line)
        if unit_match:
            current_unit = unit_match.group(1)
            continue
        
        item_match = re.match(r'- \*\*(.*?)\*\*', line)
        if item_match and current_unit:
            keyword = item_match.group(1)
            # Find if an image for this unit and keyword exists
            # We look for files starting with unit_name
            # and containing parts of the keyword in English if possible, 
            # but since filenames are often English approximations, we might need a better check.
            # However, looking at the list_dir output:
            # h_ancient_1_australopithecus.png
            # h_ancient_1_buddhism.png
            # It seems they are named by unit + English keyword.
            
            # Let's just track the keywords for now and manually verify a few.
            # Or better, look for any file starting with current_unit and check if the keyword matches some logic.
            
            # Since I can't easily map Japanese keyword to English filename without a map, 
            # I'll just collect all items and then I'll look at the files for that unit.
            missing_items.append({
                "unit": current_unit,
                "keyword": keyword,
                "line": line.strip()
            })

    # Now, let's group by unit and check if we can skip some.
    # Actually, I'll just print them out grouped by unit.
    return missing_items

if __name__ == "__main__":
    items = parse_missing_md()
    for item in items:
        print(f"{item['unit']} | {item['keyword']}")
