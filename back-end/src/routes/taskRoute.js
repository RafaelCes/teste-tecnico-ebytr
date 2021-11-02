const taskRoute = require('express').Router();

const taskController = require('../controllers/taskController');
const authenticator = require('../middlewares/auth');

taskRoute.post('/', authenticator, taskController.createTask);
taskRoute.get('/', authenticator, taskController.getAllTasksByUser);
taskRoute.put('/:id', authenticator, taskController.updateTask);

module.exports = taskRoute;