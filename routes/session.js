var express = require('express');
var router = express.Router();
var session = require('../controllers/session.js')


/* GET session listing. */
router.get('/', session.login);
/* POST session */
router.post('/new', session.verify);

module.exports = router;
