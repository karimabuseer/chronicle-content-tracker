'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      movie.hasMany(models.users_movie, {
        foreignKey: 'id',
        as: 'user_movie_id',
      });
    }
  };
  movie.init({
    movie_title: DataTypes.STRING,
    movie_director: DataTypes.STRING,
    movie_genre: DataTypes.STRING,
    release_date: DataTypes.DATE,
    cover_art: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};