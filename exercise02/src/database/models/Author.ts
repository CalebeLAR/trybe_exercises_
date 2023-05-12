import { Model, INTEGER, STRING } from 'sequelize';
import Book from './Book';
import db from '.';

class Author extends Model {
  declare id: number;
  declare name: string;
};

Author.init({
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: INTEGER,
    },
    name: {
      allowNull: false,
      type: STRING
    }
  }, {
    sequelize: db,
    modelName: 'authors',
    timestamps: false,
  });

Author.hasMany(Book, { foreignKey: 'authorId', as: 'author' })

export default Author;

