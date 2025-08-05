# 🤖 LetMeAsk Agents

Uma aplicação fullstack moderna para gerenciamento de agentes inteligentes, construída com tecnologias atuais e boas práticas de desenvolvimento.

## 📋 Sobre o Projeto

Este projeto é uma aplicação fullstack que permite criar, gerenciar e interagir com agentes inteligentes. A arquitetura é dividida em duas partes principais:

- **Backend (Server)** - API REST robusta com Node.js e TypeScript
- **Frontend (Client)** - Interface web moderna com React e Vite

## 🛠️ Stack Tecnológica

### Backend (Server)
- **Runtime**: Node.js com TypeScript
- **Framework**: Fastify (API REST de alta performance)
- **Banco de Dados**: PostgreSQL com pgvector (para embeddings)
- **ORM**: Drizzle ORM (type-safe database queries)
- **Validação**: Zod (schema validation)
- **CORS**: @fastify/cors
- **Linting**: Biome
- **Containerização**: Docker Compose

### Frontend (Client)
- **Framework**: React 19 com TypeScript
- **Build Tool**: Vite 
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + Lucide React
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Linting**: Biome

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ 
- Docker e Docker Compose
- Yarn ou npm

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd letmeask-agents
```

### 2. Configurar o Backend

```bash
# Navegar para a pasta do servidor
cd server

# Instalar dependências
yarn install

# Configurar variáveis de ambiente
cp .env.example .env
# Editar o arquivo .env com suas configurações

# Iniciar o banco de dados com Docker
docker-compose up -d

# Executar seeds do banco (se necessário)
yarn db:seed

# Iniciar o servidor em modo desenvolvimento
yarn dev
```

### 3. Configurar o Frontend

```bash
# Em outro terminal, navegar para a pasta do cliente
cd client

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

### 4. Acessar a aplicação
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **Banco de dados**: localhost:5432

## 📁 Estrutura do Projeto

```
letmeask-agents/
├── server/                 # Backend API
│   ├── src/
│   │   ├── db/           # Configurações do banco de dados
│   │   ├── http/         # Rotas e controllers
│   │   ├── env.ts        # Configurações de ambiente
│   │   └── server.ts     # Servidor principal
│   ├── docker/           # Configurações Docker
│   ├── drizzle.config.ts # Configuração do Drizzle
│   └── docker-compose.yml
├── client/                # Frontend React
│   ├── src/
│   │   ├── components/   # Componentes React
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── lib/          # Utilitários e configurações
│   │   └── assets/       # Recursos estáticos
│   └── vite.config.ts    # Configuração do Vite
└── README.md
```

## 🔧 Scripts Disponíveis

### Backend (server/)
```bash
yarn dev          # Inicia o servidor em modo desenvolvimento
yarn start        # Inicia o servidor em produção
yarn db:seed      # Executa seeds do banco de dados
yarn migrate      # Roda as migrations existentes
```

### Frontend (client/)
```bash
npm run dev       # Inicia o servidor de desenvolvimento
npm run build     # Gera build de produção
npm run preview   # Preview do build de produção
```

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL com a extensão pgvector para suporte a embeddings vetoriais. O banco é configurado via Docker Compose:

- **Imagem**: pgvector/pgvector:pg17
- **Porta**: 5432
- **Database**: letmeask
- **ORM**: Drizzle ORM com migrations automáticas

## 🔐 Variáveis de Ambiente

### Backend (.env)
```env
DATABASE_URL=postgresql://root:root@localhost:5432/letmeask
PORT=3000
NODE_ENV=development
```

## 📚 Documentação da API

A API inclui uma coleção do Postman para testes:
- Arquivo: `server/Letme Ask Agents REST.postman_collection.json`

## 🎯 Funcionalidades Principais

- ✅ API REST com Fastify
- ✅ Banco de dados PostgreSQL com pgvector
- ✅ Interface web moderna com React
- ✅ TypeScript em toda a stack
- ✅ Validação de dados com Zod
- ✅ ORM type-safe com Drizzle
- ✅ Containerização com Docker
- ✅ Linting e formatação com Biome

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido com ❤️ usando tecnologias modernas e boas práticas de desenvolvimento.
