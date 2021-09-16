var express = require('express');
var router = express.Router();
var addUserMovie = require('../controllers/userMovies/new')
var deleteUserMovie = require('../controllers/userMovies/delete')
var updateUserMovie = require('../controllers/userMovies/update')


router.get('/:id', addUserMovie.add);

router.post('/delete', deleteUserMovie.delete);

router.post('/update', updateUserMovie.updateStatus);

router.post('/updateRating', updateUserMovie.updateRating);


module.exports = router;