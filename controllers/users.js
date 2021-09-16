const user = require('../models').user;
const bcrypt = require('bcrypt');

module.exports = { 
  sign_up (req, res) {
  try {
    req.session.passport.user;
    res.redirect('/')
  } catch { 
    res.render('users/new', { 
      title: 'Sign Up'
    })
  }
  },

  add (req, res) {
    var hash = bcrypt.hashSync(req.body.password, 8);
    console.log(bcrypt.compareSync(req.body.password, hash))
    return user
    
      .create({
        user_name: req.body.username,
        email: req.body.email,
        encrypted_password: hash
      })
      .then((user) => req.login(user,(err) => {
        console.log("success");
      }))
      .then(() => { res.redirect('/')})
      .catch((error) => res.status(400).send(error));
    }
};

