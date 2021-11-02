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

const createTask = async (req,res,next) => {
  const { body } = req;
  const { userID } = req.user;

  const error = validateRequest(body);

  if (error) return next('Invalid entries. Try again.');

  const response = await taskService.createTask(body, userID)

  res.status(201).json(response);
};

module.exports = {
  createTask,
};