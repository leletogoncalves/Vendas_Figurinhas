# Vendas Figurinhas

Pagina de vendas em React/Vite para o Kit Digital de Figurinhas Futebol 2026, com foco em conversao para checkout Cakto.

## Projeto

- Landing page responsiva para desktop e celular.
- Oferta principal: kit digital por R$14,90.
- Botao de compra apontando para o checkout: https://pay.cakto.com.br/vsgnpgb_933334
- Pagina publicada em producao: https://s-2-seven.vercel.app
- Secoes com beneficios, prova visual, guia de impressao, comparativos e perguntas frequentes.

## Tecnologias

- React 19
- Vite
- Lucide React
- CSS responsivo customizado
- Node test runner
- Deploy via Vercel

## Como rodar localmente

Instale as dependencias:

```bash
npm install
```

Inicie o servidor local:

```bash
npm run dev
```

Gere o build de producao:

```bash
npm run build
```

Rode os testes:

```bash
npm test
```

## Estrutura

- `src/App.jsx`: conteudo principal da landing page.
- `src/offer.mjs`: preco, preco antigo e link de checkout.
- `src/styles.css`: estilos responsivos da pagina.
- `src/assets`: imagens usadas na landing.
- `tests/landing.test.mjs`: testes de oferta, checkout, CTA e imagens principais.

## Observacao

Este e um projeto independente de pagina de vendas. Marcas, nomes e imagens demonstrativas pertencem aos seus respectivos titulares.
