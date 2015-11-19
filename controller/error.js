var express = require('express');
var router = express.Router();

var error404 = function(req, res, next) {
  console.log('here');
  res.send('404: Page not Found', 404);
  next();
};

router.get('/403', function(req, res, next){
  // trigger a 403 error
  var err = new Error('not allowed!');
  err.status = 403;
  next(err);
});

router.get('/500', function(req, res, next){
  // trigger a generic (500) error
  next(new Error('keyboard cat!'));
});

module.exports = router;
