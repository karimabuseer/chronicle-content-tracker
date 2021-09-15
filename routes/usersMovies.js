var express = require('express');
var router = express.Router();
var addUserMovie = require('../controllers/userMovies/new')
var deleteUserMovie = require('../controllers/userBooks/delete')
var updateUserMovie = require('../controllers/userBooks/update')
var updateRatingUserMovie = require('../controllers/userBooks/updateRating')


router.get('/:id', addUserMovie.add);

router.post('/delete', deleteUserMovie.delete);

router.post('/update', updateUserMovie.updateStatus);

router.post('/updateRating', updateRatingUserMovie.updateRating);


module.exports = router;