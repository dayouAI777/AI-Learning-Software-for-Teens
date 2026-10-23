const lessons = [
  {
    id: 'ai-basics', number: '01', title: 'AI 侦探出动！', shortTitle: '发现生活里的 AI', icon: '🔎', tone: 'purple', time: '3 分钟',
    storyTitle: '相册怎么认出小猫的？', story: '米粒的相册把所有小猫照片自动放到了一起。它没有一只只问“这是猫吗”，那它是怎么认出来的？', concept: 'AI 是人们设计的计算机工具。它能从很多例子里找规律，帮我们完成一些任务；有时也会认错。',
    missionTitle: '帮小侦探找出 AI', missionPrompt: '点一下你觉得用了 AI 的事情。',
    choices: [
      { icon: '📸', title: '相册认出猫咪', hint: '从照片里找特征', correct: true, feedback: '找到了！AI 看过许多照片，学会了猫咪的一些特征。' },
      { icon: '💡', title: '按开关，灯亮了', hint: '电路接通就会亮', correct: false, feedback: '这是电路在工作，通常不需要 AI 来判断或学习。' },
      { icon: '🍂', title: '树叶随风飘', hint: '风吹动了树叶', correct: false, feedback: '这是自然现象，不是计算机在完成任务。' }
    ],
    quizTitle: '最后一个小线索', quiz: 'AI 看过许多例子后，通常会怎样？',
    answers: [
      { text: '从例子里找规律，再用规律做判断', correct: true, feedback: '没错！AI 常常从很多例子中学习规律，但它也会判断错。' },
      { text: '像人一样拥有自己的感受', correct: false, feedback: 'AI 可以做一些聪明的任务，但它没有人的生活经验和感受。' },
      { text: '自动知道所有事情的答案', correct: false, feedback: 'AI 不了解所有事情，也可能出错；重要内容要自己判断。' }
    ], prize: 'AI 观察员'
  },
  {
    id: 'aigc', number: '02', title: 'AIGC 魔法工坊', shortTitle: '认识会创作的 AI', icon: '🎨', tone: 'mint', time: '3 分钟',
    storyTitle: '一句话，变出一张图？', story: '阿哲输入“戴着宇航员头盔的柴犬，在月球上踢足球”。几秒后，屏幕上出现了一张新画面。', concept: 'AIGC（人工智能生成内容）就是 AI 按要求创作文字、图片等。作品还要由人检查和修改。',
    missionTitle: '哪件事是“生成内容”？', missionPrompt: '选一个 AI 正在创作新内容的例子。',
    choices: [
      { icon: '🖼️', title: '按描述画一只太空柴犬', hint: '生成一张新的图片', correct: true, feedback: '答对了！AI 根据你的描述生成了一张新图片，这就是 AIGC。' },
      { icon: '🔍', title: '在相册里找狗狗照片', hint: '从已有照片中查找', correct: false, feedback: '这是在已有照片里查找，不是在生成新内容。' },
      { icon: '🧮', title: '计算 23 加 19', hint: '算出一个数字', correct: false, feedback: '这是计算任务，不是生成文字、图片等新内容。' }
    ],
    quizTitle: '创作也要会判断', quiz: 'AI 写了一段恐龙介绍，交给同学前先做什么？',
    answers: [
      { text: '直接复制，AI 一定知道得最准确', correct: false, feedback: 'AI 可能会编错事实，不能把它的回答当成标准答案。' },
      { text: '查证重要事实，再加入自己的修改', correct: true, feedback: '对！AI 可以帮忙起草，检查和修改仍然由你负责。' },
      { text: '删掉内容来源，就能当成自己的作品', correct: false, feedback: '使用别人的内容要尊重来源和规则，也要加入自己的想法。' }
    ], prize: '灵感魔法师'
  },
  {
    id: 'create', number: '03', title: '提示词设计师', shortTitle: '让点子更清楚', icon: '🚀', tone: 'coral', time: '4 分钟',
    storyTitle: '“做个海报”还不够具体', story: '小组要办旧书交换日。小满只告诉 AI“做个海报”，结果谁来看、海报写什么，都还不清楚。', concept: '好提示词会说清楚：要做什么、给谁看、想要什么感觉。你可以边看结果边补充，不必一次写完美。',
    missionTitle: '给提示词补一块积木', missionPrompt: '小满想让低年级同学也看懂。她该补充哪句话？',
    choices: [
      { icon: '👧', title: '给三年级同学看', hint: '补上读者是谁', correct: true, feedback: '很好！告诉 AI 读者是谁，它就更容易调整词语和难度。' },
      { icon: '✨', title: '让我惊讶一下', hint: '还不知道想要什么', correct: false, feedback: '可以加创意，但先说明给谁看，内容才更容易合适。' },
      { icon: '📄', title: '随便写一点就好', hint: '没有说清目标', correct: false, feedback: '目标越清楚，AI 越能靠近你的想法；之后还能继续修改。' }
    ],
    quizTitle: '选一个更清楚的提示', quiz: '哪句话更容易得到合适的海报？',
    answers: [
      { text: '帮我做个东西。', correct: false, feedback: '这句话没有说要做什么，也没说给谁看。' },
      { text: '为三年级同学设计旧书交换海报，颜色温暖，标题要醒目。', correct: true, feedback: '很清楚！任务、读者和风格都说到了，接下来还能继续修改。' },
      { text: '你应该知道我喜欢什么。', correct: false, feedback: 'AI 不会自动知道你的想法；把要求说出来会更有帮助。' }
    ], prize: '点子创造家'
  }
];

