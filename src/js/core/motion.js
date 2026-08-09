import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Toda página abre no começo: o navegador não restaura a posição
// anterior. Âncoras (#cardapio, #modelos) continuam funcionando.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
if (!window.location.hash) window.scrollTo(0, 0)

/**
 * Setup único de movimento: Lenis dirigido pelo ticker do GSAP,
 * ScrollTrigger sincronizado. Com prefers-reduced-motion, nada liga
 * e a página fica 100% funcional com scroll nativo.
 */
export function initMotion() {
  if (reduced) return null

  document.documentElement.classList.add('has-motion')

  const lenis = new Lenis({ lerp: 0.1 })
  if (!window.location.hash) lenis.scrollTo(0, { immediate: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  return lenis
}

export { gsap, ScrollTrigger }
