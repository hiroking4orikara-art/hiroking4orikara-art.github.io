from PIL import Image

def color_diff(c1, c2):
    return sum(abs(v1 - v2) for v1, v2 in zip(c1[:3], c2[:3]))

img = Image.open("assets/images/geography/map_hokkaido_blank.png").convert("RGBA").resize((100, 100))
pixels = img.load()

# Assuming (0,0) is ocean/background
bg_color = pixels[0, 0]

with open("hokkaido_silhouette2.txt", "w") as f:
    f.write("   " + "".join([str(i//10) for i in range(100)]) + "\n")
    f.write("   " + "".join([str(i%10) for i in range(100)]) + "\n")
    
    for y in range(100):
        row = f"{y:02d} "
        for x in range(100):
            if color_diff(pixels[x, y], bg_color) < 20:
                row += "." # Background / Ocean
            else:
                row += "#" # Land
        f.write(row + "\n")
