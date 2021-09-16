var express = require('express');
var router = express.Router();
var addMovie = require('../controllers/movies/new.js')

/* GET  to movies homepage. */
router.get('/', addMovie.add_movie);

router.get('/new', addMovie.add_movie);

router.post('/', addMovie.addMovie);



module.exports = router;