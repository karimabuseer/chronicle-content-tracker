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
        user = user.dataValues
        console.log(user)
        if (!user) {
          console.log('Incorrect username')
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.encrypted_password != password) {
          console.log('incorrect password')
          return done(null, false, { message: 'Incorrect password.' });
        }
        ('everyone is happy')
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