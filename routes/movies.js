var express = require('express');
var router = express.Router();
var movieController = require('../controllers/movies/new.js')

/* GET  to movies homepage. */
router.get('/', movieController.add_movie);

router.get('/new', movieController.add_movie);

router.post('/', movieController.addMovie);

router.get('/api/:movie', movieController.search);



module.exports = router;