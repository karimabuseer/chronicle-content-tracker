var express = require('express');
var router = express.Router();
var addUserBook = require('../controllers/userBooks/new')
var deleteUserBook = require('../controllers/userBooks/delete')
var updateUserBook = require('../controllers/userBooks/update')
var updateRatingUserBook = require('../controllers/userBooks/updateRating')

router.get('/:id', addUserBook.add);

router.post('/delete', deleteUserBook.delete);

router.post('/update', updateUserBook.updateStatus);

router.post('/updateRating', updateRatingUserBook.updateRating);


module.exports = router;