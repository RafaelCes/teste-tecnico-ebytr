const express = require('express');

const userRoute = require('./src/routes/userRoute');
const loginRoute = require('./src/routes/loginRoute');
const taskRoute = require('./src/routes/taskRoute');
const error = require('./src/middlewares/error');

const app = express();

app.use(express.json());

const PORT = 3001;

app.use('/users', userRoute);
app.use('/login', loginRoute);
app.use('/tasks', taskRoute);

app.use(error);

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));

module.exports = app;
