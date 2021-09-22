var express = require('express');
var router = express.Router();
var bookList = require('../controllers/books/index.js')
var addBook = require('../controllers/books/new.js')

/* GET home page. */
router.get('/', bookList.books);

router.post('/', addBook.addBook);

router.post('/add', addBook.delete);

router.post('/api', bookList.search)

module.exports = router;