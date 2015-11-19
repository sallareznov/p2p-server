var express = require('express');
var app = express();
var model = require('./model/model');
var index = require('./controller/index');
var username = process.argv[2];

app.set('views', './views');
app.set('view engine', 'jade');

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

app.use('/', index);
