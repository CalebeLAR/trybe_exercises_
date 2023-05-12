import { Model, INTEGER, STRING } from "sequelize";
import Author from "./Author";
import db from '.';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER
  },
  title: {
    allowNull: false,
    type: STRING,
  },
  authorId: {
    // field: 'author_id',
    allowNull: false,
    type: INTEGER,
    references: {
      model: 'authors',
      key: 'id'
    }
  },
  genreId: {
    // field: 'genre_id',
    allowNull: false,
    type: INTEGER,
    references: {
      model: 'genres',
      key: 'id'
    }
  },
},{
  sequelize: db,
  modelName: 'books',
  timestamps: false,
  underscored: true,
});

Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' });

export default Book;