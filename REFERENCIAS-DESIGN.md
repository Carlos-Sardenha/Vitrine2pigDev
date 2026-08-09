# Referências de Design — Site de Apresentação

Documento vivo com os aprendizados de pesquisa visual para o projeto (portfólio /
suporte a cold call). Estilo-alvo: moderno, limpo, "liso", minimalista, navegação fluida.

---

## Caso estudado: IZANAMI (Awwwards Site of the Day — 18/jul/2026)

- **Site:** https://izanami-official.com/
- **Página na Awwwards:** https://www.awwwards.com/sites/izanami
- **Estúdio:** baqemono.inc. (Japão) — direção de Tomoyuki Nakata
- **Notas:** SOTD 7.19/10 · Dev Award 7.26/10
- **Tags Awwwards:** Scrolling, Typography, Storytelling, Copy design, Art & Illustration

### 1. Paleta: apenas 2 cores

| Papel | Cor | Hex |
|---|---|---|
| Fundo | quase-preto quente (tom de tinta sumi) | `#0A0801` |
| Texto/elementos | off-white acinzentado (tom de papel washi) | `#D9D7D4` |

**Aprendizado:** o site inteiro se sustenta com UMA cor de fundo e UMA de texto.
Nada de branco `#FFFFFF` puro sobre preto `#000000` puro — os dois tons são levemente
"sujos"/aquecidos, o que dá sofisticação e reduz cansaço visual. Restrição de paleta
é uma decisão de design, não uma limitação.

### 2. Tipografia: sans neutra + serifas de personalidade

- **Base (corpo/UI):** Helvetica Neue — neutra, invisível, funcional
- **Display (títulos/momentos):** Playfair Display e Cinzel (serifas elegantes)
- **Acento cultural:** Shippori Mincho (serifa japonesa, reforça a identidade da marca)

**Aprendizado:** o contraste sans-serif neutra × serifa expressiva nos títulos cria
hierarquia e "cara de caro" sem precisar de cor. A fonte de acento é escolhida para
contar a história da marca (aqui, japonesa) — cada site-modelo do portfólio pode trocar
só a fonte display para mudar completamente a personalidade.

### 3. Movimento: o que torna o site "liso"

Interações destacadas pela própria Awwwards: **navigation, scrolling, transition,
fluid, parallax, sticky**.

Confirmado por inspeção no código da página:

- **Lenis** (smooth scroll) ativo no `<html>` — é isso que dá a sensação de scroll
  "amanteigado" em vez do scroll seco do navegador
- **GSAP** para animações e transições (listado pela Awwwards nas tecnologias)
- **2 elementos `<canvas>`** — efeitos WebGL (distorção fluida de imagens, texturas)
- Seções **sticky** com **parallax** entre camadas durante o scroll

**Aprendizado — custo × efeito:**

| Efeito | Custo de implementação | Impacto |
|---|---|---|
| Lenis (smooth scroll) | baixo (1 lib, poucas linhas) | altíssimo — muda a sensação do site inteiro |
| Transições/reveals com GSAP + ScrollTrigger | médio | alto — conteúdo "entra em cena" ao rolar |
| Sticky + parallax | médio | alto — profundidade sem poluição |
| WebGL/canvas (distorção fluida) | alto | médio — impressiona, mas pesa e exige manutenção |

Para um site de vendas, os três primeiros já entregam 90% da sensação "Awwwards".

### 4. Estrutura e storytelling

- Hero = **manifesto curto** ("Sharing the Japanese Spirit of Harmony"), não um menu
  de recursos — primeiro emociona, depois explica
- Conteúdo organizado em **seções numeradas** (01 School / 02 Craft / 03 Retreat),
  cada uma com título curto + 1 parágrafo + 1 CTA ("View School")
- Textos **curtos e com voz própria** ("copy design" é uma tag do prêmio — o texto É
  parte do design)
- **Um único CTA por seção**, sempre no mesmo padrão visual

**Aprendizado:** pouquíssimo conteúdo por dobra. Cada seção responde uma pergunta só.
A numeração 01/02/03 cria ritmo e senso de curadoria — perfeito para apresentar
categorias de sites-modelo no portfólio.

### 5. Como traduzir para o site de apresentação (cold call)

1. **Paleta de 2 tons** (escuro quente + claro quente) — sofisticação imediata e fácil
   de manter consistente
