const usersMovie = require('../../models').users_movie;
module.exports = { 
  add (req, res) {
    console.log('we are in add userMovies')
    return usersMovie
    .create({
        user_id: req.session.passport.user,
        movie_id: req.params.id
      })
    .then(() => res.redirect(`/movies`))
    .catch((error) => res.status(400).send(error));
  }
};

