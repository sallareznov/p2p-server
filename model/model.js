var chokidar = require('chokidar');
var repository = require('./repository');
var path = require('path');
var watcher = null;

function getFiles() {
  return repository.getFiles();
}

function setWatchedDirectory(watchedDirectory) {
  var chokidarArguments = { ignored : /[\/\\]\./, persistent : true };
  watcher = chokidar.watch(watchedDirectory, chokidarArguments);
  initWatcherEvents();
}

function initWatcherEvents() {
  watcher.on('add', function(filepath) {
    console.log('File ' + filepath + ' has been added');
    repository.addFile(path.relative(process.argv[3], filepath));
  });
  watcher.on('change', function(filepath) {
    console.log('File ' + filepath + ' has been changed');
  });
  watcher.on('unlink', function(filepath) {
    console.log('File ' + filepath + ' has been removed');
    repository.removeFile(path.relative(process.argv[3], filepath));
  });
  watcher.on('addDir', function(filepath) {
    console.log('Directory ' + filepath + ' has been added');
  });
  watcher.on('unlinkDir', function(filepath) {
    console.log('Directory ' + filepath + ' has been added');
  });
  watcher.on('unlink', function(filepath) {
    console.log('Error happened : ' + error)
  });
}

exports.getFiles = getFiles;
exports.setWatchedDirectory = setWatchedDirectory;
exports.initWatcherEvents = initWatcherEvents;
