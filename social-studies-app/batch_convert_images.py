import os
import glob
from PIL import Image
import gc
import time

assets_dir = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app\assets\images"
quiz_data_path = r"C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app\quiz_data.js"
batch_size = 50

# 全てのPNGファイルを取得
png_files = glob.glob(os.path.join(assets_dir, "**", "*.png"), recursive=True)
total_files = len(png_files)
print(f"Total PNG files to convert: {total_files}")

if total_files == 0:
    print("No PNG files found.")
    exit()

def process_batch(file_batch):
    # quiz_data.jsの内容を読み込む
    with open(quiz_data_path, "r", encoding="utf-8") as f:
        content = f.read()

    converted_count = 0
    for png_path in file_batch:
        try:
            base_name = os.path.basename(png_path)
            dir_name = os.path.dirname(png_path)
            name_without_ext = os.path.splitext(base_name)[0]
            jpg_name = f"{name_without_ext}.jpg"
            jpg_path = os.path.join(dir_name, jpg_name)
            
            # 画像の変換
            with Image.open(png_path) as img:
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                img.save(jpg_path, "JPEG", quality=85)
            
            # 元のPNGを削除
            os.remove(png_path)
            
            # quiz_data.js のテキストを置換（元のPNGファイル名を新しいJPGファイル名に置き換え）
            content = content.replace(base_name, jpg_name)
            
            converted_count += 1
            
        except Exception as e:
            print(f"Error processing {png_path}: {e}")

    # quiz_data.jsを上書き保存
    with open(quiz_data_path, "w", encoding="utf-8") as f:
        f.write(content)

    return converted_count

# バッチ処理の実行
processed = 0
for i in range(0, total_files, batch_size):
    batch = png_files[i:i+batch_size]
    print(f"\nProcessing batch {i//batch_size + 1} ({len(batch)} files)...")
    
    success_count = process_batch(batch)
    processed += success_count
    print(f" -> Converted and linked {success_count} files. Total progress: {processed}/{total_files}")
    
    # メモリ解放・安定化のためのウェイト（クラッシュ対策）
    gc.collect()
    time.sleep(1)

print("\nAll batches completed successfully!")
