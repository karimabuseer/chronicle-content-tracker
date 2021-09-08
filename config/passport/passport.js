var bCrypt = require('bcrypt-nodejs');  

module.exports = function(passport, user) {
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;

  passport.use('local-signup', new LocalStrategy(
 
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
 
));
};