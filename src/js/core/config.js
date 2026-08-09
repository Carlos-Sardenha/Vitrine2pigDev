/**
 * Constantes do site — troca única quando o Carlos tiver
 * o número real e o domínio.
 */

export const WHATSAPP_NUMBER = '5519999783558'
export const SITE_URL = 'https://2pigdev.com' // PLACEHOLDER — trocar pelo domínio real

export const WA_LINK = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
