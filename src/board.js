/** Canvas tactical animation for a drill's step sequence */

const PATHS = {
  warmup: [
    [
      { x: 0.2, y: 0.7, c: '#3b82f6' },
      { x: 0.4, y: 0.7, c: '#ef4444' },
      { x: 0.6, y: 0.7, c: '#fff' },
      { x: 0.8, y: 0.7, c: '#3b82f6' },
    ],
    [
      { x: 0.25, y: 0.55, c: '#3b82f6' },
      { x: 0.45, y: 0.4, c: '#ef4444' },
      { x: 0.62, y: 0.55, c: '#fff' },
      { x: 0.78, y: 0.42, c: '#3b82f6' },
    ],
    [
      { x: 0.3, y: 0.35, c: '#3b82f6' },
      { x: 0.5, y: 0.3, c: '#ef4444' },
      { x: 0.55, y: 0.5, c: '#fff' },
      { x: 0.75, y: 0.35, c: '#3b82f6' },
    ],
    [
      { x: 0.22, y: 0.65, c: '#3b82f6' },
      { x: 0.48, y: 0.62, c: '#ef4444' },
      { x: 0.52, y: 0.62, c: '#fff' },
      { x: 0.78, y: 0.65, c: '#3b82f6' },
    ],
  ],
  ladder: [
    [
      { x: 0.15, y: 0.5, c: '#3b82f6' },
      { x: 0.15, y: 0.7, c: '#ef4444' },
    ],
    [
      { x: 0.4, y: 0.5, c: '#3b82f6' },
      { x: 0.2, y: 0.7, c: '#ef4444' },
    ],
    [
      { x: 0.7, y: 0.45, c: '#3b82f6' },
      { x: 0.55, y: 0.7, c: '#ef4444' },
    ],
    [
      { x: 0.85, y: 0.35, c: '#3b82f6' },
      { x: 0.85, y: 0.75, c: '#ef4444' },
    ],
  ],
  core: [
    [
      { x: 0.35, y: 0.55, c: '#3b82f6' },
      { x: 0.65, y: 0.55, c: '#ef4444' },
    ],
    [
      { x: 0.4, y: 0.45, c: '#3b82f6' },
      { x: 0.6, y: 0.45, c: '#ef4444' },
    ],
    [
      { x: 0.42, y: 0.6, c: '#3b82f6' },
      { x: 0.58, y: 0.6, c: '#ef4444' },
    ],
    [
      { x: 0.35, y: 0.5, c: '#ef4444' },
      { x: 0.65, y: 0.5, c: '#3b82f6' },
    ],
  ],
  cones: [
    [
      { x: 0.2, y: 0.75, c: '#3b82f6' },
      { x: 0.75, y: 0.75, c: '#ef4444' },
    ],
    [
      { x: 0.5, y: 0.4, c: '#3b82f6' },
      { x: 0.75, y: 0.75, c: '#ef4444' },
    ],
    [
      { x: 0.5, y: 0.4, c: '#3b82f6' },
      { x: 0.35, y: 0.55, c: '#ef4444' },
    ],
    [
      { x: 0.65, y: 0.35, c: '#3b82f6' },
      { x: 0.35, y: 0.65, c: '#ef4444' },
      { x: 0.8, y: 0.7, c: '#fff' },
    ],
  ],
  chase: [
    [
      { x: 0.25, y: 0.4, c: '#ef4444' },
      { x: 0.7, y: 0.6, c: '#3b82f6' },
      { x: 0.45, y: 0.75, c: '#fff' },
    ],
    [
      { x: 0.4, y: 0.45, c: '#ef4444' },
      { x: 0.55, y: 0.55, c: '#3b82f6' },
      { x: 0.6, y: 0.7, c: '#fff' },
    ],
    [
      { x: 0.55, y: 0.35, c: '#ef4444' },
      { x: 0.4, y: 0.5, c: '#3b82f6' },
      { x: 0.7, y: 0.55, c: '#fff' },
    ],
    [
      { x: 0.7, y: 0.4, c: '#ef4444' },
      { x: 0.3, y: 0.55, c: '#3b82f6' },
      { x: 0.5, y: 0.35, c: '#fff' },
    ],
  ],
  relay: [
    [
      { x: 0.2, y: 0.3, c: '#3b82f6' },
      { x: 0.8, y: 0.3, c: '#ef4444' },
      { x: 0.2, y: 0.75, c: '#fff' },
      { x: 0.8, y: 0.75, c: '#f59e0b' },
    ],
    [
      { x: 0.4, y: 0.45, c: '#3b82f6' },
      { x: 0.8, y: 0.3, c: '#ef4444' },
      { x: 0.2, y: 0.75, c: '#fff' },
      { x: 0.8, y: 0.75, c: '#f59e0b' },
    ],
    [
      { x: 0.2, y: 0.3, c: '#3b82f6' },
      { x: 0.55, y: 0.5, c: '#ef4444' },
      { x: 0.2, y: 0.75, c: '#fff' },
      { x: 0.8, y: 0.75, c: '#f59e0b' },
    ],
    [
      { x: 0.2, y: 0.3, c: '#3b82f6' },
      { x: 0.8, y: 0.3, c: '#ef4444' },
      { x: 0.45, y: 0.55, c: '#fff' },
      { x: 0.8, y: 0.75, c: '#f59e0b' },
    ],
  ],
  cooldown: [
    [
      { x: 0.3, y: 0.55, c: '#3b82f6' },
      { x: 0.5, y: 0.55, c: '#ef4444' },
      { x: 0.7, y: 0.55, c: '#fff' },
    ],
    [
      { x: 0.32, y: 0.58, c: '#3b82f6' },
      { x: 0.5, y: 0.52, c: '#ef4444' },
      { x: 0.68, y: 0.58, c: '#fff' },
    ],
    [
      { x: 0.35, y: 0.6, c: '#3b82f6' },
      { x: 0.5, y: 0.6, c: '#ef4444' },
      { x: 0.65, y: 0.6, c: '#fff' },
    ],
    [
      { x: 0.28, y: 0.5, c: '#3b82f6' },
      { x: 0.5, y: 0.55, c: '#ef4444' },
      { x: 0.72, y: 0.5, c: '#fff' },
    ],
  ],
  table: [
    [
      { x: 0.35, y: 0.7, c: '#3b82f6' },
      { x: 0.65, y: 0.3, c: '#ef4444' },
    ],
    [
      { x: 0.3, y: 0.55, c: '#3b82f6' },
      { x: 0.7, y: 0.45, c: '#ef4444' },
    ],
    [
      { x: 0.4, y: 0.4, c: '#3b82f6' },
      { x: 0.6, y: 0.6, c: '#ef4444' },
    ],
    [
      { x: 0.28, y: 0.65, c: '#3b82f6' },
      { x: 0.72, y: 0.35, c: '#ef4444' },
    ],
  ],
  pool: [
    [
      { x: 0.2, y: 0.5, c: '#3b82f6' },
      { x: 0.35, y: 0.5, c: '#ef4444' },
    ],
    [
      { x: 0.4, y: 0.45, c: '#3b82f6' },
      { x: 0.55, y: 0.55, c: '#ef4444' },
    ],
    [
      { x: 0.6, y: 0.5, c: '#3b82f6' },
      { x: 0.72, y: 0.48, c: '#ef4444' },
    ],
    [
      { x: 0.78, y: 0.5, c: '#3b82f6' },
      { x: 0.88, y: 0.5, c: '#22c55e' },
    ],
  ],
  tennis: [
    [
      { x: 0.25, y: 0.75, c: '#3b82f6' },
      { x: 0.75, y: 0.25, c: '#ef4444' },
    ],
    [
      { x: 0.3, y: 0.55, c: '#3b82f6' },
      { x: 0.7, y: 0.45, c: '#ef4444' },
    ],
    [
      { x: 0.45, y: 0.35, c: '#3b82f6' },
      { x: 0.55, y: 0.65, c: '#ef4444' },
    ],
    [
      { x: 0.2, y: 0.7, c: '#3b82f6' },
      { x: 0.8, y: 0.3, c: '#ef4444' },
    ],
  ],
}

