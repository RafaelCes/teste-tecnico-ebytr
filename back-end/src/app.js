const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');
const taskRoute = require('./routes/taskRoute');
const error = require('./middlewares/error');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use('/users', userRoute);
app.use('/login', loginRoute);
app.use('/tasks', taskRoute);

app.use(error);

module.exports = app;