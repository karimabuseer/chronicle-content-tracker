exports.users = function(req, res, next) {
  res.render('users/new', { 
    title: 'Sign Up' 
  });
};

