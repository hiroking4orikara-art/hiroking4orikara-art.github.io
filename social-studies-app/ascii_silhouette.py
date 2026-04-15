from PIL import Image

# Output full silhouette based solely on alpha channel.
img = Image.open("assets/images/geography/map_hokkaido_blank.png").convert("RGBA").resize((100, 100))
pixels = img.load()

with open("hokkaido_silhouette.txt", "w") as f:
    f.write("   " + "".join([str(i//10) for i in range(100)]) + "\n")
    f.write("   " + "".join([str(i%10) for i in range(100)]) + "\n")
    
    for y in range(100):
        row = f"{y:02d} "
        for x in range(100):
            # Alpha check: if a pixel is not perfectly transparent, it's land/border.
            _, _, _, a = pixels[x, y]
            if a > 20:
                row += "#"
            else:
                row += "."
        f.write(row + "\n")
