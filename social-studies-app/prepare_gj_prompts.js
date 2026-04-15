const fs = require('fs');

const batch1 = JSON.parse(fs.readFileSync('gj_batch_1.json', 'utf8'));

// We will use the generate_image tool manually via the LLM since we don't have a direct API key here.
// But we can format the prompts to feed into the generate_image calls.
const prompts = batch1.map(q => {
    let basePrompt = "";
    if (q.a === "南鳥島") {
       basePrompt = "日本の東端にある島を示す丸いマーカーがあるシンプルな日本地図のイラスト。文字なし。";
    } else if (q.a === "与那国島") {
       basePrompt = "日本の西端にある島を示す丸いマーカーがあるシンプルな日本地図のイラスト。文字なし。";
    } else if (q.a === "排他的経済水域（EEZ）") {
       basePrompt = "日本の周りを囲む広い海域の範囲を示す概念図の日本地図イラスト。海岸からの広いラインが引かれている。文字なし。";
    } else if (q.a === "北方領土") {
       basePrompt = "北海道の北東にある4つの島々の位置を示す赤丸マーカーがあるシンプルな北海道周辺地図のイラスト。文字なし。";
    } else if (q.a === "フォッサマグナ") {
       basePrompt = "日本列島の中央を東西に分ける大きな地溝帯のラインを示す日本地図イラスト。アルプス山脈の近くを太い線が縦断している。文字なし。";
    } else if (q.a === "日本アルプス") {
       basePrompt = "日本の屋根と呼ばれる北・中央・南に連なる雄大な3つの高い山脈のイラスト。空と連なる高い山々。文字なし。";
    } else if (q.a === "扇状地") {
       basePrompt = "川が山地から平野に出る場所に形成された扇の形をした地形のイラスト。果樹園などが広がっている様子を上空から見た地形図風。文字なし。";
    } else if (q.a === "三角州（デルタ）") {
       basePrompt = "川が海に注ぐ河口付近に形成された三角形の平らな地形の鳥瞰イラスト。水田や都市が広がっている様子。文字なし。";
    } else if (q.a === "海溝") {
       basePrompt = "海洋プレートが大陸プレートの下に深く沈み込むことでできるV字型に深くえぐれた海底の断面図イラスト。文字なし。";
    } else if (q.a === "南海トラフ") {
       basePrompt = "日本の太平洋沖に広がる浅い溝状の海底地形（トラフ）を示す日本周辺図イラスト。文字なし。";
    }

    return {
        keyword: q.a,
        filename: `g_japan_geo_batch1_${q.a.replace(/（.*?）/g, '')}`,
        prompt: basePrompt + " クイズアプリ用のシンプルで親しみやすいデザイン。テキストや文字は一切含めないでください。"
    };
});

console.log(JSON.stringify(prompts, null, 2));
