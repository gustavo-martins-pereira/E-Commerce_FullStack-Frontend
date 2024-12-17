# Frontend do E-Commerce FullStack

Frontend desenvolvido para o E-commerce *FullStack*, utilizando **React** para criar a interface e gerenciar a interação com o usuário.

## Sumário

- [Tecnologias Usadas](#-tecnologias-usadas)
- [Instalação](#-instalação)
- [Estrutura do Projeto](#-estrutura-do-projeto)

## &#x1F5A5; Tecnologias Usadas

<img alt="Javascript Logo" height="60" width="60" src="./readme/html.svg" />&nbsp;
<img alt="Javascript Logo" height="60" width="60" src="./readme/css.svg" />&nbsp;
<img alt="Javascript Logo" height="60" width="60" src="./readme/javascript.svg" />&nbsp;
<img alt="React Logo" height="60" width="60" src="./readme/react.svg" />&nbsp;
<img alt="Tailwind CSS Logo" height="60" width="60" src="./readme/tailwindcss.svg" />&nbsp;
<img alt="Axios Logo" height="60" width="60" src="./readme/axios.svg" />&nbsp;
<img alt="Vite Logo" height="60" width="60" src="./readme/vite.svg" />&nbsp;

## &#x2699; Instalação

Instruções para configurar o projeto localmente.

### Pré-requisitos

- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

> &#x26A0; A versão do **Node.js** usada para este projeto foi **v20.16.0**. Certifique-se de estar usando essa versão para evitar incompatibilidades. Caso tenha **NVM** instalado, siga os passos abaixo para instalar a versão correta:

```bash
# Instala o NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Baixa e instala a versão do Node.js usada no projeto
nvm install 20.16.0

# Verifica a versão instalada
node -v # deve retornar `v20.15.1`

# Verifica a versão do NPM
npm -v
```

### Passos
1. Clone o repositório:
```sh
git clone https://github.com/gustavo-martins-pereira/E-Commerce_FullStack-Frontend.git
```

2. Acesse o diretório do projeto:
```sh
cd E-Commerce_FullStack-Frontend
```

3. Instale as dependências:
```sh
npm install

# ou com Yarn
yarn install
```

4. Configure os .env necessários:

***.env***
```env
VITE_API_URL=http://localhost:3000
```

> Caso você queira fazer deploy e utilizar outra URL de backend, configure este .env também

***.env.production***
```env
VITE_API_URL=http://localhost:3000
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou com Yarn
yarn dev
```

Isso iniciará o projeto em modo de desenvolvimento, e o site estará disponível em http://localhost:5173/.

## &#x1F4C1; Estrutura do Projeto

```
/public
/src
├── /api
├── /assets
├── /components
│   ├── /component
├── /pages
│   ├── /page
├── /utils
.gitignore
package-lock.json
package.json
readme.md
vite.config.js
```
