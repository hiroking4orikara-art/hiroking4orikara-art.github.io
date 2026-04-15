const fs = require('fs');
const readline = require('readline');

async function checkFile() {
    const fileStream = fs.createReadStream('quiz_data.js');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let lineCount = 0;
    let maxLineLength = 0;
    let maxLineNum = 0;
    let firstFewLines = [];

    for await (const line of rl) {
        lineCount++;
        if (line.length > maxLineLength) {
            maxLineLength = line.length;
            maxLineNum = lineCount;
        }
        if (lineCount <= 10) {
            firstFewLines.push(`[Line ${lineCount}] length=${line.length}: ${line.substring(0, 100)}...`);
        }
    }

    console.log(`--- File Analysis Result ---`);
    console.log(`Total lines: ${lineCount}`);
    console.log(`Max line length: ${maxLineLength} (at line ${maxLineNum})`);
    console.log(`\nFirst 10 lines preview:`);
    console.log(firstFewLines.join('\n'));
}

checkFile().catch(console.error);
