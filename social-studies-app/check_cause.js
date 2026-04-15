const fs = require('fs');

try {
    // 1. quiz_data.jsの構文エラーチェック
    const content = fs.readFileSync('quiz_data.js', 'utf8');
    try {
        const script = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
        const m = new module.constructor();
        m.paths = module.paths;
        m._compile(script, 'quiz_data.js');
        console.log("quiz_data.jsの構文（Syntax）: 正常です。");
        console.log("オブジェクトの要素数確認:");
        const qData = m.exports;
        for (const key in qData) {
            console.log(`  - ${key}: ${qData[key].length}問`);
        }
    } catch (err) {
        console.log("quiz_data.jsの構文（Syntax）にエラーがあります:");
        console.log(err.message);
    }

    // 2. script.js に、全画像を事前ロードするような処理がないか確認
    const scriptContent = fs.readFileSync('script.js', 'utf8');
    const preloadMatches = scriptContent.match(/(new\s+Image\(\)|Image\(\)|preload|load\s*Images?)/gi);
    if (preloadMatches) {
        console.log("\nscript.js 内で事前読み込みやImageオブジェクトに関する記述が見つかりました:");
        console.log(preloadMatches.slice(0, 5).join(", "));
    } else {
        console.log("\nscript.js内に大規模なプリロード処理（new Image等）は見つかりませんでした。");
    }

} catch (err) {
    console.error("スクリプト実行中にエラー:", err);
}
