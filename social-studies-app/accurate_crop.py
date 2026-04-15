from PIL import Image

def analyze_map(file_path):
    img = Image.open(file_path).convert("RGBA")
    w, h = img.size
    pixels = img.load()
    
    # Map area is defined by having blue sea.
    blue_pixels = []
    
    for y in range(h):
        for x in range(w):
            r, g, b, _ = pixels[x, y]
            # typical sea color in map
            if b > r + 20 and b > g + 10:
                blue_pixels.append((x, y))
                
    if not blue_pixels:
        return
        
    min_x = min(p[0] for p in blue_pixels)
    max_x = max(p[0] for p in blue_pixels)
    min_y = min(p[1] for p in blue_pixels)
    max_y = max(p[1] for p in blue_pixels)
    
    print(f"Map Bounds: X({min_x} to {max_x}), Y({min_y} to {max_y})")
    
    # Let's crop to these bounds
    map_img = img.crop((min_x, min_y, max_x, max_y)).resize((100, 100))
    m_pixels = map_img.load()
    
    out = ""
    for y in range(100):
        row = f"{y:02d} "
        for x in range(100):
            r, g, b, _ = m_pixels[x, y]
            # Red/Orange polygon
            if r > g + 50 and r > b + 50:
                row += "O"
            # Blue dot
            elif b > r + 30 and b > g + 20 and b > 100 and r < 100:
                row += "~"
            # Green land
            elif g > r + 10 and g > b + 10:
                row += "#"
            else:
                row += "."
        out += row + "\n"
    print(out)

print("--- Kushiro (Screenshot 1) ---")
analyze_map("C:/Users/hirok/.gemini/antigravity/brain/eb8758a6-ddf8-42db-8a4d-bf0466754e1a/media__1771927993022.png")
print("--- Shiretoko (Screenshot 2) ---")
analyze_map("C:/Users/hirok/.gemini/antigravity/brain/eb8758a6-ddf8-42db-8a4d-bf0466754e1a/media__1771928012545.png")
