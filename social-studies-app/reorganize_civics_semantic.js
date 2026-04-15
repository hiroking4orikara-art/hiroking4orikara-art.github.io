const fs = require('fs');

// 1. Build dictionary from keywords file
const kw = JSON.parse(fs.readFileSync('civics_images_keywords.json', 'utf8'));
const answerToLogicalBlock = {};

kw.forEach(k => {
    const m = k.filename.match(/g_civics_(\d+)_/);
    if(m && k.japanese) {
        // k.japanese is the answer string
        answerToLogicalBlock[k.japanese.trim()] = parseInt(m[1]);
    }
});

// 2. Load all 540 valid questions
let allQuestionsArray = [];
for (let i = 1; i <= 51; i++) {
    try {
        const raw = fs.readFileSync(`civics_batch_${i}.json`, 'utf8');
        const data = JSON.parse(raw);
        if (Array.isArray(data)) {
            data.forEach(item => {
                let norm = {};
                if (item.q && item.a) {
                    norm = { q: item.q, a: item.a, choices: item.choices || [], comment: item.comment || '' };
                } else if (item.question && item.answer) {
                    norm = { q: item.question, a: item.answer, choices: item.options || item.choices || [], comment: item.comment || '' };
                }
                if (norm.q) {
                    allQuestionsArray.push(norm);
                }
            });
        }
    } catch(e) {}
}

try {
    const raw83 = fs.readFileSync('remaining_83.json', 'utf8');
    const data83 = JSON.parse(raw83);
    if (Array.isArray(data83)) {
        data83.forEach(item => {
             let norm = {};
             if (item.q && item.a) {
                 norm = { q: item.q, a: item.a, choices: item.choices || [], comment: item.comment || '' };
             } else if (item.question && item.answer) {
                 norm = { q: item.question, a: item.answer, choices: item.options || item.choices || [], comment: item.comment || '' };
             }
             if (norm.q) {
                 allQuestionsArray.push(norm);
             }
        });
    }
} catch (e) {}

console.log("Total loaded questions:", allQuestionsArray.length);

// 3. Fix missing choices for first 30 questions
const allAnswers = Array.from(new Set(allQuestionsArray.map(q => q.a)));
allQuestionsArray.forEach(q => {
    if (!q.choices || q.choices.length < 2) {
        let newChoices = new Set([q.a]);
        while(newChoices.size < 4) {
            const randomAnswer = allAnswers[Math.floor(Math.random() * allAnswers.length)];
            if(randomAnswer !== q.a && randomAnswer.length < 15) {
                newChoices.add(randomAnswer);
            }
        }
        q.choices = Array.from(newChoices).sort(() => Math.random() - 0.5);
    }
});

// 4. Map questions to chapters
const chapters = { c_1: [], c_2: [], c_3: [], c_4: [], c_5: [], cw_1: [], unmapped: [] };

allQuestionsArray.forEach(q => {
    const block = answerToLogicalBlock[q.a.trim()];
    if (block === undefined) {
        // Fallback checks or unmapped
        // Wait, review questions (cw_1) usually don't have block? Or they have 51+. Let's check remaining_83
        chapters.unmapped.push(q);
    } else {
        if (block >= 1 && block <= 8) chapters.c_2.push(q);
        else if (block >= 9 && block <= 22) chapters.c_3.push(q);
        else if (block >= 23 && block <= 36) chapters.c_4.push(q);
        else if (block >= 37 && block <= 43) chapters.c_1.push(q);
        else if (block >= 44 && block <= 50) chapters.c_5.push(q);
        else chapters.cw_1.push(q); 
    }
});

console.log(`Mapped Counts: c_1=${chapters.c_1.length}, c_2=${chapters.c_2.length}, c_3=${chapters.c_3.length}, c_4=${chapters.c_4.length}, c_5=${chapters.c_5.length}, cw_1=${chapters.cw_1.length}, Unmapped=${chapters.unmapped.length}`);

// If Unmapped > 0, we can guess based on textbook keywords or distribute them sequentially if they mostly belong to cw_1
fs.writeFileSync('civics_remapping_report.txt', JSON.stringify({
    c_1: chapters.c_1.map(q => q.a),
    c_2: chapters.c_2.map(q => q.a),
    c_3: chapters.c_3.map(q => q.a),
    unmapped: chapters.unmapped.map(q => q.a)
}, null, 2), 'utf8');

console.log("Wrote civics_remapping_report.txt for verification.");
