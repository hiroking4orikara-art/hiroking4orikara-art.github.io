const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

const targetAnswers = [
    '世界恐慌', 'ブロック経済', 'ヒトラー', 'ガンディー', '満州事変', '国際連盟',
    '五・一五事件', '二・二六事件', '日中戦争', '南京事件', '国家総動員法', '八紘一宇',
    '大政翼賛会', '大東亜共栄圏', '日独伊三国同盟', 'ABCD包囲陣', '太平洋戦争', 'ミッドウェー海戦',
    '学徒出陣', '学童疎開', '東京大空襲', '沖縄県', 'ヤルタ会談', '広島・長崎', 'ポツダム宣言', 'GHQ',
    '配給制', '隣組', '贅沢（ぜいたく）は敵だ'
];

let updateCount = 0;

for (const answer of targetAnswers) {
    const escapedAnswer = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Some answers are strings, some are arrays: a: "世界恐慌" or a: ["世界恐慌"]
    const regexExistingStr = new RegExp(`(a:\\s*["']${escapedAnswer}["']\\s*,[\\s\\S]*?img:\\s*["'][^"']*["'],)`);
    const regexExistingArr = new RegExp(`(a:\\s*\\[\\s*["']${escapedAnswer}["']\\s*\\]\\s*,[\\s\\S]*?img:\\s*["'][^"']*["'],)`);
    
    // Only add if it doesn't already have imgCaption
    const regexCheck = new RegExp(`a:\\s*(?:\\[\\s*)?["']${escapedAnswer}["'](?:\\s*\\])?\\s*,[\\s\\S]*?imgCaption:`);
    if (regexCheck.test(quizData)) {
        console.log(`Caption already exists for: ${answer}`);
        continue;
    }

    if (regexExistingStr.test(quizData)) {
         quizData = quizData.replace(regexExistingStr, `$1\n            imgCaption: "※画像はイメージです",`);
         console.log(`Added caption for: ${answer}`);
         updateCount++;
    } else if (regexExistingArr.test(quizData)) {
         quizData = quizData.replace(regexExistingArr, `$1\n            imgCaption: "※画像はイメージです",`);
         console.log(`Added caption for array: ${answer}`);
         updateCount++;
    } else {
         console.log(`Warning: Could not find img property to append caption for -> ${answer}`);
    }
}

fs.writeFileSync(quizDataPath, quizData, 'utf8');
console.log(`Update completed successfully. Updates made: ${updateCount}`);
