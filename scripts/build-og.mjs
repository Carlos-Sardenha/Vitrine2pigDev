/**
 * Gera as og:images (1200×630 JPG) tipográficas de cada página,
 * na paleta da página. O preview no WhatsApp é peça de venda.
 * Rodar: npm run og
 */
import { mkdir } from 'node:fs/promises'
import sharp from 'sharp'

const OUT = 'public/og'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

const PAGES = [
  {
    file: 'og-home',
    bg: '#ffffff',
    ink: '#0a0a0a',
    accent: '#0a0a0a',
    lines: ['SEU NEGÓCIO', 'É BOM DEMAIS', 'PRA TER UM SITE', 'qualquer.'],
    italicLast: true,
    tag: 'CARLOS · SITES SOFISTICADOS POR PREÇO JUSTO',
  },
  {
    file: 'og-advocacia',
    bg: '#f1eee7',
    ink: '#14181d',
    accent: '#8a6f4d',
    lines: ['RIGOR TÉCNICO.', 'ESCUTA HUMANA.'],
    tag: 'MODELO DE SITE: ADVOCACIA, POR CARLOS',
  },
  {
    file: 'og-cafe',
    bg: '#f6eee1',
    ink: '#2a190e',
    accent: '#c4762c',
    lines: ['CAFÉ PASSADO NA HORA.', 'PÃO SAINDO DO FORNO.'],
    tag: 'MODELO DE SITE: CAFÉ, POR CARLOS',
  },
  {
    file: 'og-pradda',
    bg: '#151e45',
    ink: '#f2efe7',
    accent: '#f2cf8d',
    lines: ['O VALOR EXATO', 'DO SEU IMÓVEL,', 'PRETO NO BRANCO.'],
    tag: 'PRADDA, PROPOSTA DE REMODELAGEM POR CARLOS',
  },
  {
    file: 'og-salao',
    bg: '#f7f3ee',
    ink: '#2e2a26',
    accent: '#8fa08a',
    lines: ['SEU TEMPO', 'DE CUIDAR', 'DE VOCÊ.'],
    tag: 'MODELO DE SITE: SALÃO DE BELEZA, POR CARLOS',
  },
]

await mkdir(OUT, { recursive: true })

for (const p of PAGES) {
  const n = p.lines.length
  const size = n > 3 ? 88 : 104
  const lineH = size * 1.08
  const startY = 315 - ((n - 1) * lineH) / 2 + size * 0.35

  const text = p.lines
    .map((line, i) => {
      const italic = p.italicLast && i === n - 1
      return `<text x="80" y="${startY + i * lineH}" font-family="Georgia, serif" font-size="${size}" font-weight="500" ${
        italic ? 'font-style="italic"' : ''
      } letter-spacing="1" fill="${p.ink}">${esc(line)}</text>`
    })
    .join('\n')

  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="${p.bg}"/>
    ${text}
    <rect x="80" y="546" width="44" height="3" fill="${p.accent}"/>
    <text x="140" y="556" font-family="Arial, sans-serif" font-size="22" letter-spacing="4" fill="${p.ink}" opacity="0.75">${esc(p.tag)}</text>
  </svg>`

  await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(`${OUT}/${p.file}.jpg`)
  console.log(`ok ${p.file}.jpg`)
}

console.log('OG images geradas em', OUT)
