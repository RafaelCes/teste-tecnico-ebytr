const mongoConnection = require('./connections');

const createUser = async ({ name, email, password }) => {
  const userCollection = await mongoConnection.getConnection()
  .then((db) => db.collection('users'));
  
  const { insertedId } = await userCollection
  .insertOne({ name, email, password, role: 'user' });
  
  return { user: {
    name,
    email,
    role: 'user',
    _id: insertedId,
  },
};
};

const checkEmail = async ({ email }) => {
  const userCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('users'));

    const user = await userCollection
    .findOne({ email });

    return user;
};

const readUser = async ({ email, password }) => {
  const userCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('users'));

    const user = await userCollection
    .findOne({ email, password });

    return user;
};

module.exports = {
  checkEmail,
  createUser,
  readUser,
};