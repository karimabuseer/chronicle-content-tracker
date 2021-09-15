const usersMovie = require('../../models').users_movie;
module.exports = { 
  add (req, res) {
    return usersMovie
    .create({
        user_id: req.session.passport.user,
        // movie_id: req.params.id
        status: 'Unread'
      })
    .then(() => res.redirect(`/users/${req.session.passport.user}/books`))
    .catch((error) => res.status(400).send(error));
  }
};