2. **Sans neutra no corpo + serifa expressiva nos títulos** — e nos sites-modelo,
   trocar apenas a fonte display por nicho (fotógrafo ≠ salão ≠ restaurante)
3. **Lenis + reveals no scroll** como base do "liso" — barato e transforma a percepção
4. **Seções numeradas** para a vitrine: 01 Fotógrafo / 02 Salão / 03 Restaurante...
5. **Manifesto no hero** em vez de autoapresentação burocrática: uma frase sobre o que
   um site bem feito faz pelo negócio do cliente
6. **Cautela com WebGL:** quem chega de uma cold call pode abrir no celular com 4G —
   o site precisa carregar rápido; guardar efeitos pesados para um "modo vitrine"

---

## Caso estudado: NORMAL IS BORING (Awwwards Site of the Day — 23/jul/2026)

- **Site:** https://normalisboring.es/
- **Página na Awwwards:** https://www.awwwards.com/sites/normal-is-boring
- **Estúdio:** LaNegrita (Espanha) — cliente: incorporadora imobiliária de luxo (Galícia)
- **Notas:** SOTD 7.17/10 · Dev Award 7.49/10
- **Tags Awwwards:** Architecture, Photography, Luxury, Animation, Clean, Typography, Transitions

### 1. Paleta: preto e branco puros (o inverso do Izanami)

| Papel | Cor | Hex |
|---|---|---|
| Fundo | branco puro | `#FFFFFF` |
| Texto/elementos | preto puro | `#000000` |

**Aprendizado:** enquanto o Izanami usa tons quentes "sujos" no escuro, este usa P&B
absoluto no claro — e o luxo vem do CONTRASTE MÁXIMO + espaço em branco generoso.
São as duas pontas do mesmo princípio: paleta de 2 cores, zero ruído. A fotografia
dos projetos entra como a única "cor" da página.

### 2. Tipografia editorial: o site parece uma revista de moda

- **Display:** Juana (serifa) + Editorial New **Ultralight** e Ultralight Italic —
  pesos finíssimos em tamanho gigante, sempre em CAIXA ALTA
- **Títulos quebrados em várias linhas** como composição visual:
  "ESPACIOS / DE VIDA // QUE / DESAFÍAN / LO / ORDINARIO"
- Mistura de peso, itálico e alinhamento dentro do MESMO título para criar ritmo

**Aprendizado:** tipografia ultraleve gigante em caixa alta + quebras de linha
intencionais = sofisticação editorial sem nenhum efeito especial. A fonte É o design.

### 3. Movimento: GSAP + Lenis e NADA de WebGL

Confirmado por inspeção no código:

- **GSAP 3.12.7** + **Lenis** (smooth scroll) — a mesma dupla do Izanami
- **Zero `<canvas>`, zero vídeo** — todas as transições são DOM/CSS animadas
- E o mais surpreendente: **é WordPress** (wp-content no código)

**Aprendizado (o mais importante do estudo):** um Site of the Day da Awwwards foi
construído em WordPress, sem WebGL, sem vídeo — só tipografia forte, fotografia boa,
GSAP e Lenis. Ou seja: a sensação "premiado" está ao alcance de uma stack simples.
O que não dá para economizar: qualidade das fotos e craft nas transições.

### 4. Estrutura e storytelling

- O **nome da marca é um manifesto** ("Normal is Boring") — atitude antes de produto
- Valores em **seções numeradas** (01 ELEGANCIA / 02 AUTENTICIDAD / 03 FUNCIONALIDAD)
- Projetos em **lista numerada com metadados** (ano + local + 01-05) — vitrine enxuta
- CTAs discretos entre parênteses: "(Contacta)" — quase tipográficos, sem cara de botão
- Fecho com apelo direto: "DESBLOQUEA TU SUEÑO" + e-mail + "Solicitar información"

### 5. Izanami × Normal is Boring — os padrões que se repetem

