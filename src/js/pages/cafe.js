import '@fontsource/archivo/400.css'
import '@fontsource/archivo/500.css'
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito-sans/600.css'
import '@fontsource/young-serif/400.css'

import '../../styles/tokens.css'
import '../../styles/base.css'
import '../../styles/components.css'
import '../../styles/demos/cafe.css'

import { initMotion } from '../core/motion.js'
import { initReveals, heroIntro } from '../core/reveals.js'
import { initTransitions } from '../core/transitions.js'
import { initDemoFrame } from '../core/demo-frame.js'

initMotion()
initTransitions()
heroIntro(document.querySelector('[data-hero-lines]'), 0.2)
initReveals()

initDemoFrame({
  demo: 'cafe',
  waMessage:
    'Oi Carlos! Vi o modelo do café (Torra Miúda) e quero um site assim pro meu negócio.',
})
