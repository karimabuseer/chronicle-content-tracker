const user = require('../models').user;

module.exports = { 
  login (req, res, next) {
    res.render('session/new', { 
      title: 'Log In' 
    });
  }, 
};
