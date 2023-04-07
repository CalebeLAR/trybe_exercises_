const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log(PORT)

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));