const user = require('../models').user;

module.exports = { 
  login (req, res, next) {
    try {
      req.session.passport.user;
      res.redirect('/')
    } catch { 
      res.render('session/new', { 
        title: 'Log In'
      })
    };
  }, 
};
