const fs = require('fs');

try {
    const data = fs.readFileSync('quiz_data.js', 'utf8');
    
    // gw_3 を抽出
    const gw3Match = data.match(/const\s+gw_3\s*=\s*(\[[\s\S]*?\]);\s*(?:const|let|var|function|$)/);
    
    if (gw3Match) {
        // evalは危険なので正規表現でパース？いや、部分的にevalするか、Functionで実行
        // gw_3だけならFunctionで評価可能
        const gw_3_str = gw3Match[1];
        const gw_3 = new Function("return " + gw_3_str)();
        
        let batch = [];
        for (let i = 0; i < gw_3.length; i++) {
            if (!gw_3[i].answerImg) {
                batch.push({
                    index: i,
                    question: gw_3[i].question,
                    answer: gw_3[i].answers[gw_3[i].correct] || gw_3[i].answers[0],
                    explanation: gw_3[i].explanation
                });
            }
            if (batch.length >= 5 && i >= 96) break; // 取るだけ取る
        }
        
        // 96番目以降で未設定のものを5つピックアップ（これまでのバッチの続き）
        const nextBatch = batch.filter(b => b.index >= 96).slice(0, 5);
        
        console.log("Next Batch (Batch 21+):");
        console.log(JSON.stringify(nextBatch, null, 2));
    } else {
        console.log("gw_3 not found");
    }
} catch (e) {
    console.error("Error:", e);
}
