/**
 * 按义务教育《体育与健康》教师用书摘要区分八大类。
 * 网球：书中无独立分册，用隔网持拍自建模板，UI 标明资料缺口。
 */

export const SPORTS = [
  { id: 'football', label: '足球', ico: '⚽', book: '足球运动' },
  { id: 'basketball', label: '篮球', ico: '🏀', book: '篮球运动' },
  { id: 'tennis', label: '网球', ico: '🎾', book: null },
  { id: 'badminton', label: '羽毛球', ico: '🏸', book: '羽毛球运动' },
  { id: 'pingpong', label: '乒乓球', ico: '🏓', book: '乒乓球运动' },
  { id: 'volleyball', label: '排球', ico: '🏐', book: '排球运动' },
  { id: 'swim', label: '游泳', ico: '🏊', book: '游泳·滑冰·滑雪（水上）' },
  { id: 'fitness', label: '体能', ico: '💪', book: '体能' },
]

const FITNESS_TAGS = [
  '柔韧性',
  '心肺耐力',
  '肌肉耐力',
  '肌肉力量',
  '协调性',
  '反应能力',
  '位移速度',
  '爆发力',
  '灵敏性',
  '平衡能力',
  '身体成分',
]

export const SPORT_CONFIG = {
  fitness: {
    needPlaceholder:
      '本节课想发展孩子们的协调与灵敏，结合趣味循环站和游戏接力。',
    tags: FITNESS_TAGS,
    defaultTags: ['协调性', '灵敏性'],
    venues: ['室内空地', '室外场地', '小空间', '有器械区'],
    defaultVenue: '室内空地',
    gears: ['标志桶', '标志盘', '敏捷梯', '小栏架', '跳绳', '体操垫', '弹力带', '实心球'],
    defaultGears: ['标志桶', '敏捷梯', '体操垫'],
    focuses: [],
    lessonTypes: [
      { id: 'full', label: '完整体能课' },
      { id: 'scatter', label: '课内分散' },
      { id: 'focus', label: '课内集中' },
      { id: 'recess', label: '大课间' },
      { id: 'team', label: '运动队训练' },
      { id: 'homework', label: '体育课作业' },
    ],
    defaultLessonType: 'full',
    boardTheme: 'fitness',
    boardTitle: '素质站示意',
    legend: [
      { color: '#fff', dash: true, label: '线路' },
      { color: '#f97316', label: '障碍' },
      { color: '#e8b84a', dash: true, label: '分组' },
      { color: '#22c55e', label: '测评点' },
    ],
    countHint: '游戏/循环站宜 8–20 人，实力接近混合分组',
    title: (s, age, focus) => `${age}体能${focus || '综合素质'}趣味训练课`,
    chain: '准备激活 → 素质站循环 → 游戏/比赛法 → 放松复盘',
  },

  football: {
    needPlaceholder: '想练传接运射与小场地对抗，解决不敢射门和盯人不紧的问题。',
    tags: [
      '控球不稳',
      '传球不准',
      '不敢射门',
      '不会摆脱',
      '盯人不紧',
      '小场地不会组织',
      '体能跟不上对抗',
    ],
    defaultTags: ['传球不准', '不敢射门'],
    venues: ['室外场地', '小场地', '半场', '室内空地（降对抗）'],
    defaultVenue: '室外场地',
    gears: ['足球', '标志桶', '标志杆', '球门/标志门', '音响'],
    defaultGears: ['足球', '标志桶', '球门/标志门'],
    focuses: ['运球', '传接', '射门', '防守抢断', '2人配合', '小组对抗'],
    defaultFocuses: ['传接', '射门'],
    boardTheme: 'soccer',
    boardTitle: '球场攻防',
    legend: [
      { color: '#fff', dash: true, label: '跑位' },
      { color: '#f97316', label: '带球' },
      { color: '#e8b84a', dash: true, label: '传球' },
      { color: '#ef4444', label: '射门' },
    ],
    countHint: '尽量提高球人比；私教走个人纠错+影子对抗',
    title: (s, age, focus) => `${age}足球${focus || '传射'}学练赛课`,
    chain: '球性热身 → 技术练习 → 条件对抗 → 小比赛 → 放松',
  },

  basketball: {
    needPlaceholder: '想练运传投与掩护配合，提升投篮命中和防守选位。',
    tags: [
      '运球抬头难',
      '传球时机差',
      '投篮命中低',
      '不会掩护',
      '防守选位差',
      '篮板卡位弱',
    ],
    defaultTags: ['投篮命中低', '不会掩护'],
    venues: ['半场', '全场', '室外场地', '小空间（折返/定点）'],
    defaultVenue: '半场',
    gears: ['篮球', '小篮球', '标志桶', '小篮球架', '音响'],
    defaultGears: ['篮球', '标志桶'],
    focuses: ['运球', '传接', '投篮', '脚步', '掩护', '防守', '快攻与联防'],
    defaultFocuses: ['运球', '投篮'],
    extras: { miniBall: true },
    boardTheme: 'basketball',
    boardTitle: '半场技战术',
    legend: [
      { color: '#fff', dash: true, label: '跑位' },
      { color: '#f97316', label: '运球' },
      { color: '#e8b84a', dash: true, label: '传球' },
      { color: '#ef4444', label: '投篮' },
    ],
    countHint: '小学可开小篮球；评估基础后选水平段',
    title: (s, age, focus) =>
      `${age}${s.miniBall ? '小篮球' : '篮球'}${focus || '运投'}课`,
    chain: '球性热身 → 技术块 → 掩护/传切 → 条件对抗 → 放松',
  },

  volleyball: {
    needPlaceholder: '想练垫传球串联与发球过网，低龄优先软式/气排。',
    tags: [
      '垫球不稳定',
      '发球不过网',
      '传球手型差',
      '扣球起跳时机',
      '拦网取位',
      '配合不起球',
    ],
    defaultTags: ['垫球不稳定', '发球不过网'],
    venues: ['室内场地', '排球场', '小场地（降网高）'],
    defaultVenue: '室内场地',
    gears: ['排球', '软式排球', '气排球', '球网', '标志物', '体操垫', '弹力带'],
    defaultGears: ['软式排球', '球网', '标志物'],
    focuses: ['垫球', '传球', '发球', '扣球', '拦网', '中一二', '边一二'],
    defaultFocuses: ['垫球', '发球'],
    ballTypes: [
      { id: 'soft', label: '软式排球' },
      { id: 'air', label: '气排球' },
      { id: 'hard', label: '硬排' },
    ],
    defaultBallType: 'soft',
    boardTheme: 'volleyball',
    boardTitle: '网隔站位',
    legend: [
      { color: '#fff', dash: true, label: '跑位' },
      { color: '#f97316', label: '传球' },
      { color: '#e8b84a', dash: true, label: '垫球' },
      { color: '#ef4444', label: '扣/拦' },
    ],
    countHint: '串联组合练习；团队角色清晰',
    title: (s, age, focus) => `${age}排球${focus || '垫发'}学练赛课`,
    chain: '垫发热身 → 传垫扣串联 → 小组比赛 → 专项灵敏 → 放松',
  },

  pingpong: {
    needPlaceholder: '想练推挡与发球抢攻，解决怕旋转和步法跟不上。',
    tags: [
      '不会握拍',
      '推挡不稳',
      '不会发球抢攻',
      '怕旋转',
      '步法跟不上',
      '双打站位乱',
    ],
    defaultTags: ['推挡不稳', '怕旋转'],
    venues: ['室内球台区', '小空间', '多台轮换区'],
    defaultVenue: '室内球台区',
    gears: ['球台', '球拍', '乒乓球', '球网', '标志物'],
    defaultGears: ['球台', '球拍', '乒乓球', '球网'],
    focuses: ['推挡/攻球', '发球与接发', '旋转', '步法', '双打'],
    defaultFocuses: ['推挡/攻球', '步法'],
    boardTheme: 'table',
    boardTitle: '球台落点',
    legend: [
      { color: '#fff', dash: true, label: '步法' },
      { color: '#f97316', label: '攻球' },
      { color: '#e8b84a', dash: true, label: '落点' },
      { color: '#ef4444', label: '发球' },
    ],
    countHint: '有序轮换台；注意脚下球',
    safetyNote: '脚下球及时捡拾；台次轮换有序，避免冲撞。',
    title: (s, age, focus) => `${age}乒乓球${focus || '推挡步法'}课`,
    chain: '绕台步法热身 → 多球/对练 → 旋转体验 → 台次小赛 → 放松',
  },

  badminton: {
    needPlaceholder: '想练高远与网前，解决步法乱和杀球无力。',
    tags: [
      '握拍不对',
      '高远球打不到后场',
      '网前怕球',
      '杀球无力',
      '步法乱',
      '双打抢球',
    ],
    defaultTags: ['高远球打不到后场', '步法乱'],
    venues: ['羽毛球场', '半场', '室内空地（无网喂球）'],
    defaultVenue: '羽毛球场',
    gears: ['球拍', '羽毛球', '球网', '标志桶'],
    defaultGears: ['球拍', '羽毛球', '球网', '标志桶'],
    focuses: ['高远/吊/杀', '放网搓推扑', '步法', '单打四方球', '双打轮转'],
    defaultFocuses: ['高远/吊/杀', '步法'],
    boardTheme: 'badminton',
    boardTitle: '半场跑位',
    legend: [
      { color: '#fff', dash: true, label: '跑位' },
      { color: '#f97316', label: '杀吊' },
      { color: '#e8b84a', dash: true, label: '放网' },
      { color: '#ef4444', label: '高远' },
    ],
    countHint: '未学会前限制挥拍空间，防打到同伴',
    safetyNote: '限制挥拍空间；相对固定学习团队，学生担任角色。',
    title: (s, age, focus) => `${age}羽毛球${focus || '高远步法'}课`,
    chain: '球性热身 → 技术学练 → 拉吊上网 → 小赛季对抗 → 放松',
  },

  swim: {
    needPlaceholder: '想练蛙泳蹬腿与换气配合，先解决怕水和呼吸困难。',
    tags: ['怕水', '换气困难', '蹬腿不足', '划水无效', '不会转身', '长游耐力差'],
    defaultTags: ['怕水', '换气困难'],
    venues: ['泳池', '陆上镜面练习（无泳池降级）'],
    defaultVenue: '泳池',
    gears: ['浮板', '泳道', '救生圈/辅助浮具', '哨子'],
    defaultGears: ['浮板', '泳道'],
    focuses: [],
    strokes: [
      { id: 'breast', label: '蛙泳' },
      { id: 'back', label: '仰泳' },
      { id: 'free', label: '自由泳' },
    ],
    defaultStroke: 'breast',
    requireSafety: true,
    safetyChecks: [
      { id: 'depth', label: '已确认水深分区' },
      { id: 'lifeguard', label: '有救生员/安全员在岗' },
      { id: 'warmup', label: '陆上热身已完成' },
      { id: 'health', label: '已做健康询问' },
      { id: 'observer', label: '已安排见习/岸上观察生' },
    ],
    boardTheme: 'pool',
    boardTitle: '泳道分解',
    legend: [
      { color: '#fff', dash: true, label: '滑行' },
      { color: '#38bdf8', label: '腿' },
      { color: '#e8b84a', dash: true, label: '臂' },
      { color: '#22c55e', label: '呼吸' },
    ],
    countHint: '受泳道限制宜 8–20 且分组；私教岸上+水中纠错',
    title: (s, age) => {
      const stroke =
        { breast: '蛙泳', back: '仰泳', free: '自由泳' }[s.stroke] || '蛙泳'
      return `${age}${stroke}水中安全与技术课`
    },
    chain: '陆上热身 → 水中适应/分解 → 完整配合 → 短距赛 → 水中放松',
  },

  // 教师用书无网球分册：隔网持拍自建（乒+羽并集），勿假装有书中单元进阶
  tennis: {
    needPlaceholder:
      '想练底线正反手与发球步法（自建隔网模板，非教师用书网球分册）。',
    tags: [
      '握拍不稳',
      '底线击球出界多',
      '网前怕球',
      '发球进区低',
      '步法跟不上',
      '截击时机差',
    ],
    defaultTags: ['底线击球出界多', '步法跟不上'],
    venues: ['网球场', '半场', '挡网练习区'],
    defaultVenue: '网球场',
    gears: ['网球拍', '网球', '球网', '标志筒', '发球筐'],
    defaultGears: ['网球拍', '网球', '球网', '标志筒'],
    focuses: ['正反手底线', '发球与接发', '网前截击', '步法', '对拉稳定性'],
    defaultFocuses: ['正反手底线', '步法'],
    bookGap: true,
    boardTheme: 'tennis',
    boardTitle: '球场落点（自建）',
    legend: [
      { color: '#fff', dash: true, label: '跑位' },
      { color: '#f97316', label: '底线' },
      { color: '#e8b84a', dash: true, label: '落点' },
      { color: '#ef4444', label: '发球' },
    ],
    countHint: '资料缺口：无《网球》教师用书，按隔网持拍自建',
    safetyNote: '挥拍空间隔离；注意球网与底线分区安全。',
    title: (s, age, focus) => `${age}网球${focus || '底线步法'}课（自建模板）`,
    chain: '球性热身 → 底线技术 → 发球/网前 → 对拉小赛 → 放松',
  },
}

