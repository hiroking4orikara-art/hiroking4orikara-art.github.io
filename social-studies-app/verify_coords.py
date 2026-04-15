from PIL import Image, ImageDraw

def mark_image(img_path, output_path, markers):
    img = Image.open(img_path)
    draw = ImageDraw.Draw(img)
    width, height = img.size
    
    for marker in markers:
        if marker['type'] == 'rect':
            x1 = width * marker['x'] / 100
            y1 = height * marker['y'] / 100
            x2 = x1 + width * marker['w'] / 100
            y2 = y1 + height * marker['h'] / 100
            draw.rectangle([x1, y1, x2, y2], outline="red", width=3)
        elif marker['type'] == 'point':
            x = width * marker['x'] / 100
            y = height * marker['y'] / 100
            r = 5
            draw.ellipse([x-r, y-r, x+r, y+r], fill="blue")

    img.save(output_path)

# Test Chubu: Niigata
# x: 62%, y: 29% rect with 10% x 4%
# text at x: 67%, y: 31%
mark_image('assets/images/geography/map_chubu_blank_1771591636012.png', 'test_chubu.png', [
    {'type': 'rect', 'x': 62, 'y': 29, 'w': 10, 'h': 4},
    {'type': 'point', 'x': 67, 'y': 31}
])

# Test Kyushu: Chikugo River
# 62,42 50,41 37,41 30,42
mark_image('assets/images/geography/map_kyushu_blank_1771591728285.png', 'test_kyushu.png', [
    {'type': 'point', 'x': 62, 'y': 42},
    {'type': 'point', 'x': 50, 'y': 41},
    {'type': 'point', 'x': 37, 'y': 41},
    {'type': 'point', 'x': 30, 'y': 42}
])

# Test Alps polygon
# 40,40 50,25 65,40 55,60
mark_image('assets/images/geography/map_chubu_blank_1771591636012.png', 'test_alps.png', [
    {'type': 'point', 'x': 40, 'y': 40},
    {'type': 'point', 'x': 50, 'y': 25},
    {'type': 'point', 'x': 65, 'y': 40},
    {'type': 'point', 'x': 55, 'y': 60}
])

print("Test images generated.")
