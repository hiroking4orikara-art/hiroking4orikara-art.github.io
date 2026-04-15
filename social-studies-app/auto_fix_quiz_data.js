const fs = require('fs');
const path = require('path');
const q = require('./quiz_data.js');

// Helper to safely format a JS object as a string for quiz_data.js
function stringifyQuizData(data) {
    let out = 'const quizData = {\n';
    
    for (const [unit, items] of Object.entries(data)) {
        out += `    "${unit}": [\n`;
        items.forEach(item => {
            out += '        {\n';
            out += `            q: ${JSON.stringify(item.q)},\n`;
            if (item.choices) {
                out += `            choices: ${JSON.stringify(item.choices)},\n`;
            }
            out += `            a: ${JSON.stringify(item.a)},\n`;
            
            // Clean up image/img strings. The corrupted data might contain newline characters and extra 'img: ...' inside the string value.
            let finalImg = null;
            
            // Collect all possible strings from image, img
            const possibleStrings = [item.image, item.img].filter(Boolean);
            possibleStrings.forEach(str => {
                // If the string got corrupted, it might have internal paths like `images/history/pop_...png`
                // Let's extract any valid .png or .jpg paths using regex.
                const matches = str.match(/[\w\/.-]+\.(png|jpg)/g);
                if (matches) {
                    matches.forEach(m => {
                        // Check if file actually exists
                        if (fs.existsSync(path.join(__dirname, m))) {
                            finalImg = m;
                        }
                    });
                }
            });

            if (finalImg) {
               out += `            img: "${finalImg}",\n`;
            }
            
            if (item.comment) {
                // Since comment might have been swallowed or corrupted, we just output it safely. 
                // Wait, if comment was swallowed into img, then item.comment might be undefined!
                // Let's check if the comment text is trapped in img.
                if (item.img && typeof item.img === 'string' && item.img.includes('comment:')) {
                    const commentMatch = item.img.match(/comment:\s*['"]([^'"]+)['"]/);
                    if (commentMatch) {
                        item.comment = commentMatch[1];
                    }
                }
                out += `            comment: ${JSON.stringify(item.comment)}\n`;
            } else {
                // ensure no trailing comma
                out = out.replace(/,\n$/, '\n');
            }
            
            out += '        },\n';
        });
        out += `    ],\n`;
    }
    
    out += '};\n\ntry {\n    module.exports = quizData;\n} catch(e) {}\n';
    return out;
}

const cleanContent = stringifyQuizData(q);
fs.writeFileSync('quiz_data.js', cleanContent);
console.log('Successfully repaired quiz_data.js formatting and image paths!');
