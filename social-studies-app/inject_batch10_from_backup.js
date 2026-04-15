const fs = require('fs');

async function injectFromBackup() {
    const backupFile = 'quiz_data_civics_chapters_complete_backup.js';
    if (!fs.existsSync(backupFile)) {
        console.log(`Backup file ${backupFile} not found.`);
        return;
    }

    const backupData = fs.readFileSync(backupFile, 'utf8');
    
    const targetQueries = [
        "北アメリカ大陸の西岸に沿って連なる、険しい山脈は？",
        "北アメリカ大陸の東部に位置する、比較的なだらかな山脈は？",
        "アメリカ合衆国の中央部を南へ流れ、メキシコ湾に注ぐ大河は？",
        "アメリカ合衆国とカナダの国境付近にある、５つの湖の総称は？",
        "アラスカを除くアメリカ合衆国の国土の中央を通る、経度約100度の経線は？"
    ];
    
    const images = [
        "assets/images/geography/geo_gw_3_41_rocky_mountains_1773839206005.png",
        "assets/images/geography/geo_gw_3_42_appalachian_mountains_1773839221419.png",
        "assets/images/geography/geo_gw_3_43_mississippi_river_1773839235841.png",
        "assets/images/geography/geo_gw_3_44_great_lakes_1773839251026.png",
        "assets/images/geography/geo_gw_3_45_100th_meridian_west_1773839266672.png"
    ];

    let extractedBlocks = [];
    
    // バックアップからブロックを正規表現で探す
    for (let i = 0; i < targetQueries.length; i++) {
        // q: "..." から comment: "..." までのブロックを強引に抽出
        const escapedQ = targetQueries[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`({\\s*q:\\s*"${escapedQ}"[\\s\\S]*?comment:\\s*"[^"]*"(?:\\s*,\\s*answerImg:\\s*"[^"]*")?(?:\\s*,\\s*imgCaption:\\s*"[^"]*")?\\s*})`);
        
        const match = backupData.match(regex);
        if (match) {
            let block = match[1];
            // 既にanswerImgがあれば一旦消す（今回は新しい画像を確実に入れるため）
            block = block.replace(/,\s*answerImg:\s*"[^"]*"/g, '');
            block = block.replace(/,\s*imgCaption:\s*"[^"]*"/g, '');
            
            // 閉じ括弧の前にプロパティを追加
            block = block.replace(/\s*}$/, `,\n            answerImg: "${images[i]}",\n            imgCaption: "※画像はイメージです"\n        }`);
            extractedBlocks.push(block);
            console.log(`Extracted question: ${targetQueries[i]}`);
        } else {
            console.log(`Could not exactly extract: ${targetQueries[i]}`);
        }
    }

    if (extractedBlocks.length > 0) {
        let currentData = fs.readFileSync('quiz_data.js', 'utf8');
        let injectionString = extractedBlocks.join(",\n") + ",\n";

        // gw_3 の先頭に挿入
        const targetRegex = /("gw_3"\s*:\s*\[\s*\n?)/;
        if (targetRegex.test(currentData)) {
            // 二重追加防止チェック
            if (!currentData.includes(targetQueries[0])) {
                currentData = currentData.replace(targetRegex, `$1${injectionString}`);
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log(`Successfully safely injected ${extractedBlocks.length} missing questions into quiz_data.js`);
            } else {
                console.log("Questions seem to already exist. Skipped.");
            }
        } else {
            console.log('Could not find anchor "gw_3": [ in quiz_data.js.');
        }
    }
}

injectFromBackup().catch(console.error);
