const fs = require('fs');

try {
    let scriptContent = fs.readFileSync('script.js', 'utf8');

    const newRenderStats = `app.renderStats = function() {
    // Default to history tab when opening, or geography
    this.switchStatsTab('hist');
};

app.switchStatsTab = function(tabId) {
    // Determine subject from tabId
    let subject = 'history';
    if (tabId === 'geo') subject = 'geography';
    if (tabId === 'civ') subject = 'civics';

    // Update active tab buttons
    document.querySelectorAll('.stats-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.classList.contains('tab-' + tabId)) {
            tab.classList.add('active');
        }
    });

    // Update wrapper background class
    const wrapper = document.getElementById('stats-content-wrapper');
    if (wrapper) {
        wrapper.className = 'stats-content-wrapper'; // reset
        wrapper.classList.add('bg-' + tabId);
    }

    // Render content for subject
    const container = document.getElementById('stats-content');
    if (!container) return;
    container.innerHTML = '';

    const UNIT_DATA_SRC = typeof UNIT_DATA !== 'undefined' ? UNIT_DATA : (window.UNIT_DATA || {});
    if (!UNIT_DATA_SRC[subject]) return;

    let html = '';
    UNIT_DATA_SRC[subject].forEach(branch => {
        let displayTitle = branch.title;
        if (subject === 'history' && !displayTitle.includes('☆')) {
             displayTitle = '☆' + displayTitle;
        }

        html += \`<div class="stats-chapter-block">
                    <div class="stats-chapter-title">\${displayTitle}</div>\`;
        
        if (branch.units) {
            branch.units.forEach(unit => {
                const hId = \`quiz_history_\${unit.id}\`;
                const history = JSON.parse(localStorage.getItem(hId) || '{}');
                let answeredVars = Object.keys(history).length;
                
                let totalQ = 0;
                if (window.QUIZ_DATA && typeof QUIZ_DATA !== 'undefined' && QUIZ_DATA[unit.id]) {
                    totalQ = QUIZ_DATA[unit.id].length;
                } else if (unit.count) {
                    totalQ = unit.count;
                }
                
                if (totalQ === 0) return; // skip empty units
                if (answeredVars > totalQ) answeredVars = totalQ; // cap 

                let percent = Math.floor((answeredVars / totalQ) * 100);
                
                html += \`<div class="stats-unit-item">
                            <div class="stats-unit-name">\${unit.title} (\${totalQ}問中\${answeredVars}問)</div>
                            <div class="stats-unit-progress-container">
                                <div class="stats-unit-progress-bar" style="width: \${percent}%;"></div>
                            </div>
                            <div class="stats-unit-percent">\${percent}%</div>
                         </div>\`;
            });
        }
        html += \`</div>\`;
    });
    
    container.innerHTML = html;
};`;

    // Regex to replace the old app.renderStats block (from app.renderStats = function ... to the next window.onload)
    // Looking at the view_file output, app.renderStats is defined right before window.onload
    
    // Replace logic:
    // It's safer to just split by "app.renderStats = function() {" and "window.onload = () => app.init();"
    let parts = scriptContent.split('app.renderStats = function() {');
    if (parts.length > 1) {
        let endParts = parts[1].split('window.onload = () => app.init();');
        if (endParts.length > 1) {
            scriptContent = parts[0] + newRenderStats + '\n\nwindow.onload = () => app.init();' + endParts[1];
            fs.writeFileSync('script.js', scriptContent);
            console.log('Successfully updated script.js');
        } else {
            console.error('Could not find window.onload');
        }
    } else {
        console.error('Could not find app.renderStats');
    }
} catch (e) {
    console.error('Error:', e);
}
