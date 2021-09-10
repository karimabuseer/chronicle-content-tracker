var express = require('express');
var router = express.Router();
var session = require('../controllers/session.js')
const passport = require('passport');



/* GET session listing. */
router.get('/new', session.login);
/* POST session */
router.post('/', 
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/new' } 
    ));
module.exports = router;

