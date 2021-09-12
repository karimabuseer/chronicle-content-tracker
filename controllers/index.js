const User = require('../models').user;

exports.index = function(req, res, next) {
 try {
  return User
  .findOne({ where: { id: req.session.passport.user } })
  .then( (user) => { 
    res.render('index', { 
      title: user.dataValues.user_name
    })
  })
  }
  catch {
    res.redirect('/session/new' )
  }
};