export function getSportConfig(id) {
  return SPORT_CONFIG[id] || SPORT_CONFIG.fitness
}

export function applySportDefaults(state) {
  const cfg = getSportConfig(state.sport)
  state.tags = [...(cfg.defaultTags || [])]
  state.need = cfg.needPlaceholder
  state.venue = cfg.defaultVenue
  state.gears = [...(cfg.defaultGears || [])]
  state.focuses = [...(cfg.defaultFocuses || [])]
  state.lessonType = cfg.defaultLessonType || null
  state.ballType = cfg.defaultBallType || null
  state.stroke = cfg.defaultStroke || null
  state.miniBall = false
  state.safety = cfg.requireSafety
    ? Object.fromEntries((cfg.safetyChecks || []).map((c) => [c.id, false]))
    : {}
  return state
}

function drill(partial) {
  return {
    group: '分组练习',
    goal: '技能',
    load: '',
    steps: ['准备', '示范', '练习', '纠错'],
    brief: '',
    org: '',
    rules: '',
    tips: '',
    path: 'warmup',
    ...partial,
  }
}

function scaleDrills(drills, duration) {
  const totalBase = drills.reduce((s, d) => s + d.minutes, 0) || 1
  const scale = duration / totalBase
  const scaled = drills.map((d, i) => ({
    ...d,
    id: d.id || `d${i + 1}`,
    minutes: Math.max(2, Math.round(d.minutes * scale)),
  }))
  const sum = scaled.reduce((s, d) => s + d.minutes, 0)
  const delta = duration - sum
  if (delta !== 0 && scaled.length) {
    const last = scaled[scaled.length - 1]
    last.minutes = Math.max(2, last.minutes + delta)
  }
  return scaled
}

