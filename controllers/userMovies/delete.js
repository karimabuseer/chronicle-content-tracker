const usersMovie = require('../../models').users_movie;
module.exports = {
  delete (req, res) {
    return usersMovie
    .destroy({
      where: {
        user_id: req.session.passport.user,
        id: req.body.movie_id,
        }
      })
    .then(() => res.redirect(`/users/${req.session.passport.user}/movies`))
    .catch((error) => res.status(400).send(error));
  }
};