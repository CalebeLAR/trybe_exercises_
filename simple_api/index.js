const express = require('express');
const BooksController = require('./src/controllers/book.controller'); 

const app = express();
const PORT = process.env.PORT || 3000;
console.log(PORT)

app.use(express.json());
// ex05
app.get('/books', BooksController.getAll)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));