import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        advocacia: resolve(__dirname, 'modelos/advocacia/index.html'),
        cafe: resolve(__dirname, 'modelos/cafe/index.html'),
        salao: resolve(__dirname, 'modelos/salao/index.html'),
        pradda: resolve(__dirname, 'remodelagens/pradda/index.html'),
        praddaSobre: resolve(__dirname, 'remodelagens/pradda/sobre/index.html'),
        praddaServicos: resolve(__dirname, 'remodelagens/pradda/servicos/index.html'),
        praddaClientes: resolve(__dirname, 'remodelagens/pradda/clientes/index.html'),
        praddaContato: resolve(__dirname, 'remodelagens/pradda/contato/index.html'),
      },
    },
  },
})
