# Desafio-Ebytr

## Sumário

- [Desafio-Ebytr](#desafio-ebytr)
  - [Sumário](#sumário)
  - [Contexto](#contexto)
  - [Requisitos e funcionalidades](#Requisitos-e-funcionalidades)
  - [Tecnologias](#tecnologias)
  - [Funcionamento](#funcionamento)
  - [Dependências](#dependências)
    - [Frontend](#frontend)
    - [backend](#backend)

## Contexto

Este projeto faz parte de um teste tecnico para o processo de seleção da empresa Ebytr

A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.

Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.

Na Ebytr o time de desenvolvimento utiliza a Stack MERN para criar suas aplicações. Foi combinado com a Ebytr que você utilizará essa mesma Stack para resolver o problema de organização e produtividade da empresa.

## Requisitos e funcionalidades

Requisitos técnicos:

- Front-End em React;
- Back-End em NodeJS, com MongoDB;
- Arquitetura em camadas;

Funcionalidades:

- Visualizar a lista de tarefas;
- Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
- Inserir uma nova tarefa na lista;
- Remover uma tarefa da lista;
- Atualizar uma tarefa da lista;
- A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

## Tecnologias

- MongoDb
- Express
- React
- Node

## Funcionamento

1. Clonar o Repositório
- `git clone git@github.com:Thiagofox/Desafio-Ebytr.git`
- Entre na pasta do repositório que acabou de ser clonado
  - `cd Desafio-Ebytr/`

2. É Preciso ter o mongoDB instalado na maquina e sua instância inicada
     - `sudo service mongod start`


3. A partir daqui você precisará de dois terminais um na pasta backend e outro na pasta frontend

4. Acesse a pasta backend
    - `cd backend/`
  
- Use o comando npm install
    - `npm install`
  
- Rode o comando npm run dev
    - `npm run dev`

5. Em outro terminal acesse a pasta fronted
    - `cd frontend/`
  
- Use o comando npm install
    - `npm install`

- Rode o comando npm start
    - `npm start`
  

6. A aplicação irá rodar no seu webBrowser

7. Para rodar os tests basta estar em um terminal na pasta correspondente e rodar o comando npm test
    - `npm test`
   
## Dependências

### Frontend 

  dependencies: 

    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "eslint-config-trybe-frontend": "^1.2.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"



### backend

  dependencies

    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "joi": "^17.4.2",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^4.1.3",
    "nodemon": "^2.0.14"