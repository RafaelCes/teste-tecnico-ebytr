const taskModel = require('../models/taskModel');

const checkPermission = async (id, userID) => {
  const task = await taskModel.getTaskById(id);

  if (!task) return 'task not found';
  if (task.userID.toString() !== userID) {
    return 'permission not granted';
  }
  return null;
};

const createTask = async (body, userID) => taskModel.createTask(body, userID);

const getAllTasksByUser = async (userID) => taskModel.getAllTasksByUser(userID);

const updateTask = async (id, body, userID) => {
  const permission = await checkPermission(id, userID);

  if (permission) return permission;

  return taskModel.updateTask(id, body);
};

const deleteTask = async (id, userID) => {
  const permission = await checkPermission(id, userID);

  if (permission) return permission;

  return taskModel.deleteTask(id);
};

module.exports = {
  createTask,
  getAllTasksByUser,
  updateTask,
  deleteTask,
};