const fs = require('fs');

try {
    const content = fs.readFileSync('quiz_data.js', 'utf8');
    const script = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
    const m = new module.constructor();
    m.paths = module.paths;
    m._compile(script, 'quiz_data.js');
    const qData = m.exports;

    const gw1 = qData.gw_1;
    if (gw1) {
        console.log("gw_1 画像リスト:");
        gw1.forEach((q, idx) => {
            if (q.answerImg) console.log(`[Q${idx}] answerImg: ${q.answerImg}`);
            if (q.img) console.log(`[Q${idx}] img: ${q.img}`);
        });
    } else {
        console.log("gw_1 が見つかりません");
    }

} catch (err) {
    console.error(err);
}
