import os
from PIL import Image

output_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app\assets\images\history"
os.makedirs(output_dir, exist_ok=True)

files = [
    ("bg_history_ancient.png", (255, 230, 230)), # Light red/pink
    ("bg_history_medieval.png", (230, 255, 230)), # Light green
    ("bg_history_early_modern.png", (230, 230, 255)), # Light blue
    ("bg_history_modern.png", (255, 255, 230)), # Light yellow
    ("bg_history_modern_contemporary.png", (245, 245, 245)) # Light gray
]

for filename, color in files:
    img = Image.new('RGB', (800, 600), color=color)
    img.save(os.path.join(output_dir, filename))
    print(f"Created {filename}")
