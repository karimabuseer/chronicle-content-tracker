var express = require('express');
var router = express.Router();
var session = require('../controllers/session.js')
// var passport = require('../config/passport/passport')
const passport = require('passport');



/* GET session listing. */
router.get('/', session.login);
/* POST session */
router.post('/new', passport.authenticate('local', { successRedirect: '/success',
            failureRedirect: '/session/new'}));

          //   router.post("/new",
          //   function(req,res,next){
          //     passport.authenticate("local", function(err, user, info){
           
               
           
          //    })(req,res,next); 
          //  })
 

module.exports = router;

