const User = require('../models').user;

exports.index = function(req, res, next) {
 try {
  return User
  .findOne({ where: { id: req.session.passport.user } })
  .then( (user) => {
    console.log(user) 
    res.render('index', { 
      user: user.dataValues.user_name
    })
  })
  }
  catch {
    res.render('landing', {
      title: 'Chronicle'
    })
  }
};


