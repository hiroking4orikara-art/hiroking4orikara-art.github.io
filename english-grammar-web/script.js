// script.js - Core quiz logic for English grammar rearrangement app

// Load questions from local data
let allQuestions = QUESTION_DATA;
let selectedUnits = [];
let quizQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let stats = {};
let currentSessionStats = {};

// User Management Variables
let users = [];
let currentUser = ""; // Name of current user

const UNIT_NAMES = {
  "jhs1_be": "中1 be動詞",
  "jhs1_general": "中1 一般動詞",
  "jhs1_can": "中1 助動詞can",
  "jhs1_prog": "中1 現在進行形",
  "jhs1_past": "中1 過去形",
  "jhs1_imperative": "中1 命令文",
  "jhs1_interrogative": "中1 疑問詞",
  "jhs2_future": "中2 未来形",
  "jhs2_aux": "中2 助動詞",
  "jhs2_inf": "中2 不定詞",
  "jhs2_comp": "中2 比較",
  "jhs2_passive": "中2 受動態",
  "jhs2_svoo": "中2 第4/5文型",
  "jhs2_conjunction": "中2 接続詞",
  "jhs3_perfect": "中3 現在完了",
  "jhs3_participle": "中3 分詞",
  "jhs3_relative": "中3 関係代名詞",
  "jhs3_indirect": "中3 間接疑問",
  "jhs3_subjunctive": "中3 仮定法過去",
  "jhs3_causative": "中3 使役動詞",
  "jhs3_it_for_to": "中3 It is ... for ..."
};

const VIDEO_LINKS = {
  "jhs1_be_1": "https://youtube.com/shorts/YQjEiYveSG0",
  "jhs1_be_2": "https://youtube.com/shorts/JKdic3UI6LU",
  "jhs1_general_1": "https://youtube.com/shorts/eKQ9-WEh_1g",
  "jhs1_general_2": "https://youtube.com/shorts/vaQJbkAYVok",
  "jhs1_can": "https://youtube.com/shorts/WGmxQJODBpA",
  "jhs1_prog": "https://youtube.com/shorts/SlF7ro4O1i4",
  "jhs1_past": "https://youtube.com/shorts/2jv_-abF0mA",
  "jhs1_imperative": "https://youtube.com/shorts/Za239S5mn80",
  "jhs1_interrogative": "https://youtube.com/shorts/a4vsPDe3abM",
  "jhs2_future": "https://youtube.com/shorts/dtTnkPIRr6c",
  "jhs2_aux": "https://youtube.com/shorts/jFhxtvP_jI4",
  "jhs2_inf_1": "https://youtube.com/shorts/Hyx5Nj4C4wA",
  "jhs2_inf_2": "https://youtube.com/shorts/zf6sduSuw0Q",
  "jhs2_comp": "https://youtube.com/shorts/xN_w_J4Df9E",
  "jhs2_passive": "https://youtube.com/shorts/9bLUK5ZtjVY",
  "jhs2_svoo": "https://youtube.com/shorts/OYHjkrUGxe4",
  "jhs2_conjunction": "https://youtube.com/shorts/fDfJ90z0cdo",
  "jhs3_perfect_1": "https://youtube.com/shorts/7eLaGWGuMBo",
  "jhs3_perfect_2": "https://youtube.com/shorts/D0n95kFnGzw",
  "jhs3_participle": "https://youtube.com/shorts/vIVCqHvCsb0",
  "jhs3_relative": "https://youtube.com/shorts/AcdtpUGcjhc",
  "jhs3_indirect_1": "https://youtube.com/shorts/K30tL7ZUIS0",
  "jhs3_indirect_2": "https://youtube.com/shorts/OgakNsuoaMQ",
  "jhs3_subjunctive": "https://youtube.com/shorts/eFYZpFE7HPY",
  "jhs3_causative": "https://youtube.com/shorts/yp0o7hQyLZU",
  "jhs3_it_for_to": "https://youtube.com/shorts/QAVMGdnLjxI"
};

// DOM elements
const startBtn = document.getElementById('startBtn');
const questionCountSelect = document.getElementById('questionCountSelect');
const submitBtn = document.getElementById('submitBtn');
const hintBtn = document.getElementById('hintBtn');
const resetBtn = document.getElementById('resetBtn');
const restartBtn = document.getElementById('restartBtn');
const setupDiv = document.querySelector('.setup');
const japaneseTextDiv = document.getElementById('japaneseText');
const answerAreaDiv = document.getElementById('answerArea');
const partsDiv = document.getElementById('sentenceParts');
const feedbackDiv = document.getElementById('feedback');
const questionCountH2 = document.getElementById('questionCount');
const statsContent = document.getElementById('statsContent');
const readAloudBtn = document.getElementById('readAloudBtn');

// Help Modal Elements
const setupHelpBtn = document.getElementById('setupHelpBtn');
const quizHelpBtn = document.getElementById('quizHelpBtn');
const helpModal = document.getElementById('helpModal');
const closeModal = document.getElementById('closeModal');
const modalText = document.getElementById('modalText');

