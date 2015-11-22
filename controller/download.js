var path = require('path');

function download(req, res) {
  var filename = path.join(__dirname, '..', process.argv[3], req.params.filename);
  res.download(filename);
}

module.exports = download;