const topics = [
  { id: 'book', icon: '📚', label: '旧书交换海报', title: '旧书出发，\n新故事到家！', caption: '给同学的一张温暖海报', request: '为班级旧书交换日设计一张海报' },
  { id: 'ocean', icon: '🐢', label: '海龟冒险故事', title: '小海龟的\n深海大冒险', caption: '一个关于海洋的故事', request: '写一个关于小海龟的海洋冒险故事' },
  { id: 'invention', icon: '💡', label: '校园小发明', title: '让教室\n更方便一点！', caption: '从一个小问题开始', request: '想一个能让教室生活更方便的小发明' }
];
const audiences = [
  { id: 'classmates', icon: '👫', label: '同学', phrase: '班上的同学' },
  { id: 'family', icon: '🏠', label: '家人', phrase: '我的家人' },
  { id: 'younger', icon: '🧒', label: '低年级', phrase: '低年级的小朋友' }
];
const styles = [
  { id: 'cute', icon: '🌈', label: '可爱有趣', phrase: '可爱、有趣的感觉' },
  { id: 'comic', icon: '💥', label: '漫画风', phrase: '像漫画一样活泼' },
  { id: 'warm', icon: '☀️', label: '温暖清新', phrase: '温暖、清新的感觉' }
];

const storageKey = 'ai-explorer-progress-v2';
let completedLessons = readProgress();
let activeLessonId = lessons[0].id;
let activeStep = 0;
let selectedClue = null;
let selectedAnswer = null;
let selectedTopic = topics[0].id;
let selectedAudience = audiences[0].id;
let selectedStyle = styles[0].id;
let toastTimer;

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || localStorage.getItem('ai-creator-progress-v1') || '[]');
    return Array.isArray(saved) ? saved.filter(id => lessons.some(lesson => lesson.id === id)) : [];
  } catch (_) { return []; }
}

function saveProgress() {
  try { localStorage.setItem(storageKey, JSON.stringify(completedLessons)); } catch (_) { /* 浏览器不支持本地保存时，当前页面仍可继续 */ }
}

function updateProgress() {
  const count = completedLessons.length;
  const percentage = Math.round(count / lessons.length * 100) + '%';
  document.getElementById('header-stars').textContent = String(count);
  document.getElementById('home-progress-label').textContent = count + ' / ' + lessons.length;
  document.getElementById('home-progress-fill').style.width = percentage;
}

