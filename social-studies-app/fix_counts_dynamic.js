const fs = require('fs');

let s = fs.readFileSync('script.js', 'utf8');

const regexshowBranch = /showBranchSelectScreen\s*\([\s\S]*?switchScreen\('sub-category-screen'\);\s*\}/s;

const replacement_showBranch = `showBranchSelectScreen(subject) {
        const branches = UNIT_DATA[subject];
        let title = "分野を選んでください";
        document.getElementById('sub-category-title').innerText = title;
        
        const menuGrid = document.querySelector('#sub-category-screen .menu-grid');
        menuGrid.innerHTML = ''; 

        branches.forEach(branch => {
            const btn = document.createElement('button');
            btn.className = 'menu-card';
            btn.onclick = () => app.selectBranch(branch.id);
            const iconClass = branch.icon || 'fas fa-book-open';
            btn.innerHTML = \`
                <i class="\${iconClass}"></i>
                <span>\${branch.title}</span>
            \`;
            menuGrid.appendChild(btn);
        });

        // Add "Challenge All" buttons for Geography
        if (subject === 'geography') {
            // 1. World Geography Challenge
            let totalWorld = 0;
            const worldBranch = UNIT_DATA['geography'].find(b => b.id === 'g_world');
            if (worldBranch && worldBranch.units) {
                worldBranch.units.forEach(u => {
                    if (window.QUIZ_DATA && QUIZ_DATA[u.id]) totalWorld += QUIZ_DATA[u.id].length;
                });
            }

            const btnWorld = document.createElement('button');
            btnWorld.className = 'menu-card';
            btnWorld.style.border = "3px solid #e67e22";
            btnWorld.style.backgroundColor = "#fff8e1";
            btnWorld.onclick = () => app.startQuiz('gw_exam');
            btnWorld.innerHTML = \`
                <i class="fas fa-globe" style="color: #d35400;"></i>
                <span style="color: #d35400; font-weight: bold;">世界地理<br>総復習<br><small style="font-size:0.8rem;">(全\${totalWorld}問)</small></span>
            \`;
            menuGrid.appendChild(btnWorld);

            // 2. Japan Geography Challenge
            let totalJapan = 0;
            const japanBranch = UNIT_DATA['geography'].find(b => b.id === 'g_japan');
            if (japanBranch && japanBranch.units) {
                japanBranch.units.forEach(u => {
                    if (window.QUIZ_DATA && QUIZ_DATA[u.id]) totalJapan += QUIZ_DATA[u.id].length;
                });
            }

            const btnJapan = document.createElement('button');
            btnJapan.className = 'menu-card';
            btnJapan.style.border = "3px solid #e67e22";
            btnJapan.style.backgroundColor = "#fff8e1";
            btnJapan.onclick = () => app.startQuiz('gj_exam');
            btnJapan.innerHTML = \`
                <i class="fas fa-map" style="color: #d35400;"></i>
                <span style="color: #d35400; font-weight: bold;">日本地理<br>総復習<br><small style="font-size:0.8rem;">(全\${totalJapan}問)</small></span>
            \`;
            menuGrid.appendChild(btnJapan);
        }

        // Add "Challenge All History" button if subject is history
        if (subject === 'history') {
             let totalQ = 0;
             if (UNIT_DATA['history']) {
                UNIT_DATA['history'].forEach(b => {
                    b.units.forEach(u => {
                        if (window.QUIZ_DATA && QUIZ_DATA[u.id]) totalQ += QUIZ_DATA[u.id].length;
                    });
                });
             }

            const btn = document.createElement('button');
            btn.className = 'menu-card';
            btn.style.border = "3px solid #e67e22";
            btn.style.backgroundColor = "#fff8e1";
            btn.onclick = () => app.startQuiz('h_exam_all');
            btn.innerHTML = \`
                <i class="fas fa-scroll" style="color: #d35400;"></i>
                <span style="color: #d35400; font-weight: bold;">歴史全問チャレンジ<br><small style="font-size:0.8rem;">(全\${totalQ}問)</small></span>
            \`;
            menuGrid.appendChild(btn);
        }

        // Add "Challenge All Civics" button if subject is civics
        if (subject === 'civics') {
             let totalQ = 0;
             if (UNIT_DATA['civics']) {
                UNIT_DATA['civics'].forEach(b => {
                    b.units.forEach(u => {
                        if (window.QUIZ_DATA && QUIZ_DATA[u.id]) totalQ += QUIZ_DATA[u.id].length;
                    });
                });
             }

            const btn = document.createElement('button');
            btn.className = 'menu-card';
            btn.style.border = "3px solid #e67e22";
            btn.style.backgroundColor = "#fff8e1";
            btn.onclick = () => app.startQuiz('c_exam_all');
            btn.innerHTML = \`
                <i class="fas fa-balance-scale" style="color: #d35400;"></i>
                <span style="color: #d35400; font-weight: bold;">公民全問チャレンジ<br><small style="font-size:0.8rem;">(全\${totalQ}問)</small></span>
            \`;
            menuGrid.appendChild(btn);
        }

        this.switchScreen('sub-category-screen');
    }`;

