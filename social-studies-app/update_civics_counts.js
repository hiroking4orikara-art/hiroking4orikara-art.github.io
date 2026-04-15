const fs = require('fs');

let f = fs.readFileSync('data.js', 'utf8');

quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
quizDataStr = quizDataStr.replace(/module\.exports\s*=\s*window\.QUIZ_DATA;/, '');
const obj = new Function('window={}; ' + quizDataStr + '; return window.QUIZ_DATA;')();

const civicsQuestions = obj.gw_3 || [];

// Counting questions by chapter based on prefix
let countC1 = 0; // 現代社会と私たち (batch 13-14)
let countC2 = 0; // 人権と憲法 (batch 1)
let countC3 = 0; // 政治と社会 (batch 2-7)
let countC4 = 0; // 暮らしと経済 (batch 8-12)
let countC5 = 0; // 環境とわたしたち (batch 15-17)

/* 
Batch mapping:
Batch 1: 人権と憲法 (24 questions) -> Wait, we don't have accurate tags per question in json.
Actually, let's just use the known batch sizes from our previous logs:
1. 人権と憲法: Batch 1 (24), Batch 2 (23), Batch 3 (32) -> 79 questions
2. 政治と社会: Batch 4 (27), Batch 5 (27), Batch 6 (27), Batch 7 (37) -> 118 questions
3. 暮らしと経済: Batch 8 (30), Batch 9 (30), Batch 10 (31), Batch 11 (34), Batch 12 (31) -> 156 questions
4. 現代社会とわたしたち: Batch 13 (29), Batch 14 (29) -> 58 questions
5. 環境とわたしたち: Batch 15 (32), Batch 16 (35), Batch 17 (23) -> 90 questions
Wait, the order of extracting wasn't the order of the textbook.
Let's use a simpler heuristic or just approximate, or better:
1: 現代社会と私たち (batch 13-14: 58)
2: 人権と憲法 (batch 1-3: 79)
3: 政治と社会 (batch 4-7: 118)
4: 暮らしと経済 (batch 8-12: 156)
5: 環境とわたしたち (batch 15-17: 90)
Total: 58+79+118+156+90 = 501. Wait, total was 507.
Let's recalculate from civics_batch_X.json lengths exactly.
*/

function getLength(batch) {
    try {
        return JSON.parse(fs.readFileSync(`civics_batch_${batch}.json`, 'utf8')).length;
    } catch(e) {
        return 0;
    }
}
const b1 = getLength('1');
const b2 = getLength('2');
const b3_1 = getLength('3');
const b3_2 = JSON.parse(fs.readFileSync(`civics_batch_3_part2.json`, 'utf8')).length;
const b3 = b3_1 + b3_2; // 10 + 22 = 32
const b4 = getLength('4'); // 27
const b5 = getLength('5'); // 27
const b6 = getLength('6'); // 27
const b7 = getLength('7'); // 37
const b8 = getLength('8'); // 30
const b9 = getLength('9'); // 30
const b10 = getLength('10'); // 31
const b11 = getLength('11'); // 34
const b12 = getLength('12'); // 31
const b13 = getLength('13'); // 29
const b14 = getLength('14'); // 29
const b15 = getLength('15'); // 32
const b16 = getLength('16'); // 35
const b17 = getLength('17'); // 23

// 現代社会と私たち (k1) -> Wait, k1 was 人権と憲法? 
// Let's look at the implementation plan:
// 1. 公民人権と憲法 (16 images) -> Batches 1, 2, 3 (k1) -> 24+23+32 = 79
// 2. 公民政治と社会 (21 images) -> Batches 4, 5, 6, 7 (k3) -> 27+27+27+37 = 118
// 3. 公民暮らしと経済 (23 images) -> Batches 8, 9, 10, 11, 12 (k4) -> 30+30+31+34+31 = 156
// 4. 公民現代社会とわたしたち (8 images) -> Batches 13, 14 (k2. wait, no, didn't specify k internally. But 現代社会 is first chapter usually?)
// Wait! In the implementation plan:
// 1. 公民人権と憲法 (16 images)
// 2. 公民政治と社会 (21 images)
// 3. 公民暮らしと経済 (23 images)
// 4. 公民現代社会とわたしたち (8 images)
// 5. 公民環境とわたしたち (13 images)

// In the UI data.js:
// c_1 1. 現代社会と私たち  -> Batch 13, 14 -> 29+29 = 58
// c_2 2. 人権と憲法 -> Batch 1, 2, 3 -> 24+23+32 = 79
// c_3 3. 政治と社会 -> Batch 4, 5, 6, 7 -> 27+27+27+37 = 118
// c_4 4. 暮らしと経済 -> Batch 8, 9, 10, 11, 12 -> 30+30+31+34+31 = 156
// c_5 5. 環境とわたしたち -> Batch 15, 16, 17 -> 32+35+23 = 90
// Total = 501. Wait. Let's recalculate carefully.
// b1=24, b2=23, b3=32 = 79
// b4=27, b5=27, b6=27, b7=37 = 118
// b8=30, b9=30, b10=31, b11=34, b12=31 = 156
// b13=29, b14=29 = 58
// b15=32, b16=35, b17=23 = 90
// 79+118+156+58+90 = 501
// Wait, my previous total was 507, why?
// Ah, let's just log the lengths directly.

console.log("Batches 1-3 (人権と憲法):", b1+b2+b3);
console.log("Batches 4-7 (政治と社会):", b4+b5+b6+b7);
console.log("Batches 8-12 (暮らしと経済):", b8+b9+b10+b11+b12);
console.log("Batches 13-14 (現代社会とわたしたち):", b13+b14);
console.log("Batches 15-17 (環境とわたしたち):", b15+b16+b17);
console.log("Total:", b1+b2+b3+b4+b5+b6+b7+b8+b9+b10+b11+b12+b13+b14+b15+b16+b17);

// Let's replace the values in the string.
f = f.replace(/{ "id": "c_1", "title": "1. 現代社会と私たち", "questionCount": \d+, "topics": \[\] }/, 
              `{ "id": "c_1", "title": "1. 現代社会と私たち", "questionCount": ${b13+b14}, "topics": [] }`);

f = f.replace(/{ "id": "c_2", "title": "2. 人権と憲法", "questionCount": \d+, "topics": \[\] }/, 
              `{ "id": "c_2", "title": "2. 人権と憲法", "questionCount": ${b1+b2+b3}, "topics": [] }`);

f = f.replace(/{ "id": "c_3", "title": "3. 政治と社会", "questionCount": \d+, "topics": \[\] }/, 
              `{ "id": "c_3", "title": "3. 政治と社会", "questionCount": ${b4+b5+b6+b7}, "topics": [] }`);

f = f.replace(/{ "id": "c_4", "title": "4. 暮らしと経済", "questionCount": \d+, "topics": \[\] }/, 
              `{ "id": "c_4", "title": "4. 暮らしと経済", "questionCount": ${b8+b9+b10+b11+b12}, "topics": [] }`);

f = f.replace(/{ "id": "c_5", "title": "5. 環境とわたしたち", "questionCount": \d+, "topics": \[\] }/, 
              `{ "id": "c_5", "title": "5. 環境とわたしたち", "questionCount": ${b15+b16+b17}, "topics": [] }`);

fs.writeFileSync('data.js', f);
console.log('Updated data.js with correct counts.');
