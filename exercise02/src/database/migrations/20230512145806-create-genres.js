'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('genres', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('genres');
  }
};
