const fs = require('fs');

const batch2 = JSON.parse(fs.readFileSync('gj_batch_2.json', 'utf8'));

const prompts = batch2.map(q => {
    let kw = q.a.replace(/（.*?）/g, '');
    let prompt = "";
    
    // Determine the type of image from the question/answer
    if (q.q.includes("気候") || q.a.includes("気候")) {
         prompt = `日本地理の「${kw}」の気候を表現する風景イラスト。季節感や天候の特徴が分かる風景。文字なし。`;
    } else if (q.q.includes("山") || q.a.includes("山")) {
         prompt = `日本地理の「${kw}」の地形を表す風景イラスト。山の連なりや自然の姿。文字なし。`;
    } else if (q.q.includes("川") || q.a.includes("川") || q.a.includes("平野") || q.a.includes("盆地")) {
         prompt = `日本地理の「${kw}」の地形を表す鳥瞰イラスト。川の流れや平野の広がり、農業の様子など。文字なし。`;
    } else if (q.q.includes("海") || q.q.includes("湾") || q.a.includes("海流") || q.a.includes("潮")) {
         prompt = `日本地理の「${kw}」を示す海や海岸線の様子、または海流のイメージイラスト。文字なし。`;
    } else if (q.q.includes("県") || q.q.includes("地方")) {
         prompt = `日本の「${kw}」の位置を示す丸いマーカーがあるシンプルな地図のイラスト。文字なし。`;
    } else if (q.q.includes("農業") || q.q.includes("栽培") || q.q.includes("生産")) {
         prompt = `日本地理の「${kw}」に関連する特産物や農業風景のイラスト。文字なし。`;
    } else if (q.q.includes("工業") || q.q.includes("地帯")) {
         prompt = `日本地理の「${kw}」に関連する工業地帯や工場の風景イラスト。文字なし。`;
    } else {
         prompt = `日本地理の「${kw}」に関連する風景や特徴を表すイラスト。文字なし。`;
    }
    
    prompt += " クイズアプリ用のシンプルで親しみやすいデザイン。テキストや文字は一切含めないでください。";
    
    // Add an english filename slug mapping mapping manually later
    // or just use romaji/translated names
    let filenameSlug = kw; // Will process manually or just use Japanese string

    return {
        keyword: kw,
        filename: `g_japan_geo_batch2_${kw}`,
        prompt: prompt
    };
});

// Since sending raw Japanese characters in filenames can sometimes cause issues in Windows file systems depending on encoding,
// it's highly recommended to map these to simple romaji or english slugs.
const slugMap = {
    "黒潮": "kuroshio",
    "親潮": "oyashio",
    "対馬海流": "tsushima_current",
    "千島海流": "chishima_current",
    "リマン海流": "liman_current",
    "季節風": "monsoon",
    "梅雨": "tsuyu",
    "太平洋側": "pacific_side",
    "日本海側": "sea_of_japan_side",
    "瀬戸内": "setouchi",
    "中央高地": "central_highland",
    "南西諸島": "nansei_islands",
    "やませ": "yamase",
    "ヒートアイランド現象": "heat_island",
    "少子高齢化": "aging_population",
    "過疎化": "depopulation",
    "三大都市圏": "three_major_metropolitan",
    "地方中枢都市": "regional_hub",
    "政令指定都市": "ordinance_designated_city",
    "ニュータウン": "new_town",
    "食料自給率": "food_self_sufficiency",
    "近郊農業": "suburban_agriculture",
    "促成栽培": "forcing_culture",
    "抑制栽培": "retarding_culture",
    "施設園芸農業": "greenhouse_horticulture",
    "果樹栽培": "fruit_growing",
    "銘柄米": "brand_rice",
    "栽培漁業": "cultivating_fishery",
    "養殖漁業": "aquaculture",
    "遠洋漁業": "pelagic_fishery",
    "沖合漁業": "offshore_fishery",
    "沿岸漁業": "coastal_fishery",
    "太平洋ベルト": "pacific_belt",
    "四大工業地帯": "four_major_industrial_zones",
    "京浜工業地帯": "keihin_industrial",
    "中京工業地帯": "chukyo_industrial",
    "阪神工業地帯": "hanshin_industrial",
    "北九州工業地帯": "kitakyushu_industrial",
    "加工貿易": "processing_trade",
    "再生可能エネルギー": "renewable_energy"
};

const finalPrompts = prompts.map(p => {
    let bestSlug = slugMap[p.keyword];
    if (!bestSlug) {
        // Fallback or basic cleaning
        bestSlug = p.keyword;
    }
    return {
        keyword: p.keyword,
        filename: `g_japan_geo_batch2_${bestSlug}`,
        prompt: p.prompt
    };
});

fs.writeFileSync('gj_batch_2_prompts.json', JSON.stringify(finalPrompts, null, 2), 'utf8');
console.log('Saved 40 prompts to gj_batch_2_prompts.json');
