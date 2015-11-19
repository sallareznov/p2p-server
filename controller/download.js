var express = require('express');
var router = express.Router();

router.get('/download/:filename', function(req, res) {
  var filename = req.params.filename;
  var options = {
    root: __dirname + '/model/data',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  res.sendFile(filename, options);
});

module.exports = router;
