const fs = require('fs');
const path = require('path');
const q = require('./quiz_data.js'); // Assuming it parses cleanly now

const finalDir = path.join(__dirname, 'assets', 'images', 'history');
const tempDir = path.join(__dirname, 'images', 'history');

if (!fs.existsSync(finalDir)) {
    fs.mkdirSync(finalDir, { recursive: true });
}

// 1. Collect all files from tempDir
const filesToMove = fs.existsSync(tempDir) ? fs.readdirSync(tempDir) : [];

let movedCount = 0;
let deletedCount = 0;

for (const file of filesToMove) {
    if (!file.endsWith('.png') && !file.endsWith('.jpg')) continue;
    
    // Check if it's an orphaned pop_ file that has a better h_ version
    // Actually, to be safe, if we just generated new ones (e.g. h_medieval_4_nanbokucho.png) they won't start with pop_
    // So we definitely move non-pop_ files (if they don't overwrite blindly)
    const oldPath = path.join(tempDir, file);
    const newPath = path.join(finalDir, file);
    
    // We already moved 5 ancient files: h_ancient_...
    // But assets/images/history ALREADY has those.
    // If the file starts with pop_, we can delete it since the user wants to reduce duplicates, and we only need the official mapped ones.
    if (file.startsWith('pop_')) {
        fs.unlinkSync(oldPath);
        deletedCount++;
        continue;
    }
    
    // If it's a new generated file (e.g. h_medieval_4_kango.png)
    if (!fs.existsSync(newPath)) {
        fs.renameSync(oldPath, newPath);
        movedCount++;
    } else {
        // they conflict (e.g. h_ancient_1_australopithecus.png)
        // just delete the extra one from tempDir to consolidate
        fs.unlinkSync(oldPath);
        deletedCount++;
    }
}

// 2. Re-map quiz_data.js strictly comparing q[unit] items to files in finalDir
const allFinalFiles = new Set(fs.readdirSync(finalDir));
let mappedCount = 0;
let unmappedCount = 0;

function stringifyQuizData(data) {
    let out = 'const quizData = {\n';
    for (const [unit, items] of Object.entries(data)) {
        out += `    "${unit}": [\n`;
        items.forEach((item, index) => {
            out += '        {\n';
            out += `            q: ${JSON.stringify(item.q)},\n`;
            if (item.choices) out += `            choices: ${JSON.stringify(item.choices)},\n`;
            out += `            a: ${JSON.stringify(item.a)},\n`;
            
            // Re-discover mapping based on previously recorded img, or auto-detect
            let imgToUse = null;
            if (item.img) {
                const basename = path.basename(item.img);
                if (allFinalFiles.has(basename)) {
                    imgToUse = `assets/images/history/${basename}`;
                }
            } 
            
            // Alternatively, if it didn't have img, search `allFinalFiles` to see if one perfectly names after the answer.
            // But if it had img and exists, use it.
            if (imgToUse) {
                out += `            img: "${imgToUse}",\n`;
                mappedCount++;
            } else {
                unmappedCount++;
            }

            if (item.comment) {
                out += `            comment: ${JSON.stringify(item.comment)}\n`;
            } else {
                out = out.replace(/,\n$/, '\n'); // remove trailing comma
            }
            out += '        },\n';
        });
        out += `    ],\n`;
    }
    out += '};\n\ntry {\n    module.exports = quizData;\n} catch(e) {}\n';
    return out;
}

fs.writeFileSync('quiz_data.js', stringifyQuizData(q));
console.log(`Consolidated! Moved ${movedCount} unique images, deleted ${deletedCount} dupes/orphans.`);
console.log(`quiz_data.js updated: ${mappedCount} valid images, ${unmappedCount} items unmapped.`);

// Also clear out `modern_history_images` if it exists and is empty
const modernDir = path.join(__dirname, 'modern_history_images');
if (fs.existsSync(modernDir)) {
    const remains = fs.readdirSync(modernDir);
    if (remains.length === 0) {
        fs.rmdirSync(modernDir);
    } else if (remains.length === 1 && remains[0] === '歴史近代と二度の大戦') {
        fs.rmdirSync(path.join(modernDir, '歴史近代と二度の大戦'), { recursive: true });
        fs.rmdirSync(modernDir);
    }
}
