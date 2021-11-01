const joi = require('joi');

const taskService = require('../services/taskService');

const validateRequest = (body) => {
  const { error } = joi.object({
    name: joi.string().required(),
    ingredients: joi.string().required(),
    preparation: joi.string().required(),
  }).validate(body);
  return error;
};

const createTask = async (req,res,next) => {

}