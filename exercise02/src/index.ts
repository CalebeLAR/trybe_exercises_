import sequelize from 'sequelize';
import Author from './database/models/Author';
import Book from './database/models/Book';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      // as: 'books',
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
    ],
    group: 'authors.name',
    order: sequelize.fn('COUNT', sequelize.col('books.id')),
    raw: true,
    
  });

  console.log(data);
  process.exit(0);
})();