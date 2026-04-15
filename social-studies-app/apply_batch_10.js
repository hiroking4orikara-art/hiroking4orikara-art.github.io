const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizDataStr = fs.readFileSync(quizDataPath, 'utf8');

const generated = [
    { file: 'assets/images/history/h_medieval_1_minamotoyoshinaka_1772802530993.png', answer: '源義仲（木曽義仲）' },
    { file: 'assets/images/history/h_medieval_1_yabusame_1772802564519.png', answer: '流鏑馬（やぶさめ）' },
    { file: 'assets/images/history/h_medieval_1_nimousaku_1772802594834.png', answer: '二毛作' },
    { file: 'assets/images/history/h_medieval_1_gyubakou_1772802622169.png', answer: '牛馬耕' },
    { file: 'assets/images/history/h_medieval_1_bunkatsusozoku_1772802687732.png', answer: '分割相続' },
    { file: 'assets/images/history/h_medieval_2_mongolteikoku_1772802716926.png', answer: 'モンゴル帝国' },
    { file: 'assets/images/history/h_medieval_2_genko_1772802750152.png', answer: '元寇' },
    { file: 'assets/images/history/h_medieval_2_hojotokimune_1772802779789.png', answer: '北条時宗' },
    { file: 'assets/images/history/h_medieval_2_tokuseirei_1772802810166.png', answer: '徳政令' },
    { file: 'assets/images/history/h_medieval_2_godaigotenno_1772802837831.png', answer: '後醍醐天皇' }
];

let applied = 0;

generated.forEach(item => {
    const ansKey = item.answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // We want to match a block like { ... a: "Ans", ... }
    // It's easiest to match "a: "Ans"," or "a:"Ans"," and insert `img: "path"` before it.
    // Or just look for `a: ["Ans"]` 
    
    const stringRegex = new RegExp(`(a:\\s*["']${ansKey}["']\\s*,)`);
    const arrayRegex = new RegExp(`(a:\\s*\\[\\s*["']${ansKey}["']\\s*\\]\\s*,)`);
    
    let matched = false;
    
    if (stringRegex.test(quizDataStr)) {
        // Only replace if img isn't right next to it.
        // Easiest is to just append `\n img: "path",` right AFTER `a: "Ans",`
        quizDataStr = quizDataStr.replace(stringRegex, `$1 \n            img: "${item.file}",`);
        matched = true;
    } else if (arrayRegex.test(quizDataStr)) {
        quizDataStr = quizDataStr.replace(arrayRegex, `$1 \n            img: "${item.file}",`);
        matched = true;
    }
    
    if (matched) applied++;
    else console.log("Could not match: " + item.answer);
});

fs.writeFileSync(quizDataPath, quizDataStr, 'utf8');
console.log(`Applied ${applied} images out of 10 to quiz_data.js`);
