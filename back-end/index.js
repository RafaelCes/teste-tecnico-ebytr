const express = require('express');

const userRoute = require('./src/routes/userRoute')

const app = express();

app.use(express.json());

const PORT = 3001;

app.use('/users', userRoute);

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));

module.exports = app;
