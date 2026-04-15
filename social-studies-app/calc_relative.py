from PIL import Image

img = Image.open("C:/Users/hirok/.gemini/antigravity/brain/eb8758a6-ddf8-42db-8a4d-bf0466754e1a/media__1771927993022.png").convert("RGBA")
w, h = img.size
pixels = img.load()

# Background of map is beige/off-white #fdfdfd roughly
# Let's find the top-most, bottom-most, left-most, right-most pixel of the map.
# Map is inside a card with a light green background `bg-color` #eafaf1 or something
# And the image itself has `#fdfdfd`
# A reliable way to find the map image is simply look for a large contiguous block of beige #fdfdfd

map_pixels = []
for y in range(h):
    for x in range(w):
        r, g, b, _ = pixels[x, y]
        # beige map bg
        if r > 240 and g > 240 and b > 230:
            map_pixels.append((x, y))

if map_pixels:
    # Filter bounds
    min_x = min(p[0] for p in map_pixels)
    max_x = max(p[0] for p in map_pixels)
    min_y = min(p[1] for p in map_pixels)
    max_y = max(p[1] for p in map_pixels)
    print(f"Map Image Bounding Box: ({min_x}, {min_y}) to ({max_x}, {max_y})")
    print(f"Map Size: {max_x - min_x} x {max_y - min_y}")
    
    # Now find the Blue Dot (Kushiro)
    blue_dots = []
    for y in range(min_y, max_y):
        for x in range(min_x, max_x):
            r, g, b, _ = pixels[x, y]
            if b > r + 30 and b > g + 20 and b > 100:
                blue_dots.append((x, y))
                
    if blue_dots:
        bx = sum(p[0] for p in blue_dots) // len(blue_dots)
        by = sum(p[1] for p in blue_dots) // len(blue_dots)
        
        rel_x = (bx - min_x) / (max_x - min_x) * 100
        rel_y = (by - min_y) / (max_y - min_y) * 100
        print(f"Blue Dot Found at relative: cx='{rel_x:.1f}%', cy='{rel_y:.1f}%'")
        
img2 = Image.open("C:/Users/hirok/.gemini/antigravity/brain/eb8758a6-ddf8-42db-8a4d-bf0466754e1a/media__1771928012545.png").convert("RGBA")
pixels2 = img2.load()
orange_pixels = []
for y in range(min_y, max_y):
    for x in range(min_x, max_x):
        r, g, b, _ = pixels2[x, y]
        # Orange/Red polygon border
        if r > g + 50 and r > b + 50 and r > 150:
            orange_pixels.append((x, y))

if orange_pixels:
    omin_x = min(p[0] for p in orange_pixels)
    omax_x = max(p[0] for p in orange_pixels)
    omin_y = min(p[1] for p in orange_pixels)
    omax_y = max(p[1] for p in orange_pixels)
    
    rel_xmin = (omin_x - min_x) / (max_x - min_x) * 100
    rel_xmax = (omax_x - min_x) / (max_x - min_x) * 100
    rel_ymin = (omin_y - min_y) / (max_y - min_y) * 100
    rel_ymax = (omax_y - min_y) / (max_y - min_y) * 100
    print(f"Orange Polygon Found at relative: x={rel_xmin:.1f}-{rel_xmax:.1f}%, y={rel_ymin:.1f}-{rel_ymax:.1f}%")
