const joi = require('joi');

const loginService = require('../services/loginService');

const validateRequest = (body) => {
  const { error } = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
  }).validate(body);
  return error;
};

const userLogin = async (req, res, next) => {
 try {
  const { body } = req;
  
  const error = validateRequest(body);

  if (error) return next('All fields must be filled');

  const token = await loginService.validateLogin(body);

  if (!token) return next('Incorrect username or password');

  res.status(200).json({ token });
 } catch (error) {
   res.status(500).json({ message: 'internal server error' });
 }
};

module.exports = { 
  userLogin,
};