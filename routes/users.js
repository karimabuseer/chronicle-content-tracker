const { Router } = require('express'); //Can this line be deleted?
var express = require('express');
var router = express.Router();
var users = require('../controllers/users.js')


/* GET users listing. */
router.get('/', users.users);
router.get('/new', users.users);
router.post('/', users.users)
router.put('/:id', users.users)
router.delete('/:id', users.users)

module.exports = router;
