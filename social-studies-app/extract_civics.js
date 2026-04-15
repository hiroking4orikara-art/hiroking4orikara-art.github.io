require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

// Ensure an API key is available
const apiKey = process.env.GEMINI_API_KEY || '';
if (!apiKey) {
    console.error("No GEMINI_API_KEY found in environment variables. Please set it in a .env file.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

async function extractQuestions(imagePath) {
    const prompt = `あなたは社会科（公民）の問題を作成するアシスタントです。
提供された画像には、中学公民のテスト問題や一問一答が書かれています。
画像から問題を読み取り、以下のJSON形式の配列で出力してください。
JSONのみを出力し、マークダウンのコードブロック(\`\`\`json など)は含めないでください。

[
  {
    "q": "問題文",
    "choices": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], // 4択にします。正解を1つ含み、他はダミーの選択肢を作ってください。
    "a": "正解のテキスト",
    "comment": "解説文。画像から読み取れる解説、または一般的な解説を加えてください。"
  }
]
`;

    const imageParts = [fileToGenerativePart(imagePath, "image/jpeg")];

    try {
        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = response.text();
        return text;
    } catch (error) {
        console.error("Error asking Gemini:", error);
        return null;
    }
}

async function main() {
    const targetDir = path.join(__dirname, '公民', '公民人権と憲法');
    const files = ['k2.jpg', 'k2 (2).jpg', 'k2 (3).jpg']; // Test with 3 files first
    
    let allQuestions = [];
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(`Processing: ${file}...`);
        const imagePath = path.join(targetDir, file);
        const resultText = await extractQuestions(imagePath);
        
        if (resultText) {
            try {
                // Try to parse the output as JSON, strip markdown if necessary
                let cleanText = resultText.replace(/```json/g, '').replace(/```/g, '').trim();
                const parsed = JSON.parse(cleanText);
                allQuestions = allQuestions.concat(parsed);
                console.log(`Successfully extracted ${parsed.length} questions from ${file}.`);
            } catch (e) {
                console.error(`Failed to parse JSON from ${file}. Output was:\n${resultText}`);
            }
        }
        // Small delay to prevent rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    fs.writeFileSync('temp_extracted_civics.json', JSON.stringify(allQuestions, null, 2), 'utf8');
    console.log(`Finished processing. Total questions extracted: ${allQuestions.length}`);
}

main();
