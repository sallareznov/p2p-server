var express = require('express');
var app = express();
var database = require('./database');

app.get('/', function (req, res) {
  res.send('Hello World!');
  database.getAllDatas();
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
