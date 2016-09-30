var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Family' });
});

router.get('/david', function(req, res, next){
  res.render('david', { title: 'David'});
});

router.get('/steph', function(req,res, next){
  res.render('steph', { title: 'Steph'});
});

router.get('/shane', function(req,res, next){
  res.render('shane', { title: 'Shane'});
});

router.get('/don', function(req,res, next){
  res.render('don', { title: 'Don'});
});

router.get('/diana', function(req,res, next){
  res.render('diana', { title: 'Diana'});
});

module.exports = router;
