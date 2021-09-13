const usersBook = require('../../models').users_book;

exports.books = function(req, res, next) {
  return usersBook
    .findAll( {
      where: { user_id: req.session.passport.user },
      include: 'book'
     })
    .then((userBooks) => {
      const userBookArray = [];
      userBooks.forEach((userBook) => {
        userBookArray.push(userBook.dataValues)
      })
      return userBookArray
    })
    .then( (userBookArray) => res.render( "books/index", {bookList: userBookArray, title: "Book List"}));
};