// Calendar Elements
const calendarBtn = document.getElementById('calendarBtn');
const calendarModal = document.getElementById('calendarModal');
const closeCalendarModal = document.getElementById('closeCalendarModal');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const calendarGrid = document.getElementById('calendarGrid');
const currentMonthLabel = document.getElementById('currentMonthLabel');

let currentCalendarDate = new Date();

// User Elements
const userSelectContainer = document.getElementById('userSelectContainer');
const currentUserBtn = document.getElementById('currentUserBtn');
const userDropdown = document.createElement('div'); // Create dynamic dropdown
userDropdown.id = 'userDropdown';
userDropdown.className = 'portal-dropdown hidden';
document.body.appendChild(userDropdown); // Append to body for z-index isolation
const newUserBtn = document.getElementById('newUserBtn');

// Mascot Elements
const mascotContainer = document.getElementById('mascotContainer');
const mascotBubble = document.getElementById('mascotBubble');

// Initialize app
function init() {
  loadUsers();
  loadStats();
  // Load initial user selection
  loadUserSelection();
  attachUnitListeners();
  attachVideoListeners();

  startBtn.addEventListener('click', startQuiz);
  submitBtn.addEventListener('click', handleSubmitOrNext);
  hintBtn.addEventListener('click', showHint);
  resetBtn.addEventListener('click', resetCurrentQuestion);
  restartBtn.addEventListener('click', restartQuiz);

  setupHelpBtn.addEventListener('click', () => showHelp('setup'));
  quizHelpBtn.addEventListener('click', () => showHelp('quiz'));
  if (readAloudBtn) readAloudBtn.addEventListener('click', readAloudCurrentSentence);
  closeModal.addEventListener('click', () => helpModal.classList.add('hidden'));
  window.addEventListener('click', (e) => {
    if (e.target === helpModal) helpModal.classList.add('hidden');

    // Close dropdown if clicked outside
    // Portal logic: check if target is outside container AND outside dropdown
    if (userSelectContainer && !userSelectContainer.contains(e.target) && !userDropdown.contains(e.target)) {
       userDropdown.classList.add('hidden');
    }
  });

  if (currentUserBtn) {
    currentUserBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent immediate closing
      toggleUserDropdown();
    });
  }

  newUserBtn.addEventListener('click', createNewUser);

  // View Stats Button
  const viewStatsBtn = document.getElementById('viewStatsBtn');
  if (viewStatsBtn) {
    viewStatsBtn.addEventListener('click', () => {
      setupDiv.classList.add('hidden');
      document.querySelector('.stats').classList.remove('hidden');
      // Dummy empty session stats so it doesn't skew global
      currentSessionStats = {};
      renderStats('statsContent'); // Render to stats page
      showMascot("Here are your records!", "君の学習記録だよ！");
    });
  }

  // Close Stats Button
  const closeStatsBtn = document.getElementById('closeStatsBtn');
  if (closeStatsBtn) {
    closeStatsBtn.addEventListener('click', () => {
      document.querySelector('.stats').classList.add('hidden');
      setupDiv.classList.remove('hidden');
      showMascot("Ready to study?", "勉強する準備はいい？");
    });
  }

  // Close Celebration Button
  const closeCelebrationBtn = document.getElementById('closeCelebrationBtn');
  if (closeCelebrationBtn) {
    closeCelebrationBtn.addEventListener('click', () => {
      document.querySelector('.celebration').classList.add('hidden');
      setupDiv.classList.remove('hidden');
      showMascot("Let's keep up the good work!", "この調子で頑張ろう！");
    });
  }

  // Star Click Handler
  const starMark = document.getElementById('starMark');
  if (starMark) {
    starMark.addEventListener('click', () => {
      showCelebration();
    });
  }

  // Calendar Listeners
  if (calendarBtn) {
    calendarBtn.addEventListener('click', () => {
      currentCalendarDate = new Date();
      renderCalendar(currentCalendarDate);
      calendarModal.classList.remove('hidden');
    });
  }
  if (closeCalendarModal) {
    closeCalendarModal.addEventListener('click', () => {
      calendarModal.classList.add('hidden');
    });
  }
  window.addEventListener('click', (e) => {
    if (calendarModal && e.target === calendarModal) {
      calendarModal.classList.add('hidden');
    }
  });
  if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', () => {
      currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
      renderCalendar(currentCalendarDate);
    });
  }
  if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', () => {
      currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
      renderCalendar(currentCalendarDate);
    });
  }


  // Initial Mascot Message
  showMascot("Hi! I'm Mook! Let's study English!", "やあ！僕はムック！英語を勉強しよう！");
}

function showMascot(text, translation = "") {
  if (!mascotContainer) return;
  mascotContainer.classList.remove('hidden');
  mascotBubble.textContent = text;
  mascotBubble.dataset.tooltip = translation; // Set tooltip

  // Animation reset
  mascotBubble.style.animation = 'none';
  mascotBubble.offsetHeight; /* trigger reflow */
  mascotBubble.style.animation = 'fadeIn 0.5s ease-out';
}

