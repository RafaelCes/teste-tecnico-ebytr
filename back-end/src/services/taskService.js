const taskModel = require('../models/taskModel');

const createTask = async (body, userID) => {
  return taskModel.createTask(body, userID);
}

module.export = {
  createTask,
}