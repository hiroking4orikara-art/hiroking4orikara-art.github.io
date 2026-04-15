const fs = require('fs');

try {
    const content = fs.readFileSync('quiz_data.js', 'utf8');
    const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;

    const m = new module.constructor();
    m.paths = module.paths;
    m._compile(scriptContext, 'quiz_data.js');
    const qData = m.exports;

    const unit = process.argv[2] || 'gw_7';
    const questions = qData[unit];
    
    if (!questions) {
        console.log(`Unit ${unit} not found.`);
        process.exit(1);
    }

    console.log(`\n=== UNIT: ${unit} (Total: ${questions.length} questions) ===`);
    questions.forEach((q, i) => {
        let img = q.answerImg || 'NONE';
        console.log(`[Q${i}] text: ${q.q.substring(0, 30).replace(/\n/g, '')}... \t -> image: ${img}`);
    });
} catch (err) {
    console.error("エラーが発生しました。quiz_data.jsの書式が壊れている可能性があります:", err.message);
}
