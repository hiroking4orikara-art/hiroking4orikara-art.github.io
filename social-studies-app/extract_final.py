from PIL import Image

# Read screenshot
img = Image.open("C:/Users/hirok/.gemini/antigravity/brain/eb8758a6-ddf8-42db-8a4d-bf0466754e1a/media__1771927993022.png").convert("RGBA")
pixels = img.load()
w, h = img.size

# The map background is beige/off-white #fdfdfd
map_pixels = []
for y in range(h):
    for x in range(w):
        r, g, b, _ = pixels[x, y]
        # beige map bg (r>230, g>230, b>210)
        if r > 230 and g > 230 and b > 210:
            map_pixels.append((x, y))

if map_pixels:
    min_x = min(p[0] for p in map_pixels)
    max_x = max(p[0] for p in map_pixels)
    min_y = min(p[1] for p in map_pixels)
    max_y = max(p[1] for p in map_pixels)
    
    # Crop the exact map image
    map_img = img.crop((min_x, min_y, max_x, max_y))
    map_img.save("C:/Users/hirok/.gemini/antigravity/scratch/social-studies-app/extracted_map.png")
    
    # Scale to 100x100 to get exact % coordinates
    map_scaled = map_img.resize((100, 100))
    spixels = map_scaled.load()
    
    with open("C:/Users/hirok/.gemini/antigravity/scratch/social-studies-app/final_ascii_map.txt", "w") as f:
        f.write("   " + "".join([str(i//10) for i in range(100)]) + "\n")
        f.write("   " + "".join([str(i%10) for i in range(100)]) + "\n")
        for y in range(100):
            row = f"{y:02d} "
            for x in range(100):
                r, g, b, _ = spixels[x, y]
                if b > r + 30 and b > g + 20:
                    row += "~" # Water or Blue dot
                elif g > r + 10 and g > b + 10:
                    row += "#" # Land
                elif r > g + 30 and r > b + 30:
                    row += "O" # Red/Orange
                else:
                    row += "."
            f.write(row + "\n")
