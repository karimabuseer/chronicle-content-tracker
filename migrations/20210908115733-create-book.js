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
      book_title: {
        type: Sequelize.STRING
      },
      book_author: {
        type: Sequelize.STRING
      },
      book_genre: {
        type: Sequelize.STRING
      },
      book_isbn: {
        type: Sequelize.STRING
      },
      publishing_date: {
        type: Sequelize.DATE
      },
      cover_art: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};