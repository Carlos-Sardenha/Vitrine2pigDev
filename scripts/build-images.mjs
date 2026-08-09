/**
 * Pipeline de imagens: src/assets/img-src/*.jpg → public/img/*.webp
 * Cada saída declara crop (aspect), largura e qualidade — tudo que as
 * páginas consomem nasce aqui. Rodar: npm run images
 */
import { mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SRC = 'src/assets/img-src'
const OUT = 'public/img'

// [saída, fonte, largura, aspecto (l/a) ou null = manter, qualidade]
const JOBS = [
  // Home
  ['thumb-advocacia', 'adv-retrato-helena', 760, 4 / 5, 74],
  ['thumb-cafe', 'cafe-croissant', 760, 4 / 5, 74],
  ['thumb-salao', 'salao-interior', 760, 4 / 5, 74],
  ['retrato-carlos', 'carlos-retrato', 760, 4 / 5, 74],

  // Advocacia
  ['adv-retrato', 'adv-retrato-helena', 900, 4 / 5, 76],
  ['adv-biblioteca', 'adv-biblioteca', 1400, 16 / 9, 72],
  ['adv-escritorio', 'adv-escritorio', 1200, 3 / 2, 72],

  // Café
  ['cafe-hero', 'cafe-espresso', 1600, 16 / 9, 72],
  ['cafe-latte', 'cafe-latte-art', 800, 1, 74],
  ['cafe-croissant', 'cafe-croissant', 800, 1, 74],
  ['cafe-bolo', 'cafe-bolo', 800, 1, 74],
  ['cafe-espresso', 'cafe-espresso', 800, 1, 74],
  ['cafe-interior', 'cafe-interior', 900, 4 / 5, 74],
  ['cafe-textura', 'cafe-interior', 1400, 16 / 9, 70],

  // Remodelagem Pradda
  ['pradda-arquitetura', 'textura-pb', 900, 4 / 5, 74],
  ['pradda-marcos', 'pradda-marcos', 800, 4 / 5, 78],
  ['pradda-jessica', 'pradda-jessica', 800, 4 / 5, 78],

  // Salão
  ['salao-hero', 'salao-interior', 1600, 16 / 9, 72],
  ['salao-cabelo', 'salao-cabelo', 900, 4 / 5, 74],
  ['salao-corte', 'salao-cabeleireira', 1200, 3 / 2, 74],
  ['salao-manicure', 'salao-manicure', 900, 4 / 5, 74],

  // Salão — antes/depois (duas fotos distintas, mesmo enquadramento 4:5)
  ['salao-antes', 'cabelo-antes', 900, 4 / 5, 76],
  ['salao-depois', 'cabelo-depois', 900, 4 / 5, 76],

  // Salão — equipe
  ['salao-marina', 'salao-marina', 700, 4 / 5, 76],
  ['salao-duda', 'salao-duda', 700, 4 / 5, 76],
  ['salao-re', 'salao-re', 700, 4 / 5, 76],

  // Advocacia — uma imagem por área de atuação
  ['adv-familia', 'adv-familia', 720, 4 / 3, 74],
  ['adv-contratos', 'adv-contratos', 720, 4 / 3, 74],
  ['adv-contencioso', 'adv-contencioso', 720, 4 / 3, 74],
  ['adv-consultoria', 'adv-consultoria', 720, 4 / 3, 74],
]

await mkdir(OUT, { recursive: true })

for (const [out, src, width, aspect, quality] of JOBS) {
  const srcFile = ['jpg', 'png', 'jpeg', 'webp']
    .map((ext) => path.join(SRC, `${src}.${ext}`))
    .find((f) => existsSync(f))
  if (!srcFile) throw new Error(`Fonte não encontrada para ${src}`)
  const input = sharp(srcFile)
  const meta = await input.metadata()

  let pipeline = input.rotate()
  if (aspect) {
    const srcAspect = meta.width / meta.height
    let w = meta.width
    let h = meta.height
    if (srcAspect > aspect) w = Math.round(h * aspect)
    else h = Math.round(w / aspect)
    pipeline = pipeline.resize(w, h, { fit: 'cover', position: 'attention' })
  }

  const file = path.join(OUT, `${out}.webp`)
  await pipeline.resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(file)
  console.log(`ok ${out}.webp`)
}

console.log('Imagens geradas em', OUT)
