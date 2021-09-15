const user = require('../models').user;

module.exports = { 
  login (req, res, next) {
    try {
      req.session.passport.user;
      res.redirect('/')
    } catch { 
      res.render('session/new', { 
        message: req.flash('error'),
       title: 'Log In' 
     })
    };
  }, 
  
  logout (req, res, next) {
    return user
    .findOne({ where: { email: req.body.email } })
    .then(current_user => current_user.dataValues)
    .then((userData) => res.render('users/new', {
      title: userData.id, 
      email: userData.email
    })) 
  }
};
