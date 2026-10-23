const lessons = [
  {
    id: 'ai-basics', number: '01', title: 'AI 侦探出动！', shortTitle: '看图认识 AI', icon: '🤖', tone: 'purple', time: '8 分钟', prize: 'AI 观察员',
    introCards: [
      { label: '先认识一下', title: 'AI 是电脑里的小帮手', text: '你给它一个任务，它会用资料和计算帮你找线索、做事情。', takeaway: 'AI 是人们设计的工具，不是会魔法的小人。', artAlt: '孩子把任务交给电脑助手，再一起完成目标', artCaption: '人来定目标 · AI 来帮忙' },
      { label: 'AI 怎么学习', title: '它先看很多例子', text: '想让电脑认出小猫，我们先给它看许多猫咪和其他动物的照片。', takeaway: '照片、文字、声音等资料，都可以成为学习的例子。', artAlt: '很多猫咪和狗狗照片送进电脑，电脑开始学习', artCaption: '例子越丰富，学习的线索越多' },
      { label: 'AI 怎么学习', title: '它会从例子里找规律', text: '电脑会比较照片，留意耳朵、胡须、脸形等线索，再把线索组合起来。', takeaway: 'AI 从很多例子中寻找共同点，这个过程叫训练。', artAlt: '电脑观察猫咪的耳朵胡须和脸形，寻找共同特征', artCaption: '观察很多张 · 找到共同线索' },
      { label: 'AI 怎么工作', title: '遇到新照片，它会猜一猜', text: '学过之后，AI 看到一张没见过的照片，也能根据线索猜“这像一只猫”。', takeaway: 'AI 是根据学过的规律做判断，不是像人一样理解照片。', artAlt: '一张模糊的新照片让人工智能不确定，孩子一起查看', artCaption: '见过的例子 · 帮它判断新照片' },
      { label: 'AI 也会出错', title: '小帮手也有猜错的时候', text: '照片太模糊，或者学习的例子不够多，AI 就可能答错。用之前再看一眼，能帮忙发现问题。', takeaway: 'AI 可能会出错；重要的答案要由人来检查。', artAlt: '孩子检查电脑生成的图片，用自己的铅笔修改和确认', artCaption: 'AI 可能出错 · 人来核对' },
      { label: 'AI 的发展', title: '几十年前，人们就开始研究 AI', text: '1950 年，图灵提出“机器会思考吗？”1956 年，研究者开始使用“人工智能”这个名字。', takeaway: 'AI 不是突然出现的，它经过了很多年的研究和改进。', artAlt: '从1950年机器能否思考的问题，走到1956年人工智能名称出现', artCaption: '1950 提出问题  →  1956 AI 得名' },
      { label: 'AI 的发展', title: '电脑越来越强，AI 学会更多', text: '1997 年，下棋电脑“深蓝”战胜了世界冠军。后来，AI 也逐渐学会辨认图片和声音。', takeaway: '更多资料和更强的电脑，让 AI 可以处理更复杂的任务。', artAlt: '下棋电脑深蓝战胜世界冠军，后来人工智能学会识别图片和声音', artCaption: '下棋  →  认图、听声音' },
      { label: 'AI 能做什么', title: '今天，AI 已经能帮很多忙', text: '它可以整理照片、把说话变成文字、帮忙翻译，也能根据描述创作图片和故事。', takeaway: 'AI 能帮我们更快完成任务，也能陪我们一起想点子。', artAlt: '人工智能帮助整理照片翻译说话内容并创作图画', artCaption: '认一认 · 听一听 · 创作新点子' },
      { label: 'AI 的未来', title: '未来，它还会帮我们做什么？', text: 'AI 可能成为学习、科学和无障碍生活的好帮手。人来提出目标、检查结果，再做重要决定。', takeaway: '让 AI 帮忙，但方向和决定始终由人掌握。', artAlt: '孩子和人工智能一起探索科学，孩子检查并决定下一步', artCaption: 'AI 提供帮助 · 人来选择方向' }
    ],
    introTests: [
      { title: 'AI 是什么？', prompt: '哪句话最能说明 AI？', icon: '💡', answers: [
        { text: '人们设计的电脑工具，能从资料中找规律、帮忙完成任务。', correct: true, feedback: '答对啦！AI 是人造的工具，可以从资料里找规律，帮忙完成一些任务。' },
        { text: '一个会魔法、什么都知道的小机器人。', correct: false, feedback: 'AI 不是魔法，也不知道所有事情；它是人们设计的计算机工具。' },
        { text: '和人一样会感受、会自己决定一切的生命。', correct: false, feedback: 'AI 能完成一些聪明任务，但它没有人的感受和生活经验。' }
      ] },
      { title: 'AI 是怎样一步步发展的？', prompt: '下面哪条发展路线比较合理？', icon: '🕰️', answers: [
        { text: '先研究让电脑解题、下棋，后来逐渐学会认图、听声音和生成内容。', correct: true, feedback: '没错！AI 从早期研究开始，随着资料和电脑进步，能做的事情越来越多。' },
        { text: '电脑先学会画画，后来才有人开始研究 AI。', correct: false, feedback: 'AI 研究早在几十年前就开始了；生成图片是后来发展出的能力。' },
        { text: 'AI 从一开始就能自动回答所有问题，从来没有变化。', correct: false, feedback: 'AI 经过了很多年的研究和改进，能力一直在变化。' }
      ] },
      { title: 'AI 可以为我们做什么？', prompt: '哪种做法最聪明？', icon: '🧭', answers: [
        { text: '让 AI 帮忙翻译或整理想法，再由我检查重要内容。', correct: true, feedback: '很棒！AI 可以帮忙，人来检查信息、选择和做决定。' },
        { text: 'AI 给出的答案一定正确，所以不用再看。', correct: false, feedback: 'AI 也会出错。重要内容要核对，不能只看它说了什么。' },
        { text: '让 AI 替我决定所有事情，我不用再思考。', correct: false, feedback: 'AI 可以给建议，但目标和重要决定应该由人掌握。' }
      ] }
    ]
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
let introAnswers = [];
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
  introAnswers = [];
  showView('learn');
}

function activeLesson() {
  return lessons.find(lesson => lesson.id === activeLessonId) || lessons[0];
}

function renderLesson() {
  const lesson = activeLesson();
  const dots = document.getElementById('lesson-steps');
  if (lesson.introCards) {
    const sceneCount = lesson.introCards.length;
    const testCount = lesson.introTests.length;
    const total = sceneCount + testCount;
    const progressText = activeStep < sceneCount
      ? `看图 ${activeStep + 1}/${sceneCount}`
      : activeStep < total ? `小测 ${activeStep - sceneCount + 1}/${testCount}` : '已完成';
    const progress = Math.min(100, activeStep / total * 100);
    dots.classList.add('is-intro-progress');
    dots.innerHTML = `<span class="intro-progress-label">${progressText}</span><span class="intro-progress-track" role="progressbar" aria-label="第一关进度" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${activeStep}"><span style="width:${progress}%"></span></span>`;
  } else {
    dots.classList.remove('is-intro-progress');
    dots.innerHTML = [0, 1, 2].map(step => `<span class="lesson-step-dot ${activeStep === step ? 'is-current' : (activeStep > step ? 'is-done' : '')}" aria-label="第 ${step + 1} 步"></span>`).join('');
  }
  document.getElementById('lesson-time').textContent = '⏱ ' + lesson.time;
  const content = document.getElementById('lesson-content');
  if (lesson.introCards && activeStep < lesson.introCards.length) content.innerHTML = renderIntroSlide(lesson, activeStep);
  else if (lesson.introCards && activeStep < lesson.introCards.length + lesson.introTests.length) content.innerHTML = renderIntroTest(lesson, activeStep - lesson.introCards.length);
  else if (lesson.introCards) content.innerHTML = renderReward(lesson);
  else if (activeStep === 0) content.innerHTML = renderStory(lesson);
  else if (activeStep === 1) content.innerHTML = renderMission(lesson);
  else if (activeStep === 2) content.innerHTML = renderQuiz(lesson);
  else content.innerHTML = renderReward(lesson);
  wireLessonActions();
}

function renderIntroArt(card, index) {
  const panels = [
    ['308.1% 331.7%', '0% 0%', '407 / 378'], ['306.6% 331.7%', '49.9% 0%', '409 / 378'], ['307.4% 331.7%', '100% 0%', '408 / 378'],
    ['308.1% 327.4%', '0% 45.1%', '407 / 383'], ['307.4% 269.7%', '100% 100%', '408 / 465'], ['306.6% 327.4%', '49.9% 45.1%', '409 / 383'],
    ['307.4% 327.4%', '100% 45.1%', '408 / 383'], ['308.1% 269.7%', '0% 100%', '407 / 465'], ['306.6% 269.7%', '49.9% 100%', '409 / 465']
  ][index];
  return `<div class="intro-art" role="img" aria-label="${card.artAlt}" style="--sprite-size:${panels[0]};--sprite-position:${panels[1]};--panel-ratio:${panels[2]}">
    <div class="intro-art-picture" aria-hidden="true"></div>
    <div class="intro-art-caption"><span aria-hidden="true">✦</span>${card.artCaption}</div>
  </div>`;
}

function renderIntroSlide(lesson, index) {
  const card = lesson.introCards[index];
  const lastScene = index === lesson.introCards.length - 1;
  return `<article class="lesson-stage intro-slide">
    <div class="intro-slide-head"><span class="stage-ribbon-label"><span>🗺️</span> 第一关 · 看图认识 AI</span><span class="intro-card-count">图 ${String(index + 1).padStart(2, '0')} / ${lesson.introCards.length}</span></div>
    <div class="intro-slide-grid">
      ${renderIntroArt(card, index)}
      <div class="intro-slide-copy"><span class="section-kicker">${card.label}</span><h1 id="lesson-page-title">${card.title}</h1><p>${card.text}</p>
        <div class="intro-takeaway"><span aria-hidden="true">💡</span><p>${card.takeaway}</p></div>
        <div class="intro-slide-actions"><button class="button button-soft intro-back-button" type="button" data-action="previous-step" ${index === 0 ? 'disabled' : ''}>上一张</button><button class="button button-purple" type="button" data-action="next-step">${lastScene ? '开始 3 道小测' : '下一张图'} <span aria-hidden="true">→</span></button></div>
      </div>
    </div>
  </article>`;
}

function renderIntroTest(lesson, index) {
  const test = lesson.introTests[index];
  const selectedIndex = introAnswers[index];
  const selected = selectedIndex === undefined ? null : test.answers[selectedIndex];
  const answers = test.answers.map((answer, answerIndex) => {
    const isSelected = selectedIndex === answerIndex;
    const stateClass = isSelected ? (answer.correct ? ' is-correct' : ' is-wrong') : '';
    return `<button class="intro-answer${stateClass}" type="button" data-intro-answer="${answerIndex}" aria-pressed="${isSelected}"><span class="intro-answer-letter">${String.fromCharCode(65 + answerIndex)}</span><span class="intro-answer-text">${answer.text}</span><span class="intro-answer-mark" aria-hidden="true">${isSelected ? (answer.correct ? '✓' : '↻') : ''}</span></button>`;
  }).join('');
  const lastTest = index === lesson.introTests.length - 1;
  return `<article class="lesson-stage intro-test-stage">
    <div class="intro-slide-head"><span class="stage-ribbon-label"><span>🧩</span> 看图后的 3 个小测</span><span class="intro-card-count">第 ${index + 1} 题 / ${lesson.introTests.length}</span></div>
    <div class="intro-test-content"><div class="intro-test-icon" aria-hidden="true">${test.icon}</div><span class="section-kicker">想一想，再选择</span><h1 id="lesson-page-title">${test.title}</h1><p class="intro-test-prompt">${test.prompt}</p>
      <div class="intro-answers">${answers}</div>
      <div class="intro-test-feedback ${selected ? (selected.correct ? 'is-correct' : 'is-wrong') : ''}" aria-live="polite">${selected ? selected.feedback : '选错也没关系，可以再试一次。'}</div>
      <div class="intro-test-actions"><button class="button button-soft intro-back-button" type="button" data-action="previous-step">回看上一页</button><button class="button button-purple" type="button" data-action="next-intro-test" ${!selected || !selected.correct ? 'disabled' : ''}>${lastTest ? '完成第一关' : '下一题'} <span aria-hidden="true">${lastTest ? '⭐' : '→'}</span></button></div>
    </div>
  </article>`;
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

function completeActiveLesson() {
  if (!completedLessons.includes(activeLessonId)) completedLessons.push(activeLessonId);
  saveProgress();
  updateProgress();
  renderRouteCards();
}

function wireLessonActions() {
  document.querySelectorAll('[data-action="next-step"]').forEach(button => button.addEventListener('click', () => {
    const lesson = activeLesson();
    if (!lesson.introCards && activeStep === 1 && selectedClue === null) {
      showToast('先点选一条线索哦');
      return;
    }
    activeStep = Math.min(activeStep + 1, lesson.introCards ? lesson.introCards.length : 3);
    renderLesson();
  }));
  document.querySelectorAll('[data-action="previous-step"]').forEach(button => button.addEventListener('click', () => {
    activeStep = Math.max(0, activeStep - 1);
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
  document.querySelectorAll('[data-intro-answer]').forEach(button => button.addEventListener('click', () => {
    const lesson = activeLesson();
    const questionIndex = activeStep - lesson.introCards.length;
    introAnswers[questionIndex] = Number(button.dataset.introAnswer);
    renderLesson();
  }));
  document.querySelectorAll('[data-action="next-intro-test"]').forEach(button => button.addEventListener('click', () => {
    const lesson = activeLesson();
    const questionIndex = activeStep - lesson.introCards.length;
    const answer = lesson.introTests[questionIndex].answers[introAnswers[questionIndex]];
    if (!answer || !answer.correct) return;
    if (questionIndex === lesson.introTests.length - 1) {
      completeActiveLesson();
      activeStep = lesson.introCards.length + lesson.introTests.length;
    } else {
      activeStep += 1;
    }
    renderLesson();
  }));
  document.querySelectorAll('[data-action="finish-lesson"]').forEach(button => button.addEventListener('click', () => {
    if (selectedAnswer === null) {
      showToast('先选一个答案，再来领星星');
      return;
    }
    completeActiveLesson();
    activeStep = activeLesson().introCards ? activeLesson().introCards.length + activeLesson().introTests.length : 3;
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
