const fs = require('fs');
const path = require('path');

const brainDir = path.join(__dirname, '..', '..', 'brain', '792cf5eb-12e5-4650-a29c-884b69472f51');
const targetDir = path.join(__dirname, 'assets', 'images', 'history');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

// 1. Move files
const generatedFiles = fs.readdirSync(brainDir).filter(f => f.endsWith('.png'));
let movedFiles = {}; // baseNameWithoutTimestamp -> actual filename
generatedFiles.forEach(file => {
    // The name is like h_medieval_1_samurai_dokoro_1773374601126.png
    const match = file.match(/^(.+)_\d+\.png$/);
    if (match) {
        let base = match[1];
        fs.copyFileSync(path.join(brainDir, file), path.join(targetDir, file));
        movedFiles[base] = file;
    }
});

// 2. Build mapping
const targetMap = {
    "浄土信仰": "h_ancient_9_jodo_shinko",
    "侍所": "h_medieval_1_samurai_dokoro",
    "問注所": "h_medieval_1_monchujo",
    "北条時政": "h_medieval_1_hojo_tokimasa",
    "北条義時": "h_medieval_1_hojo_yoshitoki",
    "源実朝": "h_medieval_1_minamoto_no_sanetomo",
    "阿充河荘（あてがわのしょう）": "h_medieval_1_ategawa_no_sho",
    "琵琶法師": "h_medieval_3_biwa_hoshi",
    "商品作物": "h_early_modern_4_cash_crops",
    "松平定信": "h_early_modern_5_matsudaira_sadanobu",
    "俵物": "h_early_modern_5_tawaramono",
    "本居宣長": "h_early_modern_5_motoori_norinaga",
    "化政文化": "h_early_modern_6_kasei_culture",
    "異国船打払令": "h_early_modern_6_ikokusen_uchiharai_rei",
    "大塩平八郎の乱": "h_early_modern_6_oshio_heihachiro",
    "蛮社の獄": "h_early_modern_6_bansha_no_goku",
    "天保の改革": "h_early_modern_6_tenpo_reforms",
    "ペリー": "h_early_modern_6_matthew_perry",
    "モリソン号事件": "h_early_modern_6_morrison_incident",
    "五箇条の御誓文": "h_modern_1_gokajo_no_goseimon",
    "板垣退助": "h_modern_2_itagaki_taisuke",
    "法律の範囲内で認められた": "h_modern_2_shinmin_no_kenri",
    "ノルマントン号事件": "h_modern_3_normanton_incident",
    "日本の産業革命": "h_modern_4_industrial_revolution",
    "鈴木梅太郎": "h_modern_4_umetaro_suzuki",
    "狩野芳崖": "h_modern_4_kano_hogai",
    "荻原守衛": "h_modern_4_morie_ogiwara",
    "孫文": "h_modern_5_sun_yatsen",
    "女性解放運動": "h_modern_5_womens_liberation",
    "普通選挙法": "h_modern_5_general_election_law",
    "治安維持法": "h_modern_5_peace_preservation_law",
    "市川房枝": "h_modern_5_fusae_ichikawa"
};

const bwList = [
    "h_modern_1_gokajo_no_goseimon",
    "h_modern_2_itagaki_taisuke",
    "h_modern_2_shinmin_no_kenri",
    "h_modern_3_normanton_incident",
    "h_modern_4_industrial_revolution",
    "h_modern_4_umetaro_suzuki",
    "h_modern_4_kano_hogai",
    "h_modern_4_morie_ogiwara",
    "h_modern_5_sun_yatsen",
    "h_modern_5_womens_liberation",
    "h_modern_5_general_election_law",
    "h_modern_5_peace_preservation_law",
    "h_modern_5_fusae_ichikawa"
];

let quizDataStr = fs.readFileSync(quizDataPath, 'utf8');

global.window = global;
global.module = { exports: {} };
eval(quizDataStr);
const QUIZ_DATA = global.window.QUIZ_DATA || {};

let updateCount = 0;
let modifications = [];

for (const unit in QUIZ_DATA) {
    if (unit.startsWith('h_')) {
        QUIZ_DATA[unit].forEach((q) => {
            const baseName = targetMap[q.a];
            if (baseName && movedFiles[baseName]) {
                const actualFilename = movedFiles[baseName];
                const newImgPath = `assets/images/history/${actualFilename}`;
                const needsDisclaimer = bwList.includes(baseName);
                
                if (q.img !== newImgPath && q.image !== newImgPath) {
                    modifications.push(`Assigned [${q.a}]: ${newImgPath} at ${unit}`);
                    updateCount++;
                    
                    const qEscaped = q.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                    const hasImg = (q.img || q.image);
                    
                    let replacementStr = `img: "${newImgPath}"\n        }`;
                    if (needsDisclaimer && !q.comment) {
                        replacementStr = `img: "${newImgPath}",\n            comment: "※画像はイメージです"\n        }`;
                    } else if (needsDisclaimer && q.comment && !q.comment.includes('画像はイメージです')) {
                        let newComment = q.comment + " ※画像はイメージです";
                        if (hasImg) {
                            const rgx = new RegExp(`(q:\\s*["']${qEscaped}["'][\\s\\S]*?)(img|image):\\s*["'][^"']*["']`);
                            quizDataStr = quizDataStr.replace(rgx, `$1img: "${newImgPath}"`);
                            
                            const cmEscaped = q.comment.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                            const rgxCm = new RegExp(`comment:\\s*["']${cmEscaped}["']`);
                            quizDataStr = quizDataStr.replace(rgxCm, `comment: "${newComment}"`);
                        }
                        return; // Handle separately below if not simple
                    }
                    
                    if (hasImg) {
                        const rgx = new RegExp(`(q:\\s*["']${qEscaped}["'][\\s\\S]*?)(img|image):\\s*["'][^"']*["']`);
                        quizDataStr = quizDataStr.replace(rgx, `$1img: "${newImgPath}"`);
                        if (needsDisclaimer && !q.comment) {
                            // insert comment after img
                            const rgx2 = new RegExp(`(q:\\s*["']${qEscaped}["'][\\s\\S]*?img:\\s*["']${newImgPath}["'])`);
                            quizDataStr = quizDataStr.replace(rgx2, `$1,\n            comment: "※画像はイメージです"`);
                        }
                    } else {
                        const rgxInject = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?)\\s*}`);
                        quizDataStr = quizDataStr.replace(rgxInject, `$1,\n            ${replacementStr}`);
                    }
                }
            }
        });
    }
}

if (modifications.length > 0) {
    fs.writeFileSync(quizDataPath, quizDataStr, 'utf8');
    console.log(modifications.slice(0, 32).join('\n'));
    console.log(`Updated ${updateCount} leftover mapping images.`);
} else {
    console.log("No new images could be mapped.");
}
