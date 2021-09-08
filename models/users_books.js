'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users_books.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user_id'
      });
      users_books.belongsTo(models.books, {
        foreignKey: 'books_id',
        as: 'books_id'
      });
    }
  };
  users_books.init({
    user_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_books',
  });
  return users_books;
};