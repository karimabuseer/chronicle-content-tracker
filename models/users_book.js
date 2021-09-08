'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users_books.belongsTo(models.user, {
        foreignKey: 'id',
        as: 'user_id'
      });
      users_books.belongsTo(models.books, {
        foreignKey: 'id',
        as: 'books_id'
    }
  };
  users_book.init({
    user_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_book',
  });
  return users_book;
};