import '@fontsource/archivo/400.css'
import '@fontsource/archivo/500.css'
import '@fontsource/archivo/600.css'
import '@fontsource/archivo/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/caveat/400.css'

import '../../styles/tokens.css'
import '../../styles/base.css'
import '../../styles/components.css'
import '../../styles/demos/pradda.css'

import { initMotion } from '../core/motion.js'
import { initReveals, heroIntro } from '../core/reveals.js'
import { initTransitions } from '../core/transitions.js'
import { initDemoFrame } from '../core/demo-frame.js'

const lenis = initMotion()

// Menu mobile: overlay em tela cheia com os links da nav.
// Criado ANTES de initTransitions para os links clonados ganharem
// a transição de cortina, e antes de initDemoFrame para o CTA do
// overlay ganhar o modal.
function initMobileMenu() {
  const nav = document.querySelector('.pra-nav')
  const menu = nav?.querySelector('.pra-nav__menu')
  if (!nav || !menu) return

  const toggle = document.createElement('button')
  toggle.type = 'button'
  toggle.className = 'pra-nav__toggle label'
  toggle.setAttribute('aria-expanded', 'false')
  toggle.textContent = 'Menu'
  nav.appendChild(toggle)

  const overlay = document.createElement('div')
  overlay.className = 'pra-menu'
  const linksBox = document.createElement('nav')
  linksBox.className = 'pra-menu__links'
  menu.querySelectorAll('a').forEach((a) => linksBox.appendChild(a.cloneNode(true)))
  overlay.appendChild(linksBox)

  const cta = document.createElement('button')
  cta.type = 'button'
  cta.className = 'cta pra-menu__cta'
  cta.dataset.demoAction = ''
  cta.dataset.demoText =
    'No site de verdade, esse cliente teria chegado direto no WhatsApp da Pradda — (19) 99716-5585. É isso que uma remodelagem bem feita entrega.'
  cta.innerHTML = '<span>Solicitar avaliação</span>'
  overlay.appendChild(cta)
  document.body.appendChild(overlay)

  const setOpen = (open) => {
    overlay.classList.toggle('is-open', open)
    nav.classList.toggle('is-open', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.textContent = open ? 'Fechar' : 'Menu'
    if (open) lenis?.stop()
    else lenis?.start()
  }

  toggle.addEventListener('click', () =>
    setOpen(!overlay.classList.contains('is-open')),
  )
  linksBox.addEventListener('click', () => setOpen(false))
  cta.addEventListener('click', () => setOpen(false))
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false)
  })
  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false)
  })
}

initMobileMenu()
initTransitions()
heroIntro(document.querySelector('[data-hero-lines]'), 0.2)
initReveals()

initDemoFrame({
  demo: 'pradda',
  waMessage:
    'Oi Carlos! Vi a proposta de remodelagem do site da Pradda e quero conversar.',
  pillLabel: 'Remodelagem · por Carlos',
  pillCta: 'Quero essa remodelagem → WhatsApp',
  modalTitle: 'Viu como converte?',
  modalText:
    'No site de verdade, esse cliente teria chegado direto no WhatsApp da Pradda — (19) 99716-5585. Proposta de remodelagem por Carlos.',
})
