# Orasis Challenge - Dashboard de Métricas

Dashboard interativo de métricas de usuários desenvolvido com Next.js 15, React 19 e Material-UI, demonstrando boas práticas de desenvolvimento frontend com TypeScript, testes unitários e tratamento robusto de erros.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando a Aplicação](#executando-a-aplicação)
- [Executando os Testes](#executando-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Cenários de Teste](#cenários-de-teste)

## 🎯 Sobre o Projeto

Este projeto é um dashboard de métricas que exibe informações sobre usuários, incluindo:
- Métricas gerais (total de usuários, usuários ativos, inativos e administradores)
- Gráfico de distribuição de usuários por região
- Lista dos últimos usuários cadastrados
- Sistema de autenticação e controle de permissões por role (admin/viewer)

O projeto demonstra implementações avançadas de:
- Tipagem forte com TypeScript
- Gerenciamento de estado assíncrono com TanStack Query
- Tratamento de erros com Error Boundaries
- Componentes com Suspense e Skeleton Loading
- Testes unitários com Jest e React Testing Library

## 🚀 Tecnologias Utilizadas

### Core
- **[Next.js 15.5.4](https://nextjs.org/)** - Framework React com SSR e SSG
- **[React 19.1.0](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Turbopack](https://turbo.build/pack)** - Bundler de última geração para desenvolvimento rápido

### UI e Estilização
- **[Material-UI (MUI) 7.3.3](https://mui.com/)** - Biblioteca de componentes React
  - `@mui/material-nextjs` - Integração otimizada com Next.js
  - `@mui/icons-material` - Biblioteca de ícones Material
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
  - `tailwind-merge` - Utilitário para merge de classes Tailwind
- **[Recharts 3.2.1](https://recharts.org/)** - Biblioteca de gráficos para React

### Gerenciamento de Estado e Dados
- **[TanStack Query 5.90.2](https://tanstack.com/query)** - Gerenciamento de estado assíncrono e cache
- **[React Error Boundary 6.0.0](https://github.com/bvaughn/react-error-boundary)** - Tratamento de erros em componentes

### Testes
- **[Jest 30.2.0](https://jestjs.io/)** - Framework de testes JavaScript
- **[React Testing Library 16.3.0](https://testing-library.com/react)** - Biblioteca para testes de componentes React
- **[@testing-library/jest-dom 6.9.1](https://github.com/testing-library/jest-dom)** - Matchers customizados para Jest
- **[jest-environment-jsdom 30.2.0](https://jestjs.io/)** - Ambiente DOM para testes

### Qualidade de Código
- **[ESLint 9](https://eslint.org/)** - Linter JavaScript/TypeScript
  - `eslint-config-next` - Configuração específica para Next.js
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipagem estática e verificação de tipos

## ✨ Funcionalidades

### 1. Dashboard de Métricas
- Visualização de métricas principais em cards informativos
- Gráfico de barras mostrando distribuição de usuários por região (RJ, SP, MG)
- Tabela com os 10 últimos usuários cadastrados

### 2. Controle de Acesso
- Sistema de roles (admin/viewer)
- Validação de autenticação
- Permissões diferenciadas por tipo de usuário

### 3. Tratamento de Erros
- Error Boundary para captura de erros de renderização
- Validação de dados com feedback visual
- Mensagens de erro amigáveis ao usuário

### 4. Performance
- Lazy loading com Suspense
- Skeleton screens durante carregamento
- Cache de requisições com TanStack Query
- Otimização com Turbopack

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 20 ou superior)
- **npm**, **yarn** ou **bun** (gerenciador de pacotes)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone git@github.com:fabiocnog/orasis-challenge.git
cd orasis-challenge
```

2. Instale as dependências:
```bash
npm install
# ou
bun install
```

3. Crie o arquivo `.env` na raiz do projeto:
```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## ▶️ Executando a Aplicação

### Modo de Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
bun run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

A aplicação iniciará com Turbopack habilitado para builds mais rápidas.

### Build de Produção

Para criar uma build otimizada:

```bash
npm run build
npm run start
# ou
bun run build
bun run start
```

## 🧪 Executando os Testes

Execute todos os testes:

```bash
npm run test
# ou
bun run test
```

Os testes cobrem:
- Componentes de UI (Card, CardTitle, Avatar, NavItem)
- Componentes de dashboard (TopCard, LastUsersCard)
- Validação de tipos TypeScript
- Serviços de API

## 📁 Estrutura do Projeto

```
orasis-challenge/
├── src/
│   ├── __mocks__/              # Dados mockados para testes e desenvolvimento
│   │   └── dashboard-data.ts   # Mock de dados do dashboard
│   ├── app/
│   │   ├── api/
│   │   │   └── dashboard/
│   │   │       └── route.ts    # API route do Next.js
│   │   ├── components/
│   │   │   ├── dashboard/      # Componentes específicos do dashboard
│   │   │   │   ├── DashboardContent.tsx
│   │   │   │   ├── DashboardErrorBoundary.tsx
│   │   │   │   ├── DashboardSkeleton.tsx
│   │   │   │   ├── LastUsersCard.tsx
│   │   │   │   ├── RegionChartCard.tsx
│   │   │   │   └── TopCard.tsx
│   │   │   ├── layout/         # Componentes de layout
│   │   │   │   ├── Content.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── MainNav.tsx
│   │   │   │   ├── NavItem.tsx
│   │   │   │   └── PageHeader.tsx
│   │   │   └── ui/             # Componentes reutilizáveis de UI
│   │   │       ├── Avatar.tsx
│   │   │       ├── Card.tsx
│   │   │       └── CardTitle.tsx
│   │   ├── hooks/              # Custom hooks
│   │   │   └── useCountUp.tsx
│   │   │   └── useDashboardQuery.tsx
│   │   ├── providers/          # Context providers
│   │   │   └── QueryProvider.tsx
│   │   ├── types/              # Tipos TypeScript
│   │   │   └── user.ts         # Tipos de usuário e dados relacionados
│   │   ├── services/           # Serviços de API
│   │   │   └── dashboard.ts    # Serviço de dashboard com validação
│   │   ├── globals.css         # Estilos globais
│   │   ├── layout.tsx          # Layout raiz
│   │   └── page.tsx            # Página principal
│   └── ...
├── public/                     # Arquivos estáticos
│   └── logo-tesla.svg
├── jest.config.ts              # Configuração do Jest
├── jest.setup.ts               # Setup do Jest
├── next.config.ts              # Configuração do Next.js
├── tsconfig.json               # Configuração do TypeScript
├── prettier.config.js          # Configuração do Prettier
├── eslint.config.mjs           # Configuração do ESLint
└── package.json
```

## 🎭 Cenários de Teste

A aplicação suporta três cenários diferentes através do parâmetro `role` na URL:

### 1. Usuário Admin (Dados Válidos)
```
http://localhost:3000?role=valid
```
- Exibe todos os dados completos
- Usuário autenticado com role "admin"
- Todas as métricas disponíveis

### 2. Dados Inválidos
```
http://localhost:3000?role=invalid
```
- Simula resposta com dados inválidos
- Ativa o Error Boundary
- Demonstra tratamento de erros

### 3. Usuário Viewer (Acesso Limitado)
```
http://localhost:3000?role=viewer
```
- Usuário autenticado com role "viewer"
- Dados parciais (alguns campos podem estar ausentes)
- Demonstra controle de permissões

### 4. Atualização de dados em tempo real

- Ao alterar o arquivo [dashboard-data.ts](src/__mocks__/dashboard-data.ts), o dashboard será atualizado automaticamente através do cache do TanStack Query utilizando a propriedade `refetchInterval`.

## 🔍 Lint

Para verificar problemas de código:

```bash
npm run lint
# ou
bun run lint
```

## 📝 Notas Adicionais

- A aplicação utiliza **Turbopack** para builds mais rápidas em desenvolvimento e produção
- O projeto está configurado com **"use client"** para funcionalidades interativas
- Imagens de avatar são carregadas do serviço [pravatar.cc](https://i.pravatar.cc)
- O sistema de cache do TanStack Query mantém os dados por 5 minutos
- Error boundaries capturam erros de validação e exibem mensagens amigáveis
- Validação de dados robusta com TypeScript tipos customizados (`UserType` e `RawUserType`)

## 🏗️ Arquitetura

### Fluxo de Dados

1. **API Route** ([/api/dashboard/route.ts](src/app/api/dashboard/route.ts)) - Retorna dados mockados baseados no parâmetro `role`
2. **Service Layer** ([dashboard.ts](src/app/services/dashboard.ts)) - Busca dados da API e valida/transforma usando TypeScript
3. **Custom Hook** ([useDashboardQuery.tsx](src/app/hooks/useDashboardQuery.tsx)) - Gerencia estado com TanStack Query
4. **Components** - Renderizam dados validados com tratamento de erro

### Validação de Dados

A validação é feita através de:
- **Tipos TypeScript** (`UserType` e `RawUserType`) para garantir type safety
- **Validação manual** no service layer para transformar dados da API
- **Error boundaries** para capturar erros de renderização

---

Desenvolvido como parte do desafio técnico Orasis
