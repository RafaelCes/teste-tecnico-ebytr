const joi = require('joi');

const taskService = require('../services/taskService');

const validateRequest = (body) => {
  const { error } = joi.object({
    title: joi.string().max(40).required(),
    description: joi.string().required(),
    status: joi.string().required(),
  }).validate(body);
  return error;
};

const createTask = async (req, res, next) => {
  const { body } = req;
  const { userID } = req.user;

  const error = validateRequest(body);

  if (error) return next('Invalid entries. Try again.');

  const response = await taskService.createTask(body, userID);

  res.status(201).json(response);
};

const getAllTasksByUser = async (req, res) => {
  const { userID } = req.user;

  const response = await taskService.getAllTasksByUser(userID);

  res.status(200).json(response);
};

const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { userID } = req.user;
  const { body } = req;

  const error = validateRequest(body);

  if (error) return next('Invalid entries. Try again.');

  const response = await taskService.updateTask(id, body, userID);

  if (typeof response === 'string') return next(response);

  res.status(200).json(response);
};

const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  const { userID } = req.user;

  const response = await taskService.deleteTask(id, userID);

  if (typeof response === 'string') return next(response);

  res.status(204).json(response);
};

module.exports = {
  createTask,
  getAllTasksByUser,
  updateTask,
  deleteTask,
};