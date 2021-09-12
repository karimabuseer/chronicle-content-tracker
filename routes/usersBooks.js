var express = require('express');
var router = express.Router();
var addUserBook = require('../controllers/userBooks/new')

router.get('/:id', addUserBook.add);

module.exports = router;