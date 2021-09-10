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
      users_book.belongsTo(models.user, {
        foreignKey: 'id',
        as: 'User_id'
      });
      users_book.belongsTo(models.book, {
        foreignKey: 'id',
        as: 'Book_id'
      });
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