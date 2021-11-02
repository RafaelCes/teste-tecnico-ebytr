const taskModel = require('../models/taskModel');

const createTask = async (body, userID) => taskModel.createTask(body, userID);

const getAllTasksByUser = async (userID) => taskModel.getAllTasksByUser(userID);

module.exports = {
  createTask,
  getAllTasksByUser,
};