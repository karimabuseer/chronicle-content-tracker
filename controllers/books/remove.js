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
        WHERE: { id:req.body.id}
      })
      .then(() => res.redirect("/books"))
      .catch((error) => res.status(400).send(error));
    },
}
