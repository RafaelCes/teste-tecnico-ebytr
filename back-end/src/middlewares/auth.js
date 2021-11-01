const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

 module.exports = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) return next('missing auth token');

  try {
    const payload = jwt.verify(token, JWT_SECRET);
 
    req.user = payload;
    return next();
  } catch (err) {
    return next('jwt malformed');
  }
 };