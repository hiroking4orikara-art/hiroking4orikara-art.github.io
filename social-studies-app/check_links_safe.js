const fs = require('fs');

try {
    const content = fs.readFileSync('quiz_data.js', 'utf8');
    
    // answerImgの記述を検索（最大5件のみ抽出してクラッシュ防止）
    const matches = content.match(/answerImg(?:")?\s*:\s*"([^"]+)"/g);
    
    if (matches) {
        console.log(`[確認] answerImgの総ヒット数: ${matches.length} 件`);
        console.log(`[確認] 最初の5件の記述:`);
        for (let i = 0; i < Math.min(5, matches.length); i++) {
            console.log(`  ${matches[i]}`);
        }
    } else {
        console.log("[確認] answerImgが見つかりませんでした。");
    }

    // imgプロパティも検索
    const imgMatches = content.match(/img(?:")?\s*:\s*"([^"]+)"/g);
    if (imgMatches) {
        console.log(`\n[確認] img プロパティの総ヒット数: ${imgMatches.length} 件`);
        console.log(`[確認] 最初の3件の記述:`);
        for (let i = 0; i < Math.min(3, imgMatches.length); i++) {
            console.log(`  ${imgMatches[i]}`);
        }
    }

    console.log("\n--- 実際のフォルダ内のファイル状態 ---");
    const geoFiles = fs.readdirSync('assets/images/geography');
    const geoJpg = geoFiles.filter(f => f.endsWith('.jpg')).length;
    const geoPng = geoFiles.filter(f => f.endsWith('.png')).length;
    console.log(`地理フォルダ - JPG: ${geoJpg}枚, PNG: ${geoPng}枚`);

    const hisFiles = fs.readdirSync('assets/images/history');
    const hisJpg = hisFiles.filter(f => f.endsWith('.jpg')).length;
    const hisPng = hisFiles.filter(f => f.endsWith('.png')).length;
    console.log(`歴史フォルダ - JPG: ${hisJpg}枚, PNG: ${geoPng}枚`);

} catch (err) {
    console.error("エラーが発生しました:", err.message);
}
