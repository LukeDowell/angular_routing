/**
 * Created by lukedowell on 8/17/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/*', function(req, res, next) {
    var file = res.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;