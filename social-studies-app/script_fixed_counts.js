const app = {
    state: {
        currentSubject: null, 
        currentBranch: null, 
        currentChapter: null
    },

    init() {
        this.switchScreen('home-screen');
        
        document.getElementById('back-button').addEventListener('click', () => {
            this.goBack();
        });

        // Footer & User Init
        this.loadUsers();
        this.setupFooterListeners();

        // Info Ticker Init
        this.updateInfoTicker();
    },

    updateInfoTicker() {
        const messages = [
            "動画はWi-Fi環境下での視聴をおすすめします 📶",
            "画面下のアカウント名は、長押しすると削除できます 🗑️",
            "今日も一日、コツコツ学習を積み重ねよう！ 📚",
            "間違えた問題は、再挑戦機能ですぐ復習しよう！ ✅",
            "毎日の積み重ねが、大きな力になる！ 💪",
            "公民のデータは最新のものをチェックしよう 🌍",
            "歴史の流れは、因果関係を意識すると覚えやすいよ ⏳",
            "疲れたら少し休憩して、リフレッシュしよう ☕",
            "地図記号、自信ある？ 地理でチェックしてみよう 🗺️"
        ];
        const msg = messages[Math.floor(Math.random() * messages.length)];
        const el = document.getElementById('info-ticker-text');
        if(el) {
            // Remove whitespace between spans for precise 25% calculation
            const span = `<span>${msg}</span>`;
            el.innerHTML = span + span + span + span;

            // Calculate duration for constant speed (e.g., 50 pixels per second)
            // We need to wait for render or approximate width
            // Approx width: char count * font size * factor + padding
            // Better: use requestAnimationFrame to measure after render
            requestAnimationFrame(() => {
                const totalWidth = el.scrollWidth;
                const oneCycleDistance = totalWidth / 4; // Distance to move (25%)
                
                // Desired Speed: 80 pixels per second (adjust as needed)
                const speedPxPerSec = 80; 
                const duration = oneCycleDistance / speedPxPerSec;
                
                el.style.animationDuration = `${duration}s`;
            });
        }
    },

    selectSubject(subject) {
        this.state.currentSubject = subject;
        this.state.currentBranch = null;
        this.state.currentChapter = null;
        
        const branches = UNIT_DATA[subject];
        
        // If only 1 branch, auto-select it
        if (branches.length === 1) {
            this.selectBranch(branches[0].id);
        } else {
            this.showBranchSelectScreen(subject);
        }
    },
    // ... (lines 31-238 skipped) ...

    switchScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');

        // Toggle Footer: Hide on Quiz Screen
        const footer = document.getElementById('app-footer');
        if (footer) {
            if (screenId === 'quiz-screen') {
                footer.classList.add('hidden');
            } else {
                footer.classList.remove('hidden');
            }
        }

        if (screenId === 'home-screen') {
            document.getElementById('page-title').innerText = "中学社会 これ一本！";
            document.getElementById('back-button').style.display = 'none';
        } else {
            document.getElementById('back-button').style.display = 'block';
        }
    },

    showBranchSelectScreen(subject) {
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
            btn.innerHTML = `
                <i class="${iconClass}"></i>
                <span>${branch.title}</span>
            `;
            menuGrid.appendChild(btn);
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
            btnWorld.innerHTML = `
                <i class="fas fa-crown" style="color: #d35400;"></i>
                <span style="color: #d35400; font-weight: bold;">世界地理<br>総復習<br><small style="font-size:0.8rem;">(全${totalWorld}問)</small></span>
            `;
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
            btnJapan.innerHTML = `
                <i class="fas fa-crown" style="color: #d35400;"></i>
                <span style="color: #d35400; font-weight: bold;">日本地理<br>総復習<br><small style="font-size:0.8rem;">(全${totalJapan}問)</small></span>
            `;
            menuGrid.appendChild(btnJapan);
        }

        // Add "Challenge All History" button if subject is history
        if (subject === 'history') {
             let totalQ = 0;
             // Calculate Total dynamically
             if (UNIT_DATA['history']) {
                UNIT_DATA['history'].forEach(b => {
                    b.units.forEach(u => {
                        if (window.QUIZ_DATA && QUIZ_DATA[u.id]) {
                            totalQ += QUIZ_DATA[u.id].length;
                        }
                    });
                });
             }

            const btn = document.createElement('button');
            btn.className = 'menu-card';
            // Style it differently to stand out
            btn.style.border = "3px solid #e67e22";
            btn.style.backgroundColor = "#fff8e1";

            btn.onclick = () => app.startQuiz('h_exam_all');
            
            btn.innerHTML = `
                <i class="fas fa-crown" style="color: #d35400;"></i>
                <span style="color: #d35400; font-weight: bold;">歴史全問チャレンジ<br><small style="font-size:0.8rem;">(全${totalQ}問)</small></span>
            `;
            menuGrid.appendChild(btn);
        }

        // Add "Challenge All Civics" button if subject is civics
        if (subject === 'civics') {
             let totalQ = 0;
             // Calculate Total dynamically
             if (UNIT_DATA['civics']) {
                UNIT_DATA['civics'].forEach(b => {
                    b.units.forEach(u => {
                        if (window.QUIZ_DATA && QUIZ_DATA[u.id]) {
                            totalQ += QUIZ_DATA[u.id].length;
                        }
                    });
                });
             }

            const btn = document.createElement('button');
            btn.className = 'menu-card';
            // Style it differently to stand out
            btn.style.border = "3px solid #e67e22";
            btn.style.backgroundColor = "#fff8e1";

            btn.onclick = () => app.startQuiz('c_exam_all');
            
            btn.innerHTML = `
                <i class="fas fa-crown" style="color: #d35400;"></i>
                <span style="color: #d35400; font-weight: bold;">公民全問チャレンジ<br><small style="font-size:0.8rem;">(全${totalQ}問)</small></span>
            `;
            menuGrid.appendChild(btn);
        }


        this.switchScreen('sub-category-screen');
    },

    selectBranch(branchId) {
        const subject = this.state.currentSubject;
        const branch = UNIT_DATA[subject].find(b => b.id === branchId);
        this.state.currentBranch = branch;
        
        this.showUnitList();
    },

    showUnitList() {
        const branch = this.state.currentBranch;
        
        document.getElementById('page-title').innerText = branch.title;
        
        this.renderUnits(branch.units);
        this.switchScreen('unit-list-screen');
    },

    renderUnits(units) {
        const listContainer = document.getElementById('unit-list');
        listContainer.innerHTML = '';

        if (!units || units.length === 0) {
            listContainer.innerHTML = '<p style="text-align:center;">この章にはまだ単元がありません</p>';
            return;
        }

        units.forEach(unit => {
            const el = document.createElement('div');
            el.className = 'unit-item';
            
            el.innerHTML = `
                <div class="unit-header">
                    <span class="unit-title">${unit.title} <span class="unit-count">(全${unit.questionCount || 0}問)</span></span>
                </div>
                <div class="unit-controls">
                    <button class="unit-btn btn-video" onclick="app.playVideo('${unit.id}')">
                        <i class="fas fa-play"></i> 動画
                    </button>
                    <button class="unit-btn btn-quiz" onclick="app.startQuiz('${unit.id}')">
                        <i class="fas fa-pencil-alt"></i> クイズ
                    </button>
                </div>
            `;
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
             
             btn.innerHTML = `
                <i class="fas fa-crown" style="color: #d35400; font-size: 2.5rem; margin-bottom: 10px;"></i>
                <span style="color: #d35400; font-weight: bold; font-size: 1.5rem;">公民全問チャレンジ<br><small style="font-size:1.0rem;">(全${totalQ}問)</small></span>
             `;
             listContainer.appendChild(btn);
        }
    },

    openMaterial(url) {
        window.open(url, '_blank');
    },

    switchScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');

        // Toggle Footer
        const footer = document.getElementById('app-footer');
        if (footer) {
            if (screenId === 'quiz-screen') {
                footer.classList.add('hidden');
            } else {
                footer.classList.remove('hidden');
            }
        }

        if (screenId === 'home-screen') {
            document.getElementById('page-title').innerText = "中学社会 これ一本！";
            document.getElementById('back-button').style.display = 'none';
        } else {
            document.getElementById('back-button').style.display = 'block';
        }
    },

    goBack() {
        const active = document.querySelector('.screen.active').id;
        
        if (active === 'unit-list-screen') {
            const subject = this.state.currentSubject;
            if (UNIT_DATA[subject].length === 1) {
                this.switchScreen('home-screen');
            } else {
                this.showBranchSelectScreen(subject);
            }
        } else if (active === 'sub-category-screen') {
            this.switchScreen('home-screen');
            this.state.currentSubject = null;
        }
    },

    playVideo(unitId) {
        alert("動画再生機能は開発中です。");
    },

    closeVideo() {
        // Placeholder for future video implementation
    },

    quizState: {
        questions: [],
        currentIndex: 0,
        score: 0,
        currentUnitId: null,
        sessionIncorrect: [] // Track incorrect answers for THIS session
    },

    startQuiz(unitId, retryQuestions = null) {
        if (!retryQuestions) {
            // Normal Start
            let allQuestions = [];

            // Special handling for "Challenge All" mode
            if (unitId === 'gw_exam' || unitId === 'gj_exam') {
                const categoryId = (unitId === 'gw_exam') ? 'g_world' : 'g_japan';
                // Find the correct branch in UNIT_DATA
                const branch = UNIT_DATA['geography'].find(b => b.id === categoryId);
                
                if (branch && branch.units) {
                    branch.units.forEach(u => {
                        // Exclude the exam unit itself and check if data exists
                        if (u.id !== unitId && window.QUIZ_DATA && QUIZ_DATA[u.id]) {
                            allQuestions = allQuestions.concat(QUIZ_DATA[u.id]);
                        }
                    });
                }
            } else if (unitId === 'h_exam_all') {
                // History Challenge All
                if (UNIT_DATA['history']) {
                    UNIT_DATA['history'].forEach(branch => {
                        if (branch.units) {
                            branch.units.forEach(u => {
                                if (window.QUIZ_DATA && QUIZ_DATA[u.id]) {
                                    allQuestions = allQuestions.concat(QUIZ_DATA[u.id]);
                                }
                            });
                        }
                    });
                }
            } else if (unitId === 'c_exam_all') {
                // Civics Challenge All
                if (UNIT_DATA['civics']) {
                    UNIT_DATA['civics'].forEach(branch => {
                        if (branch.units) {
                            branch.units.forEach(u => {
                                if (window.QUIZ_DATA && QUIZ_DATA[u.id]) {
                                    allQuestions = allQuestions.concat(QUIZ_DATA[u.id]);
                                }
                            });
                        }
                    });
                }
            } else {
                // Normal Unit
                if (!window.QUIZ_DATA || !QUIZ_DATA[unitId]) {
                    alert("クイズデータがありません。\n単元ID: " + unitId);
                    return;
                }
                allQuestions = QUIZ_DATA[unitId];
            }
            const selectedQuestions = this.selectQuestionsForSession(unitId, allQuestions);

            if (selectedQuestions.length === 0) {
                alert("全ての問題を完璧にクリアしました！すごい！");
                this.quizState.questions = this.shuffleArray([...allQuestions]).slice(0, 10);
            } else {
                this.quizState.questions = selectedQuestions;
            }
            this.quizState.currentUnitId = unitId; 
        } else {
            // Retry Mode
            this.quizState.questions = retryQuestions;
            // Keep same unit ID
        }

        this.quizState.currentIndex = 0;
        this.quizState.score = 0;
        this.quizState.sessionIncorrect = []; // Reset for new session
        
        // Hide Main Header for Full Screen Quiz
        document.querySelector('header').style.display = 'none';

        // Switch to Quiz Screen
        this.switchScreen('quiz-screen');
        
        // Reset Display States
        document.getElementById('quiz-result').style.display = 'none';
        
        // Ensure Main Content is Visible
        const mainContent = document.querySelector('.quiz-main-content');
        if (mainContent) mainContent.style.display = 'flex';
        
        // Ensure Quiz Header is Visible
        const quizHeader = document.querySelector('.quiz-header');
        if (quizHeader) quizHeader.style.display = 'flex';

        this.renderQuizQuestion();
    },

    // === Restored Functions ===
    selectQuestionsForSession(unitId, allQuestions) {
        const historyKey = `quiz_history_${unitId}`;
        const historyParams = JSON.parse(localStorage.getItem(historyKey)) || {};

        const unseen = [];
        const incorrect = [];
        const others = [];

        allQuestions.forEach(q => {
            const h = historyParams[q.q];
            if (!h) {
                unseen.push(q);
            } else if (h.lastResult === 'incorrect') {
                incorrect.push(q);
            } else {
                others.push({ question: q, attempts: h.attempts });
            }
        });

        const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
        
        const shuffledUnseen = shuffle(unseen);
        const shuffledIncorrect = shuffle(incorrect);
        
        // シャッフルしてから、解いた回数（attempts）が少ない順にソートすることで、
        // 「解いた回数が少ない問題からランダム」を実現します。
        const shuffledOthers = others.sort(() => Math.random() - 0.5);
        shuffledOthers.sort((a, b) => a.attempts - b.attempts);
        const sortedOthers = shuffledOthers.map(item => item.question);

        const queue = [
            ...shuffledUnseen,
            ...shuffledIncorrect,
            ...sortedOthers
        ];

        return queue.slice(0, 10);
    },

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    },

    saveQuizResult(unitId, questionText, isCorrect) {
        const historyKey = `quiz_history_${unitId}`;
        const history = JSON.parse(localStorage.getItem(historyKey)) || {};
        
        if (!history[questionText]) {
            history[questionText] = { attempts: 0, lastResult: null, correctCount: 0 };
        }

        history[questionText].attempts++;
        history[questionText].lastResult = isCorrect ? 'correct' : 'incorrect';
        if (isCorrect) history[questionText].correctCount++;

        localStorage.setItem(historyKey, JSON.stringify(history));
        
        // Record Activity
        if (this.saveActivityCount) {
             this.saveActivityCount(1);
        }
    },

    renderQuizQuestion() {
        const q = this.quizState.questions[this.quizState.currentIndex];
        const total = this.quizState.questions.length;

        // Update Progress
        const progressEl = document.getElementById('quiz-progress');
        if(progressEl) progressEl.innerText = `Question ${this.quizState.currentIndex + 1} / ${total}`;

        document.getElementById('quiz-question').innerText = `Q. ${q.q}`;
        
        // Image and Overlay Handling
        const imgOuter = document.getElementById('quiz-image-outer');
        const imgEl = document.getElementById('quiz-image');
        const overlayEl = document.getElementById('quiz-map-overlay');
        
        imgOuter.style.display = 'none';
        imgEl.src = '';
        // ** CRUCIAL FIX : Clear the generic onload to avoid carrying over the event to next images **
        imgEl.onload = null;
        overlayEl.innerHTML = ''; // Clear previous overlays
        
        const bgLayer = document.getElementById('quiz-bg-layer');

        if (q.img) {
            bgLayer.style.backgroundImage = 'none';
            imgOuter.style.display = 'block';
            imgEl.src = q.img;
            imgEl.alt = "問題画像";
            
            const captionEl = document.getElementById('quiz-image-caption');
            if (captionEl) {
                if (q.imgCaption) {
                    captionEl.innerText = q.imgCaption;
                    captionEl.style.display = 'block';
                    // Match the width to the image if possible, or just let it center
                } else {
                    captionEl.style.display = 'none';
                }
            }

            if (q.mapOverlay && Array.isArray(q.mapOverlay)) {
                // Since index.html has been updated, the overlay div perfectly fits the image without JS adjustments.
                imgEl.onload = () => {
                    overlayEl.style.width = '100%';
                    overlayEl.style.height = '100%';
                    overlayEl.style.left = '0';
                    overlayEl.style.transform = 'none';
                    
                    const svgNS = "http://www.w3.org/2000/svg";
                    const svg = document.createElementNS(svgNS, "svg");
                    svg.setAttribute('style', 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: visible;');
                    
                    q.mapOverlay.forEach(marker => {
                    let el;
                    if (marker.type === 'circle') {
                        el = document.createElementNS(svgNS, "circle");
                        el.setAttribute("cx", marker.cx || marker.x);
                        el.setAttribute("cy", marker.cy || marker.y);
                        el.setAttribute("r", marker.r || "10");
                        el.setAttribute("fill", marker.fill || "none");
                        el.setAttribute("stroke", marker.color || "red");
                        el.setAttribute("stroke-width", marker.strokeWidth || "4");
                    } else if (marker.type === 'line') {
                        el = document.createElementNS(svgNS, "line");
                        el.setAttribute("x1", marker.x1);
                        el.setAttribute("y1", marker.y1);
                        el.setAttribute("x2", marker.x2);
                        el.setAttribute("y2", marker.y2);
                        el.setAttribute("stroke", marker.color || "red");
                        el.setAttribute("stroke-width", marker.strokeWidth || "4");
                        if (marker.dashed) el.setAttribute("stroke-dasharray", "5,5");
                    } else if (marker.type === 'polyline') {
                        const innerSvg = document.createElementNS(svgNS, "svg");
                        innerSvg.setAttribute("width", "100%");
                        innerSvg.setAttribute("height", "100%");
                        innerSvg.setAttribute("viewBox", "0 0 100 100");
                        innerSvg.setAttribute("preserveAspectRatio", "none");
                        innerSvg.setAttribute("style", "overflow: visible;");
                        
                        el = document.createElementNS(svgNS, "polyline");
                        el.setAttribute("points", marker.points);
                        el.setAttribute("fill", marker.fill || "none");
                        el.setAttribute("stroke", marker.color || "red");
                        el.setAttribute("stroke-width", marker.strokeWidth || "4");
                        el.setAttribute("vector-effect", "non-scaling-stroke");
                        el.setAttribute("stroke-linejoin", "round");
                        if (marker.dashed) el.setAttribute("stroke-dasharray", "5,5");
                        innerSvg.appendChild(el);
                        el = innerSvg;
                    } else if (marker.type === 'polygon') {
                        const innerSvg = document.createElementNS(svgNS, "svg");
                        innerSvg.setAttribute("width", "100%");
                        innerSvg.setAttribute("height", "100%");
                        innerSvg.setAttribute("viewBox", "0 0 100 100");
                        innerSvg.setAttribute("preserveAspectRatio", "none");
                        innerSvg.setAttribute("style", "overflow: visible;");
                        
                        el = document.createElementNS(svgNS, "polygon");
                        el.setAttribute("points", marker.points);
                        el.setAttribute("fill", marker.fill || "rgba(255, 0, 0, 0.3)");
                        el.setAttribute("stroke", marker.color || "none");
                        el.setAttribute("stroke-width", marker.strokeWidth || "0");
                        el.setAttribute("vector-effect", "non-scaling-stroke");
                        innerSvg.appendChild(el);
                        el = innerSvg;
                    } else if (marker.type === 'rect') {
                        el = document.createElementNS(svgNS, "rect");
                        el.setAttribute("x", marker.x);
                        el.setAttribute("y", marker.y);
                        el.setAttribute("width", marker.width);
                        el.setAttribute("height", marker.height);
                        el.setAttribute("fill", marker.fill || "#fdfdfd"); // マップの背景色に近い白をデフォルトに
                        el.setAttribute("stroke", marker.color || "none");
                        el.setAttribute("stroke-width", marker.strokeWidth || "0");
                        if (marker.rx) el.setAttribute("rx", marker.rx);
                        if (marker.ry) el.setAttribute("ry", marker.ry);
                    } else if (marker.type === 'text') {
                        el = document.createElementNS(svgNS, "text");
                        el.setAttribute("x", marker.x);
                        el.setAttribute("y", marker.y);
                        el.textContent = marker.text;
                        el.setAttribute("fill", marker.color || "#333");
                        el.setAttribute("font-size", marker.fontSize || "1.2rem");
                        el.setAttribute("font-weight", "bold");
                        el.setAttribute("font-family", '"Zen Kurenaido", sans-serif');
                        el.setAttribute("text-anchor", marker.anchor || "middle");
                        el.setAttribute("dominant-baseline", "middle");
                        el.setAttribute("paint-order", "stroke");
                        el.setAttribute("stroke", "#fff");
                        el.setAttribute("stroke-width", "4");
                        el.setAttribute("stroke-linecap", "round");
                        el.setAttribute("stroke-linejoin", "round");
                    }
                    if (el) svg.appendChild(el);
                });
                overlayEl.appendChild(svg);
                };
            }

        }

        // Background Image Handling
        const questionWrapper = document.getElementById('quiz-question-wrapper');
        
        if (q.bgImg) {
            bgLayer.style.backgroundImage = `url('${q.bgImg}')`;
            bgLayer.style.opacity = '0.5'; // Default opacity for custom full-screen bg
            bgLayer.style.backgroundSize = ''; // Reset to CSS default (contain)
            questionWrapper.classList.add('wrapper-large-bg');
            questionWrapper.classList.remove('wrapper-pop-bg');
        } else if (!q.img) {
            // No specific image, check if we should show a pop-art background for the region
            const unitImages = {
                // 世界地理
                'gw_1': 'assets/images/geography/bg_world_pop_art_user.png',
                'gw_2': 'assets/images/geography/bg_asia_pop_art_fixed_1771588437746.png',
                'gw_3': 'assets/images/geography/bg_europe_pop_art_1771587959603.png',
                'gw_4': 'assets/images/geography/bg_africa_pop_art_1771587978888.png',
                'gw_5': 'assets/images/geography/bg_namerica_pop_art_1771587996226.png',
                'gw_6': 'assets/images/geography/bg_samerica_pop_art_1771588031667.png',
                'gw_7': 'assets/images/geography/bg_oceania_pop_art_1771588053777.png',
                
                // 日本地理
                'gj_1': 'assets/images/geography/japan_pop_art_bg.png',
                'gj_2': 'assets/images/geography/japan_pop_art_bg.png',
                'gj_3': 'images/geography/kyushu_region_1.png',
                'gj_4': 'images/geography/chugoku_region_1.png',
                'gj_5': 'images/geography/kinki_region_1.png',
                'gj_6': 'images/geography/chubu_region_1.png',
                'gj_7': 'images/geography/kanto_region.png',
                'gj_8': 'images/geography/tohoku_region_1.png',
                'gj_9': 'images/geography/hokkaido_region_1.png',
                'gj_10': 'assets/images/geography/japan_pop_art_bg.png'
            };

            // Identify history era based on unit ID
            let historyBgPath = null;
            if (this.quizState.currentUnitId.startsWith('h_ancient')) {
                historyBgPath = 'assets/images/history/bg_history_ancient.png';
            } else if (this.quizState.currentUnitId.startsWith('h_medieval')) {
                historyBgPath = 'assets/images/history/bg_history_medieval.png';
            } else if (this.quizState.currentUnitId.startsWith('h_early_modern')) {
                historyBgPath = 'assets/images/history/bg_history_early_modern.png';
            } else if (this.quizState.currentUnitId === 'h_modern_6' || this.quizState.currentUnitId === 'h_modern_7') {
                // World War eras -> Blank World Map
                historyBgPath = 'assets/images/geography/map_world_blank_pacific_1771577772064.png';
            } else if (this.quizState.currentUnitId.startsWith('h_contemporary')) {
                // Contemporary
                historyBgPath = 'assets/images/history/bg_history_modern_contemporary.png'; 
            } else if (this.quizState.currentUnitId.startsWith('h_modern')) {
                historyBgPath = 'assets/images/history/bg_history_modern.png';
            } else if (this.quizState.currentUnitId.startsWith('c_1')) {
                historyBgPath = 'assets/images/civics/bg_civics_c1_constitution_1773718621685.png';
            } else if (this.quizState.currentUnitId.startsWith('c_2')) {
                historyBgPath = 'assets/images/civics/bg_civics_c2_rights_1773718635969.png';
            } else if (this.quizState.currentUnitId.startsWith('c_3')) {
                historyBgPath = 'assets/images/civics/bg_civics_c3_politics_1773718649298.png';
            } else if (this.quizState.currentUnitId.startsWith('c_4')) {
                historyBgPath = 'assets/images/civics/bg_civics_c4_economy_1773718663293.png';
            } else if (this.quizState.currentUnitId.startsWith('c_5')) {
                historyBgPath = 'assets/images/civics/bg_civics_c5_international_1773718679700.png';
            } else if (this.quizState.currentUnitId.startsWith('cw_1')) {
                historyBgPath = 'assets/images/civics/bg_civics_cw1_review_1773718693818.png';
            }

            if (historyBgPath) {
                // Use history background
                bgLayer.style.backgroundImage = `url('${historyBgPath}')`;
                bgLayer.style.opacity = '0.5';
                bgLayer.style.backgroundSize = 'contain';
                questionWrapper.classList.add('wrapper-pop-bg');
            } else if (unitImages[this.quizState.currentUnitId]) {
                // Use geography background
                const imgPath = unitImages[this.quizState.currentUnitId];
                bgLayer.style.backgroundImage = `url('${imgPath}')`;
                bgLayer.style.opacity = '0.5';
                bgLayer.style.backgroundSize = 'contain'; // Make it fit exactly within the container horizontally/vertically
                questionWrapper.classList.add('wrapper-pop-bg'); // Make container taller so it isn't squished
            } else {
                bgLayer.style.backgroundImage = 'none';
                bgLayer.style.backgroundSize = '';
                questionWrapper.classList.remove('wrapper-pop-bg');
            }
            questionWrapper.classList.remove('wrapper-large-bg');
        } else {
            bgLayer.style.backgroundImage = 'none';
            bgLayer.style.backgroundSize = '';
            questionWrapper.classList.remove('wrapper-large-bg');
            questionWrapper.classList.remove('wrapper-pop-bg');
        }

        const optionsContainer = document.getElementById('quiz-options');
        optionsContainer.innerHTML = '';
        document.getElementById('quiz-feedback').style.display = 'none';
        
        // Hide answer image from previous question
        const ansContainer = document.getElementById('answer-image-container');
        if (ansContainer) {
            ansContainer.style.display = 'none';
            document.getElementById('answer-image').src = '';
        }
        
        const choices = [...q.choices].sort(() => Math.random() - 0.5);

        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.innerText = choice;
            btn.onclick = () => app.checkAnswer(choice);
            optionsContainer.appendChild(btn);
        });
    },

    checkAnswer(choice) {
        const q = this.quizState.questions[this.quizState.currentIndex];
        const isCorrect = (choice === q.a);
        
        this.saveQuizResult(this.quizState.currentUnitId, q.q, isCorrect);

        if (!isCorrect) {
            this.quizState.sessionIncorrect.push(q);
        }

        document.getElementById('quiz-options').innerHTML = ''; 
        const feedback = document.getElementById('quiz-feedback');
        feedback.style.display = 'block';

        const icon = document.getElementById('feedback-icon');
        const text = document.getElementById('feedback-text');
        const comment = document.getElementById('feedback-comment');

        if (isCorrect) {
            this.quizState.score++;
            icon.innerHTML = '<i class="far fa-circle" style="color:red; font-size:6rem;"></i>'; 
            text.innerText = "正解！";
            text.style.color = '#e74c3c';
        } else {
            icon.innerHTML = '<i class="fas fa-times" style="color:blue; font-size:6rem;"></i>'; 
            text.innerText = "残念...";
            text.style.color = '#3498db';
        }

        let commentHTML = `<span style="display:block; font-weight:bold; color:#e74c3c; margin-bottom:10px; font-size: 1.4rem;">正解：${q.a}</span>${q.comment || ''}`;
        
        if (q.aImg) {
            commentHTML += `<div style="text-align: center; margin-top: 15px;"><img src="${q.aImg}" style="max-width: 150px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" alt="Answer Image"></div>`;
        }
        comment.innerHTML = commentHTML;

        // Custom full-size Answer Image block
        const ansContainer = document.getElementById('answer-image-container');
        if (ansContainer) {
            if (q.answerImg) {
                ansContainer.style.display = 'block';
                document.getElementById('answer-image').src = q.answerImg;
                
                const ansCaption = document.getElementById('answer-image-caption');
                if (q.answerImgCaption) {
                    ansCaption.style.display = 'block';
                    ansCaption.innerText = q.answerImgCaption;
                } else {
                    ansCaption.style.display = 'none';
                }
            } else {
                ansContainer.style.display = 'none';
            }
        }
    },

    nextQuestion() {
        this.quizState.currentIndex++;
        if (this.quizState.currentIndex < this.quizState.questions.length) {
            this.renderQuizQuestion();
        } else {
            this.showResult();
        }
    },
    // ==========================

    showResult() {
        document.querySelector('.quiz-main-content').style.display = 'none';
        document.querySelector('.quiz-header').style.display = 'none';

        const resultDiv = document.getElementById('quiz-result');
        resultDiv.style.display = 'block';
        
        const score = this.quizState.score;
        const total = this.quizState.questions.length;
        document.getElementById('score-text').innerText = `${total}問中、${score}問正解！`;

        // Clear existing buttons to prevent duplicates
        // Create container if not exists
        let btnContainer = document.getElementById('result-btn-container');
        if (!btnContainer) {
            btnContainer = document.createElement('div');
            btnContainer.id = 'result-btn-container';
            btnContainer.style.display = 'flex';
            btnContainer.style.flexDirection = 'column';
            btnContainer.style.gap = '15px';
            btnContainer.style.marginTop = '20px';
            resultDiv.appendChild(btnContainer);
        }
        btnContainer.innerHTML = '';

        // Retry Incorrect Button
        if (this.quizState.sessionIncorrect.length > 0) {
            const retryBtn = document.createElement('button');
            retryBtn.className = 'unit-btn btn-quiz';
            retryBtn.style.width = '100%';
            retryBtn.style.padding = '15px';
            retryBtn.style.fontSize = '1.2rem';
            retryBtn.innerText = `間違えた${this.quizState.sessionIncorrect.length}問に再挑戦`;
            retryBtn.onclick = () => {
                app.startQuiz(app.quizState.currentUnitId, app.quizState.sessionIncorrect);
            };
            btnContainer.appendChild(retryBtn);
        }

        // Retry Same Unit Button
        const retryUnitBtn = document.createElement('button');
        retryUnitBtn.className = 'unit-btn btn-quiz';
        retryUnitBtn.style.width = '100%';
        retryUnitBtn.style.padding = '15px';
        retryUnitBtn.style.fontSize = '1.2rem';
        retryUnitBtn.style.backgroundColor = '#27ae60'; // Different color to distinguish
        retryUnitBtn.innerText = 'もう一度解く（同じ単元）';
        retryUnitBtn.onclick = () => {
            app.startQuiz(app.quizState.currentUnitId);
        };
        btnContainer.appendChild(retryUnitBtn);

        // Back to List Button
        const backBtn = document.createElement('button');
        backBtn.className = 'unit-btn btn-quiz';
        backBtn.style.width = '100%';
        backBtn.style.padding = '15px';
        backBtn.style.fontSize = '1.2rem';
        backBtn.style.backgroundColor = '#666'; // Distinct color
        backBtn.innerText = '単元一覧に戻る';
        backBtn.onclick = () => app.closeQuiz();
        btnContainer.appendChild(backBtn);
        
        // Hide original static button if exists
        const staticBtn = resultDiv.querySelector('button.unit-btn');
        if (staticBtn && staticBtn.parentElement === resultDiv) {
            staticBtn.style.display = 'none';
        }
    },

    closeQuiz() {
        // Show Home Header
        document.querySelector('header').style.display = 'flex';
        
        // Determine where to go back based on currentUnitId
        if (this.quizState.currentUnitId === 'h_exam_all' || 
            this.quizState.currentUnitId === 'gw_exam' || 
            this.quizState.currentUnitId === 'gj_exam' ||
            this.quizState.currentUnitId === 'c_exam_all') {
            this.switchScreen('sub-category-screen');
        } else {
            // Go back to Unit List
            this.switchScreen('unit-list-screen');
        }
    }
};

