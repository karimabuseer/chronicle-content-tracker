const User = require('../models').user;

exports.index = function(req, res, next) {
 return User
  .findOne({ where: { id: req.session.passport.user } })
  .then( (user) => { 
    res.render('index', { 
      title: user
    });
    
  })
 try {
   console.log(req.session.passport.user)
    // const getUser = async (req) => { 
    //   user = await User.findOne({ where: { id: req.session.passport.user } })
    //   dv = user.dataValues
    //   return dv
    // }
    // user = getUser(req)
    // userPromise = User.findOne({ where: { id: req.session.passport.user } }).then(function(user) { return user })
    getUser = async (req) => User.findOne({ where: { id: req.session.passport.user } }).then((user) => {return user} )
    user = getUser(req)
    // user = userPromise.dataValues
  }
  catch {
    user = 'Noodle gang'
  }
  console.log(user)
  res.render('index', { 
    title: user
  });
};
