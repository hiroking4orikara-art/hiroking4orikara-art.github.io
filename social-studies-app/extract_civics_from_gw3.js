const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

// Identify Civics questions wrongly placed in gw_3
const civicsInGw3 = [];
const trueGw3 = [];

// How do we distinguish? Geography Europe vs Civics.
// We have the original missing list or we can check keywords. 
// A very good heuristic: Civics questions usually talk about constitution, diet, court, economics, etc.
// Geography Europe talks about climate, rivers, countries, EU, etc.
// Alternatively, look at the images applied to them! If they have `g_civics_`, they are civics.
// If they have NO image BUT have civics choices/answers, they are civics.

// Let's check `civics_batch_X.json` contents or extract. 
// Actually we can just find any question in gw_3 that matches exactly a question from c_1 to cw_1.
// Wait, the problem described by the user was that we added batches of NEW civics questions!
// The new civics questions were appended to the `gw_3` array instead of `c_...` arrays?
// Let's read all civics batch files to get the full list of new questions.

const allCivicsBatchQs = new Set();
for (let i = 1; i <= 50; i++) {
    const fn = `civics_batch_${i}.json`;
    if (fs.existsSync(fn)) {
        const d = JSON.parse(fs.readFileSync(fn, 'utf8'));
        d.forEach(q => allCivicsBatchQs.add(q.q));
    }
}

parsedData.gw_3.forEach(q => {
    // If it's a known civics question from the batches
    if (allCivicsBatchQs.has(q.q)) {
        civicsInGw3.push(q);
    } else if (q.answerImg && q.answerImg.includes('g_civics_')) {
        civicsInGw3.push(q);
    } else {
        trueGw3.push(q);
    }
});

console.log(`Found ${trueGw3.length} true Geography questions in gw_3.`);
console.log(`Found ${civicsInGw3.length} Civics questions wrongly in gw_3.`);

// Let's check the size of trueGw3. It should be around 35 or 36.
// Also, we need to distribute the `civicsInGw3` questions into their proper `c_1` ... `cw_1` sections.
// Or wait, did the user want them in `cw_...`?
// The user has c_1, c_2, c_3, c_4, c_5, cw_1.
// If we just append all of them to `c_6`...? No, they probably belong to specific chapters.

// Let's save this state to confirm.
fs.writeFileSync('civics_found_in_gw3.json', JSON.stringify(civicsInGw3, null, 2), 'utf8');
fs.writeFileSync('true_gw_3.json', JSON.stringify(trueGw3, null, 2), 'utf8');
