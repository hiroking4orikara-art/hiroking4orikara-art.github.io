from PIL import Image

def find_map_bounds(img):
    w, h = img.size
    pixels = img.load()
    
    # We are looking for a large rectangle with color similar to beige/off-white (e.g., #fdfdfd or #f9f6e5)
    # Actually, the background is probably something like R=240-250, G=240-250, B=230-245
    # The map image is rounded, so we look for the bounding box.
    min_x, max_x = w, 0
    min_y, max_y = h, 0
    
    for y in range(h):
        for x in range(w):
            r, g, b, _ = pixels[x, y]
            # typical Hokkaido map background or green land color
            # If it's part of the map (either green land, blue water, or beige bg)
            # A good way is to look at the center of the image and grow.
            pass
            
    # Simpler: just crop the middle. 
    # Let's search for the first green pixel (Hokkaido land is green).
    green_pixels = []
    for y in range(h):
        for x in range(w):
            r, g, b, _ = pixels[x, y]
            if g > 150 and g > r + 30 and g > b + 30: # clearly green
                green_pixels.append((x, y))
                
    if not green_pixels:
        return 0, 0, w, h
        
    g_min_x = min(p[0] for p in green_pixels)
    g_max_x = max(p[0] for p in green_pixels)
    g_min_y = min(p[1] for p in green_pixels)
    g_max_y = max(p[1] for p in green_pixels)
    
    # The map image is larger than the green land.
    # The beige background extends around it.
    # Let's find the beige boundaries by expanding from the green area.
    cx = (g_min_x + g_max_x) // 2
    
    top = g_min_y
    while top > 0:
        r, g, b, _ = pixels[cx, top]
        if abs(r - b) > 30 or abs(g - b) > 30 or r < 200: # not off-white/beige
            break
        top -= 1
        
    bottom = g_max_y
    while bottom < h - 1:
        r, g, b, _ = pixels[cx, bottom]
        if abs(r - b) > 30 or abs(g - b) > 30 or r < 200:
            break
        bottom += 1
        
    cy = (g_min_y + g_max_y) // 2
    left = g_min_x
    while left > 0:
        r, g, b, _ = pixels[left, cy]
        if abs(r - b) > 30 or abs(g - b) > 30 or r < 200:
            break
        left -= 1
        
    right = g_max_x
    while right < w - 1:
        r, g, b, _ = pixels[right, cy]
        if abs(r - b) > 30 or abs(g - b) > 30 or r < 200:
            break
        right += 1
        
    return left, top, right, bottom

img = Image.open("C:/Users/hirok/.gemini/antigravity/brain/eb8758a6-ddf8-42db-8a4d-bf0466754e1a/media__1771927993022.png").convert("RGBA")
left, top, right, bottom = find_map_bounds(img)

print(f"Map cropped to: {left}, {top}, {right}, {bottom}")

map_img = img.crop((left, top, right, bottom)).resize((100, 100))
pixels = map_img.load()

chars = " .:-=+*#%@"

with open("hokkaido_user_map.txt", "w") as f:
    f.write("   " + "".join([str(i//10) for i in range(100)]) + "\n")
    f.write("   " + "".join([str(i%10) for i in range(100)]) + "\n")
    for y in range(100):
        row = f"{y:02d} "
        for x in range(100):
            r, g, b, _ = pixels[x, y]
            
            if b > r + 30 and b > g + 20:
                row += "~" # Water or Blue dot
            elif g > r + 20 and g > b + 20:
                row += "#" # Land
            elif r > g + 30 and r > b + 30:
                row += "O" # Red/Orange polygon
            else:
                row += "."
        f.write(row + "\n")
