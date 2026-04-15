const fs = require('fs');

try {
    global.window = {};
    let code = fs.readFileSync('quiz_data.js', 'utf8');
    code += '\nmodule.exports = window.QUIZ_DATA;\n';
    fs.writeFileSync('temp_quiz_data.js', code);
    const quizData = require('./temp_quiz_data');

    let visualCandidates = [];
    
    // Keywords that strongly suggest a visual element is helpful
    const visualKeywords = ['土器', '古墳', '埴輪', '寺', '大仏', '絵', '像', '具', '器', '図', '城', '銭', '刀', '鏡', '剣', '玉', '書', '印', '碑', '庭', '造', '様式', '建築', '千歯こき', '備中ぐわ', '踏み車', '唐箕', '鉄砲', '伝来', '遺跡', '貝塚'];

    for (const key in quizData) {
        if (key.startsWith('h_')) { // History units
            quizData[key].forEach(q => {
                if (!q.img) { // Only questions without images
                    const answer = typeof q.a === 'string' ? q.a : (Array.isArray(q.a) ? q.a.join(', ') : String(q.a));
                    const questionText = q.q;
                    
                    let isCandidate = false;
                    for (const kw of visualKeywords) {
                        if (answer.includes(kw) || questionText.includes(kw)) {
                            isCandidate = true;
                            break;
                        }
                    }
                    
                    // Specific checks for famous visual things not caught by keywords alone
                    if (answer === '銅鐸' || answer === '金印' || answer.includes('竪穴住居') || answer.includes('高床倉庫') || answer.includes('大仙陵') || answer.includes('法隆寺') || answer.includes('東大寺') || answer.includes('正倉院') || answer.includes('平等院') || answer.includes('中尊寺') || answer.includes('金閣') || answer.includes('銀閣') || answer.includes('姫路城') || answer.includes('五街道') || answer.includes('出島') || answer.includes('御朱印船') || answer.includes('富岡製糸場') || answer.includes('八幡製鉄所')) {
                        isCandidate = true;
                    }

                    if (isCandidate) {
                        visualCandidates.push({
                            unit: key,
                            answer: answer,
                            question: questionText
                        });
                    }
                }
            });
        }
    }

    // Group by unit
    let output = "## 📸 歴史クイズ 画像追加候補リスト\n\n";
    let currentUnit = "";
    
    visualCandidates.forEach(cand => {
        if (currentUnit !== cand.unit) {
            output += `\n### ユニット: ${cand.unit}\n`;
            currentUnit = cand.unit;
        }
        output += `- **${cand.answer}**: ${cand.question}\n`;
    });

    fs.writeFileSync('history_visual_candidates.md', output);
    console.log(`Found ${visualCandidates.length} candidates.`);
    
    // cleanup
    fs.unlinkSync('temp_quiz_data.js');
} catch (e) {
    console.error(e);
}
