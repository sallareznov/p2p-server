var chokidar = require('chokidar');
var events = require('events');
var watcher = null;

function setWatchedDirectory(watchedDirectory) {
  var chokidarArguments = { ignored : /[\/\\]\./, persistent : true };
  watcher = chokidar.watch(watchedDirectory, chokidarArguments);
  initWatcherEvents();
}

function initWatcherEvents() {
  watcher.on('add', function(path) {
    console.log('File ' + path + ' has been added');
  });
  watcher.on('change', function(path) {
    console.log('File ' + path + ' has been changed');
  });
  watcher.on('unlink', function(path) {
    console.log('File ' + path + ' has been removed');
  });
  watcher.on('addDir', function(path) {
    console.log('Directory ' + path + ' has been added');
  });
  watcher.on('unlinkDir', function(path) {
    console.log('Directory ' + path + ' has been added');
  });
  watcher.on('unlink', function(path) {
    console.log('Error happened : ' + error)
  });
}

exports.setWatchedDirectory = setWatchedDirectory;
exports.initWatcherEvents = initWatcherEvents;
