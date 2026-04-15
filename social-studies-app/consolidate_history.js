const fs = require('fs');
const path = require('path');

const targetDir = 'images/history';
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

let content = fs.readFileSync('quiz_data.js', 'utf8');

// The duplicates we recently regenerated:
const duplicatesToDelete = [
    'pop_australopithecus',
    'pop_peking_man',
    'pop_cro_magnon',
    'pop_manyoshu'
];

// 1. Process images/pop_*.png
const imagesDir = 'images';
const oldPops = fs.readdirSync(imagesDir).filter(f => f.startsWith('pop_') && f.endsWith('.png'));

let deletedCount = 0;
let movedOldCount = 0;

oldPops.forEach(f => {
    const isDup = duplicatesToDelete.some(dup => f.includes(dup));
    const oldPath = path.join(imagesDir, f);
    
    if (isDup) {
        fs.unlinkSync(oldPath);
        console.log(`Deleted duplicate: ${f}`);
        deletedCount++;
    } else {
        const newPath = path.join(targetDir, f);
        fs.renameSync(oldPath, newPath);
        const regex1 = new RegExp(`(['"])images/${f}\\1`, 'g');
        content = content.replace(regex1, `$1images/history/${f}$1`);
        movedOldCount++;
    }
});

// 2. Process modern_history_images/
const modernDir = 'modern_history_images';
let movedNewCount = 0;

if (fs.existsSync(modernDir)) {
    const modernFiles = fs.readdirSync(modernDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
    modernFiles.forEach(f => {
        const oldPath = path.join(modernDir, f);
        const newPath = path.join(targetDir, f);
        fs.renameSync(oldPath, newPath);
        
        const regex2 = new RegExp(`(['"])modern_history_images/${f}\\1`, 'g');
        content = content.replace(regex2, `$1images/history/${f}$1`);
        movedNewCount++;
    });
}

// 3. Save quiz_data.js
fs.writeFileSync('quiz_data.js', content);
console.log(`Consolidation complete. Deleted ${deletedCount} dupes, moved ${movedOldCount} older images, moved ${movedNewCount} newer images to images/history.`);
