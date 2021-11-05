const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /login', () => {
  describe('Quando as credenciais estão incorretas',() => {
    let response;
        const DBServer = new MongoMemoryServer();

        before(async () => {
            const connectionMock = await DBServer.getUri()
            .then(URLMock => MongoClient.connect(
                URLMock,
                { useNewUrlParser: true, useUnifiedTopology: true }
            ));

            sinon.stub(MongoClient, 'connect')
                .resolves(connectionMock);


        response = await chai.request(server)
          .post('/login')
          .send({
            email: 'teste@email.com',
            password: 'senhateste',
          });
          console.log(response.body);
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

  // describe('Quando o login é efetuado com sucesso', () => {
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
  //         .post('/login')
  //         .send({
  //           email: 'teste@email.com',
  //           password: 'senhateste',
  //         });
  //         console.log(response.body);
  //   });

  //   after(async function () {
  //     MongoClient.connect.restore();
  //     await DBServer.stop();
  //   });
    
  //   it('Espera o codigo de status 400', function () {
  //     expect(response).to.have.status(400);
  //   });
  //   it('retorna um objeto', function () {
  //     expect(response.body).to.be.a('object');
  //   });
    
  //   it('o objeto possui a propriedade "message"', function () {
  //     expect(response.body).to.have.property('message');
  //   });
    
  //   it('a propriedade "message" possui o texto "Invalid entries. Try again."',
  //   function () {
  //     expect(response.body.message)
  //     .to.be.equal('Invalid entries. Try again.');
  //   });

  // });
});



