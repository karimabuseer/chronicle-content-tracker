'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  books.init({
    book_title: DataTypes.STRING,
    book_author: DataTypes.STRING,
    book_genre: DataTypes.STRING,
    book_isbn: DataTypes.INTEGER,
    publishing_date: DataTypes.DATE,
    cover_art: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'books',
  });
  return books;
};