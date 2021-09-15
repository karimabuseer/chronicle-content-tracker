var express = require('express');
var router = express.Router();
var addUserMovie = require('../controllers/userMovies/new')



router.get('/:id', addUserMovie.add);


module.exports = router;