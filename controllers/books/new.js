exports.books = function(req, res, next) {
  res.render('books/new', { 
    title: 'Add Book' 
  });
};