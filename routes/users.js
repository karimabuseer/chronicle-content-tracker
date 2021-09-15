var express = require('express');
var router = express.Router();
var users = require('../controllers/users.js')
var delete_user = require('../controllers/delete_user.js')

/* GET users listing. */
router.get('/new', users.sign_up);
router.post('/', users.add)
router.get('/:id', users.index)
router.post('/delete', delete_user.deleteUser)
router.post('/update', users.updateUsername)

module.exports = router;
