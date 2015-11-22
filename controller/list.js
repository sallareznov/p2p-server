var fs = require('fs');
var path = require('path');
var walk = require('fs-walk');
var model = require('../model/model');

function list(req, res) {
  var username = process.argv[2];
  var watchedDirectory = process.argv[3];
  var dirname = path.join(__dirname, '..', watchedDirectory);
  res.render('index', { username : username, content : model.getFiles() });
}

module.exports = list;
