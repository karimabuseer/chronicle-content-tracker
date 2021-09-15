const user = require('../models').user;
module.exports = { 
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
    }
  };