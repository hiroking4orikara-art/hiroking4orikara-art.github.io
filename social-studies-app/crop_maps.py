from PIL import Image

img = Image.open('assets/images/geography/map_japan_blank_1771590893723.png')

# Hokkaido is typically top right, e.g., x: 400-640, y: 0-250
hokkaido = img.crop((350, 0, 640, 250))
hokkaido.save('assets/images/geography/map_hokkaido_blank.png')

# Okinawa is typically bottom left inset, e.g., x: 0-200, y: 400-640
okinawa = img.crop((0, 400, 250, 640))
okinawa.save('assets/images/geography/map_okinawa_blank.png')

print("Cropped maps saved.")
