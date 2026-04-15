from PIL import Image, ImageDraw

def draw_grid(input_path, output_path):
    img = Image.open(input_path)
    draw = ImageDraw.Draw(img)
    width, height = img.size
    
    for i in range(10, 100, 10):
        # vertical lines
        x = int(width * i / 100)
        draw.line([(x, 0), (x, height)], fill="red", width=2)
        draw.text((x + 2, 2), f"x{i}", fill="red")
        
        # horizontal lines
        y = int(height * i / 100)
        draw.line([(0, y), (width, y)], fill="red", width=2)
        draw.text((2, y + 2), f"y{i}", fill="red")
        
    img.save(output_path)

draw_grid("assets/images/geography/map_kinki_blank_1771591655064.png", "kinki_grid.png")
draw_grid("assets/images/geography/map_hokkaido_blank.png", "hokkaido_grid.png")
print("Grid images generated.")
