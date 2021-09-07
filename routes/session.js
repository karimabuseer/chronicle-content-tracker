var express = require('express');
var router = express.Router();
var session = require('../controllers/session.js')


/* GET session listing. */
router.get('/', session.session);
router.get('/new', session.session);

module.exports = router;
