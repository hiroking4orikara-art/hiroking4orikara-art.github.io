from PIL import Image, ImageDraw, ImageFont
import glob
import os

images = glob.glob('assets/images/geography/map_*_blank_*.png')
for img_path in images:
    if "ocean" in img_path or "hokkaido" in img_path or "okinawa" in img_path:
        continue # skip ones we dont need right now unless we need to do them all
    
    filename = os.path.basename(img_path)
    img = Image.open(img_path)
    draw = ImageDraw.Draw(img)
    width, height = img.size
    
    # Draw grid and numbers
    for i in range(10, 100, 10):
        # vertical lines
        x = width * i / 100
        draw.line([x, 0, x, height], fill="red", width=1)
        draw.text((x + 2, 2), f"x{i}", fill="red")
        
        # horizontal lines
        y = height * i / 100
        draw.line([0, y, width, y], fill="red", width=1)
        draw.text((2, y + 2), f"y{i}", fill="red")
        
    img.save(f'grid_{filename}')

print("Grids generated.")