// Wait, the previous view_file showed there is also a bug in renderUnits.
const regexrenderUnits = /renderUnits\s*\(units\)\s*\{[\s\S]*?\}\s*,\s*openMaterial/s;

const replacement_renderUnits = `renderUnits(units) {
        const listContainer = document.getElementById('unit-list');
        listContainer.innerHTML = '';

        if (!units || units.length === 0) {
            listContainer.innerHTML = '<p style="text-align:center;">この章にはまだ単元がありません</p>';
            return;
        }

        units.forEach(unit => {
            const el = document.createElement('div');
            el.className = 'unit-item';
            
            // Fix: Actually count the questions dynamically instead of relying on hardcoded static counts.
            let c = 0;
            if (window.QUIZ_DATA && QUIZ_DATA[unit.id]) c = QUIZ_DATA[unit.id].length;

            el.innerHTML = \`
                <div class="unit-header">
                    <span class="unit-title">\${unit.title} <span class="unit-count">(全\${c}問)</span></span>
                </div>
                <div class="unit-controls">
                    <button class="unit-btn btn-video" onclick="app.playVideo('\${unit.id}')">
                        <i class="fas fa-play"></i> 動画
                    </button>
                    <button class="unit-btn btn-quiz" onclick="app.startQuiz('\${unit.id}')">
                        <i class="fas fa-pencil-alt"></i> クイズ
                    </button>
                </div>
            \`;
            listContainer.appendChild(el);
        });

        // Special "Challenge All" button for Civics (since it skips sub-category screen)
        if (this.state.currentSubject === 'civics') {
             let totalQ = 0;
             if (window.QUIZ_DATA) {
                 units.forEach(u => {
                    if (QUIZ_DATA[u.id]) totalQ += QUIZ_DATA[u.id].length;
                 });
             }

             const btn = document.createElement('button');
             btn.className = 'unit-item'; 
             btn.style.width = '100%';
             btn.style.border = "3px solid #e67e22";
             btn.style.backgroundColor = "#fff8e1";
             btn.style.display = "flex";
             btn.style.flexDirection = "column";
             btn.style.alignItems = "center";
             btn.style.justifyContent = "center";
             btn.style.cursor = "pointer";
             btn.style.padding = "20px";
             btn.style.borderRadius = "15px";
             
             btn.onclick = () => app.startQuiz('c_exam_all');
             
             btn.innerHTML = \`
                <i class="fas fa-balance-scale" style="color: #d35400; font-size: 2.5rem; margin-bottom: 10px;"></i>
                <span style="color: #d35400; font-weight: bold; font-size: 1.5rem;">公民全章チャレンジ<br><small style="font-size:1.0rem;">(全\${totalQ}問)</small></span>
             \`;
             listContainer.appendChild(btn);
        }
    },

    openMaterial`;

s = s.replace(regexshowBranch, replacement_showBranch);
s = s.replace(regexrenderUnits, replacement_renderUnits);

fs.writeFileSync('script.js', s, 'utf8');
console.log("Successfully fixed the menu counts to dynamically load from window.QUIZ_DATA arrays.");
