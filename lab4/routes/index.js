var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Family' });
  res.render('david', { title: 'David'});
  res.render('steph', { title: 'Steph'});
  res.render('don', { title: 'Don'});
  res.render('diana', { title: 'Diana'})
});

module.exports = router;
