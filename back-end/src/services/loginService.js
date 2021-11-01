const jwt = require('jsonwebtoken');
require('dotenv').config();

const userModel = require('../models/userModel');

const { JWT_SECRET } = process.env;

const validateLogin = async (req) => {
  const user = await userModel.readUser(req);

  if (!user) return null;
  const { _id: userId } = user;
  const payload = {
    userId,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, JWT_SECRET);

  return token;
};

module.exports = {
  validateLogin,
};