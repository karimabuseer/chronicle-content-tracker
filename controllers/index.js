const User = require('../models').user;

exports.index = function(req, res, next) {
 try {
  return User
  .findOne({ where: { id: req.session.passport.user } })
  .then( (user) => {
    res.render('index', { 
      user: user.dataValues.user_name,
      message: req.flash('success')
    })
  })
  }
  catch {
    res.render('landing', {
      title: 'Chronicle'
    })
  }
};