function loadUsers() {
  const storedUsers = localStorage.getItem('grammarUsers');
  const storedCurrent = localStorage.getItem('grammarCurrentUser');

  if (storedUsers) {
    users = JSON.parse(storedUsers);
    // Ensure ゲスト always exists
    if (!users.includes('ゲスト')) {
      users.unshift('ゲスト');
      localStorage.setItem('grammarUsers', JSON.stringify(users));
    }
  } else {
    users = ['ゲスト'];
    localStorage.setItem('grammarUsers', JSON.stringify(users));
  }

  if (storedCurrent && users.includes(storedCurrent)) {
    currentUser = storedCurrent;
  } else {
    currentUser = users[0];
    localStorage.setItem('grammarCurrentUser', currentUser);
  }

  renderUserSelect();
  renderUserSelect();
}

function toggleUserDropdown() {
  if (userDropdown.classList.contains('hidden')) {
    // Show and position
    const rect = currentUserBtn.getBoundingClientRect();
    userDropdown.style.top = (rect.bottom + window.scrollY + 5) + 'px'; // +5px buffer
    userDropdown.style.left = (rect.left + window.scrollX) + 'px';
    // Match width logic if needed, or let it be flexible
    userDropdown.style.minWidth = rect.width + 'px';

    userDropdown.classList.remove('hidden');
  } else {
    userDropdown.classList.add('hidden');
  }
}

function renderUserSelect() {
  currentUserBtn.textContent = currentUser;
  userDropdown.innerHTML = '';

  users.forEach(u => {
    const div = document.createElement('div');
    div.className = 'user-option';
    if (u === currentUser) div.classList.add('selected');
    div.textContent = u;

    // Interaction Login for Long Press
    let pressTimer;
    let isLongPress = false;

    const startPress = (e) => {
      // Allow scroll (touchmove will cancel) but identifying press
      isLongPress = false;
      div.classList.add('pressing');

      pressTimer = setTimeout(() => {
        isLongPress = true;
        div.classList.remove('pressing');
        deleteUser(u);
      }, 1000); // 1.0 second
    };

    const cancelPress = () => {
      if (pressTimer) clearTimeout(pressTimer);
      div.classList.remove('pressing');
    };

    const endPress = (e) => {
      if (pressTimer) clearTimeout(pressTimer);
      div.classList.remove('pressing');

      // If it wasn't a long press, treat as click/switch
      if (!isLongPress) {
        // Switch User Logic
        switchUser(u);
        userDropdown.classList.add('hidden');
      }
      isLongPress = false;
    };

    // Mobile events
    // Important: Do not use passive:true if we want to potentially prevent default (though we rely on contextmenu)
    div.addEventListener('touchstart', startPress, { passive: true });
    div.addEventListener('touchend', endPress);
    div.addEventListener('touchmove', cancelPress);

    // PC events
    div.addEventListener('mousedown', startPress);
    div.addEventListener('mouseup', endPress);
    div.addEventListener('mouseleave', cancelPress);

    // Prevent default context menu on long press (Android)
    div.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });

    userDropdown.appendChild(div);
  });
}

function deleteUser(name) {
  if (name === 'ゲスト') {
    // Cannot delete Guest
    // alert('「ゲスト」アカウントは削除できません。');
    return; // Silently fail or alert if preferred, but user spec said Guest check
  }

  // Hack to ensure the dropdown closes or stays consistent
  userDropdown.classList.add('hidden');

  if (confirm(`${name} さんのアカウントを削除しますか？\n（学習記録も消去されます）`)) {
    // Delete logic
    users = users.filter(u => u !== name);
    localStorage.setItem('grammarUsers', JSON.stringify(users));
    localStorage.removeItem(`grammarStats_${name}`);

    if (currentUser === name) {
      currentUser = 'ゲスト';
      localStorage.setItem('grammarCurrentUser', currentUser);
      alert('現在のアカウントが削除されたため、ゲストに切り替えました。');
      loadStats(); // Reload stats for Guest
      // If we were viewing stats, maybe return to setup?
      restartQuiz();
    }

    renderUserSelect();
  }
}

function switchUser(name) {
  if (currentUser === name) return;

  currentUser = name;
  localStorage.setItem('grammarCurrentUser', currentUser);
  loadStats();
  loadUserSelection(); // Load persistence
  renderUserSelect(); // Update selected style

  if (!setupDiv.classList.contains('hidden')) {
    // Just switching on setup screen
  } else {
    alert('ユーザーが切り替わりました。トップに戻ります。');
    restartQuiz();
  }
}

function createNewUser() {
  const name = prompt('新しいユーザー名を入力してください:');
  if (name && name.trim() !== "") {
    if (users.includes(name)) {
      alert('その名前は既に使われています。');
      return;
    }
    users.push(name);
    localStorage.setItem('grammarUsers', JSON.stringify(users));
    switchUser(name);
    // renderUserSelect called inside switchUser
  }
}

