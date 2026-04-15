const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');

// The last 25 were mostly mapped, we only have a few missing based on previous steps.
// From debug outputs:
// リコール（解職請求） -> g_civics_3_recall...
// 寡占（かせん） -> g_civics_4_oligopoly... (there are 2)
// プライマリー・バランス -> g_civics_4_primary_balance...
// 多重債務 -> g_civics_4_multiple_debts...
// 仲裁 -> g_civics_4_arbitration...
// 中国 -> g_civics_5_china...
// PKO（国連平和維持活動） -> g_civics_5_pko...
// ワシントン条約 -> g_civics_5_washington_convention... (there are 2)
// 日本国憲法 -> g_civics_cw_1_constitution_of_japan...
// 平和主義 -> g_civics_cw_1_pacifism...
// 外国人参政権 -> g_civics_cw_1_foreign_suffrage...
// 身体の自由 -> g_civics_cw_1_freedom_of_person...
// 黙秘権 -> g_civics_cw_1_right_to_remain_silent...

const imageMap = {
    "リコール（解職請求）": "g_civics_3_recall_1773480838843.png",
    "寡占（かせん）": "g_civics_4_oligopoly_1773481230198.png",
    "プライマリー・バランス": "g_civics_4_primary_balance_1773481001851.png",
    "多重債務": "g_civics_4_multiple_debts_1773481084222.png",
    "仲裁": "g_civics_4_arbitration_1773481309867.png",
    "中国": "g_civics_5_china_1773481347631.png",
    "PKO（国連平和維持活動）": "g_civics_33_pko_1773539077209.png", // found via search
    "ワシントン条約": "g_civics_5_washington_convention_1773481512778.png",
    "日本国憲法": "g_civics_11_constitution_japan_1773483259364.png",
    "平和主義": "g_civics_11_pacifism_1773483279140.png",
    "外国人参政権": "g_civics_11_foreign_suffrage_1773483296068.png",
    "身体の自由": "g_civics_12_freedom_of_person_1773483664036.png",
    "黙秘権": "g_civics_12_right_to_remain_silent_1773483681434.png"
};

// Also apply the mappings
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

let replaced = 0;

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('c_') || section.startsWith('cw_')) {
        questions.forEach(q => {
            let hasImg = false;
            if (q.answerImg && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
            if (q.img && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
            
            if (!hasImg) {
                if(imageMap[q.a]) {
                    q.answerImg = `assets/images/civics/${imageMap[q.a]}`;
                    q.imgCaption = "※画像はイメージです";
                    replaced++;
                }
            }
        });
    }
}

let content = 'window.QUIZ_DATA = {\n';
const keys = Object.keys(parsedData);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = parsedData[key];
    content += `    "${key}": [\n`;
    const qs = val.map(q => {
        let qStr = `        {\n`;
        qStr += `            q: ${JSON.stringify(q.q)}`;
        if (q.img) qStr += `,\n            img: ${JSON.stringify(q.img)}`;
        if (q.choices) qStr += `,\n            choices: ${JSON.stringify(q.choices)}`;
        if (q.a) qStr += `,\n            a: ${JSON.stringify(q.a)}`;
        if (q.comment) qStr += `,\n            comment: ${JSON.stringify(q.comment)}`;
        if (q.answerImg) qStr += `,\n            answerImg: ${JSON.stringify(q.answerImg)}`;
        if (q.imgCaption) qStr += `,\n            imgCaption: ${JSON.stringify(q.imgCaption)}`;
        qStr += `\n        }`;
        return qStr;
    }).join(',\n');
    content += qs + '\n    ]';
    if (i < keys.length - 1) {
        content += ',\n';
    } else {
        content += '\n';
    }
}
content += '};\n\nmodule.exports = window.QUIZ_DATA;\n';

fs.writeFileSync('quiz_data.js', content, 'utf8');

console.log(`Successfully mapped exactly the final remaining! Count: ${replaced}`);
