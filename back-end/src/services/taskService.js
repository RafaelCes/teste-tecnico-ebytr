const taskModel = require('../models/taskModel');

const checkPermission = async(id, userID) => {
  const task = await taskModel.getTaskById(id);

  if (!task) return 'task not found';
  if (task.userId.toString() !== userID) {
    return 'permission not granted';
  }
  return null;
};


const createTask = async (body, userID) => taskModel.createTask(body, userID);

const getAllTasksByUser = async (userID) => taskModel.getAllTasksByUser(userID);

const updateTask = async (id, body, userID) => {

}

module.exports = {
  createTask,
  getAllTasksByUser,
  updateTask,
};