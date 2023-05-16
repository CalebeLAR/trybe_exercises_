import Author from './database/models/Author';
import Book from './database/models/Book';

(async () => {
  const authors = await Book.findAll({
    // include: { model: Author, as: 'author'},
  });
  console.table(authors.map((Book) => Book.toJSON()));

  process.exit(0);
})();