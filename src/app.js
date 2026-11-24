import {
  SPORTS,
  getSportConfig,
  applySportDefaults,
  AGE_PRESETS,
  COUNT_PRESETS,
  DURATIONS,
  DRILL_COLORS,
  stageForAge,
  buildLesson,
  reviseDrill,
} from './data.js'
import { createBoard } from './board.js'

const state = applySportDefaults({
  sport: 'fitness',
  ageMin: 6,
  ageMax: 8,
  countMin: 8,
  countMax: 10,
  duration: 90,
  detail: 'full',
  lesson: null,
  loading: false,
  loadStep: 0,
  openDrill: null,
  focuses: [],
  lessonType: 'full',
  ballType: null,
  stroke: null,
  miniBall: false,
  safety: {},
})

const boards = new Map()

export function renderApp() {
  return `
    <header class="hero">
      <div class="topbar">
        <div class="brand-mark">
          <span class="brand-en">COACHPRO</span>
          <span class="brand-cn">运动训练课助手</span>
        </div>
        <div class="capsule" aria-hidden="true"><span>···</span><span>○</span></div>
      </div>
      <div class="hero-copy">
        <p>职业教练的私人课程设计师 · 按教师用书分项备课</p>
      </div>
      <div class="stats">
        <div class="stat"><strong>60s</strong><span>完成备课</span></div>
        <div class="stat"><strong>8 大</strong><span>运动项目</span></div>
        <div class="stat"><strong>4–60+</strong><span>少儿到成人</span></div>
      </div>
    </header>

    <section class="sheet" id="form">
      <div class="section">
        <h3 class="section-title">项目</h3>
        <div class="sport-grid" id="sports"></div>
        <p class="sport-note" id="sport-note"></p>
      </div>

      <div id="sport-extra"></div>

      <div class="section">
        <h3 class="section-title">你的需求 <span class="hint" id="tag-hint">可点标签快速填充</span></h3>
        <textarea class="need-box" id="need" rows="3"></textarea>
        <div class="tags" id="need-tags"></div>
      </div>

      <div class="section" id="focus-section" hidden>
        <h3 class="section-title">技能焦点 <span class="hint">可多选</span></h3>
        <div class="choice-row" id="focuses"></div>
      </div>

      <div class="section">
        <h3 class="section-title">学员年龄</h3>
        <div class="range-row">
          <input class="num" id="ageMin" type="number" min="2" max="60" value="${state.ageMin}" />
          <span>至</span>
          <input class="num" id="ageMax" type="number" min="2" max="60" value="${state.ageMax}" />
          <span>岁</span>
          <span class="age-pill" id="ageStage">${stageForAge(state.ageMin, state.ageMax)}</span>
        </div>
        <div class="choice-row" id="age-presets"></div>
      </div>

      <div class="section">
        <h3 class="section-title">人数 <span class="hint" id="count-hint"></span></h3>
        <div class="range-row">
          <input class="num" id="countMin" type="number" min="1" max="40" value="${state.countMin}" />
          <span>至</span>
          <input class="num" id="countMax" type="number" min="1" max="40" value="${state.countMax}" />
          <span>人</span>
        </div>
        <div class="choice-row" id="count-presets"></div>
      </div>

      <div class="section">
        <h3 class="section-title">时长</h3>
        <div class="choice-row" id="durations"></div>
      </div>

      <div class="section">
        <h3 class="section-title">教案内容</h3>
        <div class="two-col" id="detail"></div>
      </div>

      <div class="section">
        <h3 class="section-title">场地条件</h3>
        <div class="choice-row" id="venues"></div>
      </div>

      <div class="section">
        <h3 class="section-title">可用器具 <span class="hint">可多选</span></h3>
        <div class="choice-row" id="gears"></div>
      </div>

      <div class="section" id="safety-section" hidden>
        <h3 class="section-title">游泳安全确认 <span class="hint">强烈建议全部勾选</span></h3>
        <div class="safety-list" id="safety-checks"></div>
      </div>

      <button class="generate" id="generate" type="button">
        <span class="spark">✦</span><span id="gen-label">生成专属训练课</span>
      </button>
    </section>

    <div class="history">📂 <b>我的教案</b>（演示 6）<span class="more">展开 ›</span></div>

    <section class="loading" id="loading">
      <p class="loading-title">教练正在备课…</p>
      <div class="steps-progress">
        <div class="lp" data-i="0"><span class="dot"></span>正在准备</div>
        <div class="lp" data-i="1"><span class="dot"></span>正在分析需求</div>
        <div class="lp" data-i="2"><span class="dot"></span>正在设计训练项目和战术动图</div>
      </div>
      <div class="bar"><i id="load-bar"></i></div>
    </section>

    <section class="result" id="result"></section>

    <footer class="footer">
      <div class="en">COACHPRO</div>
      <div>职业教练的私人课程设计师 · © 2026</div>
    </footer>
  `
}

