var express = require('express');
var router = express.Router();
var session = require('../controllers/session.js')
// var passport = require('../config/passport/passport')
const passport = require('passport');



/* GET session listing. */
router.get('/new', session.login);
/* POST session */
router.post('/', 
  passport.authenticate('local'), 
    function (req, res) {
      if (req.user) {
        res.redirect('/users/' + req.user.user_name)
      } else {
        return res.redirect('/session/new')
      }
    } );

module.exports = router;

