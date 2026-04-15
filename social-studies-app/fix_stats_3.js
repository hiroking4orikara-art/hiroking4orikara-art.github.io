const fs = require('fs');

try {
    let html = fs.readFileSync('index.html', 'utf8');
    
    // Check if back tab is not already there
    if (!html.includes('<div class="stats-tab tab-back"')) {
        html = html.replace(
            '<div class="stats-tab tab-geo active" onclick="app.switchStatsTab(\'geography\')">地理</div>',
            '<div class="stats-tab tab-back" onclick="document.getElementById(\'stats-modal\').style.display=\'none\'" style="font-size: 1.0rem; display: flex; align-items: center; justify-content: center;"><i class="fas fa-arrow-left" style="margin-right: 2px;"></i>戻る</div>\n                    <div class="stats-tab tab-geo active" onclick="app.switchStatsTab(\'geography\')">地理</div>'
        );
        fs.writeFileSync('index.html', html);
        console.log('Updated index.html to include Back tab');
    }

    let css = fs.readFileSync('style.css', 'utf8');
    if (!css.includes('.stats-tab.tab-back')) {
        css += `\n.stats-tab.tab-back { background-color: #95a5a6; color: #fff; }\n.stats-tab.tab-back:active { background-color: #7f8c8d; }`;
        fs.writeFileSync('style.css', css);
        console.log('Updated style.css with Back tab colors');
    }

} catch (e) {
    console.error('Error applying fixes:', e);
}
