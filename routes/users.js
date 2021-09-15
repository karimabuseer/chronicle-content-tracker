var express = require('express');
var router = express.Router();
var users = require('../controllers/users.js')
const usersBook = require('../controllers/userBooks/index')


/* GET users listing. */
router.get('/new', users.sign_up);
router.post('/', users.add)
router.put('/:id', users.sign_up)
router.delete('/:id', users.sign_up)
router.get('/:id/books', usersBook.books)

module.exports = router;
