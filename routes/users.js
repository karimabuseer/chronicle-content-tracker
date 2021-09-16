var express = require('express');
var router = express.Router();
var users = require('../controllers/users.js')
const usersBook = require('../controllers/userBooks/index')
const movieList = require('../controllers/userMovies/index.js')
const delete_user = require('../controllers/delete_user.js')
const delete_page = require('../controllers/delete_page.js')
const user_password = require('../controllers/user_password.js')

/* GET users listing. */
router.get('/new', users.sign_up);
router.post('/', users.add)
router.put('/:id', users.sign_up)
router.delete('/:id', users.sign_up)
router.get('/:id/books', usersBook.books)
router.get('/:id/movies', movieList.movies)
router.get('/deletePage', users.deletePage)
router.get('/:id', users.index)
router.post('/delete', users.deleteUser)
router.post('/update', users.updateUsername)
router.post('/updateP', users.updatePassword)

module.exports = router;
