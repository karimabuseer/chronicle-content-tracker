var express = require('express');
var router = express.Router();
var session = require('../controllers/session.js')
// var passport = require('../config/passport/passport')
const passport = require('passport');



/* GET session listing. */
router.get('/', session.login);
/* POST session */
router.post('/new', passport.authenticate('local'), function (req, res) { res.redirect('/users/' + req.user.user_name);});

// app.post('/login',
// passport.authenticate('local'),
// function(req, res) {
//   // If this function gets called, authentication was successful.
//   // `req.user` contains the authenticated user.
//   res.redirect('/users/' + req.user.username);
// });

module.exports = router;

