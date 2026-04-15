from PIL import Image
import sys

def image_to_ascii(image_path, out_path, width=100):
    try:
        img = Image.open(image_path)
    except Exception as e:
        print(f"Error opening: {e}")
        return

    img = img.resize((100, 100))
    pixels = img.load()
    
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("   " + "".join([str(i//10) for i in range(100)]) + "\n")
        f.write("   " + "".join([str(i%10) for i in range(100)]) + "\n")
        
        for y in range(100):
            row_str = f"{y:02d} "
            for x in range(100):
                # The image might be RGBA or RGB
                if len(pixels[x, y]) == 4:
                    r, g, b, a = pixels[x, y]
                else:
                    r, g, b = pixels[x, y]
                    a = 255
                    
                if a < 50:
                    row_str += " "
                else:
                    if g > r and g > b:
                        row_str += "#" # Green (Hokkaido land)
                    elif r > g and r > b:
                        row_str += "X" # Red / Orange
                    elif b > r and b > g:
                        row_str += "~" # Blue
                    else:
                        row_str += "." # Other
            f.write(row_str + "\n")
    print(f"Saved to {out_path}")

image_to_ascii("assets/images/geography/map_hokkaido_blank.png", "hokkaido_ascii.txt")
