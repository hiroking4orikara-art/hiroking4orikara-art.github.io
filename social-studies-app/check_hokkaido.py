from PIL import Image

img = Image.open("assets/images/geography/map_hokkaido_blank.png")
print("Image size:", img.size)

# Find bounding box of land (non-transparent, non-white)
pixels = img.load()
w, h = img.size

land_pixels = []
for y in range(h):
    for x in range(w):
        r, g, b = img.convert("RGB").getpixel((x, y))
        if g > r + 10 and g > b + 10:
            land_pixels.append((x, y))

if land_pixels:
    min_x = min(p[0] for p in land_pixels)
    max_x = max(p[0] for p in land_pixels)
    min_y = min(p[1] for p in land_pixels)
    max_y = max(p[1] for p in land_pixels)
    print(f"Land bounding box: ({min_x}, {min_y}) to ({max_x}, {max_y})")
    
# Let's print a small 20x20 ASCII of THIS image
map_scaled = img.convert("RGB").resize((40, 40))
spixels = map_scaled.load()
out = ""
for y in range(40):
    for x in range(40):
        r, g, b = spixels[x, y]
        if g > r + 10 and g > b + 10:
            out += "#"
        else:
            out += "."
    out += "\n"
print(out)
