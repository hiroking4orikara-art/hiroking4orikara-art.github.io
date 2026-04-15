const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
const targetPath = path.join(__dirname, 'batch_21_target.json');

try {
    const content = fs.readFileSync(quizDataPath, 'utf8');
    
    // quizData変数を安全に取得するためのハック
    // window.QUIZ_DATA として定義されているため、それに合わせてモック
    const script = `
        const window = global;
        ` + content + `
        module.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : (typeof window.QUIZ_DATA !== "undefined" ? window.QUIZ_DATA : null);
    `;
    
    const m = new module.constructor();
    m.paths = module.paths;
    m._compile(script, quizDataPath);
    const qData = m.exports;

    if (qData && qData.gw_3) {
        const batch21 = qData.gw_3.slice(96, 101);
        fs.writeFileSync(targetPath, JSON.stringify(batch21, null, 2));
        console.log(`抽出成功: ${batch21.length}件のアイテムをbatch_21_target.jsonに保存しました。`);
        
        batch21.forEach((q, idx) => {
            console.log(`[Index ${96 + idx}] 問題: ${q.question || q.q} ...`);
            console.log(`  正解: ${q.a || q.answers[0]}`);
            console.log(`  現在の画像: ${q.answerImg || '未設定'}`);
            console.log('---');
        });
    } else {
        console.error("エラー: QUIZ_DATA または gw_3 が見つかりませんでした。");
    }
} catch (error) {
    console.error("スクリプト実行中にエラーが発生しました:", error);
}
