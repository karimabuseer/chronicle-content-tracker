const book = require('../../models').book;
module.exports = { 
  add_book (res) {
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
    .then(() => res.redirect("/books"))
    .catch((error) => res.status(400).send(error));
  },
};