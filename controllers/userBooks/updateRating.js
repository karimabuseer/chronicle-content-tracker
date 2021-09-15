const usersBook = require('../../models').users_book;
module.exports = {
    
  updateRating (req, res) {
    return usersBook
    .update(
      { rating: req.body.rating },
      { where: {
        user_id: req.session.passport.user,
        id: req.body.book_id }
      })
    .then(() => res.redirect(`/users/${req.session.passport.user}/books`))
    .catch((error) => res.status(400).send(error));
    }
};