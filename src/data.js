export {
  SPORTS,
  SPORT_CONFIG,
  getSportConfig,
  applySportDefaults,
  buildLesson,
} from './sports.js'

export const AGE_PRESETS = [
  { label: '2-3岁', min: 2, max: 3, stage: '幼儿' },
  { label: '4-6岁', min: 4, max: 6, stage: '学前' },
  { label: '6-8岁', min: 6, max: 8, stage: '小学' },
  { label: '9-12岁', min: 9, max: 12, stage: '小学' },
  { label: '13-15岁', min: 13, max: 15, stage: '初中' },
  { label: '成人', min: 18, max: 45, stage: '成人' },
]

export const COUNT_PRESETS = [
  { label: '1人私教', min: 1, max: 1 },
  { label: '6人', min: 6, max: 6 },
  { label: '8-10人', min: 8, max: 10 },
  { label: '15人', min: 15, max: 15 },
  { label: '20人', min: 20, max: 20 },
]

export const DURATIONS = [45, 60, 75, 90, 120]

export const DRILL_COLORS = [
  '#1a2b4c',
  '#2f5f9a',
  '#e07a2f',
  '#2f9b6a',
  '#6b5bd4',
  '#d14b4b',
  '#2aa8b8',
  '#6b7c94',
]

export function stageForAge(min, max) {
  const mid = (Number(min) + Number(max)) / 2
  if (mid < 4) return '幼儿'
  if (mid < 7) return '学前'
  if (mid < 13) return '小学'
  if (mid < 16) return '初中'
  return '成人'
}

export function reviseDrill(drill, note) {
  const bump = note?.trim() || '提高强度'
  return {
    ...drill,
    name: drill.name.includes('加强') ? drill.name : `${drill.name}·加强版`,
    goal: `${drill.goal} / ${bump}`,
    brief: `按「${bump}」重设：${drill.brief}`,
    rules: `${drill.rules}；回合间歇缩短 15%。`,
    tips: `${drill.tips}；关注完成质量后再提速。`,
    load: drill.load ? `${drill.load}（强度↑）` : '负荷上调',
    steps: drill.steps.map((s, i) => (i === 1 ? `${s}（强度↑）` : s)),
  }
}
