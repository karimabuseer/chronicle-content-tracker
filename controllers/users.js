const user = require('../models').user;
module.exports = { 
  sign_up (req, res) {
  res.render('users/new', { 
    title: 'Sign Up'
  })
  },

  index (req, res) {
    return user
      .findOne({
        where: {
          id: req.session.passport.user
        }
      })
      .then((user) => 
    res.render('users/index', { 
      username: user.user_name,
      user_id: user.id,
      email: user.email
    })
  )
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
    return user
    .update(
      {user_name: req.body.username },
      { where: {
        id: req.session.passport.user }
      })
      .then(() => res.redirect(`/users/${req.session.passport.user}`))
      .catch((error) => res.status(400).send(error));
    }
  };
