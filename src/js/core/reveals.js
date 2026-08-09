import { gsap, ScrollTrigger, reduced } from './motion.js'

/**
 * Pseudo-aleatório determinístico (0..1) por índice — dá a cada elemento
 * um tempo ligeiramente próprio, para o scroll não soar cronometrado.
 * Determinístico de propósito: mesmo resultado a cada carregamento.
 */
const jitter = (i) => {
  const n = Math.sin((i + 1) * 127.1) * 43758.5453
  return n - Math.floor(n)
}

/**
 * Reveals declarativos por data-attribute:
 *   data-reveal                 → fade + rise 24px
 *   data-reveal="clip"          → imagem revela por máscara + zoom-out sutil
 *   data-reveal-lines           → headline quebra em linhas e sobe por máscara
 *   data-reveal-group           → stagger dos filhos [data-reveal]
 * O CSS só esconde elementos sob html.has-motion — sem JS, tudo visível.
 */

function splitLines(el) {
  const lines = []
  el.querySelectorAll(':scope > .line').forEach((line) => {
    const inner = document.createElement('span')
    inner.className = 'line-inner'
    inner.style.display = 'inline-block'
    while (line.firstChild) inner.appendChild(line.firstChild)
    line.appendChild(inner)
    line.style.display = 'block'
    line.style.overflow = 'hidden'
    lines.push(inner)
  })
  return lines
}

export function initReveals(scope = document) {
  if (reduced) return

  // Headlines linha a linha (o efeito-assinatura)
  scope.querySelectorAll('[data-reveal-lines]').forEach((el) => {
    const lines = splitLines(el)
    if (!lines.length) return
    gsap.to(lines, {
      y: 0,
      duration: Number(el.dataset.dur || 0.9),
      ease: 'expo.out',
      stagger: 0.09,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onStart: () => el.removeAttribute('data-reveal-lines-pending'),
    })
  })

  // Grupos com stagger
  scope.querySelectorAll('[data-reveal-group]').forEach((group) => {
    const items = group.querySelectorAll('[data-reveal]')
    if (!items.length) return
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: (i) => 0.6 + jitter(i) * 0.3,
      ease: 'expo.out',
      stagger: { each: 0.1, from: 'start', amount: 0.28 + jitter(9) * 0.12 },
      scrollTrigger: { trigger: group, start: 'top 85%', once: true },
    })
    items.forEach((el, i) => gsap.set(el, { y: 18 + jitter(i + 3) * 14 }))
  })

  // Reveals individuais (fora de grupos)
  const singles = [...scope.querySelectorAll('[data-reveal]')].filter(
    (el) => !el.closest('[data-reveal-group]'),
  )

  const clips = singles.filter((el) => el.dataset.reveal === 'clip')
  const fades = singles.filter((el) => el.dataset.reveal !== 'clip')

  fades.forEach((el) => gsap.set(el, { y: 24 }))
  ScrollTrigger.batch(fades, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'expo.out',
        stagger: 0.08,
      }),
  })

  clips.forEach((el) => {
    gsap.set(el, { clipPath: 'inset(100% 0 0 0)' })
    const img = el.querySelector('img')
    if (img) gsap.set(img, { scale: 1.06 })
    gsap
      .timeline({ scrollTrigger: { trigger: el, start: 'top 85%', once: true } })
      .to(el, { opacity: 1, duration: 0.01 })
      .to(el, { clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'expo.out' }, 0)
      .to(img, { scale: 1, duration: 1.2, ease: 'expo.out' }, 0)
  })
}

/** Entrada do hero: linhas do display sobem por máscara no load. */
export function heroIntro(el, delay = 0.15) {
  if (reduced || !el) return
  const lines = splitLines(el)
  if (!lines.length) return
  gsap.to(lines, {
    y: 0,
    duration: 1,
    ease: 'expo.out',
    stagger: 0.09,
    delay,
  })
}
