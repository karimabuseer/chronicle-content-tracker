const user = require('../models').user;

module.exports = { 
  login (req, res, next) {
    res.render('session/new', { 
      title: 'Log In' 
    });
  }, 

  verify (req, res, next) {
    const current_user = user.findOne({ where: { email: req.body.email } });
    return current_user
    .then(current_user => current_user.dataValues)
    .then((userData) => res.render('users/new', {
      title: userData.id, 
      email: userData.email
    })) 
  }
};