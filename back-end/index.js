const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3001;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));

module.exports = app;
