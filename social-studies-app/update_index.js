const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldModalHtml = `        <!-- Stats Modal (Simple version) -->\n        <div id="stats-modal" class="modal">\n            <div class="modal-content stats-modal-content">\n                <span id="close-stats-modal" class="close-modal-btn">&times;</span>\n                <h2>学習の記録</h2>\n                <div id="stats-content" class="stats-list">\n                    <p>データ読み込み中...</p>\n                </div>\n            </div>\n        </div>`;

const newModalHtml = `        <!-- Stats Modal (Tabbed version) -->
        <div id="stats-modal" class="modal">
            <div class="modal-content stats-modal-wrap" style="background: transparent; padding: 0; box-shadow: none;">
                <span id="close-stats-modal" class="close-modal-btn" style="color: white; top: -35px; right: 0; z-index: 10;">&times;</span>
                <div class="stats-tabs">
                    <div class="stats-tab tab-geo active" onclick="app.switchStatsTab('geography')">地理</div>
                    <div class="stats-tab tab-hist" onclick="app.switchStatsTab('history')">歴史</div>
                    <div class="stats-tab tab-civ" onclick="app.switchStatsTab('civics')">公民</div>
                </div>
                <div id="stats-content-wrapper" class="stats-content-wrapper bg-geo" style="background-color: #8cdce8;">
                    <div id="stats-content" class="stats-list">
                        <p>データ読み込み中...</p>
                    </div>
                </div>
            </div>
        </div>`;

// Use simple replace for "<h2>学習の記録</h2>" if the full block fails
if (html.includes(oldModalHtml)) {
    html = html.replace(oldModalHtml, newModalHtml);
} else {
    // Try regex roughly
    html = html.replace(/<!-- Stats Modal \(Simple version\) -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, newModalHtml);
}
fs.writeFileSync('index.html', html);


let css = fs.readFileSync('style.css', 'utf8');
if (!css.includes('.stats-tabs')) {
    css += `
/* --- New Stats Tab Styles --- */
.stats-modal-wrap {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
}
.stats-tabs {
    display: flex;
    width: 100%;
}
.stats-tab {
    flex: 1;
    padding: 10px 5px;
    text-align: center;
    border: 2px solid #555;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    background-color: #ccc;
    color: white;
    margin-right: -2px; /* overlap right border */
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    border-bottom: none;
    transition: all 0.2s;
}
.stats-tab:last-child {
    margin-right: 0;
}
.stats-tab.tab-geo { background-color: #a7e4ee; color: #fff; }
.stats-tab.tab-hist { background-color: #f1b6b6; color: #fff; }
.stats-tab.tab-civ { background-color: #dca3f2; color: #fff; }

.stats-tab.active {
    z-index: 2;
    position: relative;
    padding-bottom: 12px;
}
.stats-tab.tab-geo.active { background-color: #8cdce8; }
.stats-tab.tab-hist.active { background-color: #e89898; }
.stats-tab.tab-civ.active { background-color: #cb81e8; }

.stats-content-wrapper {
    border: 2px solid #555;
    border-radius: 0 0 10px 10px;
    padding: 15px;
    z-index: 1;
    position: relative;
    min-height: 400px;
    max-height: 60vh;
    overflow-y: auto;
    background-color: #fff;
}
.stats-content-wrapper.bg-geo { background-color: #8cdce8; }
.stats-content-wrapper.bg-hist { background-color: #e89898; }
.stats-content-wrapper.bg-civ { background-color: #cb81e8; }

/* Styles for stats items inside tabs */
.stats-chapter-block {
    margin-bottom: 20px;
    text-align: left;
    color: white;
    font-weight: bold;
}
.stats-chapter-title {
    font-size: 1.2rem;
    margin-bottom: 5px;
}
.stats-unit-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.95rem;
    margin-bottom: 5px;
}
.stats-unit-name {
    flex: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.stats-unit-progress-container {
    flex: 1;
    height: 12px;
    background: #444;
    border: 1px solid #333;
    position: relative;
    margin: 0 10px;
}
.stats-unit-progress-bar {
    height: 100%;
    background: #3b5998; /* Dark blue progress bar from image */
}
.stats-unit-percent {
    flex: 0 0 35px;
    text-align: right;
}
`;
    fs.writeFileSync('style.css', css);
}

console.log("Updated index.html and style.css");
