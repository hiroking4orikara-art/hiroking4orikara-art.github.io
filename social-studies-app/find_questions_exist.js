const fs = require('fs');

try {
    const rawData = fs.readFileSync('quiz_data.js', 'utf8');
    // window.QUIZ_DATA = { ... }; の部分を取り出してJSONとしてパースする簡易的な方法
    const match = rawData.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]+\});/);
    if (match) {
        // Function や window などのevalで安全ではないので、特定の文字列でカウントする
    }
    
    // 単純にカテゴリの数を数える
    const gw2Count = (rawData.match(/"gw_2":\s*\[/g) || []).length;
    const gw3Count = (rawData.match(/"gw_3":\s*\[/g) || []).length;
    console.log(`gw_2 found: ${gw2Count}, gw_3 found: ${gw3Count}`);

    // gw_3 の問題数（q: "..." の数）
    const gw3Match = rawData.match(/"gw_3":\s*\[([\s\S]*?)\]/);
    if (gw3Match) {
        const gw3Content = gw3Match[1];
        const qCount = (gw3Content.match(/q:\s*"/g) || []).length;
        console.log(`gw_3 has ${qCount} questions.`);
    }

    // ミシシッピが含まれるか
    if (rawData.includes('ミシシッピ')) {
        console.log("ミシシッピ found in the file.");
        // 行番号を特定
        const lines = rawData.split('\n');
        lines.forEach((line, index) => {
            if (line.includes('ミシシッピ')) {
                console.log(`Line ${index + 1}: ${line}`);
            }
        });
    } else {
        console.log("ミシシッピ NOT found.");
    }
} catch (e) {
    console.error(e);
}
