const bcrypt = require('bcrypt');

module.exports = function(passport, user) {
  const User = require('../../models').user;
  var LocalStrategy = require('passport-local').Strategy;

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'},
    function(username, password, done) { 
      User.findOne({ where: { email: username } }).then(function (user) {
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        user = user.dataValues
        if (!bcrypt.compareSync(password, user.encrypted_password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user, { message: 'Succesfully logged in.' });
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