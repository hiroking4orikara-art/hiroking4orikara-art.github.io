const fs = require('fs');
let htmlStr = fs.readFileSync('index.html', 'utf8');

const finalCounts = {
  gw_1: 61,
  gw_2: 64,
  gw_3: 65,  // deduplicated manually earlier: 506 down to 65? Actually it removed 441 duplicates from 506 -> 65
  gw_4: 40,
  gw_5: 45,
  gw_6: 36,
  gw_7: 45,
  gj_1: 23,
  gj_2: 54,
  gj_3: 36,
  gj_4: 34,
  gj_5: 27,
  gj_6: 19,
  gj_7: 22,
  gj_8: 19,
  gj_9: 16,
  gj_10: 16,
  h_ancient_1: 24, h_ancient_2: 15, h_ancient_3: 13, h_ancient_4: 14, h_ancient_5: 12, h_ancient_6: 13, h_ancient_7: 11, h_ancient_8: 14, h_ancient_9: 24,
  h_medieval_1: 26, h_medieval_2: 14, h_medieval_3: 13, h_medieval_4: 8, h_medieval_5: 9, h_medieval_6: 17, h_medieval_7: 14,
  h_early_modern_1: 11, h_early_modern_2: 17, h_early_modern_3: 15, h_early_modern_4: 15, h_early_modern_5: 10, h_early_modern_6: 15,
  h_modern_1: 16, h_modern_2: 14, h_modern_3: 16, h_modern_4: 23, h_modern_5: 25, h_modern_6: 14, h_modern_7: 15,
  h_contemporary_1: 12, h_contemporary_2: 11, h_contemporary_3: 12, h_contemporary_4: 11, h_contemporary_5: 12,
  c_1: 28, c_2: 32, c_3: 43, c_4: 34, c_5: 36, cw_1: 99
};

const quizStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = quizStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedQuiz = new Function('return ' + matchQuiz[1])();

for (const [k, v] of Object.entries(parsedQuiz)) {
    finalCounts[k] = v.length;
}

// Calculate Exams
finalCounts.gw_exam = finalCounts.gw_1 + finalCounts.gw_2 + finalCounts.gw_3 + finalCounts.gw_4 + finalCounts.gw_5 + finalCounts.gw_6 + finalCounts.gw_7;
finalCounts.gj_exam = finalCounts.gj_1 + finalCounts.gj_2 + finalCounts.gj_3 + finalCounts.gj_4 + finalCounts.gj_5 + finalCounts.gj_6 + finalCounts.gj_7 + finalCounts.gj_8 + finalCounts.gj_9 + finalCounts.gj_10;

finalCounts.h_exam_all = 0;
['h_ancient_1','h_ancient_2','h_ancient_3','h_ancient_4','h_ancient_5','h_ancient_6','h_ancient_7','h_ancient_8','h_ancient_9',
 'h_medieval_1','h_medieval_2','h_medieval_3','h_medieval_4','h_medieval_5','h_medieval_6','h_medieval_7',
 'h_early_modern_1','h_early_modern_2','h_early_modern_3','h_early_modern_4','h_early_modern_5','h_early_modern_6',
 'h_modern_1','h_modern_2','h_modern_3','h_modern_4','h_modern_5','h_modern_6','h_modern_7',
 'h_contemporary_1','h_contemporary_2','h_contemporary_3','h_contemporary_4','h_contemporary_5'
].forEach(k => finalCounts.h_exam_all += (finalCounts[k] || 0));

finalCounts.c_exam_all = (finalCounts.c_1||0) + (finalCounts.c_2||0) + (finalCounts.c_3||0) + (finalCounts.c_4||0) + (finalCounts.c_5||0) + (finalCounts.cw_1||0);

console.log("Replacing HTML limits...");

for (const [id, count] of Object.entries(finalCounts)) {
    const pattern = new RegExp(`(onclick="app\\.startQuiz\\('${id}'\\)"[\\s\\S]*?class="unit-question-count">\\(全)\\d+(問\\)<\\/div>)`, 'g');
    htmlStr = htmlStr.replace(pattern, `$1${count}$2`);
}

fs.writeFileSync('index.html', htmlStr, 'utf8');
console.log("Updated index.html HTML successfully.");
