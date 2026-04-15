const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const targetStr = `        // Determine where to go back based on currentUnitId
        if (this.quizState.currentUnitId === 'h_exam_all' || 
            this.quizState.currentUnitId === 'gw_exam' || 
            this.quizState.currentUnitId === 'gj_exam') {
            this.switchScreen('sub-category-screen');
        } else {
            // Go back to Unit List
            this.switchScreen('unit-list-screen');
        }`;

const replacementStr = `        // Determine where to go back based on currentUnitId
        if (this.quizState.currentUnitId === 'h_exam_all' || 
            this.quizState.currentUnitId === 'gw_exam' || 
            this.quizState.currentUnitId === 'gj_exam') {
            this.switchScreen('sub-category-screen');
        } else if (this.quizState.currentUnitId === 'c_exam_all') {
            this.state.currentSubject = 'civics';
            this.state.currentBranch = UNIT_DATA['civics'][0];
            this.showUnitList();
        } else {
            // Go back to Unit List
            this.switchScreen('unit-list-screen');
        }`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('script.js', content, 'utf8');
    console.log('Successfully fixed c_exam_all back navigation bug in script.js');
} else {
    console.log('Could not find target string in script.js!');
}
