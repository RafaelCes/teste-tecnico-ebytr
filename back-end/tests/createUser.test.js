const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /users', function () {
  describe('Quando não são enviados os parametros', function () {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async function () {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true });

        sinon.stub(MongoClient, 'connect')
          .resolves(connectionMock);

        response = await chai.request(server)
          .post('/users')
          .send({});
    });

    after(async function () {
      MongoClient.connect.restore();
      await DBServer.stop();
    });
    
    it('Espera o codigo de status 400', function () {
      expect(response).to.have.status(400);
    });
    it('retorna um objeto', function () {
      expect(response.body).to.be.a('object');
    });
    
    it('o objeto possui a propriedade "message"', function () {
      expect(response.body).to.have.property('message');
    });
    
    it('a propriedade "message" possui o texto "Invalid entries. Try again."',
    function () {
      expect(response.body.message)
      .to.be.equal('Invalid entries. Try again.');
    });
  });

  // describe('Quando o email enviado já está cadastrado', function () {
  //   let response = {};
  //   const DBServer = new MongoMemoryServer();

  //   before(async function () {
  //     const URLMock = await DBServer.getUri();
  //     const connectionMock = await MongoClient.connect(URLMock,
  //       { useNewUrlParser: true, useUnifiedTopology: true });

  //       sinon.stub(MongoClient, 'connect')
  //         .resolves(connectionMock);

  //       await connectionMock.db('todoList')
  //         .collection('users')
  //         .insertOne({
  //           name: 'teste',
  //           email: 'teste@email.com',
  //           password: 'senhateste',
  //         });
          

  //       response = await chai.request(server)
  //         .post('/users')
  //         .send({
  //           name: 'teste',
  //           email: 'teste@email.com',
  //           password: 'senhateste',
  //         });
  //   });

  //   after(async function () {
  //     MongoClient.connect.restore();
  //     await DBServer.stop();
  //   });

  //   it('Espera o codigo de status 409', function () {
  //     expect(response).to.have.status(409);
  //   });
  //   it('retorna um objeto', function () {
  //     expect(response.body).to.be.a('object');
  //   });
    
  //   it('o objeto possui a propriedade "message"', function () {
  //     expect(response.body).to.have.property('message');
  //   });
    
  //   it('a propriedade "message" possui o texto "Email already registered"',
  //   function () {
  //     expect(response.body.message)
  //     .to.be.equal('Email already registered');
  //   });
  // });

  describe('quando é criado com sucesso', function () {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async function () {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true });

        sinon.stub(MongoClient, 'connect')
          .resolves(connectionMock);

        response = await chai.request(server)
          .post('/users')
          .send({
            name: 'teste',
            email: 'teste@email.com',
            password: 'senhateste',
          });   
          
    });

    after(async function () {
      MongoClient.connect.restore();
      await DBServer.stop();
      
  });

    it('retorna o código de status 201', function () {
        expect(response).to.have.status(201);
    });

    it('retorna um objeto', function () {
        expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', function () {
        expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o texto "New user created"',
        function () {
            expect(response.body.message)
                .to.be.equal('New user created');
        });
  });

});

/* codigo adaptado do course da trybe (www.trybe.com) bloco 27.3 testando API com teste de integração */