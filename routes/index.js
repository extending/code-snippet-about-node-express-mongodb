var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express2' });
});

router.get('/test', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('999999')
});

module.exports = router;
