const usersBook = require('../../models').users_book;

exports.books = function(req, res, next) {
  res.render('books/index', { 
    title: 'Book Search',
    user: req.session.passport.user
  })
};
