const usersMovie = require('../../models').users_movie;
module.exports = {
  updateStatus (req, res) { 
    return usersMovie
    .update(
      { status: req.body.status },
      { where: {
        user_id: req.session.passport.user,
        id: req.body.movie_id }
      })
    .then(() => console.log(req.body.status), res.redirect(`/users/${req.session.passport.user}/movies`))
    .catch((error) => res.status(400).send(error));
    },
    
    updateRating (req, res) {
      return usersMovie
      .update(
        { rating: req.body.rating },
        { where: {
          user_id: req.session.passport.user,
          id: req.body.movie_id }
        })
      .then(() => res.redirect(`/users/${req.session.passport.user}/movies`))
      .catch((error) => res.status(400).send(error));
      }
};