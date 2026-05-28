// --- AdMob Configuration ---
const AdMob = window.Capacitor?.Plugins?.AdMob;
const IS_TESTING = false;
const ANDROID_BANNER_ID = 'ca-app-pub-6979818021800533/9268598502';
const ANDROID_INTERSTITIAL_ID = 'ca-app-pub-6979818021800533/1254377117';
const INTERSTITIAL_FREQUENCY = 3;

async function initAdMob() {
    if (!AdMob) return;
    try {
        await AdMob.initialize({ requestTrackingAuthorization: true });
        showBanner();
    } catch (e) {
        console.error('AdMob init failed', e);
    }
}

async function showBanner() {
    if (!AdMob) return;
    try {
        await AdMob.showBanner({
            adId: ANDROID_BANNER_ID,
            adSize: 'ADAPTIVE_BANNER',
            position: 'BOTTOM_CENTER',
            isTesting: IS_TESTING
        });
    } catch (e) {}
}

async function prepareInterstitialIfNext() {
    if (!AdMob) return;
    try {
        let currentCount = parseInt(localStorage.getItem('admob_interstitial_count') || '0', 10);
        if ((currentCount + 1) % INTERSTITIAL_FREQUENCY === 0) {
            await AdMob.prepareInterstitial({ adId: ANDROID_INTERSTITIAL_ID, isTesting: IS_TESTING });
        }
    } catch (e) {}
}

async function checkAndShowInterstitial() {
    if (!AdMob) return;
    try {
        let currentCount = parseInt(localStorage.getItem('admob_interstitial_count') || '0', 10);
        currentCount += 1;
        localStorage.setItem('admob_interstitial_count', currentCount.toString());

        if (currentCount % INTERSTITIAL_FREQUENCY === 0) {
            try {
                await AdMob.showInterstitial();
            } catch (err) {
                await AdMob.prepareInterstitial({ adId: ANDROID_INTERSTITIAL_ID, isTesting: IS_TESTING });
                await AdMob.showInterstitial();
            }
        }
    } catch (e) {}
}

