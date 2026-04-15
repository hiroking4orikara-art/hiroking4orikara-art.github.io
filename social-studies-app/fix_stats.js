const fs = require('fs');

try {
    let scriptContent = fs.readFileSync('script.js', 'utf8');

    const newRenderStats = `app.renderStats = function() {
    // Default to geography tab when opening
    this.switchStatsTab('geography');
};

app.switchStatsTab = function(subject) {
    let tabId = 'hist';
    if (subject === 'geography') tabId = 'geo';
    if (subject === 'civics') tabId = 'civ';

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

        html += \`<div class="stats-chapter-block" style="margin-bottom: 25px;">
                    <div class="stats-chapter-title" style="margin-bottom: 10px; font-size: 1.3rem;">\${displayTitle}</div>\`;
        
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
                
                html += \`<div class="stats-unit-item" style="display: flex; flex-direction: column; align-items: stretch; margin-bottom: 15px; background: rgba(0,0,0,0.1); padding: 10px; border-radius: 8px;">
                            <div class="stats-unit-name" style="margin-bottom: 8px; font-size: 1.05rem;">\${unit.title} (\${totalQ}問中\${answeredVars}問)</div>
                            <div class="stats-unit-progress-row" style="display: flex; align-items: center; width: 100%;">
                                <div class="stats-unit-progress-container" style="flex: 1; height: 16px; background: #eee; border-radius: 8px; overflow: hidden; margin-right: 15px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);">
                                    <div class="stats-unit-progress-bar" style="height: 100%; background: #4a90e2; width: \${percent}%; transition: width 0.5s ease;"></div>
                                </div>
                                <div class="stats-unit-percent" style="flex: 0 0 45px; text-align: right; font-weight: bold; font-size: 1.1rem;">\${percent}%</div>
                            </div>
                         </div>\`;
            });
        }
        html += \`</div>\`;
    });
    
    container.innerHTML = html;
};`;

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
