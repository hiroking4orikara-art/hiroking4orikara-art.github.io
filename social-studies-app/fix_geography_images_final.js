const fs = require('fs');

let t = fs.readFileSync('quiz_data.js', 'utf8');

// The new files found:
// g_special_eurasia_map_1773760492277.png
// g_special_kagoshima_blank_1773760535098.png
// g_special_mediterranean_climate_1773760512743.png
// g_geo_world_heritage_fixed.png

t = t.replace(/"assets\/images\/geography\/g_gw_1_02_eurasia_continent_1773408174374\.png"/g, '"assets/images/geography/g_special_eurasia_map_1773760492277.png"');
t = t.replace(/"assets\/images\/geography\/g_gw_1_02_eurasia_continent_1773408160032\.png"/g, '"assets/images/geography/g_special_eurasia_map_1773760492277.png"');

t = t.replace(/"assets\/images\/geography\/g_gw_1_25_mediterranean_climate_1773408807615\.png"/g, '"assets/images/geography/g_special_mediterranean_climate_1773760512743.png"');
t = t.replace(/"assets\/images\/geography\/g_gw_1_139_mediterranean_climate_1773418201366\.png"/g, '"assets/images/geography/g_special_mediterranean_climate_1773760512743.png"');

t = t.replace(/"assets\/images\/geography\/g_gw_3_13_world_heritage_1773376518742\.png"/g, '"assets/images/geography/g_geo_world_heritage_fixed.png"');

t = t.replace(/"assets\/images\/geography\/map_kagoshima_highlighted\.png"/g, '"assets/images/geography/g_special_kagoshima_blank_1773760535098.png"');
t = t.replace(/"assets\/images\/geography\/g_geo_kagoshima_no_text\.png"/g, '"assets/images/geography/g_special_kagoshima_blank_1773760535098.png"');

fs.writeFileSync('quiz_data.js', t, 'utf8');

console.log("Images replaced in quiz_data.js");