function renderRouteCards() {
  const container = document.getElementById('route-cards');
  container.innerHTML = lessons.map((lesson, index) => {
    const done = completedLessons.includes(lesson.id);
    const next = !done && lessons.findIndex(item => !completedLessons.includes(item.id)) === index;
    const action = done ? '再玩一次' : (next ? '现在出发' : '去看看');
    return `<button class="route-card ${done ? 'is-complete' : ''}" type="button" data-open-lesson="${lesson.id}" data-tone="${lesson.tone}" aria-label="${action}：${lesson.title}">
      <span class="route-card-top"><span class="route-number">${done ? '✓' : lesson.number}</span><span class="route-time">⏱ ${lesson.time}</span></span>
      <span class="route-icon" aria-hidden="true">${lesson.icon}</span>
      <h3>${lesson.title}</h3><p>${lesson.shortTitle}</p>
      <span class="route-card-bottom"><span>${action}</span><span aria-hidden="true">→</span><span class="card-status">${done ? '✓' : '·'}</span></span>
    </button>`;
  }).join('');
  container.querySelectorAll('[data-open-lesson]').forEach(button => button.addEventListener('click', () => beginLesson(button.dataset.openLesson)));
}

function showView(name) {
  document.querySelectorAll('.view').forEach(view => {
    const visible = view.id === name + '-view';
    view.hidden = !visible;
    view.classList.toggle('is-visible', visible);
  });
  document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('is-active', button.dataset.view === name));
  if (name === 'learn') renderLesson();
  if (name === 'studio') renderStudio();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function beginLesson(id) {
  activeLessonId = id;
  activeStep = 0;
  selectedClue = null;
  selectedAnswer = null;
  showView('learn');
}

function activeLesson() {
  return lessons.find(lesson => lesson.id === activeLessonId) || lessons[0];
}

function renderLesson() {
  const lesson = activeLesson();
  const dots = document.getElementById('lesson-steps');
  dots.innerHTML = [0, 1, 2].map(step => `<span class="lesson-step-dot ${activeStep === step ? 'is-current' : (activeStep > step ? 'is-done' : '')}" aria-label="第 ${step + 1} 步"></span>`).join('');
  document.getElementById('lesson-time').textContent = '⏱ ' + lesson.time;
  const content = document.getElementById('lesson-content');
  if (activeStep === 0) content.innerHTML = renderStory(lesson);
  else if (activeStep === 1) content.innerHTML = renderMission(lesson);
  else if (activeStep === 2) content.innerHTML = renderQuiz(lesson);
  else content.innerHTML = renderReward(lesson);
  wireLessonActions();
}

function renderStory(lesson) {
  return `<article class="lesson-stage story-stage">
    <div class="story-art" aria-hidden="true"><span class="story-sparkle story-sparkle-one">✦</span><span class="story-sparkle story-sparkle-two">✧</span><span class="story-emoji">${lesson.icon}</span></div>
    <div class="story-copy"><span class="section-kicker">第 ${lesson.number} 关 · ${lesson.time}</span><h1 id="lesson-page-title">${lesson.storyTitle}</h1><p>${lesson.story}</p>
      <div class="concept-pill"><span class="concept-icon" aria-hidden="true">💡</span><p>${lesson.concept}</p></div>
      <button class="button button-purple" type="button" data-action="next-step">我来找线索 <span aria-hidden="true">→</span></button>
    </div>
  </article>`;
}

