'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      authorId: {
        field: 'author_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'authors',
          key: 'id'
        }
      },
      genreId: {
        field: 'genre_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
          key: 'id'
        }
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('books');
  },
};
