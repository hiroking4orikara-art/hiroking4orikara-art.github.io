from PIL import Image

def generate_ascii(file_path):
    img = Image.open(file_path).convert("RGBA").resize((100, 200)) # Smartphone is tall
    pixels = img.load()
    
    print(f"--- {file_path.split('/')[-1]} ---")
    print("   " + "".join([str(i//10) for i in range(100)]))
    print("   " + "".join([str(i%10) for i in range(100)]))
    
    for y in range(200):
        row = f"{y:03d} "
        found_something = False
        for x in range(100):
            r, g, b, _ = pixels[x, y]
            if b > r + 30 and b > g + 20 and b > 100:
                row += "~" # Blue dot
                found_something = True
            elif r > g + 50 and r > b + 50 and r > 150:
                row += "O" # Red/Orange
                found_something = True
            elif g > r + 20 and g > b + 20:
                row += "#" # Green land
                found_something = True
            else:
                row += "."
        if found_something:
            print(row)

generate_ascii("C:/Users/hirok/.gemini/antigravity/brain/eb8758a6-ddf8-42db-8a4d-bf0466754e1a/media__1771927993022.png")
print("\n" + "="*50 + "\n")
generate_ascii("C:/Users/hirok/.gemini/antigravity/brain/eb8758a6-ddf8-42db-8a4d-bf0466754e1a/media__1771928012545.png")
