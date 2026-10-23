const lessons = [
  {
    id: 'ai-basics', number: '01', duration: '约 4 分钟', icon: '✦', title: 'AI 是什么？', short: '认识人工智能，以及它能做和不能做的事。', category: '第一站 · 认识 AI',
    lead: 'AI 是“人工智能”的简称。它是一类让计算机完成识别、预测、理解语言或解决问题等任务的技术。',
    example: '想想看：相册能按“猫咪”找到照片，语音助手能听懂你的问题。这些都可能用到了 AI。',
    paragraphs: [
      ['它怎样学会做事？', '很多 AI 系统会从大量例子中寻找规律。比如看过许多猫和狗的照片后，模型可以学着分辨它们。它不是背下每一张照片，而是在数据里调整出一套判断方法。'],
      ['AI 像人吗？', 'AI 可以完成一些看起来很聪明的任务，但它没有人的生活经验、感受和真正的理解。它给出的答案也可能出错，所以要带着好奇心使用，也要自己判断。']
    ],
    takeaway: 'AI 是人们设计和训练出来的工具。它很有用，也有边界；人仍然负责思考和做决定。',
    question: 'AI 从许多猫咪照片中学习后，最可能学到了什么？', answers: ['一套用来辨认猫咪特征的规律', '每只猫咪的名字和心情', '人类为什么喜欢猫咪'], correct: 0, explain: '模型会从例子里寻找可用于判断的规律，但不会因此知道猫咪的名字或感受。'
  },
  {
    id: 'aigc', number: '02', duration: '约 5 分钟', icon: '✧', title: 'AIGC 是什么？', short: '看看 AI 怎样根据要求生成文字、图片和更多作品。', category: '第二站 · 认识 AIGC',
    lead: 'AIGC 是“人工智能生成内容”的简称，指 AI 根据人给出的要求，生成文字、图像、声音、视频或代码等内容。',
    example: '你写下“画一只坐在月亮上的柴犬”，图像生成工具就可能据此制作一张新图片。',
    paragraphs: [
      ['生成，不等于复制粘贴', '生成式 AI 通常会根据训练中学到的模式，一步步预测接下来合适的文字或画面元素。它能组合出新内容，但不代表内容一定正确、原创或符合你的想法。'],
      ['创作时要记住什么？', '把 AI 当作帮你 brainstorm 的伙伴：它可以提供草稿和不同角度。你要检查事实，尊重他人的作品和规则，并对最后交出的内容负责。']
    ],
    takeaway: 'AIGC 可以帮忙生成内容；内容仍需要人检查、修改和负责。',
    question: 'AI 生成了一段关于恐龙的介绍，交给同学前应该怎么做？', answers: ['直接复制，因为 AI 总是正确', '查证重要事实，再用自己的话修改', '把作者名字删掉就可以'], correct: 1, explain: '生成内容可能有错误；查证事实、尊重来源并加入自己的思考很重要。'
  },
  {
    id: 'create', number: '03', duration: '约 6 分钟', icon: '✳', title: '怎样和 AI 一起创造？', short: '学会说清楚目标，让 AI 成为你的创意搭档。', category: '第三站 · 开始创造',
    lead: '和 AI 合作的第一步，是把脑海中的模糊想法变成清楚的要求。好的提示词，会告诉 AI 任务、背景和你想要的结果。',
    example: '与其说“写点东西”，不如说“请为六年级同学写一段 100 字的海洋保护倡议，语气轻松，并给出一个今天能做到的小行动”。',
    paragraphs: [
      ['提示词的四个小积木', '说清楚角色（请你做我的创意伙伴）、任务（写什么或做什么）、背景（给谁看、为什么做），再补上要求（长度、风格或格式）。不必一次写得完美，可以继续追问和修改。'],
      ['把创作过程握在自己手里', '先有自己的点子，再请 AI 帮忙拓展；比较不同版本，挑选有用的部分，最后由你检查和完成。不要输入隐私信息，也不要把 AI 的回答当成唯一答案。']
    ],
    takeaway: '你的点子 + 清楚的要求 + 认真修改 = 更有主见的 AI 合作创作。',
    question: '哪一个提示词更容易得到符合需要的回答？', answers: ['“给我写一个。”', '“写一段介绍校园植物的短文，给三年级同学看，用简单句子。”', '“你知道我想要什么吧？”'], correct: 1, explain: '说明任务、读者和表达要求，能帮助 AI 更贴近你的目标。'
  }
];

const inspirationIdeas = [
  ['如果 AI 能帮你解决一个小烦恼，你会选什么？', '给书桌设计一个“自动整理提醒器”？想象一下，再把点子写下来。'],
  ['你能用 AI 帮校园里的小动物做点什么？', '试着设计一张温柔的流浪猫关怀指南，提醒大家安全、友善地提供帮助。'],
  ['给未来的自己做一份“灵感工具箱”吧。', '收集三个你喜欢的点子，再让 AI 帮你想出它们之间意想不到的联系。'],
  ['如果科学知识可以变成一场小游戏呢？', '挑一个你最近学到的知识，想想怎样用谜题、角色或闯关来介绍它。']
];