function loadStats() {
  const key = `grammarStats_${currentUser}`;
  const stored = localStorage.getItem(key);
  if (stored) {
    stats = JSON.parse(stored);
  } else {
    stats = {};
  }

  // Check completion status to show star
  updateStarVisibility();
}

function saveStats() {
  const key = `grammarStats_${currentUser}`;
  localStorage.setItem(key, JSON.stringify(stats));
}

function updateStarVisibility() {
  const starMark = document.getElementById('starMark');
  if (stats.hasCompletedAll) {
    starMark.classList.remove('hidden');
  } else {
    starMark.classList.add('hidden');
  }
}

function updateSelectedUnits() {
  const checkboxes = document.querySelectorAll('.setup .units input[type="checkbox"]');
  selectedUnits = Array.from(checkboxes)
    .filter(c => c.checked)
    .map(c => c.value);
}

function attachUnitListeners() {
  const checkboxes = document.querySelectorAll('.setup .units input[type="checkbox"]');

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      updateSelectedUnits();
      updateSelectAllState(cb);
      saveUserSelection(); // Save persistence
    });
  });

  // Bulk Selection Logic
  const grades = ['jhs1', 'jhs2', 'jhs3'];
  grades.forEach(grade => {
    const startStr = grade + '_';
    const selectAll = document.getElementById(`selectAll_${grade}`);
    if (!selectAll) return;

    const gradeBoxes = Array.from(checkboxes).filter(cb => cb.value.startsWith(startStr));

    selectAll.addEventListener('change', () => {
      gradeBoxes.forEach(cb => cb.checked = selectAll.checked);
      updateSelectedUnits();
      saveUserSelection(); // Save persistence for bulk
    });
  });

  // initial setup
  updateSelectedUnits();
}

function updateSelectAllState(changedCheckbox) {
  const val = changedCheckbox.value;
  let grade = "";
  if (val.startsWith("jhs1_")) grade = "jhs1";
  else if (val.startsWith("jhs2_")) grade = "jhs2";
  else if (val.startsWith("jhs3_")) grade = "jhs3";

  if (!grade) return;

  const selectAll = document.getElementById(`selectAll_${grade}`);
  if (!selectAll) return;

  const checkboxes = document.querySelectorAll('.setup .units input[type="checkbox"]');
  const gradeBoxes = Array.from(checkboxes).filter(cb => cb.value.startsWith(grade + "_"));

  const allChecked = gradeBoxes.every(cb => cb.checked);
  selectAll.checked = allChecked;
}

function attachVideoListeners() {
  const videoBtns = document.querySelectorAll('.video-btn');
  videoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const unit = btn.dataset.unit;
      const url = VIDEO_LINKS[unit];
      if (url && !url.includes("DummyLink")) {
        window.open(url, '_blank');
      } else {
        alert("ただいまこの単元の動画を準備・アップロード中です！\n完了までしばらくお待ちください。");
      }
    });
  });
}

function showHelp(type) {
  let content = "";
  if (type === 'setup') {
    content = "<h3>このアプリの使い方</h3><p><b>カレンダー</b><br>カレンダーアイコンを押すと学習記録カレンダーが見れます。</p><p><b>ユーザー切り替え</b><br>画面上部の名前を選んで、自分の学習記録を保存できます。</p><p><b>学習方法</b><br>勉強したい単元にチェックを入れ、問題数（5～15問）を選んでスタートしてください。</p><p><b>優先出題</b><br>まだ解いていない問題 ＞ 間違えた問題 ＞ 正解済みの問題 の順番で優先的に出題されます。</p>";
  } else if (type === 'quiz') {
    content = "<h3>クイズの解き方</h3><p><b>① 単語の並べ替え</b><br>下の単語群からクリックして、正しい順番に並べてください。</p><p><b>② 日本語訳の表示</b><br>英単語にマウスカーソルを合わせて1秒ほど待つと、日本語の意味が表示されます。</p><p><b>③ ヒント</b><br>「💡 ヒント」ボタンを押すと、次に選ぶべき正解の単語が光ります。</p><p><b>④ リセット</b><br>「↺ リセット」ボタンで、並べた単語を最初に戻せます。</p>";
  }
  modalText.innerHTML = content;
  helpModal.classList.remove('hidden');
}

// Reset Stats Button Logic
const resetStatsBtn = document.getElementById('resetStatsBtn');
if (resetStatsBtn) {
  resetStatsBtn.addEventListener('click', () => {
    if (confirm("学習記録を初期化しますか？\n（この操作は取り消せません）")) {
      stats = {};
      saveStats();
      renderStats('statsContent');
      alert("学習記録をリセットしました。");
    }
  });
}

