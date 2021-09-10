var express = require('express');
var router = express.Router();
var bookList = require('../controllers/books/index.js')
var addBook = require('../controllers/books/new.js') 
var removeBook = require('../controllers/books/remove.js') 

/* GET home page. */
router.get('/', bookList.books);

router.get('/new', addBook.add_book);

router.post('/add', addBook.add);

router.delete('/', removeBook.remove);

module.exports = router; 