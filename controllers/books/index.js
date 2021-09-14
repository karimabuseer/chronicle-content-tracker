const usersBook = require('../../models').users_book;

exports.books = function(req, res, next) {
  res.render("books/index");
};
