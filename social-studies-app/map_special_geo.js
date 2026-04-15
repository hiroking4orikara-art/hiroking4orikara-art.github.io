const fs = require('fs');

let quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');

const replacements = [
    {
        q: "屋久島や白神山地などのように、ユネスコ条約に基づいて登録され、自然や文化に関係するものを何というか。",
        a: "世界遺産",
        imgName: "g_geo_world_heritage_fixed.png"
    },
    {
        q: "シラス台地で畜産がさかんな、九州地方の県はどこですか？", // Might be different phrasing, I will check what questions have '鹿児島県'
        a: "鹿児島県",
        imgName: "g_special_kagoshima_blank_1773760535098.png"
    },
    {
        q: "冬は暖かく雨が降り、夏は乾燥する気候を何といいますか？", // Will match '地中海性気候'
        a: "地中海性気候",
        imgName: "g_special_mediterranean_climate_1773760512743.png"
    },
    {
        q: "ヨーロッパとアジアが一体となっている世界最大の面積を持つ大陸は何か？", // Will match 'ユーラシア大陸'
        a: "ユーラシア大陸",
        imgName: "g_special_eurasia_map_1773760492277.png"
    }
];

// Fallback search script first
const matchQuiz = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const targetA = ["世界遺産", "鹿児島県", "地中海性気候", "ユーラシア大陸"];

let targets = [];
for (const [section, questions] of Object.entries(parsedData)) {
    questions.forEach((q, index) => {
        if (targetA.includes(q.a)) {
            targets.push(q);
        }
        else if (q.a === "世界文化遺産" || q.a === "世界自然遺産") {
            targets.push(q);
        }
    });
}

console.log(`Found ${targets.length} questions matching the targets.`);
targets.forEach(t => console.log(t.a, "=>", t.q));

// We'll perform precise mappings. 
// "世界遺産" 
let replacedCount = 0;

targets.forEach(t => {
   let targetImg = null;
   if (t.a.includes("世界遺産") || t.a === "世界文化遺産" || t.a === "世界自然遺産") targetImg = "g_geo_world_heritage_fixed.png";
   if (t.a === "鹿児島県") targetImg = "g_special_kagoshima_blank_1773760535098.png";
   if (t.a === "地中海性気候") targetImg = "g_special_mediterranean_climate_1773760512743.png";
   if (t.a === "ユーラシア大陸") targetImg = "g_special_eurasia_map_1773760492277.png";
   
   if (targetImg) {
       const qEscaped = t.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       let blockRegex = new RegExp(`(q:\\s*"${qEscaped}"[\\s\\S]*?)(a:\\s*".*?")(\\n*\\s*\\})`, 'g');
       
       let matched = false;
       quizDataStr = quizDataStr.replace(blockRegex, (match, p1, p2, p3) => {
           matched = true;
           // If it already has an answerImg, we replace it.
           if (match.includes("answerImg:")) {
               return match.replace(/answerImg:\s*".*?"/, `answerImg: "assets/images/geography/${targetImg}"`);
           }
           // Otherwise, we inject it.
           return `${p1}${p2},\n            answerImg: "assets/images/geography/${targetImg}",\n            imgCaption: "※画像はイメージです"${p3}`;
       });

       if (matched) replacedCount++;
   }
});

fs.writeFileSync('quiz_data.js', quizDataStr, 'utf8');
console.log(`Successfully mapped ${replacedCount} questions to the fixed images.`);
