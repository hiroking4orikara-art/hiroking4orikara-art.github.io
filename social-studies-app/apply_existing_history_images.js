const fs = require('fs');
const path = require('path');

// Read existing image files
const historyImagesDir = path.join(__dirname, 'assets', 'images', 'history');
const imageFiles = fs.readdirSync(historyImagesDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

// Strip "window.QUIZ_DATA = " to parse js as object
let dataStr = fs.readFileSync('quiz_data.js', 'utf8');
let cleanJs = dataStr.replace('window.QUIZ_DATA = ', 'module.exports = ').replace(/window\.QUIZ_DATA\s*=\s*/g, 'module.exports = ');
fs.writeFileSync('temp_quiz_data.js', cleanJs);

const quizData = require('./temp_quiz_data.js');
let appliedCount = 0;

for (let unit in quizData) {
    if (!unit.startsWith('h_')) continue; // the unit is like "h_ancient_1"

    const questions = quizData[unit];
    questions.forEach(q => {
        // Find matching image based on unit prefix
        const relevantImages = imageFiles.filter(f => f.startsWith(unit));
        if (relevantImages.length === 0) return;

        // Simple approach: grab the answer, convert to romaji/english loosely or just rely on keywords in filenames.
        // Actually, the filename has the keyword after the unit: e.g. "h_ancient_1_egyptian_civ.png" -> "egyptian_civ"
        // Let's try to find an exact match or partial match for those that are missing.
        if (!q.img || q.img.trim() === '') {
            // We have a missing image. Can we find a file that clearly belongs to this?
            // E.g. h_ancient_1 -> we have multiple images. We need to map them manually or heuristically.
            // A good heuristic: check if any parts of the filename map to the answer or question text.
            let matchedFile = null;
            
            // Very basic matching based on unit level indexing. Normally this needs more logic.
            // Since there are 257 images and potentially 255 missing, let's just log what we have available vs missing in each unit 
            // to build a better map manually if needed, or by keyword.
        }
    });
}

// Since mapping implicitly by filename to Japanese text is hard, let's just output the files per unit 
// so we can build a smart keyword map.
const mapFile = {};
imageFiles.forEach(f => {
    const match = f.match(/^(h_[a-z]+_\d+)_([a-zA-Z_0-9]+)\./);
    if(match) {
        if(!mapFile[match[1]]) mapFile[match[1]] = [];
        mapFile[match[1]].push(f);
    }
});
fs.writeFileSync('available_images_map.json', JSON.stringify(mapFile, null, 2));
console.log('Saved available_images_map.json. Total images:', imageFiles.length);
