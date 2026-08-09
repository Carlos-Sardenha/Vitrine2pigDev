# Carlos · Sites com cara de caro

Site de apresentação para venda de sites via cold call: home manifesto + 3 demos
navegáveis com marcas fictícias (Helena Vasques Advocacia, Torra Miúda, Casa Lume).

Documentos do projeto: [BRIEFING.md](BRIEFING.md) (requisitos e decisões) e
[REFERENCIAS-DESIGN.md](REFERENCIAS-DESIGN.md) (estudo visual e 55 referências).

## Rodar

```bash
npm install
npm run dev        # dev server em http://localhost:5173
npm run build      # build de produção em dist/
npm run preview    # serve o build localmente
npm run images     # regenera public/img a partir de src/assets/img-src (sharp)
npm run og         # regenera as og:images (public/og)
```

Rotas: `/` · `/modelos/advocacia/` · `/modelos/cafe/` · `/modelos/salao/`

**Remodelagens (propostas para prospects reais):** `/remodelagens/pradda/` —
proposta não solicitada para a Pradda Consultoria Imobiliária (pradda.com.br),
com disclaimer de não afiliação no rodapé. Multi-página como o site original
(Início · Sobre · Serviços · Clientes · Contato), base clara com o navy e o
dourado da marca. Conteúdo factual do site público deles, copy reescrita;
fotos de banco + retratos da equipe (do próprio site da Pradda).

## Configuração de produção

- **WhatsApp:** `5519999783558` — definido em
  [src/js/core/config.js](src/js/core/config.js) e nos links `wa.me` dos HTMLs.
- **Domínio:** `https://2pigdev.com` — usado nas metas OG (og:url / og:image).
- **Pendente — foto pessoal:** salvar como `src/assets/img-src/carlos-retrato.jpg`
  e rodar `npm run images` (a seção "Quem sou" usa `/img/retrato-carlos.webp`;
  até lá exibe um placeholder).

## Stack

Vite (MPA estático) · JS vanilla · GSAP (ScrollTrigger) · Lenis · @fontsource
(fontes auto-hospedadas) · sharp (imagens WebP + og:images).

Fotos: Pexels (licença livre para uso comercial). Marcas das demos são fictícias,
declaradas no rodapé de cada modelo.
