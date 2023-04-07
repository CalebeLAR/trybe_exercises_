const { bookModel } = require('../models');

const getAll = async () => {
  const books = await bookModel.findAll();
  return books;
};

module.exports = {
  getAll,
};