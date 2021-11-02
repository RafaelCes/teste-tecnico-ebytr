const { ObjectId } = require('mongodb');

const mongoConnection = require('./connections');

const createTask = async ({ title, description, status }, userID) => {
  const taskCollection = await mongoConnection.getConnection()
  .then((db) => db.collection('users'));
  
  const { insertedId } = await taskCollection
  .insertOne({ title, description, status, date: new Date(), userID: ObjectId(userID) });
  
  return { user: {
    title,
    description,
    status,
    userID: ObjectId(userID),
    id: insertedId,
    },
  };
};

const getAllTasksByUser = async (userID) => {
  const taskCollection = await mongoConnection.getConnection()
  .then((db) => db.collection('users'));

  const tasks = await taskCollection
  .find({userID: ObjectId(userID)})
  .toArray();

  return tasks;
}

module.exports = {
  createTask,
  getAllTasksByUser,
}