const mongoConnection = require('./connections');

const createTask = async ({ title, description, status }, userID) => {
  const taskCollection = await mongoConnection.getConnection()
  .then((db) => db.collection('users'));
  
  const { insertedId } = await taskCollection
  .insertOne({ title, description, status, date: new Date(), userID });
  
  return { user: {
    title,
    description,
    status,
    userID,
    _id: insertedId,
    },
  };
};

module.exports = {
  createTask,
}