const storageKey = 'ai-creator-progress-v1';
let activeLessonId = lessons[0].id;
let completedLessons = readProgress();

function readProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(value) ? value.filter(id => lessons.some(lesson => lesson.id === id)) : [];
  } catch (error) {
    return [];
  }
}

function saveProgress() {
  try { localStorage.setItem(storageKey, JSON.stringify(completedLessons)); } catch (error) { /* 学习仍可继续 */ }
}

function showView(name) {
  const labels = { home: '学习首页', learn: '认识 AI', studio: '创作练习场' };
  document.querySelectorAll('.view').forEach(view => {
    const isCurrent = view.id === name + '-view';
    view.hidden = !isCurrent;
    view.classList.toggle('is-visible', isCurrent);
  });
  document.querySelectorAll('.nav-item').forEach(button => button.classList.toggle('is-active', button.dataset.view === name));
  document.getElementById('page-crumb').textContent = labels[name] || labels.home;
  if (name === 'learn') renderLesson(activeLessonId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProgress() {
  const count = completedLessons.length;
  document.getElementById('progress-count').innerHTML = count + ' <small>/ 3</small>';
  document.getElementById('progress-fill').style.width = (count / lessons.length * 100) + '%';
  const captions = ['刚刚启程，选一节课开始吧！', '不错，继续保持好奇！', '已经完成两站，离创作更近啦！', '太棒了，你完成了 AI 入门路线！'];
  document.getElementById('progress-caption').textContent = captions[count];
}

function renderHomeLessons() {
  const container = document.getElementById('home-lessons');
  container.replaceChildren();
  lessons.forEach(lesson => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lesson-card';
    button.setAttribute('aria-label', '打开课程：' + lesson.title);
    button.addEventListener('click', () => { activeLessonId = lesson.id; showView('learn'); });

    const top = document.createElement('div');
    top.className = 'lesson-card-top';
    const number = document.createElement('span');
    number.className = 'lesson-number';
    number.textContent = lesson.number;
    const duration = document.createElement('span');
    duration.className = 'lesson-duration';
    duration.textContent = lesson.duration;
    top.append(number, duration);
    const title = document.createElement('h3');
    title.textContent = lesson.title;
    const summary = document.createElement('p');
    summary.textContent = lesson.short;
    const arrow = document.createElement('span');
    arrow.className = 'lesson-card-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    button.append(top, title, summary, arrow);
    if (completedLessons.includes(lesson.id)) {
      const mark = document.createElement('span');
      mark.className = 'completed-mark';
      mark.setAttribute('aria-label', '已完成');
      mark.textContent = '✓';
      button.append(mark);
    }
    container.append(button);
  });
}

function renderLessonList() {
  const container = document.getElementById('lesson-list');
  container.replaceChildren();
  lessons.forEach(lesson => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'rail-lesson' + (lesson.id === activeLessonId ? ' is-selected' : '');
    button.addEventListener('click', () => { activeLessonId = lesson.id; renderLesson(lesson.id); });
    const number = document.createElement('span');
    number.className = 'lesson-number';
    number.textContent = lesson.number;
    const text = document.createElement('span');
    text.className = 'rail-lesson-text';
    const title = document.createElement('strong');
    title.textContent = lesson.title;
    const duration = document.createElement('small');
    duration.textContent = lesson.duration;
    text.append(title, duration);
    button.append(number, text);
    if (completedLessons.includes(lesson.id)) {
      const check = document.createElement('span');
      check.className = 'rail-check';
      check.setAttribute('aria-label', '已完成');
      check.textContent = '✓';
      button.append(check);
    }
    container.append(button);
  });
}