// --- Footer & User Features Implementation ---
app.users = ['Guest'];
app.currentUser = 'Guest';
app.calendarDate = new Date();

app.loadUsers = function() {
    const storedUsers = localStorage.getItem('social_users');
    if (storedUsers) {
        this.users = JSON.parse(storedUsers);
    } else {
        this.users = ['Guest'];
        localStorage.setItem('social_users', JSON.stringify(this.users));
    }

    const storedCurrent = localStorage.getItem('social_current_user');
    if (storedCurrent && this.users.includes(storedCurrent)) {
        this.currentUser = storedCurrent;
    } else {
        this.currentUser = 'Guest';
        localStorage.setItem('social_current_user', this.currentUser);
    }
    
    this.updateUserUI();
    this.renderUserList();
};

app.updateUserUI = function() {
    const el = document.getElementById('current-user-name');
    if(el) el.textContent = this.currentUser;
};

app.renderUserList = function() {
    const list = document.getElementById('user-list');
    if(!list) return;
    list.innerHTML = '';
    
    this.users.forEach(u => {
        const li = document.createElement('li');
        li.textContent = u;
        if (u === this.currentUser) li.classList.add('current');
        
        // --- Long Press Logic ---
        let pressTimer;
        
        const startPress = (e) => {
            if (u === 'Guest') return; // Guest is protected
            // Only start if left click or touch
            if (e.type === 'mousedown' && e.button !== 0) return;
            
            pressTimer = setTimeout(() => {
                li.dataset.longPressTriggered = 'true';
                if (confirm(u + " を削除しますか？")) {
                    app.deleteUser(u);
                }
            }, 800); // 800ms for long press
        };

        const cancelPress = () => {
            if (pressTimer) clearTimeout(pressTimer);
        };

        // Touch events
        li.addEventListener('touchstart', startPress, {passive: true});
        li.addEventListener('touchend', cancelPress);
        li.addEventListener('touchmove', cancelPress);

        // Mouse events
        li.addEventListener('mousedown', startPress);
        li.addEventListener('mouseup', cancelPress);
        li.addEventListener('mouseleave', cancelPress);

        // Click to switch (only if not long-pressed)
        li.addEventListener('click', (e) => {
            if (li.dataset.longPressTriggered === 'true') {
                 li.dataset.longPressTriggered = 'false';
                 e.stopPropagation();
                 return;
            }
            this.switchUser(u);
        });

        // Keep Context Menu for PC convenience
        li.oncontextmenu = (e) => {
            e.preventDefault();
            if(u !== 'Guest' && confirm(u + " を削除しますか？")) {
                this.deleteUser(u);
            }
        };

        list.appendChild(li);
    });
};

