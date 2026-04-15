const fs = require('fs');

const originalFile = 'quiz_data.js';
let content = fs.readFileSync(originalFile, 'utf-8');

const imageDir = 'assets/images/history/';
let existingFiles = fs.readdirSync(imageDir);

const brainDir = 'C:/Users/hirok/.gemini/antigravity/brain/d158252c-f180-4268-985e-d209b6472308/';
let brainFiles = fs.readdirSync(brainDir);

const list = JSON.parse(fs.readFileSync('history_generation_prompts.json', 'utf8'));

let matchCount = 0;
let replaceCount = 0;

list.forEach(item => {
    let blockStartIdx = content.indexOf('"' + item.unit + '":');
    if (blockStartIdx === -1) blockStartIdx = content.indexOf("'" + item.unit + "':");
    
    if (blockStartIdx !== -1) {
        let blockEndIdx = content.indexOf(']', blockStartIdx);
        let block = content.substring(blockStartIdx, blockEndIdx);
        
        let qEscaped = item.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        let qRegex = new RegExp(`{\\s*["']q["']\\s*:\\s*["']${qEscaped}["'][\\s\\S]*?}`, 'm');
        
        let qMatch = block.match(qRegex);
        if (qMatch) {
            matchCount++;
            let qBlock = qMatch[0];
            let newQBlock = qBlock;
            
            let matchedFile = existingFiles.find(f => f.toLowerCase().includes(item.keyword.toLowerCase().replace(/（.*?）/g, '').trim()) && f.endsWith('.png') && f.includes('h_contemporary'));
            let finalImagePath = '';
            
            if (matchedFile) {
                finalImagePath = 'assets/images/history/' + matchedFile;
            } else {
                const baseName = item.filename.replace('.png', '');
                let newlyGeneratedFile = brainFiles.find(f => f.startsWith(baseName) && f.endsWith('.png'));
                if (newlyGeneratedFile) {
                    finalImagePath = 'assets/images/history/' + newlyGeneratedFile;
                    if (!fs.existsSync(imageDir + newlyGeneratedFile)) {
                       fs.copyFileSync(brainDir + newlyGeneratedFile, imageDir + newlyGeneratedFile);
                    }
                } else if (item.keyword === '竹島') {
                    finalImagePath = 'assets/images/history/h_contemporary_5_takeshima_1773343826348.png';
                }
            }
            
            if (finalImagePath) {
               if (newQBlock.includes('"img":') || newQBlock.includes('"image":') || newQBlock.includes("'img':") || newQBlock.includes("'image':")) {
                   newQBlock = newQBlock.replace(/(["'])(?:img|image)\1\s*:\s*(["']).*?\2/, `"img": "${finalImagePath}"`);
               } else {
                   if(newQBlock.includes('"comment":')) {
                        newQBlock = newQBlock.replace('"comment":', `"img": "${finalImagePath}",\n      "comment":`);
                   } else if(newQBlock.includes("'comment':")) {
                        newQBlock = newQBlock.replace("'comment':", `img: "${finalImagePath}",\n      'comment':`);
                   } else {
                        newQBlock = newQBlock.replace(/\s*\}$/, `,\n      "img": "${finalImagePath}"\n    }`);
                   }
               }
               
               if(newQBlock !== qBlock) {
                  block = block.replace(qBlock, newQBlock);
                  replaceCount++;
               }
            }
        }
        content = content.substring(0, blockStartIdx) + block + content.substring(blockEndIdx);
    }
});

fs.writeFileSync(originalFile, content);
console.log('Matches found:', matchCount, ' Replacements made:', replaceCount);
