# Calculadora de Honorários Contábeis — Página de Vendas (React)

Landing page de vendas do produto digital "Calculadora de Honorários Contábeis",
agora como projeto React + Vite + Tailwind, com build de produção de verdade.

## Estrutura

```
.
├── index.html              ← entrada do Vite (fontes Google Fonts)
├── package.json            ← dependências e scripts (npm install / npm run build)
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json             ← configuração de deploy da Vercel
├── .gitignore
├── public/                 ← arquivos estáticos (vazio por padrão)
└── src/
    ├── main.jsx             ← ponto de entrada React
    ├── App.jsx              ← monta todas as seções, na ordem
    ├── index.css            ← Tailwind + pequenos ajustes globais
    ├── assets/
    │   ├── hero-daniel.jpg       ← foto do hero (extraída do base64 original)
    │   └── autoridade-daniel.jpg ← foto da seção "quem criou"
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Abertura.jsx
        ├── Dor.jsx
        ├── Solucao.jsx
        ├── Beneficios.jsx
        ├── Demo.jsx
        ├── Autoridade.jsx
        ├── Oferta.jsx
        ├── Objecoes.jsx
        ├── Garantia.jsx
        ├── Urgencia.jsx
        ├── Faq.jsx               ← accordion com estado React (useState)
        ├── CtaFinal.jsx
        ├── PsFooter.jsx
        ├── StickyCta.jsx         ← CTA fixo mobile
        ├── CtaButton.jsx         ← botão reutilizável
        └── SectionHeading.jsx    ← label + título reutilizável
```

Todo o copy (textos em português) foi preservado exatamente como no arquivo original.
As duas fotos que estavam embutidas em base64 no HTML foram extraídas para arquivos
de imagem reais em `src/assets/`, e o Vite cuida de otimizá-las no build.

## Como editar no VS Code

1. Abra a pasta inteira no VS Code (`Arquivo > Abrir Pasta`)
2. Rode `npm install` uma vez (veja SETUP.md)
3. Rode `npm run dev` para ver a página com hot-reload em tempo real
4. Edite os arquivos dentro de `src/components/` — cada seção da página é um
   componente separado

Pontos comuns de edição:
- Preço: arquivo `src/components/Oferta.jsx` (bloco de preço) e `StickyCta.jsx`
- Textos de copy: estão em português, direto dentro de cada componente
- Link do botão de compra: busque por `href="#"` ou `href="#oferta"` e troque
  pelo link real do checkout do Kiwify
- Cores: `tailwind.config.js`, na seção `theme.extend.colors` (`gold`, `black`, etc.)
- Fontes: `index.html` (link do Google Fonts) + `tailwind.config.js` (`fontFamily`)

## Como subir no GitHub

```bash
cd calculadora-honorarios-lp
git init
git add .
git commit -m "primeira versão da página de vendas (React)"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

(Crie o repositório vazio no GitHub antes, em github.com/new — sem README,
sem .gitignore, sem license, para não dar conflito com este push.)

## Como fazer deploy na Vercel

**Opção A — pelo site (mais simples):**
1. Entre em vercel.com e faça login com sua conta GitHub
2. Clique em "Add New… > Project"
3. Selecione o repositório que você acabou de subir
4. A Vercel detecta automaticamente que é um projeto Vite (build command
   `npm run build`, output `dist`) — clique em "Deploy"
5. Em poucos segundos você recebe uma URL tipo `nome-do-projeto.vercel.app`

**Opção B — pelo terminal:**
```bash
npm install -g vercel
cd calculadora-honorarios-lp
vercel
```
Siga as perguntas no terminal (login, nome do projeto, etc.)

## Atualizando a página depois de publicada

Qualquer alteração que você fizer nos arquivos de `src/` e enviar pro GitHub
(`git add .`, `git commit`, `git push`) atualiza automaticamente o site
publicado na Vercel — não precisa fazer deploy manual de novo.

## Domínio próprio

Depois do primeiro deploy, em vercel.com vá em
`Seu Projeto > Settings > Domains` e adicione seu domínio já registrado.
A Vercel mostra os registros DNS que você precisa configurar no painel
onde comprou o domínio.
