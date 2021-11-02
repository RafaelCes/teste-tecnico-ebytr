const taskRoute = require('express').Router();

const taskController = require('../controllers/taskController');
const authenticator = require('../middlewares/auth');

taskRoute.post('/', authenticator, taskController.createTask);

module.exports = taskRoute;