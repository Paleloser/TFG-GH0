var express = require('express');
var router = express.Router();

const authController = require('../controllers/authentication');

router.all('*', authController.auth);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
