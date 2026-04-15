
from PIL import Image

# Create a vibrant red image for testing visibility
img = Image.new('RGB', (400, 400), color = (255, 0, 0))
img.save('bg_kanto_placeholder.png')
print("Created vibrant bg_kanto_placeholder.png")
