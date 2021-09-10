// var bCrypt = require('bcrypt-nodejs');  

module.exports = function(passport, user) {
  const User = require('../../models').user;
  var LocalStrategy = require('passport-local').Strategy;

  passport.use(new LocalStrategy({ 
    usernameField: 'email',
    passwordField: 'password'},
    function(username, password, done) {
      console.log('we in local strat')
      console.log(username)
      console.log(password)
      
      User.findOne({ where: { email: username } }).then(function (user) {
        if (!user) {
          return done(null, user, { message: 'Incorrect username.' });
        }
        user = user.dataValues
        if (user.encrypted_password != password) {
          user = user.dataValues
          return done(null, user, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
      
    }
  ));
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
    
    
};