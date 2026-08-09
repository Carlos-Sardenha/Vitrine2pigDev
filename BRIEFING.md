# Briefing do Projeto — Site de Apresentação

> Documento vivo, atualizado a cada bloco da entrevista de requisitos.
> Status: **entrevista concluída (blocos 1-6) · site em construção** (23/jul/2026).
> Plano de construção aprovado; decisões de design/arquitetura no plano e abaixo.

## Contexto (fixado)

- Carlos vende sites por **cold call** para pequenos negócios.
- Precisa de **um único site próprio** que funcione como cartão de visita: o prospect
  que recebeu a ligação deve, em **menos de 1 minuto**, entender quem é o Carlos,
  o que ele faz e ver provas do que ele entrega.

## O produto (fixado)

Site estilo portfólio com três papéis:

1. **Apresentação** — quem sou, como trabalho, como me contatar.
2. **Vitrine de modelos** — demos de sites em vários nichos e estilos (fotógrafo,
   cabeleireiro, restaurante, clínica, comércio local...), provando versatilidade.
3. **Conversão** — o visitante deve sair querendo fechar (CTA claro, WhatsApp sempre à mão).

## Estilo (fixado — decisão de 23/jul/2026)

Moderno, limpo, "liso", minimalista: tipografia forte, animações e transições suaves,
navegação fluida, zero poluição visual.

- **Inspiração principal: NORMAL IS BORING** (https://normalisboring.es) — base clara
  em P&B de alto contraste, tipografia editorial gigante em caixa alta com quebras de
  linha intencionais, GSAP + Lenis, sem WebGL.
- **Inspiração secundária: IZANAMI** (https://izanami-official.com) — usada como
  **alívio estético**: seções pontuais de fundo escuro quente (#0A0801/#D9D7D4) para
  criar ritmo e contraste no scroll, sem disputar com a base editorial clara.
- Análise completa dos dois casos + 55 referências verificadas por nicho em
  [REFERENCIAS-DESIGN.md](REFERENCIAS-DESIGN.md).

## Estrutura da entrevista

| Bloco | Tema | Status |
|---|---|---|
| 1 | Identidade e posicionamento (marca, promessa, tom, diferencial) | ✅ |
| 2 | Público-alvo e o funil da cold call (quem recebe o link, o que vê primeiro) | ✅ |
| 3 | Vitrine de modelos (quais nichos, quantas demos, o que cada uma demonstra) | ✅ |
| 4 | Conteúdo (textos, foto pessoal, depoimentos — o que existe e o que falta) | ✅ |
| 5 | Funcionalidades e conversão (WhatsApp, formulário, métricas) | ✅ |
| 6 | Tecnologia | ✅ |

## Decisões

### Bloco 1 — Identidade e posicionamento ✅

- **Marca:** híbrido — nome próprio + descritor (ex.: "Carlos · <promessa curta>";
  o descritor exato será definido junto com os textos, no Bloco 4).
- **Promessa central:** design premium acessível — "design de alto padrão sem preço
  de agência". O próprio site precisa provar isso no primeiro scroll.
- **Tom de voz:** próximo e direto — sem jargão técnico, fala de dono de negócio
  para dono de negócio.
- **Diferencial nº 1:** qualidade visual acima da média (o site é a prova viva).
- **Síntese do posicionamento:** "design de agência premium, do jeito acessível e
  direto que o pequeno negócio precisa". A estética Izanami sustenta o "premium";
  o tom próximo sustenta o "acessível".

### Bloco 2 — Público-alvo e funil da cold call ✅

- **Público:** amplo — serviços locais (salão, clínica, restaurante...), profissionais
  autônomos (fotógrafo, advogado...) e comércio local. Sem nicho único; a vitrine
  precisa cobrir os três mundos.
- **Canal de chegada:** WhatsApp logo após a ligação → o site será visto
  majoritariamente **no celular**; caprichar no preview do link (og:image/título).
- **Primeira dobra:** manifesto tipográfico no espírito Normal is Boring — frase de
  atitude gigante; a própria dobra é a prova de qualidade.
- **Conversão (insight-chave do Carlos):** quem vê o site JÁ TEM o contato dele.
  O objetivo não é capturar lead, e sim **fazer o prospect se imaginar com um site
  incrível** — a vitrine de modelos é o motor de conversão (como navegar na Awwwards:
  várias opções de estilos). CTA "Pedir orçamento" presente, apontando para o
  WhatsApp do Carlos (wa.me) — inicialmente sem formulário.

### Bloco 3 — Vitrine de modelos ✅

- **3 modelos caprichados** (qualidade > quantidade), cada um casado à psicologia do
  nicho (decisão do Carlos): **Advocacia** = sério e elegante · **Café** = atiçar
  apetite e desejo · **Salão de beleza** = bem-estar e vontade de se cuidar.
  (Correção explícita: fotógrafo ficou de fora da v1.)
- Marcas fictícias: **Helena Vasques Advocacia** · **Torra Miúda** · **Casa Lume**.
- **Formato:** demos navegáveis dentro do próprio site (/modelos/advocacia etc.),
  cada uma com identidade visual própria.
- **Profundidade:** visual + interações; botões de agendar/reservar são
  demonstrativos e abrem o modal-vitrine ("Funcionou, né?") que converte para o
  WhatsApp do Carlos.

### Bloco 4 — Conteúdo ✅

- Material existente: **só nome e WhatsApp**. Toda a copy foi escrita no tom próximo
  e direto (manifesto, vitrine, passos, sobre, demos).
- **Descritor escolhido: "Carlos · Sites com cara de caro."**
- Foto pessoal: placeholder elegante até o Carlos fornecer.

### Bloco 5 — Funcionalidades e conversão ✅

- Insight central: o prospect **já tem o contato** — a vitrine é o motor de conversão.
- CTA "(Pedir orçamento)" → wa.me com mensagem pré-preenchida específica por página.
- Moldura das demos: pill "MODELO · por Carlos" + modal-vitrine em toda conversão fake
  + navegação cruzada 01↔02↔03 (tour contínuo).
- Preview do link no WhatsApp: og:image tipográfica por página, na paleta da página.

### Bloco 6 — Tecnologia ✅

- **Stack (escolha delegada ao Carlos → decidida):** Vite MPA estático + JS vanilla +
  GSAP (ScrollTrigger/SplitText) + Lenis. Sem React, sem WebGL.
- Fontes auto-hospedadas (@fontsource): Archivo (sistema) + Fraunces (home) +
  Cormorant Garamond (advocacia) + Young Serif (café) + Prata (salão).
- Performance 4G: hero da home tipográfico (LCP textual), imagens WebP via sharp,
  orçamento ≤ 250KB na primeira visita.
- Hospedagem: fora de escopo (política WeHandle restringe orientação de deploy em
  PaaS; build estático é portável — infra aprovada: AWS/time de plataforma).
- **Definidos (24/jul/2026):** WhatsApp 5519999783558 · domínio 2pigdev.com.
- **Pendência do Carlos:** foto pessoal para a seção "Quem sou".

## Entregável final

Ao fim dos 6 blocos: consolidar escopo, sitemap, estilo e prioridades neste documento
e só então propor o plano de construção.
