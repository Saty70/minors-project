# sirf linux me chalta h coz windows me tesseract ka path set nahi hai
import cv2
import numpy as np
from PIL import Image
import pytesseract

# Load the image
image_path = 'image.png'
image = Image.open(image_path)
image = image.convert('L')

# Use Tesseract
extracted_text = pytesseract.image_to_string(image)

# Print text
print(extracted_text)
