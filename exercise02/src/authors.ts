import Author from './database/models/Author';
import Book from './database/models/Book';

(async () => {
  const authors = await Author.findAll();
  console.table(authors.map((author) => author.toJSON()));
  
  process.exit(0);
})();