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
      book_author: req.body.author,
      cover_art: req.body.image,
      book_isbn: req.body.isbn
    })
    .then((book) => res.redirect(`/usersBooks/${book.id}`))
    .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return users_book
      .findByPk(req.params.book_id)
      
      .then(users_book => {
        return users_book
          .destroy()
          .then(() => res.redirect("/books"))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};