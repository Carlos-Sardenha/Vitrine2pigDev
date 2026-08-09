import '@fontsource/archivo/400.css'
import '@fontsource/archivo/500.css'
import '@fontsource/prata/400.css'
import '@fontsource/mulish/400.css'
import '@fontsource/mulish/600.css'

import '../../styles/tokens.css'
import '../../styles/base.css'
import '../../styles/components.css'
import '../../styles/demos/salao.css'

import { initMotion } from '../core/motion.js'
import { initReveals, heroIntro } from '../core/reveals.js'
import { initTransitions } from '../core/transitions.js'
import { initDemoFrame } from '../core/demo-frame.js'

initMotion()
initTransitions()
heroIntro(document.querySelector('[data-hero-lines]'), 0.2)
initReveals()

initDemoFrame({
  demo: 'salao',
  waMessage:
    'Oi Carlos! Vi o modelo do salão (Casa Lume) e quero um site assim pro meu negócio.',
})

// Antes & Depois — slider de comparação arrastável (pointer + teclado)
const compare = document.querySelector('.lume-compare')
if (compare) {
  const handle = compare.querySelector('.lume-compare__handle')
  let pos = 50

  const setPos = (next) => {
    pos = Math.min(100, Math.max(0, next))
    const rounded = Math.round(pos)
    compare.style.setProperty('--pos', `${pos}%`)
    handle.setAttribute('aria-valuenow', String(rounded))
    handle.setAttribute('aria-valuetext', `Antes ${rounded}% · Depois ${100 - rounded}%`)
  }

  const posFromPointer = (e) => {
    const rect = compare.getBoundingClientRect()
    setPos(((e.clientX - rect.left) / rect.width) * 100)
  }

  let dragging = false
  compare.addEventListener('pointerdown', (e) => {
    dragging = true
    compare.setPointerCapture(e.pointerId)
    posFromPointer(e)
  })
  compare.addEventListener('pointermove', (e) => {
    if (dragging) posFromPointer(e)
  })
  const stopDrag = () => {
    dragging = false
  }
  compare.addEventListener('pointerup', stopDrag)
  compare.addEventListener('pointercancel', stopDrag)

  handle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault()
      setPos(pos - 4)
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault()
      setPos(pos + 4)
    } else if (e.key === 'Home') {
      e.preventDefault()
      setPos(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setPos(100)
    }
  })
}

// Agendamento demonstrativo — seleção única de chip por grupo
document.querySelectorAll('[data-chip-group]').forEach((group) => {
  group.querySelectorAll('.lume-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      group.querySelectorAll('.lume-chip.is-selected').forEach((selected) => {
        selected.classList.remove('is-selected')
        selected.setAttribute('aria-pressed', 'false')
      })
      chip.classList.add('is-selected')
      chip.setAttribute('aria-pressed', 'true')
    })
  })
})
