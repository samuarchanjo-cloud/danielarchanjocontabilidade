# Como rodar este projeto pela primeira vez

Este é um projeto **React + Vite + Tailwind** de verdade — ao contrário de um
HTML único, ele precisa de `npm install` antes de rodar ou editar.

## Pré-requisitos

- Node.js instalado (versão 18 ou superior). Para checar se já tem:
  ```bash
  node -v
  ```
  Se não tiver, baixe em https://nodejs.org (escolha a versão LTS).

## Passo a passo

1. **Abra a pasta no VS Code**
   `Arquivo > Abrir Pasta` → selecione a pasta `calculadora-honorarios-lp`

2. **Abra o terminal integrado do VS Code**
   Menu `Terminal > Novo Terminal`

3. **Instale as dependências** (só precisa fazer isso uma vez, ou sempre que
   o `package.json` mudar):
   ```bash
   npm install
   ```
   Isso vai criar uma pasta `node_modules` (não mexer nela, não subir pro
   GitHub — já está no `.gitignore`).

4. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O terminal vai mostrar um endereço tipo `http://localhost:5173` — abra
   esse link no navegador. Qualquer alteração que você salvar em um arquivo
   `.jsx` aparece na hora, sem precisar recarregar a página manualmente.

5. **Quando terminar de editar, pare o servidor** com `Ctrl + C` no terminal.

## Gerando a versão de produção (build)

Antes de subir pro ar (Vercel, GitHub, etc.), sempre rode:

```bash
npm run build
```

Isso cria uma pasta `dist/` com os arquivos finais, otimizados e prontos
para deploy. Se esse comando rodar sem erros, o projeto está pronto para
publicar.

Para conferir como o build final se comporta antes de publicar:

```bash
npm run preview
```

## Resumo dos comandos

| Comando           | Para que serve                                    |
|--------------------|----------------------------------------------------|
| `npm install`      | Instala as dependências (rodar uma vez)             |
| `npm run dev`      | Servidor local com hot-reload, para editar           |
| `npm run build`    | Gera a versão de produção na pasta `dist/`           |
| `npm run preview`  | Visualiza a versão de produção localmente            |

## Problemas comuns

- **"npm: comando não encontrado"** → Node.js não está instalado ou não
  está no PATH. Reinstale o Node.js e reinicie o terminal.
- **Erro ao rodar `npm install`** → apague a pasta `node_modules` e o
  arquivo `package-lock.json` (não o do repositório — só se já tiver rodado
  antes e travado), e rode `npm install` de novo.
- **Página em branco depois do build** → confira se rodou `npm run build`
  sem erros no terminal antes de fazer o deploy.
