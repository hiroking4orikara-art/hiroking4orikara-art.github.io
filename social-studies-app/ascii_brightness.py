from PIL import Image
import sys

img = Image.open("assets/images/geography/map_hokkaido_blank.png").convert("RGB").resize((100, 100))
pixels = img.load()

chars = " .:-=+*#%@"

with open("hokkaido_brightness.txt", "w") as f:
    f.write("   " + "".join([str(i//10) for i in range(100)]) + "\n")
    f.write("   " + "".join([str(i%10) for i in range(100)]) + "\n")
    
    for y in range(100):
        row = f"{y:02d} "
        for x in range(100):
            r, g, b = pixels[x, y]
            brightness = (r + g + b) / 3
            idx = int((brightness / 255) * (len(chars) - 1))
            row += chars[idx]
        f.write(row + "\n")
