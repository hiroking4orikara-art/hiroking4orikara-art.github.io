const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

// The user asked to fix 4 things:
// 1. Geography Japan 3 (gj_3) "世界遺産" 
//   - Currently: IMG: assets/images/history/h_early_modern_1_silver.png 
//   - New: A Japanese World Heritage image. Let's find one in civics images.
// 2. Geography Japan 3 (gj_3) "鹿児島県"
//   - Currently: IMG: assets/images/geography/map_kagoshima_highlighted.png (has text)
//   - New: A textless map. (We'll use grid_map_kyushu_blank_X or generated)
// 3. Geography World 1 (gw_1) "ユーラシア大陸"
//   - Currently: IMG: assets/images/geography/map_eurasia.png 
//   - New: Missing background? We'll map to grid_map_world_blank_eurasia
// 4. Geography World 1 (gw_1) "地中海性気候"
//   - Currently: IMG: assets/images/geography/map_europe_climate.png
//   - New: Missing background? We'll find or generate one.

let replaced = 0;

for(const [k,v] of Object.entries(parsedData)){ 
    v.forEach((item, index) => { 
        if(item.a && item.a.includes('世界遺産')) {
            // Find a world heritage image in civics
            // Since I don't know the exact filename yet, I'll temporarily set it to a known one if it exists or log it
            console.log("Found 世界遺産", k, index);
        }
        if(item.a && item.a.includes('鹿児島県')) {
            console.log("Found 鹿児島県", k, index);
            item.img = "assets/images/geography/g_gw_1_02_eurasia_continent_1773408174374.png"; // Placeholder to overwrite later
        }
        if(item.a && item.a.includes('地中海性気候')) {
            console.log("Found 地中海性気候", k, index);
        }
        if(item.a && item.a.includes('ユーラシア大陸')) {
            console.log("Found ユーラシア大陸", k, index);
        }
    }) 
}
