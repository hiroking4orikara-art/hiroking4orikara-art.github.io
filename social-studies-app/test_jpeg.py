import os
import glob
from PIL import Image

# 元画像の検索ディレクトリ（assets全体）
source_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app\assets\images"
png_files = glob.glob(os.path.join(source_dir, "**", "*.png"), recursive=True)

# 今回生成したテスト用出力先（ユーザーがレビューしやすいようbrainディレクトリへ）
output_dir = r"C:\Users\hirok\.gemini\antigravity\brain\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c"

# 最新のものや、地理・公民・歴史からバランスよく5枚ピックアップしたいが、今回は単純に最初から5枚、
# またはファイルサイズが大きめなものを5枚選ぶ
png_files.sort(key=lambda x: os.path.getsize(x), reverse=True)
test_images = png_files[:5]

print("=== JPEG変換テスト（品質85） ===")
output_paths = []

for i, img_path in enumerate(test_images):
    try:
        with Image.open(img_path) as img:
            # 透過情報（アルファチャンネル）を持つものはRGBに変換してからJPG保存
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            base_name = os.path.basename(img_path)
            name_without_ext = os.path.splitext(base_name)[0]
            output_path = os.path.join(output_dir, f"{name_without_ext}_test.jpg")
            
            # JPEGで保存
            img.save(output_path, "JPEG", quality=85)
            
            orig_size = os.path.getsize(img_path) / 1024
            new_size = os.path.getsize(output_path) / 1024
            reduction_rate = ((orig_size - new_size) / orig_size) * 100
            
            print(f"[{i+1}/5] {base_name}")
            print(f"  - Original (PNG): {orig_size:.1f} KB")
            print(f"  - Converted (JPG): {new_size:.1f} KB (-{reduction_rate:.1f}%)")
            print(f"  - Saved to: {output_path}\n")
            output_paths.append(output_path)
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

# 結果パスの出力（プログラムの引渡し用）
with open(os.path.join(output_dir, "test_jpeg_paths.txt"), "w") as f:
    for p in output_paths:
        f.write(p + "\n")