function startQuiz() {
  if (selectedUnits.length === 0) {
    alert('少なくとも1つの単元を選択してください。');
    return;
  }
  const filtered = allQuestions.filter(q => selectedUnits.includes(q.unit));

  if (filtered.length === 0) {
    alert('選択された単元の問題がありません。');
    return;
  }

  const count = parseInt(questionCountSelect.value, 10) || 5;
  const unitStatsFunc = (unit) => stats[unit] || { solved: [], history: {} };
  const getQId = (q) => q.correctOrder.join(' ');
  const unsolved = [];
  const incorrect = [];
  const correct = [];

  filtered.forEach(q => {
    const uStats = unitStatsFunc(q.unit);
    const qId = getQId(q);
    const isSolved = uStats.solved && uStats.solved.includes(qId);

    if (isSolved) {
      correct.push(q);
    } else {
      if (uStats.history && uStats.history[qId] === 'incorrect') {
        incorrect.push(q);
      } else {
        unsolved.push(q);
      }
    }
  });

  [unsolved, incorrect, correct].forEach(arr => arr.sort(() => Math.random() - 0.5));

  quizQuestions = [];
  const fill = (arr) => {
    while (quizQuestions.length < count && arr.length > 0) {
      quizQuestions.push(arr.shift());
    }
  };

  fill(unsolved);
  fill(incorrect);
  fill(correct);

  currentSessionStats = {};
  selectedUnits.forEach(u => {
    currentSessionStats[u] = { attempts: 0, correct: 0 };
  });

  currentIndex = 0;
  setupDiv.classList.add('hidden');
  document.querySelector('.quiz').classList.remove('hidden');
  mascotContainer.classList.remove('hidden');
  renderCurrentQuestion();

  showMascot("Let's do this! Good luck!", "さあ始めるよ！がんばって！");
}

function renderCurrentQuestion() {
  const q = quizQuestions[currentIndex];
  questionCountH2.textContent = `問題 ${currentIndex + 1} / ${quizQuestions.length}`;

  let promptText = "";
  if (q.explanation.includes('(')) {
    const parts = q.explanation.split('(');
    promptText = parts[0].trim();
  } else {
    promptText = q.explanation;
  }
  japaneseTextDiv.textContent = promptText;

  userAnswers = [];
  renderAnswerArea();
  renderWordBank(q);

  feedbackDiv.classList.add('hidden');
  submitBtn.disabled = false;
  hintBtn.disabled = false;
  resetBtn.disabled = false;
}

function renderWordBank(q) {
  partsDiv.innerHTML = '';
  const words = q.sentenceParts.map((word, i) => ({ word, id: i }));
  const shuffled = [...words].sort(() => Math.random() - 0.5);

  shuffled.forEach(item => {
    const btn = document.createElement('div');
    btn.className = 'part';
    btn.textContent = item.word;
    btn.dataset.id = item.id;
    btn.dataset.word = item.word;

    if (typeof getTranslation === 'function') {
      const trans = getTranslation(item.word);
      if (trans) {
        btn.dataset.tooltip = trans;
      }
    }

    btn.addEventListener('click', () => {
      if (btn.classList.contains('used')) return;
      userAnswers.push(item);
      btn.classList.add('used');
      renderAnswerArea();
    });
    partsDiv.appendChild(btn);
  });
}

function resetCurrentQuestion() {
  userAnswers = [];
  renderAnswerArea();
  const parts = partsDiv.querySelectorAll('.part');
  parts.forEach(p => p.classList.remove('used'));
}

function renderAnswerArea() {
  answerAreaDiv.innerHTML = '';
  userAnswers.forEach((item, index) => {
    const btn = document.createElement('div');
    btn.className = 'part';
    btn.textContent = item.word;

    if (typeof getTranslation === 'function') {
      const trans = getTranslation(item.word);
      if (trans) {
        btn.dataset.tooltip = trans;
      }
    }
    btn.addEventListener('click', () => {
      userAnswers.splice(index, 1);
      const bankBtn = partsDiv.querySelector(`.part[data-id="${item.id}"]`);
      if (bankBtn) bankBtn.classList.remove('used');
      renderAnswerArea();
    });
    answerAreaDiv.appendChild(btn);
  });
}

let sessionMistakes = [];

