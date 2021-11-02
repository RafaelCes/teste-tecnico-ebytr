const taskModel = require('../models/taskModel');

const createTask = async (body, userID) => {
  return taskModel.createTask(body, userID);
};

const getAllTasksByUser = async (userID) => {
  return taskModel.getAllTasksByUser(userID);
}

module.exports = {
  createTask,
  getAllTasksByUser,
}