| Padrão | Izanami | Normal is Boring | Conclusão p/ o projeto |
|---|---|---|---|
| Paleta 2 cores | escuro quente | P&B puro claro | regra de ouro do estilo "liso" |
| Tipografia | sans + serifa expressiva | serifa editorial ultraleve CAPS | display font define a personalidade |
| Smooth scroll | Lenis | Lenis | **Lenis é obrigatório** |
| Animação | GSAP + WebGL | GSAP puro | GSAP basta; WebGL é opcional |
| Seções numeradas | 01/02/03 projetos | 01/02/03 valores + projetos | numerar a vitrine de modelos |
| Copy | manifesto poético | manifesto provocador | hero = frase de atitude, não currículo |
| CTA | 1 por seção, padrão fixo | discreto "(Contacta)" | CTA repetido, visual consistente |

**Tese para o site do Carlos:** dá para alcançar visual de premiação com stack simples
(HTML/CSS/JS + GSAP + Lenis), apostando tudo em tipografia, espaçamento, paleta de
2 cores e transições bem feitas. Os dois casos provam por caminhos opostos
(escuro/quente/WebGL vs claro/P&B/WordPress) que o segredo é restrição + craft.

---

## 📌 Para estudar na próxima sessão (pedido do Carlos, 23/jul/2026)

- Estilo de comida: https://www.donmolinico.es/ — **PRINCIPAL**
- Estilo de loja gourmet: https://oddritualgolf.com/ — secundário
- Estilo de auto-cuidado: https://www.hiatusspa.com/

## ⭐ Direção definida (23/jul/2026)

- **Inspiração principal: NORMAL IS BORING** — base clara, P&B de alto contraste,
  tipografia editorial gigante em caixa alta, GSAP + Lenis, sem WebGL.
