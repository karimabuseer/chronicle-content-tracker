var express = require('express');
var router = express.Router();
var bookList = require('../controllers/books/index.js')
var addBook = require('../controllers/books/new.js')

/* GET home page. */
router.get('/', bookList.books);

router.get('/new', addBook.add_book);

router.post('/', addBook.add);

module.exports = router;