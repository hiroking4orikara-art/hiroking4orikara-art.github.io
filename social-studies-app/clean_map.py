import cv2
import numpy as np

img = cv2.imread('assets/images/geography/map_kyushu_blank_1771591728285.png')
# Assuming '鹿児島' (Kagoshima) text might be written in black on a white or colored background
# We'll just draw a solid color over the general area of Kagoshima to hide any text and highlight the prefecture.
# Let's see the dimensions first
print(img.shape)

h, w, c = img.shape
# The user said the text is written on the map.
# Easiest clean way: create a new version of the map without the text or blur/floodfill the text.
# Let's save a clean one by filtering out dark text pixels.
# Text is usually very dark (close to black).

# Convert to grayscale to find dark text
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Threshold to find black text (assuming text is < 50 brightness)
_, mask = cv2.threshold(gray, 50, 255, cv2.THRESH_BINARY_INV)

# Dilate the mask slightly to cover the edges of the text
kernel = np.ones((3,3), np.uint8)
mask = cv2.dilate(mask, kernel, iterations=1)

# Inpaint to remove the text
result = cv2.inpaint(img, mask, 3, cv2.INPAINT_TELEA)

# Additionally, maybe we should just highlight the prefecture. 
# Kagoshima is the southern tip. Let's paint the bottom part of the map with a light red overlay if it's not already.

cv2.imwrite('assets/images/geography/map_kyushu_clean_kagoshima.png', result)
print("Saved clean map")
