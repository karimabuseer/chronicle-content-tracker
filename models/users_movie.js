'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      users_movie.belongsTo(models.user, {
        foreignKey: 'id',
        as: 'User_id'
      });
      users_movie.belongsTo(models.movie, {
        foreignKey: 'id',
        as: 'Movie_id'
      });
    }
};
  users_movie.init({
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_movie',
  });
  return users_movie;
};