const userModel = require('../models/userModel');

const createUser = async (body) => {
  const itExists = await userModel.checkEmail(body);
  
  if (itExists) {
 return 'Email already registered';
}
  return userModel.createUser(body);
};

module.exports = {
  createUser,
};