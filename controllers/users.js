const user = require('../models').user;
const bcrypt = require('bcrypt');

module.exports = {

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
      },
      
    updatePassword(req, res){
      console.log("Password under here!")
      console.log(req.body.password)
      console.log(req.session.passport.user)
      return user
      .update(
        {encrypted_password: req.body.password },
        { where: {
          id: req.session.passport.user }
        })
        .then(() => res.redirect(`/users/${req.session.passport.user}`))
        .catch((error) => res.status(400).send(error));
      },

    deleteUser (req, res) {
      console.log('I am in delete page')
      return user
      .destroy({
        where: {
          id: req.session.passport.user,
          }
        })
      .then(() => res.redirect("/session/new"))
      .catch((error) => res.status(400).send(error));
    },

    deletePage (req, res) {
      console.log('I am in delete page')
      res.render("users/delete")
    } 
};

