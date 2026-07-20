# Archanjo Consultoria Empresarial — Landing Page

Landing page para campanhas de tráfego pago (Meta Ads), focada em geração de
conversas qualificadas no WhatsApp para regularização de CNPJ, MEI e Simples
Nacional.

Projeto estático (HTML/CSS/JS puro), empacotado com [Vite](https://vitejs.dev)
para desenvolvimento local com hot reload e build otimizado para produção.

## Estrutura do projeto

```
.
├── index.html              # Entry point (HTML)
├── src/
│   ├── css/
│   │   └── style.css       # Estilos (design tokens, componentes, responsivo)
│   └── js/
│       └── script.js       # Comportamento (reveal on scroll, parallax, FAQ,
│                            # lightbox, tilt, links de WhatsApp)
├── public/
│   └── assets/
│       ├── img/             # Fotos (hero, seção "Quem sou")
│       └── prints/          # Prints de depoimentos do WhatsApp
├── package.json
├── vite.config.js
└── .gitignore
```

Arquivos dentro de `public/` são servidos como estão, na raiz do site — por
isso o HTML/CSS referenciam as imagens como `assets/img/...` e
`assets/prints/...`, sem prefixo `public/`.

## Pré-requisitos

- [Node.js](https://nodejs.org) 18 ou superior
- npm (instalado junto com o Node)

## Rodando localmente

```bash
npm install
npm run dev
```

O terminal vai mostrar um endereço local (geralmente
`http://localhost:5173`). Abra no navegador — qualquer alteração em
`index.html`, `src/css/style.css` ou `src/js/script.js` recarrega
automaticamente.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` com os arquivos otimizados (HTML/CSS/JS minificados,
prontos para deploy).

Para conferir o build localmente antes de publicar:

```bash
npm run preview
```

## Deploy na Vercel

### Opção 1 — CLI

```bash
npm install -g vercel
vercel
```

Siga o passo a passo interativo. A Vercel detecta o Vite automaticamente
(build command `vite build`, output directory `dist`).

### Opção 2 — Painel da Vercel (recomendado)

1. Suba este projeto para um repositório no GitHub/GitLab/Bitbucket.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o framework "Vite" automaticamente:
   - **Build Command:** `vite build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Clique em Deploy.

Nenhuma variável de ambiente é necessária — o projeto não depende de nenhuma
API externa além do link direto para o WhatsApp (`wa.me`).

## Configuração do WhatsApp

O número e a mensagem pré-preenchida do botão de WhatsApp ficam no topo de
`src/js/script.js`:

```js
var WHATSAPP_NUMBER = "5521983727520";
var MSG_REGULARIZAR = "Olá, Daniel! Vim pelo site e gostaria de consultar a situação do meu CNPJ.";
```

A janela de reenquadramento no Simples Nacional (usada na nota de urgência da
seção final) também é configurável ali, no objeto `SIMPLES_REENQUADRAMENTO`.

## Nota de segurança

`npm audit` pode reportar uma vulnerabilidade moderada/alta relacionada ao
`esbuild` interno do Vite 5.x ([GHSA-67mh-4wv8-2f99](https://github.com/advisories/GHSA-67mh-4wv8-2f99)).
Ela afeta apenas o servidor de desenvolvimento local (`npm run dev`) e não tem
impacto no build de produção nem no site publicado. A correção completa exige
migrar para o Vite 6+, o que pode trazer mudanças incompatíveis — avalie isso
separadamente se quiser atualizar.

## Licença

Uso exclusivo da Archanjo Consultoria Empresarial.