function submitAnswer() {
  const currentQ = quizQuestions[currentIndex];
  const selectedWords = userAnswers.map(u => u.word);
  const correct = currentQ.correctOrder;
  const isCorrect = JSON.stringify(selectedWords) === JSON.stringify(correct);

  const unit = currentQ.unit;
  const qId = currentQ.correctOrder.join(' ');

  if (!stats[unit]) stats[unit] = { attempts: 0, correct: 0, solved: [], history: {} };
  if (!stats[unit].solved) stats[unit].solved = [];
  if (!stats[unit].history) stats[unit].history = {};

  stats[unit].attempts += 1;

  if (isCorrect) {
    stats[unit].correct += 1;
    if (!stats[unit].solved.includes(qId)) {
      stats[unit].solved.push(qId);
    }
    stats[unit].history[qId] = 'correct';

    if (!currentSessionStats[unit]) currentSessionStats[unit] = { attempts: 0, correct: 0 };
    currentSessionStats[unit].attempts += 1;
    currentSessionStats[unit].correct += 1;

    showMascot("Excellent!", "素晴らしい！");
  } else {
    stats[unit].history[qId] = 'incorrect';

    if (!currentSessionStats[unit]) currentSessionStats[unit] = { attempts: 0, correct: 0 };
    currentSessionStats[unit].attempts += 1;

    showMascot("Don't give up!", "あきらめないで！");
    sessionMistakes.push(currentQ);
  }

  saveStats();
  saveActivity(1); // Track activity

  feedbackDiv.classList.remove('hidden');
  partsDiv.classList.add('hidden');

  if (isCorrect) {
    feedbackDiv.innerHTML = `<span style="color:#8fdb8f; font-size:1.2em">正解！</span><br>${currentQ.explanation}`;
  } else {
    feedbackDiv.innerHTML = `<span style="color:#ff6b6b; font-size:1.2em">不正解...</span><br>正解: ${correct.join(' ')}<br>解説: ${currentQ.explanation}`;
  }

  submitBtn.textContent = '次へ';
  submitBtn.classList.add('next-mode');
  submitBtn.disabled = false;

  const nextActionDiv = document.getElementById('nextAction');
  if (nextActionDiv) nextActionDiv.classList.add('hidden');
}

function showHint() {
  const currentQ = quizQuestions[currentIndex];

  const currentWords = userAnswers.map(u => u.word);
  let isPrefixCorrect = true;
  for (let i = 0; i < currentWords.length; i++) {
    if (currentWords[i] !== currentQ.correctOrder[i]) {
      isPrefixCorrect = false;
      break;
    }
  }

  if (!isPrefixCorrect) {
    if (resetBtn) {
      resetBtn.classList.add('flash-hint');
      setTimeout(() => {
        resetBtn.classList.remove('flash-hint');
      }, 1500);
    }
    showMascot("Something looks wrong...", "並び順が違うかも...リセットしてみよう！");
    return;
  }

  const nextIndex = userAnswers.length;
  if (nextIndex >= currentQ.correctOrder.length) return;
  const correctWord = currentQ.correctOrder[nextIndex];

  const candidates = Array.from(partsDiv.querySelectorAll('.part:not(.used)')).filter(el => el.dataset.word === correctWord);
  if (candidates.length > 0) {
    const target = candidates[0];
    target.classList.add('flash-hint');
    setTimeout(() => {
      target.classList.remove('flash-hint');
    }, 1500);
    showMascot("You can do it!", "次はこれだよ！");
  }
}

function handleSubmitOrNext() {
  if (submitBtn.textContent === '次へ') {
    feedbackDiv.classList.add('hidden');
    partsDiv.classList.remove('hidden');
    submitBtn.textContent = '回答する';
    submitBtn.classList.remove('next-mode');

    hintBtn.disabled = false;
    resetBtn.disabled = false;

    currentIndex++;
    if (currentIndex < quizQuestions.length) {
      renderCurrentQuestion();
      showMascot("Next question!", "次の問題だよ！");
    } else {
      showResults();
    }
  } else {
    submitAnswer();
  }
}

function readAloudCurrentSentence() {
  if (quizQuestions.length === 0 || currentIndex >= quizQuestions.length) return;
  const currentQ = quizQuestions[currentIndex];
  const textToRead = currentQ.correctOrder.join(' ');
  
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
    
    if (readAloudBtn) {
      readAloudBtn.classList.add('flash-hint');
      setTimeout(() => readAloudBtn.classList.remove('flash-hint'), 1000);
    }
  } else {
    alert("お使いのブラウザは音声読み上げに対応していません。");
  }
}

function showResults() {
  document.querySelector('.quiz').classList.add('hidden');
  document.querySelector('.results').classList.remove('hidden');

  const nextActionDiv = document.getElementById('nextAction');
  if (nextActionDiv) nextActionDiv.classList.add('hidden');

  let totalAttempts = 0;
  let totalCorrect = 0;
  for (const [unit, sStats] of Object.entries(currentSessionStats)) {
    totalAttempts += sStats.attempts;
    totalCorrect += sStats.correct;
  }

  const container = document.getElementById('resultsContent');
  container.innerHTML = `
    <div style="text-align:center; margin-bottom:1rem;">
      <h3 style="font-size:1.5rem; color:#ffd700;">${totalCorrect} / ${totalAttempts} 正解！</h3>
    </div>
  `;

  if (sessionMistakes.length > 0) {
    let mistakesHtml = `<div style="text-align:left; background:rgba(255,0,0,0.1); padding:1rem; border-radius:8px; margin-bottom:1rem;">
      <h4>復習リスト (${sessionMistakes.length}問)</h4>
      <ul style="padding-left:1.2rem;">`;

    sessionMistakes.forEach(q => {
      mistakesHtml += `<li style="margin-bottom:0.5rem;">
        <div><b>${q.correctOrder.join(' ')}</b></div>
        <div style="font-size:0.9em; color:#ddd;">${q.explanation}</div>
      </li>`;
    });
    mistakesHtml += `</ul></div>`;
    container.innerHTML += mistakesHtml;

    const retryBtn = document.createElement('button');
    retryBtn.className = 'btn';
    retryBtn.style.background = '#e17055';
    retryBtn.textContent = `${sessionMistakes.length}問を解きなおす`;
    retryBtn.onclick = startRetryQuiz;
    container.appendChild(retryBtn);
  } else {
    const perfectMsg = document.createElement('p');
    perfectMsg.textContent = "全問正解！素晴らしい！";
    perfectMsg.style.textAlign = 'center';
    container.appendChild(perfectMsg);
  }

  let mascotMsg = "Keep it up!";
  let mascotTrans = "その調子！";
  if (totalAttempts > 0 && totalCorrect === totalAttempts) {
    mascotMsg = "Perfect!!";
    mascotTrans = "完璧！！";
  }
  showMascot(mascotMsg, mascotTrans);

  checkCompletionAndTrigger();
  checkAndShowAd();
}

