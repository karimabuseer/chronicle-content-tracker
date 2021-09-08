var express = require('express');
var router = express.Router();
var session = require('../controllers/session.js')


/* GET session listing. */
router.get('/', session.session);
/* POST session */
router.post('/new', session.session);

module.exports = router;
