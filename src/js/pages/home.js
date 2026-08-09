import '@fontsource/archivo/400.css'
import '@fontsource/archivo/500.css'
import '@fontsource/archivo/600.css'
import '@fontsource/fraunces/300.css'
import '@fontsource/fraunces/300-italic.css'
import '@fontsource/caveat/400.css'

import '../../styles/tokens.css'
import '../../styles/base.css'
import '../../styles/home.css'

import { initMotion, gsap, ScrollTrigger, reduced } from '../core/motion.js'
import { initReveals, heroIntro } from '../core/reveals.js'
import { initTransitions } from '../core/transitions.js'

initMotion()
initTransitions()
heroIntro(document.querySelector('[data-hero-lines]'))
initReveals()

if (!reduced) {
  // Crossfade do fundo do body: a página escurece, não corta.
  // A virada é ancorada no ÚLTIMO item da vitrine (Casa Lume):
  // quando o fim dele cruza o meio da tela, escurece; ao voltar
  // acima desse ponto, clareia.
  const LIGHT = { bg: '#ffffff', ink: '#0a0a0a' }
  const DARK = { bg: '#0a0801', ink: '#d9d7d4' }

  const setTheme = (t) =>
    gsap.to('body', {
      backgroundColor: t.bg,
      color: t.ink,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto',
    })

  const ultimoModelo = document.querySelector('.vitrine__item:last-child')
  if (ultimoModelo) {
    ScrollTrigger.create({
      trigger: ultimoModelo,
      start: 'bottom center',
      onEnter: () => setTheme(DARK),
      onLeaveBack: () => setTheme(LIGHT),
    })
  }

  // Parallax sutil (6-8%) nos thumbnails da vitrine
  document.querySelectorAll('[data-parallax] img').forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -7 },
      {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('[data-parallax]'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
  })

  // O hero entra sem esperar scroll
  gsap.to('.hero [data-reveal]', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'expo.out',
    stagger: 0.12,
    delay: 0.55,
  })
}
