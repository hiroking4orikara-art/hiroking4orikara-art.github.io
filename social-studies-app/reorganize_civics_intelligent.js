const fs = require('fs');

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
                    norm._sourceBatch = i;
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
                 norm._sourceBatch = 99; // 99 means cw_1
                 allQuestionsArray.push(norm);
             }
        });
    }
} catch (e) {}

console.log("Total loaded:", allQuestionsArray.length);

// Generate missing choices for the first 30 questions
const allAnswers = Array.from(new Set(allQuestionsArray.map(q => q.a)));
allQuestionsArray.forEach(q => {
    if (!q.choices || q.choices.length === 0) {
        // Create 3 random incorrect choices + the correct one
        let newChoices = new Set();
        newChoices.add(q.a);
        while(newChoices.size < 4) {
            const randomAnswer = allAnswers[Math.floor(Math.random() * allAnswers.length)];
            if(randomAnswer !== q.a && randomAnswer.length < 15) { // don't pick super long answers
                newChoices.add(randomAnswer);
            }
        }
        q.choices = Array.from(newChoices).sort(() => Math.random() - 0.5);
    }
});

const c1 = [];
const c2 = [];
const c3 = [];
const c4 = [];
const c5 = [];
const cw1 = [];

// Distribution logic based on inspection of keywords
// Chapter 1 (Modern Society, Culture, Issues) was Batches 38 ~ 44? 
// Chapter 2 (Human Rights, Constitution) was Batches 1 ~ 9?
// Wait, let me just look at the exact boundaries.
for (const q of allQuestionsArray) {
    const b = q._sourceBatch;
    delete q._sourceBatch; // clean up
    
    // We can infer by batch IDs AND some keywords roughly if we want.
    if (b >= 1 && b <= 9) c2.push(q);
    else if (b >= 10 && b <= 22) c3.push(q); // wait, let's refine
    else if (b >= 23 && b <= 37) c4.push(q);
    else if (b >= 38 && b <= 43) c1.push(q);
    else if (b >= 44 && b <= 51) c5.push(q);
    else cw1.push(q); 
}

console.log(`Guessed Lengths before precise trim -> c1:${c1.length}, c2:${c2.length}, c3:${c3.length}, c4:${c4.length}, c5:${c5.length}, cw1:${cw1.length}`);

// If they don't match the exact targets, we'll log it and we can just use the target lengths:
// Target: c1(70), c2(90), c3(100), c4(100), c5(67), cw1(100)
// This way we use the batch ranges to loosely group, then slice strictly. Wait, what if the batch ranges ARE exact?
// Batches 1: 10
// ... actually, some batches have 10, some have less/more.

const targetLimits = { c_1: 70, c_2: 90, c_3: 100, c_4: 100, c_5: 67, cw_1: 100 };
// We will sort allQuestionsArray strictly by the intended chapter order, then slice!
// Intended order: c_1, c_2, c_3, c_4, c_5, cw_1.
// We map each batch to its intended chapter block:
// c_1: batches 38 - 44
// c_2: batches 1 - 9
// c_3: batches 10 - 19?
// Instead of guessing, let's just use the exact distribution the user wanted!
// The user wanted:
// c_1: batches 38-44
// c_2: batches 1-9
// c_3: batches 10-19
// c_4: batches 20-29
// c_5: batches 30-37 ? Wait. c_4 was 27-36.
