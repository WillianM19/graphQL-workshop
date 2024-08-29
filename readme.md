# Oficina - GraphQL

Este projeto é uma API GraphQL personalizada para armazenar informações sobre seu portfólio, incluindo experiências profissionais, projetos, habilidades e outros detalhes relevantes. A API permite realizar consultas (queries) e alterações (mutations) em um servidor backend, enquanto o frontend exibe as informações dinamicamente.

## Tecnologias Utilizadas

- Backend:
  - Node.js
  - Apollo Server (GraphQL)
  - TypeScript

- Frontend:
  - React
  - Apollo Client
  - Vite (como bundler e ferramenta de desenvolvimento)

## Configuração e Execução

### Pré-requisitos

- Node.js (v14 ou superior)
- NPM ou Yarn

### Passos para Executar o Backend

1. Navegue até o diretório do backend:

  ```bash
    cd backend
  ```

2. Instale as dependências:

  ```bash
    npm install
  ```

  ou, se estiver usando Yarn:

  ```bash
    yarn
  ```

3. Inicie o servidor GraphQL:

  ```bash
    npm run dev:test
  ```

  ou, se estiver usando Yarn:

  ```bash
    yarn dev:test
  ```

O servidor estará em execução em http://localhost:4000/. Você pode acessar o GraphQL, uma interface de teste para consultas GraphQL, nessa URL.

### Passos para Executar o Frontend

1. Navegue até o diretório do frontend:

  ```bash
    cd frontend
  ```

2. Instale as dependências:

  ```bash
    npm install
  ```

  ou, se estiver usando Yarn:

  ```bash
    yarn
  ```

1. Inicie o servidor react:

  ```bash
    npm run dev
  ```

  ou, se estiver usando Yarn:

  ```bash
    yarn dev
  ```

Abra o navegador e acesse http://localhost:5173/ para ver a aplicação React em execução.
