const mongoConnection = require('./connections');

const createTask = async ({ title, description, status }) => {
  const taskCollection = await mongoConnection.getConnection()
  .then((db) => db.collection('users'));
  
  const { insertedId } = await taskCollection
  .insertOne({ title, description, status, date: new Date() });
  
  return { user: {
    title,
    description,
    status,
    _id: insertedId,
    },
  };
};

module.exports = {
  createTask,
}