const fs = require('fs');
const path = require('path');

const brainDir = 'c:\\Users\\hirok\\.gemini\\antigravity\\brain\\ca74b73a-304d-49cc-937a-fd42d2729ea4';
const historyImagesDir = path.join(__dirname, 'assets', 'images', 'history');

// 移動するファイルのパターン
const patterns = [
    'h_early_modern_6_kitagawa', 'h_early_modern_6_toshusai', 'h_early_modern_6_watanabe',
    'h_modern_1_iwakura', 'h_modern_2_minsen', 'h_modern_2_chichibu', 'h_modern_3_yawata',
    'h_modern_4_yawata', 'h_modern_4_tanaka', 'h_modern_4_fukuzawa', 'h_modern_4_futabatei',
    'h_modern_4_natsume', 'h_modern_4_mori', 'h_modern_4_masaoka', 'h_modern_4_kuroda',
    'h_modern_4_taki', 'h_modern_5_kobayashi'
];

let files = [];
try {
    files = fs.readdirSync(brainDir);
} catch (e) {
    console.error(e);
}

let movedCount = 0;
for (const file of files) {
    for (const pattern of patterns) {
        if (file.startsWith(pattern) && file.endsWith('.png')) {
            const oldPath = path.join(brainDir, file);
            let newName = file;
            newName = file.replace(/_\d{13}\.png$/, '.png');
            newName = newName.replace(/__/, '_');
            
            const newPath = path.join(historyImagesDir, newName);
            try {
                fs.copyFileSync(oldPath, newPath);
                console.log(`Copied ${file} to ${newName}`);
                movedCount++;
            } catch(e) {
                console.error(`Failed to copy ${file}`);
            }
            break;
        }
    }
}
console.log(`Total copied: ${movedCount}`);