function renderLesson(id) {
  const lesson = lessons.find(item => item.id === id) || lessons[0];
  activeLessonId = lesson.id;
  renderLessonList();
  const article = document.getElementById('lesson-content');
  article.replaceChildren();

  const top = document.createElement('div');
  top.className = 'lesson-panel-top';
  const category = document.createElement('span');
  category.className = 'lesson-category';
  category.textContent = lesson.category;
  const duration = document.createElement('span');
  duration.className = 'lesson-duration';
  duration.textContent = lesson.duration;
  top.append(category, duration);

  const title = document.createElement('h2');
  title.textContent = lesson.title;
  const lead = document.createElement('p');
  lead.className = 'lesson-lead';
  lead.textContent = lesson.lead;
  const visual = document.createElement('div');
  visual.className = 'lesson-visual';
  const visualIcon = document.createElement('span');
  visualIcon.className = 'lesson-visual-icon';
  visualIcon.setAttribute('aria-hidden', 'true');
  visualIcon.textContent = lesson.icon;
  const visualText = document.createElement('p');
  const exampleStrong = document.createElement('strong');
  exampleStrong.textContent = '生活里的例子：';
  visualText.append(exampleStrong, document.createTextNode(lesson.example));
  visual.append(visualIcon, visualText);

  const copy = document.createElement('div');
  copy.className = 'lesson-copy';
  lesson.paragraphs.forEach(([heading, body]) => {
    const h3 = document.createElement('h3');
    h3.textContent = heading;
    const p = document.createElement('p');
    p.textContent = body;
    copy.append(h3, p);
  });
  const takeaway = document.createElement('div');
  takeaway.className = 'key-takeaway';
  const takeawayStrong = document.createElement('strong');
  takeawayStrong.textContent = '记住这一点：';
  takeaway.append(takeawayStrong, document.createTextNode(' ' + lesson.takeaway));

  const quiz = buildQuiz(lesson);
  const actions = document.createElement('div');
  actions.className = 'lesson-actions';
  const step = document.createElement('span');
  step.className = 'lesson-step';
  step.textContent = '课程 ' + lesson.number + ' / 03';
  const complete = document.createElement('button');
  complete.type = 'button';
  complete.className = 'button ' + (completedLessons.includes(lesson.id) ? 'button-soft' : 'button-primary');
  complete.textContent = completedLessons.includes(lesson.id) ? '已加入学习进度 ✓' : '完成这节课 ✓';
  complete.addEventListener('click', () => {
    if (!completedLessons.includes(lesson.id)) completedLessons.push(lesson.id);
    saveProgress();
    renderProgress();
    renderHomeLessons();
    renderLesson(lesson.id);
  });
  actions.append(step, complete);
  article.append(top, title, lead, visual, copy, takeaway, quiz, actions);
}

function buildQuiz(lesson) {
  const box = document.createElement('section');
  box.className = 'quiz-box';
  const heading = document.createElement('h3');
  heading.textContent = '想一想 · 选一个你认为合适的答案';
  box.append(heading);
  const feedback = document.createElement('p');
  feedback.className = 'quiz-feedback';
  feedback.setAttribute('aria-live', 'polite');
  const name = 'quiz-' + lesson.id;
  const options = [];
  lesson.answers.forEach((answer, index) => {
    const label = document.createElement('label');
    label.className = 'quiz-option';
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = name;
    input.value = String(index);
    const text = document.createElement('span');
    text.textContent = answer;
    label.append(input, text);
    box.append(label);
    options.push(input);
  });
  const submit = document.createElement('button');
  submit.type = 'button';
  submit.className = 'button button-soft quiz-submit';
  submit.textContent = '看看答案';
  submit.addEventListener('click', () => {
    const selected = options.find(input => input.checked);
    feedback.className = 'quiz-feedback';
    if (!selected) {
      feedback.textContent = '先选一个答案，再来看看吧。';
      return;
    }
    const isCorrect = Number(selected.value) === lesson.correct;
    feedback.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
    feedback.textContent = (isCorrect ? '答对啦！' : '再想一想。') + ' ' + lesson.explain;
  });
  box.append(submit, feedback);
  return box;
}

function setRandomIdea() {
  const previous = document.getElementById('idea-title').textContent;
  const choices = inspirationIdeas.filter(idea => idea[0] !== previous);
  const idea = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById('idea-title').textContent = idea[0];
  document.getElementById('idea-detail').textContent = idea[1];
}

function escapeText(value) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function buildPrompt() {
  const input = document.getElementById('idea-input');
  const idea = input.value.trim();
  const result = document.getElementById('prompt-result');
  result.replaceChildren();
  if (!idea) {
    const placeholder = document.createElement('div');
    placeholder.className = 'result-placeholder';
    const icon = document.createElement('span');
    icon.textContent = '✎';
    const message = document.createElement('p');
    message.textContent = '先写下一点你的想法，\n我们再把它变清楚。';
    placeholder.append(icon, message);
    result.append(placeholder);
    input.focus();
    return;
  }
  const prompt = '请你做我的创意伙伴。\n\n我想创作：' + idea + '\n\n请先给我一个适合青少年的初稿或创作思路，表达清楚、容易理解。遇到不确定的事实请提醒我查证；不要编造来源。最后给我 2 个可以继续修改的方向。';
  const label = document.createElement('span');
  label.className = 'result-label';
  label.textContent = '你的提示词草稿';
  const text = document.createElement('p');
  text.className = 'result-text';
  text.textContent = prompt;
  const tip = document.createElement('p');
  tip.className = 'result-tip';
  tip.textContent = '这是根据你输入整理出的练习范例，不是 AI 生成的答案。下一步：补充读者、风格或长度，让要求更具体。';
  result.append(label, text, tip);
}

document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showView(button.dataset.go)));
document.getElementById('new-idea').addEventListener('click', setRandomIdea);
document.getElementById('build-prompt').addEventListener('click', buildPrompt);
document.getElementById('idea-input').addEventListener('input', event => {
  document.getElementById('char-count').textContent = event.target.value.length + ' / 280';
});
document.querySelectorAll('[data-prompt]').forEach(button => button.addEventListener('click', () => {
  const input = document.getElementById('idea-input');
  input.value = button.dataset.prompt;
  input.dispatchEvent(new Event('input'));
  input.focus();
}));

renderProgress();
renderHomeLessons();
renderLesson(activeLessonId);
