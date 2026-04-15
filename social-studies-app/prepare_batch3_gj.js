const fs = require('fs');

const batch3 = JSON.parse(fs.readFileSync('gj_batch_3.json', 'utf8'));

const slugMap = {
    // Leftovers from Batch 2
    "奥羽山脈": "ou_mountains",
    "北海道の気候": "hokkaido_climate",
    "人口密度": "population_density",
    "人口爆発": "population_explosion",
    "ライフライン": "lifeline",
    "減災": "disaster_mitigation",
    "公助": "public_assistance",
    "鉄鉱石": "iron_ore",
    "ボーキサイト": "bauxite",
    "LNG（液化天然ガス）": "lng",
    "レアメタル（希少金属）": "rare_metal",
    "石炭": "coal",
    "エネルギーミックス": "energy_mix",
    "二酸化炭素（CO2）": "co2",
    "フロンガス": "cfc",
    "オゾン層": "ozone_layer",
    "酸性雨": "acid_rain",
    "三大都市圏": "three_major_metropolitan",
    "衛星都市（ベッドタウン）": "bed_town",
    "過密": "overcrowding",
    "ドーナツ化現象": "doughnut_phenomenon",
    "都心回帰": "return_to_city_center",
    "第一次ベビーブーム": "first_baby_boom",
    "減反政策（生産調整）": "acreage_reduction",
    "二期作": "double_cropping",
    // New batch items
    "地産地消": "local_consumption",
    "フードマイレージ": "food_mileage",
    "BSE（牛海綿状脳症）": "bse",
    "鳥インフルエンザ": "avian_flu",
    "遺伝子組み換え作物": "gmo",
    "有機農業": "organic_farming",
    "スマート農業": "smart_agriculture",
    "沖合漁業": "offshore_fishery",
    "沿岸漁業": "coastal_fishery",
    "遠洋漁業": "pelagic_fishery",
    "栽培漁業": "cultivating_fishery",
    "養殖漁業": "aquaculture",
    "水産資源": "marine_resources",
    "排他的経済水域（EEZ）": "eez"
};

const prompts = batch3.map(q => {
    let kwRaw = q.a;
    let kw = kwRaw.replace(/（.*?）/g, '');
    let prompt = "";
    
    // Determine the type of image from the question/answer
    if (q.q.includes("気候") || q.a.includes("気候")) {
         prompt = `日本地理の「${kw}」の気候を表現する風景イラスト。季節感や天候の特徴が分かる風景。文字なし。`;
    } else if (q.q.includes("山") || q.a.includes("山脈")) {
         prompt = `日本地理の「${kw}」の地形を表す風景イラスト。山の連なりや自然の姿。文字なし。`;
    } else if (q.q.includes("人口") || q.a.includes("人口")) {
         prompt = `日本地理の「${kw}」に関連する人々の暮らしや社会を視覚化した概念図イラスト。文字なし。`;
    } else if (q.q.includes("都市") || q.a.includes("都市")) {
         prompt = `日本地理の「${kw}」に関連する都市や街の風景イラスト。文字なし。`;
    } else if (q.q.includes("農業") || q.q.includes("栽培") || q.q.includes("生産")) {
         prompt = `日本地理の「${kw}」に関連する特産物や農業風景のイラスト。文字なし。`;
    } else if (q.q.includes("鉱山") || q.q.includes("資源") || q.a.includes("石") || q.a.includes("エネルギー")) {
         prompt = `日本地理の「${kw}」に関連する鉱産資源やエネルギーのイラスト。文字なし。`;
    } else if (q.q.includes("公害") || q.a.includes("雨") || q.a.includes("ガス")) {
         prompt = `日本地理の環境問題「${kw}」の恐ろしさや影響を表す風景イラスト。文字なし。`;
    } else {
         prompt = `日本地理の「${kw}」に関連する風景や特徴を表すイラスト。文字なし。`;
    }
    
    prompt += " クイズアプリ用のシンプルで親しみやすいデザイン。テキストや文字は一切含めないでください。";
    
    let bestSlug = slugMap[kwRaw] || slugMap[kw] || kw;

    return {
        keywordRaw: kwRaw,
        filename: `g_japan_geo_batch3_${bestSlug}`,
        prompt: prompt
    };
});

fs.writeFileSync('gj_batch_3_prompts.json', JSON.stringify(prompts, null, 2), 'utf8');
console.log('Saved 40 prompts to gj_batch_3_prompts.json');
