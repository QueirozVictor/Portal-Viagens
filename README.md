# SkyTrip Viagens

O SkyTrip é um portal de viagens que reúne destinos turísticos em um catálogo visual. A página inicial apresenta destinos em destaque e um carrossel de imagens; cada destino tem uma página própria com história, atrações e preço de referência. A aplicação ajuda quem está explorando lugares para viajar a conhecer opções e comparar inspirações em um só lugar.

## Propósito

Este projeto foi desenvolvido com base no desafio prático do curso de front-end. O exercício propõe a criação de um portal de viagens para praticar roteamento baseado em arquivos no Next.js, páginas dinâmicas, componentes reutilizáveis, navegação com `next/link` e estilos isolados com CSS Modules.

A implementação apresenta a página inicial, um catálogo de destinos e páginas dinâmicas para cada destino, com imagens, informações e pontos turísticos. O projeto também foi adaptado para diferentes tamanhos de tela, com espaçamento consistente e transições suaves.

## Tecnologias utilizadas

- Next.js 16 com App Router e exportação estática
- React 19
- TypeScript e JavaScript
- Tailwind CSS 4
- CSS Modules
- Swiper para o carrossel de destaques
- GitHub Pages para publicação

## Funcionalidades

- Página inicial com carrossel de destinos populares.
- Seleção de destinos em destaque.
- Catálogo completo de destinos.
- Páginas dinâmicas por destino com história, pontos turísticos e preço de referência.
- Navegação com `next/link`.
- Layout responsivo para celulares, tablets e desktops.

## Imagem do projeto

Adicione uma captura de tela do portal em `public/` e atualize o caminho abaixo:

<!-- Exemplo: ![Página inicial do SkyTrip](./public/previa.png) -->

## Deploy

[Acessar o Portal de Viagens](https://queirozvictor.github.io/Portal-Viagens/)

## Aprendizados

- Como a estrutura de pastas do App Router define páginas e rotas.
- Como gerar páginas dinâmicas para cada destino com parâmetros de rota.
- Como compartilhar cabeçalho, rodapé e componentes entre páginas.
- Como navegar entre páginas usando `next/link`.
- Como compor interfaces a partir de dados locais e arrays.
- Como organizar estilos com CSS Modules e utilitários do Tailwind CSS.
- Como criar layouts responsivos e considerar movimento reduzido.
- Como preparar uma aplicação Next.js para exportação estática e publicação no GitHub Pages.

## Estrutura principal

```text
app/
├── components/
│   ├── Card/
│   ├── Footer/
│   ├── Grid/
│   ├── Header/
│   ├── Home/
│   └── Title/
├── destinos/
│   └── [slug]/       # Página dinâmica de cada destino
├── gridCompleto/     # Catálogo completo
├── lb/               # Dados locais dos destinos
├── styles/
├── layout.tsx
└── page.tsx
public/
└── image/            # Imagens do portal
```

## Executar localmente

Requisitos: Node.js e npm instalados.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Para gerar a exportação estática e publicar no GitHub Pages, use o script configurado no projeto:

```bash
npm run deploy
```
