'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.users_book, {
        foreignKey: 'id',
        as: 'user_books'
      });
    }
  };
  user.init({
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    encrypted_password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};