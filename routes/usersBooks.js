var express = require('express');
var router = express.Router();
var addUserBook = require('../controllers/userBooks/new')
var deleteUserBook = require('../controllers/userBooks/delete')

router.get('/:id', addUserBook.add);

router.delete('/:id', deleteUserBook.delete);

module.exports = router;