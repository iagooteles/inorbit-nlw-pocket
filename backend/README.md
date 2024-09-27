# Inorbit - NLW Pocket

## Projeto Backend

Este projeto foi desenvolvido durante a semana da **NLW Pocket** da **Rocketseat** com o objetivo de aprimorar minhas habilidades tanto no **Frontend** quanto no **Backend**. O projeto é uma aplicação de **ToDo List** personalizada, onde o usuário pode cadastrar e gerenciar suas metas diárias e semanais de forma intuitiva.

A interface permite que as metas sejam registradas por meio de um modal ao clicar no botão **"Cadastrar meta"**, e o usuário pode marcar as atividades como concluídas ao longo da semana. Quando todas as execuções de uma meta são completadas, o botão correspondente é desabilitado.

## Recomendação
Para o funcionamento adequado do projeto, **execute o backend antes do frontend**.

### Backend
- **Node.js**
- **Fastify**
- **Drizzle-Kit**
- **PostgreSQL**
- **Docker**

### Como executar:

# Projeto Backend

Primeiro execute o Backend do projeto, desenvolvido utilizando [Fastify](https://www.fastify.io/), [Drizzle-ORM](https://github.com/drizzle-team/drizzle-orm) e [Docker](https://www.docker.com/).

## Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/iagooteles/inorbit-nlw-pocket.git
cd inorbit-nlw-pocket/backend
```

Depois disso execute:
```bash
npm install
```

### 2. Configure as variáveis de ambiente
Crie seu arquivo .env no diretório backend e adicione:

DATABASE_URL="postgresql://docker:docker@localhost:5432/inorbit"

### 3. Configuração do banco de dados com Docker
Este projeto utiliza PostgreSQL como banco de dados. Para configurar e rodar o banco de dados localmente, siga os passos abaixo:

#### 3.1 Suba o container do PostgreSQL com Docker
Certifique-se de que o Docker está rodando em sua máquina e execute o seguinte comando para criar e rodar o container do PostgreSQL:

```bash
docker-compose up -d
```
Este comando irá subir o banco de dados configurado no docker-compose.yml.

Você pode conferir se o conteiner está rodando usando: 
```bash
docker ps
```

#### 3.2 Crie as migrações
Gere as migrações utilizando o Drizzle-Kit:

```bash
npm run generate
```

Em seguida, aplique as migrações no banco de dados:

```bash
npm run migrate
```

### 4. Popule o banco de dados
Para popular o banco de dados com dados iniciais (seed), execute o seguinte comando:

```bash
npm run seed
```

### 5. Execute o Servidor
```bash
npm run dev
```

Agora, o servidor estará rodando e as rotas estarão disponíveis em http://localhost:3333.