function startRetryQuiz() {
  if (sessionMistakes.length === 0) return;

  quizQuestions = [...sessionMistakes];
  sessionMistakes = [];

  currentSessionStats = {};
  quizQuestions.forEach(q => {
    if (!currentSessionStats[q.unit]) currentSessionStats[q.unit] = { attempts: 0, correct: 0 };
  });

  currentIndex = 0;
  document.querySelector('.results').classList.add('hidden');
  document.querySelector('.quiz').classList.remove('hidden');
  renderCurrentQuestion();
  showMascot("Let's review!", "復習しよう！");
}


function renderStats(targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = '';
  let html = `<p>ユーザー: <b>${currentUser}</b> さんの学習状況</p>`;
  html += `<table style="width:100%; border-collapse: collapse; margin-top:1rem;">
            <tr style="background:rgba(255,255,255,0.2); text-align:left;">
                <th style="padding:0.5rem">単元</th>
                <th style="padding:0.5rem">正解率</th>
                <th style="padding:0.5rem">進捗率 (クリア済み)</th>
            </tr>`;

  let hasStats = false;
  const unitCounts = {};
  const validQuestionIds = new Set();

  allQuestions.forEach(q => {
    unitCounts[q.unit] = (unitCounts[q.unit] || 0) + 1;
    validQuestionIds.add(q.correctOrder.join(' '));
  });

  for (const unit of Object.keys(UNIT_NAMES)) {
    const totalQuestions = unitCounts[unit] || 0;
    if (totalQuestions === 0) continue;

    const data = stats[unit] || { attempts: 0, correct: 0, solved: [], history: {} };
    if (data.attempts === 0 && (!data.solved || data.solved.length === 0)) continue;

    hasStats = true;

    const displayName = UNIT_NAMES[unit] || unit;

    let validHistoryKeys = [];
    if (data.history) {
      validHistoryKeys = Object.keys(data.history).filter(qId => validQuestionIds.has(qId));
    }

    const currentCorrectCount = validHistoryKeys.filter(qId => data.history[qId] === 'correct').length;
    const attemptedCount = validHistoryKeys.length;
    const accuracy = attemptedCount > 0 ? ((currentCorrectCount / attemptedCount) * 100).toFixed(0) : 0;

    const uniqueSolved = new Set(data.solved ? data.solved.filter(id => validQuestionIds.has(id)) : []);
    const solvedCount = uniqueSolved.size;
    const progress = ((solvedCount / totalQuestions) * 100).toFixed(0);

    html += `<tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.5rem">${displayName}</td>
                <td style="padding:0.5rem">${accuracy}% (${currentCorrectCount}/${attemptedCount})</td>
                <td style="padding:0.5rem">
                    <div style="background:rgba(0,0,0,0.3); border-radius:4px; height:10px; width:100px; display:inline-block; overflow:hidden;">
                        <div style="background:#55efc4; width:${progress}%; height:100%;"></div>
                    </div>
                </td>
             </tr>`;
  }
  html += '</table>';

  if (!hasStats) html += '<p style="margin-top:1rem;">まだ学習履歴がありません。</p>';
  container.innerHTML = html;
}

function restartQuiz() {
  document.querySelector('.results').classList.add('hidden');
  document.querySelector('.stats').classList.add('hidden');
  document.querySelector('.quiz').classList.add('hidden');
  document.querySelector('.celebration').classList.add('hidden');
  document.querySelector('.setup').classList.remove('hidden'); // Ensure setup is targeted correctly if setupDiv variable is not available in scope, but it is global.
  setupDiv.classList.remove('hidden');
  showMascot("Welcome back!", "おかえり！");
}

function checkAllCleared() {
  const units = Object.keys(UNIT_NAMES);
  let allCleared = true;

  const unitCounts = {};
  allQuestions.forEach(q => {
    unitCounts[q.unit] = (unitCounts[q.unit] || 0) + 1;
  });

  for (const unit of units) {
    const total = unitCounts[unit] || 0;
    const uStats = stats[unit];
    if (!uStats || !uStats.solved) {
      allCleared = false;
      break;
    }
    const uniqueSolved = new Set(uStats.solved);
    if (uniqueSolved.size < total) {
      allCleared = false;
      break;
    }
  }
  return allCleared;
}

