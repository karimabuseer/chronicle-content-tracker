var express = require('express');
var router = express.Router();
var users = require('../controllers/users.js')


/* GET users listing. */
router.get('/', users.users);

router.get('/new', users.users);

module.exports = router;
