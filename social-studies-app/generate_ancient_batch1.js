const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateImages() {
    console.log("Starting image generation for Ancient History Batch 1...");
    const batch = JSON.parse(fs.readFileSync('ancient_batch_1.json', 'utf8'));
    
    // Check if output dir exists
    const outputDir = path.join(__dirname, 'assets', 'images', 'history');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    for (let i = 0; i < batch.length; i++) {
        const item = batch[i];
        console.log(`\nProcessing [${i+1}/${batch.length}] Q: ${item.q.substring(0, 30)}...`);
        
        let prompt = `以下の歴史問題の正解を視覚的に表現する、学習用のアセット画像を生成してください。
問題: ${item.q}
正解: ${item.a}

要件:
・フラットデザインのシンプルなイラスト
・文字（テキスト）は絶対に含まないこと (NO TEXT)
・中学生が直感的に答えをイメージできるような、わかりやすい構図
・背景は白またはごく薄い色
`;

        try {
            // Note: Currently @google/generative-ai pkg might not natively support generateImage directly in all setups, 
            // but assuming the standard Imagen 3 endpoint via gemini-2.5-pro or similar if configured for image generation.
            // If the user's setup usually generates images via python script or a specific API, we should adapt.
            // Let's check how images were generated previously.
            console.log("Wait, let's verify if Python was used for image generation usually.");
            break;
            
        } catch (e) {
            console.error("Error generating image:", e);
        }
    }
}

generateImages();