export function bindApp(root) {
  paintForm(root)
  wireForm(root)
}

function cfg() {
  return getSportConfig(state.sport)
}

function paintForm(root) {
  const c = cfg()

  root.querySelector('#sports').innerHTML = SPORTS.map(
    (s) => `
    <button type="button" class="sport ${state.sport === s.id ? 'on' : ''}" data-sport="${s.id}">
      <span class="ico">${s.ico}</span><span class="lab">${s.label}</span>
    </button>`
  ).join('')

  const note = root.querySelector('#sport-note')
  if (c.bookGap) {
    note.innerHTML =
      '⚠️ 教师用书<strong>无网球独立分册</strong>：下列表单与教案为「隔网持拍」自建模板（参考乒/羽），非书中网球单元进阶。'
    note.hidden = false
  } else if (c.requireSafety) {
    note.textContent = `依据《${SPORTS.find((s) => s.id === state.sport)?.book}》水上部分；泳池安全为一等字段。`
    note.hidden = false
  } else {
    const book = SPORTS.find((s) => s.id === state.sport)?.book
    note.textContent = book ? `对齐教师用书《${book}》学练赛 / 素质结构` : ''
    note.hidden = !book
  }

  paintExtra(root)

  root.querySelector('#need').value = state.need
  root.querySelector('#need-tags').innerHTML = c.tags
    .map(
      (t) =>
        `<button type="button" class="tag ${state.tags.includes(t) ? 'on' : ''}" data-tag="${t}">${t}</button>`
    )
    .join('')

  const focusSec = root.querySelector('#focus-section')
  if (c.focuses?.length) {
    focusSec.hidden = false
    root.querySelector('#focuses').innerHTML = c.focuses
      .map(
        (f) =>
          `<button type="button" class="chip ${state.focuses.includes(f) ? 'on' : ''}" data-focus="${f}">${f}</button>`
      )
      .join('')
  } else {
    focusSec.hidden = true
  }

  root.querySelector('#count-hint').textContent = c.countHint || ''

  root.querySelector('#age-presets').innerHTML = AGE_PRESETS.map(
    (p) =>
      `<button type="button" class="chip ${state.ageMin === p.min && state.ageMax === p.max ? 'on' : ''}" data-amin="${p.min}" data-amax="${p.max}">${p.label}</button>`
  ).join('')

  root.querySelector('#count-presets').innerHTML = COUNT_PRESETS.map(
    (p) =>
      `<button type="button" class="chip ${state.countMin === p.min && state.countMax === p.max ? 'on' : ''}" data-cmin="${p.min}" data-cmax="${p.max}">${p.label}</button>`
  ).join('')

  root.querySelector('#durations').innerHTML = DURATIONS.map(
    (d) =>
      `<button type="button" class="chip ${state.duration === d ? 'on' : ''}" data-dur="${d}">${d} 分钟</button>`
  ).join('')

  root.querySelector('#detail').innerHTML = `
    <button type="button" class="option-card ${state.detail === 'full' ? 'on' : ''}" data-detail="full">
      <strong>详细</strong><span>要领 + 纠正 + 组织</span>
    </button>
    <button type="button" class="option-card ${state.detail === 'brief' ? 'on' : ''}" data-detail="brief">
      <strong>精简</strong><span>名称 / 时长 / 要点一句</span>
    </button>`

  root.querySelector('#venues').innerHTML = c.venues
    .map(
      (v) =>
        `<button type="button" class="chip ${state.venue === v ? 'on' : ''}" data-venue="${v}">${v}</button>`
    )
    .join('')

  root.querySelector('#gears').innerHTML = c.gears
    .map(
      (g) =>
        `<button type="button" class="chip ${state.gears.includes(g) ? 'on' : ''}" data-gear="${g}">${g}</button>`
    )
    .join('')

  const safetySec = root.querySelector('#safety-section')
  if (c.requireSafety) {
    safetySec.hidden = false
    root.querySelector('#safety-checks').innerHTML = c.safetyChecks
      .map(
        (item) => `
      <label class="safety-item ${state.safety?.[item.id] ? 'on' : ''}">
        <input type="checkbox" data-safety="${item.id}" ${state.safety?.[item.id] ? 'checked' : ''} />
        ${item.label}
      </label>`
      )
      .join('')
  } else {
    safetySec.hidden = true
  }
}

