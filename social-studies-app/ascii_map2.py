from PIL import Image

def is_land(r, g, b, a):
    if a < 50: return False
    # The water is light blue: r~150, g~200, b~230. 
    # Background is off-white/beige: r~240, g~240, b~230.
    # Land is green: r~160, g~200, b~110
    if b > g and b > r: return False # Water
    if r > 230 and g > 230 and b > 230: return False # Whiteish background
    if r > 230 and g > 230 and b < 200: return False # Yellowish background
    return True

img = Image.open("assets/images/geography/map_hokkaido_blank.png").convert("RGBA").resize((100, 100))
pixels = img.load()

with open("hokkaido_ascii2.txt", "w") as f:
    f.write("   " + "".join([str(i//10) for i in range(100)]) + "\n")
    f.write("   " + "".join([str(i%10) for i in range(100)]) + "\n")
    
    for y in range(100):
        row = f"{y:02d} "
        for x in range(100):
            if is_land(*pixels[x, y]):
                row += "#"
            else:
                row += "."
        f.write(row + "\n")