function focusText(state) {
  if (state.focuses?.length) return state.focuses.slice(0, 2).join('·')
  if (state.tags?.length) return state.tags[0]
  return ''
}

export function buildDrillsForSport(state) {
  const id = state.sport
  const builders = {
    fitness: buildFitness,
    football: buildFootball,
    basketball: buildBasketball,
    volleyball: buildVolleyball,
    pingpong: buildPingpong,
    badminton: buildBadminton,
    swim: buildSwim,
    tennis: buildTennis,
  }
  return (builders[id] || buildFitness)(state)
}

function buildFitness(state) {
  const tag = state.tags[0] || '协调性'
  return [
    drill({
      name: '关节激活与动态拉伸',
      minutes: 8,
      group: '全体',
      goal: '激活 / 准备',
      load: '持续 8′，中低强度',
      path: 'warmup',
      brief: '完整体能课开始部分：队列导入 + 动态激活。',
      org: '散开成体操队形，标志盘四角。',
      rules: '跟随口令节奏，不做弹振拉伸。',
      tips: '小学侧重柔韧协调；初中可加反应口令。',
      steps: ['队列报数导入', '关节绕环', '动态弓步拉伸', '原地高抬腿 20″'],
    }),
    drill({
      name: `${tag}循环站 A`,
      minutes: 14,
      group: '4 站循环',
      goal: `${tag} / 测评`,
      load: '每站 45″×3，间歇 20″',
      path: 'ladder',
      brief: `素质站发展「${tag}」，可同构替换为其他素质主题。`,
      org: '绳梯、标志桶、垫上、弹力带四站。',
      rules: '哨声换站；计数展示，比赛简化。',
      tips: '记录组次数；敏感期优先柔韧协调平衡。',
      steps: ['讲解测评动作', '示范纠正要点', '计时练习', '组间反馈'],
    }),
    drill({
      name: `${tag}循环站 B`,
      minutes: 14,
      group: '4 站循环',
      goal: '肌肉耐力 / 平衡',
      load: '每站 40″×3',
      path: 'core',
      brief: '第二轮素质站，强化肌耐力与平衡能力。',
      org: '实力接近混合分组。',
      rules: '动作质量优先于速度。',
      tips: '负荷可调；护具与垫子铺设到位。',
      steps: ['平板/单脚站', '弹力带划船', '实心球传递', '换站'],
    }),
    drill({
      name: '灵敏反应游戏接力',
      minutes: 16,
      group: '比赛法',
      goal: '灵敏 / 反应',
      load: '4 回合，中高强度',
      path: 'chase',
      brief: '游戏法与比赛法结合，体能游戏可替换素质主题。',
      org: '标志桶线路 + 信号变向。',
      rules: '轻拍即停；冲出边界重来。',
      tips: '强调公平分组。',
      steps: ['讲解规则', '试跑一趟', '正式对抗', '轮换角色'],
    }),
    drill({
      name: '标志盘协作计数赛',
      minutes: 12,
      group: '对抗',
      goal: '协作 / 心肺',
      load: '3×2′',
      path: 'relay',
      brief: '计数展示为主，小学规则简化。',
      org: '四色盘分区。',
      rules: '一次一盘；错色退回。',
      tips: '呼喊队友名字。',
      steps: ['认领颜色', '听令取盘', '交接', '统计'],
    }),
    drill({
      name: '拉伸放松与负荷复盘',
      minutes: 6,
      group: '全体',
      goal: '放松',
      load: '低强度',
      path: 'cooldown',
      brief: '结束部分：静态拉伸 + 点评负荷感受。',
      org: '围坐半圆。',
      rules: '拉伸不弹振。',
      tips: '布置居家短时素质作业。',
      steps: ['呼吸', '拉伸', '自评负荷', '作业'],
    }),
  ]
}

