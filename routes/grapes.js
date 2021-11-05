var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('grapes', { title: 'Search Results by Grapes' });
});

module.exports = router;
