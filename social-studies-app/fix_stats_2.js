const fs = require('fs');

try {
    // 1. Fix index.html
    let html = fs.readFileSync('index.html', 'utf8');
    
    // Remove the inline style from the stats-content-wrapper
    html = html.replace(/<div id="stats-content-wrapper" class="stats-content-wrapper bg-geo" style="background-color: #8cdce8;">/g, 
                        '<div id="stats-content-wrapper" class="stats-content-wrapper bg-geo">');
                        
    fs.writeFileSync('index.html', html);

    // 2. Fix style.css
    let css = fs.readFileSync('style.css', 'utf8');
    
    // Update stats-modal-wrap
    if (css.includes('.stats-modal-wrap {') && !css.includes('width: 100%; /* updated */')) {
        css = css.replace(
            /\.stats-modal-wrap\s*\{[\s\S]*?\}/,
            `.stats-modal-wrap {\n    width: 100%; /* updated */\n    max-width: 100%;\n    margin: 0;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 50px; /* Safe area */\n}`
        );
    }
    
    if (css.includes('.stats-content-wrapper {') && !css.includes('border-radius: 0; /* updated */')) {
        css = css.replace(
            /\.stats-content-wrapper\s*\{[\s\S]*?\}/,
            `.stats-content-wrapper {\n    border: none;\n    border-radius: 0; /* updated */\n    padding: 15px;\n    z-index: 1;\n    position: relative;\n    flex: 1;\n    overflow-y: auto;\n    background-color: #fff;\n}`
        );
    }
    
    if (css.includes('.stats-tab {') && !css.includes('border-radius: 15px 15px 0 0; /* updated */')) {
        css = css.replace(
            /\.stats-tab\s*\{[\s\S]*?\}/,
            `.stats-tab {\n    flex: 1;\n    padding: 15px 5px;\n    text-align: center;\n    border: 2px solid #555;\n    border-bottom: none;\n    border-radius: 15px 15px 0 0; /* updated */\n    font-weight: bold;\n    font-size: 1.2rem;\n    cursor: pointer;\n    background-color: #ccc;\n    color: white;\n    margin-right: -2px;\n    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);\n    transition: all 0.2s;\n}`
        );
    }
    
    fs.writeFileSync('style.css', css);

    // 3. Fix script.js
    let scriptContent = fs.readFileSync('script.js', 'utf8');

    // Add Reset logic to app.renderStats at the end
    let renderStatsReplacement = `app.renderStats = function() {
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
                    <div class="stats-chapter-title" style="margin-bottom: 10px; font-size: 1.3rem; border-bottom: 2px solid rgba(255,255,255,0.5); padding-bottom: 5px;">\${displayTitle}</div>\`;
        
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
                
                html += \`<div class="stats-unit-item" style="display: flex; flex-direction: column; align-items: stretch; margin-bottom: 15px; background: rgba(255,255,255,0.2); padding: 15px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                            <div class="stats-unit-name" style="margin-bottom: 12px; font-size: 1.1rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">\${unit.title} (\${totalQ}問中\${answeredVars}問)</div>
                            <div class="stats-unit-progress-row" style="display: flex; align-items: center; width: 100%;">
                                <div class="stats-unit-progress-container" style="flex: 1; height: 16px; background: rgba(0,0,0,0.2); border-radius: 8px; overflow: hidden; margin-right: 15px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);">
                                    <div class="stats-unit-progress-bar" style="height: 100%; background: #fff; width: \${percent}%; transition: width 0.5s ease; box-shadow: 0 0 5px rgba(255,255,255,0.5);"></div>
                                </div>
                                <div class="stats-unit-percent" style="flex: 0 0 45px; text-align: right; font-weight: bold; font-size: 1.2rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">\${percent}%</div>
                            </div>
                         </div>\`;
            });
        }
        html += \`</div>\`;
    });
    
    // Add Reset Button at the bottom
    html += \`<div style="margin-top: 40px; margin-bottom: 20px; text-align: center;">
                <button onclick="app.resetStatsData()" style="background-color: #e74c3c; color: white; border: none; padding: 15px 30px; font-size: 1.2rem; font-weight: bold; border-radius: 30px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.2); font-family: 'Zen Kurenaido', sans-serif;">
                    <i class="fas fa-trash-alt"></i> 学習の記録をリセット
                </button>
             </div>\`;
    
    container.innerHTML = html;
};

app.resetStatsData = function() {
    if (confirm('学習の記録をリセットしますか？')) {
        // Find and remove all quiz_history keys
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('quiz_history_')) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(k => localStorage.removeItem(k));
        
        // Also remove activity count
        if (this.currentUser) {
            localStorage.removeItem('social_activity_' + this.currentUser);
        }
        
        alert('学習の記録をリセットしました。');
        
        // Ensure UI updates properly by re-rendering active tab
        let currentSubject = 'geography';
        const geoTab = document.querySelector('.stats-tab.tab-geo');
        const histTab = document.querySelector('.stats-tab.tab-hist');
        const civTab = document.querySelector('.stats-tab.tab-civ');
        
        if (histTab && histTab.classList.contains('active')) currentSubject = 'history';
        if (civTab && civTab.classList.contains('active')) currentSubject = 'civics';
        
        this.switchStatsTab(currentSubject);
    }
};`;

    let parts = scriptContent.split('app.renderStats = function() {');
    if (parts.length > 1) {
        let endParts = parts[1].split('window.onload = () => app.init();');
        if (endParts.length > 1) {
            scriptContent = parts[0] + renderStatsReplacement + '\n\nwindow.onload = () => app.init();' + endParts[1];
            
            // Check if app.resetStatsData is already in parts[0] -> remove it -> not needed, app is an object, but we are just appending to script.
            // Oh, script.js assigns app... wait, parts[0] has `const app = {`. We are just appending functions to app before window.onload.
            // Wait, previous fix_stats.js might have added app.resetStatsData? No, it didn't.
            fs.writeFileSync('script.js', scriptContent);
            console.log('Successfully updated script.js');
        } else {
            console.error('Could not find window.onload in script.js');
        }
    } else {
        console.error('Could not find app.renderStats in script.js');
    }

} catch (e) {
    console.error('Error applying fixes:', e);
}
