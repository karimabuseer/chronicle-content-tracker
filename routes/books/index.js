var express = require('express');
var router = express.Router();
var books = require('../../controllers/books/index.js')
/* GET home page. */
router.get('/books', books.books);

module.exports = router;