function buildFootball(state) {
  const focus = focusText(state) || '传射'
  return [
    drill({
      name: '球性热身绕杆',
      minutes: 10,
      group: '全体 1 人 1 球',
      goal: '激活 / 球感',
      path: 'warmup',
      brief: '足球课准备部分：带球绕标志桶激活。',
      org: '每人一球，锥桶蛇形线路。',
      rules: '球不离控；室内空地则降对抗只做球性。',
      tips: '小场地多触球；注意冲撞安全。',
      steps: ['脚内侧拨球', '绕杆', '急停转身', '动态拉伸'],
    }),
    drill({
      name: `${focus}技术块`,
      minutes: 16,
      group: '分组',
      goal: '技能',
      path: 'cones',
      brief: '结构化技术练习：传接/运射结合。',
      org: '两人传接通道 + 射门通道。',
      rules: '完成次数达标再升级。',
      tips: '水平三：脚内侧传接、运球射门；水平四加空中球。',
      steps: ['无对抗传接', '移动传接', '接球射门', '纠正脚型'],
    }),
    drill({
      name: '2 人配合摆脱',
      minutes: 14,
      group: '2v1',
      goal: '战术 / 配合',
      path: 'chase',
      brief: '墙式二过一与摆脱盯人。',
      org: '半场小区，红蓝标志服。',
      rules: '防守不可铲抢（低龄）。',
      tips: '呼应要球；抬头观察。',
      steps: ['演示墙传', '慢速配合', '加入防守', '轮换'],
    }),
    drill({
      name: '条件小场地对抗',
      minutes: 14,
      group: '对抗',
      goal: '对抗运用',
      path: 'relay',
      brief: '限制触球次数的条件对抗。',
      org: '小场地双球门。',
      rules: '最多三脚触球；注意冲撞。',
      tips: '学练赛评一体化。',
      steps: ['讲条件', '试对抗', '正式局', '暂停纠错'],
    }),
    drill({
      name: '小比赛与规则提升',
      minutes: 16,
      group: '比赛',
      goal: '比赛 / 规则',
      path: 'cones',
      brief: '融入实战的小比赛，含简单规则提示。',
      org: '分边比赛，教师兼任裁判。',
      rules: '手球/危险动作鸣哨；进球轮换。',
      tips: '表扬盯人与敢于射门。',
      steps: ['分队', '开球', '中场点评', '续赛'],
    }),
    drill({
      name: '放松拉伸与点评',
      minutes: 6,
      group: '全体',
      goal: '放松',
      path: 'cooldown',
      brief: '结束部分收器材与点评。',
      org: '坐姿拉伸圈。',
      rules: '球归位清点。',
      tips: '每位说一个进步点。',
      steps: ['慢跑放松', '拉伸', '点评', '收器材'],
    }),
  ]
}

