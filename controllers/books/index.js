exports.books = function(req, res, next) {
  res.render('books', { 
    title: 'Books List' 
  });
};