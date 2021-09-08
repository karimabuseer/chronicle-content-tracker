const { Router } = require('express'); //Can this line be deleted?
var express = require('express');
var router = express.Router();
var users = require('../controllers/users.js')

/* GET users listing. */
router.get('/new', users.sign_up);
router.post('/', users.add)
router.put('/:id', users.sign_up)
router.delete('/:id', users.sign_up)

module.exports = router;
