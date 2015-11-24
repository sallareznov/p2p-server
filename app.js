var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var model = require('./model/model');
var index = require('./controller/index');

var app = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(8000, '0.0.0.0', function () {
  var host = server.address().address;
  var port = server.address().port;
  var watchedDirectory = process.argv[3];

  console.log('Example app listening at http://%s:%s', host, port);
  model.setWatchedDirectory(watchedDirectory);
});

app.use('/', index);
