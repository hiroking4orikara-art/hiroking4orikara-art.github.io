const fs = require('fs');

const missingData = JSON.parse(fs.readFileSync('missing_gj_detailed.json', 'utf8'));

const batchSize = 40;
const currentBatch = missingData.slice(0, batchSize);

fs.writeFileSync('gj_batch_5.json', JSON.stringify(currentBatch, null, 2));

const prompts = currentBatch.map((q, idx) => {
    let kw = q.a.replace(/（.*?）/g, ''); // Remove parenthesis content
    
    // Create an english form generic
    let genericSlug = 'item_' + (idx + 1);

    let desc = `日本地理の「${kw}」に関連する風景や特徴を表すイラスト。`;
    if (q.q.includes('気候')) desc = `日本地理の「${kw}」の気候を表現する風景イラスト。`;
    if (q.q.includes('工業') || q.q.includes('産業')) desc = `日本地理の「${kw}」の工業の様子を表す風景イラスト。`;
    if (q.q.includes('農業')) desc = `日本地理の「${kw}」に関連する農業や特産品のイラスト。`;
    if (q.q.includes('地形') || q.q.includes('川') || q.q.includes('山') || q.q.includes('平原')) desc = `日本地理の「${kw}」の自然地形を示す美しい風景イラスト。`;
    if (q.q.includes('問題')) desc = `日本地理の「${kw}」の環境問題や社会問題を表現する概念図イラスト。`;
    
    let prompt = `${desc}文字なし。 クイズアプリ用のシンプルで親しみやすいデザイン。テキストや文字は一切含めないでください。`;

    return {
        keywordRaw: q.a,
        filename: `g_japan_geo_batch5_${genericSlug}`,
        prompt: prompt
    };
});

fs.writeFileSync('gj_batch_5_prompts.json', JSON.stringify(prompts, null, 2));

console.log(`Saved ${prompts.length} prompts for Batch 5 to gj_batch_5_prompts.json`);