function drawField(ctx, w, h, theme = 'soccer') {
  ctx.save()
  if (theme === 'pool') {
    ctx.fillStyle = 'rgba(14, 116, 144, 0.35)'
    ctx.fillRect(w * 0.08, h * 0.18, w * 0.84, h * 0.64)
    ctx.strokeStyle = 'rgba(255,255,255,0.45)'
    ctx.setLineDash([])
    ctx.lineWidth = 2
    ctx.strokeRect(w * 0.08, h * 0.18, w * 0.84, h * 0.64)
    for (let i = 1; i < 4; i++) {
      const y = h * (0.18 + (0.64 * i) / 4)
      ctx.beginPath()
      ctx.moveTo(w * 0.08, y)
      ctx.lineTo(w * 0.92, y)
      ctx.strokeStyle = 'rgba(255,255,255,0.25)'
      ctx.stroke()
    }
    ctx.fillStyle = 'rgba(232,184,74,0.9)'
    ctx.font = '10px sans-serif'
    ctx.fillText('泳道 →', w * 0.12, h * 0.15)
    ctx.restore()
    return
  }

  if (theme === 'table') {
    ctx.fillStyle = 'rgba(30, 64, 120, 0.55)'
    ctx.fillRect(w * 0.22, h * 0.2, w * 0.56, h * 0.58)
    ctx.strokeStyle = 'rgba(255,255,255,0.7)'
    ctx.lineWidth = 2
    ctx.strokeRect(w * 0.22, h * 0.2, w * 0.56, h * 0.58)
    ctx.beginPath()
    ctx.moveTo(w * 0.5, h * 0.2)
    ctx.lineTo(w * 0.5, h * 0.78)
    ctx.setLineDash([4, 4])
    ctx.stroke()
    ctx.setLineDash([])
    ctx.strokeStyle = '#e8b84a'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(w * 0.22, h * 0.49)
    ctx.lineTo(w * 0.78, h * 0.49)
    ctx.stroke()
    ctx.restore()
    return
  }

  if (theme === 'volleyball' || theme === 'badminton') {
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'
    ctx.setLineDash([])
    ctx.lineWidth = 1.5
    ctx.strokeRect(w * 0.1, h * 0.14, w * 0.8, h * 0.7)
    ctx.strokeStyle = '#e8b84a'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(w * 0.5, h * 0.14)
    ctx.lineTo(w * 0.5, h * 0.84)
    ctx.stroke()
    if (theme === 'volleyball') {
      ctx.strokeStyle = 'rgba(255,255,255,0.35)'
      ctx.setLineDash([5, 5])
      ctx.beginPath()
      ctx.moveTo(w * 0.28, h * 0.14)
      ctx.lineTo(w * 0.28, h * 0.84)
      ctx.moveTo(w * 0.72, h * 0.14)
      ctx.lineTo(w * 0.72, h * 0.84)
      ctx.stroke()
    }
    ctx.restore()
    ;[
      [0.2, 0.75],
      [0.8, 0.75],
      [0.2, 0.3],
      [0.8, 0.3],
    ].forEach(([x, y]) => drawCone(ctx, x * w, y * h))
    return
  }

  if (theme === 'basketball' || theme === 'tennis') {
    ctx.strokeStyle = 'rgba(255,255,255,0.32)'
    ctx.setLineDash([])
    ctx.lineWidth = 1.5
    ctx.strokeRect(w * 0.1, h * 0.12, w * 0.8, h * 0.74)
    ctx.beginPath()
    ctx.arc(w * 0.5, h * 0.2, w * 0.12, 0, Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(w * 0.5, h * 0.78, w * 0.12, Math.PI, Math.PI * 2)
    ctx.stroke()
    if (theme === 'tennis') {
      ctx.strokeStyle = '#e8b84a'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(w * 0.1, h * 0.49)
      ctx.lineTo(w * 0.9, h * 0.49)
      ctx.stroke()
    } else {
      ctx.strokeRect(w * 0.35, h * 0.12, w * 0.3, h * 0.22)
    }
    ctx.restore()
    ;[
      [0.22, 0.7],
      [0.78, 0.7],
      [0.5, 0.45],
    ].forEach(([x, y]) => drawCone(ctx, x * w, y * h))
    return
  }

  if (theme === 'fitness') {
    ctx.strokeStyle = 'rgba(255,255,255,0.25)'
    ctx.setLineDash([4, 6])
    ctx.strokeRect(w * 0.08, h * 0.14, w * 0.84, h * 0.7)
    ctx.setLineDash([])
    const stations = [
      [0.22, 0.3],
      [0.78, 0.3],
      [0.22, 0.7],
      [0.78, 0.7],
    ]
    stations.forEach(([x, y], i) => {
      ctx.fillStyle = 'rgba(232,184,74,0.25)'
      ctx.beginPath()
      ctx.arc(x * w, y * h, 18, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#e8b84a'
      ctx.font = 'bold 11px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(`站${i + 1}`, x * w, y * h + 4)
    })
    ctx.restore()
    return
  }

  // soccer default
  ctx.strokeStyle = 'rgba(255,255,255,0.28)'
  ctx.setLineDash([6, 6])
  ctx.lineWidth = 1.5
  ctx.strokeRect(w * 0.08, h * 0.12, w * 0.84, h * 0.72)
  ctx.beginPath()
  ctx.moveTo(w * 0.5, h * 0.12)
  ctx.lineTo(w * 0.5, h * 0.84)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(w * 0.5, h * 0.48, Math.min(w, h) * 0.12, 0, Math.PI * 2)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeRect(w * 0.08, h * 0.32, w * 0.12, h * 0.32)
  ctx.strokeRect(w * 0.8, h * 0.32, w * 0.12, h * 0.32)
  ctx.restore()

  ;[
    [0.2, 0.78],
    [0.35, 0.3],
    [0.65, 0.3],
    [0.8, 0.78],
    [0.5, 0.55],
  ].forEach(([x, y]) => drawCone(ctx, x * w, y * h))
}

function drawCone(ctx, x, y) {
  ctx.save()
  ctx.fillStyle = '#f97316'
  ctx.beginPath()
  ctx.moveTo(x, y - 14)
  ctx.lineTo(x + 8, y + 4)
  ctx.lineTo(x - 8, y + 4)
  ctx.closePath()
  ctx.fill()
  ctx.fillStyle = '#fff'
  ctx.fillRect(x - 3, y - 6, 6, 3)
  ctx.restore()
}

function drawPlayer(ctx, x, y, color, label) {
  ctx.save()
  // shadow
  ctx.fillStyle = 'rgba(0,0,0,0.25)'
  ctx.beginPath()
  ctx.ellipse(x, y + 10, 8, 3, 0, 0, Math.PI * 2)
  ctx.fill()
  // body
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.roundRect(x - 7, y - 4, 14, 16, 4)
  ctx.fill()
  // head
  ctx.beginPath()
  ctx.arc(x, y - 10, 6, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#1a1a1a'
  ctx.beginPath()
  ctx.arc(x, y - 10, 3.5, 0, Math.PI * 2)
  ctx.fill()
  if (label) {
    ctx.fillStyle = '#e8b84a'
    ctx.font = 'bold 10px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(label, x, y + 22)
  }
  ctx.restore()
}

function drawRoute(ctx, from, to, w, h) {
  ctx.save()
  ctx.strokeStyle = 'rgba(255,255,255,0.75)'
  ctx.setLineDash([4, 4])
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(from.x * w, from.y * h)
  ctx.lineTo(to.x * w, to.y * h)
  ctx.stroke()
  // arrow
  const ang = Math.atan2(to.y - from.y, to.x - from.x)
  const ax = to.x * w
  const ay = to.y * h
  ctx.setLineDash([])
  ctx.fillStyle = 'rgba(255,255,255,0.85)'
  ctx.beginPath()
  ctx.moveTo(ax, ay)
  ctx.lineTo(ax - 8 * Math.cos(ang - 0.4), ay - 8 * Math.sin(ang - 0.4))
  ctx.lineTo(ax - 8 * Math.cos(ang + 0.4), ay - 8 * Math.sin(ang + 0.4))
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

function lerpPlayers(a, b, t) {
  const n = Math.max(a.length, b.length)
  const out = []
  for (let i = 0; i < n; i++) {
    const pa = a[i] || a[a.length - 1]
    const pb = b[i] || b[b.length - 1]
    out.push({
      x: lerp(pa.x, pb.x, t),
      y: lerp(pa.y, pb.y, t),
      c: t < 0.5 ? pa.c : pb.c,
    })
  }
  return out
}

export function createBoard(canvas) {
  const ctx = canvas.getContext('2d')
  let pathKey = 'cones'
  let theme = 'soccer'
  let step = 0
  let progress = 0
  let playing = false
  let slow = false
  let jersey = 0
  let raf = 0
  let last = 0

  function frames() {
    return PATHS[pathKey] || PATHS.cones
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const rect = canvas.parentElement.getBoundingClientRect()
    canvas.width = Math.floor(rect.width * dpr)
    canvas.height = Math.floor(rect.height * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    draw()
  }

  function draw() {
    const w = canvas.clientWidth || canvas.parentElement.clientWidth
    const h = canvas.clientHeight || canvas.parentElement.clientHeight
    ctx.clearRect(0, 0, w, h)
    drawField(ctx, w, h, theme)

    const f = frames()
    const i0 = Math.min(step, f.length - 1)
    const i1 = Math.min(step + 1, f.length - 1)
    const localT = progress
    const players =
      i0 === i1 ? f[i0] : lerpPlayers(f[i0], f[i1], localT)

    if (i0 !== i1) {
      f[i0].forEach((p, idx) => {
        const q = f[i1][idx] || f[i1][0]
        if (q) drawRoute(ctx, p, q, w, h)
      })
    }

    const palette = [
      ['#3b82f6', '#ef4444', '#fff', '#f59e0b'],
      ['#22c55e', '#a855f7', '#f8fafc', '#eab308'],
    ][jersey % 2]

    players.forEach((p, idx) => {
      const color = palette[idx % palette.length]
      drawPlayer(ctx, p.x * w, p.y * h, color, String(idx + 1))
    })
  }

  function tick(ts) {
    if (!playing) {
      raf = 0
      return
    }
    if (!last) last = ts
    const dt = (ts - last) / 1000
    last = ts
    const speed = slow ? 0.28 : 0.55
    progress += dt * speed
    if (progress >= 1) {
      progress = 0
      step = (step + 1) % frames().length
      onStep?.(step)
    }
    onProgress?.(step + progress)
    draw()
    raf = requestAnimationFrame(tick)
  }

  let onStep = null
  let onProgress = null

  return {
    mount() {
      resize()
      window.addEventListener('resize', resize)
    },
    destroy() {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    },
    setPath(key) {
      pathKey = key in PATHS ? key : 'cones'
      step = 0
      progress = 0
      draw()
    },
    setTheme(t) {
      theme = t || 'soccer'
      draw()
    },
    setStep(n) {
      step = Math.max(0, Math.min(n, frames().length - 1))
      progress = 0
      draw()
    },
    setProgress(p) {
      // p in [0, steps]
      const f = frames()
      const clamped = Math.max(0, Math.min(p, f.length - 0.001))
      step = Math.floor(clamped)
      progress = clamped - step
      draw()
    },
    play() {
      if (playing) return
      playing = true
      last = 0
      raf = requestAnimationFrame(tick)
    },
    pause() {
      playing = false
      cancelAnimationFrame(raf)
      raf = 0
    },
    togglePlay() {
      if (playing) this.pause()
      else this.play()
      return playing
    },
    toggleSlow() {
      slow = !slow
      return slow
    },
    toggleJersey() {
      jersey = (jersey + 1) % 2
      draw()
      return jersey
    },
    get step() {
      return step
    },
    get playing() {
      return playing
    },
    onStep(fn) {
      onStep = fn
    },
    onProgress(fn) {
      onProgress = fn
    },
    redraw: draw,
  }
}
