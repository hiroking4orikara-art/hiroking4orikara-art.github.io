const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
const targetPath = path.join(__dirname, 'batch_final_target.json');

try {
    const content = fs.readFileSync(quizDataPath, 'utf8');
    const script = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
    
    const m = new module.constructor();
    m.paths = module.paths;
    m._compile(script, quizDataPath);
    const qData = m.exports;

    if (qData) {
        let missing = [];
        const targets = ['gw_2', 'gw_3'];
        for (const cat of targets) {
            if (qData[cat]) {
                qData[cat].forEach((q, originalIndex) => {
                    if (!q.answerImg || q.answerImg.trim() === '') {
                        missing.push({
                            category: cat,
                            originalIndex: originalIndex,
                            question: q.q || q.question,
                            answer: q.a || (q.answers && q.answers[0]),
                            choices: q.choices,
                            comment: q.comment
                        });
                    }
                });
            }
        }
        
        console.log(`未設定の総数: ${missing.length}問`);
        const nextBatch = missing.slice(0, 6);
        fs.writeFileSync(targetPath, JSON.stringify(nextBatch, null, 2));
        
        console.log(`==== 最終バッチの6問抽出 ====`);
        nextBatch.forEach((q, idx) => {
            console.log(`[${q.category} Index ${q.originalIndex}] 問題: ${q.question.substring(0, 30)}...`);
            console.log(`  正解: ${q.answer}`);
            console.log('---');
        });
    }
} catch (error) {
    console.error("エラー:", error);
}
