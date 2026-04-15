const fs = require('fs');

async function restoreGeo() {
    // 現在のファイルを読み込む（念のためバックアップ）
    const currentData = fs.readFileSync('quiz_data.js', 'utf8');
    fs.writeFileSync('quiz_data.js.bak2', currentData, 'utf8');

    // gw_3 の現在の問題数をカウント
    const gw3Match = currentData.match(/"gw_3":\s*\[([\s\S]*?)\]/);
    console.log("Current gw_3 questions:", gw3Match ? (gw3Match[1].match(/q:\s*"/g) || []).length : 0);

    // true_gw3.json というファイルがあるので見てみる
    if (fs.existsSync('true_gw3.json')) {
        const trueGw3 = JSON.parse(fs.readFileSync('true_gw3.json', 'utf8'));
        console.log(`Found true_gw3.json with ${trueGw3.length} genuine geography questions.`);
        
        // それらの問題が現在のファイルにあるか確認
        let missingCount = 0;
        for (const qObj of trueGw3) {
            // 文字列として存在するか
            if (!currentData.includes(qObj.q)) {
                missingCount++;
            }
        }
        console.log(`${missingCount} genuine geography questions are missing from the current quiz_data.js.`);

        if (missingCount > 0 && gw3Match) {
            console.log("We need to safely inject these missing questions back.");
            // このスクリプトではまず確認だけにする。
        }
    } else {
        console.log("true_gw3.json not found. We should check other backups.");
    }
}

restoreGeo().catch(console.error);