app.switchUser = function(name) {
    this.currentUser = name;
    localStorage.setItem('social_current_user', name);
    this.updateUserUI();
    this.renderUserList();
    document.getElementById('user-menu-popup').classList.add('hidden');
    
    // Optionally reload entry screen or reset state
    this.switchScreen('home-screen');
    alert(name + " さんに切り替えました。");
};

app.addNewUser = function() {
    const name = prompt("新しいユーザー名を入力:");
    if (name && name.trim()) {
        if (this.users.includes(name)) {
            alert("その名前は既に存在します");
            return;
        }
        this.users.push(name);
        localStorage.setItem('social_users', JSON.stringify(this.users));
        this.switchUser(name);
    }
};

app.deleteUser = function(name) {
    if(name === 'Guest') return;
    this.users = this.users.filter(u => u !== name);
    localStorage.setItem('social_users', JSON.stringify(this.users));
    if(this.currentUser === name) this.switchUser('Guest');
    else this.renderUserList();
};

app.setupFooterListeners = function() {
    // Calendar
    document.getElementById('nav-calendar-btn').addEventListener('click', () => {
        this.renderCalendar(new Date());
        document.getElementById('calendar-modal').style.display = 'flex';
    });
    document.getElementById('close-calendar-modal').addEventListener('click', () => {
        document.getElementById('calendar-modal').style.display = 'none';
    });

    document.getElementById('prev-month-btn').addEventListener('click', () => this.offsetCalendarMonth(-1));
    document.getElementById('next-month-btn').addEventListener('click', () => this.offsetCalendarMonth(1));

    // User Menu
    document.getElementById('nav-user-btn').addEventListener('click', (e) => {
        const menu = document.getElementById('user-menu-popup');
        menu.classList.toggle('hidden');
        menu.classList.toggle('active');
        e.stopPropagation();
    });
    
    document.getElementById('add-new-user-btn').addEventListener('click', () => this.addNewUser());

    window.addEventListener('click', (e) => {
        if (!e.target.closest('.user-nav-container')) {
            const menu = document.getElementById('user-menu-popup');
            if(menu) {
                menu.classList.add('hidden');
                menu.classList.remove('active');
            }
        }
        if (e.target.id === 'calendar-modal') {
             document.getElementById('calendar-modal').style.display = 'none';
        }
        if (e.target.id === 'stats-modal') {
             document.getElementById('stats-modal').style.display = 'none';
        }
    });

    // Stats
    document.getElementById('nav-stats-btn').addEventListener('click', () => {
        this.renderStats();
        document.getElementById('stats-modal').style.display = 'flex';
    });
    document.getElementById('close-stats-modal').addEventListener('click', () => {
        document.getElementById('stats-modal').style.display = 'none';
    });
};

