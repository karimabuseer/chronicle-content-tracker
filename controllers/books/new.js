const book = require('../../models').book;
module.exports = { 
  add_book (req, res, next) {
    res.render('books/new', { 
      title: 'Add Book'
  })
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