function buildBasketball(state) {
  const mini = state.miniBall
  const focus = focusText(state) || '运投'
  return [
    drill({
      name: mini ? '小篮球球性游戏' : '球性运球热身',
      minutes: 10,
      group: '全体',
      goal: '球性 / 激活',
      path: 'warmup',
      brief: '篮球准备部分强调球性练习。',
      org: mini ? '低篮筐区，小篮球' : '半场每人一球',
      rules: '抬头运球挑战；不撞人。',
      tips: '小学开小篮球、规则简化。',
      steps: ['原地运球', '左右手交换', '绕锥折返', '动态拉伸'],
    }),
    drill({
      name: `${focus}基本技术`,
      minutes: 16,
      group: '分组',
      goal: '技能',
      path: 'ladder',
      brief: '运传投螺旋上升技术块。',
      org: '三组轮换：运球折返 / 胸前传 / 定点投。',
      rules: '完成组数换站。',
      tips: '评估基础后选水平段。',
      steps: ['示范手型', '分解练习', '组合', '纠正'],
    }),
    drill({
      name: '掩护挡拆路线',
      minutes: 14,
      group: '3 人组',
      goal: '战术',
      path: 'cones',
      brief: '半场掩护与传切策应。',
      org: '三秒区两侧摆筒模拟掩护。',
      rules: '掩护站定；无推人。',
      tips: '团队协作与规则意识。',
      steps: ['无球掩护演示', '慢速挡拆', '加入防守', '轮换角色'],
    }),
    drill({
      name: '条件半场对抗',
      minutes: 14,
      group: '对抗',
      goal: '运用',
      path: 'chase',
      brief: '半场攻防，强调防守选位与篮板卡位。',
      org: '3v3 或 4v4。',
      rules: mini ? '简化走步、降低对抗' : '正常半场规则',
      tips: '暂停纠防守选位。',
      steps: ['分队', '试攻', '正式局', '点评'],
    }),
    drill({
      name: '小比赛',
      minutes: 14,
      group: '比赛',
      goal: '比赛',
      path: 'relay',
      brief: '游戏与比赛组织权重大。',
      org: '计分小比赛。',
      rules: '文明对抗。',
      tips: '表扬掩护与抬头传球。',
      steps: ['开球', '中场轮换', '加时挑战', '庆祝'],
    }),
    drill({
      name: '放松与复盘',
      minutes: 6,
      group: '全体',
      goal: '放松',
      path: 'cooldown',
      brief: '拉伸与团队协作点评。',
      org: '半场中圈。',
      rules: '球归筐。',
      tips: '说一个协作亮点。',
      steps: ['慢跑', '拉伸', '点评', '收器材'],
    }),
  ]
}

function buildVolleyball(state) {
  const ball =
    { soft: '软式', air: '气排', hard: '硬排' }[state.ballType] || '软式'
  return [
    drill({
      name: `${ball}颠垫热身`,
      minutes: 10,
      group: '两人一组',
      goal: '激活 / 手感',
      path: 'warmup',
      brief: '对垫热身，低龄软式/气排优先。',
      org: '网前两侧站位。',
      rules: '连续垫球计数。',
      tips: '手型与插入角度。',
      steps: ['自垫', '对垫', '移动对垫', '拉伸'],
    }),
    drill({
      name: '垫传发串联',
      minutes: 16,
      group: '三人组',
      goal: '技能串联',
      path: 'cones',
      brief: '垫→传→发组合练习。',
      org: '三人三角站位，过网发球。',
      rules: '球不过网重来。',
      tips: '常见错误：传球手型、发球拍击点。',
      steps: ['垫球稳定', '传球手型', '下手/上手发球', '串联'],
    }),
    drill({
      name: '扣拦体验',
      minutes: 14,
      group: '分组',
      goal: '扣 / 拦',
      path: 'chase',
      brief: '起跳时机与拦网取位。',
      org: '网一侧扣球，对侧单人拦。',
      rules: '低龄降网高；禁止抓网。',
      tips: '专项体能穿插灵敏弹跳。',
      steps: ['助跑节奏', '空中击球', '拦网取位', '轮换'],
    }),
    drill({
      name: '中一二小组赛',
      minutes: 16,
      group: '比赛',
      goal: '战术 / 比赛',
      path: 'relay',
      brief: '「中一二」进攻体验与角色分工。',
      org: '6 人制简化，1–6 号站位。',
      rules: '三次击球过网；轮转。',
      tips: '团队角色与裁判手势可进环节。',
      steps: ['站位讲解', '试赛', '正式局', '轮转换人'],
    }),
    drill({
      name: '灵敏弹跳专项',
      minutes: 10,
      group: '全体',
      goal: '专项体能',
      path: 'ladder',
      brief: '灵敏、协调、弹跳素质。',
      org: '标志物折返 + 跳起拦网模仿。',
      rules: '落地缓冲。',
      tips: '弹力带可选。',
      steps: ['折返', '摸高', '横向滑步', '放松跳'],
    }),
    drill({
      name: '放松收网',
      minutes: 6,
      group: '全体',
      goal: '放松',
      path: 'cooldown',
      brief: '肩带拉伸与收器材。',
      org: '网下坐姿。',
      rules: '网柱安全收纳。',
      tips: '点评配合起球。',
      steps: ['拉伸', '点评', '收球', '下课'],
    }),
  ]
}

