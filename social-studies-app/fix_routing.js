const fs = require('fs');
let t = fs.readFileSync('script.js', 'utf8');

// The original block
const target = `        if (this.quizState.currentUnitId === 'h_exam_all' || 
            this.quizState.currentUnitId === 'gw_exam' || 
            this.quizState.currentUnitId === 'gj_exam' ||
            this.quizState.currentUnitId === 'c_exam_all') {
            this.switchScreen('sub-category-screen');
        } else {
            // Go back to Unit List
            this.switchScreen('unit-list-screen');
        }`;

const replacement = `        if (this.quizState.currentUnitId === 'h_exam_all' || 
            this.quizState.currentUnitId === 'gw_exam' || 
            this.quizState.currentUnitId === 'gj_exam') {
            this.switchScreen('sub-category-screen');
        } else if (this.quizState.currentUnitId === 'c_exam_all') {
            this.state.currentSubject = 'civics';
            this.switchScreen('unit-list-screen');
        } else {
            // Go back to Unit List
            this.switchScreen('unit-list-screen');
        }`;

if(t.includes(target)) {
    t = t.replace(target, replacement);
    fs.writeFileSync('script.js', t, 'utf8');
    console.log("Successfully replaced navigation logic in script.js");
} else {
    console.log("Could not find the target string. Trying fallback regex.");
    // Fallback if formatting was slightly different
    t = t.replace(/this\.quizState\.currentUnitId === 'gj_exam' \|\|\s*this\.quizState\.currentUnitId === 'c_exam_all'/, "this.quizState.currentUnitId === 'gj_exam'");
    fs.writeFileSync('script.js', t, 'utf8');
    console.log("Used fallback regex.");
}