var app = {
    state: {
        currentSubject: null, 
        currentBranch: null, 
        currentChapter: null
    },

    init() {
        try {
            this.switchScreen('home-screen');
            initAdMob();
            
            document.getElementById('back-button').addEventListener('click', () => {
                this.goBack();
            });

            // Footer & User Init
            this.loadUsers();
            this.setupFooterListeners();

            // Info Ticker Init
            this.updateInfoTicker();

            this.recordLaunchAndSetupStreak();
        } catch (error) {
            console.error("Initialization error message:", error.message);
            console.error("Initialization error stack:", error.stack);
            try {
                alert("App Initialization Failed:\n" + error.message + "\n" + error.stack);
            } catch (alertErr) {}
            // Draw error on screen so user knows exactly what failed
            const errorDiv = document.createElement('div');
            errorDiv.style.position = 'fixed';
            errorDiv.style.top = '0';
            errorDiv.style.left = '0';
            errorDiv.style.width = '100%';
            errorDiv.style.height = '100%';
            errorDiv.style.backgroundColor = 'white';
            errorDiv.style.color = 'red';
            errorDiv.style.zIndex = '9999';
            errorDiv.style.padding = '20px';
            errorDiv.style.boxSizing = 'border-box';
            errorDiv.style.overflow = 'auto';
            errorDiv.innerHTML = `<h2>App Initialization Failed</h2><pre>${error.stack || error.message || error}</pre>`;
            document.body.appendChild(errorDiv);
        }
    },

    recordLaunchAndSetupStreak() {
        if (!this.currentUser) return;
        
        const key = `social_launch_dates_${this.currentUser}`;
        const now = new Date();
        const todayStr = `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')}`;
        
        let launchDates = JSON.parse(localStorage.getItem(key) || '[]');
        if (!launchDates.includes(todayStr)) {
            launchDates.push(todayStr);
            launchDates.sort();
            localStorage.setItem(key, JSON.stringify(launchDates));
        }
        
        let streak = 0;
        let checkDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        
        for (let i = launchDates.length - 1; i >= 0; i--) {
            const dStr = launchDates[i];
            const cYear = checkDate.getFullYear();
            const cMonth = (checkDate.getMonth() + 1).toString().padStart(2, '0');
            const cDate = checkDate.getDate().toString().padStart(2, '0');
            const expectedStr = `${cYear}-${cMonth}-${cDate}`;
            
            if (dStr === expectedStr) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else if (dStr < expectedStr) {
                break;
            }
        }
        
        this.updateStreakDisplay(streak);
    },

    updateStreakDisplay(streak) {
        const daysEl = document.getElementById('streak-days-display');
        const msgEl = document.getElementById('streak-message-display');
        if (!daysEl || !msgEl) return;
        
        daysEl.innerText = `${streak}日`;
        
        let msg = "";
        if (streak === 0) {
            msg = "これから頑張ろう！";
        } else if (streak === 1) {
            msg = "1日目！これから頑張ろう！";
        } else if (streak < 3) {
            msg = "いいスタートですね！";
        } else if (streak < 7) {
            msg = "いい調子！その調子！";
        } else if (streak < 10) {
            msg = "1週間突破！素晴らしいです！";
        } else if (streak < 20) {
            msg = "継続は力なりですね！";
        } else if (streak < 30) {
            msg = "毎日の習慣が定着してますね！";
        } else {
            msg = "驚異的な継続力！達人レベルです！";
        }
        msgEl.innerText = msg;
    },

    updateInfoTicker() {
        const messages = [
            "動画はWi-Fi環境下での視聴をおすすめします 📶",
            "画面下のアカウント名は、長押しすると削除できます 🗑️",
            "今日も一日、コツコツ学習を積み重ねよう！ 📚",
            "間違えた問題は、再挑戦機能ですぐ復習しよう！ ✅",
            "毎日の積み重ねが、大きな力になる！ 💪"
        ];
        const msg = messages[Math.floor(Math.random() * messages.length)];
        const el = document.getElementById('info-ticker-text');
        if(el) {
            // 文字色をデフォルトに戻しつつ適度な間隔を確保
            const span = `<span>${msg} &nbsp;&nbsp;&nbsp;&nbsp; </span>`;
            el.innerHTML = span + span + span + span;

            requestAnimationFrame(() => {
                const totalWidth = el.scrollWidth;
                const oneCycleDistance = totalWidth / 4; 
                
                const speedPxPerSec = 75; // 先ほどの半分の速度（元の等倍弱）
                const duration = oneCycleDistance / speedPxPerSec;
                
                el.style.setProperty('animation-duration', `${duration}s`, 'important');
            });
        }
    },

    selectSubject(subject) {
        this.state.currentSubject = subject;
        this.state.currentBranch = null;
        this.state.currentChapter = null;
        
        const branches = window.UNIT_DATA[subject];
        
        // If only 1 branch, auto-select it
        if (branches.length === 1) {
            this.selectBranch(branches[0].id);
        } else {
            this.showBranchSelectScreen(subject);
        }
    },

    showBranchSelectScreen(subject) {
        const subjectNames = {
            'music': '音楽',
            'tech_home': '技術・家庭',
            'pe_health': '保健体育',
            'art': '美術'
        };
        document.getElementById('page-title').innerText = subjectNames[subject] || '分野選択';
        
        const branches = window.UNIT_DATA[subject];
        let title = "分野を選んでください";
        document.getElementById('sub-category-title').innerText = title;
        
        const menuGrid = document.querySelector('#sub-category-screen .menu-grid');
        menuGrid.innerHTML = ''; 

        branches.forEach(branch => {
            const btn = document.createElement('button');
            btn.className = 'menu-card';
            btn.onclick = () => app.selectBranch(branch.id);
            const iconClass = branch.icon || 'fas fa-book-open';
            btn.innerHTML = `<i class="${iconClass}"></i><span>${branch.title}</span>`;
            menuGrid.appendChild(btn);
        });

        this.switchScreen('sub-category-screen');
    },

    selectBranch(branchId) {
        const subject = this.state.currentSubject;
        const branch = window.UNIT_DATA[subject].find(b => b.id === branchId);
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

        // Group units by video URL for pe_health
        const groups = [];
        let currentGroup = [];
        let currentVideo = null;

        units.forEach(unit => {
            const videoUrl = (window.VIDEO_MAP && window.VIDEO_MAP[unit.id]) ? window.VIDEO_MAP[unit.id] : null;
            if (this.state.currentSubject === 'pe_health' && videoUrl && videoUrl === currentVideo) {
                currentGroup.push(unit);
            } else {
                if (currentGroup.length > 0) {
                    groups.push({ video: currentVideo, units: currentGroup });
                }
                currentGroup = [unit];
                currentVideo = videoUrl;
            }
        });
        if (currentGroup.length > 0) {
            groups.push({ video: currentVideo, units: currentGroup });
        }

        groups.forEach(group => {
            const el = document.createElement('div');
            el.className = 'unit-item';
            // Override default flex-direction: column to row to align left and right parts
            el.style.flexDirection = 'row';
            el.style.alignItems = 'center';
            el.style.justifyContent = 'space-between';
            el.style.flexWrap = 'wrap';
            
            if (group.units.length === 1 && this.state.currentSubject !== 'pe_health') {
                // Standard single unit (Other subjects)
                const unit = group.units[0];
                let c = 0;
                if (window.QUIZ_DATA && window.QUIZ_DATA[unit.id]) c = window.QUIZ_DATA[unit.id].length;

                let videoButtonsHtml = '';
                if (window.VIDEO_MAP && window.VIDEO_MAP[unit.id]) {
                    videoButtonsHtml = `
                        <button class="unit-btn btn-video" style="margin: 0; background-color: #e67e22; color: white; width: 100%;" onclick="app.playVideo('${unit.id}')">
                            <i class="fas fa-video"></i> 導入動画を見る
                        </button>
                    `;
                }

                let textbookButtonHtml = '';
                if (window.TEXTBOOK_MAP && window.TEXTBOOK_MAP[unit.id]) {
                    const url = `https://hiroking4orikara-art.github.io/sub-subjects-web-textbook/${window.TEXTBOOK_MAP[unit.id]}`;
                    textbookButtonHtml = `
                        <button class="unit-btn btn-material" style="margin: 0; background-color: #4CAF50; color: white; width: 100%;" onclick="app.openMaterial('${url}')">
                            <i class="fas fa-book-open"></i> web教科書を見る
                        </button>
                    `;
                }

                el.innerHTML = `
                    <div class="unit-header" style="flex: 1; min-width: 200px; display: flex; align-items: center;">
                        <span class="unit-title">${unit.title} <span class="unit-count" style="font-size: 0.9rem; color: #666; margin-left: 10px;">(全${c}問)</span></span>
                    </div>
                    <div class="unit-controls" style="display: flex; gap: 10px; align-items: center; justify-content: flex-end;">
                        <div style="display: flex; flex-direction: column; gap: 5px; min-width: 150px;">
                            ${videoButtonsHtml}
                            ${textbookButtonHtml}
                        </div>
                        <button class="unit-btn btn-quiz" style="margin: 0; background-color: #3498db; color: white;" onclick="app.startQuiz('${unit.id}')">
                            <i class="fas fa-pencil-alt"></i> クイズ
                        </button>
                    </div>
                `;
            } else {
                // Grouped units (pe_health)
                el.style.flexDirection = 'column';
                el.style.alignItems = 'stretch';
                el.style.justifyContent = 'flex-start';
                
                let videoBtnHtml = '';
                if (group.video) {
                    videoBtnHtml = `
                        <div class="unit-group-video" style="margin-bottom: 20px; text-align: left;">
                            <button class="unit-btn btn-video" style="background-color: #e67e22; color: white; padding: 10px 20px; width: auto; font-size: 1.1rem; display: inline-block;" onclick="app.playVideo('${group.units[0].id}')">
                                <i class="fas fa-video"></i> 導入動画を見る
                            </button>
                        </div>
                    `;
                }

                let itemsHtml = '';
                group.units.forEach((unit, idx) => {
                    let c = 0;
                    if (window.QUIZ_DATA && window.QUIZ_DATA[unit.id]) c = window.QUIZ_DATA[unit.id].length;
                    
                    let borderStyle = (idx === group.units.length - 1) ? '' : 'border-bottom: 1px dashed #ccc; padding-bottom: 15px; margin-bottom: 15px;';
                    
                    let textbookBtnHtml = '';
                    if (window.TEXTBOOK_MAP && window.TEXTBOOK_MAP[unit.id]) {
                        const url = `https://hiroking4orikara-art.github.io/sub-subjects-web-textbook/${window.TEXTBOOK_MAP[unit.id]}`;
                        textbookBtnHtml = `
                            <button class="unit-btn btn-material" onclick="app.openMaterial('${url}')" style="margin: 0 10px 0 0; background-color: #4CAF50; color: white; padding: 8px 20px; font-size: 1.1rem;">
                                <i class="fas fa-book-open"></i> web教科書を見る
                            </button>
                        `;
                    }

                    itemsHtml += `
                        <div style="display: flex; flex-direction: column; gap: 10px; ${borderStyle}">
                            <div style="font-size: 1.1rem; font-weight: bold; color: #333; text-align: left;">
                                ${unit.title} <span class="unit-count" style="font-size: 0.9rem; color: #666; margin-left: 10px;">(全${c}問)</span>
                            </div>
                            <div style="display: flex; justify-content: flex-end; align-items: center;">
                                ${textbookBtnHtml}
                                <button class="unit-btn btn-quiz" onclick="app.startQuiz('${unit.id}')" style="margin: 0; background-color: #3498db; color: white; padding: 8px 30px; font-size: 1.1rem;">
                                    <i class="fas fa-pencil-alt"></i> クイズ
                                </button>
                            </div>
                        </div>
                    `;
                });
                
                el.innerHTML = videoBtnHtml + itemsHtml;
            }
            
            listContainer.appendChild(el);
        });
    },
    openMaterial(url) {
        window.open(url, '_blank');
    },

    switchScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) targetScreen.classList.add('active');

        const footer = document.getElementById('app-footer');
        if (footer) {
            if (screenId === 'quiz-screen') {
                footer.classList.add('hidden');
            } else {
                footer.classList.remove('hidden');
            }
        }

        if (screenId === 'home-screen') {
            document.getElementById('page-title').innerHTML = "中学副教科<br>これ一本！";
            document.getElementById('back-button').style.display = 'none';
        } else {
            document.getElementById('back-button').style.display = 'block';
        }
    },

    goBack() {
        const activeScreen = document.querySelector('.screen.active');
        if (!activeScreen) return;
        const active = activeScreen.id;
        
        if (active === 'unit-list-screen') {
            const subject = this.state.currentSubject;
            if (window.UNIT_DATA[subject] && window.UNIT_DATA[subject].length === 1) {
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
        if (!window.VIDEO_MAP || !window.VIDEO_MAP[unitId]) {
            alert("この単元の動画は現在準備中です。アップロード後に視聴できるようになります！");
            return;
        }
        
        const videoSrc = window.VIDEO_MAP[unitId];
        
        // もし将来YouTubeのURLを入れた場合は別タブで開く
        if (videoSrc.startsWith('http')) {
            window.open(videoSrc, '_blank');
        } else {
            // 現在はローカルファイルへのマッピングだが、YouTubeアップ待ちなのでアラート
            alert("動画は現在準備中です。YouTubeへのアップロード完了後に視聴できるようになります！");
        }
    },

    closeVideo() {
        // 使用しなくなったため中身は空にしておく（既存のHTML側のエラーよけ）
    },

    quizState: {
        questions: [],
        currentIndex: 0,
        score: 0,
        currentUnitId: null,
        sessionIncorrect: [] // Track incorrect answers for THIS session
    },

    startQuiz(unitId, retryQuestions = null) {
        prepareInterstitialIfNext();
        if (!retryQuestions) {
            if (!window.QUIZ_DATA || !window.QUIZ_DATA[unitId] || window.QUIZ_DATA[unitId].length === 0) {
                alert("クイズデータがありません。\\n単元ID: " + unitId);
                return;
            }
            const allQuestions = window.QUIZ_DATA[unitId];
            const selectedQuestions = this.selectQuestionsForSession(unitId, allQuestions);

            if (selectedQuestions.length === 0) {
                if(allQuestions.length > 0) {
                    alert("全ての問題を完璧にクリアしました！すごい！");
                    this.quizState.questions = this.shuffleArray([...allQuestions]).slice(0, 5);
                } else {
                    return;
                }
            } else {
                this.quizState.questions = selectedQuestions;
            }
            this.quizState.currentUnitId = unitId; 
        } else {
            this.quizState.questions = retryQuestions;
        }

        this.quizState.currentIndex = 0;
        this.quizState.score = 0;
        this.quizState.sessionIncorrect = [];
        
        document.querySelector('header').style.display = 'none';
        this.switchScreen('quiz-screen');
        document.getElementById('quiz-result').style.display = 'none';
        
        const mainContent = document.querySelector('.quiz-main-content');
        if (mainContent) mainContent.style.display = 'flex';
        
        const quizHeader = document.querySelector('.quiz-header');
        if (quizHeader) quizHeader.style.display = 'flex';

        this.renderQuizQuestion();
    },

    // === Restored Functions ===
    selectQuestionsForSession(unitId, allQuestions) {
        const historyKey = `quiz_history_${this.currentUser}_${unitId}`;
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

        // シャッフルせず、元の問題順（リスト順）を保持したまま
        // 解いた回数が少ない順（同じ回数なら元の問題順）にソートする
        others.sort((a, b) => a.attempts - b.attempts);
        const sortedOthers = others.map(item => item.question);

        const queue = [
            ...unseen,
            ...incorrect,
            ...sortedOthers
        ];

        return queue.slice(0, 5);
    },

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    },

    saveQuizResult(unitId, questionText, isCorrect) {
        const historyKey = `quiz_history_${this.currentUser}_${unitId}`;
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

        document.getElementById('quiz-question').innerHTML = `Q. ${q.q}`;
        
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
            bgLayer.style.opacity = '0.5';
            bgLayer.style.backgroundSize = '';
            questionWrapper.classList.add('wrapper-large-bg');
            questionWrapper.classList.remove('wrapper-pop-bg');
        } else if (!q.img) {
            // Identify background based on unit ID
            let subjectBgPath = null;
            if (this.quizState.currentUnitId.startsWith('m_')) {
                subjectBgPath = 'images/background/bg_pattern_music.png';
            } else if (this.quizState.currentUnitId.startsWith('th_')) {
                subjectBgPath = 'images/background/bg_pattern_tech_home.png';
            } else if (this.quizState.currentUnitId.startsWith('ph_')) {
                subjectBgPath = 'images/background/bg_pattern_pe.png';
            } else if (this.quizState.currentUnitId.startsWith('art_1_')) {
                subjectBgPath = 'images/art/bg_art_1.jpg';
            } else if (this.quizState.currentUnitId.startsWith('art_2_')) {
                subjectBgPath = 'images/art/bg_art_2.jpg';
            } else if (this.quizState.currentUnitId.startsWith('art_history_')) {
                subjectBgPath = 'images/art/bg_art_3.jpg';
            }

            if (subjectBgPath) {
                // Use sub-subject background
                bgLayer.style.backgroundImage = `url('${subjectBgPath}')`;
                bgLayer.style.opacity = '0.5'; // うっすら背景
                bgLayer.style.backgroundSize = 'cover'; // パターンを全体に広げる
                questionWrapper.classList.add('wrapper-pop-bg'); // Make container taller if necessary
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
            btn.innerHTML = choice;
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

        const correctAnswerEl = document.getElementById('feedback-correct-answer');
        if (correctAnswerEl) {
            correctAnswerEl.innerText = `正解：${q.a}`;
            correctAnswerEl.style.display = 'block';
        }

        let commentHTML = `<div id="dynamic-wiki-explanation" style="font-size:1.1rem; color:#555; margin-bottom:10px; line-height: 1.5;">${q.comment || ''}</div>`;
        
        if (q.explanation_image) {
            commentHTML += `<div style="text-align: center; margin-top: 15px;"><img src="${q.explanation_image}" style="max-width: 90%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" alt="Explanation Image"></div>`;
        }

        if (q.aImg) {
            commentHTML += `<div style="text-align: center; margin-top: 15px;"><img src="${q.aImg}" style="max-width: 150px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" alt="Answer Image"></div>`;
        }
        comment.innerHTML = commentHTML;

        // --- Dynamic Wikipedia Trivia Fetch ---
        if (!q.comment) {
            const wikiDiv = document.getElementById('dynamic-wiki-explanation');
            wikiDiv.innerHTML = '<span style="font-size:0.9rem; color:#999;"><i class="fas fa-spinner fa-spin"></i> 豆知識を取得中...</span>';
            
            // Clean up answer string for better search results
            // (e.g. remove reading in parentheses "山田耕筰（やまだこうさく）" -> "山田耕筰")
            let searchKeyword = q.a.replace(/（[^）]+）/g, '').replace(/\([^)]+\)/g, '').trim();
            if (searchKeyword === "山崎朋子") {
                searchKeyword = "山崎朋子 (作曲家)";
            }
            
            // 1. Try REST API (exact summary)
            fetch(`https://ja.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchKeyword)}`)
                .then(res => {
                    if (res.ok) return res.json();
                    throw new Error('Not found in REST API');
                })
                .then(data => {
                    if (data.extract) {
                        wikiDiv.innerHTML = `<span style="display:block; margin-top:10px; padding:12px; background:#f0f8ff; border-radius:8px; border-left:5px solid #3498db; text-align:left; font-size:0.95rem; color:#333; line-height:1.6; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><b>💡 Wiki豆知識:</b><br>${data.extract}</span>`;
                    } else {
                        throw new Error('No extract');
                    }
                })
                .catch(err => {
                    // 2. Fallback to Search API
                    fetch(`https://ja.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchKeyword)}&utf8=&format=json&origin=*`)
                        .then(r => r.json())
                        .then(d => {
                             if(d.query && d.query.search && d.query.search.length > 0) {
                                 const firstResult = d.query.search[0];
                                 // Only use it if the title is reasonably close to avoid completely unrelated results
                                 if (firstResult.title.includes(searchKeyword) || searchKeyword.includes(firstResult.title)) {
                                     const pId = firstResult.pageid;
                                     return fetch(`https://ja.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=1&explaintext=1&pageids=${pId}&format=json&origin=*`)
                                       .then(r => r.json())
                                       .then(d2 => {
                                            const pages = d2.query.pages;
                                            const page = pages[Object.keys(pages)[0]];
                                            if (page && page.extract) {
                                                let ext = page.extract;
                                                // Take max 150 chars for fallback
                                                if (ext.length > 150) ext = ext.substring(0, 150) + '...';
                                                wikiDiv.innerHTML = `<span style="display:block; margin-top:10px; padding:12px; background:#f0f8ff; border-radius:8px; border-left:5px solid #3498db; text-align:left; font-size:0.95rem; color:#333; line-height:1.6; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><b>💡 Wiki豆知識 (${firstResult.title}):</b><br>${ext}</span>`;
                                            } else {
                                                wikiDiv.innerHTML = '';
                                            }
                                       });
                                 } else {
                                     wikiDiv.innerHTML = '';
                                 }
                             } else {
                                 wikiDiv.innerHTML = ''; // Hide spinner
                             }
                        })
                        .catch(e => {
                             wikiDiv.innerHTML = ''; // Hide spinner
                        });
                });
        }

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
        checkAndShowInterstitial();
        document.querySelector('.quiz-main-content').style.display = 'none';
        document.querySelector('.quiz-header').style.display = 'none';

        const resultDiv = document.getElementById('quiz-result');
        resultDiv.style.display = 'block';
        
        const score = this.quizState.score;
        const total = this.quizState.questions.length;
        
        let unitTitle = 'テスト';
        let unitTotal = total;
        
        // Find the actual unit title and total questions from UNIT_DATA
        if (typeof window.UNIT_DATA !== 'undefined') {
            ['music', 'tech_home', 'pe_health', 'art'].forEach(subj => {
                if (window.UNIT_DATA[subj]) {
                    window.UNIT_DATA[subj].forEach(branch => {
                        if (branch.units) {
                            const u = branch.units.find(un => un.id === this.quizState.currentUnitId);
                            if (u) {
                                unitTitle = u.title;
                                unitTotal = (typeof window.QUIZ_DATA !== 'undefined' && window.QUIZ_DATA[u.id]) ? window.QUIZ_DATA[u.id].length : (u.count || total);
                            }
                        }
                    });
                }
            });
        }
        
        // Calculate progress (answeredVars) for this unit
        const hId = `quiz_history_${this.currentUser}_${this.quizState.currentUnitId}`;
        const history = JSON.parse(localStorage.getItem(hId) || '{}');
        let answeredVars = Object.keys(history).length;
        if (answeredVars > unitTotal) answeredVars = unitTotal;

        document.getElementById('score-text').innerHTML = `<span style="font-size: 1.5rem; color: #34495e;">${unitTitle} （${unitTotal}問中${answeredVars}問クリア）</span><br>${total}問中、${score}問正解！`;

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
        if (false) { } else {
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
    
    this.recordLaunchAndSetupStreak();
    
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
    
    // Clean up local storage for deleted user
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith(`quiz_history_${name}_`) || key === `social_activity_${name}` || key === `social_launch_dates_${name}`)) {
            keysToRemove.push(key);
        }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));
    
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
        if (e.target.id === 'help-modal') {
             document.getElementById('help-modal').style.display = 'none';
        }
    });

    // Help
    document.getElementById('nav-help-btn').addEventListener('click', () => {
        document.getElementById('help-modal').style.display = 'flex';
    });
    document.getElementById('close-help-modal').addEventListener('click', () => {
        document.getElementById('help-modal').style.display = 'none';
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
    this.switchStatsTab('music');
};

app.switchStatsTab = function(subject) {
    let tabId = 'music';
    if (subject === 'tech_home') tabId = 'tech';
    if (subject === 'pe_health') tabId = 'pe';
    if (subject === 'art') tabId = 'art';

    document.querySelectorAll('.stats-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.classList.contains('tab-' + tabId)) {
            tab.classList.add('active');
        }
    });

    const wrapper = document.getElementById('stats-content-wrapper');
    if (wrapper) {
        wrapper.className = 'stats-content-wrapper'; 
        wrapper.classList.add('bg-' + subject);
    }

    const container = document.getElementById('stats-content');
    if (!container) return;
    container.innerHTML = '';

    const UNIT_DATA_SRC = typeof window.UNIT_DATA !== 'undefined' ? window.UNIT_DATA : {};
    if (!UNIT_DATA_SRC[subject]) return;

    let html = '';
    UNIT_DATA_SRC[subject].forEach(branch => {
        html += `<div class="stats-chapter-block" style="margin-bottom: 25px;">
                    <div class="stats-chapter-title" style="margin-bottom: 10px; font-size: 1.3rem; border-bottom: 2px solid rgba(0,0,0,0.3); padding-bottom: 5px; color: #333; text-shadow: none;">${branch.title}</div>`;
        
        if (branch.units) {
            branch.units.forEach(unit => {
                const hId = `quiz_history_${app.currentUser}_${unit.id}`;
                const history = JSON.parse(localStorage.getItem(hId) || '{}');
                let answeredVars = Object.keys(history).length;
                
                let totalQ = 0;
                if (window.QUIZ_DATA && typeof window.QUIZ_DATA !== 'undefined' && window.QUIZ_DATA[unit.id]) {
                    totalQ = window.QUIZ_DATA[unit.id].length;
                } else if (unit.count) {
                    totalQ = unit.count;
                }
                
                if (totalQ === 0) return; 
                if (answeredVars > totalQ) answeredVars = totalQ; 

                let percent = Math.floor((answeredVars / totalQ) * 100);
                
                html += `<div class="stats-unit-item" style="display: flex; flex-direction: column; align-items: stretch; margin-bottom: 15px; background: rgba(255,255,255,0.4); padding: 15px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                            <div class="stats-unit-name" style="margin-bottom: 12px; font-size: 1.1rem; color: #333; font-weight: bold; text-shadow: none;">${unit.title} (${totalQ}問中${answeredVars}問)</div>
                            <div class="stats-unit-progress-row" style="display: flex; align-items: center; width: 100%;">
                                <div class="stats-unit-progress-container" style="flex: 1; height: 16px; background: rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; margin-right: 15px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
                                    <div class="stats-unit-progress-bar" style="height: 100%; background: #3498db; width: ${percent}%; transition: width 0.5s ease; box-shadow: none;"></div>
                                </div>
                                <div class="stats-unit-percent" style="flex: 0 0 45px; text-align: right; font-weight: bold; font-size: 1.2rem; color: #333; text-shadow: none;">${percent}%</div>
                            </div>
                         </div>`;
            });
        }
        html += `</div>`;
    });
    
    html += `<div style="margin-top: 40px; margin-bottom: 20px; text-align: center;">
                <button onclick="app.resetStatsData()" style="background-color: #e74c3c; color: white; border: none; padding: 15px 30px; font-size: 1.2rem; font-weight: bold; border-radius: 30px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.2); font-family: 'Zen Kurenaido', sans-serif;">
                    <i class="fas fa-trash-alt"></i> 学習の記録をリセット
                </button>
             </div>
             <!-- Spacer for AdMob Banner (approx 3 lines) -->
             <div style="height: 80px;"></div>`;
    
    container.innerHTML = html;
};

