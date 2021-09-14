const book = require('../../models').book;
module.exports = {

  add_book (req, res, next) {
    try { 
      res.render('books/new', {
        user_id: req.session.passport.user, 
        title: 'Add Book'
      })
    } catch { 
      res.redirect('/session/new')
    }
  },

  add (req, res) {
  return book
    .create({
      book_title: req.body.title,
      book_author: req.body.author
    })
    .then((book) => res.redirect(`/usersBooks/${book.id}`))
    .catch((error) => res.status(400).send(error));
  },
};