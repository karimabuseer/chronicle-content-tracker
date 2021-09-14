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

  delete(req, res) {
    console.log(req.params)
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