- **Inspiração secundária: IZANAMI, como alívio estético** — momentos pontuais de
  fundo escuro quente (#0A0801/#D9D7D4) para criar ritmo e contraste no scroll,
  sem disputar com a base editorial clara.

---

## Pesquisa verificada por categoria (23/jul/2026)

Pesquisa feita por 14 agentes em paralelo (7 buscadores + 7 verificadores) nas galerias
Awwwards, SiteInspire, Minimal Gallery e Dark Mode Design, mais curadorias de nicho.
**Todos os 55 sites abaixo foram abertos e verificados no ar em 23/07/2026.**

### Síntese das tendências (vocabulário para especificar o projeto)

O estilo "clean/liso/fluido" premiado em 2024-2026 se define por:

1. **Tipografia gigante como elemento estrutural** — headlines em escala enorme, muitas
   vezes substituindo imagem de hero ("hero tipográfico")
2. **Paletas de 2-3 tons** com whitespace generoso funcionando como "cor" principal
3. **Movimento suave e contido** — Lenis/GSAP, micro-interações em hover, transições de
   página fluidas; a fluidez técnica é critério de premiação (Developer Award)
4. **Layouts editoriais** — grids com respiro, seções full-width alternadas, sistemas de
   numeração tipo catálogo, navegação de 3-5 itens com CTA único
5. **Dark mode como estética deliberada**, não tema alternativo

### 1. Referências gerais do estilo (galerias e premiados)

- **Form&Fun** — https://formandfun.co — SOTD + Dev Award (2025), fundadores brasileiros; grid de cards com respiro, P&B de alto contraste, carrosséis arrastáveis. O exemplo clássico de "liso e fluido".
- **Ocean Films** — https://oceanfilms.com.br — SOTD + Dev Award (2025), produtora BR; minimalismo editorial onde a interface desaparece.
- **Pulso Hotel** — https://pulsohotel.com/en — Honorable Mention, hotel-butique SP; minimalismo quente (bege/creme) com carrosséis suaves.
- **CoffeeTech** — https://coffee-tech.com — SOTD + Dev Award (jul/2026); produto técnico B2B apresentado com composição minimalista.
- **House of Honey** — https://houseofhoney.com — SOTD + Dev Award (jul/2026); sofisticação silenciosa, whitespace protagonista.
- **Karol Ortyl** — https://karolortyl.com — Minimal Gallery; sistema editorial de numeração (FIG. 1-35), tipografia como interface. Leve e memorável.
- **Trionn** — https://trionn.com — Dark Mode Design; dark mode limpo com headline gigante e micro-interações contidas.
- **Alles Blau** — https://allesblau.studio/en — Honorable Mention, estúdio de SP (MASP, Sesc, Inhotim); minimalismo tipográfico bilíngue.

### 2. Portfólios de quem vende sites (o modelo do SEU site)

**Fórmula que converte, observada na categoria:** hero com proposta de valor em uma frase
("I help X do Y") + prova social imediata (logos/depoimentos/prêmios) + CTA repetido no
hero e no rodapé + status de disponibilidade. No mercado BR: WhatsApp + "solicite um
orçamento" no lugar de formulário.

- **Iñaki Soria** — https://inakisoria.com — one-page que é máquina de conversão: intro direta, logos (Google, Slack, Disney), depoimentos, e-mail repetido. **O modelo mais próximo do que queremos.**
- **Adham Dannaway** — https://www.adhamdannaway.com — hero memorável "designer/coder" dividido ao meio com retrato central; comunica em 2 segundos.
- **Seán Halpin** — https://www.seanhalpin.xyz — tom pessoal e leve que humaniza; um dos portfólios mais citados em rankings.
- **Stas Bondar** — https://stabondar.com — prova social por premiação (jurado Awwwards); contato multi-canal incluindo WhatsApp.
- **Cyd Stumpel** — https://cydstumpel.nl — vende serviço explicitamente com cards de serviço, disponibilidade e blog; equilíbrio arte × comércio.
- **DaDex** — https://dadex.nl — micro-estúdio holandês; funil completo na home: texto rotativo de serviços, depoimentos, "100+ clientes", consultoria grátis como CTA.
- **Carolini Santos** — https://carolinisantos.com.br — freelancer BR (Joinville/SC) com o funil brasileiro completo: WhatsApp integrado, "Solicite um orçamento", 6 depoimentos com foto.
- **Harry Atkins** — https://harryjatkins.com — ultraminimalismo tipográfico; contraponto para calibrar até onde ir sem perder o lead.

### 3. Fotógrafo (nicho da vitrine)

Padrão do nicho: o design "desaparece" (fundo branco, tipografia discreta) para a foto ser
a única cor; navegação de 3-5 itens; **um único mecanismo de interação memorável por site**.

- **Jack Davison** — https://jackdavison.co.uk — toggle Index/Thumbs, arquivo vivo sem ruído (SiteInspire).
- **Julia Noni** — https://www.julianoni.com — navegação em colchetes [Selected] [Works] [About]; paginação "1 | 66" como elemento gráfico.
- **Cássio Vasconcellos** — https://cassiovasconcellos.com — referência BR fine art; séries cronológicas, bilíngue.
- **Anthony Tuccitto** — https://www.anthonytuccitto.com — hero tipográfico com o nome como marca + loja integrada.
- **Avagyan Wedding** — https://avagyanphoto.com/ — Honorable Mention; galeria de casamento cinematográfica e imersiva.
- **Ausra Babiedaite** — https://ausrababiedaite.com/ — carrossel horizontal na home + índice com ~660 thumbnails.
- **Justin Bettman** — https://www.justinbettman.com/ — hero em slideshow numerado 01/02/03, grade de projetos all-caps.
- **Hannah Miles** — https://www.hannahmiles.com/ — nome em tipografia gigante FIXA com fotos deslizando por cima no scroll. **Efeito lindo e replicável.**

### 4. Salão / barbearia / estética (nicho da vitrine)

Padrão do nicho: duas linhas estéticas — "clean/light" (creme, whitespace; salões) e
"dark luxury" (preto + acento; barbearias). CTA de agendamento persistente e repetido;
estrutura hero → serviços → equipe nominal → prova social → localização.

- **Mistretta Coiffure** — https://mistretta.ch/ — Honorable Mention; neutros + acento petróleo, GSAP+PixiJS, booking repetido.
- **Marco Ambrosi** — https://www.marcoambrosi.salon/ — Honorable Mention; preto + coral, vídeo do processo criativo, equipe nominal.
- **Frank Nitti Barbers** — https://www.nittibarbers.sk/ — Honorable Mention; dark de barbearia, preços claros, booking integrado.
- **Headmasters** — https://www.headmasters.com/ — Nominee; rede multi-unidade com booking por unidade e SEO local.
- **Taylor Taylor London** — https://taylortaylorlondon.com/ — luxo com dourados, clima members-club, Book Now persistente.
- **The Lane Salon** — https://www.thelanesalon.com/ — creme/off-white premium, donos-operadores apresentados (humaniza).
- **Fringe NY** — https://www.fringeny.com/ — minimalismo com perfis de 10+ stylists e booking multi-local elegante.
- **Palm Sunday** — https://palmsunday.co/ — mobile-first, salão + e-commerce + membership com branding consistente.

### 5. Restaurante / café (nicho da vitrine)

Padrão do nicho: fotografia grande e apetitosa como protagonista; tipografia carrega a
identidade mais que cor; storytelling por seções; reserva/pedido a um clique; cardápio
NUNCA como lista longa na home. Cafés tendem ao lúdico, fine dining ao contemplativo.

- **Luca** — https://luca.restaurant — elegância contida, serifa discreta, reservas sempre visíveis (SiteInspire).
- **Dishoom** — https://www.dishoom.com — storytelling literário por localidade + e-commerce integrado.
- **Ballena** — https://ballenacabo.com — Honorable Mention (jun/2026); luxo minimalista guiado por filosofia, paleta terrosa.
- **Sunbeam Bagels** — https://www.sunbeambagels.com — café lúdico: foto + ilustração SVG + sticker interativo; pedidos via Toast.
- **Tartine Bakery** — https://tartinebakery.com — minimalismo radical: header só com a marca, produto em primeiro plano.
- **BAO London** — https://baolondon.com — identidade fortíssima com sub-marcas por localidade.
- **L'Enclume** — https://www.lenclume.co.uk — 3 estrelas Michelin; narrativa farm-to-table, CTAs duplos claros.
- **Sweetgreen** — https://www.sweetgreen.com — tipografia proprietária, pedido online como centro da experiência.

### 6. Serviços profissionais (nicho da vitrine)

Padrão do nicho: a estética "estúdio de design" migrou para setores conservadores — os
premiados parecem portfólios, não sites institucionais. Paleta 2 tons no lugar do azul
corporativo; foto real da equipe (maior fator de confiança); CTA persistente e discreto.

- **Arbor Dental** — https://www.arbordentalnyc.com/ — clínica odontológica NYC com cara de estúdio de design; dark elegante.
- **Royal Clinic** — https://royalclinic.pl/ — Honorable Mention; duo-tone marrom (#2D1D12) + creme (#F3F1EF) = confiança premium.
- **ConductLaw** — https://www.conductlaw.com/ — advocacia minimalista contemporânea com prova social numérica ($114M+).
- **Pitta & Baione** — https://pittabaione.com/ — advocacia com estética editorial de jornal; serifa forte, ilustrações autorais.
- **Mesura** — https://mesura.eu — padrão-ouro de arquitetura: navegação invisível, grotesca espaçada, scroll imersivo.
- **JA8 Arquitetura Viva** — https://www.ja8.com.br/ — **Honorable Mention brasileiro (ago/2025)**, Florianópolis; base branca, GSAP performático, Next.js. Prova de fluidez padrão-Awwwards no Brasil.
- **Olabero** — https://olabero.com/ — contabilidade sleek: copy conversacional, CTA "Book a 30-min Fit Call" em cada seção.
- **Atelier Oslo** — https://atelieroslo.no — sobriedade escandinava: competência pela contenção.

### 7. Comércio local / one-page (nicho da vitrine)

Padrão do nicho: hero full-width com foto real + paleta neutra com 1 acento + grid de
cards + prova social. **One-page com âncoras + smooth scroll é o formato dominante.**
No Brasil, WhatsApp fixo é padrão de conversão.

- **SCLPTR Gym** — https://sclptrgymandmassage.co.uk — academia independente com site de marca grande; P&B/cinza, Next.js.
- **Upstate Laundromat** — https://www.upstatelaundromat.com — **o one-page institucional exemplar**: tudo numa página com âncoras, cards, FAQ em acordeão.
- **One Lucky Dog** — https://www.oneluckydog.ca — pet care; confiança imediata com selos de credibilidade e fotos reais.
- **RejuveCollective** — https://rejuvecollective.com — estética premium suave com dourado discreto e scroll animado.
- **361 Architecture** — https://361architecture.com — carrossel hero com 5 projetos, quase nada de texto; "menos é mais" vendendo serviço caro.
- **The Mill** — https://themillsf.com — padaria de bairro com estética de galeria; P&B meditativo.
- **Megali Hub** — https://megalihub.com.br — exemplo BR: tons escuros sofisticados, âncoras suaves, CTA de WhatsApp.
