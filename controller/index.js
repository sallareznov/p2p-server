var express = require('express');
var router = express.Router();
var list = require('./list');
var view = require('./view');
var download = require('./download');
var test = require('./test');

router.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

router.get('/view/:filename(*)', view);
router.get('/download/:filename(*)', download);
router.get('/test', test);
router.get('/', list);

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

router.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

module.exports = router;
