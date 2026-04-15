const fs = require('fs');
let c = fs.readFileSync('quiz_data.js', 'utf8');

// The issue isn't just a newline. The file content around line 165 literally has a corrupted merge:
/*
            comment: "「ドイツ共和国憲法」が正式名称です。すべての国民に「人間たるに値する生活」を保障す 
                8.png",\n            imgCaption: "※画像はイメージです"s/images/civics/g_civics_1_weimar_constitution_1773475478108
*/

// Let's just fix it by replacing that whole broken multiline block.
c = c.replace(/comment:\s*"「ドイツ共和国憲法」が正式名称です。すべての国民に「人間たるに値する生活」を保障す[^"]*"/gs, 'comment: "「ドイツ共和国憲法」が正式名称です。すべての国民に「人間たるに値する生活」を保障することを規定しました。"');

// There might be another one around 9024:
c = c.replace(/comment:\s*"「ドイツ共和国憲法」が正式名称です。すべての国民に「人間たるに値する生活」を保障[^"]*"/gs, 'comment: "「ドイツ共和国憲法」が正式名称です。すべての国民に「人間たるに値する生活」を保障することを規定しました。"');

// And remove any rogue comma syntax errors like `8.png",\n            imgCaption: "※画像はイメージです"s/images...`
c = c.replace(/8\.png",\\n            imgCaption: "※画像はイメージです"s\/images\/civics\/g_civics_1_weimar_constitution_1773475478108/g, "");

fs.writeFileSync('quiz_data_patched.js', c, 'utf8');

try {
    const data = new Function('return '+c.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/)[1])();
    console.log("SUCCESSFULLY PARSED");
    fs.writeFileSync('quiz_data.js', c);
} catch(e) {
    console.log("STILL BROKEN", e.message);
}
