var express = require('express');
var router = express.Router();
var session = require('../controllers/session.js')
// var passport = require('../config/passport/passport')
const passport = require('passport');



/* GET session listing. */
router.get('/new', session.login);
/* POST session */
router.post('/', 
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/new' } 
    ));
/* might need this later - working user being passed into cookies, but login fail goes to passport's
default 401 error page 
function (req, res) {
  if (req.user) {
    console.log('the session is' + req.session.passport.user)
    res.redirect('/users/' + req.user.user_name)
  } else {
    return res.redirect('/session/new')
  }
} */
module.exports = router;