function showCelebration() {
  setupDiv.classList.add('hidden');
  document.querySelector('.quiz').classList.add('hidden');
  document.querySelector('.stats').classList.add('hidden');
  document.querySelector('.results').classList.add('hidden');

  const celSection = document.querySelector('.celebration');
  celSection.classList.remove('hidden');

  showMascot("Congratulations!!", "おめでとう！！");
}

function checkCompletionAndTrigger() {
  if (checkAllCleared()) {
    if (!stats.hasCompletedAll) {
      stats.hasCompletedAll = true;
      saveStats();
      updateStarVisibility();
      showCelebration();
    }
  }
}

// AdMob Integration
const ADMOB_AD_UNIT_ID = 'ca-app-pub-6979818021800533/1113931149'; // Production ID for Interstitial

async function initAdMob() {
  if (typeof Capacitor !== 'undefined' && Capacitor.Plugins && Capacitor.Plugins.AdMob) {
    try {
      const { AdMob } = Capacitor.Plugins;
      await AdMob.initialize();
      await AdMob.prepareInterstitial({
        adId: ADMOB_AD_UNIT_ID,
        isTesting: false
      });
    } catch (e) {
      console.error("AdMob init failed", e);
    }
  }
}

async function checkAndShowAd() {
  try {
    let count = parseInt(localStorage.getItem('adQuizCounter') || '0');
    count++;
    localStorage.setItem('adQuizCounter', count);

    if (count % 3 === 0) {
      if (typeof Capacitor !== 'undefined' && Capacitor.Plugins && Capacitor.Plugins.AdMob) {
        const { AdMob } = Capacitor.Plugins;
        await AdMob.showInterstitial();
        await AdMob.prepareInterstitial({
          adId: ADMOB_AD_UNIT_ID,
          isTesting: false
        });
      }
    }
  } catch (e) {
    console.error("Ad show failed", e);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  init();
  initAdMob();
});


// --- Calendar and Persistence Logic ---
function saveActivity(count) {
  if (!currentUser) return;
  const today = new Date().toISOString().split('T')[0];
  const key = `activity_${currentUser}`;
  let activity = JSON.parse(localStorage.getItem(key) || '{}');
  activity[today] = (activity[today] || 0) + count;
  localStorage.setItem(key, JSON.stringify(activity));
}

function renderCalendar(date) {
  if (!calendarGrid || !currentMonthLabel) return;
  calendarGrid.innerHTML = '';

  const year = date.getFullYear();
  const month = date.getMonth(); // 0-indexed

  currentMonthLabel.textContent = `${year}年 ${month + 1}月`;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0=Sun

  // Headers
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  days.forEach(d => {
    const header = document.createElement('div');
    header.className = 'calendar-cell calendar-header';
    header.textContent = d;
    calendarGrid.appendChild(header);
  });

  // Empty slots
  for (let i = 0; i < firstDayIndex; i++) {
    const empty = document.createElement('div');
    empty.className = 'calendar-cell';
    calendarGrid.appendChild(empty);
  }

  // Days
  const key = `activity_${currentUser}`;
  let activity = JSON.parse(localStorage.getItem(key) || '{}');

  const todayStr = new Date().toISOString().split('T')[0];

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell';

    // Check Date String
    const mStr = (month + 1).toString().padStart(2, '0');
    const dStr = day.toString().padStart(2, '0');
    const dateStr = `${year}-${mStr}-${dStr}`;

    const numDiv = document.createElement('div');
    numDiv.className = 'calendar-day-num';
    numDiv.textContent = day;
    cell.appendChild(numDiv);

    if (activity[dateStr]) {
      const countDiv = document.createElement('div');
      countDiv.className = 'calendar-count';
      countDiv.textContent = activity[dateStr];
      cell.appendChild(countDiv);
      cell.classList.add('calendar-has-activity');
    }

    if (dateStr === todayStr) {
      cell.classList.add('calendar-today');
    }

    calendarGrid.appendChild(cell);
  }
}

function saveUserSelection() {
  if (!currentUser) return;
  const selection = Array.from(document.querySelectorAll('.setup .units input[type="checkbox"]:checked')).map(cb => cb.value);
  localStorage.setItem(`selection_${currentUser}`, JSON.stringify(selection));
}

function loadUserSelection() {
  if (!currentUser) return;
  document.querySelectorAll('.setup .units input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('.select-all input').forEach(cb => cb.checked = false);

  const selection = JSON.parse(localStorage.getItem(`selection_${currentUser}`) || '[]');
  selection.forEach(val => {
    const cb = document.querySelector(`.setup .units input[value="${val}"]`);
    if (cb) cb.checked = true;
  });

  updateSelectAllState({ value: 'jhs1_' });
  updateSelectAllState({ value: 'jhs2_' });
  updateSelectAllState({ value: 'jhs3_' });

  // Update internal state
  updateSelectedUnits();
}
