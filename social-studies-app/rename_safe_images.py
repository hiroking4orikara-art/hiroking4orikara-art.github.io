import json
import os
import shutil

app_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app"
android_www_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app-android\www"
custom_maps_dir = os.path.join(app_dir, "assets", "images", "geography", "custom_maps")
custom_maps_android = os.path.join(android_www_dir, "assets", "images", "geography", "custom_maps")

# Ensure android dir exists
os.makedirs(custom_maps_android, exist_ok=True)

try:
    with open(os.path.join(app_dir, 'map_injection.json'), 'r', encoding='utf-8') as f:
        injections = json.load(f)

    renamed_count = 0
    safe_injections = []

    for inj in injections:
        if 'new_image' in inj:
            old_path_rel = inj['new_image']
            old_filename = os.path.basename(old_path_rel)
            
            # Create safe filename: custom_map_{unit}_{index}.jpg
            safe_filename = f"custom_map_{inj['unit']}_{inj['index']}.jpg"
            safe_path_rel = f"assets/images/geography/custom_maps/{safe_filename}"
            
            old_full_path = os.path.join(custom_maps_dir, old_filename)
            new_full_path = os.path.join(custom_maps_dir, safe_filename)
            
            if os.path.exists(old_full_path):
                # Rename file
                os.rename(old_full_path, new_full_path)
                renamed_count += 1
            elif os.path.exists(new_full_path):
                # Already renamed in previous run
                pass
                
            # Copy to Android www folder
            if os.path.exists(new_full_path):
                shutil.copy2(new_full_path, os.path.join(custom_maps_android, safe_filename))
            
            inj['new_image'] = safe_path_rel
            safe_injections.append(inj)

    # Save updated injection file
    with open(os.path.join(app_dir, 'map_injection_safe.json'), 'w', encoding='utf-8') as f:
        json.dump(safe_injections, f, ensure_ascii=False, indent=2)

    print(f"Renamed and copied {renamed_count} files to safe ASCII names.")

except Exception as e:
    print(f"Error: {e}")
