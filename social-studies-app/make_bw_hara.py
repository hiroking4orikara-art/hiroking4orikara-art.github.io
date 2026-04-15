from PIL import Image
import os

def convert_to_bw(file_path):
    print(f"Converting {file_path} to black and white...")
    with Image.open(file_path) as img:
        bw_img = img.convert("L")
        bw_img.save(file_path)

if __name__ == "__main__":
    base_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app\assets\images\history"
    convert_to_bw(os.path.join(base_dir, "h_modern_5_hara_takashi.png"))
    print("Conversion complete.")
