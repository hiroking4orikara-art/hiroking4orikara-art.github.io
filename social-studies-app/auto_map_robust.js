const fs = require('fs');
const path = require('path');
const q = require('./quiz_data.js'); // the clean one!

const files = fs.readdirSync('images/history').filter(f => f.startsWith('pop_'));
// Identify already used
const used = new Set();
for(const k in q) {
    q[k].forEach(item => {
        if(item.img && item.img.includes('images/history/pop_')) {
            used.add(item.img.split('/').pop());
        }
    })
}
const unmappedFiles = files.filter(f => !used.has(f));

const keywordMap = {
    'ategawa_no_sho': ['阿氐河荘', '百姓', '訴状'],
    'baekje': ['百済'],
    'buddhism': ['仏教'],
    'bunkatsu_sozoku': ['分割相続'],
    'christianity': ['キリスト教'],
    'confucianism': ['儒学', '儒教'],
    'cuneiform': ['くさび形文字', '楔形文字'],
    'dogu': ['土偶'],
    'egypt_pyramid': ['ピラミッド'],
    'euphrates': ['ユーフラテス', 'チグリス'],
    'gaya': ['加耶', '任那'],
    'genko': ['元寇', '文永の役', '弘安の役'],
    'goguryeo': ['高句麗'],
    'gyubako': ['牛馬耕'],
    'hammurabi': ['ハンムラビ'],
    'han_dynasty': ['漢'],
    'hellenistic': ['ヘレニズム'],
    'hojo_tokimasa': ['北条時政'],
    'hojo_tokimune': ['北条時宗'],
    'hojo_yoshitoki': ['北条義時', '承久の乱'],
    'kuni': ['小国', '国'],
    'lunar_calendar': ['太陰暦'],
    'mandokoro': ['政所'],
    'mesopotamia': ['メソポタミア'],
    'minamoto_sanetomo': ['源実朝'],
    'minamoto_yoshinaka': ['木曽義仲', '源義仲'],
    'monchujo': ['問注所'],
    'nile_river': ['ナイル川'],
    'okimi': ['大王'],
    'oracle_bone': ['甲骨文字'],
    'oracle_bone_2': ['甲骨文字'], 
    'qin_dynasty': ['秦'],
    'rice_farming': ['稲作'],
    'samurai_dokoro': ['侍所'],
    'shang_dynasty': ['殷'],
    'silk_road': ['シルクロード'],
    'silla': ['新羅'],
    'solar_calendar': ['太陽暦'],
    'three_kingdoms': ['三国時代', '魏', '呉', '蜀'],
    'toraijin': ['渡来人'],
    'wani': ['王仁'],
    'yabusame': ['流鏑馬']
};

let matchCount = 0;

for (const k in q) {
    if (!k.startsWith('h_')) continue;
    
    q[k].forEach(item => {
        if (item.img) return; // already has image
        
        let matchedFile = null;
        for (const file of unmappedFiles) {
            // Find its key
            let fileKey = file.replace('pop_', '').replace(/\_\d+\.png$/, '');
            const keys = keywordMap[fileKey] || [];
            
            const textToSearch = (item.q + " " + (Array.isArray(item.a) ? item.a.join() : item.a)).toLowerCase();
            
            for (const key of keys) {
                if (textToSearch.includes(key.toLowerCase())) {
                    matchedFile = file;
                    break;
                }
            }
            if (matchedFile) break;
        }
        
        if (matchedFile) {
            item.img = `images/history/${matchedFile}`;
            // remove from unmapped
            unmappedFiles.splice(unmappedFiles.indexOf(matchedFile), 1);
            console.log(`Mapped ${matchedFile} to "${item.a}"`);
            matchCount++;
        }
    });
}

// Write it back cleanly!
function stringifyQuizData(data) {
    let out = 'const quizData = {\n';
    for (const [unit, items] of Object.entries(data)) {
        out += `    "${unit}": [\n`;
        items.forEach(item => {
            out += '        {\n';
            out += `            q: ${JSON.stringify(item.q)},\n`;
            if (item.choices) out += `            choices: ${JSON.stringify(item.choices)},\n`;
            out += `            a: ${JSON.stringify(item.a)},\n`;
            if (item.img) out += `            img: "${item.img}",\n`;
            if (item.comment) {
                out += `            comment: ${JSON.stringify(item.comment)}\n`;
            } else {
                out = out.replace(/,\n$/, '\n');
            }
            out += '        },\n';
        });
        out += `    ],\n`;
    }
    out += '};\n\ntry {\n    module.exports = quizData;\n} catch(e) {}\n';
    return out;
}

fs.writeFileSync('quiz_data.js', stringifyQuizData(q));
console.log(`Mapped ${matchCount} remaining files. ${unmappedFiles.length} files still unmapped.`);
if (unmappedFiles.length > 0) console.log("Still unmapped:", unmappedFiles);