function buildPingpong(state) {
  return [
    drill({
      name: '绕台步法热身',
      minutes: 8,
      group: '全体',
      goal: '步法 / 激活',
      path: 'warmup',
      brief: '侧滑步/交叉步绕台 + 托球。',
      org: '球台外围标志点。',
      rules: '脚下球立即停捡。',
      tips: '隔网无身体冲撞，强调决策与步法。',
      steps: ['侧滑步', '交叉步', '托球绕台', '握拍检查'],
    }),
    drill({
      name: '推挡多球对练',
      minutes: 16,
      group: '台次轮换',
      goal: '推挡 / 攻球',
      path: 'table',
      brief: '多球/对练台次轮换。',
      org: '两台，四人一循环。',
      rules: '连续板数达标换人。',
      tips: '详细版纠正拍形与击球点。',
      steps: ['定点球', '直线推挡', '斜线', '纠拍形'],
    }),
    drill({
      name: '旋转体验与接发',
      minutes: 14,
      group: '两人',
      goal: '旋转',
      path: 'cones',
      brief: '上旋下旋侧旋体验，游戏化进阶。',
      org: '发球方明示旋转类型。',
      rules: '猜对旋转加分。',
      tips: '怕旋转→先识别再击打。',
      steps: ['下旋发球', '上旋', '侧旋', '接发判断'],
    }),
    drill({
      name: '步法结合攻球',
      minutes: 14,
      group: '分组',
      goal: '步法运用',
      path: 'ladder',
      brief: '单步并步侧身结合攻球。',
      org: '标志物提示落点分区。',
      rules: '先步法后挥拍。',
      tips: '常见问题：重心起伏过大。',
      steps: ['并步移动', '侧身攻', '还原', '组合'],
    }),
    drill({
      name: '台次小赛 / 双打体验',
      minutes: 14,
      group: '比赛',
      goal: '比赛',
      path: 'relay',
      brief: '综合练习与双打站位。',
      org: '11 分制简化。',
      rules: '轮换发球；双打不抢位。',
      tips: '水平三+可加礼仪。',
      steps: ['分台', '单打局', '双打轮转', '点评'],
    }),
    drill({
      name: '放松与收拍',
      minutes: 6,
      group: '全体',
      goal: '放松',
      path: 'cooldown',
      brief: '前臂拉伸，清点球拍球体。',
      org: '台侧站立。',
      rules: '球入盒。',
      tips: '说一个拍形改进。',
      steps: ['拉伸', '点评', '收器材'],
    }),
  ]
}

function buildBadminton(state) {
  return [
    drill({
      name: '颠球与步法热身',
      minutes: 10,
      group: '全体',
      goal: '球感 / 激活',
      path: 'warmup',
      brief: '无网或半场颠球 + 米字步法。',
      org: '标志桶四点。',
      rules: '限制挥拍空间，防打到同伴。',
      tips: '相对固定学习团队。',
      steps: ['正手颠球', '米字步', '高抬腿', '握拍检查'],
    }),
    drill({
      name: '高远吊杀技术',
      minutes: 16,
      group: '分组喂球',
      goal: '高远 / 吊 / 杀',
      path: 'cones',
      brief: '后场三项基本技术。',
      org: '教练/骨干多球喂球。',
      rules: '未掌握前半场挥拍。',
      tips: '高远打不到后场→侧身与击球点。',
      steps: ['高远分解', '吊球', '杀球', '组合'],
    }),
    drill({
      name: '网前搓推扑',
      minutes: 12,
      group: '两人',
      goal: '控网',
      path: 'ladder',
      brief: '网前怕球的专项克服。',
      org: '网前两侧。',
      rules: '轻搓过网计数。',
      tips: '拍面开放，重心前倾。',
      steps: ['放网', '搓球', '推球', '扑球'],
    }),
    drill({
      name: '拉吊上网战术',
      minutes: 14,
      group: '对练',
      goal: '战术',
      path: 'chase',
      brief: '高阶「拉吊上网」线路。',
      org: '单打半场。',
      rules: '规定线路完成再自由。',
      tips: '步法还原优先。',
      steps: ['后场高远', '吊网前', '上网搓', '重复'],
    }),
    drill({
      name: '小赛季对抗',
      minutes: 14,
      group: '比赛',
      goal: '实战',
      path: 'relay',
      brief: '插入小赛季，学生担任裁判角色。',
      org: '单打/双打轮转。',
      rules: '礼仪发球；双打不抢球。',
      tips: '水平三+可加裁判手势。',
      steps: ['抽签', '局间点评', '换边', '颁「周冠军」'],
    }),
    drill({
      name: '拉伸放松',
      minutes: 6,
      group: '全体',
      goal: '放松',
      path: 'cooldown',
      brief: '肩肘腕拉伸。',
      org: '场地边线。',
      rules: '球拍入包。',
      tips: '点评步法还原。',
      steps: ['拉伸', '点评', '收网'],
    }),
  ]
}