function paintExtra(root) {
  const c = cfg()
  const box = root.querySelector('#sport-extra')
  let html = ''

  if (c.lessonTypes?.length) {
    html += `
      <div class="section">
        <h3 class="section-title">课型 <span class="hint">体能教师用书</span></h3>
        <div class="choice-row" id="lesson-types">
          ${c.lessonTypes
            .map(
              (t) =>
                `<button type="button" class="chip ${state.lessonType === t.id ? 'on' : ''}" data-lesson-type="${t.id}">${t.label}</button>`
            )
            .join('')}
        </div>
      </div>`
  }

  if (c.ballTypes?.length) {
    html += `
      <div class="section">
        <h3 class="section-title">球种</h3>
        <div class="choice-row" id="ball-types">
          ${c.ballTypes
            .map(
              (t) =>
                `<button type="button" class="chip ${state.ballType === t.id ? 'on' : ''}" data-ball-type="${t.id}">${t.label}</button>`
            )
            .join('')}
        </div>
      </div>`
  }

  if (c.strokes?.length) {
    html += `
      <div class="section">
        <h3 class="section-title">泳姿 <span class="hint">必选</span></h3>
        <div class="choice-row" id="strokes">
          ${c.strokes
            .map(
              (t) =>
                `<button type="button" class="chip ${state.stroke === t.id ? 'on' : ''}" data-stroke="${t.id}">${t.label}</button>`
            )
            .join('')}
        </div>
      </div>`
  }

  if (c.extras?.miniBall) {
    html += `
      <div class="section">
        <h3 class="section-title">小篮球</h3>
        <button type="button" class="chip ${state.miniBall ? 'on' : ''}" id="mini-ball" style="width:100%;justify-content:center">
          ${state.miniBall ? '✓ 已开启（低篮筐 / 规则简化）' : '开启小篮球模式（小学推荐）'}
        </button>
      </div>`
  }

  box.innerHTML = html
}

function switchSport(root, sportId) {
  state.sport = sportId
  applySportDefaults(state)
  state.lesson = null
  state.openDrill = null
  destroyBoards()
  const result = root.querySelector('#result')
  result.classList.remove('show')
  result.innerHTML = ''
  delete result.dataset.drillsWired
  paintForm(root)
}

