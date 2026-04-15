from PIL import Image

img = Image.open("assets/images/geography/map_hokkaido_blank.png").convert("RGBA").resize((100, 100))
pixels = img.load()

with open("hokkaido_ascii3.txt", "w") as f:
    f.write("   " + "".join([str(i//10) for i in range(100)]) + "\n")
    f.write("   " + "".join([str(i%10) for i in range(100)]) + "\n")
    
    for y in range(100):
        row = f"{y:02d} "
        for x in range(100):
            # Alpha channel > 50 means there's some drawing (land, lake, river, border)
            # The ocean in THIS image might be transparent, or it might be drawn.
            # Let's see the colors!
            r, g, b, a = pixels[x, y]
            if a < 50:
                row += " " # Transparent
            elif r < 100 and g > 150 and b < 100:
                row += "#" # Green (Land)
            elif g > r and g > b:
                row += "#" # Still green
            else:
                row += "." # Non-green (River, borders, text, lakes)
        f.write(row + "\n")
