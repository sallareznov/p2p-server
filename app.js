var express = require('express');
var app = express();
var chokidar = require('chokidar');

chokidar.watch('model/data/', {ignored: /[\/\\]\./}).on('all', function(event, path) {
  console.log(event, path);
});

var watcher = chokidar.watch('file, dir, glob, or array', {
  ignored: /[\/\\]\./,
  persistent: true
});

// Something to use when events are received.
var log = console.log.bind(console);

// Add event listeners.
watcher.on('add', function(path) {
  log('File', path, 'has been added');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.set('views', './views');
app.set('view engine', 'jade');

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