function wireForm(root) {
  root.querySelector('#sports').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-sport]')
    if (!btn) return
    switchSport(root, btn.dataset.sport)
  })

  root.querySelector('#need').addEventListener('input', (e) => {
    state.need = e.target.value
  })

  root.querySelector('#need-tags').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-tag]')
    if (!btn) return
    const t = btn.dataset.tag
    if (state.tags.includes(t)) state.tags = state.tags.filter((x) => x !== t)
    else state.tags = [...state.tags, t]
    if (!state.need.includes(t)) {
      state.need = `${state.need.trim()}${state.need.trim() ? '；' : ''}${t}`
      root.querySelector('#need').value = state.need
    }
    paintForm(root)
  })

  root.querySelector('#form').addEventListener('click', (e) => {
    const focus = e.target.closest('[data-focus]')
    if (focus) {
      const f = focus.dataset.focus
      if (state.focuses.includes(f)) state.focuses = state.focuses.filter((x) => x !== f)
      else state.focuses = [...state.focuses, f]
      paintForm(root)
      return
    }
    const lt = e.target.closest('[data-lesson-type]')
    if (lt) {
      state.lessonType = lt.dataset.lessonType
      paintForm(root)
      return
    }
    const bt = e.target.closest('[data-ball-type]')
    if (bt) {
      state.ballType = bt.dataset.ballType
      paintForm(root)
      return
    }
    const st = e.target.closest('[data-stroke]')
    if (st) {
      state.stroke = st.dataset.stroke
      paintForm(root)
      return
    }
    if (e.target.closest('#mini-ball')) {
      state.miniBall = !state.miniBall
      paintForm(root)
    }
  })

  root.querySelector('#form').addEventListener('change', (e) => {
    const box = e.target.closest('[data-safety]')
    if (!box) return
    state.safety = { ...state.safety, [box.dataset.safety]: box.checked }
    paintForm(root)
  })

  const syncAge = () => {
    state.ageMin = Number(root.querySelector('#ageMin').value) || 6
    state.ageMax = Number(root.querySelector('#ageMax').value) || 8
    root.querySelector('#ageStage').textContent = stageForAge(state.ageMin, state.ageMax)
    paintForm(root)
  }
  root.querySelector('#ageMin').addEventListener('change', syncAge)
  root.querySelector('#ageMax').addEventListener('change', syncAge)

  root.querySelector('#age-presets').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-amin]')
    if (!btn) return
    state.ageMin = Number(btn.dataset.amin)
    state.ageMax = Number(btn.dataset.amax)
    root.querySelector('#ageMin').value = state.ageMin
    root.querySelector('#ageMax').value = state.ageMax
    root.querySelector('#ageStage').textContent = stageForAge(state.ageMin, state.ageMax)
    paintForm(root)
  })

  const syncCount = () => {
    state.countMin = Number(root.querySelector('#countMin').value) || 1
    state.countMax = Number(root.querySelector('#countMax').value) || 1
    paintForm(root)
  }
  root.querySelector('#countMin').addEventListener('change', syncCount)
  root.querySelector('#countMax').addEventListener('change', syncCount)

  root.querySelector('#count-presets').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cmin]')
    if (!btn) return
    state.countMin = Number(btn.dataset.cmin)
    state.countMax = Number(btn.dataset.cmax)
    root.querySelector('#countMin').value = state.countMin
    root.querySelector('#countMax').value = state.countMax
    paintForm(root)
  })

  root.querySelector('#durations').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-dur]')
    if (!btn) return
    state.duration = Number(btn.dataset.dur)
    paintForm(root)
  })

  root.querySelector('#detail').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-detail]')
    if (!btn) return
    state.detail = btn.dataset.detail
    paintForm(root)
  })

  root.querySelector('#venues').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-venue]')
    if (!btn) return
    state.venue = btn.dataset.venue
    paintForm(root)
  })

  root.querySelector('#gears').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-gear]')
    if (!btn) return
    const g = btn.dataset.gear
    if (state.gears.includes(g)) state.gears = state.gears.filter((x) => x !== g)
    else state.gears = [...state.gears, g]
    paintForm(root)
  })

  root.querySelector('#generate').addEventListener('click', () => startGenerate(root))
}

