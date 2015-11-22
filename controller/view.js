var path = require('path');

function view(req, res) {
  var filename = req.params.filename;
  var options = {
    root: path.join(__dirname, '..', process.argv[3]),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  res.sendFile(filename, options);
}

module.exports = view;
