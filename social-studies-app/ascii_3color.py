from PIL import Image

img = Image.open("assets/images/geography/map_hokkaido_blank.png").convert("RGB").resize((100, 100))
pixels = img.load()

with open("hokkaido_full_color.txt", "w") as f:
    f.write("   " + "".join([str(i//10) for i in range(100)]) + "\n")
    f.write("   " + "".join([str(i%10) for i in range(100)]) + "\n")
    
    for y in range(100):
        row = f"{y:02d} "
        for x in range(100):
            r, g, b = pixels[x, y]
            if b > g and b > r:
                row += "~" # Water
            elif g > r and g > b:
                row += "#" # Land
            else:
                row += "." # Other (border, text, lines)
        f.write(row + "\n")