async function startGenerate(root) {
  if (state.loading) return
  state.loading = true
  state.lesson = null
  destroyBoards()

  const loading = root.querySelector('#loading')
  const result = root.querySelector('#result')
  const btn = root.querySelector('#generate')
  const label = root.querySelector('#gen-label')
  const bar = root.querySelector('#load-bar')

  result.classList.remove('show')
  result.innerHTML = ''
  delete result.dataset.drillsWired
  loading.classList.add('show')
  btn.disabled = true
  loading.scrollIntoView({ behavior: 'smooth', block: 'center' })

  const labels = ['正在准备…', '正在分析需求…', '正在设计训练项目和战术动图…']
  const durations = [700, 1200, 1800]

  for (let i = 0; i < 3; i++) {
    state.loadStep = i
    label.textContent = labels[i]
    loading.querySelectorAll('.lp').forEach((el) => {
      const idx = Number(el.dataset.i)
      el.classList.toggle('active', idx === i)
      el.classList.toggle('done', idx < i)
    })
    bar.style.width = `${((i + 0.35) / 3) * 100}%`
    await wait(durations[i])
  }

  bar.style.width = '100%'
  loading.querySelectorAll('.lp').forEach((el) => {
    el.classList.remove('active')
    el.classList.add('done')
  })

  state.lesson = buildLesson(state)
  state.openDrill = state.lesson.drills[0]?.id || null
  await wait(200)

  loading.classList.remove('show')
  renderResult(root)
  state.loading = false
  btn.disabled = false
  label.textContent = '生成专属训练课'
  root.querySelector('#result').scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function renderResult(root) {
  const lesson = state.lesson
  if (!lesson) return
  const el = root.querySelector('#result')
  const totalMin = lesson.drills.reduce((s, d) => s + d.minutes, 0)
  const colors = DRILL_COLORS
  const c = cfg()

  const safetyHtml = lesson.safetyBlock
    ? `
    <div class="safety-card">
      <h3>${escapeHtml(lesson.safetyBlock.title)}</h3>
      ${
        lesson.safetyBlock.items?.length
          ? `<ul>${lesson.safetyBlock.items
              .map(
                (i) =>
                  `<li class="${i.ok ? 'ok' : 'warn'}">${i.ok ? '✓' : '○'} ${escapeHtml(i.label)}</li>`
              )
              .join('')}</ul>`
          : ''
      }
      <p>${escapeHtml(lesson.safetyBlock.summary || '')}</p>
    </div>`
    : ''

  el.innerHTML = `
    <article class="result-card">
      <div class="result-actions">
        <button class="btn primary" type="button" id="start-train">▶ 开始训练</button>
        <button class="btn" type="button" id="copy-lesson">复制</button>
        <button class="btn" type="button" id="regen">换一版</button>
      </div>
      <h2>课程主题：${escapeHtml(lesson.title)}</h2>
      <p class="chain-line">结构：${escapeHtml(c.chain)}</p>
      ${safetyHtml}
      <ul class="meta-list">
        ${lesson.analysis.map((a) => `<li>${escapeHtml(a)}</li>`).join('')}
      </ul>
      <div class="timeline">
        <div class="timeline-head">
          <strong>时间分配</strong>
          <span>共 ${lesson.drills.length} 个训练项目 · ${totalMin} 分钟</span>
        </div>
        <div class="rail">
          ${lesson.drills
            .map(
              (d, i) =>
                `<span style="width:${(d.minutes / totalMin) * 100}%;background:${colors[i % colors.length]}"></span>`
            )
            .join('')}
        </div>
      </div>
      <div id="drills"></div>
    </article>
  `
  el.classList.add('show')

  const drillsEl = el.querySelector('#drills')
  drillsEl.innerHTML = lesson.drills
    .map((d, i) => renderDrill(d, i, state.openDrill === d.id, lesson))
    .join('')

  el.querySelector('#regen').addEventListener('click', () => startGenerate(root))
  el.querySelector('#copy-lesson').addEventListener('click', async (e) => {
    const text = [
      lesson.title,
      ...lesson.analysis,
      ...lesson.drills.map(
        (d, i) => `${String(i + 1).padStart(2, '0')} ${d.name}（${d.minutes}分钟）\n- ${d.brief}`
      ),
    ].join('\n')
    try {
      await navigator.clipboard.writeText(text)
      e.target.textContent = '已复制'
      setTimeout(() => (e.target.textContent = '复制'), 1200)
    } catch {
      e.target.textContent = '复制失败'
    }
  })
  el.querySelector('#start-train').addEventListener('click', () => {
    state.openDrill = lesson.drills[0].id
    refreshDrills(root)
    el.querySelector('.drill')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })

  wireDrills(root)
}

function renderDrill(d, i, open, lesson) {
  const color = DRILL_COLORS[i % DRILL_COLORS.length]
  const legend = lesson.legend || cfg().legend
  const steps = d.steps
    .map((s, si) => `<div data-si="${si}">${si + 1} ${escapeHtml(s)}</div>`)
    .join('')

  return `
    <div class="drill ${open ? 'open' : ''}" data-id="${d.id}">
      <button class="drill-head" type="button" data-toggle="${d.id}">
        <span class="idx" style="background:${color}">${String(i + 1).padStart(2, '0')}</span>
        <span>
          <div class="drill-title">${escapeHtml(d.name)}</div>
          <div class="drill-tags">
            <span class="mini time">${d.minutes}分钟</span>
            <span class="mini">${escapeHtml(d.group)}</span>
            <span class="mini">${escapeHtml(d.goal)}</span>
            ${d.load ? `<span class="mini load">${escapeHtml(d.load)}</span>` : ''}
          </div>
        </span>
        <span class="chev">▾</span>
      </button>
      <div class="drill-body">
        <div class="revise">
          <input type="text" placeholder="想怎么改？可不填，直接点就换一个" data-note="${d.id}" />
          <button type="button" data-revise="${d.id}">✦ 修改</button>
        </div>
        <div class="board" data-board="${d.id}">
          <div class="board-top"><span>${escapeHtml(lesson.boardTitle || '战术动图')}</span><span class="step-label">第 1/${d.steps.length} 步</span></div>
          <div class="step-pills">
            <button type="button" data-prev="${d.id}">‹</button>
            ${d.steps
              .map(
                (_, si) =>
                  `<button type="button" class="${si === 0 ? 'on' : ''}" data-step="${d.id}" data-n="${si}">${si + 1}</button>`
              )
              .join('')}
            <button type="button" data-next="${d.id}">›</button>
          </div>
          <div class="canvas-wrap"><canvas></canvas></div>
          <div class="scrub">
            <label>拖动看</label>
            <input type="range" min="0" max="${d.steps.length}" step="0.01" value="0" data-scrub="${d.id}" />
          </div>
          <div class="step-lines" data-lines="${d.id}">${steps}</div>
          <div class="board-foot">
            <div class="legend">
              ${(legend || [])
                .map(
                  (L) =>
                    `<span><i style="background:${L.color};${L.dash ? 'border-top:1px dashed ' + L.color : ''}"></i>${escapeHtml(L.label)}</span>`
                )
                .join('')}
            </div>
            <div class="board-ctrls">
              <button type="button" data-jersey="${d.id}">球衣</button>
              <button type="button" data-slow="${d.id}">慢速</button>
              <button type="button" class="play" data-play="${d.id}">播放</button>
            </div>
          </div>
        </div>
        <div class="detail">
          <div><h4>简介</h4>${escapeHtml(d.brief)}</div>
          <div><h4>组织</h4>${escapeHtml(d.org)}</div>
          <div><h4>规则 / 玩法</h4>${escapeHtml(d.rules)}</div>
          <div><h4>教练要点</h4>${escapeHtml(d.tips)}</div>
          ${d.load ? `<div><h4>运动负荷</h4>${escapeHtml(d.load)}</div>` : ''}
        </div>
      </div>
    </div>
  `
}

function wireDrills(root) {
  const host = root.querySelector('#result')
  if (!host) return
  if (!host.dataset.drillsWired) {
    host.dataset.drillsWired = '1'
    host.addEventListener('click', (e) => onDrillClick(root, e))
    host.addEventListener('input', (e) => onDrillInput(root, e))
  }
  if (state.openDrill) ensureBoard(root, state.openDrill)
}

function onDrillClick(root, e) {
  const toggle = e.target.closest('[data-toggle]')
  if (toggle) {
    const id = toggle.dataset.toggle
    state.openDrill = state.openDrill === id ? null : id
    refreshDrills(root)
    return
  }

  const revise = e.target.closest('[data-revise]')
  if (revise) {
    const id = revise.dataset.revise
    const input = root.querySelector(`[data-note="${id}"]`)
    const note = input?.value || ''
    const idx = state.lesson.drills.findIndex((d) => d.id === id)
    if (idx >= 0) {
      revise.disabled = true
      revise.textContent = '设计中…'
      setTimeout(() => {
        state.lesson.drills[idx] = reviseDrill(state.lesson.drills[idx], note)
        state.openDrill = id
        refreshDrills(root)
      }, 700)
    }
    return
  }

  const stepBtn = e.target.closest('[data-step]')
  if (stepBtn) {
    const id = stepBtn.dataset.step
    const n = Number(stepBtn.dataset.n)
    const board = ensureBoard(root, id)
    board.pause()
    board.setStep(n)
    syncBoardUi(root, id, n, 0)
    return
  }

  const prev = e.target.closest('[data-prev]')
  if (prev) {
    const id = prev.dataset.prev
    const board = ensureBoard(root, id)
    const n = Math.max(0, board.step - 1)
    board.pause()
    board.setStep(n)
    syncBoardUi(root, id, n, 0)
    return
  }

  const next = e.target.closest('[data-next]')
  if (next) {
    const id = next.dataset.next
    const drill = state.lesson.drills.find((d) => d.id === id)
    const board = ensureBoard(root, id)
    const n = Math.min((drill?.steps.length || 1) - 1, board.step + 1)
    board.pause()
    board.setStep(n)
    syncBoardUi(root, id, n, 0)
    return
  }

  const play = e.target.closest('[data-play]')
  if (play) {
    const id = play.dataset.play
    const board = ensureBoard(root, id)
    const playing = board.togglePlay()
    play.classList.toggle('on', playing)
    play.textContent = playing ? '暂停' : '播放'
    return
  }

  const slow = e.target.closest('[data-slow]')
  if (slow) {
    const id = slow.dataset.slow
    const board = ensureBoard(root, id)
    const on = board.toggleSlow()
    slow.style.background = on ? 'rgba(232,184,74,0.25)' : ''
    return
  }

  const jersey = e.target.closest('[data-jersey]')
  if (jersey) ensureBoard(root, jersey.dataset.jersey).toggleJersey()
}

function onDrillInput(root, e) {
  const scrub = e.target.closest('[data-scrub]')
  if (!scrub) return
  const id = scrub.dataset.scrub
  const board = ensureBoard(root, id)
  board.pause()
  const val = Number(scrub.value)
  board.setProgress(val)
  syncBoardUi(root, id, Math.floor(val), val - Math.floor(val), false)
}

function refreshDrills(root) {
  destroyBoards()
  const drillsEl = root.querySelector('#drills')
  if (!drillsEl || !state.lesson) return
  drillsEl.innerHTML = state.lesson.drills
    .map((d, i) => renderDrill(d, i, state.openDrill === d.id, state.lesson))
    .join('')
  if (state.openDrill) ensureBoard(root, state.openDrill)
}

function ensureBoard(root, id) {
  if (boards.has(id)) return boards.get(id)
  const wrap = root.querySelector(`[data-board="${id}"] .canvas-wrap canvas`)
  const drill = state.lesson.drills.find((d) => d.id === id)
  const board = createBoard(wrap)
  board.setTheme(state.lesson.boardTheme || 'soccer')
  board.setPath(drill?.path || 'cones')
  board.mount()
  board.onStep((step) => syncBoardUi(root, id, step, 0))
  board.onProgress((p) => {
    const scrub = root.querySelector(`[data-scrub="${id}"]`)
    if (scrub) scrub.value = String(p)
    syncBoardUi(root, id, Math.floor(p), p - Math.floor(p), false)
  })
  boards.set(id, board)
  return board
}

function syncBoardUi(root, id, step, _frac, updateScrub = true) {
  const drill = state.lesson?.drills.find((d) => d.id === id)
  if (!drill) return
  const boardEl = root.querySelector(`[data-board="${id}"]`)
  if (!boardEl) return
  boardEl.querySelector('.step-label').textContent = `第 ${step + 1}/${drill.steps.length} 步`
  boardEl.querySelectorAll('[data-step]').forEach((btn) => {
    btn.classList.toggle('on', Number(btn.dataset.n) === step)
  })
  boardEl.querySelectorAll(`[data-lines="${id}"] > div`).forEach((line) => {
    line.classList.toggle('on', Number(line.dataset.si) === step)
  })
  if (updateScrub) {
    const scrub = boardEl.querySelector(`[data-scrub="${id}"]`)
    if (scrub) scrub.value = String(step)
  }
  const play = boardEl.querySelector(`[data-play="${id}"]`)
  const board = boards.get(id)
  if (play && board) {
    play.classList.toggle('on', board.playing)
    play.textContent = board.playing ? '暂停' : '播放'
  }
}

function destroyBoards() {
  boards.forEach((b) => b.destroy())
  boards.clear()
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}
