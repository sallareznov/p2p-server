var express = require('express');
var app = express();
var model = require('./model/model');
var router = express.Router();

app.set('views', './views');
app.set('view engine', 'jade');

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

var error404 = function(req, res, next) {
  console.log('here');
  res.send('404: Page not Found', 404);
  next();
};

router.get('/', function (req, res) {
  var username = process.argv[2];
  var watchedDirectory = process.argv[3];
  // TODO handle validity of arguments
  var ipAddress = req.header('x-forwarded-for') || req.connection.remoteAddress;
  model.setWatchedDirectory(watchedDirectory);
  res.render('index', { username : username, ip : ipAddress });
});

router.get('/download/:filename', function(req, res) {
  var filename = req.params.filename;
  var options = {
    root: __dirname + '/model/data',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  res.sendFile(filename, options);
});

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

app.use('/', router);
