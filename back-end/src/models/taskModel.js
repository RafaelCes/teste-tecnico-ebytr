const { ObjectId } = require('mongodb');

const mongoConnection = require('./connections');

const createTask = async ({ title, description, status }, userID) => {
  const taskCollection = await mongoConnection.getConnection()
  .then((db) => db.collection('tasks'));
  
  const { insertedId } = await taskCollection
  .insertOne({ title, description, status, date: new Date(), userID: ObjectId(userID) });
  
  return {
    title,
    description,
    status,
    userID: ObjectId(userID),
    id: insertedId,
  };
};

const getAllTasksByUser = async (userID) => {
  const taskCollection = await mongoConnection.getConnection()
  .then((db) => db.collection('tasks'));

  const tasks = await taskCollection
  .find({ userID: ObjectId(userID) })
  .toArray();

  return tasks;
};

const getTaskById = async (id) => {
  const taskCollection = await mongoConnection.getConnection()
  .then((db) => db.collection('tasks'));

  const task = await taskCollection
  .findOne({ _id: ObjectId(id) });

  return task;
};

const updateTask = async (id, { title, description, status }) => {
  const taskCollection = await mongoConnection.getConnection()
  .then((db) => db.collection('tasks'));

  await taskCollection
  .updateOne({ _id: ObjectId(id) },
  { $set: { title, description, status } });

  return {
    title,
    description,
    status,
  };
};

const deleteTask = async (id) => {
  const taskCollection = await mongoConnection.getConnection()
  .then((db) => db.collection('tasks'));

  await taskCollection
  .deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  createTask,
  getAllTasksByUser,
  getTaskById,
  updateTask,
  deleteTask,
};