app.resetStatsData = function() {
    if (confirm('学習の記録をリセットしますか？')) {
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(`quiz_history_${this.currentUser}_`)) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(k => localStorage.removeItem(k));
        
        alert('学習の記録をリセットしました。');
        
        let currentSubject = 'music';
        if (document.querySelector('.stats-tab.tab-tech.active')) currentSubject = 'tech_home';
        if (document.querySelector('.stats-tab.tab-pe.active')) currentSubject = 'pe_health';
        if (document.querySelector('.stats-tab.tab-art.active')) currentSubject = 'art';
        
        this.switchStatsTab(currentSubject);
    }
};

app.triviaTimeout = null;
app.showTrivia = function(subject, event) {
        if (!window.TRIVIA_DATA || !window.TRIVIA_DATA[subject]) return;
        
        const triviaList = window.TRIVIA_DATA[subject];
        const randomTrivia = triviaList[Math.floor(Math.random() * triviaList.length)];
        
        const popup = document.getElementById('trivia-popup');
        if (!popup) return;
        
        popup.textContent = randomTrivia;
        
        // Reset classes
        popup.className = 'trivia-popup';
        
        // Position relative to viewport (fixed positioning)
        const rect = event.currentTarget.getBoundingClientRect();
        
        if (subject === 'music' || subject === 'pe') {
            popup.style.left = (rect.right + 15) + 'px';
            popup.style.top = (rect.top - 5) + 'px'; // Aligned near the top of the icon
            popup.classList.add('tail-left');
            popup.style.right = 'auto';
        } else {
            popup.style.right = (window.innerWidth - rect.left + 15) + 'px';
            popup.style.top = (rect.top - 5) + 'px'; // Aligned near the top of the icon
            popup.classList.add('tail-right');
            popup.style.left = 'auto';
        }
        
        // Trigger reflow to restart animation
        popup.classList.remove('show');
        void popup.offsetWidth;
        popup.classList.add('show');
        
        if (app.triviaTimeout) {
            clearTimeout(app.triviaTimeout);
        }
        
        // Hide after 5 seconds
        app.triviaTimeout = setTimeout(() => {
            popup.classList.remove('show');
        }, 5000);
    };

window.onload = () => app.init();
