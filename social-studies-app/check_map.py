from PIL import Image

def get_image_info(path):
    try:
        with Image.open(path) as img:
            print(f"Size: {img.size}")
            # We can also do a quick grid crop to see what parts are where
    except Exception as e:
        print(f"Error: {e}")

get_image_info('assets/images/geography/map_japan_blank_1771590893723.png')
