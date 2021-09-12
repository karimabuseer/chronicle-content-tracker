const movie = require('../../models').movie;
module.exports = { 
  add_movie (req, res, next) {
    res.render('movies/new', { 
      title: 'Add Book'
  })
  },

  add (req, res) {
  return movie
    .create({
      movie_title: req.body.title,
      movie_director: req.body.director
    })
    .then(() => res.redirect("/movies"))
    .catch((error) => res.status(400).send(error));
  },
};
