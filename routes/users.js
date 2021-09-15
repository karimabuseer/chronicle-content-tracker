var express = require('express');
var router = express.Router();
var users = require('../controllers/users.js')
var delete_user = require('../controllers/delete_user.js')
var user_password = require('../controllers/user_password.js')

/* GET users listing. */
router.get('/new', users.sign_up);
router.post('/', users.add)
router.get('/:id', users.index)
router.post('/delete', delete_user.deleteUser)
router.post('/update', users.updateUsername)
router.post('/updateP', user_password.updatePassword)
router.get('/delete', delete_user.deletePage)

module.exports = router;