function buildSwim(state) {
  const stroke =
    { breast: '蛙泳', back: '仰泳', free: '自由泳' }[state.stroke] || '蛙泳'
  const landOnly = state.venue?.includes('陆上')
  return [
    drill({
      name: '陆上热身与安全提示',
      minutes: 8,
      group: '全体岸上',
      goal: '安全 / 激活',
      path: 'warmup',
      brief: '陆上热身完成后再入水；安全风险高于陆地项目。',
      org: '池边或镜面场地。',
      rules: '未完成健康询问与安全确认不得入水。',
      tips: '水深分区、救生员在岗、见习生安排。',
      steps: ['健康询问确认', '关节热身', '陆上蹬腿模仿', '安全口令演练'],
    }),
    drill({
      name: landOnly ? '陆上呼吸与蹬腿分解' : '水中适应与呼吸',
      minutes: 12,
      group: '分组',
      goal: '适应 / 换气',
      path: 'pool',
      brief: landOnly
        ? '无泳池降级：镜面陆上分解。'
        : '浅水区行走跳跃、呼吸与蹬壁滑行。',
      org: landOnly ? '体操垫+浮板陆上' : '浅水分区，浮板辅助',
      rules: '怕水者岸上见习或一对一。',
      tips: '循序渐进；换气困难先陆上节奏。',
      steps: ['水面吹泡', '闭气', '节奏换气', '滑行体验'],
    }),
    drill({
      name: `${stroke}腿部动作`,
      minutes: 14,
      group: '泳道分组',
      goal: '蹬腿',
      path: 'pool',
      brief: `${stroke}分解：腿。`,
      org: '浮板夹胸蹬腿。',
      rules: '单道同向；禁止跳水（未授权）。',
      tips: '蹬腿不足→收翻蹬夹节奏。',
      steps: ['池边坐姿模仿', '浮板蹬腿', '计次', '纠正'],
    }),
    drill({
      name: `${stroke}臂与呼吸配合`,
      minutes: 14,
      group: '泳道',
      goal: '划水 / 呼吸',
      path: 'pool',
      brief: '臂动作 + 呼吸配合。',
      org: '浅→中过渡。',
      rules: '力竭举手示意。',
      tips: '划水无效→高肘与抱水。',
      steps: ['陆上划臂', '水中单臂', '呼吸点', '短距配合'],
    }),
    drill({
      name: `${stroke}完整配合短距赛`,
      minutes: 14,
      group: '比赛',
      goal: '完整 / 比赛',
      path: 'relay',
      brief: '完整配合后短距计时/接力（水平二 15/50m 导向）。',
      org: '分道短距。',
      rules: '出发听哨；到边举手。',
      tips: '水平三–四可加长距与犯规判断。',
      steps: ['试游', '正式计时', '接力', '点评'],
    }),
    drill({
      name: '水中放松与离池',
      minutes: 6,
      group: '全体',
      goal: '放松 / 安全离池',
      path: 'cooldown',
      brief: '水中放松漂浮 + 有序离池清点。',
      org: '浅水区。',
      rules: '清点人数后离池；禁止打闹。',
      tips: '礼仪与安全复盘。',
      steps: ['漂浮放松', '岸上拉伸', '人数清点', '讲评'],
    }),
  ]
}

