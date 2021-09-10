var express = require('express');
var router = express.Router();
var movies = require('../controllers/movies.js')
console.log('hello')
console.log(movies)
/* GET  to movies homepage. */
router.get('/movies', movies.movies);

module.exports = router;