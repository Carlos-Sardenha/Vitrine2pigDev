/**
 * Gera os ícones do site a partir do logo 2PIG DEV.
 * Fonte: src/assets/img-src/logo-2pigdev.png
 * Rodar: npm run favicon
 */
import { mkdir } from 'node:fs/promises'
import sharp from 'sharp'

const SRC = 'src/assets/img-src/logo-2pigdev.png'
const OUT = 'public'

// [saída, largura, qualidade]
const TAMANHOS = [
  ['favicon-32.png', 32],
  ['favicon-180.png', 180], // apple-touch-icon
  ['favicon-512.png', 512], // instalação como app / share
]

await mkdir(OUT, { recursive: true })

for (const [nome, largura] of TAMANHOS) {
  await sharp(SRC)
    .resize(largura, largura, { fit: 'cover' })
    .png({ quality: 92, compressionLevel: 9 })
    .toFile(`${OUT}/${nome}`)
  console.log(`ok ${nome}`)
}

// versão para uso no site (nav, cartões)
await sharp(SRC).resize(480, 480, { fit: 'cover' }).webp({ quality: 86 }).toFile('public/img/logo.webp')
console.log('ok img/logo.webp')