function renderMission(lesson) {
  const selected = selectedClue === null ? null : lesson.choices[selectedClue];
  const feedbackClass = selected ? (selected.correct ? 'is-correct' : 'is-wrong') : '';
  const feedback = selected ? selected.feedback : '';
  const options = lesson.choices.map((choice, index) => {
    const classes = ['mission-choice'];
    if (selectedClue === index) classes.push('is-selected', choice.correct ? 'is-correct' : 'is-wrong');
    return `<button class="${classes.join(' ')}" type="button" data-clue="${index}" aria-pressed="${selectedClue === index}">
      <span class="choice-emoji" aria-hidden="true">${choice.icon}</span><span><strong>${choice.title}</strong><small>${choice.hint}</small></span><span class="choice-mark" aria-hidden="true">✓</span>
    </button>`;
  }).join('');
  return `<article class="lesson-stage mission-stage">
    <div class="stage-ribbon"><span class="stage-ribbon-label"><span>🎯</span> 互动任务</span><small>点选你的答案</small></div>
    <div class="mission-heading"><span class="section-kicker">${lesson.title}</span><h1 id="lesson-page-title">${lesson.missionTitle}</h1><p>${lesson.missionPrompt}</p></div>
    <div class="mission-choices">${options}</div>
    <div class="mission-feedback ${selected ? 'is-visible ' + feedbackClass : ''}" aria-live="polite"><span class="feedback-icon" aria-hidden="true">${selected ? (selected.correct ? '🎉' : '💭') : ''}</span><span>${feedback}</span></div>
    <div class="mission-actions"><button class="button button-purple" type="button" data-action="next-step">${selected ? '继续闯关' : '先选一条线索'} <span aria-hidden="true">→</span></button></div>
  </article>`;
}

function renderQuiz(lesson) {
  const selected = selectedAnswer === null ? null : lesson.answers[selectedAnswer];
  const answers = lesson.answers.map((answer, index) => {
    let classes = 'quiz-answer';
    if (selectedAnswer === index) classes += ' is-selected ' + (answer.correct ? 'is-correct' : 'is-wrong');
    return `<button class="${classes}" type="button" data-answer="${index}" aria-pressed="${selectedAnswer === index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${answer.text}</span></button>`;
  }).join('');
  return `<article class="lesson-stage quiz-stage">
    <div class="stage-ribbon"><span class="stage-ribbon-label"><span>⭐</span> 通关小测</span><small>选一个最合适的答案</small></div>
    <div class="quiz-illustration" aria-hidden="true">${lesson.icon}</div>
    <span class="section-kicker">最后一个小挑战</span><h1 id="lesson-page-title">${lesson.quizTitle}</h1><p>${lesson.quiz}</p>
    <div class="quiz-options">${answers}</div>
    <div class="quiz-feedback ${selected ? 'is-visible ' + (selected.correct ? 'is-correct' : 'is-wrong') : ''}" aria-live="polite">${selected ? selected.feedback : ''}</div>
    <div class="quiz-actions"><button class="button button-purple" type="button" data-action="finish-lesson">${selected ? '领取我的星星' : '先选一个答案'} <span aria-hidden="true">⭐</span></button></div>
  </article>`;
}

function renderReward(lesson) {
  const nextLesson = lessons.find(item => !completedLessons.includes(item.id));
  const allDone = !nextLesson;
  return `<article class="lesson-stage reward-stage">
    <div class="reward-medal" aria-hidden="true">${allDone ? '🏆' : '⭐'}</div>
    <span class="section-kicker">${allDone ? '探险地图全亮啦' : '新徽章收入囊中'}</span>
    <h1 id="lesson-page-title">${allDone ? 'AI 新手探险家！' : '这一关，通关！'}</h1>
    <p>${allDone ? '你已经认识 AI、AIGC，还学会了把点子说清楚。接下来，去创作工坊试试自己的想法吧！' : '你刚刚解锁「' + lesson.prize + '」徽章。准备好继续下一站了吗？'}</p>
    <div class="reward-buttons">${allDone ? '<button class="button button-purple" type="button" data-action="open-studio">去创作工坊 <span aria-hidden="true">🎨</span></button>' : '<button class="button button-purple" type="button" data-action="next-lesson">继续下一关 <span aria-hidden="true">→</span></button>'}<button class="button button-soft" type="button" data-action="go-home">回探险地图</button></div>
  </article>`;
}

