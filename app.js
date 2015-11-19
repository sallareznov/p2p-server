var express = require('express');
var app = express();
var model = require('./model/model');

// Something to use when events are received.
var log = console.log.bind(console);

app.get('/', function (req, res) {
  var username = process.argv[2];
  var watchedDirectory = process.argv[3];
  // TODO handle validity of arguments
  var ipAddress = req.header('x-forwarded-for') || req.connection.remoteAddress;
  model.setWatchedDirectory(watchedDirectory);
  res.render('index', { username : username, ip : ipAddress });
});

app.set('views', './views');
app.set('view engine', 'jade');

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