function buildTennis(state) {
  // 自建隔网持拍模板，非书中网球单元
  return [
    drill({
      name: '球感与步法热身（自建）',
      minutes: 10,
      group: '全体',
      goal: '激活',
      path: 'warmup',
      brief: '颠球+分腿垫步；资料来自隔网模板自建，非网球教师用书。',
      org: '底线后标志筒。',
      rules: '挥拍空间隔离。',
      tips: '与羽/乒类似强调步法先行。',
      steps: ['颠球', '分腿垫步', '侧滑', '握拍'],
    }),
    drill({
      name: '正反手底线',
      minutes: 16,
      group: '喂球分组',
      goal: '底线技术',
      path: 'tennis',
      brief: '底线落点控制。',
      org: '半场或挡网。',
      rules: '先打中路再打角。',
      tips: '出界多→早引拍与击球点靠前。',
      steps: ['正手定点击球', '反手', '移动中击球', '纠正'],
    }),
    drill({
      name: '发球与接发',
      minutes: 12,
      group: '两人',
      goal: '发球',
      path: 'cones',
      brief: '发球进区与接发准备姿势。',
      org: '发球区标志。',
      rules: '二发允许降低难度。',
      tips: '抛球稳定。',
      steps: ['抛球练习', '切削/平击', '接发准备', '对角'],
    }),
    drill({
      name: '网前截击',
      minutes: 12,
      group: '分组',
      goal: '网前',
      path: 'ladder',
      brief: '网前怕球专项。',
      org: '发球线到网前。',
      rules: '短握，挡推为主。',
      tips: '截击时机：球过网即迎。',
      steps: ['定点击球', '移动截击', '高压球体验', '轮换'],
    }),
    drill({
      name: '对拉小赛',
      minutes: 14,
      group: '比赛',
      goal: '实战',
      path: 'relay',
      brief: '对拉稳定性小赛。',
      org: '一盘简化计分。',
      rules: '文明判界外。',
      tips: '自建模板，无书中「单元进阶」序号。',
      steps: ['热身对拉', '计分局', '换边', '点评'],
    }),
    drill({
      name: '拉伸放松',
      minutes: 6,
      group: '全体',
      goal: '放松',
      path: 'cooldown',
      brief: '肩肘拉伸。',
      org: '场边。',
      rules: '球入筐。',
      tips: '标注本课为自建网球模板。',
      steps: ['拉伸', '点评', '收器材'],
    }),
  ]
}

export function buildLesson(state) {
  const cfg = getSportConfig(state.sport)
  const ageLabel = `${state.ageMin}-${state.ageMax}岁`
  const focus = focusText(state)
  const title = cfg.title(state, ageLabel, focus)
  const drills = scaleDrills(buildDrillsForSport(state), state.duration)
  const sportMeta = SPORTS.find((s) => s.id === state.sport)

  const analysis = [
    `学员年龄 ${ageLabel}（水平段倾向：${levelHint(state.ageMin, state.ageMax)}），人数 ${state.countMin}-${state.countMax} 人`,
    `需求重点：${state.need || cfg.needPlaceholder}`,
    `场地：${state.venue}；器械：${state.gears.join('、') || '徒手'}`,
    `课结构：${cfg.chain}`,
    `教案粒度：${state.detail === 'full' ? '详细（要领+纠正+组织）' : '精简（名称/时长/要点）'}`,
  ]

  if (state.focuses?.length) analysis.push(`技能焦点：${state.focuses.join('、')}`)
  if (state.lessonType) {
    const lt = cfg.lessonTypes?.find((x) => x.id === state.lessonType)
    analysis.push(`课型：${lt?.label || state.lessonType}`)
  }
  if (state.ballType) {
    const bt = cfg.ballTypes?.find((x) => x.id === state.ballType)
    analysis.push(`球种：${bt?.label || state.ballType}`)
  }
  if (state.miniBall) analysis.push('小篮球模式：开启（低篮筐/规则简化）')
  if (state.stroke) {
    const st = cfg.strokes?.find((x) => x.id === state.stroke)
    analysis.push(`泳姿：${st?.label || state.stroke}`)
  }
  if (cfg.bookGap) {
    analysis.push('资料说明：教师用书无网球独立分册，本课为隔网持拍自建模板')
  } else if (sportMeta?.book) {
    analysis.push(`依据教师用书方向：《${sportMeta.book}》学练赛结构`)
  }

  let safetyBlock = null
  if (cfg.requireSafety) {
    const checks = cfg.safetyChecks || []
    const done = checks.filter((c) => state.safety?.[c.id])
    safetyBlock = {
      title: '游泳安全确认',
      items: checks.map((c) => ({
        label: c.label,
        ok: !!state.safety?.[c.id],
      })),
      summary:
        done.length === checks.length
          ? '安全项已全部确认，可按泳池课执行。'
          : `尚有 ${checks.length - done.length} 项未确认——生成教案仍展示，上课前必须补齐。`,
    }
  } else if (cfg.safetyNote) {
    safetyBlock = { title: '安全提示', summary: cfg.safetyNote, items: [] }
  }

  // 精简：缩短文案
  const outDrills =
    state.detail === 'brief'
      ? drills.map((d) => ({
          ...d,
          brief: d.brief.slice(0, 36) + (d.brief.length > 36 ? '…' : ''),
          org: d.org,
          rules: d.rules.split('；')[0],
          tips: d.tips.split('；')[0] || d.tips,
        }))
      : drills

  return {
    title,
    analysis,
    drills: outDrills,
    duration: state.duration,
    safetyBlock,
    boardTheme: cfg.boardTheme,
    boardTitle: cfg.boardTitle,
    legend: cfg.legend,
    sportId: state.sport,
  }
}

function levelHint(min, max) {
  const mid = (Number(min) + Number(max)) / 2
  if (mid < 7) return '水平一及以下（游戏化）'
  if (mid < 10) return '水平二'
  if (mid < 13) return '水平三'
  if (mid < 16) return '水平四'
  return '水平四技战术 + 成人负荷'
}
