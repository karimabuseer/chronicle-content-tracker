var express = require('express');
var router = express.Router();
var session = require('../controllers/session.js')
const passport = require('passport');



/* GET session listing. */
router.get('/new', session.login);
router.get('/logout', function(req, res){
  console.log(req.session.passport.user)
  req.session.passport = undefined 
  res.redirect('/');
});
/* POST session */
router.post('/', 
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/session/new', failureFlash: true } 
    ));
module.exports = router;

