exports.session = function(req, res, next) {
  res.render('session/new', { 
    title: 'Log In' 
  });
};
