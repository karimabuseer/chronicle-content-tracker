const usersBook = require('../../models').users_book;
module.exports = {
  delete (req, res) {
    console.log(req.params)
    return usersBook
    .destroy({
      where: {
        user_id: req.session.passport.user,
        id: req.body.book_id,
        }
      })
    .then(() => res.redirect("/"))
    .catch((error) => res.status(400).send(error));
  }
};