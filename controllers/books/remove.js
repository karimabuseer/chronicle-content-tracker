const book = require('../../models').book;
module.exports = { 

  remove_book (req, res, next) {
    res.render('books', { 
      title: 'Delete Book'
  })
  },

  remove (req, res) {
    return book
      .destroy({
        book_title: req.body.title,
        book_author: req.body.author
      })
      .then(() => res.redirect("/books"))
      .catch((error) => res.status(400).send(error));
    },
}
