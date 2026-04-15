const fs = require('fs');
const readline = require('readline');

async function findQuestions() {
    const fileStream = fs.createReadStream('quiz_data.js');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const keywords = [
        "西岸に沿って連なる",
        "東部に位置する、比較的なだらかな山脈",
        "アメリカ合衆国の中央部を南へ流れ",
        "５つの湖の総称",
        "経度約100度の経線"
    ];

    let lineCount = 0;
    for await (const line of rl) {
        lineCount++;
        for (const word of keywords) {
            if (line.includes(word)) {
                console.log(`Line ${lineCount}: ${line.trim()}`);
            }
        }
    }
}

findQuestions().catch(console.error);
