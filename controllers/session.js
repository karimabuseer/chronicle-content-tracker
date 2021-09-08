const user = require('../models').user;

module.exports = { 
  login (req, res, next) {
    res.render('session/new', { 
      title: 'Log In' 
    });
  }, 

  verify (req, res, next) {
    const current_user = user.findOne({ where: { email: req.body.email } });
    console.log('we are in verify')
    console.log(req.body)
    return current_user
    .then(current_user => console.log(current_user))
  }
};