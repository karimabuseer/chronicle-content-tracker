const usersBook = require('../../models').users_book;
module.exports = { 
  add (req, res) {
    return usersBook
    .create({
        user_id: req.session.passport.user,
        book_id: req.params.id,
        status: 'Unread',
      })
    .then(() => res.redirect(`/users/${req.session.passport.user}/books`))
    .catch((error) => res.status(400).send(error));
  }
};