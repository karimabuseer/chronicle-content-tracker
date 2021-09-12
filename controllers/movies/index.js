const movie = require('../../models').movie;

exports.movies = function(req, res, next) {
  return movie
    .findAll()
    .then( (movies) => {
      const movieList = [];
      movies.forEach( (movie) => {
        movieList.push(movie.dataValues)
      })
      return movieList;
    })
    .then( (movieList) => res.render( "movies/index", {movieList: movieList, title: "Movies"}));
};