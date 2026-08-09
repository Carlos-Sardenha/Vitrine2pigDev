import '@fontsource/archivo/400.css'
import '@fontsource/archivo/500.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'

import '../../styles/tokens.css'
import '../../styles/base.css'
import '../../styles/components.css'
import '../../styles/demos/advocacia.css'

import { initMotion } from '../core/motion.js'
import { initReveals, heroIntro } from '../core/reveals.js'
import { initTransitions } from '../core/transitions.js'
import { initDemoFrame } from '../core/demo-frame.js'

initMotion()
initTransitions()
heroIntro(document.querySelector('[data-hero-lines]'), 0.2)
initReveals()

initDemoFrame({
  demo: 'advocacia',
  waMessage:
    'Oi Carlos! Vi o modelo de site para advocacia (Helena Vasques) e quero um site assim pro meu negócio.',
})