app.offsetCalendarMonth = function(offset) {
    this.calendarDate.setDate(1);
    this.calendarDate.setMonth(this.calendarDate.getMonth() + offset);
    this.renderCalendar(this.calendarDate);
};

app.renderCalendar = function(date) {
    const grid = document.getElementById('calendar-grid');
    const label = document.getElementById('calendar-month-label');
    if (!grid || !label) return;

    grid.innerHTML = '';
    const year = date.getFullYear();
    const month = date.getMonth();
    label.textContent = `${year}年 ${month + 1}月`;

    const key = `social_activity_${this.currentUser}`;
    const activity = JSON.parse(localStorage.getItem(key) || '{}');
    
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')}`;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay(); // 0=Sun

    const days = ['日', '月', '火', '水', '木', '金', '土'];
    days.forEach(d => {
        const div = document.createElement('div');
        div.className = 'calendar-cell calendar-header';
        div.textContent = d;
        grid.appendChild(div);
    });

    for (let i = 0; i < firstDay; i++) {
        grid.appendChild(document.createElement('div')); // Empty
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const div = document.createElement('div');
        div.className = 'calendar-cell';
        
        const dStr = d.toString().padStart(2, '0');
        const mStr = (month + 1).toString().padStart(2, '0');
        const fullDate = `${year}-${mStr}-${dStr}`;
        
        div.innerHTML = `<div style="z-index:1;">${d}</div>`;

        if (activity[fullDate]) {
            div.innerHTML += `<div class="calendar-count">${activity[fullDate]}</div>`;
            div.style.backgroundColor = '#dcedc8'; // Light green
        }
        
        if (fullDate === todayStr) {
            div.classList.add('calendar-today');
        }
        grid.appendChild(div);
    }
};

app.saveActivityCount = function(count) {
    if (!this.currentUser) return;
    const key = `social_activity_${this.currentUser}`;
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')}`;
    
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    data[todayStr] = (data[todayStr] || 0) + count;
    localStorage.setItem(key, JSON.stringify(data));
};

app.renderStats = function() {
    const container = document.getElementById('stats-content');
    container.innerHTML = '';

    // Total Answered (Approximation from activity)
    const key = `social_activity_${this.currentUser}`;
    const activity = JSON.parse(localStorage.getItem(key) || '{}');
    let total = 0;
    Object.values(activity).forEach(v => total += v);

    container.innerHTML += `
        <div class="stats-card">
            <div class="stats-title">累計回答数</div>
            <div style="font-size: 2rem; color: var(--primary-color); text-align: center;">${total} 問</div>
        </div>
    `;
    
    // Add Placeholder for specific unit progress
    container.innerHTML += `
        <div style="margin-top:20px; text-align:center; color:#666;">
            <p>単元別の進捗グラフは開発中です...</p>
        </div>
    `;
};

window.onload = () => app.init();
