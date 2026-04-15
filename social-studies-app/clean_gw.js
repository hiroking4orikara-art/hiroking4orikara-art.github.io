const fs = require('fs');

try {
    const content = fs.readFileSync('quiz_data.js', 'utf8');
    const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;

    const m = new module.constructor();
    m.paths = module.paths;
    m._compile(scriptContext, 'quiz_data.js');
    const qData = m.exports;

    // 1. gw_7 のトリミング (index 32以降を完全に削除)
    if (qData['gw_7'] && qData['gw_7'].length > 32) {
        qData['gw_7'] = qData['gw_7'].slice(0, 32);
        console.log("gw_7 (オセアニア) から無関係な地理・地形問題（32問目以降）を削除しました。");
    }

    // 2. gw_1 ~ gw_7 に混入した Civics 画像の強制削除
    const units = ['gw_1', 'gw_2', 'gw_3', 'gw_4', 'gw_5', 'gw_6', 'gw_7'];
    let removedCount = 0;

    units.forEach(unit => {
        if (qData[unit]) {
            qData[unit].forEach((q, i) => {
                // 公民の画像がセットされている場合は削除してリセットする
                if (q.answerImg && (q.answerImg.includes('/civics/') || q.answerImg.includes('c_'))) {
                    delete q.answerImg;
                    removedCount++;
                }
            });
        }
    });

    console.log(`全 ${units.length} 単元をチェックし、誤って割り当てられた公民画像を ${removedCount} 件削除しました。`);

    // 安全に全体を書き戻す
    const newContent = `const QUIZ_DATA = ${JSON.stringify(qData, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.QUIZ_DATA = QUIZ_DATA;\n}\nmodule.exports = QUIZ_DATA;`;
    fs.writeFileSync('quiz_data.js', newContent);
    console.log("quiz_data.js をクリーンな状態に上書き保存しました。");

} catch (err) {
    console.error("エラーが発生しました。quiz_data.jsの修飾中に問題が発生しました:", err.message);
}