function wireLessonActions() {
  document.querySelectorAll('[data-action="next-step"]').forEach(button => button.addEventListener('click', () => {
    if (activeStep === 1 && selectedClue === null) {
      showToast('先点选一条线索哦');
      return;
    }
    activeStep = Math.min(activeStep + 1, 3);
    renderLesson();
  }));
  document.querySelectorAll('[data-clue]').forEach(button => button.addEventListener('click', () => {
    selectedClue = Number(button.dataset.clue);
    renderLesson();
  }));
  document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
    selectedAnswer = Number(button.dataset.answer);
    renderLesson();
  }));
  document.querySelectorAll('[data-action="finish-lesson"]').forEach(button => button.addEventListener('click', () => {
    if (selectedAnswer === null) {
      showToast('先选一个答案，再来领星星');
      return;
    }
    if (!completedLessons.includes(activeLessonId)) completedLessons.push(activeLessonId);
    saveProgress();
    updateProgress();
    renderRouteCards();
    activeStep = 3;
    renderLesson();
  }));
  document.querySelectorAll('[data-action="next-lesson"]').forEach(button => button.addEventListener('click', () => {
    const next = lessons.find(lesson => !completedLessons.includes(lesson.id));
    if (next) beginLesson(next.id);
    else showView('home');
  }));
  document.querySelectorAll('[data-action="open-studio"]').forEach(button => button.addEventListener('click', () => showView('studio')));
  document.querySelectorAll('[data-action="go-home"]').forEach(button => button.addEventListener('click', () => showView('home')));
}

function choiceButton(icon, label, group, id, selected) {
  return `<button class="option-tile ${selected === id ? 'is-selected' : ''}" type="button" data-choice-group="${group}" data-choice-id="${id}" aria-pressed="${selected === id}"><span aria-hidden="true">${icon}</span><span>${label}</span></button>`;
}

function renderStudio() {
  document.getElementById('topic-options').innerHTML = topics.map(item => choiceButton(item.icon, item.label, 'topic', item.id, selectedTopic)).join('');
  document.getElementById('audience-options').innerHTML = audiences.map(item => choiceButton(item.icon, item.label, 'audience', item.id, selectedAudience)).join('');
  document.getElementById('style-options').innerHTML = styles.map(item => choiceButton(item.icon, item.label, 'style', item.id, selectedStyle)).join('');
  document.querySelectorAll('[data-choice-group]').forEach(button => button.addEventListener('click', () => {
    const group = button.dataset.choiceGroup;
    if (group === 'topic') selectedTopic = button.dataset.choiceId;
    if (group === 'audience') selectedAudience = button.dataset.choiceId;
    if (group === 'style') selectedStyle = button.dataset.choiceId;
    renderStudio();
  }));
  updatePreview();
  const copyButton = document.getElementById('copy-prompt');
  copyButton.onclick = copyPrompt;
}

function currentPrompt() {
  const topic = topics.find(item => item.id === selectedTopic);
  const audience = audiences.find(item => item.id === selectedAudience);
  const style = styles.find(item => item.id === selectedStyle);
  return `请做我的创意搭档。这份作品是给${audience.phrase}的。${topic.request}，整体采用${style.phrase}。请先给我 3 个不同点子，语言清楚、适合青少年；如果涉及事实，请提醒我查证。`;
}

function updatePreview() {
  const topic = topics.find(item => item.id === selectedTopic);
  const audience = audiences.find(item => item.id === selectedAudience);
  document.getElementById('poster-emoji').textContent = topic.icon;
  document.getElementById('poster-title').textContent = topic.title;
  document.getElementById('poster-caption').textContent = '给' + audience.label + '的一份创意';
  document.getElementById('prompt-output-text').textContent = currentPrompt();
}

async function copyPrompt() {
  const prompt = currentPrompt();
  try {
    await navigator.clipboard.writeText(prompt);
    showToast('提示词已复制，拿去试试吧！');
  } catch (_) {
    showToast('可以选中提示词文字后复制');
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2300);
}

document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
document.querySelectorAll('[data-go="home"]').forEach(button => button.addEventListener('click', event => {
  if (button.matches('a')) event.preventDefault();
  showView('home');
}));
document.querySelectorAll('.daily-card [data-open-lesson]').forEach(button => button.addEventListener('click', () => beginLesson(button.dataset.openLesson)));
document.getElementById('continue-adventure').addEventListener('click', () => {
  const next = lessons.find(lesson => !completedLessons.includes(lesson.id)) || lessons[0];
  beginLesson(next.id);
});

updateProgress();
renderRouteCards();
renderStudio();
