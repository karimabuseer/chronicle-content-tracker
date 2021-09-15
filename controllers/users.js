const user = require('../models').user;
module.exports = { 
  sign_up (req, res) {
  res.render('users/new', { 
    title: 'Sign Up'
  })
  },

  index (req, res) {
    res.render('users/index', { 
      title: 'Profile',
      user_id: req.session.passport.user
  })
  },

  add (req, res) {
  return user
    .create({
      user_name: req.body.username,
      email: req.body.email,
      encrypted_password: req.body.password
    })
    .then((user) => res.render('users/new', { 
      title: 'Sign Up'
    }))
    .catch((error) => res.status(400).send(error));
  },

  updateUsername(req, res){
    console.log(req.body.username)
    console.log(req.session.passport.user)
    return user
    .update(
      {user_name: req.body.username },
      { where: {
        id: req.session.passport.user }
      })
      .then(() => res.render('users/index'))
      .catch((error) => res.status(400).send(error));
    }
  };
