var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var username = process.argv[2];
  var watchedDirectory = process.argv[3];
  var ipAddress = req.header('x-forwarded-for') || req.connection.remoteAddress;
  model.setWatchedDirectory(watchedDirectory);
  res.render('index', { username : username, ip : ipAddress });
});

module.exports = router;
