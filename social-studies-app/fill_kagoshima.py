from PIL import Image, ImageDraw

# It seems the image is map_kyushu_blank_1771591728285.png
# Wait, the user said "Kagoshima Prefecture that is the answer has the name written on it".
# Let's check if the file "map_kyushu_blank_1771591728285.png" is the one or if it is "g_japan_geo_batch2_kitakyushu_industrial_1773720151130.png"
# Or maybe the history/geography images generated earlier had text burned in.
# Let's load the blank one and color Kagoshima red ourselves, avoiding any text altogether!

img_path = 'assets/images/geography/map_kyushu_blank_1771591728285.png'
img = Image.open(img_path).convert('RGB')
draw = ImageDraw.Draw(img)

width, height = img.size

# Kyushu map typically has Kagoshima at the bottom (South)
# We can floodfill the bottom part with red.
# We just need to find a white / light gray pixel in the Kagoshima area to seed the floodfill.

# Kagoshima is roughly at x = width * 0.45, y = height * 0.85
seed_x = int(width * 0.45)
seed_y = int(height * 0.85)

target_color = (255, 100, 100) # Reddish highlight

from PIL import ImageDraw

# Since Pillow's floodfill doesn't always work perfectly if there's antialiasing or noise, 
# let's try a simple point check and ImageDraw.floodfill
ImageDraw.floodfill(img, (seed_x, seed_y), target_color, thresh=30)

# Save the newly colored, text-free Kagoshima map
output_path = 'assets/images/geography/map_kagoshima_highlighted.png'
img.save(output_path)
print(f"Saved {output_path}")
