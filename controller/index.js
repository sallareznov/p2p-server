var express = require('express');
var router = express.Router();
var list = require('./list');
var download = require('./download');
var error = require('./error');

router.use('/', list);
router.use('/download', download);

module.exports = router;
