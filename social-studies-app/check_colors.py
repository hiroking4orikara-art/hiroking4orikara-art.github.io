from PIL import Image

img = Image.open("assets/images/geography/map_hokkaido_blank.png").convert("RGBA").resize((100, 100))
pixels = img.load()

for x in [30, 40, 50, 60, 70, 75]:
    r, g, b, a = pixels[x, 35]
    print(f"Pixel at ({x}, 35): R={r}, G={g}, B={b}, A={a}")
