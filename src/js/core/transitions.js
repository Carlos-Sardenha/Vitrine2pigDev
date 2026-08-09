import { gsap, reduced } from './motion.js'

/**
 * Transição entre páginas (MPA real):
 * saída — cortina #0A0801 sobe cobrindo a tela, depois navega;
 * entrada — a cortina (se veio de transição) desce revelando o hero.
 * Sem JS/reduced-motion: navegação nativa normal.
 */
export function initTransitions() {
  if (reduced) return

  let curtain = document.querySelector('.curtain')
  if (!curtain) {
    curtain = document.createElement('div')
    curtain.className = 'curtain'
    document.body.appendChild(curtain)
  }

  // Entrada: se a página anterior marcou transição, revela descendo
  if (sessionStorage.getItem('curtain') === '1') {
    sessionStorage.removeItem('curtain')
    gsap.fromTo(
      curtain,
      { y: 0 },
      { y: '-101%', duration: 0.6, ease: 'expo.inOut', delay: 0.05 },
    )
  }

  // Saída: intercepta links internos
  document.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute('href')
    const internal =
      href &&
      !href.startsWith('http') &&
      !href.startsWith('#') &&
      !href.startsWith('mailto:') &&
      !a.target
    if (!internal) return

    a.addEventListener('click', (e) => {
      e.preventDefault()
      sessionStorage.setItem('curtain', '1')
      gsap.fromTo(
        curtain,
        { y: '101%' },
        {
          y: 0,
          duration: 0.5,
          ease: 'expo.inOut',
          onComplete: () => {
            window.location.href = href
          },
        },
      )
    })
  })

  // Restaura a cortina ao voltar pelo bfcache
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) gsap.set(curtain, { y: '101%' })
  })
}
