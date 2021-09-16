const usersBook = require('../../models').users_book;
module.exports = {
  updateStatus (req, res) { 
    return usersBook
    .update(
      { status: req.body.status },
      { where: {
        user_id: req.session.passport.user,
        id: req.body.book_id }
      })
    .then(() => res.redirect(`/users/${req.session.passport.user}/books`))
    .catch((error) => res.status(400).send(error));
    }
};