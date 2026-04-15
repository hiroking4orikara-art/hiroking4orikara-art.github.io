const fs = require('fs');

const fileContent = fs.readFileSync('quiz_data.js', 'utf-8');

// We can just evaluate it since it's a global assignment
// Wait, quiz_data.js assigns to window.QUIZ_DATA. We can mock window.
global.window = {};
eval(fileContent);

const data = window.QUIZ_DATA;
for (const [unitId, questions] of Object.entries(data)) {
    questions.forEach((q, idx) => {
        if (q.q && (q.q.includes('川') || q.q.includes('県名') || q.q.includes('都道府県'))) {
            // Check if it's related to our task
            if (q.q.includes('川') || q.q.includes('県')) {
                console.log(`Unit: ${unitId}, Index: ${idx}, Q: ${q.q}, Img: ${q.img}, Overlay: ${!!q.mapOverlay}`);
            }
        }
    });
}
