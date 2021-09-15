var express = require('express');
var router = express.Router();
var session = require('../controllers/session.js')
const passport = require('passport');



/* GET session listing. */
router.get('/new', session.login);
router.get('/logout', function(req, res){
  req.flash("flash", "You have succefully logged out")
  req.session.passport = undefined 
  res.redirect('/');
});
/* POST session */
router.post('/', 
  passport.authenticate('local', { failureRedirect: '/session/new', failureFlash: true } 
    ),
    (req, res) => {
      req.flash("success", `Succesfully logged in. Welcome back, ${req.user.user_name}!`);
      res.redirect("/");
    });
module.exports = router;

// successRedirect: '/' ,