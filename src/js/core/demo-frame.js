/**
 * Moldura das demos: pill "MODELO · por Carlos" + modal-vitrine.
 * A conversão fictícia da demo vira conversão real do Carlos.
 * Funciona sem GSAP (transições em CSS) — disponível também
 * com prefers-reduced-motion.
 */

import { WA_LINK } from './config.js'

export function initDemoFrame({
  demo,
  waMessage,
  pillLabel = 'Modelo · por Carlos',
  pillCta = 'Quero um assim → WhatsApp',
  modalTitle = 'Funcionou, né?',
  modalText,
}) {
  const wa = WA_LINK(waMessage)

  // --- Pill flutuante ---
  const pill = document.createElement('div')
  pill.className = 'demo-pill'
  pill.innerHTML = `
    <button class="demo-pill__toggle" type="button" aria-expanded="false">
      <span class="demo-pill__dot" aria-hidden="true"></span>
      ${pillLabel}
    </button>
    <div class="demo-pill__menu">
      <a class="cta" href="${wa}" target="_blank" rel="noopener"><span>${pillCta}</span></a>
      <a class="cta" href="/#modelos"><span>← Ver outros modelos</span></a>
    </div>
  `
  document.body.appendChild(pill)

  const toggle = pill.querySelector('.demo-pill__toggle')
  toggle.addEventListener('click', () => {
    const open = pill.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', String(open))
  })

  // Aparece após o primeiro scroll; some descendo, volta subindo
  let lastY = window.scrollY
  let engaged = false
  const onScroll = () => {
    const y = window.scrollY
    if (!engaged && y > window.innerHeight * 0.5) engaged = true
    if (engaged) {
      const goingDown = y > lastY + 4
      const goingUp = y < lastY - 4
      if (goingDown && !pill.classList.contains('is-open')) {
        pill.classList.remove('is-visible')
      } else if (goingUp || y > window.innerHeight * 0.5) {
        if (!goingDown) pill.classList.add('is-visible')
      }
    }
    lastY = y
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  // --- Modal-vitrine ---
  const modal = document.createElement('div')
  modal.className = 'demo-modal'
  modal.setAttribute('role', 'dialog')
  modal.setAttribute('aria-modal', 'true')
  modal.innerHTML = `
    <div class="demo-modal__backdrop"></div>
    <div class="demo-modal__card">
      <button class="demo-modal__close" type="button">Fechar ×</button>
      <p class="demo-modal__title">${modalTitle}</p>
      <p class="demo-modal__text"></p>
      <div class="demo-modal__actions">
        <a class="cta" href="${wa}" target="_blank" rel="noopener"><span>Chamar o Carlos no WhatsApp</span></a>
        <button class="cta demo-modal__continue" type="button"><span>Continuar no modelo</span></button>
      </div>
    </div>
  `
  document.body.appendChild(modal)

  const textEl = modal.querySelector('.demo-modal__text')
  const defaultText =
    modalText ||
    `No site de verdade, esse cliente teria acabado de chegar até você. Este é um modelo demonstrativo feito por Carlos — o seu pode ficar assim.`

  const close = () => modal.classList.remove('is-open')
  modal.querySelector('.demo-modal__backdrop').addEventListener('click', close)
  modal.querySelector('.demo-modal__close').addEventListener('click', close)
  modal.querySelector('.demo-modal__continue').addEventListener('click', close)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close()
  })

  // Toda ação "real" da demo abre o modal
  document.querySelectorAll('[data-demo-action]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      textEl.textContent = el.dataset.demoText || defaultText
      modal.classList.add('is-open')
    })
  })

  // Formulários demonstrativos
  document.querySelectorAll('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      textEl.textContent = form.dataset.demoText || defaultText
      modal.classList.add('is-open')
    })
  })

  return { demo }
}
