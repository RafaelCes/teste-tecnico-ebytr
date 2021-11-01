module.exports = (err, _req, res, _next) => {
  const code = {
    'Invalid entries. Try again.': 400,
    'Email already registered': 409,
    // 'All fields must be filled': 401,
    // 'Incorrect username or password': 401,
    // 'jwt malformed': 401,
    // 'recipe not found': 404,
    // 'missing auth token': 401,
    // 'permission not granted': 403,
    // 'Internal server error': 500,
  };

  return res.status(code[err] || 500).json({
    message: err,
  });
};